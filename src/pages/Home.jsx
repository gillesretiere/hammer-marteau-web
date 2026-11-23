import Container from '../site/Container';
import SectionHead from '../site/SectionHead';
import ProjectGrid from '../site/ProjectGrid';
import PostList from '../site/PostList';
import useIndex from '../site/useIndex';
import useMaquette from '../site/useMaquette';
import accueil from '../contenus/accueil';

// Une seule image source, carrée. Le cadre change selon la largeur et l'image le remplit
// en étant recadrée (object-cover) autour de son point d'intérêt (position).
// Sans image, une case grise tient la place (HM-20).
const cadre = 'aspect-[4/3] sm:aspect-[16/9] lg:aspect-square';

const ImageHero = ({ src, alt = '', position = '50% 50%', className = '' }) =>
  src ? (
    <img src={src} alt={alt} className={`w-full object-cover ${cadre} ${className}`} style={{ objectPosition: position }} />
  ) : (
    <div className={`flex items-center justify-center border border-rule bg-paper-2 text-xs uppercase tracking-[0.12em] text-ink-soft ${cadre} ${className}`}>
      Image à venir
    </div>
  );

// Tailles du hero : la phrase seule prend la taille du sous-titre.
const tailleTitre = 'font-primary text-[clamp(2.4rem,7vw,5rem)] font-semibold leading-[1] tracking-[-0.03em] text-ink text-balance';
const tailleSousTitre = 'font-primary text-[clamp(1.25rem,2.6vw,1.9rem)] font-normal leading-snug text-ink text-balance';

// Textes : titre (h1), sous-titre (h2), texte ; ou une phrase seule.
// La phrase seule reste le h1 de la page (un seul h1 par page), affiché en taille de sous-titre.
const Textes = ({ contenu }) => {
  if (contenu.phrase) return <h1 className={tailleSousTitre}>{contenu.phrase}</h1>;
  return (
    <>
      {contenu.titre && <h1 className={tailleTitre}>{contenu.titre}</h1>}
      {contenu.sousTitre && <h2 className={`mt-3 ${tailleSousTitre}`}>{contenu.sousTitre}</h2>}
      {contenu.texte && <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{contenu.texte}</p>}
    </>
  );
};

// Grand écran : textes sur les colonnes 1 à 7, image carrée sur les colonnes 8 à 12.
// Le haut du texte s'aligne sur le haut du carré, et le bloc est centré verticalement dans le hero.
// Plus petit : l'image passe sous le texte, en pleine largeur.
// Grand écran : le hero remplit l'écran moins l'en-tête (57 px) et la tête de la section
// suivante (58 px). Seuls le filet fort et « Portfolio » dépassent en bas, jamais les vignettes.
// Plafond de 62rem (écrans jusqu'à 1100 px de haut) : au-delà (écrans très hauts), on préfère laisser voir la suite plutôt qu'un grand vide.
const Hero = ({ contenu }) => (
  <section className="grid grid-cols-1 gap-8 py-16 sm:py-20 lg:min-h-[min(calc(100svh_-_7rem),62rem)] lg:grid-cols-12 lg:content-center lg:items-start">
    <div className="lg:col-span-7">
      {contenu.lieu && <p className="mb-6 text-sm text-ink-soft">{contenu.lieu}</p>}
      <Textes contenu={contenu} />
    </div>
    <ImageHero src={contenu.image} alt={contenu.imageAlt} position={contenu.imagePosition} className="lg:col-span-5" />
  </section>
);

const Home = () => {
  // Maquette : le panneau permet d'essayer la phrase seule sans toucher au contenu.
  const [forme] = useMaquette('maquette-hero-forme', 'titres');
  const contenu = import.meta.env.DEV && forme === 'phrase'
    ? { ...accueil, phrase: accueil.phrase || 'Des applications, des outils et des écrits, conçus et développés de bout en bout.' }
    : accueil;
  const projects = useIndex('/portfolio-data/index.json');
  const posts = useIndex('/posts/index.json');
  const recent = posts ? [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, accueil.blog.nombre) : [];

  return (
    <Container>
      <Hero contenu={contenu} />

      <section className="mb-20">
        <SectionHead title="Portfolio" to="/portfolio" more="Tous les projets" />
        {projects && (
          <ProjectGrid
            projects={projects.filter((p) => p.featured).slice(0, accueil.portfolio.nombre)}
            composition={accueil.portfolio.composition}
          />
        )}
      </section>

      <section>
        <SectionHead title="Blog" to="/blog" more="Tous les articles" />
        <PostList posts={recent} composition={accueil.blog.composition} />
      </section>

      {/* Contact (HM-23) : même tête de section que Portfolio et Blog, phrase sur 7 colonnes, adresse en grand. */}
      <section className="mt-20">
        <SectionHead title="Contact" />
        {accueil.contact.phrase && (
          <p className="max-w-[40rem] font-primary text-[clamp(1.25rem,2.6vw,1.9rem)] leading-snug text-ink text-balance">
            {accueil.contact.phrase}
          </p>
        )}
        <a
          href={`mailto:${accueil.contact.email}`}
          className="mt-6 inline-block whitespace-nowrap font-primary text-[clamp(1.3rem,6vw,3.5rem)] font-semibold leading-none tracking-tight text-ink decoration-accent decoration-2 underline-offset-8 hover:underline"
        >
          {accueil.contact.email}
        </a>
      </section>
    </Container>
  );
};

export default Home;
