/**
 * SITE CONFIGURATION & CONTENT
 * -------------------------------------------------------------
 * All business details, contact information, scrap categories,
 * service areas, and FAQs are managed here.
 * A beginner developer or client can easily update this file
 * to change any text, phone number, or business info.
 */

import { contactConfig } from '../config/contact';

export const siteConfig = {
  // Business Information
  businessName: "EcoScrap Solutions",
  tagline: "Turn Your Scrap Into Value",
  subTagline: "Sell your scrap easily with reliable doorstep pickup and fair, transparent service.",
  
  // Contact Details (Linked to central src/config/contact.js)
  contact: {
    ...contactConfig,
    address: "Opposite Dhobi Ghat, near Hanuman Temple, Nizamabad - Koratla Road, Armur, Telangana 503223",
    googleMapsUrl: "https://maps.google.com/?q=Opposite+Dhobi+Ghat,+near+Hanuman+Temple,+Nizamabad+-+Koratla+Road,+Armur,+Telangana+503223",
    embedMapUrl: "https://maps.google.com/maps?q=Opposite+Dhobi+Ghat+near+Hanuman+Temple+Nizamabad+Koratla+Road+Armur+Telangana+503223&t=&z=15&ie=UTF8&iwloc=&output=embed",
    workingHours: "Monday to Sunday: 8:00 AM – 8:00 PM",
    pickupNotice: "Same-day pickup available for requests booked before 2:00 PM",
  },

  // Buyer Physical Scrap Yard Location
  buyerLocation: {
    yardTitle: "EcoScrap Yard & Drop-off Facility",
    address: "Opposite Dhobi Ghat, near Hanuman Temple, Nizamabad - Koratla Road, Armur, Telangana 503223",
    shortAddress: "Nizamabad - Koratla Road, Armur, Telangana",
    landmark: "Opposite Dhobi Ghat, near Hanuman Temple",
    googleMapsUrl: "https://maps.google.com/?q=Opposite+Dhobi+Ghat,+near+Hanuman+Temple,+Nizamabad+-+Koratla+Road,+Armur,+Telangana+503223",
    embedMapUrl: "https://maps.google.com/maps?q=Opposite+Dhobi+Ghat+near+Hanuman+Temple+Nizamabad+Koratla+Road+Armur+Telangana+503223&t=&z=15&ie=UTF8&iwloc=&output=embed",
    workingHours: "Monday to Sunday: 8:00 AM – 8:00 PM",
    dropoffAvailable: "Walk-in customers & commercial vehicle drop-offs welcome with computerized weighbridge & instant payment.",
  },

  // Key Highlights / Trust Indicators
  highlights: [
    {
      id: "doorstep-pickup",
      title: "Doorstep Pickup",
      description: "Convenient doorstep collection for homes, offices, and factories at your scheduled time.",
      icon: "Truck",
    },
    {
      id: "fair-pricing",
      title: "Fair Pricing",
      description: "Honest, market-standard rates with certified digital weighing machines.",
      icon: "Scale",
    },
    {
      id: "quick-response",
      title: "Quick Response",
      description: "Fast inquiry replies via WhatsApp and phone call within minutes.",
      icon: "Zap",
    },
    {
      id: "trusted-service",
      title: "Trusted Service",
      description: "Verified staff, zero hidden deductions, and instant payment on spot.",
      icon: "ShieldCheck",
    },
  ],

  // What We Buy - 8 Categories with Visual Imagery & Service Numbers
  categories: [
    {
      id: "metal-scrap",
      number: "01",
      name: "Metal Scrap",
      icon: "Boxes",
      badge: "High Demand",
      image: "/images/scrap/metal_scrap.jpg",
      description: "Iron, steel, copper wire, aluminium sheets, brass utensils, and industrial metal turnings.",
      items: ["Iron & TMT Bars", "Steel Utensils & Pipes", "Copper Wire & Cables", "Aluminium Sheets & Cans", "Brass & Bronze"],
    },
    {
      id: "e-waste",
      number: "02",
      name: "E-Waste & IT Scrap",
      icon: "Cpu",
      badge: "Eco-Recycled",
      image: "/images/scrap/ewaste_scrap.jpg",
      description: "Outdated or dead computers, laptops, circuit boards, inverters, UPS, and server racks.",
      items: ["Old PCs & Desktops", "Laptops & Notebooks", "Motherboards & PCBs", "UPS & Inverters", "Server Racks"],
    },
    {
      id: "paper-cardboard",
      number: "03",
      name: "Paper & Cardboard",
      icon: "Newspaper",
      badge: "Everyday Bulk",
      image: "/images/scrap/paper_cardboard_scrap.jpg",
      description: "Old newspapers (raddi), corrugated carton boxes, discarded office files, and bulk books.",
      items: ["Newspapers (Raddi)", "Carton Boxes", "Office Records", "Books & Notebooks", "Shredded Paper"],
    },
    {
      id: "appliances",
      number: "04",
      name: "Appliances & ACs",
      icon: "Tv",
      badge: "Doorstep Lift",
      image: "/images/scrap/appliance_ac_scrap.jpg",
      description: "Old air conditioners, refrigerators, coolers and kitchen appliances.",
      items: ["Split & Window ACs", "Refrigerators", "Washing Machines", "Microwave Ovens", "Geysers & Coolers"],
    },
    {
      id: "plastic-scrap",
      number: "05",
      name: "Plastic & mixed scrap",
      icon: "Recycle",
      badge: "Recyclable",
      image: "/images/scrap/plastic_scrap.jpg",
      description: "Plastic items, hard plastic and mixed recyclable household material.",
      items: ["HDPE / PP Drums", "Plastic Buckets", "Crates & Trays", "Broken Furniture", "Packaging Films"],
    },
    {
      id: "office-scrap",
      number: "06",
      name: "Office & bulk clearance",
      icon: "Building2",
      badge: "Bulk Cleared",
      image: "/images/scrap/office_scrap.jpg",
      description: "Furniture, batteries and mixed scrap from offices, institutions and factories.",
      items: ["Workstation Cubicles", "Rolling Chairs", "Filing Cabinets", "Networking Cables", "Glass Partitions"],
    },
    {
      id: "industrial-scrap",
      number: "07",
      name: "Industrial Scrap",
      icon: "Factory",
      badge: "Heavy Duty",
      image: "/images/scrap/industrial_heavy_scrap.jpg",
      description: "Heavy manufacturing machinery, GI pipelines, factory turnings, boiler tanks, and metal structures.",
      items: ["Heavy Machinery", "GI Pipes & Channels", "Industrial Motors", "Production Turnings", "Demolition Steel"],
    },
    {
      id: "other-scrap",
      number: "08",
      name: "Vehicle & Battery Scrap",
      icon: "Sparkles",
      badge: "All Welcome",
      image: "/images/scrap/battery_mixed_scrap.jpg",
      description: "Lead-acid vehicle batteries, inverter batteries, alloy wheels, and miscellaneous bulk scrap.",
      items: ["Lead-Acid Batteries", "Inverter Batteries", "Alloy Wheels", "Wooden Scrap", "Vehicle Scrap"],
    },
  ],

  // 4-Step Process
  howItWorks: [
    {
      stepNumber: "01",
      title: "Contact Us",
      description: "Reach out via a quick WhatsApp message or direct phone call with your location.",
      actionText: "Tap WhatsApp or Call",
      icon: "PhoneCall",
    },
    {
      stepNumber: "02",
      title: "Tell Us About Your Scrap",
      description: "Share brief details or a quick photo of the materials you want to sell.",
      actionText: "Send scrap photos / list",
      icon: "FileText",
    },
    {
      stepNumber: "03",
      title: "We Arrange Pickup",
      description: "Our verified team arrives at your doorstep with accurate digital weighing scales.",
      actionText: "Free doorstep pickup",
      icon: "CalendarCheck",
    },
    {
      stepNumber: "04",
      title: "Get Paid",
      description: "Transparent weighing right in front of you with instant cash or UPI digital payment.",
      actionText: "Immediate payment",
      icon: "BadgeCheck",
    },
  ],

  // Why Choose Us
  whyChooseUs: [
    {
      title: "Easy & Quick Contact",
      description: "No lengthy forms or registration hurdles. Just tap Call or WhatsApp to get in touch instantly.",
      icon: "MessageSquare",
    },
    {
      title: "Prompt Doorstep Service",
      description: "Our pickup vehicles and courteous staff come directly to your doorstep at your preferred time slot.",
      icon: "Truck",
    },
    {
      title: "Fair & Transparent Rates",
      description: "We offer competitive rates aligned with daily scrap market trends with zero hidden deductions.",
      icon: "Coins",
    },
    {
      title: "Certified Digital Scales",
      description: "Accurate weighing guaranteed. We use calibrated digital scales in front of you.",
      icon: "Scale",
    },
    {
      title: "Multiple Scrap Categories",
      description: "From household old newspapers to heavy industrial metal structures, we buy it all under one roof.",
      icon: "Layers",
    },
    {
      title: "Residential & Business Solutions",
      description: "Equipped to handle a few kilograms from households or metric tons from corporate towers and factories.",
      icon: "Users",
    },
    {
      title: "Environment-Friendly Recycling",
      description: "We follow eco-compliant methods ensuring your scrap goes to authorized green recyclers, not dumping grounds.",
      icon: "Leaf",
    },
  ],

  // Service Areas (Tailored to Armur, Nizamabad & Koratla Belt)
  serviceAreas: {
    note: "We provide daily doorstep pickup across Armur, Nizamabad, Koratla, and surrounding Telangana industrial & residential belts.",
    cities: [
      { name: "Armur Municipality & Localities", coverage: "Dhobi Ghat, Mamidipally, Perkit & all residential colonies" },
      { name: "Nizamabad City & Commercial Zones", coverage: "Commercial hubs, markets, retail centers & institutions" },
      { name: "Nizamabad - Koratla Highway Belt", coverage: "Workshops, roadside warehouses & transport depots" },
      { name: "Koratla & Metpally Regions", coverage: "Residential areas, commercial centers & retail scrap" },
      { name: "Balkonda & Kammarpally Clusters", coverage: "Agricultural scrap, rice mills, fabrication units & yards" },
      { name: "Dichpally & Industrial Suburbs", coverage: "Heavy industrial units, warehouses & manufacturing plants" },
    ],
    coverageTags: [
      "Residential Apartments",
      "Gated Communities",
      "Corporate Tech Parks",
      "Retail Showrooms",
      "Automobile Workshops",
      "Warehouses & Yards",
      "Educational Institutions",
      "Factories & Foundries",
    ],
  },

  // Frequently Asked Questions
  faqs: [
    {
      question: "What types of scrap do you buy?",
      answer: "We purchase almost all types of recyclable scrap, including ferrous metals (iron, steel), non-ferrous metals (copper, brass, aluminium), paper and cardboard (newspapers, carton boxes), e-waste (laptops, PCs, servers, cables), plastic scrap, old home appliances (ACs, fridges, washing machines), office furniture, and heavy industrial machinery.",
    },
    {
      question: "Do you provide doorstep pickup?",
      answer: "Yes, absolutely! We provide doorstep pickup for both residential homes and commercial establishments. Our pickup team arrives with digital scales and handles the loading and transportation.",
    },
    {
      question: "Do you buy e-waste?",
      answer: "Yes, we buy all kinds of electronic waste including outdated computers, motherboards, mobile phones, network racks, old printers, inverters, and battery backups. All e-waste is channeled through authorized eco-friendly recycling units.",
    },
    {
      question: "Do you collect bulk scrap from offices and factories?",
      answer: "Yes, we specialize in bulk scrap collection. Whether you are dismantling an office, clearing out warehouse inventory, or generating ongoing factory scrap, we have vehicles and manpower ready to handle large volumes.",
    },
    {
      question: "How can I contact you?",
      answer: "You can reach us immediately by clicking the 'Call Now' button to speak with us directly or tapping 'WhatsApp Us' to send photos of your scrap and get an instant quote.",
    },
    {
      question: "Which areas do you serve?",
      answer: "We serve the entire city and surrounding industrial corridors. If you are unsure whether your locality is covered, just drop us a WhatsApp message and our team will confirm pickup availability within minutes.",
    },
    {
      question: "How do you calculate the price and payment?",
      answer: "Prices are based on prevailing market rates per kilogram or per unit (for appliances). We weigh items accurately using certified digital scales right in front of you. Once weighed, you receive payment immediately via Cash, UPI, or Bank Transfer.",
    },
  ],

  // Customer Target Badges
  clientTypes: [
    "Individuals & Homes",
    "Offices & Co-working",
    "Shops & Retail",
    "Companies & IT Parks",
    "Factories & Manufacturing",
    "Institutions & Schools",
  ],
};
