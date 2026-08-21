import React from 'react';
import { ShieldCheck, Layers, Award } from 'lucide-react';

export default function QualitySection() {
  const qualityPoints = [
    {
      title: "CORROSION RESISTANT",
      desc: "High chromium-nickel alloy content guarantees lifelong immunity to rust, oxidation, and humidity in wet bathroom environments.",
      icon: <ShieldCheck size={28} />
    },
    {
      title: "DURABLE CONSTRUCTION",
      desc: "Heavy-gauge austenitic steel plate construction designed for high load bearing and heavy daily architectural usage.",
      icon: <Award size={28} />
    },
    {
      title: "PREMIUM FINISH",
      desc: "Electro-chemically passivated hairline satin, PVD Gold, Rose Gold, and Matt Black PVD color coatings that never tarnish.",
      icon: <Layers size={28} />
    }
  ];

  return (
    <section id="quality" className="b2b-quality-section">
      <div className="container">
        <div className="b2b-quality-grid">
          {/* Left Column: Heading & Content */}
          <div className="b2b-quality-content">
            <span className="section-eyebrow accent-gold">QUALITY ASSURANCE</span>
            <h2 className="b2b-quality-title">QUALITY THAT SPEAKS FOR ITSELF</h2>
            
            <div className="b2b-quality-highlight-badge">
              <ShieldCheck size={20} className="gold-icon" />
              <span>AISI 304 STAINLESS STEEL STANDARD</span>
            </div>

            <p className="b2b-quality-lead">
              Our products are selected with a strong focus on material quality, durability, corrosion resistance and consistent performance across residential and commercial applications.
            </p>

            <div className="quality-points-grid">
              {qualityPoints.map((item, index) => (
                <div key={index} className="quality-point-card">
                  <div className="quality-point-icon">{item.icon}</div>
                  <div>
                    <h3 className="quality-point-title">{item.title}</h3>
                    <p className="quality-point-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Large AISI 304 Certified Emblem Showcase */}
          <div className="b2b-quality-badge-col">
            <div className="b2b-badge-showcase-frame">
              <img 
                src="/images/branding/aisi304-badge-lg.png" 
                alt="AISI 304 Certified Quality Badge" 
                className="b2b-large-badge-img"
              />
              <div className="b2b-badge-text-box">
                <strong>100% Rust-Proof Austenitic Steel</strong>
                <span>Certified Sanitary Standard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
