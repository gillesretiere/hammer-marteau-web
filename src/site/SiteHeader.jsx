import { Link, NavLink } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import Container from './Container';
import Logo from './Logo';

const links = [
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/blog', label: 'Blog' },
];

const SiteHeader = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/95 backdrop-blur">
      {/* Clavier : premier arrêt de la touche Tab, invisible tant qu'on ne l'atteint pas. */}
      <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-1.5 focus:text-sm focus:text-ink">
        Aller au contenu
      </a>
      <Container className="flex h-14 items-center justify-between gap-4">
        <Link to="/" className="flex h-11 items-center gap-2.5 font-primary text-[15px] font-semibold tracking-tight text-ink">
          <Logo className="h-6 w-6" />
          <span>Hammer <span className="font-normal text-ink-soft">&amp;</span> Marteau</span>
        </Link>
        {/* Cibles de 44 px de haut (doigt), sans changer l'aspect. */}
        <nav className="flex items-center gap-3 sm:gap-5">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex h-11 items-center px-1 text-[15px] transition-colors ${isActive ? 'text-ink underline decoration-accent decoration-2 underline-offset-[6px]' : 'text-ink-soft hover:text-ink'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <button
            onClick={toggleTheme}
            className="-mr-3 flex h-11 w-11 items-center justify-center text-ink-soft hover:text-ink"
            aria-label={isDark ? 'Passer en thème clair' : 'Passer en thème sombre'}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
      </Container>
    </header>
  );
};

export default SiteHeader;
