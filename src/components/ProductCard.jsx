import React, { useState } from 'react';
import { Eye, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ProductCard({ product, onSelect }) {
  const [activeFinishView, setActiveFinishView] = useState('main'); // 'main' or 'colors'

  const finishSwatches = [
    { name: 'Satin', bg: '#cbd5e1', border: '#94a3b8' },
    { name: 'PVD Gold', bg: '#d4af37', border: '#fef08a' },
    { name: 'Rose Gold', bg: '#b87333', border: '#e09f67' },
    { name: 'Matt Black', bg: '#18181b', border: '#3f3f46' },
  ];

  return (
    <article className="b2b-product-card">
      {/* Top Image Frame */}
      <div className="b2b-card-image-box" onClick={() => onSelect(product)}>
        <span className="b2b-material-tag">
          <ShieldCheck size={12} /> {product.material || "AISI 304 Stainless Steel"}
        </span>
        
        <img 
          src={activeFinishView === 'colors' && product.colorsImage ? product.colorsImage : product.image} 
          alt={product.name} 
          loading="lazy"
          className="b2b-card-img" 
        />
        
        <div className="b2b-card-hover">
          <span className="b2b-quick-btn">
            <Eye size={15} /> QUICK VIEW
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="b2b-card-body">
        <div className="b2b-card-meta">
          <span className="b2b-model-code">{product.model}</span>
          <span className="b2b-cat-label">{product.categoryLabel}</span>
        </div>

        <h3 className="b2b-card-title" onClick={() => onSelect(product)}>
          {product.name}
        </h3>
        
        <p className="b2b-card-desc">{product.tagline || product.description}</p>

        {/* Color Finish Selector Swatches */}
        {product.colorsImage ? (
          <div className="b2b-swatch-bar">
            <span className="swatch-title">Finishes:</span>
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
          </div>
        ) : null}

        <div className="b2b-card-footer">
          <div className="b2b-mat-info">
            <span>Material:</span>
            <strong>AISI 304 Steel</strong>
          </div>

          <button className="btn btn-primary b2b-view-btn" onClick={() => onSelect(product)}>
            <span>VIEW PRODUCT</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}
