import React, { useState } from 'react';
import { siteConfig } from '../../data/siteConfig';
import { contactConfig } from '../../config/contact';
import Icon from '../Icon/Icon';
import './Faq.css';

export default function Faq() {
  // Allow multiple or single open - keeping 0 open by default for clear immediate visibility
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Here are the most common questions regarding our scrap collection process, pricing, and accepted materials.
          </p>
        </div>

        <div className="faq-list">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div className="faq-icon-toggle">
                    <Icon name="ChevronDown" size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
            Have a different question about your scrap?{' '}
            <a
              href={contactConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#059669', fontWeight: 700, textDecoration: 'underline' }}
            >
              Ask us on WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
