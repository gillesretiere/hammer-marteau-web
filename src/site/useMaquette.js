import { useEffect, useState } from 'react';

// Maquette seulement : un réglage partagé entre le panneau de comparaison et les pages.
const lire = (cle, defaut) => {
  try { return localStorage.getItem(cle) || defaut; } catch { return defaut; }
};

const useMaquette = (cle, defaut) => {
  const [valeur, setValeur] = useState(() => lire(cle, defaut));
  useEffect(() => {
    const suivre = (e) => { if (e.detail?.cle === cle) setValeur(e.detail.valeur); };
    window.addEventListener('maquette', suivre);
    return () => window.removeEventListener('maquette', suivre);
  }, [cle]);
  const changer = (v) => {
    try { localStorage.setItem(cle, v); } catch { /* sans stockage */ }
    window.dispatchEvent(new CustomEvent('maquette', { detail: { cle, valeur: v } }));
  };
  return [valeur, changer];
};

export default useMaquette;
