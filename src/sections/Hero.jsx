import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import TypeWriterEffect from "../components/TypeWriterEffect";

const Hero = () => {
    const { t } = useTranslation();
    
    return (
        <section className="min-h-screen flex flex-col pt-20 overflow-hidden bg-brand-bg transition-colors relative">
            {/* Background Grid Pattern - Opacité réduite pour moins faire "Bureau d'étude" */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10" />
            
            {/* Conteneur Central : On utilise flex-grow pour pousser le marquee vers le bas */}
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex-grow flex flex-col justify-center items-center text-center">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    {/* Correction lisibilité : passage en text-brand-body au lieu de muted */}
                    <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.5em] text-brand-body font-bold opacity-80">
                        {t('corp_submark_1')} ● {t('corp_submark_2')} ● {t('corp_submark_3')}
                    </span>
                </motion.div>

                {/* Titre Principal : Harmonisé avec la Navbar (Font Primary / Bold) */}
                <div className="mb-12">
                    <h1 className="text-6xl md:text-9xl font-black text-brand-heading leading-none font-primary uppercase tracking-tighter">
                        Hammer<br />& Marteau
                    </h1>
                    <div className="text-xl md:text-2xl text-brand-primary mt-8 font-primary font-medium uppercase tracking-[0.2em]">
                        Expression Numérique
                    </div>
                </div>

                {/* Skills : Centrés pour rompre le côté rigide */}
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 text-[10px] md:text-xs font-mono text-brand-body mb-4">
                    {['skill_1', 'skill_2', 'skill_3', 'skill_4'].map((skill, index) => (
                        <div key={index} className="flex items-center gap-3 group">
                            <span className="group-hover:text-brand-primary transition-colors">{t(skill)}</span>
                            <Check size={14} style={{ color: 'var(--accent)' }} strokeWidth={3} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Marquee Footer : Positionné tout en bas avec mt-auto */}
            <div className="mt-auto border-y border-brand-border py-4 overflow-hidden bg-brand-surface/30 backdrop-blur-sm">
                <div className="flex whitespace-nowrap animate-marquee gap-12">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex gap-12 items-center font-mono text-[10px] uppercase tracking-[0.3em] text-brand-muted">
                            <span>{t('skill_1')}</span> <span>●</span>
                            <span>{t('skill_2')}</span> <span>●</span>
                            <span>Tailwind CSS</span> <span>●</span>
                            <span>Story Telling</span> <span>●</span>
                            <span>Artificial Intelligence</span> <span>●</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;