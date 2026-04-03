import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Création du contexte
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // On récupère la préférence stockée ou celle du système
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('hammer-theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // 2. Effet pour appliquer la classe au document
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('hammer-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('hammer-theme', 'light');
    }
  }, [isDark]);

  // Fonction pour basculer le thème
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Hook personnalisé pour utiliser le thème facilement
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme doit être utilisé à l\'intérieur d\'un ThemeProvider');
  }
  return context;
};