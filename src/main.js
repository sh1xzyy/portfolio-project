import {
  onContactFormInput,
  onContactFormSubmit,
} from './js/components/contactForm';
import { onBurgerMenuClick } from './js/components/mobile-menu';
import { initProjectItems } from './js/components/projects';
import { swiperLogic } from './js/components/reviews';
import { accordion } from './js/faq/accordion';
import { refs } from './js/refs/refs';

document.addEventListener('DOMContentLoaded', () => {
  initProjectItems();
  swiperLogic();
  accordion();
});

refs.burgerMenuBtn.addEventListener('click', onBurgerMenuClick);
refs.contactForm.addEventListener('input', onContactFormInput);
refs.contactForm.addEventListener('submit', onContactFormSubmit);
