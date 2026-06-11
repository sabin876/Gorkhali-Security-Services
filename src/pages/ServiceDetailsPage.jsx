import React, { useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import contactBg from '../assets/contact-bg.png';
import useDocumentMetadata from '../hooks/useDocumentMetadata';

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const serviceTitle = id ? id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : "Security Service";
  
  // Use state if provided, otherwise fallback to defaults
  const description = location.state?.description || "Comprehensive security solutions tailored to your specific needs. Our expert team provides top-tier protection and peace of mind.";
  const image = location.state?.image || contactBg;

  useDocumentMetadata(
    `${serviceTitle} | Gorkhali Security Services`,
    description
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="service-details-page">
      {/* Hero Section */}
      <section className="contact-hero-premium" style={{ height: '50vh' }}>
        <div className="hero-bg-wrapper">
          <img src={image} alt={serviceTitle} className="hero-bg-img" />
          <div className="hero-overlay-dark"></div>
        </div>
        
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text-content"
          >
            <h1>{serviceTitle}</h1>
            <p>
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="service-details-content section-padding" style={{ padding: '6rem 0', backgroundColor: '#ffffff', color: 'var(--secondary)' }}>
        <div className="container">
          <div className="row" style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <div className="col-lg-8" style={{ flex: '1 1 60%' }}>
              <Link to="/" className="btn-link-gold" style={{ marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 'bold' }}>
                <ArrowLeft size={20} /> Back to Services
              </Link>
              
              <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem', color: 'var(--secondary)' }}>Comprehensive Protection</h2>
              <p style={{ color: '#4b5563', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                At Gorkhali Security Services, our {serviceTitle.toLowerCase()} protocols are designed to offer impenetrable defense. Drawing from the legendary Gurkha heritage, our personnel are trained in advanced threat detection, rapid response, and strategic risk mitigation.
              </p>
              <p style={{ color: '#4b5563', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                We understand that every client has unique security requirements. Our approach begins with a comprehensive vulnerability assessment, followed by the deployment of tailored security measures combining human intelligence with state-of-the-art technology.
              </p>

              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem', color: 'var(--secondary)' }}>Key Features of this Service</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '3rem' }}>
                {["24/7 Dedicated Monitoring & Surveillance", "Highly Trained Tactical Personnel", "Rapid Emergency Response Protocols", "Comprehensive Risk Assessments"].map((feature, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem', fontSize: '1.1rem', color: 'var(--secondary)', fontWeight: '500' }}>
                    <CheckCircle className="text-primary" size={24} /> {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-lg-4" style={{ flex: '1 1 30%' }}>
              <div style={{ backgroundColor: 'var(--bg-light)', padding: '3rem', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.05)', position: 'sticky', top: '100px' }}>
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem', color: 'var(--secondary)' }}>Need Immediate Assistance?</h3>
                <p style={{ color: '#4b5563', marginBottom: '2rem', lineHeight: '1.6' }}>Our security experts are standing by to discuss your specific requirements and architect a custom protection plan.</p>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', display: 'block', textAlign: 'center' }}>Contact Us Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailsPage;
