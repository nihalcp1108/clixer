import React, { useState, useEffect } from 'react';
import { Menu, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

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
    { label: 'Home', sectionId: 'hero', catId: null },
    { label: 'Products', sectionId: 'catalogue', catId: 'all' },
    { label: 'Contact', sectionId: 'contact', catId: null },
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
      <div className="container">
        <a href="#hero" className="nav-brand">
          <img src="/images/branding/clixer-logo.png" alt="CLIXER®" className="logo" />
        </a>

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

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a 
            href={`tel:${COMPANY_INFO.phone}`} 
            className="btn nav-phone-btn"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
          >
            <Phone size={15} />
            <span>{COMPANY_INFO.phone}</span>
          </a>

          <button 
            className="nav-toggle" 
            onClick={onOpenMobileMenu}
            aria-label="Toggle Navigation Menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>
    </header>
  );
}

