import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import ProductCard from './ProductCard';
import { CATEGORIES, products } from '../data/products';

export default function ProductGrid({ onSelectProduct, activeCategory, onCategoryChange }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    const query = searchQuery.toLowerCase().replace(/[^a-z0-9]/g, '').trim();

    return products.filter((item) => {
      // Category match
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;

      if (!matchesCategory) return false;
      if (!query) return true;

      // Cleaned model & name matching for flexible search (e.g. "CLX8002" or "8002" or "clx 8002")
      const cleanModel = item.model.toLowerCase().replace(/[^a-z0-9]/g, '');
      const cleanName = item.name.toLowerCase().replace(/[^a-z0-9]/g, '');
      const cleanId = item.id.toLowerCase().replace(/[^a-z0-9]/g, '');
      const cleanCategory = item.categoryLabel.toLowerCase().replace(/[^a-z0-9]/g, '');

      return (
        cleanModel.includes(query) ||
        cleanName.includes(query) ||
        cleanId.includes(query) ||
        cleanCategory.includes(query) ||
        (item.sizeShort && item.sizeShort.toLowerCase().includes(query))
      );
    });
  }, [activeCategory, searchQuery]);

  return (
    <div>
      {/* Category Pills & Search Input */}
      <div className="filter-bar">
        <div className="category-pills">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => onCategoryChange(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search code or category (e.g. 8002, 801, 804, 101)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Grid List */}
      {filteredProducts.length > 0 ? (
        <div className="product-grid-container">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} onSelect={onSelectProduct} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: '1.2rem', fontWeight: '600' }}>No matching catalogue product found.</p>
          <p style={{ fontSize: '0.9rem' }}>Try searching by product code (e.g. 8002, 8005, 8004, 801, 802, 807, 804, 101, 102, 103, 110).</p>
        </div>
      )}
    </div>
  );
}
