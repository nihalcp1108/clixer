import React from 'react';

export default function ApplicationsSection() {
  const applications = [
    {
      title: "Residential Bathrooms",
      category: "Wetrooms & Walk-in Showers",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Luxury Hotels & Resorts",
      category: "Hospitality & Spa Suites",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Restaurants & Commercial Kitchens",
      category: "High-Flow Drainage Solutions",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Commercial Buildings",
      category: "Public Restrooms & Corridors",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Corporate Offices",
      category: "Modern Executive Restrooms",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Architectural Projects",
      category: "Custom Drain & Tiling Installs",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="applications" className="applications-section">
      <div className="container">
        <div className="applications-header">
          <span className="section-eyebrow">VERSATILE USAGE</span>
          <h2 className="section-title-large">DESIGNED FOR MODERN SPACES</h2>
          <p className="section-lead">
            Explore how CLIXER® AISI 304 stainless-steel drainage and tiling hardware integrate into diverse architectural environments.
          </p>
        </div>

        <div className="applications-grid">
          {applications.map((item, index) => (
            <div key={index} className="app-card">
              <img src={item.image} alt={item.title} className="app-card-img" loading="lazy" />
              <div className="app-card-overlay">
                <span className="app-category">{item.category}</span>
                <h3 className="app-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
