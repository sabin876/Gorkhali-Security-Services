import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Phone, Mail, MapPin, ArrowRight, Share2, ExternalLink, Globe, MessageSquare } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo" style={{ marginBottom: '2rem' }}>
              <img src={logo} alt="Gorkhali Security Logo" className="logo-img" />
              <span className="logo-text">GORKHALI <span className="text-primary">SECURITY</span></span>
            </div>
            <p className="footer-desc">
              Professional security services dedicated to protecting your assets, 
              employees, and loved ones with unmatched expertise and technology.
            </p>
            <div className="social-icons">
              <a href="#"><Share2 size={22} /></a>
              <a href="#"><ExternalLink size={22} /></a>
              <a href="#"><Globe size={22} /></a>
              <a href="#"><MessageSquare size={22} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><HashLink smooth to="/#home"><ArrowRight size={16} /> Home</HashLink></li>
              <li><HashLink smooth to="/#about"><ArrowRight size={16} /> About Us</HashLink></li>
              <li><HashLink smooth to="/#services"><ArrowRight size={16} /> Our Services</HashLink></li>
              <li><Link to="/contact"><ArrowRight size={16} /> Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>Our Services</h3>
            <ul>
              <li><Link to="/services/sports-club-security" state={{ description: "Dedicated security solutions for elite sports clubs, ensuring safe environments with specialized crowd management." }}><ArrowRight size={16} /> Sports Club Security</Link></li>
              <li><Link to="/services/events-security" state={{ description: "Comprehensive security for high-profile events, festivals, and corporate gatherings with professional coordination." }}><ArrowRight size={16} /> Events Security</Link></li>
              <li><Link to="/services/elite-bodyguards" state={{ description: "VIP personal protection for high-profile individuals, ensuring privacy and safety in any environment." }}><ArrowRight size={16} /> Elite Bodyguards</Link></li>
              <li><Link to="/services/general-security" state={{ description: "Advanced 24/7 monitoring and physical security for high-end residential and commercial assets." }}><ArrowRight size={16} /> General Security</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <div className="contact-item">
              <MapPin className="text-primary" size={24} />
              <p>Office #602, NBQ Bank Building, Khalid Bin Al Waleed Road, Dubai, UAE</p>
            </div>
            <div className="contact-item">
              <Phone className="text-primary" size={24} />
              <p>+971 4 333 5630</p>
            </div>
            <div className="contact-item">
              <Mail className="text-primary" size={24} />
              <p>info@gorkhalisecurity.com</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Gorkhali Security. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
