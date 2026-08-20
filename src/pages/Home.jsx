import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import MobileMenu from '../components/MobileMenu';
import Hero from '../components/Hero';
import BrandLogos from '../components/BrandLogos';
import ProductSpecification from '../components/ProductSpecification';
import ProductGrid from '../components/ProductGrid';
import ImageGallery from '../components/ImageGallery';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ProductModal from '../components/ProductModal';
import ScrollToTop from '../components/ScrollToTop';
import SectionTitle from '../components/SectionTitle';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'brands', 'specification', 'catalogue', 'gallery', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectCategoryFromNav = (catId) => {
    setActiveCategory(catId);
    const catalogueEl = document.getElementById('catalogue');
    if (catalogueEl) {
      catalogueEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-layout">
      {/* 1. NAVIGATION HEADER */}
      <Navbar 
        onOpenMobileMenu={() => setMobileMenuOpen(true)} 
        activeSection={activeSection} 
        onSelectCategory={handleSelectCategoryFromNav}
      />

      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        onSelectCategory={handleSelectCategoryFromNav}
      />

      {/* MAIN PAGE FLOW */}
      <main>
        {/* 2. HERO / FRONT PAGE IMAGE SECTION */}
        <Hero onExplore={() => handleSelectCategoryFromNav('all')} />

        {/* 3. BRAND & PARTNERSHIP LOGOS SHOWCASE */}
        <div id="brands">
          <BrandLogos />
        </div>

        {/* 4. ABOUT & MATERIAL SPECIFICATIONS */}
        <div id="specification">
          <ProductSpecification />
        </div>

        {/* 5. SINGLE PRODUCT CATALOGUE WITH LIVE SEARCH & CATEGORY FILTER */}
        <section id="catalogue" className="catalogue-section">
          <div className="container">
            <SectionTitle
              badge="Complete Sanitary Catalogue"
              title="Architectural Product Catalogue"
              description="Explore all AISI 304 stainless steel linear drainers, square floor grates, anti-odor traps, and tile accessories in a single unified view."
            />
            
            <ProductGrid 
              onSelectProduct={(product) => setSelectedProduct(product)} 
              activeCategory={activeCategory}
              onCategoryChange={(catId) => setActiveCategory(catId)}
            />
          </div>
        </section>

        {/* 6. APPLICATION IMAGE GALLERY */}
        <div id="gallery">
          <ImageGallery />
        </div>

        {/* 7. CONTACT & SALES SECTION */}
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* 8. FOOTER */}
      <Footer onSelectCategory={handleSelectCategoryFromNav} />

      {/* PRODUCT DETAILS MODAL */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}

      {/* FLOATING SCROLL TO TOP */}
      <ScrollToTop />
    </div>
  );
}

