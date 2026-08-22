import React, { useState, useEffect, useRef } from 'react';
import { Shield, Truck, Sparkles, Users, Building, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function WhyChooseSaco() {
  const features = [
    {
      num: "01",
      title: "QUALITY FIRST",
      desc: "Carefully selected products focused on durability, precision engineering and long-lasting performance.",
      icon: <Shield size={24} />
    },
    {
      num: "02",
      title: "RELIABLE SOURCING",
      desc: "Consistent sourcing and dependable supply solutions to fulfill project timelines effortlessly.",
      icon: <Truck size={24} />
    },
    {
      num: "03",
      title: "PREMIUM FINISH",
      desc: "Products designed to deliver both optimal drainage functionality and refined architectural aesthetics.",
      icon: <Sparkles size={24} />
    },
    {
      num: "04",
      title: "CUSTOMER FOCUSED",
      desc: "Professional B2B support built around building and maintaining long-term business relationships.",
      icon: <Users size={24} />
    },
    {
      num: "05",
      title: "INDUSTRY EXPERIENCE",
      desc: "Deep understanding of modern architectural, residential, and commercial construction requirements.",
      icon: <Building size={24} />
    },
    {
      num: "06",
      title: "DEPENDABLE SERVICE",
      desc: "From product selection to order fulfillment, we focus on delivering a smooth and reliable experience.",
      icon: <CheckCircle2 size={24} />
    }
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  // Check window viewport size for responsive slide structure (2 cards per tab on desktop/Windows!)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = isMobile ? features.length : Math.ceil(features.length / 2); // 3 tabs on desktop/Windows (2 cards each), 6 on mobile

  // Reset activeIndex if out of bounds on resize
  useEffect(() => {
    if (activeIndex >= totalPages) {
      setActiveIndex(0);
    }
  }, [isMobile, totalPages, activeIndex]);

  // Auto-advance every 2 seconds (2000ms)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalPages);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalPages);
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  return (
    <section className="why-saco-section">
      <div className="container">
        <div className="why-saco-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span className="section-eyebrow">OUR ADVANTAGE</span>
            <h2 className="section-title-large">WHY CHOOSE SACO?</h2>
            <p className="section-lead">
              Partner with SACO Trading Company for dependable stainless-steel solutions backed by quality products and dedicated B2B service.
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="slider-controls">
            <button onClick={handlePrev} className="slider-arrow-btn" aria-label="Previous slide">
              <ChevronLeft size={20} />
            </button>
            <button onClick={handleNext} className="slider-arrow-btn" aria-label="Next slide">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Automatic Horizontal Carousel Slider */}
        <div 
          className="why-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="why-carousel-track" 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {isMobile ? (
              /* Mobile View: 1 Card per Slide (6 slides total) */
              features.map((item, idx) => (
                <div key={item.num} className={`why-slide-page mobile-page ${activeIndex === idx ? 'active' : ''}`}>
                  <div className="why-card luxury-why-card">
                    <div className="why-card-top">
                      <span className="why-num-glow">{item.num}</span>
                      <div className="why-icon-box">{item.icon}</div>
                    </div>
                    <h3 className="why-title">{item.title}</h3>
                    <p className="why-desc">{item.desc}</p>
                    <div className={`why-progress-line ${activeIndex === idx && !isPaused ? 'animating' : ''}`} />
                  </div>
                </div>
              ))
            ) : (
              /* Windows / Desktop View: Exactly 2 Cards per Tab Page (3 pages total) */
              [0, 1, 2].map((pageIdx) => {
                const item1 = features[pageIdx * 2];
                const item2 = features[pageIdx * 2 + 1];
                const isCurrentPage = activeIndex === pageIdx;
                return (
                  <div key={pageIdx} className={`why-slide-page desktop-page ${isCurrentPage ? 'active' : ''}`}>
                    <div className="why-desktop-pair-grid">
                      {item1 && (
                        <div className="why-card luxury-why-card">
                          <div className="why-card-top">
                            <span className="why-num-glow">{item1.num}</span>
                            <div className="why-icon-box">{item1.icon}</div>
                          </div>
                          <h3 className="why-title">{item1.title}</h3>
                          <p className="why-desc">{item1.desc}</p>
                          <div className={`why-progress-line ${isCurrentPage && !isPaused ? 'animating' : ''}`} />
                        </div>
                      )}
                      {item2 && (
                        <div className="why-card luxury-why-card">
                          <div className="why-card-top">
                            <span className="why-num-glow">{item2.num}</span>
                            <div className="why-icon-box">{item2.icon}</div>
                          </div>
                          <h3 className="why-title">{item2.title}</h3>
                          <p className="why-desc">{item2.desc}</p>
                          <div className={`why-progress-line ${isCurrentPage && !isPaused ? 'animating' : ''}`} />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* 2-Second Timer Pagination Dots */}
        <div className="why-pagination">
          {Array.from({ length: totalPages }).map((_, idx) => {
            const label = isMobile 
              ? features[idx].num 
              : `Tab 0${idx + 1} (${features[idx * 2].num}-${features[idx * 2 + 1]?.num})`;
            return (
              <button
                key={idx}
                className={`why-dot ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide page ${idx + 1}`}
              >
                <span>{label}</span>
                {activeIndex === idx && <div className={`dot-timer-bar ${!isPaused ? 'running' : ''}`} />}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
