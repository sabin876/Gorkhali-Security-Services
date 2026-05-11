import React from 'react';
import { UserCheck, ShieldCheck, Award, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const CounterItem = ({ icon: Icon, count, label, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="counter-item"
  >
    <div className="counter-icon">
      <Icon size={50} strokeWidth={1.5} />
    </div>
    <div className="counter-info">
      <h3>{count}+</h3>
      <p>{label}</p>
    </div>
  </motion.div>
);

const Counter = () => {
  const stats = [
    { icon: UserCheck, count: '1500', label: 'Satisfied Clients', delay: 0 },
    { icon: ShieldCheck, count: '350', label: 'Expert Bodyguards', delay: 0.1 },
    { icon: Award, count: '25', label: 'Awards Won', delay: 0.2 },
    { icon: Briefcase, count: '12', label: 'Years Experience', delay: 0.3 },
  ];

  return (
    <section className="counter-section">
      <div className="container">
        <div className="counter-grid">
          {stats.map((stat, index) => (
            <CounterItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
