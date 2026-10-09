import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, CATEGORIES } from '../data/products';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productRequirement: 'channel-drainers',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Format WhatsApp message as backup submission
    const text = encodeURIComponent(
      `B2B Inquiry for SACO Trading Company:\nName: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nRequirement: ${formData.productRequirement}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="b2b-contact-section">
      <div className="container">
        <div className="b2b-contact-header">
          <span className="section-eyebrow">GET IN TOUCH</span>
          <h2 className="section-title-large">LET'S BUILD SOMETHING BETTER</h2>
          <p className="section-lead">
            Contact SACO Trading Company to discuss product specifications, bulk orders, wholesale dealership, or custom architectural requirements.
          </p>
        </div>

        <div className="b2b-contact-grid">
          {/* Left Column: Company Info Card */}
          <div className="b2b-contact-info">
            <div className="b2b-info-header">
              <img src="/images/branding/saco-logo.png" alt="SACO Trading Company" style={{ height: '36px', filter: 'brightness(0) invert(1)' }} />
              <span className="b2b-badge-304">
                <ShieldCheck size={14} /> Certified Distributor
              </span>
            </div>

            <h3 className="info-company-name">{COMPANY_INFO.marketedBy}</h3>
            <p className="info-company-desc">
              Supplying premium stainless-steel products and architectural solutions engineered for modern construction across India.
            </p>

            <div className="b2b-info-list">
              <div className="info-item">
                <div className="info-icon"><MapPin size={20} /></div>
                <div>
                  <strong>Head Office & Warehouse</strong>
                  <p>{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><Phone size={20} /></div>
                <div>
                  <strong>Phone / Inquiry Hotline</strong>
                  <p><a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><Mail size={20} /></div>
                <div>
                  <strong>Email Support</strong>
                  <p><a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><Clock size={20} /></div>
                <div>
                  <strong>Business Hours</strong>
                  <p>Mon - Sat: 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: B2B Contact Form */}
          <div className="b2b-contact-form-card">
            <h3 className="form-card-title">Send a Business Enquiry</h3>
            
            {submitted ? (
              <div className="form-success-alert">
                <CheckCircle2 size={36} className="success-icon" />
                <h4>Enquiry Submitted Successfully!</h4>
                <p>Thank you for reaching out to SACO Trading Company. Our sales engineering team will review your requirement and contact you shortly.</p>
                <button className="btn btn-secondary" onClick={() => setSubmitted(false)} style={{ marginTop: '1rem' }}>
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="b2b-form">
                <div className="form-row-2">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Company / Firm Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Apex Builders Ltd."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Product / Requirement Category</label>
                  <select 
                    value={formData.productRequirement}
                    onChange={(e) => setFormData({ ...formData, productRequirement: e.target.value })}
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.label}
                      </option>
                    ))}
                    <option value="custom-solution">Custom Length / OEM Specification</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Enquiry Details / Message *</label>
                  <textarea 
                    rows={4} 
                    required 
                    placeholder="Specify target quantities, lengths, project location or general inquiries..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn">
                  <span>SEND ENQUIRY</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
