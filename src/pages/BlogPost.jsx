import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from '../site/Container';
import Prose from '../site/Prose';
import useIndex from '../site/useIndex';
import { parseFrontmatter, dropLeadingH1 } from '../site/frontmatter';
import NotFound from './NotFound';
import titre from '../site/titre';

const BlogPost = () => {
  const { slug } = useParams();
  const posts = useIndex('/posts/index.json');
  const post = posts?.find((p) => p.id === slug);
  const [loaded, setLoaded] = useState({ slug: null, body: null });
  const body = loaded.slug === slug ? loaded.body : null; // null = chargement, false = introuvable
  const fileName = post?.fileName;

  useEffect(() => {
    if (!fileName) return undefined;
    let vivant = true;
    fetch(`/posts/${fileName}`)
      .then((r) => (r.ok ? r.text() : Promise.reject()))
      .then((text) => vivant && setLoaded({ slug, body: dropLeadingH1(parseFrontmatter(text).body) }))
      .catch(() => vivant && setLoaded({ slug, body: false }));
    return () => { vivant = false; };
  }, [slug, fileName]);

  if (posts && !post) return <NotFound />;

  return (
    <Container>
      <title>{titre(post?.title || 'Blog')}</title>
      <div className="pt-8">
        <Link to="/blog" className="text-sm text-ink-soft hover:text-ink">← Blog</Link>
      </div>
      {post && (
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <header className="py-10 sm:py-14 lg:col-span-9 lg:col-start-4">
            <p className="text-sm tabular-nums text-ink-soft">
              {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
              {post.readingTime && ` · ${post.readingTime}`}
            </p>
            <h1 className="mt-3 font-primary text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink text-balance">
              {post.title}
            </h1>
          </header>
          <div className="rule-strong pt-8 lg:col-span-9 lg:col-start-4">
            {body === null && <p className="text-ink-soft">Chargement…</p>}
            {body === false && <p className="text-ink-soft">Article introuvable.</p>}
            {body && <Prose article>{body}</Prose>}
          </div>
        </div>
      )}
    </Container>
  );
};

export default BlogPost;
