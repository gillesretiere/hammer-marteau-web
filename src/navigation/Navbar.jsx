import React, { useState } from 'react';
import { Sun, Moon, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';
import { Link, useLocation } from 'react-router-dom';
import { hm_logo_transparent_white, hm_logo_transparent_dark } from '../assets/img/index.js';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();

  const languages = [
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' },
  ];

  const navLinks = [
    { to: '/',          label: 'Accueil',   hash: '' },
    { to: '/#projets',  label: 'Projets',   hash: 'projets' },
    { to: '/blog',      label: 'Blog',      hash: '' },
    { to: '/#contact',  label: 'Contact',   hash: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-bg/90 backdrop-blur-md border-b border-brand-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border border-brand-border"
            style={{ background: 'var(--accent2)' }}
          >
            <img
              src={hm_logo_transparent_white}
              alt="H&M"
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="font-primary font-semibold text-sm tracking-wide text-brand-heading hidden sm:block">
            Hammer<span className="font-light text-brand-muted mx-0.5">&amp;</span>Marteau
          </span>
        </Link>

        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-7 list-none">
          {navLinks.map(({ to, label }) => {
            const isActive = to === '/blog'
              ? location.pathname === '/blog'
              : location.pathname === '/' && !to.includes('/blog');
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? 'text-brand-heading' : 'text-brand-muted hover:text-brand-heading'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          {/* Toggle thème */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-brand-muted hover:text-brand-heading hover:bg-brand-card transition-all"
            title={isDark ? 'Mode clair' : 'Mode sombre'}
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Sélecteur langue */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-brand-border text-xs font-semibold text-brand-muted hover:text-brand-heading hover:border-brand-primary transition-all uppercase"
            >
              <Globe size={13} />
              {i18n.language.split('-')[0]}
              <ChevronDown size={11} />
            </button>
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute right-0 mt-2 w-36 bg-brand-surface border border-brand-border rounded-xl shadow-card overflow-hidden z-50"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { i18n.changeLanguage(l.code); setIsLangOpen(false); }}
                      className="w-full text-left px-4 py-2.5 text-xs font-medium text-brand-body hover:bg-brand-card hover:text-brand-primary transition-colors"
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <Link
            to="/#contact"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white transition-all hover:opacity-90"
            style={{ background: 'var(--primary)' }}
          >
            Travailler ensemble →
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
