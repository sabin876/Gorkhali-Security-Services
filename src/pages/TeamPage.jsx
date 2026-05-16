import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import Team from '../components/Team';
import contactBg from '../assets/contact-bg.png';

const TeamPage = () => {
  return (
    <div className="team-page-modern">
      {/* Hero Section */}
      <section className="contact-hero-premium" style={{ height: '50vh' }}>
        <div className="hero-bg-wrapper">
          <img src={contactBg} alt="" className="hero-bg-img" />
          <div className="hero-overlay-dark"></div>
        </div>
        
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text-content"
          >

            <h1>Our Elite <span className="text-primary">Team</span></h1>
            <p>
              The backbone of Gorkhali Security. Our team consists of highly trained 
              professionals with backgrounds in elite tactical units and private security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Content */}
      <Team />

    </div>
  );
};

export default TeamPage;
