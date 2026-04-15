import React, { useState } from 'react';
import { Globe, ChevronDown, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme'; // On utilise le hook directement
import { logo_true_red, hm_logo_transparent_white, hm_logo_transparent_dark, } from "../assets/img/index.js";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { isDark, toggleTheme } = useTheme(); // Récupération du contexte global
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' }
  ];

  const currentLangLabel = languages.find(l => l.code === i18n.language.split('-')[0])?.label || 'FR';

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          {isDark ? (
            <img src={hm_logo_transparent_white} alt="Logo Hammer & Marteau" className="w-10 h-10 rounded-sm transition-transform group-hover:-rotate-90" />
          ) : (
            <img src={hm_logo_transparent_dark} alt="Logo Hammer & Marteau" className="w-10 h-10 rounded-sm transition-transform group-hover:-rotate-90" />
          )}
          <span className="font-semibold text-slate-900 dark:text-white tracking-tight">
            Hammer & Marteau
          </span>
        </div>

        {/* Actions : Thème + Langues */}
        <div className="flex items-center gap-6">

          {/* Toggle Mode Sombre */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
            aria-label="Changer de thème"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Sélecteur de Langue */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-2 rounded-md border border-slate-200 dark:border-slate-700 hover:border-red-200 transition-all"
            >
              <Globe size={16} className="text-slate-500" />
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase">
                {i18n.language.split('-')[0]}
              </span>
              <ChevronDown size={14} className={`text-slate-400 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-xl rounded-lg overflow-hidden"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        i18n.changeLanguage(l.code);
                        setIsLangOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-red-600 transition-colors border-b last:border-0 border-slate-50 dark:border-slate-700"
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;