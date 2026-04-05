import React from 'react';
import { useTheme } from '../hooks/useTheme'; // Import nommé avec { }
import Navbar from "./Navbar";
import Hero from './Hero';


const LandingPage = () => {
  // Si vous avez besoin de savoir si on est en mode sombre ici :
  const { isDark } = useTheme();
  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

export default LandingPage