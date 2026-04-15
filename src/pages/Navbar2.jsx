import React, { useState } from 'react';
import { Globe, ChevronDown, Sun, Moon, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';
import { logo_true_red, hm_logo_transparent_white, hm_logo_transparent_dark, } from "../assets/img/index.js";


const Navbar = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const { isDark, toggleTheme } = useTheme();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' }
  ];

  return (
    <nav className="fixed w-full z-[100] bg-main-bg/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {isDark ? (
            <img src={hm_logo_transparent_white} alt="Logo Hammer & Marteau" className="w-10 h-10 rounded-sm transition-transform group-hover:-rotate-90" />
          ) : (
            <img src={hm_logo_transparent_dark} alt="Logo Hammer & Marteau" className="w-10 h-10 rounded-sm transition-transform group-hover:-rotate-90" />
          )}
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] leading-tight text-sub-text hidden md:block">Hammer & Marteau</span><br/>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 text-sub-text hover:text-brand-red transition-colors">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div className="relative">
            <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-md text-xs font-bold uppercase">
              <Globe size={14} /> {i18n.language.split('-')[0]} <ChevronDown size={12} />
            </button>
            <AnimatePresence>
              {isLangOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 mt-2 w-40 bg-main-bg border border-slate-200 dark:border-slate-800 shadow-xl rounded-lg overflow-hidden">
                  {languages.map((l) => (
                    <button key={l.code} onClick={() => { i18n.changeLanguage(l.code); setIsLangOpen(false); }} className="w-full text-left px-4 py-3 text-xs hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-brand-hover transition-colors">
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button className="hidden sm:flex items-center gap-2 bg-brand-primary text-brand-bg px-5 py-2 rounded-md text-xs font-bold uppercase tracking-wider hover:bg-brand-hover transition-all">
            Contact <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;