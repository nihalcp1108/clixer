import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

export default function ImageGallery() {
  const galleryItems = [
    { title: "CLX 8002 Linear Channel", category: "Channel Drainers", image: "/images/products/clx-8002.png" },
    { title: "CLX 8005 Wave Drainer", category: "Channel Drainers", image: "/images/products/clx-8005.png" },
    { title: "CLX 8004 Tile Insert Channel", category: "Channel Drainers", image: "/images/products/clx-8004.png" },
    { title: "CLX 801 Designer Square", category: "Designer Drainers", image: "/images/products/clx-801.png" },
    { title: "CLX 802 Grid Dot Square", category: "Designer Drainers", image: "/images/products/clx-802.png" },
    { title: "CLX 804 Tile Insert Drainer", category: "Designer Drainers", image: "/images/products/clx-804.png" },
    { title: "Stainless Steel Cockroach Bowl", category: "Drain Trap", image: "/images/products/cockroach-bowl.png" },
    { title: "Tile Leveling Jack Kit", category: "Tile Tools", image: "/images/products/tile-leveling-hero.png" },
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
              alt={galleryItems[activeImageIndex].title}
              className="gallery-display-img"
              style={{ maxHeight: '300px', maxWidth: '100%', objectFit: 'contain', filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.15))', transition: 'all 0.3s ease' }}
            />
            <div style={{ marginTop: '1.25rem' }}>
              <span className="badge-primary">{galleryItems[activeImageIndex].category}</span>
              <h4 style={{ marginTop: '0.4rem', fontSize: '1.15rem' }}>{galleryItems[activeImageIndex].title}</h4>
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
                <img src={item.image} alt={item.title} style={{ height: '60px', maxWidth: '100%', margin: '0 auto', objectFit: 'contain' }} />
                <span className="thumb-title" style={{ display: 'block', fontSize: '0.73rem', fontWeight: '600', color: 'var(--text-main)', marginTop: '0.35rem', lineHeight: '1.25' }}>
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
