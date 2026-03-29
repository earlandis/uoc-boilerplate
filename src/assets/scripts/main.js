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

const toggle = document.querySelector('.header__toggle');
const nav = document.querySelector('.header__nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('header__nav--active');
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