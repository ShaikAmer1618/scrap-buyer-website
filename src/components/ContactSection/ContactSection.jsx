import React, { useState } from 'react';
import { siteConfig } from '../../data/siteConfig';
import { contactConfig } from '../../config/contact';
import Icon from '../Icon/Icon';
import './ContactSection.css';

export default function ContactSection() {
  const [selectedCategory, setSelectedCategory] = useState(siteConfig.categories[0].name);
  const [userLocation, setUserLocation] = useState('');
  const [notes, setNotes] = useState('');

  // Handle WhatsApp Quick Message Generation
  const handleWhatsAppInquiry = (e) => {
    e.preventDefault();
    const text = `Hello ${siteConfig.businessName}!%0A%0A*Scrap Pickup Request:*%0A- *Material:* ${encodeURIComponent(selectedCategory)}%0A- *Location/Area:* ${encodeURIComponent(userLocation || 'Not specified')}%0A- *Details/Quantity:* ${encodeURIComponent(notes || 'Please contact for details')}%0A%0APlease let me know your rates and earliest pickup slot.`;
    const fullUrl = `https://wa.me/${contactConfig.whatsappNumber}?text=${text}`;
    window.open(fullUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">Contact Us Directly</h2>
          <p className="section-subtitle">
            Reach out via phone call or WhatsApp for instant answers, current scrap rates, and scheduled doorstep pickups.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Card: Direct Contact Details & Big Action Buttons */}
          <div className="contact-card-main">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary, #ffffff)', marginBottom: '0.4rem' }}>
              Speak With Our Team
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary, #94a3b8)', marginBottom: '1.75rem' }}>
              We are available 7 days a week to evaluate and collect your scrap.
            </p>

            {/* Two Large Action Buttons */}
            <div className="contact-buttons-prominent">
              <a
                href={contactConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-whatsapp"
              >
                <Icon name="MessageSquare" size={22} />
                WhatsApp Us
              </a>

              <a
                href={contactConfig.phoneTel}
                className="btn btn-lg btn-call"
              >
                <Icon name="Phone" size={20} />
                Call Now
              </a>
            </div>

            {/* Detailed Contact List */}
            <div className="contact-info-list">
              {/* Phone */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Icon name="Phone" size={20} />
                </div>
                <div className="contact-info-text">
                  <h4>Phone Number</h4>
                  <a href={contactConfig.phoneTel}>
                    {contactConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="contact-info-item">
                <div className="contact-info-icon" style={{ color: '#25D366' }}>
                  <Icon name="MessageSquare" size={20} />
                </div>
                <div className="contact-info-text">
                  <h4>WhatsApp Number</h4>
                  <a
                    href={contactConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contactConfig.whatsappDisplay} (Fast Response)
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Icon name="Mail" size={20} />
                </div>
                <div className="contact-info-text">
                  <h4>Email Address</h4>
                  <a href={`mailto:${contactConfig.email}`}>
                    {contactConfig.email}
                  </a>
                </div>
              </div>

              {/* Address with Clickable Map Link */}
              <div className="contact-info-item">
                <div className="contact-info-icon" style={{ color: '#059669' }}>
                  <Icon name="MapPin" size={20} />
                </div>
                <div className="contact-info-text">
                  <h4>Business & Yard Address</h4>
                  <p>{siteConfig.contact.address}</p>
                  <a
                    href={siteConfig.buyerLocation.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-map-link"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: '#059669',
                      fontSize: '0.825rem',
                      fontWeight: 700,
                      marginTop: '0.25rem'
                    }}
                  >
                    <Icon name="Navigation" size={13} />
                    Open in Google Maps &bull; Get Directions ↗
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Icon name="Clock" size={20} />
                </div>
                <div className="contact-info-text">
                  <h4>Working Hours</h4>
                  <p>{siteConfig.contact.workingHours}</p>
                  <p style={{ fontSize: '0.825rem', color: '#059669', fontWeight: 600, marginTop: '0.15rem' }}>
                    {siteConfig.contact.pickupNotice}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: Simple Instant WhatsApp Quote Inquiry Helper */}
          <div className="inquiry-box">
            <h3>Quick Pickup Inquiry</h3>
            <p>
              Select your scrap type and send your details directly via WhatsApp with zero hassle or account registration.
            </p>

            <form onSubmit={handleWhatsAppInquiry}>
              <div className="form-group">
                <label className="form-label" htmlFor="scrap-category">
                  Select Scrap Category:
                </label>
                <select
                  id="scrap-category"
                  className="form-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {siteConfig.categories.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="scrap-location">
                  Your Location / Area:
                </label>
                <input
                  id="scrap-location"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Sector 5, Industrial Area, Green Park"
                  value={userLocation}
                  onChange={(e) => setUserLocation(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="scrap-notes">
                  Approximate Quantity or Notes (Optional):
                </label>
                <textarea
                  id="scrap-notes"
                  className="form-textarea"
                  rows="3"
                  placeholder="e.g. Old AC unit, ~50kg newspapers, 2 laptops, metal rods"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-lg btn-whatsapp"
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                <Icon name="MessageSquare" size={20} />
                Send Inquiry to WhatsApp
              </button>

              <p style={{ textAlign: 'center', fontSize: '0.785rem', color: '#94a3b8', marginTop: '0.85rem' }}>
                Opens directly in WhatsApp &bull; No login or sign-up needed
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
