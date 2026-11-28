import { useEffect, useState } from 'react';

// Charge un index.json déposé dans public/ (portfolio ou blog).
// État (HM-28) : une entrée marquée « statut": "brouillon" » est montrée avec `npm run dev`
// et jamais sur le site en ligne. Le build retire aussi l'entrée et son fichier (vite.config.js) ;
// ce filtre-ci est une seconde sécurité. Sans « statut », l'entrée est publiée.
export const estBrouillon = (item) => item?.statut === 'brouillon';

const useIndex = (url) => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    let vivant = true;
    fetch(url)
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => {
        const visibles = import.meta.env.PROD && Array.isArray(data) ? data.filter((x) => !estBrouillon(x)) : data;
        if (vivant) setItems(visibles);
      })
      .catch(() => { if (vivant) setItems([]); });
    return () => { vivant = false; };
  }, [url]);
  return items;
};

export default useIndex;
