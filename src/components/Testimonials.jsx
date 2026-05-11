import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ name, role, content, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="testimonial-card"
  >
    <div className="quote-icon">
      <Quote size={50} fill="var(--primary)" color="var(--primary)" />
    </div>
    <div className="stars">
      {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="var(--primary)" color="var(--primary)" />)}
    </div>
    <p className="content">{content}</p>
    <div className="client-info">
      <div className="client-details">
        <h4>{name}</h4>
        <span>{role}</span>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Anderson",
      role: "CEO, Tech Corp",
      content: "Gorkhali Security has been providing our executive team with protection for 3 years. Their professionalism and attention to detail are unmatched in the industry."
    },
    {
      name: "Sarah Williams",
      role: "Private Estate Owner",
      content: "The level of security and peace of mind we have since hiring Gorkhali Security for our estate is incredible. Their team is discreet, professional, and highly capable."
    },
    {
      name: "Robert Davis",
      role: "Event Coordinator",
      content: "We've used Gorkhali Security for several high-capacity events. They manage the crowd perfectly while maintaining a friendly but firm presence. Highly recommended!"
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Testimonials</span>
          <h2>What Our <span className="text-primary">Clients Say</span></h2>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} {...t} delay={index * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
