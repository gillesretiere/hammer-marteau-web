import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check, ArrowUpRight, } from 'lucide-react';
import TypeWriterEffect from "../components/TypeWriterEffect";
import { logo_true_red, hm_logo_transparent_white, hm_logo_transparent_dark, } from "../assets/img/index.js";
import { useTheme } from '../hooks/useTheme';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const { t } = useTranslation();
    const { isDark, toggleTheme } = useTheme();

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
                        {t('corp_submark_1')} ● {t('corp_submark_2')}
                    </span>
                </motion.div>

                {/* Titre Principal : Harmonisé avec la Navbar (Font Primary / Bold) */}
                <div className="mb-12">

                    <div className="flex items-center justify-center">
                        {isDark ? (
                            <img src={hm_logo_transparent_white} alt="Logo Hammer & Marteau" className="w-20 h-20 rounded-sm transition-transform group-hover:-rotate-90" />
                        ) : (
                            <img src={hm_logo_transparent_dark} alt="Logo Hammer & Marteau" className="w-20 h-20 rounded-sm transition-transform group-hover:-rotate-90" />
                        )}
                    </div>

                    <div className="text-md md:text-xl text-brand-primary mt-6 font-primary font-medium uppercase tracking-[0.2em]">
                        Expression Numérique
                    </div>
                </div>

                {/* Skills : Centrés pour rompre le côté rigide */}
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 text-[10px] md:text-xs font-mono text-brand-body mb-4">

                    <div className="flex items-center gap-3 group">
                        <span className="group-hover:text-brand-primary transition-colors">
                            <Link
                                to="/"
                                className="text-xs font-mono uppercase tracking-widest text-brand-body hover:text-brand-primary transition-colors"
                            >Home</Link>
                        </span>
                        <ArrowUpRight size={14} style={{ color: 'var(--accent)' }} strokeWidth={3} />
                        <span className="ml-4 group-hover:text-brand-primary transition-colors">
                            <Link
                                to="/blog"
                                className="text-xs font-mono uppercase tracking-widest text-brand-body hover:text-brand-primary transition-colors"
                            >Blog</Link>
                        </span>
                        <ArrowUpRight size={14} style={{ color: 'var(--accent)' }} strokeWidth={3} />
                        <span className="ml-4 group-hover:text-brand-primary transition-colors">
                            <Link
                                to="/portfolio"
                                className="text-xs font-mono uppercase tracking-widest text-brand-body hover:text-brand-primary transition-colors"
                            >Applications</Link>
                        </span>
                        <ArrowUpRight size={14} style={{ color: 'var(--accent)' }} strokeWidth={3} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;