import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import TypeWriterEffect from "../components/TypeWriterEffect";


const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="pt-40 pb-20 overflow-hidden bg-main-bg transition-colors">
      {/* Background Grid Pattern (Subtil) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-8">
          <div className="w-10 h-[2px] bg-brand-red"></div>
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-red font-bold">{t('corp_submark')}</span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-black text-brand-bg tracking-tighter uppercase leading-[0.9] mb-10">
          Expression <br />
          <span className="text-brand-primary not-italic">
            Numérique
          </span><br />
          <span className="text-3xl md:text-5xl font-bold text-brand-primary leading-[1.1] mb-8 normal-case tracking-tight">
          </span>
        </h1>
        {/*
        <h1 className="text-5xl md:text-7xl font-bold text-primary-main leading-[1.1] mb-8">{t('hero_title')}</h1>
        */}
        <div className="grid md:grid-cols-2 gap-12 items-end">

          <p className="text-xl text-sub-text leading-relaxed">
            <TypeWriterEffect words={[t('hero_vk_t1'), "Global", "Multilingual"]} />
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-brand-primary text-brand-bg px-8 py-4 rounded-md font-bold uppercase text-xs tracking-widest hover:bg-brand-hover transition-all">
              Nos Services <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Footer (Preuve Technique) */}
      <div className="mt-32 border-y border-slate-100 dark:border-slate-800 py-6 overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
        <div className="flex whitespace-nowrap animate-marquee gap-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-12 items-center font-mono text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-600">
              <span>Next.js & React Expert</span> <span>●</span>
              <span>I18N Architecture</span> <span>●</span>
              <span>Tailwind CSS</span> <span>●</span>
              <span>Health-Tech Compliance</span> <span>●</span>
              <span>Artificial Intelligence</span> <span>●</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;