import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about.png';

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
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="about-image"
          >
            <img src={aboutImg} alt="About Security" />
            <div className="experience-badge">
              <h3>12+</h3>
              <p>Years Of Experience</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="about-content"
          >
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
              <span className="subtitle">Who We Are</span>
              <h2>We Provide Top-Notch <span className="text-primary">Security Services</span> For You</h2>
            </div>
            
            <p className="description">
              At Gorkhali Security, we understand that safety is not just a service, but a fundamental 
              necessity. With over a decade of experience, we have established ourselves as 
              a leader in private security, providing peace of mind to high-profile individuals, 
              corporate entities, and private estates.
            </p>
            
            <div className="points-grid">
              {points.map((point, index) => (
                <div key={index} className="point-item">
                  <CheckCircle className="text-primary" size={24} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            
            <button className="btn btn-primary" style={{ marginTop: '3.5rem' }}>Learn More About Us</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
