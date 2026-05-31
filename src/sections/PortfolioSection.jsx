import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const PortfolioSection = () => {
  const { t } = useTranslation();
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    // Récupération du catalogue
    fetch('/portfolio/index.json')
      .then((res) => res.json())
      .then((data) => {
        // Filtre rigoureux pour ne garder que les projets mis en avant (featured: true)
        const selected = data.filter((project) => project.featured === true);
        setFeaturedProjects(selected);
      })
      .catch((err) => console.error("Erreur de chargement du portfolio", err));
  }, []);

  return (
    <section className="py-24 bg-brand-bg transition-colors relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête de section */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-primary block mb-3 font-bold">
            {t('portfolio_subheading', 'Impact Numérique & Social')}
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-primary uppercase tracking-tighter text-brand-heading">
            {t('portfolio_heading', 'Nos Projets Clés')}
          </h2>
        </div>

        {/* Grille de vignettes filtrées (Projets "Featured") */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative border border-brand-border bg-brand-surface/20 hover:bg-brand-surface/40 p-8 flex flex-col justify-between transition-all duration-300 rounded-sm cursor-pointer"
              onClick={() => window.location.href = `/portfolio/${project.slug}`}
            >
              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 border border-brand-border text-brand-body opacity-70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Titre */}
                <h3 className="text-xl font-bold font-primary uppercase tracking-tight text-brand-heading mb-3 group-hover:text-brand-primary transition-colors flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-primary" />
                </h3>

                {/* Description */}
                <p className="text-xs font-mono leading-relaxed text-brand-body opacity-80">
                  {project.description}
                </p>
              </div>

              {/* Ligne esthétique réactive */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-accent group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bouton d'ancrage vers la page complète du Portfolio */}
        <div className="flex justify-center md:justify-start">
          <motion.a
            href="/portfolio"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-brand-heading hover:text-brand-primary font-bold transition-colors group"
          >
            {t('portfolio_see_all', 'Découvrir toutes nos réalisations')}
            <ArrowRight size={14} className="text-brand-accent group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;