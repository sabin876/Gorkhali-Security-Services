import { motion } from 'framer-motion';
import { Mail, ShieldCheck, ExternalLink, Globe } from 'lucide-react';
import cyberSecurityImg from '../assets/Cyber Security.jpeg';
import ourTeamImg from '../assets/Our team.jpeg';
import lieutenantImg from '../assets/Lieutenant.jpg';
import digitalMarketingImg from '../assets/Digital Marketing Head.jpg';
import logoImg from '../assets/logo.jpeg';
import knivesBg from '../assets/Knives.avif';

const TeamMember = ({ name, role, image, index, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    whileHover={{ y: -10 }}
    transition={{ duration: 0.6, delay }}
    className="service-card-modern"
  >
    <div className="card-image-wrapper">
      <img src={image} alt={name} className="card-bg-img" />
      <div className="card-overlay-gradient"></div>
      <div className="card-overlay-dark"></div>
    </div>
    
    <div className="card-content-modern">
      <div className="card-top-info">
        <span className="card-number">0{index + 1}</span>
        <div className="card-icon-modern">
          <ShieldCheck size={28} />
        </div>
      </div>
      
      <div className="card-text-modern">
        <h3>{name}</h3>
        <p style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>{role}</p>
      </div>
    </div>
    
    <div className="card-border-glow"></div>
  </motion.div>
);

const Team = () => {
  const team = [
    {
      name: "Manoj Kumar Shrestha",
      role: "Chairman",
      image: ourTeamImg
    },

    {
      name: "Ayuv Bastola",
      role: "Digital Marketing Head",
      image: digitalMarketingImg
    },
    {
      name: "Bijayata Hamal",
      role: "Chief Technical Officer",
      image: cyberSecurityImg
    }
  ];

  return (
    <section id="team" className="team-section-modern relative">
      <motion.div 
        className="team-bg-image" 
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          repeatType: "reverse", 
          ease: "linear" 
        }}
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          backgroundImage: `url(${knivesBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.05,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      ></motion.div>
      <div className="container relative z-10">


        <div className="team-grid-modern">
          {team.map((member, index) => (
            <TeamMember 
              key={index} 
              {...member} 
              index={index}
              delay={0.1 * index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
