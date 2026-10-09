import { SEO_CONFIG } from '../config/seo';

/**
 * Ensures a URL path is absolute using the site base URL
 */
export function toAbsoluteUrl(path = '') {
  if (!path) return SEO_CONFIG.siteUrl;
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SEO_CONFIG.siteUrl}${cleanPath}`;
}

/**
 * Truncate strings cleanly at word boundaries to fit search engine recommended lengths
 */
export function clampString(str, maxLength) {
  if (!str) return '';
  if (str.length <= maxLength) return str;
  const truncated = str.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return lastSpace > 0 ? `${truncated.slice(0, lastSpace)}...` : `${truncated}...`;
}

/**
 * Generate JSON-LD Schema for Organization / Brand
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': SEO_CONFIG.siteName,
    'legalName': SEO_CONFIG.marketedBy,
    'url': SEO_CONFIG.siteUrl,
    'logo': toAbsoluteUrl(SEO_CONFIG.defaultOgImage),
    'description': SEO_CONFIG.defaultDescription,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'VIII/123, Thalappara, Moonniyur',
      'addressLocality': 'Malappuram',
      'addressRegion': 'Kerala',
      'postalCode': '676311',
      'addressCountry': 'IN'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': SEO_CONFIG.contact.phone,
      'contactType': 'sales',
      'areaServed': 'IN',
      'availableLanguage': ['English', 'Malayalam']
    }
  };
}

/**
 * Generate JSON-LD Schema for WebSite
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': SEO_CONFIG.siteName,
    'url': SEO_CONFIG.siteUrl,
    'publisher': {
      '@type': 'Organization',
      'name': SEO_CONFIG.marketedBy
    }
  };
}

/**
 * Generate JSON-LD Schema for BreadcrumbList
 */
export function generateBreadcrumbSchema(items = []) {
  const itemListElement = [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': SEO_CONFIG.siteUrl
    },
    ...items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 2,
      'name': item.name,
      'item': toAbsoluteUrl(item.url)
    }))
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': itemListElement
  };
}

/**
 * Generate JSON-LD Schema for a Product based strictly on actual products.js data
 */
export function generateProductSchema(product) {
  if (!product) return null;

  // Extract base price integer if available in priceTable
  let priceValue = null;
  if (product.priceTable && product.priceTable.length > 0) {
    const rawPrice = product.priceTable[0].satin || '';
    const numericStr = rawPrice.replace(/[^0-9]/g, '');
    if (numericStr) {
      priceValue = parseInt(numericStr, 10);
    }
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.name,
    'image': [
      toAbsoluteUrl(product.image),
      ...(product.colorsImage ? [toAbsoluteUrl(product.colorsImage)] : [])
    ],
    'description': product.description || product.tagline,
    'sku': product.model || product.id,
    'mpn': product.id,
    'brand': {
      '@type': 'Brand',
      'name': SEO_CONFIG.siteName
    },
    'material': product.material || 'AISI 304 Stainless Steel',
    'offers': {
      '@type': 'Offer',
      'url': toAbsoluteUrl(`?product=${product.id}`),
      'priceCurrency': 'INR',
      'price': priceValue ? priceValue : undefined,
      'priceValidUntil': '2027-12-31',
      'itemCondition': 'https://schema.org/NewCondition',
      'availability': 'https://schema.org/InStock',
      'seller': {
        '@type': 'Organization',
        'name': SEO_CONFIG.marketedBy
      }
    }
  };

  // Remove undefined properties
  if (!schema.offers.price) {
    delete schema.offers.price;
  }

  return schema;
}
