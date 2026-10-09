import React, { useState, useEffect } from 'react';
import { Menu, ArrowRight, Shield } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { isAdminAuthenticated } from '../services/api';

export default function Navbar({ onOpenMobileMenu, activeSection, onSelectCategory }) {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', sectionId: 'hero', path: '/' },
    { label: 'About Us', sectionId: 'why-saco', path: '/#why-saco' },
    { label: 'Products', sectionId: 'catalogue', catId: 'all', path: '/products' },
    { label: 'Quality', sectionId: 'quality', path: '/#quality' },
    { label: 'Contact', sectionId: 'contact', path: '/#contact' },
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      if (item.path === '/products') {
        navigate('/products');
      } else {
        navigate(`/${item.sectionId ? '#' + item.sectionId : ''}`);
      }
      return;
    }

    if (item.catId && onSelectCategory) {
      onSelectCategory(item.catId);
    }
    const targetEl = document.getElementById(item.sectionId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAdminClick = () => {
    if (isAdminAuthenticated()) {
      navigate('/admin');
    } else {
      navigate('/admin/login');
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'visible scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Group */}
        <Link to="/" className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img 
            src="/images/branding/saco-logo.png" 
            alt="SACO Trading Company" 
            className="nav-logo-saco"
            style={{ height: '28px', objectFit: 'contain' }} 
          />
          <span className="nav-logo-divider" style={{ color: 'var(--text-muted)', fontWeight: 300, fontSize: '1.2rem' }}>|</span>
          <img 
            src="/images/branding/clixer-logo.png" 
            alt="CLIXER®" 
            className="nav-logo-clixer"
            style={{ height: '28px', objectFit: 'contain' }} 
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <a 
                href={`#${item.sectionId}`} 
                onClick={(e) => handleNavClick(e, item)}
                className={`nav-link ${activeSection === item.sectionId ? 'active' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={handleAdminClick}
              className="nav-link nav-link-admin-text"
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
            >
              <Shield size={14} />
              <span>Admin</span>
            </button>
          </li>
        </ul>

        {/* Right Action CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Dedicated Admin Portal Button */}
          <button
            type="button"
            onClick={handleAdminClick}
            className="nav-admin-btn"
            title={isAdminAuthenticated() ? 'Open Admin Dashboard' : 'Admin Login'}
            aria-label="Admin Portal"
          >
            <Shield size={14} />
            <span>Admin</span>
          </button>

          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, { sectionId: 'contact' })}
            className="btn btn-primary nav-enquire-btn"
          >
            <span>ENQUIRE NOW</span>
            <ArrowRight size={14} />
          </a>

          <button 
            className="nav-toggle" 
            onClick={onOpenMobileMenu}
            aria-label="Toggle Navigation Menu"
          >
            <Menu size={24} color="var(--text-main)" />
          </button>
        </div>
      </div>
    </header>
  );
}
