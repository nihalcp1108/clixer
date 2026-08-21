import React from 'react';
import { Sparkles, ArrowRight, MessageCircle, CheckCircle2, Droplets, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function Hero({ onExplore }) {
  return (
    <section id="hero" className="hero-section-full">
      {/* Background Image Container */}
      <picture className="hero-picture">
        <source media="(max-width: 768px)" srcSet="/images/branding/hero-poster-bg.png" />
        <img 
          src="/images/branding/hero-widescreen-bg.png" 
          alt="CLIXER® AISI 304 Channel Drainers & Sanitary Systems" 
          className="hero-img-full"
        />
      </picture>

      {/* Floating Hero Content Overlay Card */}
      <div className="hero-overlay-content">
        <div className="container">
          <div className="hero-card-glass">
            {/* Tagline Badge */}
            <div className="hero-badge">
              <Sparkles size={14} className="sparkle-icon" />
              <span>AISI 304 Stainless Steel • Architectural Sanitary Systems</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              <span className="hero-phrase">Great outlook for your floor.</span>
              <span className="hero-highlight">Architectural Linear Channel Drainers</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              Precision-engineered heavy-duty <strong>AISI 304 Stainless Steel</strong> linear channels, designer floor grates, anti-odor cockroach traps, and tile leveling systems. Exclusively marketed across India by <strong>{COMPANY_INFO.marketedBy}</strong>.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a href="#catalogue" onClick={onExplore} className="btn btn-hero-primary">
                Explore Catalogue <ArrowRight size={16} />
              </a>
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi,%20I%20am%20interested%20in%20Clixer%20Channel%20Drainers%20(AISI%20304).`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-hero-whatsapp"
              >
                <MessageCircle size={16} /> Get WhatsApp Quote
              </a>
            </div>

            {/* Key Spec Highlights */}
            <div className="hero-specs">
              <div className="hero-spec-item">
                <ShieldCheck size={15} className="spec-icon" />
                <span>100% Rust-Proof 304</span>
              </div>
              <div className="hero-spec-item">
                <Droplets size={15} className="spec-icon" />
                <span>High Evacuation Flow</span>
              </div>
              <div className="hero-spec-item">
                <CheckCircle2 size={15} className="spec-icon" />
                <span>Anti-Odor Gravity Trap</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



