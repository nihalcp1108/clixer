import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

export default function ImageGallery() {
  const galleryItems = [
    { code: "CLX 8002", name: "Channel Drainer", category: "Channel Drainer", image: "/images/products/clx-8002.png" },
    { code: "CLX 8005", name: "Channel Drainer", category: "Channel Drainer", image: "/images/products/clx-8005.png" },
    { code: "CLX 8004", name: "Channel Drainer", category: "Channel Drainer", image: "/images/products/clx-8004.png" },
    { code: "CLX 801", name: "Premium Square Drain", category: "Premium", image: "/images/products/clx-801.png" },
    { code: "CLX 802", name: "Premium Square Drain", category: "Premium", image: "/images/products/clx-802.png" },
    { code: "CLX 807", name: "Premium Square Drain", category: "Premium", image: "/images/products/clx-807.png" },
    { code: "CLX 804", name: "Tile Insert Drain", category: "Tile Insert", image: "/images/products/clx-804.png" },
    { code: "CLX 101", name: "Flat Cut Floor Drainer", category: "Flat Cut", image: "/images/products/clx-101.png" },
    { code: "COCKROACH BOWL", name: "Anti-Odor Protection Trap", category: "Other Products", image: "/images/products/cockroach-bowl.png" },
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <section style={{ padding: '4.5rem 0', background: 'var(--light-surface)' }}>
      <div className="container">
        <SectionTitle
          badge="Product Showcase"
          title="Interactive Product Gallery"
          description="Browse official high-resolution catalogue imagery and finish swatches."
        />

        <div className="gallery-main-grid">
          {/* Main Large Display */}
          <div className="gallery-display-box" style={{
            background: 'radial-gradient(circle at center, #fdf2f4 0%, #f4f5f9 100%)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--light-border)',
            padding: '2.5rem',
            textAlign: 'center',
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src={galleryItems[activeImageIndex].image}
              alt={`Clixer Code ${galleryItems[activeImageIndex].code} ${galleryItems[activeImageIndex].name}`}
              className="gallery-display-img"
              style={{ maxHeight: '300px', maxWidth: '100%', objectFit: 'contain', filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.15))', transition: 'all 0.3s ease' }}
            />
            <div style={{ marginTop: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <span className="b2b-code-badge" style={{ background: 'var(--primary)', color: '#ffffff', fontSize: '0.75rem', fontWeight: 800, padding: '0.2rem 0.55rem', borderRadius: '4px' }}>
                  CODE: {galleryItems[activeImageIndex].code}
                </span>
                <span className="badge-primary">{galleryItems[activeImageIndex].category}</span>
              </div>
              <h4 style={{ marginTop: '0.4rem', fontSize: '1.15rem', fontWeight: 700 }}>
                {galleryItems[activeImageIndex].code} {galleryItems[activeImageIndex].category !== 'Other Products' ? galleryItems[activeImageIndex].category : ''}
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0.2rem 0 0 0', fontWeight: 500 }}>
                {galleryItems[activeImageIndex].name}
              </p>
            </div>
          </div>

          {/* Thumbnails Grid */}
          <div className="gallery-thumbs-grid">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`gallery-thumb-item ${activeImageIndex === idx ? 'active' : ''}`}
                style={{
                  background: 'var(--light-bg)',
                  border: `2px solid ${activeImageIndex === idx ? 'var(--primary)' : 'var(--light-border)'}`,
                  borderRadius: 'var(--radius-md)',
                  padding: '0.65rem 0.5rem',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'var(--transition-fast)'
                }}
              >
                <img src={item.image} alt={item.code} style={{ height: '60px', maxWidth: '100%', margin: '0 auto', objectFit: 'contain' }} />
                <span className="thumb-title" style={{ display: 'block', fontSize: '0.76rem', fontWeight: '800', color: 'var(--primary)', marginTop: '0.35rem', lineHeight: '1.2' }}>
                  {item.code}
                </span>
                <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: '1.2' }}>
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
