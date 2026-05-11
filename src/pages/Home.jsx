import React from 'react';
import Hero from '../components/Hero';
import Counter from '../components/Counter';
import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
import Vacancy from '../components/Vacancy';
import CTA from '../components/CTA';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <Counter />
      <About />
      <Services />
      <Team />
      <Vacancy />
      <CTA />
      <Testimonials />
    </>
  );
};

export default Home;
