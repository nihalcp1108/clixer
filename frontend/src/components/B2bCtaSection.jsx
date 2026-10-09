import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function B2bCtaSection() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="b2b-cta-section">
      <div className="container">
        <div className="b2b-cta-card">
          <span className="section-eyebrow accent-gold">B2B & TRADE INQUIRIES</span>
          <h2 className="b2b-cta-heading">
            LOOKING FOR RELIABLE STAINLESS-STEEL SOLUTIONS?
          </h2>
          <p className="b2b-cta-lead">
            Talk to our team about product availability, architectural specifications, bulk wholesale requirements and business enquiries.
          </p>

          <div className="b2b-cta-buttons">
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')} 
              className="btn btn-hero-primary"
            >
              <span>SEND AN ENQUIRY</span>
              <ArrowRight size={16} />
            </a>

            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="btn btn-hero-outline"
            >
              <Phone size={16} />
              <span>CALL OUR TEAM ({COMPANY_INFO.phone})</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
