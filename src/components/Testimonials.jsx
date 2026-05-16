import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.jpeg';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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
    },
    {
      name: "Elena Rodriguez",
      role: "Luxury Hotel Manager",
      content: "The specialized security training the Gorkhali team brings to our hospitality environment is world-class. They understand the balance between safety and guest experience."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    })
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-premium">
      <div className="testimonials-bg-logo">
        <img src={logo} alt="" />
      </div>
      <div className="container">
        <div className="section-header-premium text-center">
          <span className="subtitle">Client Success Stories</span>
          <h2>What Our <span className="text-primary">Clients Say</span></h2>
          <p className="header-desc mx-auto">
            Trusted by global leaders and private individuals. Our reputation is built on 
            unwavering commitment and tactical excellence.
          </p>
        </div>
        
        <div className="testimonial-slider-container">
          <div className="slider-wrapper">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 }
                }}
                className="testimonial-slide"
              >
                <div className="premium-quote-card">
                  <div className="quote-header">
                    <Quote size={80} className="quote-icon-bg" />
                    <div className="stars-row">
                      {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="var(--primary)" color="var(--primary)" />)}
                    </div>
                  </div>
                  
                  <p className="testimonial-text">"{testimonials[currentIndex].content}"</p>
                  
                  <div className="testimonial-footer">
                    <div className="client-avatar">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                    <div className="client-meta">
                      <h4>{testimonials[currentIndex].name}</h4>
                      <span>{testimonials[currentIndex].role}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="slider-controls">
            <button className="slider-btn prev" onClick={() => paginate(-1)}>
              <ChevronLeft size={24} />
            </button>
            <div className="slider-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                />
              ))}
            </div>
            <button className="slider-btn next" onClick={() => paginate(1)}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
