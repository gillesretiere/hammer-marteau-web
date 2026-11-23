import { useEffect } from 'react';
import useMaquette from './useMaquette';

// Maquette seulement : compare les accents et la forme du hero, visible avec `npm run dev`, absent du site en ligne.
const accents = [
  { id: 'orange', label: 'Orange', swatch: '#D9480F' },
  { id: 'rouge', label: 'Rouge', swatch: '#C1272D' },
  { id: 'bleu', label: 'Bleu', swatch: '#2F7799' },
];

const AccentSwitcher = () => {
  const [accent, setAccent] = useMaquette('maquette-accent', 'orange');
  const [forme, setForme] = useMaquette('maquette-hero-forme', 'titres');
  useEffect(() => { document.documentElement.dataset.accent = accent; }, [accent]);

  return (
    <div className="fixed bottom-3 right-3 z-50 flex flex-col gap-2 border border-rule bg-paper px-3 py-2 text-xs text-ink-soft shadow">
      <div className="flex items-center gap-2">
        Accent
        {accents.map((c) => (
          <button
            key={c.id}
            onClick={() => setAccent(c.id)}
            title={c.label}
            aria-label={c.label}
            className={`h-5 w-5 rounded-full border-2 ${accent === c.id ? 'border-ink' : 'border-transparent'}`}
            style={{ background: c.swatch }}
          />
        ))}
      </div>
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
