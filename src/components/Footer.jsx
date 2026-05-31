import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Heart, Globe } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-bg border-t border-brand-border py-12 mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Grille principale du Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-brand-border/40">
          
          {/* Colonne 1 : Vision & Mission */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="font-primary font-black uppercase tracking-tight text-brand-heading text-lg">
                Hammer & Marteau
              </span>
              <p className="text-xs font-mono text-brand-body opacity-70 mt-3 leading-relaxed max-w-sm">
                Atelier d'expression numérique et de design inclusif. Nous forgeons des interfaces accessibles pour briser la barrière de la langue en santé.
              </p>
            </div>
          </div>

          {/* Colonne 2 : Alliances Stratégiques & Partenaires */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-brand-primary font-bold mb-4">
              {t('footer_alliances', 'Alliances & Terrains')}
            </h4>
            <ul className="space-y-2 text-xs font-mono text-brand-body opacity-80">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
                ASAMLA — Médiation en Santé
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
                ARS — Accès aux Droits & Inclusion
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
                Laboratoire de Multilinguisme Numérique
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Navigation secondaire / Actions */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-brand-primary font-bold mb-4">
              {t('footer_navigation', 'Navigation Index')}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <a href="/" className="text-brand-body hover:text-brand-primary transition-colors">// Accueil</a>
              <a href="/portfolio" className="text-brand-body hover:text-brand-primary transition-colors">// Portfolio</a>
              <a href="/blog" className="text-brand-body hover:text-brand-primary transition-colors">// Carnet/Blog</a>
              <a href="#contact" className="text-brand-body hover:text-brand-primary transition-colors">// Collaboration</a>
            </div>
          </div>

        </div>

        {/* Ligne de pied : Mentions Légales, Accessibilité & i18n */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-brand-body opacity-60">
          
          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
            <span>© {currentYear} Hammer & Marteau.</span>
            <span className="flex items-center gap-1">
              <Shield size={10} className="text-brand-accent" /> RGPD & Données de Santé Protégées
            </span>
            <span className="flex items-center gap-1">
              <Heart size={10} className="text-brand-primary" /> WCAG 2.1 AA Compliant
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Globe size={12} className="opacity-70" />
            <span>Numérique Social & Solidaire</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;