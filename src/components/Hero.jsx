import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function Hero({ onExplore }) {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (sectionId === 'catalogue' && onExplore) {
      onExplore();
    } else {
      const targetEl = document.getElementById(sectionId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="hero" className="fullscreen-hero-section">
      {/* Fullscreen Background Image */}
      <picture className="fullscreen-hero-picture">
        <source media="(max-width: 768px)" srcSet="/images/branding/hero-poster-bg.png" />
        <img 
          src="/images/branding/hero-widescreen-bg.png" 
          alt="SACO Trading Company Premium Stainless Steel Solutions" 
          className="fullscreen-hero-img"
        />
      </picture>

      {/* Dark Subtle Gradient Overlay for Superior Text Legibility */}
      <div className="fullscreen-hero-overlay" />

      {/* Hero Content Container */}
      <div className="fullscreen-hero-content">
        <div className="container">
          <div className="fullscreen-hero-card">
            {/* Small Label */}
            <span className="hero-brand-eyebrow">
              SACO TRADING COMPANY
            </span>

            {/* Main Headline */}
            <h1 className="fullscreen-hero-heading">
              ENGINEERED FOR QUALITY.<br />
              <span className="heading-highlight">BUILT FOR LASTING PERFORMANCE.</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="fullscreen-hero-subtitle">
              Exclusively marketing <strong>{COMPANY_INFO.brand}</strong> AISI 304 stainless steel linear channel drainers, designer floor grates, anti-odor cockroach traps, and tile installation accessories across India.
            </p>

            {/* Action Buttons */}
            <div className="fullscreen-hero-actions">
              <a 
                href="#catalogue" 
                onClick={(e) => handleNavClick(e, 'catalogue')} 
                className="btn btn-hero-primary"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight size={16} />
              </a>

              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')} 
                className="btn btn-hero-outline"
              >
                <span>CONTACT US</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#who-we-are" 
        onClick={(e) => handleNavClick(e, 'who-we-are')} 
        className="fullscreen-scroll-indicator" 
        aria-label="Scroll down to content"
      >
        <span className="scroll-label">DISCOVER MORE</span>
        <ChevronDown size={20} className="bounce-arrow" />
      </a>
    </section>
  );
}
