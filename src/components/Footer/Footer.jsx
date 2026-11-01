import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import { contactConfig } from '../../config/contact';
import Icon from '../Icon/Icon';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-main">
      {/* 1. Value Proposition Highlights Strip */}
      <div className="footer-trust-strip">
        <div className="container">
          <div className="footer-trust-grid">
            <div className="footer-trust-item">
              <div className="footer-trust-icon">
                <Icon name="Truck" size={20} />
              </div>
              <div>
                <h4 className="footer-trust-title">Doorstep Scrap Pickup</h4>
                <p className="footer-trust-sub">Free same-day pickup for homes, offices & yards</p>
              </div>
            </div>

            <div className="footer-trust-item">
              <div className="footer-trust-icon">
                <Icon name="Scale" size={20} />
              </div>
              <div>
                <h4 className="footer-trust-title">Certified Digital Scales</h4>
                <p className="footer-trust-sub">100% accurate weight with zero hidden deductions</p>
              </div>
            </div>

            <div className="footer-trust-item">
              <div className="footer-trust-icon">
                <Icon name="Zap" size={20} />
              </div>
              <div>
                <h4 className="footer-trust-title">Instant Cash & UPI</h4>
                <p className="footer-trust-sub">Immediate spot settlement on doorstep weighment</p>
              </div>
            </div>

            <div className="footer-trust-item">
              <div className="footer-trust-icon">
                <Icon name="Recycle" size={20} />
              </div>
              <div>
                <h4 className="footer-trust-title">Responsible Recycling</h4>
                <p className="footer-trust-sub">Authorized eco-friendly recycling & zero landfill</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Multi-Column Footer Content */}
      <div className="container footer-content-wrap">
        <div className="footer-grid">
          {/* Column 1: Brand, Mission & Credibility */}
          <div className="footer-col-brand">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="footer-brand">
              <div className="nav-brand-glow-icon">
                <Icon name="Recycle" size={20} />
              </div>
              <span className="brand-text-white">
                EcoScrap<span className="brand-text-gradient">Solutions</span>
              </span>
            </a>

            <p className="footer-desc">
              Your trusted certified scrap buyer. We provide transparent, certified doorstep scrap pickup across residential societies, commercial complexes, corporate IT hubs, and industrial yards.
            </p>

            <div className="footer-eco-badge">
              <Icon name="Leaf" size={16} className="text-emerald-400" />
              <span>Registered & Compliant Green Recycling Partner</span>
            </div>

            <div className="footer-cert-tags">
              <span className="footer-tag-pill">✓ Digital Scales</span>
              <span className="footer-tag-pill">✓ Spot Settlement</span>
              <span className="footer-tag-pill">✓ Verified Facility</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div>
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>
                  <span className="footer-link-arrow">→</span>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#what-we-buy" onClick={(e) => scrollToSection(e, 'what-we-buy')}>
                  <span className="footer-link-arrow">→</span>
                  <span>What We Buy</span>
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')}>
                  <span className="footer-link-arrow">→</span>
                  <span>How It Works</span>
                </a>
              </li>
              <li>
                <a href="#buyer-location" onClick={(e) => scrollToSection(e, 'buyer-location')}>
                  <span className="footer-link-arrow">→</span>
                  <span>📍 Yard Location & Map</span>
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
                  <span className="footer-link-arrow">→</span>
                  <span>About Our Business</span>
                </a>
              </li>
              <li>
                <a href="#why-choose-us" onClick={(e) => scrollToSection(e, 'why-choose-us')}>
                  <span className="footer-link-arrow">→</span>
                  <span>Why Choose Us</span>
                </a>
              </li>
              <li>
                <a href="#service-areas" onClick={(e) => scrollToSection(e, 'service-areas')}>
                  <span className="footer-link-arrow">→</span>
                  <span>Service Areas</span>
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')}>
                  <span className="footer-link-arrow">→</span>
                  <span>Frequently Asked Questions</span>
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
                  <span className="footer-link-arrow">→</span>
                  <span>Contact & Pickup Inquiry</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Scrap Categories We Buy */}
          <div>
            <h4 className="footer-heading">Scrap Materials</h4>
            <ul className="footer-links">
              {siteConfig.categories.map((c) => (
                <li key={c.id}>
                  <a href="#what-we-buy" onClick={(e) => scrollToSection(e, 'what-we-buy')}>
                    <span className="footer-link-num">{c.number}</span>
                    <span>{c.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Yard Contact & Immediate Action */}
          <div>
            <h4 className="footer-heading">Direct Contact</h4>
            <div className="footer-contact-box">
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <Icon name="MapPin" size={16} />
                </div>
                <div>
                  <p className="footer-contact-label">Physical Scrap Yard Facility</p>
                  <p className="footer-contact-val">{siteConfig.buyerLocation.address}</p>
                  <a
                    href={siteConfig.buyerLocation.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-map-btn"
                  >
                    <span>Open in Google Maps</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <Icon name="Phone" size={16} />
                </div>
                <div>
                  <p className="footer-contact-label">Direct Phone Calling</p>
                  <a href={contactConfig.phoneTel} className="footer-contact-val-link">
                    {contactConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="footer-contact-item">
                <div className="footer-contact-icon footer-wa-icon">
                  <Icon name="MessageSquare" size={16} />
                </div>
                <div>
                  <p className="footer-contact-label">WhatsApp Quick Response</p>
                  <a
                    href={contactConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-wa-val-link"
                  >
                    {contactConfig.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <Icon name="Clock" size={16} />
                </div>
                <div>
                  <p className="footer-contact-label">Operating Hours</p>
                  <p className="footer-contact-val">{siteConfig.contact.workingHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Legal & Back to Top Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="footer-copy">
              &copy; {currentYear} <strong>{siteConfig.businessName}</strong>. All rights reserved.
            </p>
            <p className="footer-subcopy">
              Certified Scrap Buyers &bull; Electronic Weighing Slips &bull; Instant Cash / UPI Payment
            </p>
          </div>

          <div className="footer-bottom-right">
            <button
              type="button"
              className="footer-back-to-top"
              onClick={scrollToTop}
              title="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <span className="footer-top-arrow">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
