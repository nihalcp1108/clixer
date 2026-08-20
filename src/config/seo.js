import { COMPANY_INFO } from '../data/products';

export const SEO_CONFIG = {
  siteName: COMPANY_INFO.brand || "CLIXER®",
  marketedBy: COMPANY_INFO.marketedBy || "SACO TRADING COMPANY",
  // Supports environment variable VITE_SITE_URL, defaults to https://clixer.in
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://clixer.in',
  defaultTitle: 'CLIXER® | AISI 304 Stainless Steel Channel Drainers & Sanitary Systems',
  defaultDescription: 'Architectural AISI 304 stainless steel linear channel drainers, designer grates, anti-odor cockroach traps, and tile leveling systems by SACO Trading Company.',
  defaultOgImage: '/images/branding/clixer-logo-lg.png',
  defaultKeywords: 'Clixer, Channel Drainer, Linear Drain, Stainless Steel Drain, AISI 304, SACO Trading Company, Designer Drainers, Floor Drainers, Tile Leveling Jack, Cockroach Bowl, Kerala',
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
      title: 'Architectural Sanitary Catalogue | CLIXER® AISI 304 Drains',
      description: 'Explore the complete CLIXER range of AISI 304 stainless steel linear drainers, designer square grates, cockroach traps, and tile accessories.'
    },
    'channel-drainers': {
      title: 'AISI 304 Linear Channel Drainers | CLIXER® Linear Drains',
      description: 'Heavy-duty AISI 304 stainless steel linear channel drainers with square, wave, and invisible tile-in grates. Available in Satin, Gold, Rose Gold, and Black.'
    },
    'designer-drainers': {
      title: 'Designer Square Floor Drainers | CLIXER® Premium Grates',
      description: 'Architectural 150x150mm square floor drainers with laser-cut cross-hatch, grid dot, chevron, and tile insert patterns in 4 luxury finishes.'
    },
    'floor-drainers': {
      title: 'Flat Cut Stainless Steel Floor Drainers | CLIXER® Drainers',
      description: 'Precision flat-cut AISI 304 floor drainers in 5x5 and 6x6 inch sizes. Slotted, grid, and frame designs for rapid water evacuation.'
    },
    'cockroach-bowl': {
      title: 'Anti-Cockroach & Anti-Odor Trap Bowl | CLIXER® Drainage Trap',
      description: '100% AISI 304 stainless steel cockroach trap bowl with automatic gravity counterweight flap door. Prevents pests, bad sewer odors, and backflow.'
    },
    'tile-leveling': {
      title: 'Professional Tile Leveling Jack & Kit | CLIXER® Tile System',
      description: 'High-density tile leveling system featuring reusable wedges, breakout clips, cross spacers, and adjustable steel pliers for lippage-free tiling.'
    }
  }
};
