import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';

import Home          from './pages/Home';
import Blog          from './pages/Blog';
import BlogPost      from './pages/BlogPost';
import Portfolio     from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import NotFound      from './pages/NotFound';
import SiteHeader    from './site/SiteHeader';
import SiteFooter    from './site/SiteFooter';
import AccentSwitcher from './site/AccentSwitcher';


// Vers une page statique (hors application React) : rechargement complet.
const GoStatic = ({ to }) => { window.location.replace(to); return null; };

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex min-h-screen flex-col bg-paper text-ink">
          <SiteHeader />
          <main id="contenu" tabIndex={-1} className="flex-grow focus:outline-none">
            <Routes>
              <Route path="/"                element={<Home />} />
              <Route path="/portfolio"       element={<Portfolio />} />
              <Route path="/portfolio/cc-sudoku" element={<GoStatic to="/cc-sudoku/" />} />
              <Route path="/portfolio/:slug" element={<ProjectDetail />} />
              <Route path="/blog"            element={<Blog />} />
              <Route path="/blog/:slug"      element={<BlogPost />} />
              <Route path="*"                element={<NotFound />} />
            </Routes>
          </main>
          <SiteFooter />
          {import.meta.env.DEV && <AccentSwitcher />}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
