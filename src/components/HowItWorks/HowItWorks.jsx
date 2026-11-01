import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import { contactConfig } from '../../config/contact';
import Icon from '../Icon/Icon';
import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Simple 4-Step Process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Selling your scrap is effortless. From the first inquiry to instant doorstep payment, here is our transparent 4-step process.
          </p>
        </div>

        <div className="steps-grid">
          {siteConfig.howItWorks.map((step) => (
            <div key={step.stepNumber} className="step-card">
              <div className="step-header">
                {/* Circular Number Circle matching reference design */}
                <span className="step-num-circle">{step.stepNumber}</span>
                <div className="step-icon-wrap">
                  <Icon name={step.icon} size={20} />
                </div>
              </div>

              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>

              <div className="step-badge">
                <Icon name="CheckCircle2" size={13} />
                <span>{step.actionText}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="how-it-works-cta-box">
          <p className="how-it-works-cta-text">
            Ready to convert your unused scrap materials into instant cash?
          </p>
          <div className="how-it-works-btn-group">
            <a
              href={contactConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <Icon name="MessageSquare" size={18} />
              Book Free Pickup via WhatsApp
            </a>
            <a
              href={contactConfig.phoneTel}
              className="btn btn-call"
            >
              <Icon name="Phone" size={18} />
              Call Now: {contactConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
