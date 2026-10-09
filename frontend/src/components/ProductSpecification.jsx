import React from 'react';
import { ShieldCheck, CheckCircle2, Sliders, Droplets, Award, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function ProductSpecification() {
  const specs = [
    {
      icon: <ShieldCheck size={26} />,
      title: "Austenitic AISI 304 Steel",
      desc: "High chromium-nickel grade stainless steel offering 100% rust prevention in continuous wet bathroom & shower environments."
    },
    {
      icon: <Droplets size={26} />,
      title: "Rapid Evacuation Flow",
      desc: "Precision linear slot engineering accelerates water intake to prevent pooling under heavy-flow rain showers."
    },
    {
      icon: <Sliders size={26} />,
      title: "4 Luxury Metallic Finishes",
      desc: "Hairline Satin, PVD Gold, Rose Gold, and Matt Black electro-coatings designed to match architectural tapware."
    },
    {
      icon: <CheckCircle2 size={26} />,
      title: "Anti-Odor & Insect Barrier",
      desc: "Gravity counterweighted stainless trap door opens with water flow and shuts tight when dry to block cockroaches & sewer gas."
    }
  ];

  return (
    <section className="brand-section">
      <div className="container">
        <div className="brand-grid">
          <div className="brand-content">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <img 
                src="/images/branding/aisi304-badge.png" 
                alt="AISI 304 Certified" 
                style={{ height: '54px', width: 'auto', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.5))' }}
              />
              <div>
                <span style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.82rem' }}>
                  Material & Engineering Excellence
                </span>
                <h3 style={{ color: '#fff', fontSize: '1.15rem', margin: 0, fontWeight: 700 }}>AISI 304 Stainless Steel Standard</h3>
              </div>
            </div>

            <h2 style={{ fontSize: '2.1rem', lineHeight: 1.25 }}>Why Leading Builders Choose CLIXER® Sanitary Systems</h2>
            
            <p style={{ marginTop: '1rem', fontSize: '1rem', lineHeight: 1.7 }}>
              CLIXER by <strong>{COMPANY_INFO.marketedBy}</strong> defines premium quality in linear channel drainers, designer square floor grates, anti-odor traps, and tile leveling tools. Every product is electro-chemically passivated to ensure lifelong corrosion resistance and sleek aesthetic appeal.
            </p>

            <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <span className="badge-304" style={{ background: 'rgba(200,75,96,0.25)', color: '#fff', border: '1px solid var(--primary-light)' }}>
                <Award size={14} /> Certified AISI 304 Grade
              </span>
              <span className="badge-304" style={{ background: 'rgba(212,175,55,0.25)', color: 'var(--accent-gold)', border: '1px solid var(--accent-gold)' }}>
                <Layers size={14} /> PVD Surface Coated
              </span>
            </div>
          </div>

          <div className="brand-highlights">
            {specs.map((item, idx) => (
              <div key={idx} className="brand-card">
                <div className="icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

