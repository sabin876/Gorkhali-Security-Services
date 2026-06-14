import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ShieldCheck } from 'lucide-react';
import cyberSecurityImg from '../assets/CTO.jpeg';
import chairmanImg from '../assets/Chairmain.jpeg';
import digitalMarketingImg from '../assets/Digital Marketing Head.jpg';
import knivesBg from '../assets/Knives.avif';
import financeManagerImg from '../assets/finance Manager.jpeg';
import relationManagerImg from '../assets/relation mager.jpeg';
import corporateStrategyManagerImg from '../assets/Corporate Strategy Manager.jpeg';

const Team = () => {
  const team = [
    {
      name: "Manoj Kumar Shrestha",
      role: "Chairman",
      image: chairmanImg,
      message: "Gorkhali Security Services stands as a premier bulwark of defense, combining the historical courage and loyalty of the Gorkhali tradition with advanced modern tactical operations. Our mission is to provide uncompromising protection, elite threat management, and absolute peace of mind for our global clientele."
    },
    {
      name: "Thaneshwor Shapkota",
      role: "Finance Manager",
      image: financeManagerImg,
      message: "We ensure fiscal discipline and strategic capital allocation to sustain our state-of-the-art security apparatus. By maintaining operational efficiency and investing in cutting-edge defensive technologies, we deliver premium, high-value protection services with unmatched transparency and integrity."
    },
    {
      name: "Kiran Gurung",
      role: "Corporate Strategy Manager",
      image: corporateStrategyManagerImg,
      message: "Strategic foresight and adaptive planning are critical to navigating today's complex security environment. We align Gorkhali's operational capabilities with long-term security trends to ensure we remain the gold standard in protective intelligence and tactical defense."
    },
    {
      name: "Bijayata Hamal",
      role: "Chief Technical Officer",
      image: cyberSecurityImg,
      message: "We deploy sophisticated digital fortress architectures, blending artificial intelligence, advanced cybersecurity frameworks, and real-time electronic surveillance. By merging cyber defense with physical protective operations, we secure our clients' assets against the most complex modern threats."
    },
    {
      name: "Ayuv Bastola",
      role: "Digital Marketing Head",
      image: digitalMarketingImg,
      message: "We implement strategic communications and targeted brand positioning to align Gorkhali Security's elite reputation with international defense standards. Our goal is to connect high-risk organizations and private individuals with our world-class protective services through precise digital channels."
    },
    {
      name: "Ram Tamang",
      role: "Relation Manager",
      image: relationManagerImg,
      message: "Elite client partnerships are built on absolute trust and active communication. My responsibility is to analyze corporate and private security objectives, aligning them with our high-grade tactical solutions to ensure rapid, tailored responses to all security needs."
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
          opacity: 0.03,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      ></motion.div>
      
      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="team-section-header-centered">
          <div className="team-badge-premium centered">
            <span className="badge-dot"></span>
            <span>Elite Leadership</span>
          </div>
          <h2 className="team-split-title centered">
            <span className="text-primary">Meet Our Visionary Professionals</span>
          </h2>
          <p className="team-section-subtitle-centered">
            <strong>Built on the legendary Gorkhali bravery, integrity, and modern tactical excellence.</strong>
          </p>
        </div>

        {/* Alternating Team Rows */}
        <div className="team-rows-container">
          {team.map((member, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={`team-executive-row ${isReversed ? 'team-row-reversed' : ''}`}
              >
                {/* Portrait Column */}
                <div className="team-row-portrait-col">
                  <div className="executive-portrait-card">
                    <div className="executive-portrait-img-wrapper">
                      <img src={member.image} alt={member.name} className="executive-portrait-img" />
                      <div className="executive-portrait-overlay-gradient"></div>
                    </div>
                    
                    <div className="executive-portrait-glass-badge">
                      <span className="executive-name-badge">{member.name}</span>
                      <span className="executive-role-badge">{member.role}</span>
                    </div>
                  </div>
                </div>

                {/* Message & Details Column */}
                <div className="team-row-details-col">
                  <div className="executive-message-card">
                    <div className="quote-icon-gold-massive">“</div>
                    
                    <p className="executive-quote-text">
                      "{member.message}"
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Team;
