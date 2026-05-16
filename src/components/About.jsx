import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import knivesBg from '../assets/Knives.avif';

const About = () => {
  const points = [
    "Highly Trained Professionals",
    "24/7 Security Monitoring",
    "Rapid Response Teams",
    "Customized Security Solutions",
    "State-of-the-Art Technology",
    "Global Security Network"
  ];

  return (
    <section id="about" className="about" style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div 
        className="about-bg-image" 
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          repeatType: "reverse", 
          ease: "linear" 
        }}
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          backgroundImage: `url(${knivesBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.05,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      ></motion.div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="about-single-content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="about-content"
            style={{ textAlign: 'center', margin: '0 auto' }}
          >
            <div className="section-header" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span className="subtitle">Who We Are</span>
              <h2>We Provide Top-Notch <span className="text-primary">Security Services</span> For You</h2>
            </div>
            
            <p className="description" style={{ margin: '0 auto 3.5rem', maxWidth: '900px' }}>
              Our legacy is rooted in the legendary bravery of the <strong>Gorkhali soldiers</strong>, 
              world-renowned for their unwavering courage and loyalty. Just as the iconic 
              <strong>Gorkhali Khukuri</strong> symbolizes strength and precision, we embody 
              these values in our modern security practices. We carry forward a centuries-old 
              tradition of tactical excellence, providing unparalleled protection for 
              high-profile individuals and businesses worldwide.
            </p>
            
            <div className="points-grid">
              {points.map((point, index) => (
                <motion.div 
                  key={index} 
                  className="point-item"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="point-icon">
                    <CheckCircle className="text-primary" size={20} />
                  </div>
                  <span>{point}</span>
                </motion.div>
              ))}
            </div>
            
            <button className="btn btn-primary" style={{ marginTop: '4rem' }}>Learn More About Us</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
