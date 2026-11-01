import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import { contactConfig } from '../../config/contact';
import Icon from '../Icon/Icon';
import './BuyerLocation.css';

export default function BuyerLocation() {
  const { buyerLocation } = siteConfig;

  // WhatsApp share link for yard location
  const shareLocationWhatsApp = `https://wa.me/?text=Here%20is%20the%20location%20for%20EcoScrap%20Yard%3A%20${encodeURIComponent(buyerLocation.address)}%20-%20Google%20Maps%3A%20${encodeURIComponent(buyerLocation.googleMapsUrl)}`;

  return (
    <section id="buyer-location" className="buyer-location-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Physical Yard Location</span>
          <h2 className="section-title">Visit Our Scrap Yard & Facility</h2>
          <p className="section-subtitle">
            Walk-in drop-offs are welcome! Bring your personal vehicle, tempo, or commercial truck directly to our facility for computerized weighbridge slips and on-the-spot payment.
          </p>
        </div>

        <div className="location-grid">
          {/* Left Column: Location Details & Action Buttons */}
          <div className="location-info-card">
            <div className="location-card-header">
              <div className="location-pin-badge">
                <Icon name="MapPin" size={24} />
              </div>
              <div>
                <span className="location-status-pill">
                  <span className="location-dot-pulse"></span> Open Today &bull; 8 AM – 8 PM
                </span>
                <h3 className="location-yard-title">{buyerLocation.yardTitle}</h3>
              </div>
            </div>

            {/* Address Info */}
            <div className="location-detail-list">
              <div className="location-detail-row">
                <div className="detail-icon-wrap">
                  <Icon name="MapPin" size={18} />
                </div>
                <div>
                  <h4>Facility Address</h4>
                  <p>{buyerLocation.address}</p>
                </div>
              </div>

              <div className="location-detail-row">
                <div className="detail-icon-wrap">
                  <Icon name="Compass" size={18} />
                </div>
                <div>
                  <h4>Landmark & Access</h4>
                  <p>{buyerLocation.landmark}</p>
                </div>
              </div>

              <div className="location-detail-row">
                <div className="detail-icon-wrap">
                  <Icon name="Clock" size={18} />
                </div>
                <div>
                  <h4>Receiving Hours</h4>
                  <p>{buyerLocation.workingHours}</p>
                </div>
              </div>

              <div className="location-detail-row">
                <div className="detail-icon-wrap">
                  <Icon name="Truck" size={18} />
                </div>
                <div>
                  <h4>Vehicle Accessibility</h4>
                  <p>{buyerLocation.dropoffAvailable}</p>
                </div>
              </div>
            </div>

            {/* Yard Equipment & Features */}
            <div className="yard-features-grid">
              <div className="yard-feature-item">
                <Icon name="CheckCircle2" size={16} className="feature-check" />
                <span>60-Ton Weighbridge</span>
              </div>
              <div className="yard-feature-item">
                <Icon name="CheckCircle2" size={16} className="feature-check" />
                <span>Instant Cash / UPI Slip</span>
              </div>
              <div className="yard-feature-item">
                <Icon name="CheckCircle2" size={16} className="feature-check" />
                <span>Heavy Truck Turning Bay</span>
              </div>
              <div className="yard-feature-item">
                <Icon name="CheckCircle2" size={16} className="feature-check" />
                <span>Material Unloading Help</span>
              </div>
            </div>

            {/* Prominent Action Buttons */}
            <div className="location-actions">
              {/* Main Map Link Button */}
              <a
                href={buyerLocation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-map-directions"
                title="Open in Google Maps for turn-by-turn navigation"
              >
                <Icon name="Navigation" size={20} />
                <span>Open in Google Maps (Get Directions)</span>
                <Icon name="ExternalLink" size={16} />
              </a>

              <div className="location-sub-actions">
                <a
                  href={contactConfig.phoneTel}
                  className="btn btn-call"
                >
                  <Icon name="Phone" size={18} />
                  Call Yard Desk
                </a>

                <a
                  href={shareLocationWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <Icon name="MessageSquare" size={18} />
                  Share Location
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Interactive Google Map */}
          <div className="location-map-card">
            <div className="map-embed-wrapper">
              <iframe
                title="Scrap Buyer Facility Location"
                src={buyerLocation.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Map Floating Overlay Header */}
              <div className="map-overlay-badge">
                <Icon name="MapPin" size={16} className="text-emerald-600" />
                <div>
                  <strong>{siteConfig.businessName} Scrap Yard</strong>
                  <p>{buyerLocation.shortAddress}</p>
                </div>
                <a
                  href={buyerLocation.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem' }}
                >
                  Open Full Map ↗
                </a>
              </div>
            </div>

            <div className="map-card-footer">
              <div className="map-footer-tip">
                <Icon name="Navigation" size={18} />
                <p>
                  <strong>Tip for Drop-offs:</strong> Heavy vehicle drivers can report directly to Weighbridge Gate 2 for gross weight slips.
                </p>
              </div>
              <a
                href={buyerLocation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
              >
                Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
