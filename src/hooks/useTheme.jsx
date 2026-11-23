import { createContext, useContext, useEffect, useState } from 'react';

// Thème clair ou sombre (HM-8).
// Par défaut, le site suit le réglage de l'appareil, y compris s'il change pendant la visite.
// Seul un clic sur le bouton est retenu ; s'il ramène au réglage de l'appareil, on l'oublie.
// Nouvelle clé : l'ancienne (« hammer-theme ») enregistrait le thème dès la première visite.
const CLE = 'hammer-theme-choix';
const requete = '(prefers-color-scheme: dark)';

const lire = () => {
  try { return localStorage.getItem(CLE); } catch { return null; }
};
const ecrire = (v) => {
  try { v ? localStorage.setItem(CLE, v) : localStorage.removeItem(CLE); } catch { /* sans stockage */ }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [choix, setChoix] = useState(lire);
  const [systemeSombre, setSystemeSombre] = useState(() => window.matchMedia(requete).matches);

  useEffect(() => {
    const mq = window.matchMedia(requete);
    const suivre = (e) => setSystemeSombre(e.matches);
    mq.addEventListener('change', suivre);
    return () => mq.removeEventListener('change', suivre);
  }, []);

  const isDark = choix ? choix === 'dark' : systemeSombre;

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    const voulu = isDark ? 'light' : 'dark';
    const commeSysteme = (voulu === 'dark') === systemeSombre;
    const nouveau = commeSysteme ? null : voulu;
    ecrire(nouveau);
    setChoix(nouveau);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook pour lire et changer le thème. Il vit avec son fournisseur, d'où l'exception ci-dessous.
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme doit être utilisé à l\'intérieur d\'un ThemeProvider');
  }
  return context;
};
