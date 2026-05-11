import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingCard = ({ plan, price, features, isFeatured, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`pricing-card ${isFeatured ? 'featured' : ''}`}
  >
    {isFeatured && <div className="popular-tag">Most Popular</div>}
    <h3>{plan}</h3>
    <div className="price">
      <span className="currency">$</span>
      <span className="amount">{price}</span>
      <span className="period">/mo</span>
    </div>
    <ul className="features">
      {features.map((feature, i) => (
        <li key={i}><Check size={20} className="text-primary" /> {feature}</li>
      ))}
    </ul>
    <button className={`btn ${isFeatured ? 'btn-primary' : 'btn-outline'}`}>Choose Plan</button>
  </motion.div>
);

const Pricing = () => {
  const plans = [
    {
      plan: "Basic Protection",
      price: "199",
      features: ["24/7 Monitoring", "Standard Alarm System", "Mobile App Access", "Email Support", "Monthly Security Report"],
      isFeatured: false
    },
    {
      plan: "Premium Guard",
      price: "499",
      features: ["Everything in Basic", "Personal Bodyguard (8hrs)", "Advanced Camera System", "Rapid Response Team", "Priority Support"],
      isFeatured: true
    },
    {
      plan: "Elite Secure",
      price: "999",
      features: ["Everything in Premium", "24/7 Dedicated Team", "Armored Vehicle Access", "International Protection", "Cybersecurity Suite"],
      isFeatured: false
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Pricing Plans</span>
          <h2>Our <span className="text-primary">Affordable Packages</span></h2>
        </div>
        
        <div className="pricing-grid">
          {plans.map((p, index) => (
            <PricingCard key={index} {...p} delay={index * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
