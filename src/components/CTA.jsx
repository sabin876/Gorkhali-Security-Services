import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="cta-card-premium"
        >
          <div className="cta-overlay-pattern" />
          
          <div className="cta-content-premium">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="cta-badge"
            >
              24/7 Rapid Response Available
            </motion.span>
            <h2>Ready to <span className="text-primary">Secure</span> Your Assets?</h2>
            <p>
              Join hundreds of elite clients who trust Gorkhali Security for their most 
              critical protection needs. Professional assessment is just a click away.
            </p>
            
            <div className="cta-actions-premium">
              <a href="tel:+97143335630" className="btn btn-premium">
                <Phone size={20} />
                <span>Immediate Consultation</span>
              </a>
              <a href="https://wa.me/971505576217" target="_blank" rel="noopener noreferrer" className="btn btn-outline-premium">
                <MessageCircle size={20} />
                <span>WhatsApp Elite Support</span>
                <ArrowRight size={16} className="arrow" />
              </a>
            </div>
          </div>

          <div className="cta-decorative-elements">
            <div className="decor-line" />
            <div className="decor-circle" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
