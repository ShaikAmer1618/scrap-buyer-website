import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import Icon from '../Icon/Icon';
import './ServiceAreas.css';

export default function ServiceAreas() {
  const { cities, coverageTags } = siteConfig.serviceAreas;

  return (
    <section id="service-areas" className="areas-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Coverage Zones</span>
          <h2 className="section-title">Service Areas</h2>
          <p className="section-subtitle">
            We provide prompt scrap collection across all city zones and surrounding industrial sectors.
            Unsure if your location is covered? Call or WhatsApp us to verify in seconds!
          </p>
        </div>

        {/* City / Region Grid */}
        <div className="areas-grid">
          {cities.map((area, index) => (
            <div key={index} className="area-card">
              <div className="area-pin">
                <Icon name="MapPin" size={20} />
              </div>
              <div className="area-info">
                <h4>{area.name}</h4>
                <p>{area.coverage}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Sectors Banner */}
        <div className="areas-tag-banner">
          <div className="areas-tag-banner-text">
            <h4>Everywhere You Need Us</h4>
            <p>From individual apartments to expansive industrial zones, we have vehicles ready for scrap of any scale.</p>
          </div>
          <div className="coverage-pill-list">
            {coverageTags.map((tag, idx) => (
              <span key={idx} className="coverage-pill">
                &bull; {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
