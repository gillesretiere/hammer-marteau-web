import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, User, ShieldCheck, ExternalLink } from 'lucide-react';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [metadata, setMetadata] = useState(null);
  const [markdownContent, setMarkdownContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    // Suite à l'option 2 choisie, on tape maintenant dans /portfolio-data/
    fetch(`/portfolio-data/posts/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Fiche projet introuvable");
        return res.text();
      })
      .then((text) => {
        const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
        const match = text.match(frontmatterRegex);

        if (match) {
          const rawYaml = match[1];
          const content = match[2];

          const parsedMeta = {};
          rawYaml.split('\n').forEach(line => {
            const parts = line.split(':');
            if (parts.length >= 2) {
              const key = parts[0].trim();
              const value = parts.slice(1).join(':').trim().replace(/^"|"$/g, '');

              if (key === 'tags') {
                try {
                  parsedMeta[key] = JSON.parse(value.replace(/'/g, '"'));
                } catch {
                  parsedMeta[key] = value.split(',').map(t => t.trim());
                }
              } else {
                parsedMeta[key] = value;
              }
            }
          });

          setMetadata(parsedMeta);
          setMarkdownContent(content);
        } else {
          setMarkdownContent(text);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-bg pt-32 flex items-center justify-start px-6 font-mono text-xs text-brand-body opacity-50">
        Chargement du registre technique...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-brand-bg pt-32 flex flex-col items-start justify-center px-6 font-mono text-xs gap-4 text-left">
        <span className="text-brand-accent">Erreur : Fiche projet non indexée</span>
        <button onClick={() => navigate('/portfolio')} className="text-brand-primary underline hover:opacity-80">
          ← Retourner à l'index du portfolio
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-brand-bg pt-32 pb-24 transition-colors duration-300 text-left">
      <div className="max-w-7xl mx-auto px-6">

        {/* Bouton retour */}
        <button
          onClick={() => navigate('/portfolio')}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-body hover:text-brand-primary mb-12 transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          {t('back_to_portfolio', 'Index des projets')}
        </button>

        {/* Layout Asymétrique */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start text-left">

          {/* Cartouche Technique Latéral Mis à jour (Option Mobile OK + Ajout URL) */}
          <aside className="lg:col-span-1 border border-brand-border bg-brand-surface/10 p-6 rounded-sm space-y-6 lg:sticky lg:top-32 mb-8 lg:mb-0 font-mono text-xs text-left z-10">
            <div className="border-b border-brand-border/40 pb-4">
              <span className="text-[10px] text-brand-body opacity-40 uppercase tracking-wider block mb-1">Acteur Clé</span>
              <span className="text-brand-heading font-bold flex items-center gap-2">
                <User size={12} className="text-brand-primary" /> {metadata?.client || 'N/A'}
              </span>
            </div>

            <div className="border-b border-brand-border/40 pb-4">
              <span className="text-[10px] text-brand-body opacity-40 uppercase tracking-wider block mb-1">Partenaire Appui</span>
              <span className="text-brand-heading font-bold flex items-center gap-2">
                <ShieldCheck size={12} className="text-brand-accent" /> {metadata?.partenaire || 'N/A'}
              </span>
            </div>

            <div className="border-b border-brand-border/40 pb-4">
              <span className="text-[10px] text-brand-body opacity-40 uppercase tracking-wider block mb-1">Date d'Intervention</span>
              <span className="text-brand-heading flex items-center gap-2">
                <Calendar size={12} /> {metadata?.date || 'N/A'}
              </span>
            </div>

            <div className={metadata?.url ? "border-b border-brand-border/40 pb-4" : ""}>
              <span className="text-[10px] text-brand-body opacity-40 uppercase tracking-wider block mb-2">Axes de développement</span>
              <div className="flex flex-wrap gap-1.5 justify-start">
                {metadata?.tags?.map((tag, idx) => (
                  <span key={idx} className="text-[9px] uppercase tracking-wider px-2 py-0.5 border border-brand-border text-brand-body/80 bg-brand-bg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* BLOC ATTRBUT URL ADDITIONNEL */}
            {metadata?.url && (
              <div className="pt-2">
                <a
                  href={metadata.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-3 py-2 border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-bg transition-all duration-200 rounded-sm font-bold text-[10px] uppercase tracking-wider group"
                >
                  <span>Visiter le projet</span>
                  <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            )}
          </aside>

          {/* Corps éditorial */}
          <article className="lg:col-span-3 prose prose-invert max-w-none font-mono text-xs md:text-sm text-left">
            {!markdownContent.startsWith('# ') && (
              <h1 className="text-3xl md:text-4xl font-black font-primary uppercase tracking-tighter text-brand-heading mb-8 border-b border-brand-border pb-6 leading-none text-left">
                {metadata?.title || 'Détail du Projet'}
              </h1>
            )}

            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => <h1 className="text-2xl md:text-3xl font-black font-primary uppercase tracking-tight text-brand-heading mt-12 mb-6 border-b border-brand-border pb-4 text-left" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-lg md:text-xl font-bold font-primary uppercase tracking-tight text-brand-primary mt-10 mb-4 text-left" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-xs font-mono uppercase tracking-widest text-brand-accent mt-6 mb-2 font-bold text-left" {...props} />,

                p: ({ node, ...props }) => <p className="leading-relaxed text-brand-body opacity-90 mb-6 text-left" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc space-y-2 mb-6 pl-5 text-left text-brand-body" {...props} />,
                li: ({ node, ...props }) => <li className="text-left" {...props} />,
                strong: ({ node, ...props }) => <strong className="font-bold text-brand-heading" {...props} />,

                // CORRECTION PRE : L'attribut style court-circuite la spécificité de Prose sans casser les enfants
                pre: ({ node, ...props }) => (
                  <pre
                    style={{ backgroundColor: 'rgba(var(--brand-surface-rgb, 128, 128, 128), 0.15)' }}
                    className="border border-brand-border p-5 rounded-sm font-mono text-[11px] !text-brand-heading overflow-x-auto my-6 text-left"
                    {...props}
                  />
                ),

                // CORRECTION CODE : Style en ligne pour le fond afin de dompter Prose-invert en mode clair
                code: ({ node, ...props }) => {
                  const isBlock = node.position?.start?.line !== node.position?.end?.line || props.className?.includes('language-');

                  if (isBlock) {
                    return <code className="!bg-transparent !p-0 !text-inherit" {...props} />;
                  }

                  return (
                    <code
                      style={{ backgroundColor: 'rgba(var(--brand-surface-rgb, 128, 128, 128), 0.25)' }}
                      className="!text-brand-accent px-1.5 py-0.5 rounded-sm font-mono text-xs before:content-none after:content-none font-semibold inline"
                      {...props}
                    />
                  );
                }
              }}
            >
              {markdownContent}
            </Markdown>
          </article>

        </div>

      </div>
    </main>
  );
};

export default ProjectDetail;