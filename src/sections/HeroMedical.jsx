import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Check } from 'lucide-react';
import TypeWriterEffect from "../components/TypeWriterEffect";


const Hero = () => {
    const { t } = useTranslation();
    return (
        <section className="pt-40 pb-20 overflow-hidden bg-main-bg transition-colors">
            {/* Background Grid Pattern (Subtil) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div initial={{ opacity: 0.2, x: -800 }} animate={{ opacity: 0.8, x: 0 }} className="flex items-center gap-3 mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-body font-bold">
                        {t('corp_submark_1')}&nbsp;●&nbsp;{t('corp_submark_2')}&nbsp;●&nbsp;{t('corp_submark_3')}
                    </span>
                </motion.div>

                <h1 className="text-6xl md:text-8xl font-black text-brand-body tracking-tighter uppercase leading-[0.9] mb-10">
                    <span className="text-brand-heading not-italic">
                        {t('hero_title_1')}<br />
                    </span>
                    <span className="text-brand-primary not-italic">
                        {t('hero_title_2')}<br />
                    </span>
                </h1>
                <h2 className="text-3xl md:text-5xl font-thin text-brand-heading leading-[0.4] mb-8 normal-case tracking-wide">
                    {t('hero_title_3')}
                </h2>
                        <div className="flex gap-3 items-center justify-center font-mono text-[10px] uppercase tracking-widest text-brand-heading">
                            <span>{t('skill_1')}</span> <span><Check size={16} /></span>
                            <span>{t('skill_2')}</span> <span><Check size={16} /></span>
                            <span>{t('skill_3')}</span> <span><Check size={16} /></span>
                            <span>{t('skill_4')}</span> <span><Check size={16} /></span>
                        </div>
                {/*
        <h1 className="text-5xl md:text-7xl font-bold text-primary-main leading-[1.1] mb-8">{t('hero_title')}</h1>
        */}

            </div>

            {/* Marquee Footer (Preuve Technique) */}
            <div className="mt-32 border-y border-slate-100 dark:border-slate-800 py-6 overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
                <div className="flex whitespace-nowrap animate-marquee gap-12">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex gap-12 items-center font-mono text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-600">
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