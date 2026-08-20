import React, { useState } from 'react';
import { Eye, ShieldCheck, Sparkles } from 'lucide-react';

export default function ProductCard({ product, onSelect }) {
  const [activeFinishView, setActiveFinishView] = useState('main'); // 'main' or 'colors'

  const getStartingPrice = (priceTable) => {
    if (!priceTable || priceTable.length === 0) return null;
    return priceTable[0].satin;
  };

  const finishSwatches = [
    { name: 'Satin', bg: '#cbd5e1', border: '#94a3b8' },
    { name: 'PVD Gold', bg: '#d4af37', border: '#fef08a' },
    { name: 'Rose Gold', bg: '#b87333', border: '#e09f67' },
    { name: 'Matt Black', bg: '#18181b', border: '#3f3f46' },
  ];

  return (
    <article className="product-card">
      <div className="product-card-badge">
        <span className="badge-304">
          <ShieldCheck size={13} /> AISI 304 Steel
        </span>
      </div>

      <div className="product-card-image" onClick={() => onSelect(product)}>
        <img 
          src={activeFinishView === 'colors' && product.colorsImage ? product.colorsImage : product.image} 
          alt={product.name} 
          loading="lazy" 
        />
        <div className="card-image-hover-overlay">
          <span className="quick-view-btn">
            <Eye size={16} /> Quick Inspect
          </span>
        </div>
      </div>

      <div className="product-card-body">
        <div className="product-card-header-meta">
          <span className="product-card-model">{product.model}</span>
          {product.tier && (
            <span className="product-card-tier">
              <Sparkles size={11} /> {product.tier}
            </span>
          )}
        </div>

        <h3 className="product-card-title" onClick={() => onSelect(product)}>
          {product.name}
        </h3>
        
        <p className="product-card-desc">{product.tagline || product.description}</p>

        {/* Color Finish Selector Swatches */}
        {product.colorsImage ? (
          <div className="card-swatch-bar">
            <span className="swatch-title">4 Finishes:</span>
            <div className="swatch-dots">
              {finishSwatches.map((s, i) => (
                <span 
                  key={i} 
                  className="swatch-dot" 
                  title={s.name}
                  style={{ background: s.bg, border: `1px solid ${s.border}` }}
                  onMouseEnter={() => setActiveFinishView('colors')}
                  onMouseLeave={() => setActiveFinishView('main')}
                />
              ))}
            </div>
            {product.colorsImage && (
              <button 
                className={`toggle-colors-btn ${activeFinishView === 'colors' ? 'active' : ''}`}
                onClick={() => setActiveFinishView(activeFinishView === 'colors' ? 'main' : 'colors')}
              >
                {activeFinishView === 'colors' ? 'Single View' : 'Show Colors'}
              </button>
            )}
          </div>
        ) : null}

        <div className="product-card-specs">
          {product.dimensions && (
            <div className="product-spec-row">
              <span>Dimensions:</span>
              <strong>{product.dimensions}</strong>
            </div>
          )}
          {getStartingPrice(product.priceTable) && (
            <div className="product-spec-row price-highlight">
              <span>Starts at:</span>
              <strong className="price-val">{getStartingPrice(product.priceTable)}</strong>
            </div>
          )}
        </div>

        <div className="product-card-actions">
          <button className="btn btn-primary btn-full-card" onClick={() => onSelect(product)}>
            <Eye size={16} /> View Full Specs & Pricing
          </button>
        </div>
      </div>
    </article>
  );
}

