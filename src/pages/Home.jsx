import React from 'react';
import Hero from '../components/Hero';
import Counter from '../components/Counter';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import FloatingCTA from '../components/FloatingCTA';
import useDocumentMetadata from '../hooks/useDocumentMetadata';

const Home = () => {
  useDocumentMetadata(
    "Gorkhali Security | Elite Private Protection & Bodyguard Services",
    "Gorkhali Security provides elite private protection, bodyguard services, armored transport, and comprehensive security solutions for individuals and businesses worldwide."
  );

  return (
    <>
      <Hero />
      <Counter />
      <About />
      <Services />
      <Testimonials />
      <FloatingCTA />
    </>
  );
};

export default Home;
