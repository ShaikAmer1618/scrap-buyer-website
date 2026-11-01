import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import Icon from '../Icon/Icon';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="why-us-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Advantages</span>
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            We combine fair pricing, dependable punctuality, and eco-conscious recycling practices to deliver a superior scrap selling experience.
          </p>
        </div>

        <div className="why-grid">
          {siteConfig.whyChooseUs.map((benefit, index) => (
            <div key={index} className="why-card">
              <div className="why-icon">
                <Icon name={benefit.icon} size={24} />
              </div>
              <h3 className="why-title">{benefit.title}</h3>
              <p className="why-desc">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
