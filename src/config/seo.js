import { COMPANY_INFO } from '../data/products';

export const SEO_CONFIG = {
  siteName: COMPANY_INFO.brand || "CLIXER®",
  marketedBy: COMPANY_INFO.marketedBy || "SACO TRADING COMPANY",
  // Supports environment variable VITE_SITE_URL, defaults to https://clixer.in
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://clixer.in',
  defaultTitle: 'CLIXER® | AISI 304 Stainless Steel Channel Drainers & Sanitary Systems',
  defaultDescription: 'Official catalogue of CLIXER® AISI 304 stainless steel channel drainers, premium square drains, tile inserts, flat cut drains, and cockroach trap bowls by SACO Trading Company.',
  defaultOgImage: '/images/branding/clixer-logo-lg.png',
  defaultKeywords: 'Clixer, CLX 8002, CLX 8005, CLX8004, CLX 801 Premium, CLX 802 Premium, CLX807 Premium, CLX804 Premium, CLX 101 Flat Cut, CLX 102 Flat Cut, CLX 103 Flat Cut, CLX 110 Flat Cut, Cockroach Bowl, Channel Drainer, AISI 304, SACO Trading Company',
  twitterHandle: '@clixer304',
  locale: 'en_US',
  
  contact: {
    phone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: COMPANY_INFO.address,
    whatsapp: COMPANY_INFO.whatsapp
  },

  // Category specific SEO overrides
  categories: {
    'all': {
      title: 'Official Catalogue | CLIXER® AISI 304 Stainless Steel Drainers',
      description: 'Explore the complete CLIXER range of AISI 304 stainless steel linear channel drainers, premium square drains, tile inserts, flat cut drains, and cockroach trap bowls.'
    },
    'channel-drainers': {
      title: 'Channel Drainers | CLIXER® CLX 8002, CLX 8005, CLX8004',
      description: 'Official catalogue prices and specifications for CLX 8002, CLX 8005, and CLX8004 AISI 304 linear channel drainers in Satin, Gold / R Gold, and Black finishes.'
    },
    'premium-square-drains': {
      title: 'Premium Square Drains | CLIXER® CLX 801, CLX 802, CLX807',
      description: 'Official catalogue prices and specifications for CLX 801 Premium, CLX 802 Premium, and CLX807 Premium square drains in 150 × 150 mm size.'
    },
    'tile-insert': {
      title: 'Tile Insert Drain | CLIXER® CLX804 Premium Tile Insert',
      description: 'Official catalogue prices and specifications for CLX804 Premium tile insert square drain in Satin, Gold / R Gold, and Black finishes.'
    },
    'flat-cut': {
      title: 'Flat Cut Drains | CLIXER® CLX 101, CLX 102, CLX 103, CLX 110',
      description: 'Official catalogue prices and specifications for CLX 101, CLX 102, CLX 103, and CLX 110 Flat Cut drains in 150 × 150 mm and 127 × 127 mm sizes.'
    },
    'other-products': {
      title: 'Cockroach Bowl | CLIXER® Anti-Insect Trap Bowl',
      description: 'Official CLIXER® AISI 304 stainless steel cockroach trap bowl with automatic gravity flap door mechanism.'
    }
  }
};
