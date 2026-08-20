import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

export default function ImageGallery() {
  const galleryItems = [
    { title: "Catalogue Cover Artwork", category: "Catalogue", image: "/images/catalogue/cover-full.png" },
    { title: "CLX 8002 Linear Channel", category: "Channel Drainers", image: "/images/products/clx-8002.png" },
    { title: "CLX 8005 Wave Drainer", category: "Channel Drainers", image: "/images/products/clx-8005.png" },
    { title: "CLX 8004 Tile Insert Channel", category: "Channel Drainers", image: "/images/products/clx-8004.png" },
    { title: "CLX 801 Designer Square", category: "Designer Drainers", image: "/images/products/clx-801.png" },
    { title: "CLX 804 Tile Insert Drainer", category: "Designer Drainers", image: "/images/products/clx-804.png" },
    { title: "Stainless Steel Cockroach Bowl", category: "Drain Trap", image: "/images/products/cockroach-bowl.png" },
    { title: "Tile Leveling Jack Kit", category: "Tile Tools", image: "/images/products/tile-leveling-hero.png" },
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <section style={{ padding: '5rem 0', background: 'var(--light-surface)' }}>
      <div className="container">
        <SectionTitle
          badge="Product Showcase"
          title="Interactive Product Gallery"
          description="Browse official high-resolution catalogue imagery and finish swatches."
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2.5rem', alignItems: 'center' }}>
          {/* Main Large Display */}
          <div style={{
            background: 'radial-gradient(circle at center, #fdf2f4 0%, #f4f5f9 100%)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--light-border)',
            padding: '2.5rem',
            textAlign: 'center',
            minHeight: '420px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src={galleryItems[activeImageIndex].image}
              alt={galleryItems[activeImageIndex].title}
              style={{ maxHeight: '320px', objectFit: 'contain', filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.15))', transition: 'all 0.3s ease' }}
            />
            <div style={{ marginTop: '1.5rem' }}>
              <span className="badge-primary">{galleryItems[activeImageIndex].category}</span>
              <h4 style={{ marginTop: '0.4rem', fontSize: '1.2rem' }}>{galleryItems[activeImageIndex].title}</h4>
            </div>
          </div>

          {/* Thumbnails Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                style={{
                  background: 'var(--light-bg)',
                  border: `2px solid ${activeImageIndex === idx ? 'var(--primary)' : 'var(--light-border)'}`,
                  borderRadius: 'var(--radius-md)',
                  padding: '0.8rem',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'var(--transition-fast)'
                }}
              >
                <img src={item.image} alt={item.title} style={{ height: '70px', margin: '0 auto', objectFit: 'contain' }} />
                <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-main)', marginTop: '0.4rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
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
