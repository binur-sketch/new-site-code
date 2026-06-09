const env = import.meta.env;

const getEnv = (key, fallback = '') => {
  const value = env[key];
  return typeof value === 'string' && value.trim().length > 0 ? value.trim() : fallback;
};

const digitsOnly = (value = '') => value.replace(/\D/g, '');

export const API_BASE_URL = getEnv('VITE_API_BASE_URL', '');
export const FORM_SUBMIT_BASE_URL = getEnv('VITE_FORM_SUBMIT_BASE_URL', 'https://formsubmit.co/ajax');

export const COMPANY = {
  name: getEnv('VITE_COMPANY_NAME', 'Vir Softech Pvt. Ltd.'),
  websiteUrl: getEnv('VITE_COMPANY_WEBSITE_URL', 'https://www.virsoftech.com'),
};

export const APP_CONTACT = {
  recipientEmail: getEnv('VITE_CONTACT_EMAIL', ''),
  tollFree: getEnv('VITE_CONTACT_TOLL_FREE', '18005717711'),
  whatsapp: getEnv('VITE_CONTACT_WHATSAPP', '9871258989'),
  whatsapp2: getEnv('VITE_CONTACT_WHATSAPP2', '9312339803'),
  whatsappCountryCode: getEnv('VITE_CONTACT_WHATSAPP_COUNTRY_CODE', '91'),
};

export const LINKS = {
  whatsapp: `https://wa.me/${APP_CONTACT.whatsappCountryCode}${digitsOnly(APP_CONTACT.whatsapp)}`,
  whatsapp2: `https://wa.me/${APP_CONTACT.whatsappCountryCode}${digitsOnly(APP_CONTACT.whatsapp2)}`,
  telTollFree: `tel:${digitsOnly(APP_CONTACT.tollFree)}`,
  mailToRecipient: `mailto:${APP_CONTACT.recipientEmail}`,
};

export const SOCIAL_LINKS = {
  instagram: getEnv('VITE_SOCIAL_INSTAGRAM', 'https://www.instagram.com/vsdoxofficial/'),
  facebook: getEnv('VITE_SOCIAL_FACEBOOK', 'https://www.facebook.com/vsdox'),
  linkedin: getEnv('VITE_SOCIAL_LINKEDIN', 'https://www.linkedin.com/company/vsdox'),
  googleReview: getEnv('VITE_SOCIAL_GOOGLE_REVIEW', 'https://share.google/TYRrCkBdnBwIsSPoi'),
};

export const DEFAULTS = {
  recipientEmail: APP_CONTACT.recipientEmail,
  blogCoverImage: getEnv('VITE_ASSET_BLOG_COVER', 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop'),
  blogHeroImage: getEnv('VITE_ASSET_BLOG_HERO', 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2400&auto=format&fit=crop'),
  requestDemoHeroImage: getEnv('VITE_ASSET_REQUEST_DEMO_HERO', 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop'),
  adminLoginBackground: getEnv('VITE_ASSET_ADMIN_LOGIN_BG', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=90&w=1800&auto=format&fit=crop'),
};
