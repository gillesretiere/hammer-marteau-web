import React from 'react';
import { useTheme } from '../hooks/useTheme'; // Import nommé avec { }
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Hero from './Hero';
import { HeroSwissTech, HeroLiquid, HeroMedical, } from "../sections/index.js";



const LandingPage = () => {
  // Si vous avez besoin de savoir si on est en mode sombre ici :
  const { isDark } = useTheme();
  return (
    <>
      <Navbar2 />
      <HeroMedical />
    </>
  )
}

export default LandingPage