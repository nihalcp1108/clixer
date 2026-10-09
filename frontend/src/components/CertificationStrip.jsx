import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Zap, Layers } from 'lucide-react';

export default function CertificationStrip() {
  const items = [
    { title: "AISI 304 Certified", icon: <ShieldCheck size={18} /> },
    { title: "Premium Quality Steel", icon: <Award size={18} /> },
    { title: "Durable Materials", icon: <Layers size={18} /> },
    { title: "Precision Manufacturing", icon: <Zap size={18} /> },
    { title: "Reliable Performance", icon: <CheckCircle2 size={18} /> }
  ];

  // Quadruple items to ensure seamless infinite loop animation without empty gaps
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className="cert-strip-banner">
      <div className="cert-marquee-track">
        {marqueeItems.map((item, index) => (
          <React.Fragment key={index}>
            <div className="cert-strip-item">
              <span className="cert-icon">{item.icon}</span>
              <span className="cert-text">{item.title}</span>
            </div>
            <span className="cert-divider">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
