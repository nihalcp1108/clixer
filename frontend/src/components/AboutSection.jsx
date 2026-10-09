import React from 'react';
import { ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function AboutSection() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="b2b-about-section">
      <div className="container">
        <div className="b2b-about-grid">
          {/* Left: High-Quality Product/Stainless Steel Image Frame */}
          <div className="b2b-about-image-col">
            <div className="b2b-image-frame">
              <img 
                src="/images/products/hero-drainers.png" 
                alt="SACO Trading Premium Stainless Steel Channel Drainers" 
                className="b2b-about-img"
              />
              <div className="b2b-image-badge">
                <ShieldCheck size={20} className="badge-icon" />
                <div>
                  <strong>AISI 304 Standard</strong>
                  <span>100% Austenitic Steel</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content Column */}
          <div className="b2b-about-content-col">
            <span className="section-eyebrow">ABOUT SACO TRADING COMPANY</span>
            <h2 className="b2b-about-heading">
              A TRUSTED PARTNER FOR QUALITY STAINLESS-STEEL SOLUTIONS
            </h2>

            <p className="b2b-about-lead">
              SACO Trading Company specializes in sourcing and supplying quality stainless-steel products and architectural solutions for modern construction and interior applications.
            </p>

            <p className="b2b-about-body">
              Our focus is simple — deliver dependable products, maintain consistent quality and build long-term relationships with customers, architects, contractors and business partners. Marketed exclusively under the registered <strong>{COMPANY_INFO.brand}</strong> trademark.
            </p>

            <ul className="b2b-about-list">
              <li><Check size={16} className="check-icon" /> High-grade AISI 304 corrosion-resistant stainless steel</li>
              <li><Check size={16} className="check-icon" /> Precision linear slots and PVD color surface treatments</li>
              <li><Check size={16} className="check-icon" /> Anti-odor & anti-cockroach gravity trap engineering</li>
            </ul>

            <div className="b2b-about-actions">
              <a 
                href="#quality" 
                onClick={(e) => handleNavClick(e, 'quality')}
                className="btn btn-primary"
              >
                <span>LEARN MORE ABOUT OUR QUALITY</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
