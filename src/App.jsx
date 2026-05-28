import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import LandingPage from './pages/LandingPage';
import Blog from './pages/Blog'; // 1. Import de la nouvelle page Blog

// Nous importons i18n ici pour qu'il soit chargé dès le début
import './i18n/config';

function App() {
  return (
    <ThemeProvider>
      <Router>
        {/* La div utilise désormais la transition globale et s'adapte aux thèmes */}
        <div className="min-h-screen bg-brand-bg text-brand-body transition-colors duration-300">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/blog" element={<Blog />} /> {/* 2. Ajout de la route */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;