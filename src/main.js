import {
  onContactFormInput,
  onContactFormSubmit,
} from './js/components/contactForm';
import {
  onThemeSwitchBtnClick,
  userThemes,
} from './js/components/themeSwitcher';
import { onBurgerMenuClick } from './js/components/mobileMenu';
import { initProjectItems, onLoadMoreBtnClick } from './js/components/projects';
import { swiperLogic } from './js/components/reviews';
import { refs } from './js/refs/refs';
import { accordion } from './js/components/accordion';

document.addEventListener('DOMContentLoaded', () => {
  initProjectItems();
  swiperLogic();
  userThemes();
  accordion();
});

const onBodyBtnsClick = ({ target }) => {
  if (target.closest('#burgerMenu')) {
    onBurgerMenuClick();
  }
  if (target.matches('#loadMoreBtn')) {
    onLoadMoreBtnClick();
  }
};

refs.body.addEventListener('click', onBodyBtnsClick);
refs.contactForm.addEventListener('input', onContactFormInput);
refs.contactForm.addEventListener('submit', onContactFormSubmit);
refs.themeSwitchBtn.addEventListener('click', onThemeSwitchBtnClick);
