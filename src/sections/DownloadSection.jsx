import React from 'react';
import { Download, FileText, Video, Globe, ExternalLink, Play, } from 'lucide-react';
import { s01a5es, s01a5pt } from "../../public/docs/index.js";
import { s01a5fr_tn, s01a5ru_tn, s01a5ro_tn, s01a5en_tn, s01a5es_tn, s01a5pt_tn, s01a5ar_tn, s02a5pt_tn, generic_video_tn, } from "../../public/thumbnails/index.js";
import { saynetes_diabete_anim_barriere_langue_01, } from "../../public/videos/index.js";

const DownloadSection = () => {
    const resources = [
        {
            id: 11,
            title: "Diabète - Chez le médecin.",
            subtitle: "Annonce de la maladie chez le Médecin traitant.",
            description: "Une saynète pour communiquer et informer sur le diabète de type 2.",
            thumbnail: s01a5fr_tn, // Thumbnail
            type: "PDF",
            size: "1.2 Mo",
            url: "https://hammer-marteau.com/drive/",
            isExternal: false,
            languages: ["FR"]
        },
        {
            id: 12,
            title: "Диабет - У врача.",
            subtitle: "АНОНСИРОВАНИЕ ЗАБОЛЕВАНИЯ ЛЕЧАЩИМ ВРАЧОМ.",
            description: "Сценка сообщающая и информирующаяо диабете 2ого типа.",
            thumbnail: s01a5ru_tn, // Thumbnail
            type: "PDF",
            size: "1.2 Mo",
            url: "https://hammer-marteau.com/drive/",
            isExternal: false,
            languages: ["RU"]
        },
        {
            id: 13,
            title: "Diabet - La doctor.",
            subtitle: "ANUNȚUL BOLII DE CĂTRE MEDICUL DE FAMILIE.",
            description: "O scenetă despre tehnicile de comunicare și informare asupra diabetului de tip 2.",
            thumbnail: s01a5ro_tn, // Thumbnail
            type: "PDF",
            size: "1.2 Mo",
            url: "https://hammer-marteau.com/drive/",
            isExternal: false,
            languages: ["RO"]
        },
        {
            id: 14,
            title: "Diabetes - At the doctor's.",
            subtitle: "AANNOUNCEMENT OF THE ILLNESS BY THE GP.",
            description: "A sketch to communicate and inform about type 2 diabetes.",
            thumbnail: s01a5en_tn, // Thumbnail
            type: "PDF",
            size: "1.2 Mo",
            url: "https://hammer-marteau.com/drive/",
            isExternal: false,
            languages: ["EN"]
        },
        {
            id: 15,
            title: "Diabetes - En el médico.",
            subtitle: "El anuncio de la enfermedad por el médico de familia.",
            description: "Un sketch (sainete) para comunicar e informar sobre la diabetes tipo 2",
            thumbnail: s01a5es_tn, // Thumbnail
            type: "PDF",
            size: "1.2 Mo",
            url: s01a5es,
            isExternal: false,
            languages: ["ES"]
        },
        {
            id: 16,
            title: "Diabetes - No médico.",
            subtitle: "O ANÚNCIO DE DOENÇA PELO MÉDICE DE FAMÍLIA.",
            description: "Uma esquete (sketch) para comunicar e informar sobre a diabetes tipoo 2.",
            thumbnail: s01a5pt_tn, // Thumbnail
            type: "PDF",
            size: "1.2 Mo",
            url: s01a5pt,
            isExternal: false,
            languages: ["PT"]
        },
        {
            id: 17,
            title: "السكري عند الطبيب",
            subtitle: "إعلان المرض من قبل الطبيب المعالج",
            description: "مشهد قصير للتواصل والتوعية حول مرض السكري من النوع الثاني",
            thumbnail: s01a5ar_tn, // Thumbnail
            type: "PDF",
            size: "1.2 Mo",
            url: s01a5pt,
            isExternal: false,
            languages: ["AR"]
        },
        {
            id: 26,
            title: "Diabetes - Na farmácia.",
            subtitle: "Entrega dos medicamentos na farmácia, explicação da tomada do tratamento. ",
            description: "Uma esquete (sketch) para comunicar e informar sobre a diabetes tipoo 2.",
            thumbnail: s02a5pt_tn, // Thumbnail
            type: "PDF",
            size: "1.2 Mo",
            url: s01a5pt,
            isExternal: false,
            languages: ["PT"]
        },
        {
            id: 31,
            title: "Tutoriel Les Saynètes (B.mp4)",
            subtitle: "Diabetes: El anuncio de la enfermedad por el médico de familia.",
            description: "Vidéo explicative sur la mise en place d'ateliers multilingues.",
            thumbnail: generic_video_tn, // Thumbnail
            type: "MP4",
            size: "45 Mo",
            url: "https://drive.google.com/drive/folders/1vOFkMm7d3DeThTrgVCl8uaSj0ewIS8Qw?usp=share_link",
            isExternal: false,
            languages: ["FR"]
        },
        {
            id: 32,
            title: "Ressources Partenaires (Cloud)",
            subtitle: "Diabetes: El anuncio de la enfermedad por el médico de familia.",
            description: "Accès au dossier partagé Google Drive mis à jour par l'ASAMLA.",
            thumbnail: "/assets/thumbnails/s1ar102.webp", // Thumbnail
            type: "Drive",
            size: "Variable",
            url: "https://hammer-marteau.com/drive/1NG_DwQH0FMc2qTLMXRMoyPIf1fTVeQad/view?usp=share_link",
            isExternal: true,
            languages: ["Multi"]
        },
        {
            id: 33,
            title: "Ressources Partenaires (Cloud)",
            subtitle: "Diabetes: El anuncio de la enfermedad por el médico de familia.",
            description: "Accès au dossier partagé Google Drive mis à jour par l'ASAMLA.",
            thumbnail: "/assets/thumbnails/s1ar102.webp", // Thumbnail
            type: "Drive",
            size: "Variable",
            url: "https://drive.google.com/file/d/1NG_DwQH0FMc2qTLMXRMoyPIf1fTVeQad/view?usp=sharing",
            isExternal: true,
            languages: ["Multi"]
        }
    ];
    return (
        <section className="py-16 bg-brand-bg">
            <div className="max-w-6xl mx-auto px-6"> {/* max-w-6xl pour resserrer la section */}
                <div className="mb-16 border-l-4 border-brand-primary pl-6">
                    <h2 className="text-3xl font-bold text-brand-heading mb-4 italic font-secondary">
                        Outils & Alliances
                    </h2>
                    <p className="text-brand-body max-w-2xl leading-relaxed">
                        Nous concevons des outils d'expression numérique pour briser la barrière de la langue.
                        Retrouvez ici nos ressources en libre accès et nos espaces collaboratifs.
                    </p>
                </div>
                {/* Grille adaptative : 1 col mobile, 2 col tablette, 3 col desktop max */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resources.map((res) => (
                        <div key={res.id} className="group bg-brand-surface border border-brand-border rounded-sm overflow-hidden flex flex-col shadow-custom-card hover:border-brand-primary transition-all duration-300" dir="auto">

                            {/* CONTENEUR IMAGE : Ratio 16:9 forcé */}
                            <div className="relative aspect-video bg-slate-200 dark:bg-slate-800 overflow-hidden">
                                <img
                                    src={res.thumbnail}
                                    alt={res.title}
                                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${res.type === 'PDF' ? 'object-contain p-4' : 'object-cover'}`}
                                />

                                <div className="absolute top-3 left-3 bg-white/95 dark:bg-slate-900/95 p-2 rounded-full shadow-xl border border-brand-border/50 z-20">
                                    {res.type === 'MP4' ? (
                                        <Video size={18} className="text-brand-primary" />
                                    ) : (
                                        <FileText size={18} className="text-brand-primary" />
                                    )}
                                </div>

                                {/* Le poids du fichier en badge (très important pour le téléchargement) */}
                                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-sm">
                                    <span className="text-[9px] font-mono text-white uppercase tracking-widest">{res.size}</span>
                                </div>
                            </div>

                            {/* CONTENU TEXTE : Plus compact */}
                            <div className="p-5 flex flex-col flex-grow" dir="auto">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-base font-bold text-brand-heading leading-tight group-hover:text-brand-primary transition-colors">
                                        {res.title}
                                    </h3>
                                </div>
                                <div className="flex justify-items-start items-start mb-2">
                                    <h3 className="text-sm font-medium text-brand-heading leading-tight px-12 group-hover:text-brand-primary transition-colors">
                                        {res.subtitle}
                                    </h3>
                                </div>

                                <p className="text-xs text-brand-body mb-4 px-12 line-clamp-2 leading-relaxed">
                                    {res.description}
                                </p>

                                <div className="flex items-center gap-2 mb-5 mt-auto opacity-70">
                                    <Globe size={12} className="text-brand-muted" />
                                    <span className="text-[10px] text-brand-muted uppercase tracking-wider">
                                        {res.languages.join(' • ')}
                                    </span>
                                </div>

                                {/* BOUTON : Taille réduite (py-2.5 au lieu de py-4) */}
                                <a
                                    href={res.url}
                                    download={!res.isExternal}
                                    target={res.isExternal ? "_blank" : "_self"}
                                    rel={res.isExternal ? "noopener noreferrer" : ""}
                                    className="flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-hover text-white py-2.5 rounded-sm transition-all text-xs font-semibold"
                                >
                                    {res.isExternal ? <ExternalLink size={14} /> : <Download size={14} />}
                                    {res.isExternal ? 'Consulter' : 'Télécharger'}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default DownloadSection;