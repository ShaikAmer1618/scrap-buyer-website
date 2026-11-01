/**
 * CENTRAL CONTACT CONFIGURATION
 * -------------------------------------------------------------
 * Single source of truth for all contact numbers, WhatsApp links,
 * and email across the entire website.
 *
 * TO REPLACE CLIENT DETAILS:
 * Simply update the variables below. Every WhatsApp button and
 * Call button across the entire website will automatically update.
 */

// 1. WhatsApp Number: Country code + phone digits only (no spaces, dashes, or '+')
export const WHATSAPP_NUMBER = "919676979249";

// 2. Phone Call Number: International format with '+' for tel: links
export const PHONE_NUMBER = "+919676979249";

// 3. Human-readable Display Formats (Rendered in UI text)
export const PHONE_DISPLAY = "+91 96769 79249";
export const WHATSAPP_DISPLAY = "+91 96769 79249";

// 4. Client Email Address
export const EMAIL_ADDRESS = "contact@ecoscropsolutions.com";

// 5. Default Pre-filled Message for WhatsApp Button
export const DEFAULT_WHATSAPP_MESSAGE = "Hello, I would like to sell some scrap. Please let me know the details.";

/**
 * Helper to generate https://wa.me/ URLs with properly encoded text
 * @param {string} message - Optional custom pre-filled message
 * @returns {string} Fully encoded WhatsApp URL
 */
export const getWhatsAppUrl = (message = DEFAULT_WHATSAPP_MESSAGE) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

// 6. Pre-computed Action URLs for direct use in <a href="...">
export const WHATSAPP_URL = getWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);
export const PHONE_TEL = `tel:${PHONE_NUMBER}`;

// Unified configuration object
export const contactConfig = {
  whatsappNumber: WHATSAPP_NUMBER,
  phoneNumber: PHONE_NUMBER,
  phoneDisplay: PHONE_DISPLAY,
  whatsappDisplay: WHATSAPP_DISPLAY,
  email: EMAIL_ADDRESS,
  defaultMessage: DEFAULT_WHATSAPP_MESSAGE,
  whatsappUrl: WHATSAPP_URL,
  phoneTel: PHONE_TEL,
  getWhatsAppUrl,
};

export default contactConfig;
