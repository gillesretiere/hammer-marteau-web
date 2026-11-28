// Étiquette des brouillons (HM-28), visible seulement avec `npm run dev` :
// en ligne, les brouillons n'existent pas.
const Brouillon = ({ className = '' }) => (
  <span className={`inline-block border border-accent px-1.5 py-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent ${className}`}>
    Brouillon
  </span>
);

export default Brouillon;
