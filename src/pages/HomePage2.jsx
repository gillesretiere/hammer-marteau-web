import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import TypeWriterEffect from "../components/TypeWriterEffect";
import { logo_true_red, hm_logo_transparent_white, hm_logo_transparent_dark } from "../assets/img/index.js";
import { useTheme } from '../hooks/useTheme';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const { t } = useTranslation();
    const { isDark } = useTheme();

    return (
        <section className="min-h-screen flex flex-col pt-20 overflow-hidden bg-brand-bg transition-colors relative">
            {/* Maillage / Grille technique arrière-plan - Épurée pour correspondre au style Bento/Mosaïque */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10" />

            {/* Conteneur Central de la Hero Section */}
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex-grow flex flex-col justify-center items-center text-center md:text-left md:items-start w-full">
                
                {/* Logo d'agence réactif selon le mode de lumière */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <img 
                        src={isDark ? hm_logo_transparent_white : hm_logo_transparent_dark} 
                        alt="Hammer & Marteau" 
                        className="h-12 w-auto object-contain brightness-110"
                    />
                </motion.div>

                {/* Accroche / UVP de l'artisanat numérique */}
                <h1 className="text-4xl md:text-7xl font-black font-primary uppercase tracking-tighter text-brand-heading leading-none mb-6 max-w-4xl">
                    {t('hero_title', "Conception numérique pour l'inclusion")}
                </h1>

                {/* Effet machine à écrire pour dynamiser les expertises médico-sociales */}
                <div className="h-8 mb-8 text-brand-primary font-mono text-sm tracking-wider uppercase font-bold">
                    <TypeWriterEffect 
                        words={[
                            t('type_mediation', '// Alliances Allophones'),
                            t('type_ux', '// UX Inclusive & Accessibilité'),
                            t('type_health', '// Solutions de Santé Sociale')
                        ]} 
                    />
                </div>

                {/* Description Courte Institutionnelle */}
                <p className="max-w-2xl text-xs font-mono leading-relaxed text-brand-body opacity-80 mb-12">
                    Nous ne bâtissons pas des sites vitrines génériques. Hammer & Marteau est un atelier d'expression numérique. En collaboration étroite avec l'ARS et l'ASAMLA, nous forgeons des outils sur-mesure pour briser définitivement la barrière de la langue dans l'écosystème de la santé.
                </p>

                {/* Menu de navigation contextuel de la Hero de l'agence */}
                <div className="border-t border-brand-border/60 pt-8 w-full max-w-xl">
                    <div className="flex flex-wrap items-center gap-y-4 gap-x-2 text-xs font-mono">
                        
                        <span className="group flex items-center gap-1 transition-colors">
                            <Link
                                to="/"
                                className="text-xs font-mono uppercase tracking-widest text-brand-body hover:text-brand-primary font-bold transition-colors"
                            >
                                [ Atelier ]
                            </Link>
                        </span>
                        <ArrowUpRight size={14} className="text-brand-accent mr-4" strokeWidth={3} />
                        
                        <span className="group flex items-center gap-1 transition-colors">
                            <Link
                                to="/blog"
                                className="text-xs font-mono uppercase tracking-widest text-brand-body hover:text-brand-primary transition-colors"
                            >
                                Carnet / Blog
                            </Link>
                        </span>
                        <ArrowUpRight size={14} className="text-brand-accent mr-4" strokeWidth={3} />
                        
                        {/* Mise à jour du lien : Pointe désormais vers la route globale de notre Mosaïque/Portfolio */}
                        <span className="group flex items-center gap-1 transition-colors">
                            <Link
                                to="/portfolio"
                                className="text-xs font-mono uppercase tracking-widest text-brand-body hover:text-brand-primary transition-colors"
                            >
                                Applications
                            </Link>
                        </span>
                        <ArrowUpRight size={14} className="text-brand-accent" strokeWidth={3} />

                    </div>
                </div>

            </div>
        </section>
    );
};

export default HomePage;