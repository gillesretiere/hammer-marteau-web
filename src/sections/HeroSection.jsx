import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <section id="top" className="py-24 relative overflow-hidden bg-brand-bg">
    {/* Halos décoratifs */}
    <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(70,143,175,.08) 0%, transparent 65%)', transform: 'translate(30%,-30%)' }} />
    <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(60,9,108,.06) 0%, transparent 65%)', transform: 'translate(-30%,30%)' }} />

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        className="max-w-3xl"
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-7">
          <span className="w-6 h-px" style={{ background: 'var(--primary)' }} />
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
            Micro-agence IA / SI
          </span>
        </div>

        {/* Titre */}
        <h1 className="font-primary text-5xl md:text-6xl font-bold leading-[1.06] tracking-tight text-brand-heading mb-6">
          Expression numérique<br />
          <em className="font-secondary font-normal not-italic" style={{ color: 'var(--primary)', fontStyle: 'italic' }}>
            Perspectives &amp; Réalités.
          </em>
        </h1>

        {/* Corps éditorial */}
        <p className="text-brand-muted leading-relaxed max-w-2xl mb-3" style={{ fontSize: '15px' }}>
          Ce site propose des réflexions sur le thème de l'IA ainsi que des réalisations, projets et liens présentant un intérêt subjectif.
        </p>
        <p className="text-brand-muted leading-relaxed max-w-2xl mb-3" style={{ fontSize: '15px' }}>
          L'IA est un sujet trop vaste pour être abordé dans sa globalité. Le choix a été fait de l'approcher selon un prisme restreint — celui de la relation entre l'humain et l'IA : comment l'appréhender, quel rôle pour le créateur face à l'IA, comment évoluer dans un monde en pleine mutation.
        </p>
        <p className="text-brand-muted leading-relaxed max-w-2xl mb-10" style={{ fontSize: '15px', fontStyle: 'italic' }}>
          Ligne de conduite : Écrire avec l'IA — concilier la logique mathématique et l'illogisme romantique.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <a
            href="#projets"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: 'var(--primary)' }}
          >
            Découvrir les projets →
          </a>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border border-brand-border text-brand-heading hover:border-brand-primary hover:text-brand-primary transition-all"
          >
            Lire le blog
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
