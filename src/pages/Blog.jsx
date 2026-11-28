import Container from '../site/Container';
import PostList from '../site/PostList';
import useIndex from '../site/useIndex';
import reglages from '../contenus/blog';
import titre from '../site/titre';

// Page /blog : même gabarit que /portfolio. Chaque article a sa propre adresse, /blog/:slug.
const Blog = () => {
  const posts = useIndex('/posts/index.json');
  const tries = posts ? [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)) : null;
  return (
    <Container>
      <title>{titre('Blog')}</title>
      <header className="py-14 sm:py-20">
        <h1 className="font-primary text-[clamp(2.2rem,6vw,4rem)] font-semibold leading-none tracking-[-0.025em] text-ink">Blog</h1>
        {reglages.intro && <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{reglages.intro}</p>}
      </header>
      <div className="rule-strong pt-6">{tries && <PostList posts={tries} composition={reglages.composition} />}</div>
    </Container>
  );
};

export default Blog;
