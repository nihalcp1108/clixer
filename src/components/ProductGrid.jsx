import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import ProductCard from './ProductCard';
import { CATEGORIES, products } from '../data/products';

export default function ProductGrid({ onSelectProduct, activeCategory, onCategoryChange }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Category match
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.model.toLowerCase().includes(query) ||
        item.name.toLowerCase().includes(query) ||
        item.categoryLabel.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
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
            placeholder="Search by model (e.g. 8002, 801, tile)..."
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
          <p style={{ fontSize: '1.2rem', fontWeight: '600' }}>No matching products found.</p>
          <p style={{ fontSize: '0.9rem' }}>Try refining your search keyword or switching categories.</p>
        </div>
      )}
    </div>
  );
}
