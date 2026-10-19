import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ShieldCheck } from 'lucide-react';
import cyberSecurityImg from '../assets/CTO.jpeg';
import chairmanImg from '../assets/Chairmain.jpeg';
import digitalMarketingImg from '../assets/Digital Marketing Head.jpg';
import knivesBg from '../assets/Knives.avif';
import financeManagerImg from '../assets/finance Manager.jpeg';
import relationManagerImg from '../assets/relation mager.jpeg';
import corporateStrategyManagerImg from '../assets/Corporate Strategy Manager.jpeg';
import advisorImg from '../assets/Advisor.png';

const memberImageMap = {
  "Manoj Kumar Shrestha": chairmanImg,
  "Brigadier General (Retd.) Nirman Singh Gurung": advisorImg,
  "Thaneshwor Shapkota": financeManagerImg,
  "Ramesh Gautam": corporateStrategyManagerImg,
  "Bijayata Hamal": cyberSecurityImg,
  "Ayuv Bastola": digitalMarketingImg,
  "Ram Tamang": relationManagerImg,
};

const defaultTeam = [
  {
    name: "Manoj Kumar Shrestha",
    role: "Chairman",
    image: chairmanImg,
    message: "Manoj Kumar Shrestha ‘Gorkhali’ is Chairman of Gorkhali Security Services LLC and MPM IT Services LLC in the UAE. He is a businessman, social worker, and Vice President of the Non-Resident Nepali Association (NRNA) International Coordination Council. Known for his humanitarian work during COVID-19 (including receiving the “COVID-19 Hero Award” from Sheikh Al Maktoum), he also supports sports and community"
  },
  {
    name: "Brigadier General (Retd.) Nirman Singh Gurung",
    role: "Advisor – Gurkhas Security Service LLC, UAE",
    image: advisorImg,
    message: "Brigadier General (Retd.) Nirman Singh Gurung is a former senior Nepal Army officer with over 30 years of leadership, operational command, and United Nations peacekeeping experience. He served in missions in Yugoslavia, Lebanon, Ethiopia/Eritrea, the Democratic Republic of the Congo, and South Sudan, holding key command and leadership appointments. A recipient of the Gorkha Dakshin Bahu IV and several national and UN service medals, he provides strategic guidance in security management, leadership development, and operational excellence — supporting the company's mission of delivering trusted, disciplined, and world-class security services."
  },
  {
    name: "Thaneshwor Shapkota",
    role: "Finance Manager",
    image: financeManagerImg,
    message: "We ensure fiscal discipline and strategic capital allocation to sustain our state-of-the-art security apparatus. By maintaining operational efficiency and investing in cutting-edge defensive technologies, we deliver premium, high-value protection services with unmatched transparency and integrity."
  },
  {
    name: "Ramesh Gautam",
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

const Team = () => {
  const [teamList, setTeamList] = useState(defaultTeam);

  useEffect(() => {
    fetch('http://localhost:8000/api/team/')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch team from backend');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.map((item) => ({
            name: item.name,
            role: item.designation,
            image: item.image || item.image_url || memberImageMap[item.name] || chairmanImg,
            message: item.bio || "Tactical security leader dedicated to operational excellence and client protection."
          }));
          setTeamList(mapped);
        }
      })
      .catch((err) => {
        console.warn('Backend team API not reached, using defaults:', err);
      });
  }, []);

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

        {/* Team Grid */}
        <div className="team-grid-modern">
          {teamList.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="team-card-modern"
            >
              <div className="card-inner">
                {/* Image Section */}
                <div className="team-img-wrapper">
                  <img src={member.image} alt={member.name} className="team-img" />
                  <div className="img-overlay"></div>
                  
                  {/* Subtle Badge */}
                  <div className="verified-badge">
                    <ShieldCheck size={14} />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="team-card-content">
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <div className="role-tag">{member.role}</div>
                  </div>

                  <p className="member-message">
                    "{member.message}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
