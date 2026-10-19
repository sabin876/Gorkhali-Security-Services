import React, { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Shield, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import contactBg from '../assets/contact-bg.png';
import sportsImg from '../assets/sports.png';
import eventsImg from '../assets/events.png';
import bodyguardImg from '../assets/bodyguard.png';
import generalImg from '../assets/general.png';
import useDocumentMetadata from '../hooks/useDocumentMetadata';

const imageMap = {
  'sports-club-security': sportsImg,
  'events-security': eventsImg,
  'elite-bodyguards': bodyguardImg,
  'general-security': generalImg,
};

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();

  // State from navigation Link if available
  const stateData = location.state || {};

  const [service, setService] = useState({
    title: stateData.title || (id ? id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : "Security Service"),
    short_description: stateData.description || "Comprehensive security solutions tailored to your specific needs. Our expert team provides top-tier protection and peace of mind.",
    detailed_description: stateData.detailed_description || "",
    image_url: stateData.image || imageMap[id] || contactBg,
  });

  const [loading, setLoading] = useState(false);

  useDocumentMetadata(
    `${service.title} | Gorkhali Security Services`,
    service.short_description
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    if (id) {
      setLoading(true);
      fetch(`http://localhost:8000/api/services/${id}/`)
        .then((res) => {
          if (!res.ok) throw new Error('Service not found by slug');
          return res.json();
        })
        .then((data) => {
          if (data && data.title) {
            setService({
              title: data.title,
              short_description: data.short_description || service.short_description,
              detailed_description: data.detailed_description || "",
              image_url: data.image || data.image_url || imageMap[data.slug] || imageMap[id] || service.image_url || contactBg,
            });
          }
        })
        .catch((err) => {
          console.warn('Using local service state / fallback:', err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  const heroImg = service.image_url || imageMap[id] || contactBg;

  // Render detailed description paragraphs
  const detailedText = service.detailed_description || 
    `At Gorkhali Security Services, our ${service.title.toLowerCase()} operations are engineered to provide impenetrable defense and absolute client peace of mind. Drawing from the legendary Gurkha courage and international VIP defense protocols, our tactical units ensure seamless protection across Dubai and the UAE.
    
We understand that every client and organization requires unique operational protocols. Our defensive approach begins with a thorough risk audit and vulnerability assessment, followed by the deployment of certified security personnel equipped with modern tactical communication and surveillance frameworks.`;

  return (
    <div className="service-details-page">
      {/* Hero Section */}
      <section className="contact-hero-premium" style={{ height: '52vh', position: 'relative' }}>
        <div className="hero-bg-wrapper">
          <img src={heroImg} alt={service.title} className="hero-bg-img" />
          <div className="hero-overlay-dark"></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text-content"
          >
            <div className="badge-modern" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', background: 'rgba(197, 160, 89, 0.15)', color: 'var(--primary)', padding: '6px 16px', borderRadius: '30px', border: '1px solid rgba(197, 160, 89, 0.3)' }}>
              <Shield size={16} />
              <span>Gorkhali Security Division</span>
            </div>
            <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: '#fff' }}>
              {service.title}
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#e5e7eb', maxWidth: '800px', lineHeight: '1.6' }}>
              {service.short_description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="service-details-content section-padding" style={{ padding: '5rem 0', backgroundColor: '#ffffff', color: 'var(--secondary)' }}>
        <div className="container">
          <div className="row" style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            {/* Left Main Article */}
            <div className="col-lg-8" style={{ flex: '1 1 60%' }}>
              <Link to="/#services" className="btn-link-gold" style={{ marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 'bold', textDecoration: 'none' }}>
                <ArrowLeft size={20} /> Back to All Services
              </Link>
              
              <h2 style={{ marginBottom: '1.5rem', fontSize: '2.2rem', fontWeight: '700', color: 'var(--secondary)' }}>
                Comprehensive Overview & Operations
              </h2>

              {/* Dynamic Detailed Description from Django Backend */}
              <div 
                className="service-detailed-text" 
                style={{ 
                  color: '#374151', 
                  fontSize: '1.12rem', 
                  lineHeight: '1.9', 
                  marginBottom: '2.5rem', 
                  whiteSpace: 'pre-line',
                  backgroundColor: '#f9fafb',
                  padding: '2rem',
                  borderRadius: '14px',
                  borderLeft: '4px solid var(--primary)'
                }}
              >
                {detailedText}
              </div>

              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.7rem', color: 'var(--secondary)' }}>
                Service Capabilities & Standards
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '3rem' }}>
                {[
                  "24/7 Rapid Incident Response & Operational Monitoring",
                  "Vetted & Certified Close Protection Personnel",
                  "Advanced Tactical Crowd & Venue Access Protocols",
                  "Tailored Security Risk Analysis & Confidentiality Agreements"
                ].map((feature, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.1rem', fontSize: '1.05rem', color: '#1f2937', fontWeight: '500' }}>
                    <CheckCircle style={{ color: 'var(--primary)', flexShrink: 0 }} size={22} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right Sticky Sidebar */}
            <div className="col-lg-4" style={{ flex: '1 1 30%' }}>
              <div style={{ backgroundColor: '#f3f4f6', padding: '2.5rem', borderRadius: '18px', border: '1px solid rgba(0,0,0,0.06)', position: 'sticky', top: '100px' }}>
                <div style={{ display: 'inline-flex', padding: '8px', borderRadius: '10px', background: 'rgba(197, 160, 89, 0.15)', color: 'var(--primary)', marginBottom: '1rem' }}>
                  <Shield size={28} />
                </div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.6rem', color: 'var(--secondary)' }}>
                  Request this Service
                </h3>
                <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Speak directly with our defense deployment officers to customize this security package for your organization or private requirements.
                </p>

                <Link 
                  to="/contact" 
                  className="btn btn-primary" 
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', textDecoration: 'none', fontWeight: 'bold' }}
                >
                  <span>Request Custom Quote</span>
                </Link>

                <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: '#4b5563' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Phone size={15} style={{ color: 'var(--primary)' }} />
                    <span>+971 4 333 5630</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Mail size={15} style={{ color: 'var(--primary)' }} />
                    <span>info@gssdubai.com</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Clock size={15} style={{ color: 'var(--primary)' }} />
                    <span>24/7 Operations Duty Officer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailsPage;
