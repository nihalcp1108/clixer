import React, { useState, useEffect } from 'react';
import { Menu, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenMobileMenu, activeSection, onSelectCategory }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', sectionId: 'hero' },
    { label: 'About Us', sectionId: 'why-saco' },
    { label: 'Products', sectionId: 'catalogue', catId: 'all' },
    { label: 'Quality', sectionId: 'quality' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    if (item.catId && onSelectCategory) {
      onSelectCategory(item.catId);
    } else {
      const targetEl = document.getElementById(item.sectionId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'visible scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Group */}
        <a href="#hero" className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img 
            src="/images/branding/saco-logo.png" 
            alt="SACO Trading Company" 
            className="nav-logo-saco"
            style={{ height: '28px', objectFit: 'contain' }} 
          />
          <span className="nav-logo-divider" style={{ color: 'var(--text-muted)', fontWeight: 300, fontSize: '1.2rem' }}>|</span>
          <img 
            src="/images/branding/clixer-logo.png" 
            alt="CLIXER®" 
            className="nav-logo-clixer"
            style={{ height: '28px', objectFit: 'contain' }} 
          />
        </a>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <a 
                href={`#${item.sectionId}`} 
                onClick={(e) => handleNavClick(e, item)}
                className={`nav-link ${activeSection === item.sectionId ? 'active' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Action CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, { sectionId: 'contact' })}
            className="btn btn-primary nav-enquire-btn"
          >
            <span>ENQUIRE NOW</span>
            <ArrowRight size={14} />
          </a>

          <button 
            className="nav-toggle" 
            onClick={onOpenMobileMenu}
            aria-label="Toggle Navigation Menu"
          >
            <Menu size={24} color="var(--text-main)" />
          </button>
        </div>
      </div>
    </header>
  );
}
