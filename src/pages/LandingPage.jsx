import React from 'react';
import DeckContext from '../hooks/useTheme';
import Navbar from "./Navbar";
import Hero from './Hero';


const LandingPage = () => {
  let deckContext = useContext(DeckContext);

  return (
    <>
      <Navbar context={deckContext} />
      <Hero />
    </>
  )
}

export default LandingPage