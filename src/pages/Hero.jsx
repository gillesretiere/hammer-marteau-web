import React, { useState } from 'react';
import { Globe, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';


const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            Micro-Agence Web & IA
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-main leading-[1.1] mb-8">{t('hero_title')}</h1>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
            Concevoir pour <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-slate-900">
              tous les langages.
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
            Nous bâtissons des outils numériques de haute précision. 
            Complexité technique, simplicité d'usage, et une maîtrise totale du 
            <span className="text-slate-900 font-semibold italic"> multilinguisme natif</span> pour les professionnels de santé et l'industrie.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-primary-main text-white px-8 py-4 rounded-md font-medium hover:bg-primary-orange transition-all transform hover:-translate-y-1 shadow-lg shadow-slate-200">
              Découvrir nos services
            </button>
            <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-md font-medium hover:bg-slate-50 transition-all">
              Étude de cas : Les Saynètes
            </button>
          </div>
        </div>
      </div>

      {/* Background Decor : Symbolisant les données et les langues */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none select-none overflow-hidden hidden lg:block">
        <div className="text-[10rem] font-bold leading-none flex flex-col gap-4">
          <span>CODE</span>
          <span>DATA</span>
          <span className="text-red-600">HAMMER</span>
          <span>MARTEAU</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;