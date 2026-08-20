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
import SEO from '../components/SEO/SEO';
import { getPageStructuredData } from '../components/SEO/StructuredData';
import { SEO_CONFIG } from '../config/seo';
import { products, CATEGORIES } from '../data/products';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSection, setActiveSection] = useState('hero');

  // 1. URL Query Parameter Initialization & History Sync for SEO
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const prodId = params.get('product');
    const catId = params.get('category');

    if (prodId) {
      const foundProduct = products.find(p => p.id === prodId || p.model?.toLowerCase() === prodId.toLowerCase());
      if (foundProduct) {
        setSelectedProduct(foundProduct);
      }
    }

    if (catId && CATEGORIES.some(c => c.id === catId)) {
      setActiveCategory(catId);
    }
  }, []);

  // Update URL search params gracefully without full page reload
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    const url = new URL(window.location.href);
    if (product) {
      url.searchParams.set('product', product.id);
    } else {
      url.searchParams.delete('product');
    }
    window.history.replaceState({}, '', url.toString());
  };

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    const url = new URL(window.location.href);
    if (catId && catId !== 'all') {
      url.searchParams.set('category', catId);
    } else {
      url.searchParams.delete('category');
    }
    // Remove product param if category changes
    url.searchParams.delete('product');
    window.history.replaceState({}, '', url.toString());
  };

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectCategoryFromNav = (catId) => {
    handleCategoryChange(catId);
    const catalogueEl = document.getElementById('catalogue');
    if (catalogueEl) {
      catalogueEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Compute Dynamic SEO Metadata
  let pageTitle = SEO_CONFIG.defaultTitle;
  let pageDescription = SEO_CONFIG.defaultDescription;
  let canonicalPath = '/';
  let ogImage = SEO_CONFIG.defaultOgImage;
  let ogType = 'website';

  const categoryObj = CATEGORIES.find(c => c.id === activeCategory);
  const categoryLabel = categoryObj ? categoryObj.label : null;

  if (selectedProduct) {
    pageTitle = `${selectedProduct.name} | ${SEO_CONFIG.siteName}`;
    pageDescription = selectedProduct.description || selectedProduct.tagline;
    canonicalPath = `?product=${selectedProduct.id}`;
    ogImage = selectedProduct.image;
    ogType = 'product';
  } else if (activeCategory && activeCategory !== 'all' && SEO_CONFIG.categories[activeCategory]) {
    pageTitle = SEO_CONFIG.categories[activeCategory].title;
    pageDescription = SEO_CONFIG.categories[activeCategory].description;
    canonicalPath = `?category=${activeCategory}`;
  }

  const structuredData = getPageStructuredData({
    product: selectedProduct,
    categoryId: activeCategory,
    categoryLabel: categoryLabel
  });

  return (
    <div className="app-layout">
      {/* DYNAMIC SEO HEAD SYSTEM */}
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonicalPath={canonicalPath}
        ogImage={ogImage}
        ogType={ogType}
        structuredData={structuredData}
      />

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
              onSelectProduct={(product) => handleSelectProduct(product)} 
              activeCategory={activeCategory}
              onCategoryChange={(catId) => handleCategoryChange(catId)}
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
          onClose={() => handleSelectProduct(null)} 
        />
      )}

      {/* FLOATING SCROLL TO TOP */}
      <ScrollToTop />
    </div>
  );
}
