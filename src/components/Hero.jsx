import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroSectionImg from '../assets/hero section.jpg';
import bg1 from '../assets/Background 1.webp';
import bg2 from '../assets/Background 2.jpeg';

const Hero = () => {
  const backgrounds = [heroSectionImg, bg1, bg2];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="hero-bg"
          style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
        />
      </AnimatePresence>
      
      <div className="hero-overlay"></div>
      
      <div className="container">
        <div className="hero-content" style={{ paddingTop: '8rem' }}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="subtitle text-primary"
          >
            Elite Protection Services
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Securing Your <span className="text-primary">World</span> With Tactical Excellence
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Providing top-tier private security, bodyguard services, and asset protection 
            for individuals and businesses worldwide. Your safety is our priority.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hero-btns"
          >
            <button className="btn btn-primary">Discover Services</button>
            <button className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>Learn More</button>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="scroll-indicator"
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
