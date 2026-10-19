import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, Shield, CheckCircle2 } from 'lucide-react';
import contactBg from '../assets/contact-bg.png';
import useDocumentMetadata from '../hooks/useDocumentMetadata';
import { API_ENDPOINTS } from '../config/api';

const Contact = () => {
  useDocumentMetadata(
    "Contact Gorkhali Security | Elite Private Protection Dubai",
    "Get in touch with Gorkhali Security Services. Contact our Dubai headquarters for premium bodyguard services, event safety management, and custom VIP security plans."
  );

  const [formState, setFormState] = useState({
    full_name: '',
    email: '',
    phone: '',
    service_type: 'vip',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(API_ENDPOINTS.inquiries, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });
      setSubmitted(true);
      setFormState({
        full_name: '',
        email: '',
        phone: '',
        service_type: 'vip',
        message: ''
      });
    } catch (err) {
      console.warn('Backend API submission fallback:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const contactDetails = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+971 4 333 5630",
      description: "Mon-Fri from 10 am to 6 pm.",
      action: "tel:+97143335630"
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "info@gssdubai.com",
      description: "We'll respond within 24 hours.",
      action: "mailto:info@gssdubai.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "NBQ Building, Office 602",
      description: "Khalid Bin Al Waleed Rd, Al Hamriya, Dubai",
      action: "https://maps.google.com"
    }
  ];

  return (
    <div className="contact-modern-page">
      {/* Hero Section */}
      <section className="contact-hero-premium">
        <div className="hero-bg-wrapper">
          <img src={contactBg} alt="" className="hero-bg-img" />
          <div className="hero-overlay-dark"></div>
        </div>
        
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text-content"
          >
            <div className="badge-modern">
              <Shield size={16} />
              <span>Contact Gorkhali Security</span>
            </div>
            <h1>Get Professional <span className="text-primary">Protection</span></h1>
            <p>
              Connect with our security experts today. Whether you need VIP protection, 
              event security, or asset management, we are here to provide unmatched safety.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-main-content">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Info Side */}
            <div className="contact-info-panel">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="info-header"
              >
                <h2>Ready to assist you <br/><span className="text-primary">24/7</span></h2>
                <p>Our team is always on standby to ensure your complete security and peace of mind.</p>
              </motion.div>

              <div className="details-list">
                {contactDetails.map((detail, index) => (
                  <motion.a
                    key={index}
                    href={detail.action}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="detail-card-modern"
                  >
                    <div className="detail-icon">
                      <detail.icon size={24} />
                    </div>
                    <div className="detail-text">
                      <h4>{detail.title}</h4>
                      <p className="detail-value">{detail.value}</p>
                      <p className="detail-desc">{detail.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="contact-features">
                <div className="feature-item">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span>Licensed & Certified Professionals</span>
                </div>
                <div className="feature-item">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span>Global Security Standards</span>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="contact-form-panel"
            >
              <div className="form-card-glass">
                <div className="form-header">
                  <h3>Send a Message</h3>
                  <p>Inquire about our services or request a custom quote.</p>
                </div>

                {submitted ? (
                  <div style={{ padding: '2rem 1rem', textAlign: 'center' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Inquiry Submitted!</h4>
                    <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                      Thank you for contacting Gorkhali Security. Our operations team will review your inquiry and respond within 24 hours.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="btn btn-primary"
                      style={{ padding: '0.6rem 1.25rem' }}
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form className="modern-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-input-group">
                        <label>Full Name *</label>
                        <input 
                          type="text" 
                          placeholder="Your Name" 
                          required 
                          value={formState.full_name}
                          onChange={(e) => setFormState({ ...formState, full_name: e.target.value })}
                        />
                      </div>
                      <div className="form-input-group">
                        <label>Email Address *</label>
                        <input 
                          type="email" 
                          placeholder="name@example.com" 
                          required 
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-input-group">
                        <label>Phone Number</label>
                        <input 
                          type="tel" 
                          placeholder="+971 50 000 0000" 
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        />
                      </div>
                      <div className="form-input-group">
                        <label>Security Service Type</label>
                        <select 
                          required
                          value={formState.service_type}
                          onChange={(e) => setFormState({ ...formState, service_type: e.target.value })}
                        >
                          <option value="vip">VIP Bodyguard</option>
                          <option value="event">Event Security</option>
                          <option value="bouncer">Club Bouncer</option>
                          <option value="residence">Residence Security</option>
                          <option value="general">General Security</option>
                          <option value="other">Other Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-input-group">
                      <label>Message *</label>
                      <textarea 
                        placeholder="Tell us about your security requirements..." 
                        rows="4" 
                        required
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      ></textarea>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit" 
                      className="submit-btn-premium"
                      disabled={loading}
                    >
                      <span>{loading ? 'Submitting...' : 'Request A Quote'}</span>
                      <Send size={18} />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-premium">
        <div className="container">
          <div className="map-frame-wrapper">
            <div className="map-placeholder-modern">
              <div className="map-info-card">
                <div className="logo-small">
                  <Shield size={24} className="text-primary" />
                  <span>GORKHALI</span>
                </div>
                <p>Office 602, NBQ Building, Khalid Bin Al Waleed Rd, Al Hamriya, Dubai</p>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-link">Get Directions</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
