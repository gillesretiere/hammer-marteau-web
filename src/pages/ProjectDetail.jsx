import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from '../site/Container';
import Prose from '../site/Prose';
import useIndex from '../site/useIndex';
import { parseFrontmatter, dropLeadingH1 } from '../site/frontmatter';
import NotFound from './NotFound';

const Fact = ({ label, children }) => (
  <div className="border-b border-rule py-3 sm:border-b-0 sm:border-l sm:px-5 sm:first:border-l-0 sm:first:pl-0">
    <dt className="text-xs uppercase tracking-[0.08em] text-ink-soft">{label}</dt>
    <dd className="mt-1 text-[15px] leading-snug text-ink">{children}</dd>
  </div>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const index = useIndex('/portfolio-data/index.json');
  // Fiche chargée, rangée avec son slug : une autre fiche en cours de chargement vaut null.
  const [loaded, setLoaded] = useState({ slug: null, doc: null });
  const doc = loaded.slug === slug ? loaded.doc : null; // null = chargement, false = introuvable

  useEffect(() => {
    let vivant = true;
    fetch(`/portfolio-data/posts/${slug}.md`)
      .then((r) => (r.ok && !r.headers.get('content-type')?.includes('text/html') ? r.text() : Promise.reject()))
      .then((text) => vivant && setLoaded({ slug, doc: parseFrontmatter(text) }))
      .catch(() => vivant && setLoaded({ slug, doc: false }));
    return () => { vivant = false; };
  }, [slug]);

  if (doc === false) return <NotFound />;
  if (!doc) return <Container className="py-24 text-ink-soft">Chargement…</Container>;

  const { meta, body } = doc;
  const card = index?.find((p) => p.slug === slug);
  const year = meta.date ? meta.date.slice(0, 4) : card?.year;

  return (
    <Container>
      <div className="pt-8">
        <Link to="/portfolio" className="text-sm text-ink-soft hover:text-ink">← Portfolio</Link>
      </div>

      <header className="py-10 sm:py-14">
        <h1 className="max-w-4xl font-primary text-[clamp(2.2rem,6vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-ink text-balance">
          {card?.title || meta.title}
        </h1>
        {card?.description && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{card.description}</p>}
      </header>

      <dl className="rule-strong grid grid-cols-1 border-b border-rule pt-1 sm:grid-cols-4 sm:py-4">
        {meta.client && <Fact label="Pour">{meta.client}</Fact>}
        {meta.partenaire && <Fact label="Avec">{meta.partenaire}</Fact>}
        {meta.role && <Fact label="Rôle">{meta.role}</Fact>}
        {year && (
          <Fact label="Année">
            {year}
            {meta.url && (
              <a href={meta.url} target="_blank" rel="noopener noreferrer" className="ml-3 text-ink underline decoration-accent decoration-2 underline-offset-4">
                Voir le site ↗
              </a>
            )}
          </Fact>
        )}
      </dl>

      {card?.imageUrl && (
        <figure className="mt-8 border border-rule">
          <img src={card.imageUrl} alt="" className="max-h-[70vh] w-full object-cover" />
        </figure>
      )}

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-8 lg:col-start-4">
          <Prose>{dropLeadingH1(body)}</Prose>
        </div>
      </div>
    </Container>
  );
};

export default ProjectDetail;
