import { Link } from 'react-router-dom';

// Tête de section : filet fort, nom à gauche, lien « tout voir » à droite.
const SectionHead = ({ title, to, more }) => (
  <div className="rule-strong flex items-baseline justify-between pt-3 pb-6">
    <h2 className="font-primary text-sm font-semibold uppercase tracking-[0.12em] text-ink">{title}</h2>
    {to && (
      <Link to={to} className="text-sm text-ink-soft hover:text-ink">
        {more} <span className="text-accent">→</span>
      </Link>
    )}
  </div>
);

export default SectionHead;
