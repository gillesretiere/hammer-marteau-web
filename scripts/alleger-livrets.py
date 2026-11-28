# Usage : python3 scripts/alleger-livrets.py livrets-source/SNDB-01-FR.pdf livrets-out/SNDB-01-FR.pdf  (HM-10)
# Nécessite PyMuPDF (pip install pymupdf).
# Allège un PDF en ne touchant qu'aux flux d'images : rééchantillonnage vers ~150 dpi et JPEG q80.
# Le contenu des pages, les polices et les masques de transparence restent intacts.
import fitz, sys, os
src, out = sys.argv[1], sys.argv[2]
CIBLE, SEUIL, Q = 150, 190, 80
d = fitz.open(src)
masques = set()
for x in range(1, d.xref_length()):
    if d.xref_is_stream(x):
        t, v = d.xref_get_key(x, 'SMask')
        if t == 'xref': masques.add(int(v.split()[0]))
# dpi effectif : le plus grand affichage de chaque image sur les pages
dpi = {}
for p in d:
    for img in p.get_images(full=True):
        x, w = img[0], img[2]
        for r in p.get_image_rects(x):
            if r.width > 0:
                dpi[x] = min(dpi.get(x, 1e9), w / (r.width / 72))
for x in range(1, d.xref_length()):
    if not d.xref_is_stream(x) or d.xref_get_key(x, 'Subtype')[1] != '/Image' or x in masques:
        continue
    if d.xref_get_key(x, 'ImageMask')[1] == 'true':
        continue
    w = int(d.xref_get_key(x, 'Width')[1]); h = int(d.xref_get_key(x, 'Height')[1])
    eff = dpi.get(x, 300)            # image dans un groupe : on la suppose à 300 dpi
    if eff < SEUIL or max(w, h) < 600:
        continue
    k = CIBLE / eff
    # l'image telle que le PDF la lit (sans le profil ICC du JPEG), et sans son masque,
    # que Pixmap(d, x) mêlerait aux couleurs : on retire le masque le temps du décodage.
    masque = d.xref_get_key(x, 'SMask')
    if masque[0] == 'xref': d.xref_set_key(x, 'SMask', 'null')
    pix = fitz.Pixmap(d, x)
    if masque[0] == 'xref': d.xref_set_key(x, 'SMask', masque[1])
    if pix.alpha: pix = fitz.Pixmap(pix, 0)
    if pix.colorspace is None or pix.colorspace.n not in (1, 3):
        pix = fitz.Pixmap(fitz.csRGB, pix)
    nw, nh = max(1, round(w * k)), max(1, round(h * k))
    pix = fitz.Pixmap(pix, nw, nh, None)
    data = pix.tobytes('jpeg', jpg_quality=Q)
    if len(data) >= len(d.xref_stream_raw(x)):
        continue
    d.update_stream(x, data, compress=False)
    for cle in ('DecodeParms', 'Decode', 'Filter', 'ColorSpace', 'BitsPerComponent', 'Width', 'Height'):
        d.xref_set_key(x, cle, 'null')
    d.xref_set_key(x, 'Filter', '/DCTDecode')
    d.xref_set_key(x, 'ColorSpace', '/DeviceGray' if pix.n == 1 else '/DeviceRGB')
    d.xref_set_key(x, 'BitsPerComponent', '8')
    d.xref_set_key(x, 'Width', str(nw)); d.xref_set_key(x, 'Height', str(nh))
    # le masque de transparence suit l'image, à la même taille, sans perte
    if masque[0] == 'xref':
        mx = int(masque[1].split()[0])
        mp = fitz.Pixmap(d, mx)
        if mp.alpha: mp = fitz.Pixmap(mp, 0)
        mp = fitz.Pixmap(mp, nw, nh, None)
        d.update_stream(mx, mp.samples, compress=True)
        for cle in ('DecodeParms', 'Decode', 'Width', 'Height', 'Matte'):
            d.xref_set_key(mx, cle, 'null')
        d.xref_set_key(mx, 'ColorSpace', '/DeviceGray'); d.xref_set_key(mx, 'BitsPerComponent', '8')
        d.xref_set_key(mx, 'Width', str(nw)); d.xref_set_key(mx, 'Height', str(nh))
d.save(out, garbage=1, deflate=True)
