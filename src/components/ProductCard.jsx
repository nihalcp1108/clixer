import React from 'react';
import { ShieldCheck } from 'lucide-react';

const DUAL_GRADE_CODES = ['CLX 101', 'CLX 102', 'CLX 103', 'CLX 110', 'COCKROACH BOWL'];

export default function ProductCard({ product, index = 0, onSelect }) {
  const styleDelay = { '--card-index': index % 4 };

  const isDualGrade =
    (product.material && product.material.includes('202') && product.material.includes('304')) ||
    DUAL_GRADE_CODES.includes(product.code);

  const hasAisi = product.material && product.material.includes('AISI');

  return (
    <article
      className="b2b-product-card reveal-card"
      style={styleDelay}
      onClick={() => onSelect && onSelect(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect && onSelect(product);
        }
      }}
    >
      {/* 1. Product Image */}
      <div className="b2b-card-image-box">
        {hasAisi && (
          <div className="b2b-tags-container">
            <span className="b2b-material-tag">
              <ShieldCheck size={11} /> AISI 304
            </span>
            {isDualGrade && (
              <span className="b2b-material-tag b2b-material-tag-202">
                <ShieldCheck size={11} /> AISI 202
              </span>
            )}
          </div>
        )}

        <img
          src={product.image}
          alt={`Clixer ${product.code} ${product.name}`}
          loading="lazy"
          className="b2b-card-img"
        />
      </div>

      {/* 2. Product Name & 3. Product Code */}
      <div className="b2b-card-body">
        <h3 className="b2b-card-name">{product.name}</h3>
        <p className="b2b-card-code">{product.code}</p>
      </div>
    </article>
  );
}

