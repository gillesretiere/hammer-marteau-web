import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import LandingPage from './pages/LandingPage';

// Nous importons i18n ici pour qu'il soit chargé dès le début
import './i18n/config';

function App() {
  return (
    <ThemeProvider>
      <Router>
        {/* La div ci-dessous réagit dynamiquement au mode sombre via Tailwind */}
        <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* Prêt pour les futures routes /projets ou /contact */}
          </Routes>
          {/*
          <div className="h-screen flex items-center justify-center bg-slate-100">
            <h1 className="text-2xl font-bold text-red-600">Hammer & Marteau : Test de survie</h1>
          </div>          
          */}

        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;