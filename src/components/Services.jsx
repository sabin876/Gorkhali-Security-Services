import React from 'react';
import { Shield, UserPlus, Truck, Video, Users, FileText, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="service-card"
  >
    <div className="service-icon">
      <Icon size={45} strokeWidth={1.5} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <a href="#" className="read-more">
      Read More <ArrowRight size={18} />
    </a>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "VIP Bodyguard",
      description: "Elite protection for high-profile individuals, ensuring safety in all environments."
    },
    {
      icon: Truck,
      title: "Armored Transport",
      description: "Secure transportation of high-value assets and cash with professional security teams."
    },
    {
      icon: Users,
      title: "Event Security",
      description: "Comprehensive crowd management and security solutions for large-scale events."
    },
    {
      icon: Video,
      title: "CCTV Monitoring",
      description: "24/7 remote surveillance and threat detection using advanced monitoring technology."
    },
    {
      icon: UserPlus,
      title: "Private Investigation",
      description: "Professional investigation services for corporate and personal security matters."
    },
    {
      icon: FileText,
      title: "Security Audit",
      description: "In-depth risk assessment and security planning for homes and businesses."
    }
  ];

  return (
    <section id="services" className="services bg-light">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Our Services</span>
          <h2>Professional <span className="text-primary">Security Solutions</span></h2>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
