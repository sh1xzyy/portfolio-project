import { renderMarkup } from '../render-functions/render-functions';
import { Keyboard, Navigation } from 'swiper/modules';
import { getReviews } from '../api/api-service';
import { refs } from "../refs/refs"
import iziToast from 'izitoast';
import Swiper from 'swiper';


const initSwiper = () => {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Keyboard],
    spaceBetween: 32,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      1280: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
    allowSlideNext: true,
  });
};

export const swiperLogic = async () => {
  try {
    const data = await getReviews();

    if (!data.length) {
      refs.buttons.classList.add('is-hidden');
      refs.errorMsg.classList.remove('is-hidden');
      return;
    }

    renderMarkup(data);
    initSwiper();
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      progressBarColor: '#B51B1B',
      message: 'Something went wrong while loading review',
      messageColor: '#FAFAFB',
      backgroundColor: '#EF4040',
    });
    refs.buttons.classList.add('is-hidden');
    refs.errorMsg.classList.remove('is-hidden');
  }
};