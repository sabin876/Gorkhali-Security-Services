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
            <button className="btn btn-primary">Get A Free Quote</button>
            <button className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>Contact Us</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
