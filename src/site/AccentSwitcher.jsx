import useMaquette from './useMaquette';

// Maquette seulement : compare les formes du hero, visible avec `npm run dev`, absent du site en ligne.
// L'accent est choisi (orange, HM-4) : son sélecteur a été retiré.

const AccentSwitcher = () => {
  const [forme, setForme] = useMaquette('maquette-hero-forme', 'titres');

  return (
    <div className="fixed bottom-3 right-3 z-50 flex flex-col gap-2 border border-rule bg-paper px-3 py-2 text-xs text-ink-soft shadow">
      <div className="flex items-center gap-2">
        Hero
        {[['titres', 'Titres'], ['phrase', 'Phrase seule']].map(([id, label]) => (
          <button
            key={id}
            onClick={() => setForme(id)}
            className={`border px-1.5 py-0.5 ${forme === id ? 'border-ink text-ink' : 'border-rule'}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AccentSwitcher;
