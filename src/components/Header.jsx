import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Phone, Mail, Clock, Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <>
      <div className={`top-bar ${isScrolled ? 'hidden' : ''}`}>
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <span><Phone size={16} /> +1 (555) 000-1234</span>
              <span><Mail size={16} /> info@gorkhalisecurity.com</span>
              <span><Clock size={16} /> 24/7 Security Support</span>
            </div>
            <div className="social-links">
              <a href="#">FB</a>
              <a href="#">TW</a>
              <a href="#">LI</a>
              <a href="#">IG</a>
            </div>
          </div>
        </div>
      </div>
      
      <header className={isScrolled ? 'scrolled' : ''}>
        <div className="container">
          <nav className="navbar">
            <Link to="/" className="logo-link">
              <motion.div 
                className="logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: [1, 1.03, 1],
                }}
                transition={{ 
                  opacity: { duration: 0.6 },
                  scale: { 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }
                }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={logo} alt="Gorkhali Security Logo" className="logo-img" />
              </motion.div>
            </Link>
            
            <ul className="nav-links">
              <li><HashLink smooth to="/#home">Home</HashLink></li>
              <li><HashLink smooth to="/#about">About Us</HashLink></li>
              <li><HashLink smooth to="/#services">Services</HashLink></li>
              <li><HashLink smooth to="/#team">Team</HashLink></li>
              <li><HashLink smooth to="/#vacancy">Vacancy</HashLink></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            
            <div className="nav-actions">
              <Link to="/contact" className="btn btn-primary desktop-only">Get A Quote</Link>
              <button className="menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mobile-menu"
            >
              <ul className="mobile-nav-links">
                <li><HashLink smooth to="/#home" onClick={closeMenu}>Home</HashLink></li>
                <li><HashLink smooth to="/#about" onClick={closeMenu}>About Us</HashLink></li>
                <li><HashLink smooth to="/#services" onClick={closeMenu}>Services</HashLink></li>
                <li><HashLink smooth to="/#team" onClick={closeMenu}>Team</HashLink></li>
                <li><HashLink smooth to="/#vacancy" onClick={closeMenu}>Vacancy</HashLink></li>
                <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                <li><Link to="/contact" className="btn btn-primary" onClick={closeMenu}>Get A Quote</Link></li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
