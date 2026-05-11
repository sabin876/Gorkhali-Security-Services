import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const VacancyCard = ({ title, location, type, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="vacancy-card"
  >
    <div className="vacancy-icon">
      <Briefcase size={30} className="text-primary" />
    </div>
    <div className="vacancy-info">
      <h3>{title}</h3>
      <div className="vacancy-meta">
        <span><MapPin size={16} /> {location}</span>
        <span><Clock size={16} /> {type}</span>
      </div>
    </div>
    <button className="btn btn-outline btn-sm">
      Apply Now <ArrowRight size={16} />
    </button>
  </motion.div>
);

const Vacancy = () => {
  const jobs = [
    {
      title: "Senior Security Officer",
      location: "New York, NY",
      type: "Full Time"
    },
    {
      title: "Private Bodyguard",
      location: "Los Angeles, CA",
      type: "Contract"
    },
    {
      title: "CCTV Operator",
      location: "London, UK",
      type: "Full Time"
    },
    {
      title: "Risk Assessment Analyst",
      location: "Remote",
      type: "Part Time"
    }
  ];

  return (
    <section id="vacancy" className="vacancy">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Careers</span>
          <h2>Join Our <span className="text-primary">Elite Team</span></h2>
          <p className="description" style={{ maxWidth: '700px', margin: '1.5rem auto' }}>
            We are always looking for highly motivated and professional individuals to join Gorkhali Security. 
            If you have the skills and dedication, we want to hear from you.
          </p>
        </div>
        
        <div className="vacancy-grid">
          {jobs.map((job, index) => (
            <VacancyCard key={index} {...job} delay={index * 0.1} />
          ))}
        </div>
        
        <div className="vacancy-footer" style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p>Don't see a position that fits? Send us your resume anyway!</p>
          <button className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Send CV</button>
        </div>
      </div>
    </section>
  );
};

export default Vacancy;
