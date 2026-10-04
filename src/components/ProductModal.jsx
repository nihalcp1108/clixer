import React, { useState, useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import SEO from './SEO/SEO';
import { SEO_CONFIG } from '../config/seo';

export default function ProductModal({ product, onClose }) {
  const [activeImage, setActiveImage] = useState(product?.image);

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Lock body scroll while modal is active
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!product) return null;

  // Build clean gallery if alternative views exist
  const galleryImages = [
    { src: product.image, label: 'Main View' },
    ...(product.colorsImage ? [{ src: product.colorsImage, label: 'Catalogue Finishes' }] : [])
  ];

  const DUAL_GRADE_CODES = ['CLX 101', 'CLX 102', 'CLX 103', 'CLX 110', 'COCKROACH BOWL'];

  const isDualGrade =
    (product.material && product.material.includes('202') && product.material.includes('304')) ||
    DUAL_GRADE_CODES.includes(product.code);

  const hasAisi = product.material && product.material.includes('AISI');

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <SEO
        title={`${product.code} - ${product.name} | ${SEO_CONFIG.siteName}`}
        description={`${product.code} ${product.name}`}
        canonicalPath={`?product=${product.id}`}
        ogImage={product.image}
        ogType="product"
      />

      <div className="modal-container modal-container-minimal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close product view">
          <X size={20} />
        </button>

        <div className="modal-minimal-content">
          {/* 1. Large Product Image / Gallery */}
          <div className="modal-gallery-wrapper">
            <div className="modal-large-image-box" style={{ position: 'relative' }}>
              {hasAisi && (
                <div className="b2b-tags-container" style={{ top: '1rem', left: '1rem', zIndex: 5 }}>
                  <span className="b2b-material-tag">
                    <ShieldCheck size={12} /> AISI 304
                  </span>
                  {isDualGrade && (
                    <span className="b2b-material-tag b2b-material-tag-202">
                      <ShieldCheck size={12} /> AISI 202
                    </span>
                  )}
                </div>
              )}

              <img
                src={activeImage || product.image}
                alt={`Clixer ${product.code} ${product.name}`}
                className="modal-large-img"
              />
            </div>

            {galleryImages.length > 1 && (
              <div className="modal-gallery-thumbs">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`modal-thumb-btn ${activeImage === img.src ? 'active' : ''}`}
                    onClick={() => setActiveImage(img.src)}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <img src={img.src} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 2. Product Name & 3. Product Code */}
          <div className="modal-minimal-info">
            <h2 className="modal-minimal-name">{product.name}</h2>
            <div className="modal-minimal-code">{product.code}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

