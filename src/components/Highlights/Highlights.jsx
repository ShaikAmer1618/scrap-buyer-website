import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import Icon from '../Icon/Icon';
import './Highlights.css';

export default function Highlights() {
  return (
    <section className="highlights-bento-section">
      <div className="container">
        <div className="highlights-bento-grid">
          {/* Bento Tile 1: Doorstep Pickup with Live Status */}
          <div className="highlight-bento-card highlight-bento-wide">
            <div className="highlight-bento-icon-box mui-icon-emerald">
              <Icon name="Truck" size={24} />
            </div>
            <div className="highlight-bento-body">
              <div className="highlight-status-row">
                <span className="mui-live-dot"></span>
                <span className="highlight-status-text">Doorstep Pickup Service</span>
              </div>
              <h3 className="highlight-bento-title">Free Doorstep Pickup Across City</h3>
              <p className="highlight-bento-desc">
                We send verified collection personnel with commercial vehicles directly to your apartment, society, office, or factory at your preferred time slot.
              </p>
              <div className="mui-chips-wrap" style={{ marginTop: '0.85rem' }}>
                <span className="mui-chip mui-chip-tonal">Same-day pickup</span>
                <span className="mui-chip mui-chip-tonal">Heavy lifting included</span>
                <span className="mui-chip mui-chip-tonal">No transport charge</span>
              </div>
            </div>
          </div>

          {/* Bento Tile 2: Fair Pricing & Digital Weighing */}
          <div className="highlight-bento-card">
            <div className="highlight-bento-icon-box mui-icon-blue">
              <Icon name="Scale" size={24} />
            </div>
            <div className="highlight-bento-body">
              <span className="mui-pill-tag">100% Transparent</span>
              <h3 className="highlight-bento-title">Certified Digital Scales</h3>
              <p className="highlight-bento-desc">
                Zero tampering guarantee with calibrated electronic scales and computerized weighbridge slips for bulk loads.
              </p>
            </div>
          </div>

          {/* Bento Tile 3: Quick Response */}
          <div className="highlight-bento-card">
            <div className="highlight-bento-icon-box mui-icon-amber">
              <Icon name="Zap" size={24} />
            </div>
            <div className="highlight-bento-body">
              <span className="mui-pill-tag mui-pill-amber">Fast Response</span>
              <h3 className="highlight-bento-title">Quick Quote in 15 Mins</h3>
              <p className="highlight-bento-desc">
                Share photos on WhatsApp or call us directly. Our desk provides immediate rate quotes and slots.
              </p>
            </div>
          </div>

          {/* Bento Tile 4: Trusted Service & Instant Payment */}
          <div className="highlight-bento-card highlight-bento-wide">
            <div className="highlight-bento-icon-box mui-icon-teal">
              <Icon name="ShieldCheck" size={24} />
            </div>
            <div className="highlight-bento-body">
              <div className="highlight-status-row">
                <span className="mui-live-dot mui-dot-teal"></span>
                <span className="highlight-status-text">Verified Staff & Instant Payout</span>
              </div>
              <h3 className="highlight-bento-title">Instant Cash / UPI & Eco Recycling</h3>
              <p className="highlight-bento-desc">
                Payment is disbursed immediately to your bank or in cash on the spot. All collected scrap is forwarded exclusively to authorized government-certified recycling facilities.
              </p>
              <div className="mui-chips-wrap" style={{ marginTop: '0.85rem' }}>
                <span className="mui-chip mui-chip-tonal">Instant UPI / IMPS</span>
                <span className="mui-chip mui-chip-tonal">Cash on Spot</span>
                <span className="mui-chip mui-chip-tonal">Zero Hidden Cuts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
