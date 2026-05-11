import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <span className="subtitle">Contact Us</span>
            <h2>Get In <span className="text-primary">Touch</span></h2>
            <p className="description">
              Have questions about our security services? We're here to help. 
              Our team is available 24/7 to ensure your safety and peace of mind.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid-page">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="contact-info-side"
              style={{ 
                backgroundImage: `url(${logo})`,
                backgroundSize: '300px',
                backgroundPosition: 'right bottom',
                backgroundRepeat: 'no-repeat',
                position: 'relative'
              }}
            >
              <div className="info-overlay-logo"></div>
              <div className="info-content-relative">
                <h3>Contact Information</h3>
                <p>Fill out the form and our team will get back to you within 24 hours.</p>

                <div className="info-items">
                  <div className="info-item">
                    <div className="icon-box">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4>Call Us</h4>
                      <p>+1 (555) 000-1234</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="icon-box">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4>Email Us</h4>
                      <p>info@gorkhalisecurity.com</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="icon-box">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4>Our Office</h4>
                      <p>123 Security Plaza, New York, NY 10001, USA</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="icon-box">
                      <Clock size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4>Working Hours</h4>
                      <p>24/7 Security Support Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="contact-form-side"
            >
              <form className="contact-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="Subject of your message" required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="How can we help you?" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Send Message <Send size={18} style={{ marginLeft: '10px' }} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="contact-map">
        <div className="container-fluid">
          <div className="map-placeholder">
            {/* You can embed a real Google Map here */}
            <div className="map-overlay">
              <MapPin size={40} className="text-primary" />
              <h4>Our Location</h4>
              <p>Find us in the heart of the city</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
