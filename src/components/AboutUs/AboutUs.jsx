import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import Icon from '../Icon/Icon';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Text & Value Proposition */}
          <div className="about-content">
            <span className="section-badge">About Our Service</span>
            <h2>Professional, Fair & Responsible Scrap Buying</h2>
            <p>
              At <strong>{siteConfig.businessName}</strong>, our mission is to make scrap selling straightforward, honest, and environmentally responsible. We eliminate the hassle of transporting heavy scrap to local unorganized yards by offering prompt doorstep collection backed by certified digital weighing machines.
            </p>
            <p>
              Whether you are an individual clearing home clutter, a corporate office remodeling workstations, or a manufacturing plant producing metric tons of ongoing production scrap, our verified team provides dependable service, transparent dealings, and on-the-spot payments.
            </p>

            {/* Core Values / Commitments */}
            <div className="about-check-list">
              <div className="about-check-item">
                <Icon name="CheckCircle2" size={17} className="about-check-icon" />
                <span>Certified Digital Scales</span>
              </div>
              <div className="about-check-item">
                <Icon name="CheckCircle2" size={17} className="about-check-icon" />
                <span>Zero Hidden Deductions</span>
              </div>
              <div className="about-check-item">
                <Icon name="CheckCircle2" size={17} className="about-check-icon" />
                <span>Immediate Cash / UPI Payment</span>
              </div>
              <div className="about-check-item">
                <Icon name="CheckCircle2" size={17} className="about-check-icon" />
                <span>Eco-Certified Recycling Partners</span>
              </div>
            </div>

            <div className="about-action-group">
              <a href="#contact" className="btn btn-primary">
                Contact Our Team
                <Icon name="ArrowRight" size={16} />
              </a>
              <a
                href={siteConfig.buyerLocation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <Icon name="Navigation" size={15} />
                Visit Our Scrap Yard ↗
              </a>
            </div>
          </div>

          {/* Right Column: Visual Trust & Operational Highlights */}
          <div className="about-card-stat">
            <div className="stat-item">
              <div className="stat-icon">
                <Icon name="Scale" size={24} />
              </div>
              <div className="stat-text">
                <h3>100% Transparent Weighing</h3>
                <p>Digital scales operated in front of you so you get exact value for every gram.</p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <Icon name="Truck" size={24} />
              </div>
              <div className="stat-text">
                <h3>Hassle-Free Doorstep Pickup</h3>
                <p>We supply the transport vehicle, manpower, and safety gear to clear materials cleanly.</p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <Icon name="Leaf" size={24} />
              </div>
              <div className="stat-text">
                <h3>Environment-First Philosophy</h3>
                <p>Every kilogram gathered is channeled to authorized processing centers to avoid landfill pollution.</p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <Icon name="Users" size={24} />
              </div>
              <div className="stat-text">
                <h3>Residential & Commercial</h3>
                <p>Serving households, IT parks, retail showrooms, schools, hospitals, and heavy industrial plants.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
