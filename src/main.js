import {
  onContactFormInput,
  onContactFormSubmit,
} from './js/components/contactForm';
import {
  onThemeSwitchBtnClick,
  userThemes,
} from './js/components/themeSwitcher';
import { onBurgerMenuClick } from './js/components/mobileMenu';
import { initProjectItems } from './js/components/projects';
import { swiperLogic } from './js/components/reviews';
import { accordion } from './js/components/accordion';
import { refs } from './js/refs/refs';

document.addEventListener('DOMContentLoaded', () => {
  initProjectItems();
  swiperLogic();
  accordion();
  userThemes();
});

refs.burgerMenuBtn.addEventListener('click', onBurgerMenuClick);
refs.contactForm.addEventListener('input', onContactFormInput);
refs.contactForm.addEventListener('submit', onContactFormSubmit);
refs.themeSwitchBtn.addEventListener('click', onThemeSwitchBtnClick);
