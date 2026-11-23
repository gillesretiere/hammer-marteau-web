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
      <Container className="flex h-14 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 font-primary text-[15px] font-semibold tracking-tight text-ink">
          <Logo className="h-6 w-6" />
          <span>Hammer <span className="font-normal text-ink-soft">&amp;</span> Marteau</span>
        </Link>
        <nav className="flex items-center gap-5 sm:gap-7">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-[15px] transition-colors ${isActive ? 'text-ink underline decoration-accent decoration-2 underline-offset-[6px]' : 'text-ink-soft hover:text-ink'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <button
            onClick={toggleTheme}
            className="-mr-2 p-2 text-ink-soft hover:text-ink"
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
