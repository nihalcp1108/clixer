import React, { useEffect } from 'react';
import { X, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function MobileMenu({ isOpen, onClose, onSelectCategory }) {
  // Prevent body scrolling when mobile menu drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { label: 'Home', sectionId: 'hero' },
    { label: 'About Us', sectionId: 'who-we-are' },
    { label: 'Products', sectionId: 'catalogue', catId: 'all' },
    { label: 'Quality Standards', sectionId: 'quality' },
    { label: 'Contact Us', sectionId: 'contact' },
  ];

  const handleMobileNavClick = (e, item) => {
    e.preventDefault();
    onClose();
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
    <>
      <div className={`mobile-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src="/images/branding/saco-logo.png" alt="SACO Trading" style={{ height: '22px', objectFit: 'contain' }} />
            <span style={{ color: 'var(--text-muted)' }}>|</span>
            <img src="/images/branding/clixer-logo.png" alt="CLIXER®" style={{ height: '22px', objectFit: 'contain' }} />
          </div>
          <button onClick={onClose} aria-label="Close menu" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem' }}>
            <X size={24} color="var(--text-main)" />
          </button>
        </div>

        <ul className="mobile-menu-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <a 
                href={`#${item.sectionId}`} 
                className="mobile-menu-link" 
                onClick={(e) => handleMobileNavClick(e, item)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--light-border)' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.75rem', fontWeight: '700', letterSpacing: '1px' }}>
            SACO TRADING COMPANY
          </p>
          <a href="#contact" onClick={(e) => handleMobileNavClick(e, { sectionId: 'contact' })} className="btn btn-primary" style={{ width: '100%', marginBottom: '0.5rem' }}>
            <span>ENQUIRE NOW</span> <ArrowRight size={16} />
          </a>
          <a 
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20SACO%20Trading,%20I%20have%20a%20B2B%20inquiry.`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary" 
            style={{ width: '100%' }}
          >
            <MessageSquare size={16} /> WhatsApp Inquiry
          </a>
        </div>
      </div>
    </>
  );
}
