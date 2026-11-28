// Largeur commune à toutes les pages : la grille part d'ici.
const Container = ({ className = '', children }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>
);

export default Container;
