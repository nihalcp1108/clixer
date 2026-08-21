import React from 'react';
import { Shield, Truck, Sparkles, Users, Building, CheckCircle2 } from 'lucide-react';

export default function WhyChooseSaco() {
  const features = [
    {
      num: "01",
      title: "QUALITY FIRST",
      desc: "Carefully selected products focused on durability, precision engineering and long-lasting performance.",
      icon: <Shield size={22} />
    },
    {
      num: "02",
      title: "RELIABLE SOURCING",
      desc: "Consistent sourcing and dependable supply solutions to fulfill project timelines effortlessly.",
      icon: <Truck size={22} />
    },
    {
      num: "03",
      title: "PREMIUM FINISH",
      desc: "Products designed to deliver both optimal drainage functionality and refined architectural aesthetics.",
      icon: <Sparkles size={22} />
    },
    {
      num: "04",
      title: "CUSTOMER FOCUSED",
      desc: "Professional B2B support built around building and maintaining long-term business relationships.",
      icon: <Users size={22} />
    },
    {
      num: "05",
      title: "INDUSTRY EXPERIENCE",
      desc: "Deep understanding of modern architectural, residential, and commercial construction requirements.",
      icon: <Building size={22} />
    },
    {
      num: "06",
      title: "DEPENDABLE SERVICE",
      desc: "From product selection to order fulfillment, we focus on delivering a smooth and reliable experience.",
      icon: <CheckCircle2 size={22} />
    }
  ];

  return (
    <section className="why-saco-section">
      <div className="container">
        <div className="why-saco-header">
          <span className="section-eyebrow">OUR ADVANTAGE</span>
          <h2 className="section-title-large">WHY CHOOSE SACO?</h2>
          <p className="section-lead">
            Partner with SACO Trading Company for dependable stainless-steel solutions backed by quality products and dedicated B2B service.
          </p>
        </div>

        <div className="why-saco-grid">
          {features.map((item) => (
            <div key={item.num} className="why-card">
              <div className="why-card-top">
                <span className="why-num">{item.num}</span>
                <div className="why-icon-box">{item.icon}</div>
              </div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
