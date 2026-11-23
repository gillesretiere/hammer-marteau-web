import Container from './Container';

// Pied de page commun à toutes les pages. Le grand contact est une section de l'accueil (HM-23).
const SiteFooter = () => (
  <footer className="mt-24">
    {/* Filet fort dans la largeur de la grille, comme les têtes de section. */}
    <Container className="pb-6">
      {/* Même logique que les têtes de section : l'identité à gauche, les liens à droite. */}
      <div className="rule-strong flex flex-col gap-3 pt-5 text-sm text-ink-soft sm:flex-row sm:items-baseline sm:justify-between">
        <span>© {new Date().getFullYear()} Hammer &amp; Marteau · Nantes</span>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="mailto:contact@hammer-marteau.com" className="hover:text-ink">contact@hammer-marteau.com</a>
          <a href="/mentions-legales/" className="hover:text-ink">Mentions légales</a>
          <a href="https://github.com/gillesretiere" target="_blank" rel="noopener noreferrer" className="hover:text-ink">GitHub</a>
        </nav>
      </div>
    </Container>
  </footer>
);

export default SiteFooter;
