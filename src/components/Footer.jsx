import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function Footer({ onSelectCategory }) {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCatClick = (e, catId) => {
    e.preventDefault();
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
  };

  return (
    <footer className="b2b-footer">
      <div className="b2b-footer-top-border" />
      <div className="container">
        <div className="b2b-footer-grid">
          {/* Col 1: Brand Info */}
          <div className="b2b-footer-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img 
                src="/images/branding/saco-logo.png" 
                alt="SACO Trading Company" 
                style={{ height: '34px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} 
              />
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
              <img 
                src="/images/branding/clixer-logo.png" 
                alt="CLIXER®" 
                style={{ height: '24px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} 
              />
            </div>
            
            <p className="b2b-footer-desc">
              Premium stainless-steel products and architectural solutions focused on quality, durability and reliable performance. Exclusively marketed across India by <strong>{COMPANY_INFO.marketedBy}</strong>.
            </p>
          </div>

          {/* Col 2: COMPANY Links */}
          <div className="b2b-footer-col">
            <h4 className="footer-col-title">COMPANY</h4>
            <ul className="footer-links-list">
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a></li>
              <li><a href="#quality" onClick={(e) => handleNavClick(e, 'quality')}>Quality Standards</a></li>
              <li><a href="#applications" onClick={(e) => handleNavClick(e, 'applications')}>Applications</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: PRODUCTS Links */}
          <div className="b2b-footer-col">
            <h4 className="footer-col-title">PRODUCTS</h4>
            <ul className="footer-links-list">
              <li><a href="#catalogue" onClick={(e) => handleCatClick(e, 'channel-drainers')}>Linear Drainers</a></li>
              <li><a href="#catalogue" onClick={(e) => handleCatClick(e, 'designer-drainers')}>Designer Drainers</a></li>
              <li><a href="#catalogue" onClick={(e) => handleCatClick(e, 'floor-drainers')}>Floor Drains</a></li>
              <li><a href="#catalogue" onClick={(e) => handleCatClick(e, 'cockroach-bowl')}>Anti-Odor Trap Bowl</a></li>
              <li><a href="#catalogue" onClick={(e) => handleCatClick(e, 'tile-leveling')}>Tile Accessories</a></li>
            </ul>
          </div>

          {/* Col 4: CONTACT Info */}
          <div className="b2b-footer-col">
            <h4 className="footer-col-title">CONTACT</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={16} className="contact-icon" />
                <span>Malappuram, Kerala, Pin: 676311</span>
              </li>
              <li>
                <Phone size={16} className="contact-icon" />
                <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>
              </li>
              <li>
                <Mail size={16} className="contact-icon" />
                <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="b2b-footer-bottom">
          <p>© 2026 SACO Trading Company. All Rights Reserved.</p>
          
          <div className="footer-legal-links">
            <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <span>•</span>
            <a href="#terms" onClick={(e) => e.preventDefault()}>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
