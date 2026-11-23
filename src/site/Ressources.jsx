import { useEffect, useState } from 'react';

// Ressources d'une fiche projet (livrets, vidéos…), lues dans
// public/portfolio-data/posts/<slug>.json. Sans ce fichier, rien ne s'affiche (HM-10).

// Livrets : les couvertures se ressemblent (même illustration, langue différente).
// Une seule couverture sur 3 colonnes, et la liste des langues à filets sur 9.
const Livrets = ({ elements }) => (
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
    <div className="hidden lg:col-span-3 lg:block">
      <div className="aspect-[5/7] overflow-hidden border border-rule bg-paper-2">
        <img src={elements[0].image} alt="" loading="lazy" className="h-full w-full object-cover" />
      </div>
    </div>
    <ul className="border-t border-rule lg:col-span-9">
      {elements.map((e) => (
        <li key={e.url} className="border-b border-rule">
          <a href={e.url} target="_blank" rel="noopener noreferrer" className="group grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 py-4 sm:grid-cols-9">
            <span className="text-xs uppercase tracking-[0.08em] text-ink-soft sm:col-span-2">{e.langue}</span>
            <span lang={e.lang} dir="auto" className="col-start-1 font-primary text-[17px] font-semibold leading-snug text-ink group-hover:underline group-hover:decoration-accent group-hover:decoration-2 group-hover:underline-offset-4 sm:col-span-5 sm:col-start-auto">
              {e.titre}
            </span>
            <span className="col-start-2 row-span-2 row-start-1 self-center whitespace-nowrap text-sm text-ink-soft sm:col-span-2 sm:col-start-auto sm:row-auto sm:text-right">
              PDF · {e.taille} <span className="text-accent">↓</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// Vidéo : lue sur place si le fichier est sur le serveur (« fichier »), sinon lien externe (« url »).
// « ratio » garde la forme d'origine (« 1/1 » pour le clip carré) ; 16/9 par défaut.
const Video = ({ e }) => {
  const forme = { aspectRatio: e.ratio || '16/9' };
  const legende = (
    <div className="mt-4 border-t border-rule pt-3">
      <p className="font-primary text-xl font-semibold tracking-tight text-ink group-hover:underline group-hover:decoration-accent group-hover:decoration-2 group-hover:underline-offset-4">
        {e.titre}
      </p>
      <p className="mt-1 text-sm text-ink-soft">
        {e.detail}
        {!e.fichier && e.externe && <> · Google Drive <span className="text-accent">↗</span></>}
      </p>
    </div>
  );
  if (e.fichier) {
    return (
      <figure className="flex flex-col">
        {/* preload="none" : rien n'est téléchargé avant que le visiteur lance la lecture. */}
        <video controls preload="none" playsInline poster={e.image} style={forme} className="w-full bg-paper-2 object-cover">
          <source src={e.fichier} type="video/mp4" />
        </video>
        {legende}
      </figure>
    );
  }
  return (
    <a href={e.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col">
      <div style={forme} className="overflow-hidden bg-paper-2">
        <img src={e.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
      </div>
      {legende}
    </a>
  );
};

// Vidéos : 2 par rangée (6 colonnes chacune), comme les cases du portfolio, alignées en haut
// puisqu'elles n'ont pas toutes la même forme.
const Groupe = ({ g }) => (
  <section className="mt-20">
    <div className="rule-strong pb-6 pt-3">
      <h2 className="font-primary text-sm font-semibold uppercase tracking-[0.12em] text-ink">{g.titre}</h2>
    </div>
    {g.intro && <p className="-mt-2 mb-8 max-w-2xl text-[15px] leading-relaxed text-ink-soft">{g.intro}</p>}
    {g.format === 'livret' ? (
      <Livrets elements={g.elements} />
    ) : (
      <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 sm:grid-cols-2">
        {g.elements.map((e) => <Video key={e.fichier || e.url} e={e} />)}
      </div>
    )}
  </section>
);

const Ressources = ({ slug }) => {
  const [charge, setCharge] = useState({ slug: null, groupes: null });
  useEffect(() => {
    let vivant = true;
    fetch(`/portfolio-data/posts/${slug}.json`)
      .then((r) => (r.ok && r.headers.get('content-type')?.includes('json') ? r.json() : Promise.reject()))
      .then((d) => vivant && setCharge({ slug, groupes: d.ressources || [] }))
      .catch(() => vivant && setCharge({ slug, groupes: [] }));
    return () => { vivant = false; };
  }, [slug]);
  const groupes = charge.slug === slug ? charge.groupes : null;
  if (!groupes?.length) return null;
  return groupes.map((g) => <Groupe key={g.titre} g={g} />);
};

export default Ressources;
