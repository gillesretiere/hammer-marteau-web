import { useEffect, useState } from 'react';

// Charge un index.json déposé dans public/ (portfolio ou blog).
const useIndex = (url) => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    let vivant = true;
    fetch(url)
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => { if (vivant) setItems(data); })
      .catch(() => { if (vivant) setItems([]); });
    return () => { vivant = false; };
  }, [url]);
  return items;
};

export default useIndex;
