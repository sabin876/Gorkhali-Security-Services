import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, UserPlus, Truck, Video, Users, FileText, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

// Import fallback images
import sportsImg from '../assets/sports.png';
import eventsImg from '../assets/events.png';
import bodyguardImg from '../assets/bodyguard.png';
import generalImg from '../assets/general.png';

const iconMap = {
  Shield: Shield,
  Users: Users,
  UserPlus: UserPlus,
  Video: Video,
  Truck: Truck,
  FileText: FileText,
};

const imageMap = {
  'sports-club-security': sportsImg,
  'events-security': eventsImg,
  'elite-bodyguards': bodyguardImg,
  'general-security': generalImg,
};

const defaultServices = [
  {
    icon: Shield,
    title: "Sports Club Security",
    slug: "sports-club-security",
    description: "Dedicated security solutions for elite sports clubs, ensuring safe environments with specialized crowd management.",
    detailed_description: "Our sports club security personnel undergo rigorous tactical crowd management, conflict de-escalation, and perimeter protection training to safeguard players, VIPs, and spectators.",
    image: sportsImg,
    animationType: 'left'
  },
  {
    icon: Users,
    title: "Events Security",
    slug: "events-security",
    description: "Comprehensive security for high-profile events, festivals, and corporate gatherings with professional coordination.",
    detailed_description: "End-to-end event security planning including access control, metal detection screening, VIP escort, emergency egress management, and covert monitoring.",
    image: eventsImg,
    animationType: 'right'
  },
  {
    icon: UserPlus,
    title: "Elite Bodyguards",
    slug: "elite-bodyguards",
    description: "VIP personal protection for high-profile individuals, ensuring privacy and safety in any environment.",
    detailed_description: "Close protection officers trained under elite international defense and Gurkha tactical protocols, providing discreet and unwavering 24/7 personal safety.",
    image: bodyguardImg,
    animationType: 'bottom'
  },
  {
    icon: Video,
    title: "General Security",
    slug: "general-security",
    description: "Advanced 24/7 monitoring and physical security for high-end residential and commercial assets.",
    detailed_description: "Manned guarding, biometric gate inspection, mobile patrols, and integration with modern electronic surveillance systems.",
    image: generalImg,
    animationType: 'scale'
  }
];

const ServiceCard = ({ icon: Icon, title, slug, description, detailed_description, image, index, delay, animationType }) => {
  const CardIcon = Icon || Shield;
  const targetSlug = slug || title.toLowerCase().replace(/\s+/g, '-');

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
            <CardIcon size={28} />
          </div>
        </div>
        
        <div className="card-text-modern">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        
        <Link 
          to={`/services/${targetSlug}`}
          state={{ 
            title, 
            slug: targetSlug, 
            description, 
            detailed_description, 
            image 
          }}
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
  const [servicesList, setServicesList] = useState(defaultServices);

  useEffect(() => {
    fetch('http://localhost:8000/api/services/')
      .then((res) => {
        if (!res.ok) throw new Error('API request failed');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.map((item, idx) => {
            const IconComponent = iconMap[item.icon_name] || Shield;
            const img = item.image || item.image_url || imageMap[item.slug] || [sportsImg, eventsImg, bodyguardImg, generalImg][idx % 4];
            const animTypes = ['left', 'right', 'bottom', 'scale'];
            return {
              id: item.id,
              slug: item.slug,
              icon: IconComponent,
              title: item.title,
              description: item.short_description,
              detailed_description: item.detailed_description,
              image: img,
              animationType: animTypes[idx % 4],
            };
          });
          setServicesList(mapped);
        }
      })
      .catch((err) => {
        console.warn('Backend services API not reached, using defaults:', err);
      });
  }, []);

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
          {servicesList.map((service, index) => (
            <ServiceCard 
              key={service.slug || index} 
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
