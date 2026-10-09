import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { getFullImageUrl } from '../services/api';

const DUAL_GRADE_CODES = ['CLX 101', 'CLX 102', 'CLX 103', 'CLX 110', 'CLX 801', 'CLX 802', 'CLX 807'];

export default function ProductCard({ product, index = 0, onSelect }) {
  const navigate = useNavigate();
  const styleDelay = { '--card-index': index % 4 };

  const codeOrModel = product.code || product.model || '';
  const isDualGrade =
    (product.material && product.material.includes('202') && product.material.includes('304')) ||
    DUAL_GRADE_CODES.includes(codeOrModel);

  const hasAisi = (product.material && product.material.includes('AISI')) || product.badge;

  const handleClick = () => {
    if (onSelect) {
      onSelect(product);
    } else {
      const prodId = product._id || product.id || product.customId || encodeURIComponent(product.model || '');
      navigate(`/products/${prodId}`);
    }
  };

  return (
    <article
      className="b2b-product-card reveal-card"
      style={styleDelay}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
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
          src={getFullImageUrl(product.image)}
          alt={`Clixer ${codeOrModel} ${product.name}`}
          loading="lazy"
          className="b2b-card-img"
          onError={(e) => {
            e.currentTarget.src = '/images/branding/clixer-logo.png';
          }}
        />
      </div>

      {/* 2. Product Name & 3. Product Code */}
      <div className="b2b-card-body">
        <h3 className="b2b-card-name">{product.name}</h3>
        <p className="b2b-card-code">{codeOrModel}</p>
      </div>
    </article>
  );
}
