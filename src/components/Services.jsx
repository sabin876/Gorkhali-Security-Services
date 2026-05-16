import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, UserPlus, Truck, Video, Users, FileText, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

// Import images
import sportsImg from '../assets/sports.png';
import eventsImg from '../assets/events.png';
import bodyguardImg from '../assets/bodyguard.png';
import generalImg from '../assets/general.png';

const ServiceCard = ({ icon: Icon, title, description, image, index, delay, animationType }) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: animationType === 'bottom' ? 50 : 0,
      x: animationType === 'left' ? -50 : animationType === 'right' ? 50 : 0,
      scale: animationType === 'scale' ? 0.8 : 1
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      scale: 1,
      transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.div 
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
      className="service-card-modern"
    >
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-bg-img" />
        <div className="card-overlay-gradient"></div>
        <div className="card-overlay-dark"></div>
      </div>
      
      <div className="card-content-modern">
        <div className="card-top-info">
          <span className="card-number">0{index + 1}</span>
          <div className="card-icon-modern">
            <Icon size={28} />
          </div>
        </div>
        
        <div className="card-text-modern">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        
        <Link 
          to={`/services/${title.toLowerCase().replace(/\s+/g, '-')}`}
          state={{ description, image }}
          className="card-link-modern"
        >
          Explore Service <ArrowRight size={18} />
        </Link>
      </div>
      
      <div className="card-border-glow"></div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Sports Club Security",
      description: "Dedicated security solutions for elite sports clubs, ensuring safe environments with specialized crowd management.",
      image: sportsImg,
      animationType: 'left'
    },
    {
      icon: Users,
      title: "Events Security",
      description: "Comprehensive security for high-profile events, festivals, and corporate gatherings with professional coordination.",
      image: eventsImg,
      animationType: 'right'
    },
    {
      icon: UserPlus,
      title: "Elite Bodyguards",
      description: "VIP personal protection for high-profile individuals, ensuring privacy and safety in any environment.",
      image: bodyguardImg,
      animationType: 'bottom'
    },
    {
      icon: Video,
      title: "General Security",
      description: "Advanced 24/7 monitoring and physical security for high-end residential and commercial assets.",
      image: generalImg,
      animationType: 'scale'
    }
  ];

  return (
    <section id="services" className="services-modern">
      <div className="decor-blob blob-1"></div>
      <div className="decor-blob blob-2"></div>
      
      <div className="container">
        <div className="section-header-modern">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="header-badge"
          >
            <Star size={16} fill="currentColor" />
            <span>Our Expertise</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Professional <span className="text-primary">Security Solutions</span>
          </motion.h2>
          

        </div>
        
        <div className="services-grid-modern">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              index={index} 
              delay={0.1 * index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
