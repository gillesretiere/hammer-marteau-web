import React from 'react';
import { useTheme } from '../hooks/useTheme'; // Import nommé avec { }
import Navbar from "../navigation/Navbar";
import { Hero, DownloadSection, PortfolioSection, } from "../sections/index.js";
import HomePage from './HomePage.jsx';
import { Home } from 'lucide-react';



const LandingPage = () => {
  // Si vous avez besoin de savoir si on est en mode sombre ici :
  const { isDark } = useTheme();
  return (
    <>
      <Navbar />
      <HomePage />
      <PortfolioSection/>
    </>
  )
}

export default LandingPage