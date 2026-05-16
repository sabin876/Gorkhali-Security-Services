import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpeg';

const Loader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="loader-wrapper"
    >
      <div className="loader-content">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.1, 1],
            opacity: 1,
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="loader-logo-container"
        >
          <img src={logo} alt="Gorkhali Security Logo" className="loader-logo" />
        </motion.div>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="loader-progress-bar"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="loader-text"
        >
          GORKHALI SECURITY
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
