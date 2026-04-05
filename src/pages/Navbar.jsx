import React, { useState } from 'react';
import { Globe, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { logo_true_red, } from "../assets/img/index.js";

const Navbar = ({context}) => {
  const [lang, setLang] = useState('FR');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
    { code: 'FR', label: 'Français' },
    { code: 'EN', label: 'English' },
    { code: 'AR', label: 'العربية' }
  ];

  return (
    <nav className="fixed w-full md:w-[90%] z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo HM */}
        <div className="flex items-center gap-2 group cursor-pointer">
          {/*
          <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-sm transition-transform group-hover:-rotate-90">
             <span className="text-white font-bold text-xl">H</span>
          </div>          
          */}
          <img src={logo_true_red} className="w-10 h-10 rounded-sm transition-transform group-hover:-rotate-90"/>
          <span className="font-semibold text-slate-900 tracking-tight text-lg">Hammer & Marteau</span>
        </div>

        {/* Menu & Language Selector */}
        <div className="flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors">Services</a>
          <a href="#expertise" className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors">Expertise</a>
          
          {/* Custom Multi-lang Selector */}
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-md border border-slate-200 hover:border-red-200 transition-all"
              aria-expanded={isLangOpen}
            >
              <Globe size={16} className="text-slate-500" />
              <span className="text-sm font-bold text-slate-800">{lang}</span>
              <ChevronDown size={14} className={`text-slate-400 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-40 bg-white border border-slate-100 shadow-xl rounded-lg overflow-hidden"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setIsLangOpen(false); }}
                      className="w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-red-600 transition-colors border-b last:border-0 border-slate-50"
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
