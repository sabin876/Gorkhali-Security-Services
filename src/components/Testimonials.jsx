import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.jpeg';

const defaultTestimonials = [
  {
    name: "John Anderson",
    role: "CEO, Tech Corp",
    content: "Gorkhali Security has been providing our executive team with protection for 3 years. Their professionalism and attention to detail are unmatched in the industry.",
    rating: 5,
    image: ""
  },
  {
    name: "Sarah Williams",
    role: "Private Estate Owner",
    content: "The level of security and peace of mind we have since hiring Gorkhali Security for our estate is incredible. Their team is discreet, professional, and highly capable.",
    rating: 5,
    image: ""
  },
  {
    name: "Robert Davis",
    role: "Event Coordinator",
    content: "We've used Gorkhali Security for several high-capacity events. They manage the crowd perfectly while maintaining a friendly but firm presence. Highly recommended!",
    rating: 5,
    image: ""
  },
  {
    name: "Elena Rodriguez",
    role: "Luxury Hotel Manager",
    content: "The specialized security training the Gorkhali team brings to our hospitality environment is world-class. They understand the balance between safety and guest experience.",
    rating: 5,
    image: ""
  }
];

const Testimonials = () => {
  const [testimonialsList, setTestimonialsList] = useState(defaultTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Fetch testimonials dynamically from Django backend
  useEffect(() => {
    fetch('http://localhost:8000/api/testimonials/')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch testimonials');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.map((item) => ({
            name: item.client_name,
            role: item.designation_or_company || "Valued Client",
            content: item.content,
            rating: item.rating || 5,
            image: item.image || "",
          }));
          setTestimonialsList(mapped);
        }
      })
      .catch((err) => {
        console.warn('Backend testimonials API not reached, using defaults:', err);
      });
  }, []);

  useEffect(() => {
    if (testimonialsList.length === 0) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonialsList.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonialsList.length]);

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
    if (testimonialsList.length === 0) return;
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonialsList.length) % testimonialsList.length);
  };

  if (testimonialsList.length === 0) return null;

  const current = testimonialsList[currentIndex] || testimonialsList[0];

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
                      {[...Array(current.rating || 5)].map((_, i) => (
                        <Star key={i} size={20} fill="var(--primary)" color="var(--primary)" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="testimonial-text">"{current.content}"</p>
                  
                  <div className="testimonial-footer">
                    {current.image ? (
                      <img 
                        src={current.image} 
                        alt={current.name} 
                        className="client-avatar" 
                        style={{ objectFit: 'cover', borderRadius: '50%' }} 
                      />
                    ) : (
                      <div className="client-avatar">
                        {current.name.charAt(0)}
                      </div>
                    )}
                    <div className="client-meta">
                      <h4>{current.name}</h4>
                      <span>{current.role}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="slider-controls">
            <button className="slider-btn prev" onClick={() => paginate(-1)} aria-label="Previous Testimonial">
              <ChevronLeft size={24} />
            </button>
            <div className="slider-dots">
              {testimonialsList.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button className="slider-btn next" onClick={() => paginate(1)} aria-label="Next Testimonial">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
