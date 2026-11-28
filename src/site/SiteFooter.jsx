import Container from './Container';
import IconeReseau from './IconeReseau';
import reseaux from '../contenus/reseaux';

// Pied de page commun à toutes les pages. Le grand contact est une section de l'accueil (HM-23).
const SiteFooter = () => (
  <footer className="mt-24">
    {/* Filet fort dans la largeur de la grille, comme les têtes de section. */}
    <Container className="pb-6">
      {/* Même logique que les têtes de section : l'identité à gauche, les liens à droite. */}
      <div className="rule-strong flex flex-col gap-3 pt-5 text-sm text-ink-soft sm:flex-row sm:items-baseline sm:justify-between">
        <span>© {new Date().getFullYear()} Hammer &amp; Marteau · Nantes</span>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href="mailto:contact@hammer-marteau.com" className="hover:text-ink">contact@hammer-marteau.com</a>
          <a href="/mentions-legales/" className="hover:text-ink">Mentions légales</a>
          {/* Réseaux (HM-25) : icônes de 18 px dans une cible de 44 px, nom lu par les lecteurs d'écran. */}
          <ul className="-mx-3 -my-3 flex basis-full items-center sm:ml-0 sm:basis-auto">
            {reseaux.map((r) => (
              <li key={r.id}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" aria-label={r.nom} title={r.nom} className="flex h-11 w-11 items-center justify-center hover:text-ink">
                  <IconeReseau id={r.id} className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Container>
  </footer>
);

export default SiteFooter;
