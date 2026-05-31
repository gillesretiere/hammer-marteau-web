import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Filter } from 'lucide-react';

const PortfolioPage = () => {
  const { t } = useTranslation();
  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [tags, setTags] = useState([]);
  const [activeTag, setActiveTag] = useState('ALL');

  useEffect(() => {
    fetch('/portfolio/index.json')
      .then((res) => res.json())
      .then((data) => {
        setAllProjects(data);
        setFilteredProjects(data);

        const extractedTags = new Set();
        data.forEach(project => project.tags.forEach(tag => extractedTags.add(tag)));
        setTags(['ALL', ...Array.from(extractedTags)]);
      })
      .catch((err) => console.error("Erreur de chargement du catalogue", err));
  }, []);

  const handleFilter = (tag) => {
    setActiveTag(tag);
    if (tag === 'ALL') {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(project => project.tags.includes(tag)));
    }
  };

  return (
    <main className="min-h-screen bg-brand-bg pt-32 pb-24 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête Épuré de la Page */}
        <header className="mb-16 border-b border-brand-border pb-12">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-primary block mb-4 font-bold">
            {t('portfolio_page_sub', 'Registre des Réalisations & Alliances')}
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-primary uppercase tracking-tighter text-brand-heading mb-6">
            {t('portfolio_page_title', 'Index des Projets')}
          </h1>
          <p className="max-w-2xl text-xs font-mono leading-relaxed text-brand-body opacity-70">
            Une vue exhaustive de nos interventions et conceptions numériques dans le champ médico-social.
          </p>
        </header>

        {/* Barre de Filtres Minimaliste */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-brand-border/40">
          <span className="text-[10px] font-mono text-brand-body opacity-50 uppercase tracking-wider mr-4 flex items-center gap-2">
            <Filter size={12} /> Filtrer par axe :
          </span>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleFilter(tag)}
              className={`px-3 py-1 font-mono text-[10px] uppercase tracking-wider transition-all border rounded-sm ${
                activeTag === tag
                  ? 'bg-brand-primary text-brand-bg border-brand-primary font-bold'
                  : 'border-brand-border text-brand-body hover:border-brand-body/60 bg-brand-surface/10'
              }`}
            >
              {tag === 'ALL' ? t('filter_all', 'Tous les projets') : tag}
            </button>
          ))}
        </div>

        {/* Grille Mosaïque Adaptative (Plus de hauteur bloquée à 220px) */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`group relative border border-brand-border bg-brand-surface/10 hover:bg-brand-surface/25 p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 rounded-sm cursor-pointer min-h-[260px] ${project.gridSpan || 'md:col-span-1 md:row-span-1'}`}
                onClick={() => window.location.href = `/portfolio/${project.slug}`}
              >
                {/* Visuel optionnel en arrière-plan discret */}
                {project.imageUrl && (
                  <div className="absolute inset-0 z-0 opacity-5 group-hover:opacity-15 transition-opacity duration-500">
                    <img 
                      src={project.imageUrl} 
                      alt="" 
                      className="w-full h-full object-cover filter grayscale contrast-125"
                    />
                  </div>
                )}

                {/* Contenu de la Carte */}
                <div className="z-10 relative h-full flex flex-col justify-between flex-grow">
                  
                  <div>
                    {/* Tags Ultra-Discrets inspirés de ton image d'exemple */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="text-[9px] font-mono font-light uppercase tracking-[0.2em] text-brand-body opacity-50 group-hover:opacity-80 transition-opacity"
                        >
                          // {tag}
                        </span>
                      ))}
                    </div>

                    {/* Titre */}
                    <h2 className="text-xl md:text-2xl font-bold font-primary uppercase tracking-tight text-brand-heading group-hover:text-brand-primary transition-colors flex items-start justify-between gap-4">
                      <span>{project.title}</span>
                    </h2>
                  </div>

                  {/* Description aérée qui a l'espace pour s'afficher en entier */}
                  <div className="mt-6 flex items-end justify-between gap-4">
                    <p className="text-xs font-mono roaring-relaxed text-brand-body opacity-70 group-hover:opacity-90 transition-opacity max-w-xl">
                      {project.description}
                    </p>
                    <div className="p-1 border border-brand-border rounded-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-1 group-hover:translate-y-0 bg-brand-bg shrink-0">
                      <ArrowUpRight size={14} className="text-brand-primary" />
                    </div>
                  </div>

                </div>

                {/* Soulignement d'accentuation technique au survol */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-primary group-hover:w-full transition-all duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </main>
  );
};

export default PortfolioPage;