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
      title: "Sports Club Security",
      description: "Dedicated security solutions for sports clubs, ensuring a safe environment for athletes and fans."
    },
    {
      icon: Users,
      title: "Events Security",
      description: "Comprehensive crowd management and security solutions for large-scale professional events."
    },
    {
      icon: UserPlus,
      title: "Body Guard",
      description: "Elite protection for high-profile individuals, ensuring personal safety in all environments."
    },
    {
      icon: Shield,
      title: "General Security",
      description: "Versatile security services tailored for businesses, residential areas, and industrial sites."
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
