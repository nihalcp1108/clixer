import React from 'react';
import { MapPin, Phone, Mail, MessageSquare, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function ContactSection() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
    "Hello SACO Trading Company, I am interested in CLIXER Stainless Steel Channel Drainers and Products."
  )}`;

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column: Contact Details */}
          <div className="contact-info-col">
            <span style={{ color: 'var(--primary-light)', fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>
              Exclusive Partner: {COMPANY_INFO.marketedBy}
            </span>
            <h2>Direct Sales & Project Inquiries</h2>
            <p>
              Inquire about product availability, wholesale dealer pricing, architectural project specs, or custom channel lengths directly with our sales team.
            </p>

            <div className="contact-details-list">
              <div className="contact-item">
                <div className="icon">
                  <MapPin size={22} />
                </div>
                <div className="text">
                  <h4>Head Office & Warehouse</h4>
                  <p>{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon">
                  <Phone size={22} />
                </div>
                <div className="text">
                  <h4>Customer Care Hotline</h4>
                  <p>
                    <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: '#fff', fontWeight: 600 }}>
                      {COMPANY_INFO.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon">
                  <Mail size={22} />
                </div>
                <div className="text">
                  <h4>Email Support</h4>
                  <p>
                    <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: '#fff', fontWeight: 600 }}>
                      {COMPANY_INFO.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-actions">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <MessageSquare size={18} /> WhatsApp Inquiry
              </a>
              <a href={`tel:${COMPANY_INFO.phone}`} className="btn btn-secondary" style={{ background: 'transparent', color: '#fff', borderColor: 'var(--dark-border)' }}>
                <Phone size={18} /> Call Customer Care
              </a>
            </div>
          </div>

          {/* Right Column: SACO Company Branding Box */}
          <div className="contact-card-box">
            <img 
              src="/images/branding/clixer-logo.png" 
              alt="CLIXER®" 
              className="brand-logo" 
              style={{ filter: 'brightness(0) invert(1)', height: '48px', objectFit: 'contain', marginBottom: '1rem' }} 
            />
            <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.5rem' }}>{COMPANY_INFO.marketedBy}</h3>
            <span className="badge-304" style={{ background: 'rgba(212,175,55,0.15)', color: 'var(--accent-gold)', border: '1px solid var(--accent-gold)', marginBottom: '1.5rem' }}>
              <ShieldCheck size={14} /> AISI 304 Certified Distributor
            </span>

            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Specializing in high-performance stainless steel linear channel drainers, designer floor grates, anti-odor traps, and tile installation accessories across India.
            </p>

            <img 
              src="/images/branding/saco-logo.png" 
              alt="SACO TRADING" 
              style={{ height: '44px', margin: '0 auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
