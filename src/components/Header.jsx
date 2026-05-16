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
              <span><Phone size={16} /> +971 4 333 5630</span>
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
            <Link to="/" className="logo-link" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <motion.div 
                className="logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={logo} alt="Gorkhali Security Logo" className="logo-img" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              >
                <span style={{ fontSize: '1.9rem', fontWeight: '800', color: 'var(--primary)', letterSpacing: '2px', textTransform: 'uppercase', lineHeight: '1' }}>
                  GORKHALI
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--primary)', letterSpacing: '3px', textTransform: 'uppercase', marginTop: '4px' }}>
                  Security Services
                </span>
              </motion.div>
            </Link>
            
            <ul className="nav-links">
              <li><HashLink smooth to="/#home">Home</HashLink></li>
              <li><HashLink smooth to="/#about">About Us</HashLink></li>
              <li><HashLink smooth to="/#services">Services</HashLink></li>
              <li><Link to="/team">Our Team</Link></li>
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

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mobile-menu"
            >
              <ul className="mobile-nav-links">
                {[
                  { to: "/#home", label: "Home" },
                  { to: "/#about", label: "About Us" },
                  { to: "/#services", label: "Services" },
                  { to: "/team", label: "Our Team", isLink: true },
                  { to: "/contact", label: "Contact", isLink: true }
                ].map((link, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    {link.isLink ? (
                      <Link to={link.to} onClick={closeMenu}>{link.label}</Link>
                    ) : (
                      <HashLink smooth to={link.to} onClick={closeMenu}>{link.label}</HashLink>
                    )}
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>Get A Quote</Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
