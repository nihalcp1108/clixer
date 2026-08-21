import React from 'react';

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
    <section id="hero" className="minimal-hero-section">
      <div className="container">
        <div className="minimal-hero-content">
          {/* Small Label */}
          <span className="minimal-hero-label">SACO TRADING COMPANY</span>

          {/* Main Heading */}
          <h1 className="minimal-hero-heading">Premium Stainless Steel Solutions</h1>

          {/* Short Description */}
          <p className="minimal-hero-desc">
            Exclusively marketing Clixer® AISI 304 drainage and tiling hardware across India.
          </p>

          {/* Buttons */}
          <div className="minimal-hero-buttons">
            <a 
              href="#catalogue" 
              onClick={(e) => handleNavClick(e, 'catalogue')} 
              className="btn-minimal-primary"
            >
              EXPLORE PRODUCTS
            </a>

            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')} 
              className="btn-minimal-secondary"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
