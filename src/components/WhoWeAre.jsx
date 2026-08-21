import React from 'react';
import { Shield, CheckCircle, Award } from 'lucide-react';

export default function WhoWeAre() {
  const trustIndicators = [
    {
      num: "01",
      title: "Premium Materials",
      desc: "Authentic austenitic AISI 304 stainless steel engineered for lifelong corrosion resistance.",
      icon: <Shield size={24} />
    },
    {
      num: "02",
      title: "Reliable Quality",
      desc: "Strict quality assurance, electrochemical passivation, and international manufacturing standards.",
      icon: <CheckCircle size={24} />
    },
    {
      num: "03",
      title: "Professional Service",
      desc: "Dedicated B2B sales support, wholesale fulfillment, and architectural specification advice.",
      icon: <Award size={24} />
    }
  ];

  return (
    <section id="who-we-are" className="who-we-are-section">
      <div className="container">
        <div className="who-we-are-header">
          <span className="section-eyebrow">WHO WE ARE</span>
          <h2 className="section-title-large">PRECISION. QUALITY. TRUST.</h2>
          <p className="who-we-are-lead">
            SACO Trading Company is committed to supplying premium stainless-steel and architectural solutions that combine reliable performance, refined design and long-lasting durability.
          </p>
          <p className="who-we-are-text">
            We work with quality-focused products designed to meet the demands of modern residential, commercial and architectural environments across India.
          </p>
        </div>

        {/* 3 Numbered Trust Indicators */}
        <div className="trust-grid">
          {trustIndicators.map((item) => (
            <div key={item.num} className="trust-card">
              <div className="trust-card-header">
                <span className="trust-num">{item.num}</span>
                <div className="trust-icon-box">{item.icon}</div>
              </div>
              <h3 className="trust-title">{item.title}</h3>
              <p className="trust-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
