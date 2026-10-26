import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';

import LandingPage   from './pages/LandingPage';
import Blog          from './pages/Blog';
import Portfolio     from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import Navbar        from './navigation/Navbar';
import Footer        from './components/Footer';

import './i18n/config';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-brand-bg text-brand-heading transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/"               element={<LandingPage />} />
              <Route path="/blog"           element={<Blog />} />
              <Route path="/portfolio"      element={<Portfolio />} />
              <Route path="/portfolio/:slug" element={<ProjectDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
