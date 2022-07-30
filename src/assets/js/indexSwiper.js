import Swiper, { Navigation, A11y } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// Init swiper
const indexSwiper = new Swiper('.swiper', {
  modules: [Navigation, A11y],
  direction: 'horizontal',
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 15,
  loop: true,
  a11y: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: '.my-work__navigation-button--next',
    prevEl: '.my-work__navigation-button--prev',
  },
  breakpoints: {
    768: {
      spaceBetween: 30,
    },
  },
});

export default indexSwiper;
