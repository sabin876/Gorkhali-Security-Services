import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingCTA = () => {
  return (
    <div className="floating-cta">
      <motion.a 
        href="tel:+97143335630"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        className="floating-btn call"
        title="Call Us"
      >
        <Phone size={24} />
      </motion.a>
      
      <motion.a 
        href="https://wa.me/971505576217"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="floating-btn whatsapp"
        title="WhatsApp Us"
      >
        <MessageCircle size={28} />
      </motion.a>
    </div>
  );
};

export default FloatingCTA;
