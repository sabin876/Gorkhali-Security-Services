import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './components/Contact';
import TeamPage from './pages/TeamPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import Loader from './components/Loader';
import './index.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <AnimatePresence mode="wait">
          {loading && <Loader key="loader" />}
        </AnimatePresence>
        
        {!loading && (
          <>
            <Header isScrolled={isScrolled} />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/services/:id" element={<ServiceDetailsPage />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
