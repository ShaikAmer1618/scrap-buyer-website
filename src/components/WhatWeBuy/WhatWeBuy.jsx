import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import { contactConfig } from '../../config/contact';
import Icon from '../Icon/Icon';
import './WhatWeBuy.css';

export default function WhatWeBuy() {
  return (
    <section id="what-we-buy" className="what-we-buy-bento-section">
      <div className="container">
        {/* Section Header with Material UI Chip Badge */}
        <div className="section-header">
          <div className="mui-badge-header">
            <span className="mui-badge-dot"></span>
            <span>Materials Accepted</span>
          </div>
          <h2 className="section-title">What We Buy</h2>
          <p className="section-subtitle">
            We purchase a comprehensive spectrum of recyclable materials from households, corporate offices, institutions, and factories at top market rates.
          </p>
        </div>

        {/* Clean Bento Grid - Matching Reference Image 2 with Material UI 3 Elevation */}
        <div className="bento-grid-container">
          {siteConfig.categories.map((cat) => {
            const categoryWaUrl = `https://wa.me/${contactConfig.whatsappNumber}?text=Hi%2C%20I%20have%20${encodeURIComponent(cat.name)}%20scrap%20to%20sell.%20Please%20let%20me%20know%20the%20current%20rates%20and%20pickup%20availability.`;

            return (
              <div key={cat.id} className="bento-card-standard">
                {/* Media Header (Scrap Photography) */}
                <div className="bento-card-media">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="bento-img"
                    loading="lazy"
                  />
                  <div className="bento-media-badges">
                    <span className="mui-chip-badge">{cat.badge}</span>
                  </div>
                </div>

                {/* Card Content - Exactly matching Reference Image 2 */}
                <div className="bento-card-body">
                  {/* Circular Number Badge: 01, 02, 03, 04, 05, 06, 07, 08 */}
                  <div className="bento-header-row">
                    <span className="bento-num-pill">{cat.number}</span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="bento-card-title">{cat.name}</h3>
                  <p className="bento-card-desc">{cat.description}</p>

                  {/* Material UI Tonal Chips */}
                  <div className="mui-chips-wrap">
                    {cat.items.slice(0, 3).map((item, idx) => (
                      <span key={idx} className="mui-chip">
                        {item}
                      </span>
                    ))}
                    {cat.items.length > 3 && (
                      <span className="mui-chip mui-chip-more">
                        +{cat.items.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Card Action Row: Signature 'Explore service' underline + Material Quote Pill */}
                  <div className="bento-card-footer">
                    <a
                      href={categoryWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mui-explore-service-link"
                      title={`Explore ${cat.name} recycling service`}
                    >
                      Explore service
                    </a>

                    <a
                      href={categoryWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mui-fab-mini"
                      title={`Instant quote for ${cat.name}`}
                    >
                      <Icon name="MessageSquare" size={13} />
                      <span>Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
