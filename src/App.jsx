import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';

// Importation des pages de l'application
import LandingPage from './pages/LandingPage';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';

// Importation des composants structurels globaux (Ossature demandée)
import Navbar from './navigation/Navbar';
import Footer from './components/Footer';

// Chargement de la configuration internationale (i18n)
import './i18n/config';

function App() {
  return (
    <ThemeProvider>
      <Router>
        {/* Le conteneur principal assure le layout Flexbox pour maintenir le Footer en bas */}
        <div className="min-h-screen flex flex-col bg-brand-bg text-brand-body transition-colors duration-300">

          {/* Barre de navigation standard mise à jour */}
          <Navbar />

          {/* Zone de contenu principale qui s'étire dynamiquement */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/portfolio" element={<Portfolio />} />
              {/* Route dynamique d'aiguillage des fiches projets */}
              <Route path="/portfolio/:slug" element={<ProjectDetail />} />
            </Routes>
          </main>

          {/* Le nouveau composant Footer pérennise le bas de page de l'agence */}
          <Footer />

        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;