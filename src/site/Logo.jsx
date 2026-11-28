// Logo Hammer & Marteau, repris de docs/logo-hammer-marteau-bw.svg (dépôt de CC Sudoku).
// Le cadre est resserré sur le dessin (93 → 469, 96 → 472) et la couleur suit le texte (thème clair ou sombre).
const Logo = ({ className = '' }) => (
  <svg viewBox="93 96 376 376" className={className} fill="currentColor" aria-hidden="true">
    <polygon points="250 96 250 253 93 253 93 315 250 315 250 472 312 472 312 158.5 399.3 315 468.7 315 349.1 96.1 250 96" />
  </svg>
);

export default Logo;
