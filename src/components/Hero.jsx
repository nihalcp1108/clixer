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
    <section id="hero" className="b2b-hero-section">
      {/* Background Image Container */}
      <picture className="b2b-hero-picture">
        <source media="(max-width: 768px)" srcSet="/images/branding/hero-poster-bg.png" />
        <img 
          src="/images/branding/hero-widescreen-bg.png" 
          alt="SACO Trading Company Premium Stainless Steel Solutions" 
          className="b2b-hero-img"
        />
      </picture>

      {/* Dark Subtle Gradient Overlay */}
      <div className="b2b-hero-overlay" />

      {/* Hero Content Layer */}
      <div className="b2b-hero-content">
        <div className="container">
          <div className="b2b-hero-card">
            {/* Small Eyebrow */}
            <span className="b2b-hero-eyebrow">
              PREMIUM STAINLESS STEEL SOLUTIONS
            </span>

            {/* Main Headline */}
            <h1 className="b2b-hero-heading">
              ENGINEERED FOR QUALITY.<br />
              <span className="b2b-heading-accent">BUILT FOR LASTING PERFORMANCE.</span>
            </h1>

            {/* Supporting Text */}
            <p className="b2b-hero-subtitle">
              SACO Trading Company delivers premium stainless-steel products and architectural solutions designed for durability, precision and modern applications. Exclusively marketing <strong>{COMPANY_INFO.brand}</strong> AISI 304 drainage and tiling hardware across India.
            </p>

            {/* CTA Buttons */}
            <div className="b2b-hero-actions">
              <a 
                href="#catalogue" 
                onClick={(e) => handleNavClick(e, 'catalogue')} 
                className="btn btn-hero-primary"
              >
                <span>EXPLORE OUR PRODUCTS</span>
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
        className="b2b-scroll-indicator" 
        aria-label="Scroll to content"
      >
        <span className="scroll-text">DISCOVER MORE</span>
        <ChevronDown size={20} className="scroll-arrow" />
      </a>
    </section>
  );
}
