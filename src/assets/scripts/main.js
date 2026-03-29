/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from 'swiper/modules';

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
});