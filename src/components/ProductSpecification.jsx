import React from 'react';
import { ShieldCheck, CheckCircle2, Sliders, Droplets, Award, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function ProductSpecification() {
  const specs = [
    {
      icon: <ShieldCheck size={28} />,
      title: "AISI 304 Stainless Steel",
      desc: "Constructed from premium AISI 304 austenitic stainless steel with high chromium-nickel ratio for 100% corrosion resistance in continuous wet environments."
    },
    {
      icon: <Droplets size={28} />,
      title: "High Water Flow Rate",
      desc: "Optimized channel dimensions and linear slot geometries prevent water pooling and ensure rapid drainage for high-pressure rain showers."
    },
    {
      icon: <Sliders size={28} />,
      title: "4 Architectural Finishes",
      desc: "Offered in Hairline Satin, PVD Gold, Rose Gold, and Matt Black PVD coating to match luxury bathroom taps and floor tiles."
    },
    {
      icon: <CheckCircle2 size={28} />,
      title: "Anti-Odor & Insect Trap",
      desc: "Internal stainless steel counterweight trap cups block sewer backflow and prevent cockroaches or insects from entering living areas."
    }
  ];

  return (
    <section className="brand-section">
      <div className="container">
        <div className="brand-grid">
          <div className="brand-content">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <img 
                src="/images/branding/aisi304-badge.png" 
                alt="AISI 304 Certified" 
                style={{ height: '54px', width: 'auto', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.5))' }}
              />
              <div>
                <span style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>
                  Material & Engineering Standard
                </span>
                <h3 style={{ color: '#fff', fontSize: '1.1rem', margin: 0 }}>Austenitic Stainless Steel</h3>
              </div>
            </div>

            <h2>Why Choose CLIXER® AISI 304 Sanitary Systems</h2>
            
            <p>
              CLIXER by <strong>{COMPANY_INFO.marketedBy}</strong> sets the industry standard in architectural channel drainers, designer square grates, and professional tile leveling accessories. Every piece undergoes rigorous electrochemical polishing for supreme surface finish.
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <span className="badge-304" style={{ background: 'rgba(200,75,96,0.25)', color: '#fff', border: '1px solid var(--primary-light)' }}>
                <Award size={15} /> Certified AISI 304 Grade
              </span>
              <span className="badge-304" style={{ background: 'rgba(212,175,55,0.25)', color: 'var(--accent-gold)', border: '1px solid var(--accent-gold)' }}>
                <Layers size={15} /> PVD Surface Coated
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

