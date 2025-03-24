// import {
//   onContactFormInput,
//   onContactFormSubmit,
// } from './js/contact-form/contactForm';
import { initProjectItems } from './js/components/projects';
import { swiperLogic } from './js/components/reviews';
import { accordion } from './js/faq/accordion';
import { refs } from './js/refs/refs';

document.addEventListener('DOMContentLoaded', () => {
  initProjectItems();
  swiperLogic();
  accordion();
});

// refs.contactForm.addEventListener('input', onContactFormInput);
// refs.contactForm.addEventListener('submit', onContactFormSubmit);
