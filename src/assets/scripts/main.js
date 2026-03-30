/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Write any other JavaScript below
 */
document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.header__hero', {
    effect : 'coverflow',
    grabCursor : true,
    centeredSlides: true,
    slidesPerView : 'auto',
    coverflowEffect: 
    {
      rotate: 0, 
      stretch : 0, 
      depth: 200, 
      modifier: 1, 
      slideShadows: true
    },
    modules: [Pagination, Autoplay],
    loop: true,
    autoplay: { delay: 4000 },
    pagination: { el: '.swiper-pagination', clickable: true },
    parallax: true
  });

  AOS.init({
    duration: 700,
    easing: 'ease-out',
    once: true
  });
});


const nav = document.querySelector('.header__nav');
const closeBtn = document.querySelector('.header__close');
const links = document.querySelectorAll('.header__link');
const headerBar = document.querySelector('.header__bar');
const toggle = document.querySelector('.header__toggle');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    headerBar.classList.add('scrolled');
  } else {
    headerBar.classList.remove('scrolled');
  }
});

// Abrir menú en tablet/móvil
toggle.addEventListener('click', () => {
  nav.classList.add('header__nav--active');
  closeBtn.style.display = 'block'; // mostrar X solo al abrir
});

// Cerrar menú
closeBtn.addEventListener('click', () => {
  nav.classList.remove('header__nav--active');
  closeBtn.style.display = 'none';
});

// Marcar item activo
links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.parentElement.classList.remove('active'));
    link.parentElement.classList.add('active');

    // Cerrar menú en móvil
    if (window.innerWidth <= 1024) {
      nav.classList.remove('header__nav--active');
      closeBtn.style.display = 'none';
    }
  });
});


const gallerySwiper = new Swiper('.gallery__swiper', {
  modules: [Navigation, Pagination, EffectCoverflow],
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 15,
  loop: true,
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev',
  },
  pagination: {
    el: '.gallery__pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

  function closeAll() {
    document.querySelectorAll('.how-to-get__pin').forEach(p => p.classList.remove('how-to-get__pin--active'));
    document.querySelectorAll('.how-to-get__popup').forEach(p => p.classList.remove('how-to-get__popup--visible'));
  }
 
  document.querySelectorAll('.how-to-get__pin').forEach(pin => {
    pin.addEventListener('click', function(e) {
      e.stopPropagation();
      const id = this.id.replace('pin-', '');
      const popup = document.getElementById('pop-' + id);
      const isActive = this.classList.contains('how-to-get__pin--active');
      closeAll();
      if (!isActive) {
        this.classList.add('how-to-get__pin--active');
        popup.classList.add('how-to-get__popup--visible');
      }
    });
  });
 
  document.querySelectorAll('.how-to-get__popup-close').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      closeAll();
    });
  });
 
  // Cerrar al pulsar fuera del mapa
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.how-to-get__pin')) closeAll();
  });

  