import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Navbar2 from './Navbar2'; // 1. Intégration de votre Navbar


const Blog = () => {
  const [postsIndex, setPostsIndex] = useState([]); // Stocke la liste des articles
  const [activePost, setActivePost] = useState(null);
  const [markdownContent, setMarkdownContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingList, setLoadingList] = useState(true);

  // 1. Chargement DYNAMIQUE de la liste des articles au chargement du Blog
  useEffect(() => {
    fetch('/posts/index.json')
      .then((res) => {
        if (!res.ok) throw new Error("Impossible de charger l'index des articles");
        return res.json();
      })
      .then((data) => {
        // Optionnel : trier par date décroissante automatiquement
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPostsIndex(sorted);
        setLoadingList(false);
      })
      .catch((err) => {
        console.error("Erreur index:", err);
        setLoadingList(false);
      });
  }, []);

  // 2. Chargement dynamique du fichier MD de l'article sélectionné
  useEffect(() => {
    if (!activePost) return;

    setLoading(true);
    fetch(`/posts/${activePost.fileName}`)
      .then((res) => {
        if (!res.ok) throw new Error("Fichier Markdown introuvable");
        return res.text();
      })
      .then((text) => {
        // Nettoyage du Front-Matter si présent
        const cleanText = text.replace(/^---[\s\S]*?---/, "");
        setMarkdownContent(cleanText.trim());
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setMarkdownContent("Désolé, impossible de charger cet article.");
        setLoading(false);
      });
  }, [activePost]);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-body transition-colors duration-300 relative">
      {/* Inclusion de la Navbar en haut de page */}
      <Navbar2 />

      {/* Trame de fond graphique */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 pt-40 pb-20 relative z-10">
        <AnimatePresence mode="wait">

          {/* VUE 1 : Lecture de l'article complet */}
          {activePost ? (
            <motion.div
              key="article-view"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-8"
            >
              <button
                onClick={() => { setActivePost(null); setMarkdownContent(""); }}
                className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider opacity-60 hover:opacity-100 transition-opacity mb-8"
              >
                <ArrowLeft size={14} /> Retour aux articles
              </button>

              <header className="border-b border-brand-border pb-6">
                <div className="flex gap-4 text-xs font-mono text-brand-muted mb-3">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {activePost.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {activePost.readingTime}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-brand-heading uppercase tracking-tight font-primary">
                  {activePost.title}
                </h1>
              </header>

              {loading ? (
                <div className="py-12 text-center font-mono text-sm text-brand-muted animate-pulse">
                  Tissage et alignement du texte en cours...
                </div>
              ) : (
                /* Conteneur de rendu du texte brut ou parsé */
                <div className="prose dark:prose-invert max-w-none text-left">
                  <Markdown remarkPlugins={[remarkGfm]}>{markdownContent}</Markdown>

                </div>
              )}
            </motion.div>
          ) : (

            /* VUE 2 : Liste des articles du Blog */
            <motion.div
              key="list-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <header className="mb-20 border-b border-brand-border pb-10">
                <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-brand-body opacity-60 block mb-3">
                  Chroniques & Réflexions
                </span>
                <h1 className="text-5xl md:text-6xl font-black text-brand-heading uppercase tracking-tighter font-primary mb-4">
                  Expressions numériques
                </h1>
                <p className="text-sm text-brand-muted max-w-xl font-mono leading-relaxed">
                  Écrits courts et retours d'expérience sur l'expression numérique, le multilinguisme et l'inclusion en santé numérique.
                </p>
              </header>

              <div className="space-y-16">
                {postsIndex.map ((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group flex flex-col md:flex-row md:items-baseline justify-between gap-6 border-b border-brand-border/40 pb-12"
                  >
                    {/* Métadonnées (Gauche) */}
                    <div className="md:w-1/4 flex flex-row md:flex-col gap-4 text-[11px] font-mono text-brand-muted whitespace-nowrap">
                      <span className="flex items-center gap-2">
                        <Calendar size={12} style={{ color: 'var(--accent)' }} /> {post.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock size={12} /> {post.readingTime}
                      </span>
                    </div>

                    {/* Contenu & CTA (Droite) */}
                    <div className="md:w-3/4 flex flex-col items-start">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map(tag => (
                          <span key={tag} className="text-[9px] font-mono uppercase border border-brand-border px-2 py-0.5 rounded opacity-80">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h2 className="text-2xl md:text-3xl font-black text-brand-heading group-hover:text-brand-primary transition-colors mb-4 font-primary uppercase tracking-tight">
                        {post.title}
                      </h2>

                      <p className="text-sm text-brand-body opacity-90 leading-relaxed mb-6 font-mono">
                        {post.excerpt}
                      </p>

                      <button
                        onClick={() => setActivePost(post)}
                        className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold group-hover:translate-x-2 transition-transform"
                        style={{ color: 'var(--accent)' }}
                      >
                        Lire l'article <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Blog;