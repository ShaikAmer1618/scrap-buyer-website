import React from 'react';
import { contactConfig } from '../../config/contact';
import Icon from '../Icon/Icon';
import './FloatingActions.css';

export default function FloatingActions() {
  return (
    <>
      {/* Desktop Floating Action Pills (Bottom Right, matching reference Image 2) */}
      <div className="floating-actions-desktop" aria-label="Quick contact buttons">
        <a
          href={contactConfig.phoneTel}
          className="floating-pill-call"
          title="Call our scrap team directly"
        >
          <Icon name="Phone" size={18} />
          <span>Call now</span>
        </a>

        <a
          href={contactConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-pill-whatsapp"
          title="Chat with us on WhatsApp"
        >
          <Icon name="MessageSquare" size={18} />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Mobile Sticky Action Bar (Fixed at bottom on phones) */}
      <div className="mobile-sticky-bar" aria-label="Mobile quick contact bar">
        <div className="mobile-sticky-grid">
          <a
            href={contactConfig.phoneTel}
            className="mobile-bar-call"
          >
            <Icon name="Phone" size={18} />
            <span>Call now</span>
          </a>

          <a
            href={contactConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-bar-whatsapp"
          >
            <Icon name="MessageSquare" size={18} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
