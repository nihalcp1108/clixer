import React, { useState } from 'react';
import { Eye, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ProductCard({ product, index = 0, onSelect }) {
  const [activeFinishView, setActiveFinishView] = useState('main'); // 'main' or 'colors'

  const finishSwatches = [
    { name: 'SATIN', bg: '#cbd5e1', border: '#94a3b8' },
    { name: 'GOLD / R GOLD', bg: '#d4af37', border: '#fef08a' },
    { name: 'BLACK', bg: '#18181b', border: '#3f3f46' },
  ];

  const styleDelay = { '--card-index': index % 4 };

  return (
    <article className="b2b-product-card reveal-card" style={styleDelay}>
      {/* Top Image Frame */}
      <div className="b2b-card-image-box" onClick={() => onSelect(product)}>
        <span className="b2b-material-tag">
          <ShieldCheck size={11} /> AISI 304
        </span>
        
        <img 
          src={activeFinishView === 'colors' && product.colorsImage ? product.colorsImage : product.image} 
          alt={`Clixer ${product.model} ${product.categoryLabel}`} 
          loading="lazy"
          className="b2b-card-img" 
        />
        
        <div className="b2b-card-hover">
          <span className="b2b-quick-btn">
            <Eye size={14} /> QUICK VIEW
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
        
        {/* Available Sizes Bar */}
        {product.sizeShort && (
          <div className="b2b-size-bar">
            <span className="size-label">Available Sizes:</span>
            <span className="size-values">{product.sizeShort}</span>
          </div>
        )}

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
            <span>Price:</span>
            <strong className="b2b-price-glow">
              {product.startingPrice ? (product.startingPrice.startsWith('₹') ? `From ${product.startingPrice}` : product.startingPrice) : 'On Request'}
            </strong>
          </div>

          <button className="btn btn-primary b2b-view-btn" onClick={() => onSelect(product)}>
            <span>VIEW PRODUCT</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </article>
  );
}
