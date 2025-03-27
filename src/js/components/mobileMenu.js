import { refs } from '../refs/refs';

export const onBurgerMenuClick = () => {
  refs.menuOverlay.classList.add('is-open');
  refs.body.classList.add('no-scroll');

  refs.menuOverlay.addEventListener('click', onMenuOverlayClick);
};

const onMenuOverlayClick = ({ target }) => {
  if (target.closest('#menuCloseBtn')) {
    removeClass();
  }

  if (target.closest('.menu-list-item')) {
    removeClass();
  }
};

const removeClass = () => {
  refs.menuOverlay.classList.remove('is-open');
  refs.body.classList.remove('no-scroll');
  refs.menuOverlay.removeEventListener('click', onMenuOverlayClick);
};
