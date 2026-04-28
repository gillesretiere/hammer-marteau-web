import React from 'react';
import { useTheme } from '../hooks/useTheme'; // Import nommé avec { }
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import { Hero, DownloadSection, } from "../sections/index.js";



const LandingPage = () => {
  // Si vous avez besoin de savoir si on est en mode sombre ici :
  const { isDark } = useTheme();
  return (
    <>
      <Navbar2 />
      <Hero />
      <DownloadSection />
    </>
  )
}

export default LandingPage