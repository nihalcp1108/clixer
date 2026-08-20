import React from 'react';
import { X, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function MobileMenu({ isOpen, onClose, onSelectCategory }) {
  const navItems = [
    { label: 'Home', sectionId: 'hero', catId: null },
    { label: 'Products', sectionId: 'catalogue', catId: 'all' },
    { label: 'Contact', sectionId: 'contact', catId: null },
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
          <img src="/images/branding/clixer-logo.png" alt="CLIXER®" style={{ height: '32px' }} />
          <button onClick={onClose} aria-label="Close menu">
            <X size={24} />
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
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem', fontWeight: '700' }}>
            SACO TRADING COMPANY
          </p>
          <a href={`tel:${COMPANY_INFO.phone}`} className="btn btn-primary" style={{ width: '100%', marginBottom: '0.5rem' }}>
            <Phone size={16} /> Call Customer Care
          </a>
          <a 
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20CLIXER,%20I%20am%20interested%20in%20your%20products`} 
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

