import React from 'react';
import { Shield, Share2, ExternalLink, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const TeamMember = ({ name, role, image, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="team-card"
  >
    <div className="team-image">
      <img src={image} alt={name} />
      <div className="team-social">
        <a href="#"><Share2 size={20} /></a>
        <a href="#"><ExternalLink size={20} /></a>
        <a href="#"><Globe size={20} /></a>
        <a href="#"><Shield size={20} /></a>
      </div>
    </div>
    <div className="team-info">
      <h4>{name}</h4>
      <p>{role}</p>
    </div>
  </motion.div>
);

const Team = () => {
  const members = [
    {
      name: "Marcus Thorne",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=600"
    },
    {
      name: "Elena Rodriguez",
      role: "VIP Protection Lead",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=600"
    },
    {
      name: "David Chen",
      role: "Asset Security Expert",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=600"
    },
    {
      name: "Sarah Jenkins",
      role: "Security Consultant",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=600"
    }
  ];

  return (
    <section id="team" className="team bg-light">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Expert Team</span>
          <h2>Our <span className="text-primary">Professional</span> Guards</h2>
        </div>
        
        <div className="team-grid">
          {members.map((m, index) => (
            <TeamMember key={index} {...m} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
