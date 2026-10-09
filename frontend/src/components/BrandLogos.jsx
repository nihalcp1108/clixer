import React from 'react';
import { ShieldCheck, Award, Layers, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function BrandLogos() {
  const brands = [
    {
      name: COMPANY_INFO.brand,
      subtitle: "Sanitary Systems",
      logo: "/images/branding/clixer-logo-lg.png",
      tag: "Registered Brand",
      badge: <Award size={14} />
    },
    {
      name: "AISI 304 Certified",
      subtitle: "Stainless Steel Standard",
      logo: "/images/branding/aisi304-badge-lg.png",
      tag: "100% Rust-Proof",
      badge: <ShieldCheck size={14} />
    },
    {
      name: COMPANY_INFO.marketedBy,
      subtitle: "Exclusive Marketing Partner",
      logo: "/images/branding/saco-logo.png",
      tag: "Verified Distributor",
      badge: <Sparkles size={14} />
    },
    {
      name: "PVD Finish Tech",
      subtitle: "Physical Vapor Deposition",
      logo: "/images/branding/clixer-logo.png",
      tag: "4 Architectural Colors",
      badge: <Layers size={14} />
    }
  ];

  return (
    <section className="brand-logos-section">
      <div className="container">
        <div className="brand-logos-header">
          <span className="sub-badge">Certified Standards & Partnerships</span>
          <h2 className="brand-logos-title">Trusted Quality & Manufacturing Standards</h2>
        </div>

        <div className="brand-logos-grid">
          {brands.map((item, idx) => (
            <div key={idx} className="logo-showcase-card">
              <div className="logo-img-wrapper">
                <img 
                  src={item.logo} 
                  alt={item.name} 
                  className="showcase-logo-img"
                  loading="lazy" 
                />
              </div>
              <div className="logo-card-info">
                <span className="logo-tag-badge">
                  {item.badge} {item.tag}
                </span>
                <h4 className="logo-brand-name">{item.name}</h4>
                <p className="logo-brand-sub">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
