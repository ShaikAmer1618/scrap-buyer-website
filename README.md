# EcoScrap Solutions — Modern Scrap Buyer Website (Version 1)

A clean, modern, and professional website built with **React.js**, **Vite**, **JavaScript**, and custom **CSS** for a scrap buying and recycling business.

Designed with a high-trust, eco-friendly aesthetic tailored for both residential and commercial clients (homes, offices, shops, companies, factories, institutions).

---

## 🌟 Key Highlights & Design Decisions

- **Single-Source Business Configuration:** All business details (phone, WhatsApp, email, address, operating hours, scrap categories, service areas, and FAQs) are centralized in `src/data/siteConfig.js`. You or your client can update any business information without writing or modifying complex code.
- **Fast First Impression (Hero Section):** Clean typography, "Turn Your Scrap Into Value" headline, live market badges, and prominent **"WhatsApp Us"** and **"Call Now"** call-to-actions.
- **Doorstep Scrap Highlights:** 4 key trust cards (Doorstep Pickup, Fair Pricing, Quick Response, Trusted Service).
- **8 Scrap Categories (What We Buy):**
  1. Metal Scrap (Ferrous & Non-Ferrous)
  2. E-Waste & Electronics
  3. Paper & Cardboard (Raddi & Cartons)
  4. Plastic Scrap
  5. Old Home & Commercial Appliances
  6. Office Scrap & Partitions
  7. Industrial & Warehouse Scrap
  8. Other Recyclables
- **4-Step Visual Journey (How It Works):**
  1. Contact Us
  2. Tell Us About Your Scrap
  3. We Arrange Pickup
  4. Get Paid (Instant Cash / UPI)
- **Service Areas:** Modular coverage tags and city regions easily replaced in `siteConfig.js`.
- **Interactive FAQ Accordion:** Answers common questions on e-waste, bulk collection, digital scales, and payment.
- **Direct Contact CTAs:**
  - `tel:+91...` for one-tap calling
  - Direct WhatsApp URL (`https://wa.me/...`) with formatted pre-filled message
  - Interactive **Quick Scrap Pickup Inquiry** widget that prepares a WhatsApp message with the user's selected scrap type, location, and notes — **100% frontend, zero backend/database required!**
- **Floating & Mobile Sticky Contact Buttons:**
  - Floating WhatsApp & Call action buttons on desktop
  - Fixed high-visibility bottom action bar on mobile devices (`CALL NOW` & `WHATSAPP US`)

---

## 📁 Project Structure

```text
scrap-buyer-website/
├── index.html                  # HTML entry point with modern Google Fonts
├── package.json                # Dependencies (React 18, Vite, Lucide Icons)
├── vite.config.js              # Vite configuration
├── README.md                   # Setup and customization guide
└── src/
    ├── main.jsx                # React DOM mounting
    ├── App.jsx                 # Page layout assembling all 11 sections
    ├── data/
    │   └── siteConfig.js       # Central data file for all business content
    ├── styles/
    │   └── index.css           # Modern design system & responsive styling
    └── components/
        ├── Icon.jsx            # Lucide icon helper
        ├── Navbar.jsx          # Sticky header + mobile hamburger menu
        ├── Hero.jsx            # Hero section with trust badges & visual preview
        ├── Highlights.jsx      # 4 core trust cards
        ├── WhatWeBuy.jsx       # 8 scrap category cards with accepted item pills
        ├── HowItWorks.jsx      # 4-step process cards
        ├── AboutUs.jsx         # Professional business overview & eco-recycling
        ├── WhyChooseUs.jsx     # 7 key customer advantages
        ├── ServiceAreas.jsx    # Serviced zones & sectors
        ├── Faq.jsx             # Accessible interactive accordion
        ├── ContactSection.jsx  # Direct contact info + WhatsApp quote builder
        ├── Footer.jsx          # Footer with quick links & category directory
        └── FloatingActions.jsx # Desktop floating buttons & mobile bottom bar
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port Vite provides).

### 3. Build for Production
```bash
npm run build
```
Creates a lightweight, optimized production bundle in the `dist/` directory ready for deployment on Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any web host.

---

## 🛠️ How to Customize for Your Client

Open [`src/data/siteConfig.js`](src/data/siteConfig.js):

### 1. Change Business Name & Contact Numbers
```javascript
export const siteConfig = {
  businessName: "Your Client's Business Name",
  contact: {
    phoneDisplay: "+91 98765 43210",
    phoneTel: "tel:+919876543210",
    whatsappDisplay: "+91 98765 43210",
    whatsappNumber: "919876543210", // Country code + 10-digit number without '+'
    whatsappUrl: "https://wa.me/919876543210?text=Hello...",
    email: "client@example.com",
    address: "Plot 123, Street Name, City, State - PIN",
    workingHours: "Monday to Sunday: 8:00 AM – 8:00 PM",
  },
  // ...
};
```

### 2. Update Service Areas
Modify the `serviceAreas` array in `siteConfig.js` to list the actual cities, neighborhoods, or industrial zones your client serves.

### 3. Add or Modify Scrap Categories
You can adjust names, descriptions, or accepted items inside the `categories` array in `siteConfig.js`.

---

## 🎨 Styling & Color Palette

All colors and spacing are controlled via CSS variables at the top of [`src/styles/index.css`](src/styles/index.css):
- `--primary-600`: Emerald eco-green (`#059669`)
- `--whatsapp-green`: Official WhatsApp green (`#25D366`)
- `--slate-900`: High-contrast charcoal slate (`#0f172a`)
- `--bg-page`: Clean slate canvas (`#f8fafc`)
