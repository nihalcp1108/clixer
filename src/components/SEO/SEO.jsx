import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG } from '../../config/seo';
import { toAbsoluteUrl, clampString } from '../../utils/seo';

export default function SEO({
  title,
  description,
  canonicalPath = '',
  ogImage,
  ogType = 'website',
  keywords,
  noindex = false,
  structuredData = []
}) {
  const fullTitle = clampString(title || SEO_CONFIG.defaultTitle, 65);
  const fullDescription = clampString(description || SEO_CONFIG.defaultDescription, 160);
  const canonicalUrl = toAbsoluteUrl(canonicalPath);
  const imageUrl = toAbsoluteUrl(ogImage || SEO_CONFIG.defaultOgImage);
  const pageKeywords = keywords || SEO_CONFIG.defaultKeywords;
  const robotsSetting = noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large';

  // Ensure structuredData is an array
  const schemas = Array.isArray(structuredData)
    ? structuredData.filter(Boolean)
    : [structuredData].filter(Boolean);

  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="robots" content={robotsSetting} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:site_name" content={SEO_CONFIG.siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={SEO_CONFIG.locale} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SEO_CONFIG.twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {/* JSON-LD Structured Data Injection */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
