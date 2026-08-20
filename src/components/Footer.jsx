import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function Footer({ onSelectCategory }) {
  const handleCatClick = (e, catId) => {
    e.preventDefault();
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand Info */}
          <div>
            <img src="/images/branding/clixer-logo.png" alt="CLIXER®" style={{ height: '38px', marginBottom: '1rem', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: 1.6, marginBottom: '1rem' }}>
              "{COMPANY_INFO.tagline}"
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Marketed by <strong>{COMPANY_INFO.marketedBy}</strong>. Premium AISI 304 Stainless Steel Channel Drainers and Sanitary Floor Accessories.
            </p>
          </div>

          {/* Col 2: Categories */}
          <div>
            <h4>Product Categories</h4>
            <ul className="footer-links">
              <li><a href="#catalogue" onClick={(e) => handleCatClick(e, 'channel-drainers')}>Channel Drainers</a></li>
              <li><a href="#catalogue" onClick={(e) => handleCatClick(e, 'designer-drainers')}>Designer Drainers</a></li>
              <li><a href="#catalogue" onClick={(e) => handleCatClick(e, 'floor-drainers')}>Floor Drainers</a></li>
              <li><a href="#catalogue" onClick={(e) => handleCatClick(e, 'cockroach-bowl')}>Cockroach Trap Bowl</a></li>
              <li><a href="#catalogue" onClick={(e) => handleCatClick(e, 'tile-leveling')}>Tile Leveling Jack</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4>Quick Navigation</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home Cover</a></li>
              <li><a href="#brands">Brand Partnerships</a></li>
              <li><a href="#specification">Material Specs</a></li>
              <li><a href="#catalogue">Full Catalogue</a></li>
              <li><a href="#contact">Contact & Inquiries</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4>Contact Info</h4>
            <ul className="footer-links">
              <li style={{ display: 'flex', gap: '0.5rem' }}>
                <MapPin size={16} color="var(--primary)" />
                <span>Malappuram, Kerala, Pin: 676311</span>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem' }}>
                <Phone size={16} color="var(--primary)" />
                <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem' }}>
                <Mail size={16} color="var(--primary)" />
                <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 SACO Trading Company — CLIXER®. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Certified AISI 304 Stainless Steel
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

