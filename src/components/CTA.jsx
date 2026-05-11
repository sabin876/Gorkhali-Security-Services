import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="cta-card"
        >
          <div className="cta-content">
            <h2>Ready to Secure Your Assets?</h2>
            <p>Contact us today for a free consultation and personalized security assessment.</p>
          </div>
          <div className="cta-action">
            <a href="https://wa.me/9779841000000" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              WhatsApp Us
            </a>
            <a href="tel:+9779841000000" className="btn btn-primary">
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
