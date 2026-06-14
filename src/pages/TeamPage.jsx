import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import Team from '../components/Team';
import teamImg from '../assets/team.jpeg';
import useDocumentMetadata from '../hooks/useDocumentMetadata';

const TeamPage = () => {
  useDocumentMetadata(
    "Our Elite Tactical Team | Gorkhali Security Services",
    "Meet the elite team behind Gorkhali Security. Highly trained professionals specializing in private security, bodyguard operations, and tactical defense solutions."
  );

  return (
    <div id="top" className="team-page-modern">
      {/* Hero Section */}
      <section className="contact-hero-premium" style={{ height: '60vh' }}>
        <div className="hero-bg-wrapper">
          <img src={teamImg} alt="" className="hero-bg-img" />
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
