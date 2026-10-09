import React from 'react';
import SectionTitle from './SectionTitle';
import ProductCard from './ProductCard';
import { ShieldCheck, Bug, Check, Wrench } from 'lucide-react';
import { products, COMPANY_INFO } from '../data/products';

export default function CategorySection({ onSelectProduct }) {
  const channelDrainers = products.filter(p => p.category === 'channel-drainers');
  const designerDrainers = products.filter(p => p.category === 'designer-drainers');
  const floorDrainers = products.filter(p => p.category === 'floor-drainers');
  const cockroachBowl = products.find(p => p.id === 'cockroach-bowl');
  const tileLeveling = products.find(p => p.id === 'tile-leveling-system');

  return (
    <div>
      {/* 1. CHANNEL DRAINERS SECTION */}
      <section id="channel-drainers" style={{ padding: '5rem 0', background: 'var(--light-bg)' }}>
        <div className="container">
          <SectionTitle
            badge="Linear Drainage Systems"
            title="Channel Drainers Collection"
            description="Available in 1 FT to 4 FT lengths across 4 luxury metallic surface finishes."
          />
          <div className="product-grid-container">
            {channelDrainers.map(product => (
              <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />
            ))}
          </div>
        </div>
      </section>

      {/* 2. DESIGNER DRAINERS SECTION */}
      <section id="designer-drainers" style={{ padding: '5rem 0', background: 'var(--light-surface)' }}>
        <div className="container">
          <SectionTitle
            badge="Square Floor Grates"
            title="Designer Drainers Collection"
            description="150x150 mm (6x6 inch) luxury grates cut from solid AISI 304 stainless steel."
          />
          <div className="product-grid-container">
            {designerDrainers.map(product => (
              <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. FLOOR DRAINERS SECTION */}
      <section id="floor-drainers" style={{ padding: '5rem 0', background: 'var(--light-bg)' }}>
        <div className="container">
          <SectionTitle
            badge="Flat Cut Series"
            title="Flat Cut Floor Drainers Collection"
            description="Precision flat cut profiles in 6x6 inch and 5x5 inch square sizes."
          />
          <div className="product-grid-container">
            {floorDrainers.map(product => (
              <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. COCKROACH BOWL FEATURE SECTION */}
      <section id="cockroach-bowl" className="container">
        <div className="cockroach-section">
          <div className="container cockroach-grid">
            <div className="cockroach-image">
              <img src={cockroachBowl.image} alt={cockroachBowl.name} />
            </div>

            <div className="cockroach-info">
              <span className="badge-304" style={{ background: 'rgba(200,75,96,0.2)', color: 'var(--primary-light)', border: '1px solid var(--primary)' }}>
                <Bug size={14} /> Anti-Odor & Insect Protection
              </span>
              <h2>{cockroachBowl.name}</h2>
              <p>{cockroachBowl.description}</p>

              <ul className="cockroach-features-list">
                {cockroachBowl.highlights.map((item, idx) => (
                  <li key={idx}>
                    <Check size={18} /> {item}
                  </li>
                ))}
              </ul>

              <button className="btn btn-primary" onClick={() => onSelectProduct(cockroachBowl)}>
                View Specifications & Order Info
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TILE LEVELING JACK SECTION */}
      <section id="tile-leveling" className="leveling-section">
        <div className="container">
          <SectionTitle
            badge="Tile Accessories & Tools"
            title="Tile Leveling Jack System"
            description="Positioning / Leveling / Leveling Seams / Pasting Flat Tiles"
          />

          <div className="leveling-hero-card">
            <div className="leveling-hero-info">
              <span className="subtitle">Lippage-Free Installation Kit</span>
              <h3>{tileLeveling.name}</h3>
              <p style={{ color: 'var(--text-muted)', margin: '1rem 0 1.5rem 0', lineHeight: 1.7 }}>
                {tileLeveling.description}
              </p>
              <button className="btn btn-primary" onClick={() => onSelectProduct(tileLeveling)}>
                <Wrench size={16} /> Explore System Options
              </button>
            </div>

            <div className="leveling-hero-img">
              <img src={tileLeveling.image} alt={tileLeveling.name} />
            </div>
          </div>

          {/* Component Packaging Cards */}
          <div className="leveling-components-grid">
            {tileLeveling.components.map((comp, idx) => (
              <div key={idx} className="component-card">
                <img src={comp.image} alt={comp.name} />
                <h4>{comp.name}</h4>
                <span className="badge">{comp.options}</span>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{comp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
