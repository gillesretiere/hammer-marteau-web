import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import TypeWriterEffect from "../components/TypeWriterEffect";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white dark:bg-brand-dark transition-colors duration-300">
      {/* Background Grid Pattern (Subtil) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-12">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-[1px] bg-brand-red"></div>
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-red font-bold">
              Expertise & Engineering
            </span>
          </motion.div>

          {/* Main Title */}
          <div className="max-w-5xl">
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black leading-[0.9] tracking-tighter text-slate-900 dark:text-white uppercase italic">
              Digital <br />
              <span className="text-brand-red not-italic">
                <TypeWriterEffect words={["Native", "Global", "Multilingual"]} />
              </span>
            </h1>
          </div>

          {/* Description & Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4 items-end">
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              Nous concevons des écosystèmes numériques <span className="text-slate-900 dark:text-white font-medium italic underline decoration-brand-red/30">sans frontières linguistiques</span>. Précision technique, agilité micro-agence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="group flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-brand-red dark:hover:bg-brand-red dark:hover:text-white transition-all shadow-xl shadow-slate-200 dark:shadow-none">
                Nos Projets <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
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
<div className="relative inline-block bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
  <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
    Nous parlons <br />
    <span className="text-sky-500 underline decoration-sky-500/30">
      <TypeWriterEffect words={["le Code", "Data", "العربية", "English"]} />
    </span>
  </h1>
</div>
<section className="bg-orange-500 dark:bg-black p-1">
  <div className="bg-white dark:bg-zinc-900 p-10 border-4 border-black dark:border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
    <h1 className="text-7xl font-black italic uppercase italic">Multilingual is not an option.</h1>
  </div>
</section>
    </section>
  );
};

export default Hero;