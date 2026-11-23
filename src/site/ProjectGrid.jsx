import { Link } from 'react-router-dom';

// Lien d'un projet : une fiche Markdown (slug) ou une page statique (url).
const ProjectLink = ({ project, className, children }) =>
  project.url
    ? <a href={project.url} className={className}>{children}</a>
    : <Link to={`/portfolio/${project.slug}`} className={className}>{children}</Link>;

const Vignette = ({ project, ratio, className = '' }) => (
  <div className={`overflow-hidden bg-paper-2 ${ratio} ${className}`}>
    {project.imageUrl && (
      <img
        src={project.imageUrl}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        style={{ objectPosition: project.imagePosition || 'center' }}
      />
    )}
  </div>
);

const Soulignement = () => (
  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
);

// Composition « cases » : cases espacées. Une gouttière de 24 px sépare les cases, image en 16/9 plus basse,
// un filet fin au-dessus des textes. 16 px d'air entre les étiquettes et le trait d'accent du survol.
const Cases = ({ projects }) => (
  <div className={`grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 ${projects.length > 2 ? 'lg:grid-cols-3' : ''}`}>
    {projects.map((p) => (
      <ProjectLink key={p.id} project={p} className="group relative flex flex-col">
        <Vignette project={p} ratio="aspect-[16/9]" />
        <div className="mt-4 flex flex-1 flex-col gap-2 border-t border-rule pb-4 pt-3">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-primary text-xl font-semibold tracking-tight text-ink">{p.title}</h3>
            {p.year && <span className="text-sm tabular-nums text-ink-soft">{p.year}</span>}
          </div>
          <p className="text-[15px] leading-relaxed text-ink-soft">{p.description}</p>
          <p className="mt-auto pt-2 text-xs uppercase tracking-[0.08em] text-ink-soft">{p.tags.join(' · ')}</p>
        </div>
        <Soulignement />
      </ProjectLink>
    ))}
  </div>
);

// Composition « index » : index large. Une ligne par projet entre deux filets, image sur 4 colonnes, textes sur 8.
const IndexLarge = ({ projects }) => (
  <div className="border-t border-rule">
    {projects.map((p) => (
      <ProjectLink
        key={p.id}
        project={p}
        className="group relative grid grid-cols-1 gap-4 border-b border-rule py-6 sm:grid-cols-12 sm:gap-6"
      >
        <Vignette project={p} ratio="aspect-[3/2]" className="sm:col-span-5 lg:col-span-4" />
        <div className="flex flex-col gap-2 sm:col-span-7 lg:col-span-8">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-primary text-2xl font-semibold tracking-tight text-ink">{p.title}</h3>
            {p.year && <span className="text-sm tabular-nums text-ink-soft">{p.year}</span>}
          </div>
          <p className="max-w-xl text-[15px] leading-relaxed text-ink-soft">{p.description}</p>
          <p className="mt-auto pt-2 text-xs uppercase tracking-[0.08em] text-ink-soft">{p.tags.join(' · ')}</p>
        </div>
        <Soulignement />
      </ProjectLink>
    ))}
  </div>
);

// Deux compositions au choix, réglées dans src/contenus/ :
//   'cases' : cases espacées, 3 au plus par rangée (validée le 23 nov., HM-21) ;
//   'index' : une ligne par projet, image sur 4 colonnes.
const ProjectGrid = ({ projects, composition = 'cases' }) =>
  composition === 'index' ? <IndexLarge projects={projects} /> : <Cases projects={projects} />;

export default ProjectGrid;
