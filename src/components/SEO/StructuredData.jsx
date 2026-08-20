import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateBreadcrumbSchema,
  generateProductSchema
} from '../../utils/seo';

/**
 * Returns structured data payload objects array for inclusion in SEO component
 */
export function getPageStructuredData({ product = null, categoryLabel = null, categoryId = null } = {}) {
  const schemas = [
    generateOrganizationSchema(),
    generateWebSiteSchema()
  ];

  // Breadcrumbs
  const breadcrumbItems = [];
  if (categoryId && categoryId !== 'all') {
    breadcrumbItems.push({
      name: categoryLabel || categoryId,
      url: `?category=${categoryId}`
    });
  }

  if (product) {
    if (product.categoryLabel && (!categoryId || categoryId === 'all')) {
      breadcrumbItems.push({
        name: product.categoryLabel,
        url: `?category=${product.category}`
      });
    }
    breadcrumbItems.push({
      name: product.name,
      url: `?product=${product.id}`
    });

    const productSchema = generateProductSchema(product);
    if (productSchema) {
      schemas.push(productSchema);
    }
  }

  schemas.push(generateBreadcrumbSchema(breadcrumbItems));

  return schemas;
}
