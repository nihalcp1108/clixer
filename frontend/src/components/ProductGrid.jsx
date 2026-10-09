import React, { useState, useMemo } from 'react';
import { Search, Loader2, AlertCircle } from 'lucide-react';
import ProductCard from './ProductCard';
import { CATEGORIES } from '../data/products';

// Categorization helper for sorting products:
// 1. First: Channel Drainers (Priority 1)
// 2. Second: Square Drainers (Priority 2)
// 3. Third: Accessories & Tools (Priority 3)
export function getProductCategoryGroup(item) {
  const cat = (item.category || '').toLowerCase().trim();
  const code = (item.code || '').toLowerCase().trim();
  const model = (item.model || '').toLowerCase().trim();
  const series = (item.series || '').toLowerCase().trim();
  const name = (item.name || '').toLowerCase().trim();

  // 1. Channel Drainers
  if (
    cat === 'channel-drainers' ||
    cat.includes('channel') ||
    code.startsWith('clx 800') ||
    code === 'clx 301' ||
    model.includes('channel') ||
    series.includes('channel') ||
    name.includes('channel')
  ) {
    return 'channel-drainers';
  }

  // 2. Square Drainers (Premium Square, Tile Insert, Flat Cut)
  if (
    cat === 'square-drainers' ||
    cat === 'premium-square-drains' ||
    cat === 'tile-insert' ||
    cat === 'flat-cut' ||
    cat.includes('square') ||
    cat.includes('insert') ||
    cat.includes('flat') ||
    code.startsWith('clx 801') ||
    code.startsWith('clx 802') ||
    code.startsWith('clx 807') ||
    code.startsWith('clx 804') ||
    code.startsWith('clx 10') ||
    code.startsWith('clx 110') ||
    series.includes('square') ||
    series.includes('flat cut') ||
    series.includes('tile insert') ||
    name.includes('square') ||
    name.includes('flat cut') ||
    name.includes('tile insert')
  ) {
    return 'square-drainers';
  }

  // 3. Accessories
  return 'accessories';
}

const CATEGORY_PRIORITY = {
  'channel-drainers': 1,
  'square-drainers': 2,
  'accessories': 3
};

export default function ProductGrid({
  onSelectProduct,
  activeCategory = 'all',
  onCategoryChange,
  products = [],
  loading = false,
  error = null,
  onRetry
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const productList = Array.isArray(products) ? products : [];

  // Filter and sort products: 1. Channel Drainers, 2. Square Drainers, 3. Accessories
  const sortedProducts = useMemo(() => {
    const query = searchQuery.toLowerCase().replace(/[^a-z0-9]/g, '').trim();
    const normActive = (activeCategory || 'all').toLowerCase().replace(/[^a-z0-9]/g, '');

    // 1. Filter by search query
    const matchesSearch = (item) => {
      if (!query) return true;
      const cleanCode = (item.code || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const cleanVariant = (item.variant || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const cleanSeries = (item.series || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const cleanModel = (item.model || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const cleanName = (item.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const cleanId = (item.id || item._id || item.customId || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const cleanCategory = (item.categoryLabel || item.category || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const matchesSizes = item.availableSizes && item.availableSizes.some(s =>
        s.toLowerCase().replace(/[^a-z0-9]/g, '').includes(query)
      );

      return (
        cleanCode.includes(query) ||
        cleanVariant.includes(query) ||
        cleanSeries.includes(query) ||
        cleanModel.includes(query) ||
        cleanName.includes(query) ||
        cleanId.includes(query) ||
        cleanCategory.includes(query) ||
        matchesSizes ||
        (item.sizeShort && item.sizeShort.toLowerCase().includes(query))
      );
    };

    // 2. Filter by activeCategory
    const matchesCategory = (item) => {
      if (!activeCategory || normActive === 'all') return true;

      const group = getProductCategoryGroup(item);

      // Group match
      if (normActive === 'channeldrainers' || normActive === 'channeldrainer') {
        return group === 'channel-drainers';
      }
      if (normActive === 'squaredrainers' || normActive === 'squaredrainer') {
        return group === 'square-drainers';
      }
      if (
        normActive === 'accessories' ||
        normActive === 'otherproducts' ||
        normActive.includes('accessori') ||
        normActive.includes('tool')
      ) {
        return group === 'accessories';
      }

      // Sub-category match (e.g. tile-insert, flat-cut, premium-square-drains)
      const normItemCat = (item.category || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const normItemCatLabel = (item.categoryLabel || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      return normItemCat === normActive || normItemCatLabel === normActive;
    };

    const filtered = productList.filter(item => matchesCategory(item) && matchesSearch(item));

    // 3. Sort strictly by Category: 1. Channel Drainers, 2. Square Drainers, 3. Accessories
    return filtered.sort((a, b) => {
      const priorityA = CATEGORY_PRIORITY[getProductCategoryGroup(a)] || 99;
      const priorityB = CATEGORY_PRIORITY[getProductCategoryGroup(b)] || 99;
      if (priorityA !== priorityB) {
        return priorityA - priorityB;
      }
      return 0; // preserve order within category
    });
  }, [productList, activeCategory, searchQuery]);

  return (
    <div>
      {/* Category Pills & Search Input */}
      <div className="filter-bar">
        <div className="category-pills">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => onCategoryChange && onCategoryChange(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search code or category (e.g. 8002, 801, 804, 101, Jack)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Loading State */}
      {loading && productList.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '5rem 1rem', color: 'var(--text-muted)' }}>
          <Loader2 size={36} className="admin-spin" style={{ margin: '0 auto 1rem' }} />
          <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Loading catalogue products...</p>
        </div>
      ) : error && productList.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '5rem 1rem', color: 'var(--text-muted)' }}>
          <AlertCircle size={36} style={{ margin: '0 auto 1rem', color: '#ef4444' }} />
          <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ef4444' }}>Unable to load products. Please try again.</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="btn btn-secondary"
              style={{ marginTop: '1rem' }}
            >
              Retry
            </button>
          )}
        </div>
      ) : sortedProducts.length > 0 ? (
        /* Unified 4-Column Grid: 1st Channel Drainers, 2nd Square Drainers, 3rd Accessories */
        <div className="product-grid-container">
          {sortedProducts.map((product, index) => {
            const prodKey = product._id || product.id || product.customId || `${product.model}-${index}`;
            return (
              <ProductCard
                key={prodKey}
                product={product}
                index={index}
                onSelect={onSelectProduct}
              />
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: '1.2rem', fontWeight: '600' }}>
            {searchQuery ? 'No matching catalogue product found.' : 'No products available.'}
          </p>
          <p style={{ fontSize: '0.9rem' }}>
            {searchQuery
              ? 'Try searching by product code or name (e.g. 8002, 8005, 8004, 801, 802, 807, 804, 101, Jack, Spacer, Wedges).'
              : 'Products will appear here once added to the catalogue.'}
          </p>
        </div>
      )}
    </div>
  );
}
