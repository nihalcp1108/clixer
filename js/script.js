const root = document.documentElement;
const scrollRevealItems = document.querySelectorAll('.reveal');
const menuToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const galleryFilters = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-card');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox img');
const lightboxClose = document.querySelector('.lightbox-close');
const productThumbs = document.querySelectorAll('.product-thumb');
const mainProductImage = document.querySelector('.product-main-image');

const revealOnScroll = () => {
  const threshold = window.innerHeight * 0.9;
  scrollRevealItems.forEach((item) => {
    const box = item.getBoundingClientRect();
    if (box.top < threshold) {
      item.classList.add('visible');
    }
  });
};

const scrollHeader = () => {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};

const handleNavToggle = () => {
  navList.classList.toggle('open');
  if (menuToggle) {
    menuToggle.classList.toggle('open');
  }
};

const closeMobileNav = () => {
  if (navList.classList.contains('open')) {
    navList.classList.remove('open');
  }
  if (menuToggle) {
    menuToggle.classList.remove('open');
  }
};

const handleFilter = (event) => {
  const category = event.currentTarget.dataset.filter;
  galleryFilters.forEach((button) => button.classList.remove('active'));
  event.currentTarget.classList.add('active');
  galleryItems.forEach((card) => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
      requestAnimationFrame(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(22px)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 300);
    }
  });
};

const openLightbox = (event) => {
  const image = event.currentTarget.querySelector('img');
  lightboxImage.src = image.src;
  lightbox.classList.add('active');
};

const closeLightbox = () => {
  lightbox.classList.remove('active');
};

const handleThumbClick = (event) => {
  const thumb = event.currentTarget;
  const imageSrc = thumb.dataset.large;
  if (!mainProductImage || !imageSrc) return;
  productThumbs.forEach((thumb) => thumb.classList.remove('active'));
  thumb.classList.add('active');
  mainProductImage.src = imageSrc;
};

const updateActiveLink = () => {
  const links = document.querySelectorAll('.nav-list a');
  links.forEach((link) => {
    if (link.href === window.location.href || link.href === window.location.href.split('#')[0]) {
      link.classList.add('active');
    }
  });
};

const createButtonRipple = (event) => {
  const button = event.currentTarget;
  button.classList.remove('ripple-effect');
  void button.offsetWidth;
  button.classList.add('ripple-effect');
};

window.addEventListener('DOMContentLoaded', () => {
  revealOnScroll();
  scrollHeader();
  updateActiveLink();
  if (galleryFilters.length) {
    galleryFilters.forEach((button) => button.addEventListener('click', handleFilter));
  }
  if (lightbox && lightboxClose) {
    document.querySelectorAll('.gallery-card').forEach((card) => {
      card.addEventListener('click', openLightbox);
    });
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) closeLightbox();
    });
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeLightbox();
    });
  }
  if (productThumbs.length) {
    productThumbs.forEach((thumb) => thumb.addEventListener('click', handleThumbClick));
  }
  document.querySelectorAll('[data-ripple]').forEach((button) => {
    button.addEventListener('click', createButtonRipple);
  });
});

window.addEventListener('scroll', () => {
  revealOnScroll();
  scrollHeader();
});

if (menuToggle) {
  menuToggle.addEventListener('click', handleNavToggle);
}

document.querySelectorAll('.nav-list a').forEach((anchor) => {
  anchor.addEventListener('click', () => {
    closeMobileNav();
  });
});
