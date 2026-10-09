import React from 'react';

export default function SectionTitle({ badge, title, description, center = true }) {
  return (
    <div className="section-header" style={{ textAlign: center ? 'center' : 'left' }}>
      {badge && <span className="sub-badge">{badge}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
