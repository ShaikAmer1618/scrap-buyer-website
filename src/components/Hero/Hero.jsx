import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import { contactConfig } from '../../config/contact';
import Icon from '../Icon/Icon';
import './Hero.css';

export default function Hero() {
  const scrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="hero-content">
            <div className="hero-trust-pill">
              <span className="hero-trust-dot"></span>
              Verified Scrap Buyers &bull; Instant Cash / UPI Payment
            </div>

            <h1 className="hero-title">
              Turn Your Scrap <span>Into Value</span>
            </h1>

            <p className="hero-subtitle">
              {siteConfig.subTagline} We buy metal, e-waste, appliances, paper, office and industrial factory scrap at certified market rates with computerized digital scales and doorstep pickup.
            </p>

            {/* Direct Contact CTAs */}
            <div className="hero-actions">
              <a
                href={contactConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-whatsapp"
              >
                <Icon name="MessageSquare" size={20} />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={contactConfig.phoneTel}
                className="btn btn-lg btn-call"
              >
                <Icon name="Phone" size={19} />
                <span>Call: {contactConfig.phoneDisplay}</span>
              </a>

              <a
                href="#buyer-location"
                onClick={(e) => scrollTo(e, 'buyer-location')}
                className="btn btn-lg btn-outline"
                style={{ borderRadius: '9999px', padding: '0.85rem 1.4rem' }}
              >
                <Icon name="MapPin" size={17} className="text-emerald-600" />
                <span>View Yard Map</span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="hero-badges-row">
              <div className="hero-badge-item">
                <Icon name="CheckCircle2" size={17} className="hero-badge-check" />
                <span>Zero Hidden Deductions</span>
              </div>
              <div className="hero-badge-item">
                <Icon name="CheckCircle2" size={17} className="hero-badge-check" />
                <span>Calibrated Digital Scales</span>
              </div>
              <div className="hero-badge-item">
                <Icon name="CheckCircle2" size={17} className="hero-badge-check" />
                <span>Eco-Certified Recycling</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Credibility Visual Card */}
          <div className="hero-visual-card">
            {/* Header */}
            <div className="hero-card-header">
              <div>
                <span className="hero-card-badge">Certified Fair Rates</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: '0.4rem', color: 'var(--text-primary, #ffffff)' }}>
                  Doorstep Scrap Collection
                </h3>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary, #94a3b8)' }}>Response Time</span>
                <p style={{ fontSize: '0.9rem', fontWeight: 800, color: '#10b981' }}>Within 15 Mins</p>
              </div>
            </div>

            {/* Scrap Category Mini Grid with photographic touches */}
            <div className="hero-feature-grid">
              <div
                className="hero-mini-box"
                onClick={(e) => scrollTo(e, 'what-we-buy')}
                style={{ cursor: 'pointer' }}
              >
                <div className="hero-mini-box-icon">
                  <Icon name="Boxes" size={19} />
                </div>
                <h4>Metals & Steel</h4>
                <p>Iron, Copper, Brass, Steel & Aluminium</p>
              </div>

              <div
                className="hero-mini-box"
                onClick={(e) => scrollTo(e, 'what-we-buy')}
                style={{ cursor: 'pointer' }}
              >
                <div className="hero-mini-box-icon">
                  <Icon name="Cpu" size={19} />
                </div>
                <h4>E-Waste & IT</h4>
                <p>PCs, Laptops, PCBs, Inverters & UPS</p>
              </div>

              <div
                className="hero-mini-box"
                onClick={(e) => scrollTo(e, 'what-we-buy')}
                style={{ cursor: 'pointer' }}
              >
                <div className="hero-mini-box-icon">
                  <Icon name="Tv" size={19} />
                </div>
                <h4>Old Appliances</h4>
                <p>Split ACs, Fridges, Washers & Coolers</p>
              </div>

              <div
                className="hero-mini-box"
                onClick={(e) => scrollTo(e, 'what-we-buy')}
                style={{ cursor: 'pointer' }}
              >
                <div className="hero-mini-box-icon">
                  <Icon name="Factory" size={19} />
                </div>
                <h4>Commercial & Bulk</h4>
                <p>Office partitions, Warehouses & Turnings</p>
              </div>
            </div>

            {/* Bottom highlight bar */}
            <div className="hero-card-footer">
              <div className="hero-card-footer-text">
                <h5>We Serve All Clients:</h5>
                <p>Homes &bull; Offices &bull; Shops &bull; Factories &bull; Schools</p>
              </div>
              <a
                href="#what-we-buy"
                onClick={(e) => scrollTo(e, 'what-we-buy')}
                className="btn btn-outline"
                style={{ padding: '0.45rem 0.95rem', fontSize: '0.825rem', backgroundColor: '#ffffff', color: '#0f172a', borderRadius: '8px' }}
              >
                Explore All 8
                <Icon name="ArrowRight" size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
