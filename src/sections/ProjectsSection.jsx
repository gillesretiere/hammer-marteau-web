import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 'saynetes',
    icon: '🎭',
    tag: 'Outil numérique',
    title: 'Saynètes Santé',
    desc: 'Outils pédagogiques multilingues contre la barrière de la langue en médecine. Scénarios interactifs sur le diabète, en partenariat avec ASAMLA et des professionnels de santé, financés par l\'ARS.',
    chips: ['ReactJS', '7 langues'],
    link: 'https://saynetes.fr/',
    external: true,
    color: 'var(--primary)',
    colorBg: 'rgba(70,143,175,.08)',
  },
  {
    id: 'altona',
    icon: '📖',
    tag: 'Roman',
    title: 'ALTONA',
    desc: 'Un roman en cours d\'écriture — projet artistique de longue date, démarré en 2025 lors d\'une semaine de retraite dans les Alpes. Fiction contemporaine co-écrite avec l\'IA.',
    chips: ['Fiction', '¾ rédigé'],
    link: null,
    external: false,
    color: 'var(--accent2)',
    colorBg: 'rgba(60,9,108,.07)',
  },
];

const ProjectsSection = () => (
  <section id="projets" className="py-20 bg-brand-bg border-t border-brand-border">
    <div className="max-w-6xl mx-auto px-6">

      {/* En-tête */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
        <div>
          <span className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--primary)' }}>
            Projets
          </span>
          <h2 className="font-primary text-3xl md:text-4xl font-bold tracking-tight text-brand-heading">
            Deux univers,<br />un même atelier
          </h2>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-brand-border text-brand-heading hover:border-brand-primary hover:text-brand-primary transition-all"
        >
          Parler d'un projet
        </a>
      </div>

      {/* Grille */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5, delay: i * .1 }}
            className="relative group bg-brand-card border border-brand-border rounded-xl p-7 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-card"
          >
            {/* Barre top au hover */}
            <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />

            {/* Icône */}
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
              style={{ background: p.colorBg }}>
              {p.icon}
            </div>

            {/* Tag */}
            <span className="inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border mb-3"
              style={{ borderColor: p.color, color: p.color }}>
              {p.tag}
            </span>

            <h3 className="font-primary text-xl font-bold text-brand-heading mb-3">{p.title}</h3>
            <p className="text-sm text-brand-muted leading-relaxed mb-6">{p.desc}</p>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {p.chips.map(c => (
                  <span key={c} className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border"
                    style={{ borderColor: p.color, color: p.color }}>
                    {c}
                  </span>
                ))}
              </div>
              {p.link ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-bold transition-all"
                  style={{ color: p.color }}>
                  Explorer <ArrowUpRight size={14} />
                </a>
              ) : (
                <span className="text-xs font-bold text-brand-muted italic">En cours</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
