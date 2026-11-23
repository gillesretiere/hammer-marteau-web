import { Link } from 'react-router-dom';

const dateFr = (iso) =>
  new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

const Titre = ({ children, className = '' }) => (
  <h3 className={`font-primary font-semibold leading-snug tracking-tight text-ink group-hover:underline group-hover:decoration-accent group-hover:decoration-2 group-hover:underline-offset-4 ${className}`}>
    {children}
  </h3>
);

const Lire = () => <span className="text-sm text-ink">Lire <span className="text-accent">→</span></span>;

// Composition « cases » : même gouttière que les cases du portfolio (24 px), 3 au plus par rangée,
// un filet fin au-dessus de chaque article. Sans image : le blog se lit, le portfolio se regarde.
const Cases = ({ posts }) => (
  <div className={`grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 ${posts.length > 2 ? 'lg:grid-cols-3' : ''}`}>
    {posts.map((post) => (
      <Link key={post.id} to={`/blog/${post.id}`} className="group flex flex-col gap-3 border-t border-rule pt-3">
        <span className="text-sm tabular-nums text-ink-soft">{dateFr(post.date)}</span>
        <Titre className="text-xl">{post.title}</Titre>
        <p className="text-[15px] leading-relaxed text-ink-soft line-clamp-3">{post.excerpt}</p>
        <span className="mt-auto pt-1"><Lire /></span>
      </Link>
    ))}
  </div>
);

// Composition « liste » : une ligne par article entre deux filets.
// Date (2 col.), titre (4), extrait (5), lien (1). Sur iPhone : date, titre, extrait empilés.
const Liste = ({ posts }) => (
  <div className="border-t border-rule">
    {posts.map((post) => (
      <Link
        key={post.id}
        to={`/blog/${post.id}`}
        className="group grid grid-cols-1 gap-2 border-b border-rule py-5 lg:grid-cols-12 lg:gap-6"
      >
        <span className="pt-0.5 text-sm tabular-nums text-ink-soft lg:col-span-2">{dateFr(post.date)}</span>
        <Titre className="text-xl lg:col-span-4">{post.title}</Titre>
        <p className="text-[15px] leading-relaxed text-ink-soft line-clamp-2 lg:col-span-5">{post.excerpt}</p>
        <span className="hidden pt-0.5 text-right lg:col-span-1 lg:block"><Lire /></span>
      </Link>
    ))}
  </div>
);

// Deux compositions au choix, réglées dans src/contenus/accueil.js (HM-22) :
//   'cases' : articles côte à côte, 3 au plus par rangée ;
//   'liste' : une ligne par article.
const PostList = ({ posts, composition = 'cases' }) =>
  composition === 'liste' ? <Liste posts={posts} /> : <Cases posts={posts} />;

export default PostList;
