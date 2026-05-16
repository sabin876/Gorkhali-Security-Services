import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import teamImg from '../assets/Our team.jpeg';
import logoImg from '../assets/logo.jpeg';

const CEOMessage = () => {
  return (
    <section id="ceo-message" className="ceo-section">
      <div className="ceo-bg-decoration">
        <div className="tactical-grid-overlay"></div>
        <div className="gradient-glow-light"></div>
        <div className="ceo-bg-logo-wrapper">
          <img src={logoImg} alt="" className="ceo-bg-logo" />
        </div>
      </div>
      
      <div className="container">
        <div className="ceo-section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="ceo-header-meta">
              <div className="accent-line"></div>
              <span className="ceo-subtitle">Leadership Perspective</span>
              <div className="accent-line"></div>
            </div>
            <h2 className="ceo-title">Safeguarding Your Future With <span className="text-primary">Vision & Valor</span></h2>
          </motion.div>
        </div>

        <div className="ceo-grid">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="ceo-image-container"
          >
            <div className="ceo-image-wrapper">
              <div className="image-border-decoration"></div>
              <img 
                src={teamImg} 
                alt="Our Professional Team" 
                className="ceo-img"
              />
              <motion.div 
                className="ceo-experience-card"
                whileHover={{ y: -10, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="badge-icon-wrapper">
                  <span className="years">25+</span>
                </div>
                <span className="label">Years of Tactical Leadership</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="ceo-content"
          >
            <div className="quote-container-premium">
              <div className="quote-accent-bar"></div>
              <p className="ceo-text-premium">
                "At Gorkhali Security Services, we don't just provide protection; we deliver peace of mind. Our foundation is built on the legendary bravery and integrity of the Gorkhali spirit, infused with modern tactical excellence. 
                Every client we serve becomes part of our mission to create a safer world, one detail at a time."
              </p>
            </div>

            <div className="ceo-signature-block-premium">
              <div className="signature-area">
                <span className="signature-text">Bikram Shrestha</span>
                <div className="signature-underline"></div>
                <span className="signature-title">CEO</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
