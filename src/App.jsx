import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Highlights from './components/Highlights/Highlights';
import WhatWeBuy from './components/WhatWeBuy/WhatWeBuy';
import HowItWorks from './components/HowItWorks/HowItWorks';
import AboutUs from './components/AboutUs/AboutUs';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import ServiceAreas from './components/ServiceAreas/ServiceAreas';
import BuyerLocation from './components/BuyerLocation/BuyerLocation';
import Faq from './components/Faq/Faq';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import FloatingActions from './components/FloatingActions/FloatingActions';

export default function App() {
  return (
    <div className="app-wrapper">
      {/* 1. Navigation Bar with Call & WhatsApp CTAs */}
      <Navbar />

      <main>
        {/* 2. Hero Section: First impression & key value proposition */}
        <Hero />

        {/* 3. Trust Highlights (Doorstep Pickup, Fair Pricing, Quick Response, Trusted Service) */}
        <Highlights />

        {/* 4. What We Buy: 8 Categories with item tags and direct quote links */}
        <WhatWeBuy />

        {/* 5. How It Works: 4-Step clear customer journey */}
        <HowItWorks />

        {/* 5b. Buyer Location: Physical Scrap Yard, Directions & Interactive Map */}
        <BuyerLocation />

        {/* 6. About Us: Professional, honest business overview & responsible recycling */}
        <AboutUs />

        {/* 7. Why Choose Us: 7 key advantages with clean cards */}
        <WhyChooseUs />

        {/* 8. Service Areas: City zones and client sectors covered */}
        <ServiceAreas />

        {/* 9. FAQ: Interactive accordion answering essential scrap selling questions */}
        <Faq />

        {/* 10. Contact Section: Direct Phone, WhatsApp, Address, Hours + Instant WhatsApp composer */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* 11. Floating Action Buttons (Desktop) & Sticky Bottom Action Bar (Mobile) */}
      <FloatingActions />
    </div>
  );
}
