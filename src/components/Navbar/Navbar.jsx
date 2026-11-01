import React, { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../../data/siteConfig';
import { contactConfig } from '../../config/contact';
import Icon from '../Icon/Icon';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('what-we-buy');

  const isClickScrollingRef = useRef(false);
  const clickTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      if (isClickScrollingRef.current) return;

      const sections = [
        'contact',
        'faq',
        'service-areas',
        'why-choose-us',
        'about',
        'buyer-location',
        'how-it-works',
        'what-we-buy',
        'home'
      ];

      const scrollPos = window.scrollY + 100;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            if (sectionId === 'what-we-buy' || sectionId === 'home') {
              setActiveSection('what-we-buy');
            } else if (sectionId === 'how-it-works') {
              setActiveSection('how-it-works');
            } else if (sectionId === 'buyer-location' || sectionId === 'service-areas') {
              setActiveSection('buyer-location');
            } else if (sectionId === 'about' || sectionId === 'why-choose-us') {
              setActiveSection('about');
            } else if (sectionId === 'contact' || sectionId === 'faq') {
              setActiveSection('contact');
            }
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (e, targetId, tabKey) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (tabKey) {
      setActiveSection(tabKey);
    }

    isClickScrollingRef.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 850);

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

  return (
    <header className={`vedyn-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container vedyn-nav-container">
        {/* Left: Previous EcoScrap Solutions Logo */}
        <a
          href="#home"
          className="vedyn-nav-brand"
          onClick={(e) => scrollToSection(e, 'home', 'what-we-buy')}
        >
          <div className="nav-brand-glow-icon">
            <Icon name="Recycle" size={20} />
          </div>
          <span className="brand-text-white">
            EcoScrap<span className="brand-text-gradient">Solutions</span>
          </span>
        </a>

        {/* Center: Previous 5 Clean Nav Links */}
        <nav className="vedyn-nav-center" aria-label="Main Navigation">
          <ul className="vedyn-nav-links">
            <li>
              <a
                href="#what-we-buy"
                className={`vedyn-link ${activeSection === 'what-we-buy' ? 'active' : ''}`}
                onClick={(e) => scrollToSection(e, 'what-we-buy', 'what-we-buy')}
              >
                What We Buy
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className={`vedyn-link ${activeSection === 'how-it-works' ? 'active' : ''}`}
                onClick={(e) => scrollToSection(e, 'how-it-works', 'how-it-works')}
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#buyer-location"
                className={`vedyn-link ${activeSection === 'buyer-location' ? 'active' : ''}`}
                onClick={(e) => scrollToSection(e, 'buyer-location', 'buyer-location')}
              >
                Yard Location
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`vedyn-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => scrollToSection(e, 'about', 'about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`vedyn-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={(e) => scrollToSection(e, 'contact', 'contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Right: Signature 'Get in touch →' Capsule Pill Button */}
        <div className="vedyn-nav-right">
          <a
            href="#contact"
            className="vedyn-btn-get-in-touch"
            onClick={(e) => scrollToSection(e, 'contact', 'contact')}
          >
            <span>Get in touch</span>
            <span className="vedyn-btn-arrow">→</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`vedyn-hamburger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Clean Dark Theme) */}
      <div className={`vedyn-mobile-drawer ${mobileMenuOpen ? 'show' : ''}`}>
        <div className="container vedyn-drawer-content">
          <ul className="vedyn-drawer-links">
            <li>
              <a href="#what-we-buy" onClick={(e) => scrollToSection(e, 'what-we-buy', 'what-we-buy')}>
                What We Buy
              </a>
            </li>
            <li>
              <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works', 'how-it-works')}>
                How It Works
              </a>
            </li>
            <li>
              <a href="#buyer-location" onClick={(e) => scrollToSection(e, 'buyer-location', 'buyer-location')}>
                Yard Location
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about', 'about')}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact', 'contact')}>
                Contact
              </a>
            </li>
          </ul>

          <div className="vedyn-drawer-actions">
            <a
              href={contactConfig.phoneTel}
              className="vedyn-drawer-btn vedyn-drawer-call"
              onClick={closeMobileMenu}
            >
              <Icon name="Phone" size={16} />
              <span>Call: {contactConfig.phoneDisplay}</span>
            </a>

            <a
              href={contactConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="vedyn-drawer-btn vedyn-drawer-wa"
              onClick={closeMobileMenu}
            >
              <Icon name="MessageSquare" size={16} />
              <span>WhatsApp Us</span>
            </a>

            <a
              href="#contact"
              className="vedyn-btn-get-in-touch"
              onClick={(e) => scrollToSection(e, 'contact', 'contact')}
              style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
            >
              <span>Get in touch</span>
              <span className="vedyn-btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
