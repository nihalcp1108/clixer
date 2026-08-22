import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Check, MessageSquare, Phone, Tag } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import SEO from './SEO/SEO';
import { generateProductSchema } from '../utils/seo';
import { SEO_CONFIG } from '../config/seo';

export default function ProductModal({ product, onClose }) {
  // Variant states for interactive price calculation
  const [selectedSizeKey, setSelectedSizeKey] = useState('');
  const [selectedFinish, setSelectedFinish] = useState('SATIN');

  useEffect(() => {
    if (product) {
      if (product.priceMatrix) {
        const firstKey = Object.keys(product.priceMatrix)[0];
        setSelectedSizeKey(firstKey || '');
      }
      setSelectedFinish('SATIN');
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Lock body scroll
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!product) return null;

  // Calculate dynamic price based on selected size & finish
  const calculatePrice = () => {
    if (!product.priceMatrix) {
      return product.startingPrice || 'Price Available on Request';
    }
    if (selectedSizeKey && product.priceMatrix[selectedSizeKey]) {
      const priceVal = product.priceMatrix[selectedSizeKey][selectedFinish];
      if (priceVal) {
        return `₹${priceVal.toLocaleString('en-IN')}`;
      }
    }
    return product.startingPrice || 'Price Available on Request';
  };

  const currentDynamicPrice = calculatePrice();

  const whatsappMessage = encodeURIComponent(
    `Hello SACO Trading, I would like to inquire about CLIXER product ${product.model} (${product.name}) - Selected Size: ${selectedSizeKey || 'Standard'}, Finish: ${selectedFinish}, Price: ${currentDynamicPrice}.`
  );

  const productSchema = generateProductSchema(product);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <SEO
        title={`${product.name} | ${SEO_CONFIG.siteName}`}
        description={product.tagline || `${product.name} AISI 304 Stainless Steel`}
        canonicalPath={`?product=${product.id}`}
        ogImage={product.image}
        ogType="product"
        structuredData={productSchema}
      />

      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close details">
          <X size={20} />
        </button>

        <div className="modal-content-grid">
          {/* Left Column: Image & Finishes */}
          <div className="modal-image-col">
            <img src={product.image} alt={`Clixer ${product.model} ${product.categoryLabel}`} className="main-img" />

            {product.colorsImage && (
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '700', display: 'block', marginBottom: '0.5rem', letterSpacing: '1px' }}>
                  CATALOGUE METALLIC FINISHES
                </span>
                <img src={product.colorsImage} alt={`${product.model} Available Finishes`} style={{ maxHeight: '42px', margin: '0 auto' }} />
              </div>
            )}
          </div>

          {/* Right Column: Information, Variant Selector & Pricing */}
          <div className="modal-info-col">
            <div className="modal-header-info">
              <span className="model-code">{product.model}</span>
              <h2>{product.name}</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.4rem', flexWrap: 'wrap' }}>
                <span className="badge-304">
                  <ShieldCheck size={14} /> {product.material}
                </span>
                <span className="badge-category">
                  <Tag size={13} /> {product.categoryLabel}
                </span>
              </div>
            </div>

            {/* DYNAMIC CALCULATED CATALOGUE PRICE */}
            <div className="modal-price-box">
              <span className="price-title">Calculated Catalogue Price:</span>
              <div className="dynamic-price-value">{currentDynamicPrice}</div>
              <span className="price-note">*Includes official catalogue specifications</span>
            </div>

            {/* SIZE SELECTOR VARIANTS */}
            {product.priceMatrix && (
              <div className="modal-variant-section">
                <label className="variant-label">Select Size:</label>
                <div className="variant-options-grid">
                  {Object.keys(product.priceMatrix).map((sizeKey) => (
                    <button
                      key={sizeKey}
                      className={`variant-btn ${selectedSizeKey === sizeKey ? 'active' : ''}`}
                      onClick={() => setSelectedSizeKey(sizeKey)}
                    >
                      {sizeKey}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* FINISH SELECTOR VARIANTS */}
            {product.finishes && product.priceMatrix && (
              <div className="modal-variant-section">
                <label className="variant-label">Select Surface Finish:</label>
                <div className="variant-options-grid">
                  {product.finishes.map((finishName) => (
                    <button
                      key={finishName}
                      className={`variant-btn ${selectedFinish === finishName ? 'active' : ''}`}
                      onClick={() => setSelectedFinish(finishName)}
                    >
                      {finishName}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* FULL PRICE MATRIX TABLE */}
            {product.priceTable && (
              <div className="modal-table-wrapper">
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-main)', marginBottom: '0.4rem', letterSpacing: '0.5px' }}>
                  Official Price Matrix (₹)
                </h4>
                <table className="price-table">
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>Satin</th>
                      <th>Gold / R Gold</th>
                      <th>Black</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.priceTable.map((row, idx) => (
                      <tr key={idx}>
                        <td className="size-cell">{row.size}</td>
                        <td>{row.satin}</td>
                        <td className="price-gold">{row.goldRgold}</td>
                        <td className="price-black">{row.black}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Action Buttons */}
            <div className="modal-actions-group">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary modal-wa-btn"
              >
                <MessageSquare size={16} /> Inquire on WhatsApp
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="btn btn-secondary modal-call-btn"
              >
                <Phone size={16} /> Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
