import React from 'react';
import { Link } from 'react-router-dom';
import { hm_logo_transparent_white } from '../assets/img/index.js';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-bg border-t border-brand-border mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Grille */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {/* Marque */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--accent2)' }}>
                <img src={hm_logo_transparent_white} alt="H&M" className="w-5 h-5 object-contain" />
              </div>
              <span className="font-primary font-semibold text-sm text-brand-heading">
                Hammer<span className="font-light text-brand-muted mx-0.5">&amp;</span>Marteau
              </span>
            </div>
            <p className="text-xs text-brand-muted leading-relaxed max-w-xs">
              Atelier d'expression numérique — outils spécialisés, écriture, ressources pédagogiques multilingues.
            </p>
          </div>

          {/* Projets */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-4">Projets</h4>
            <ul className="space-y-2.5">
              <li><a href="https://saynetes.fr" target="_blank" rel="noopener noreferrer" className="text-xs text-brand-muted hover:text-brand-heading transition-colors">Saynètes Santé</a></li>
              <li><span className="text-xs text-brand-muted italic">ALTONA (en cours)</span></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              <li><Link to="/blog"     className="text-xs text-brand-muted hover:text-brand-heading transition-colors">Blog</Link></li>
              <li><a href="/#ressources" className="text-xs text-brand-muted hover:text-brand-heading transition-colors">Ressources</a></li>
              <li><a href="/#contact"    className="text-xs text-brand-muted hover:text-brand-heading transition-colors">Contact</a></li>
              <li><Link to="/portfolio"  className="text-xs text-brand-muted hover:text-brand-heading transition-colors">Portfolio</Link></li>
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-brand-muted">
            © {year} Hammer &amp; Marteau · Gilles Retière · Auto-entrepreneur
          </p>
          <div className="flex items-center gap-2">
            {[
              { label: 'in',  href: 'https://linkedin.com' },
              { label: 'gh',  href: 'https://github.com/gillesretiere' },
              { label: '✉',  href: 'mailto:gilles.retiere@gmail.com' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-brand-border flex items-center justify-center text-xs font-bold text-brand-muted hover:border-brand-primary hover:text-brand-primary transition-all">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
