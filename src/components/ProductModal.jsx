import React, { useEffect } from 'react';
import { X, ShieldCheck, Check, MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import SEO from './SEO/SEO';
import { generateProductSchema } from '../utils/seo';
import { SEO_CONFIG } from '../config/seo';

export default function ProductModal({ product, onClose }) {
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

  const whatsappMessage = encodeURIComponent(
    `Hello SACO Trading, I would like to inquire about CLIXER product ${product.model} (${product.name}).`
  );

  const productSchema = generateProductSchema(product);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <SEO
        title={`${product.name} | ${SEO_CONFIG.siteName}`}
        description={product.description || product.tagline}
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
            <img src={product.image} alt={`${product.name} - AISI 304 Stainless Steel`} className="main-img" />

            {product.colorsImage && (
              <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700', display: 'block', marginBottom: '0.5rem' }}>
                  AVAILABLE SURFACE FINISHES
                </span>
                <img src={product.colorsImage} alt={`${product.name} Available Color Finishes`} style={{ maxHeight: '40px', margin: '0 auto' }} />
              </div>
            )}
          </div>

          {/* Right Column: Information & Pricing Table */}
          <div className="modal-info-col">
            <div className="modal-header-info">
              <span className="model-code">{product.model}</span>
              <h2>{product.name}</h2>
              <span className="badge-304" style={{ marginTop: '0.5rem' }}>
                <ShieldCheck size={14} /> {product.material}
              </span>
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              {product.description}
            </p>

            {product.highlights && (
              <div>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  Product Highlights
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {product.highlights.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                      <Check size={14} color="var(--primary)" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Price Matrix Table */}
            {product.priceTable && (
              <div className="modal-table-wrapper">
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  Catalogue Price Matrix (₹)
                </h4>
                <table className="price-table">
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>Satin</th>
                      <th>Gold</th>
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

            {/* Specifications Key-Value List */}
            {product.specifications && (
              <div style={{ marginTop: '0.5rem' }}>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  Specifications
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem' }}>
                  {product.specifications.map((spec, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem', background: 'var(--light-card)', borderRadius: '4px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>{spec.label}</span>
                      <strong style={{ color: 'var(--text-main)' }}>{spec.value}</strong>
                    </div>
                  ))}
                </div>
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
