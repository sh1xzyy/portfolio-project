import { sendContactForm } from '../api/api-service';
import { refs } from '../refs/refs';
import iziToast from 'izitoast';

export const onContactFormSubmit = async event => {
  event.preventDefault();

  const form = event.target;
  const emailValue = form.elements.userEmail.value.trim();
  const messageValue = form.elements.userMessage.value.trim();

  const isEmailValid =
    emailValue.endsWith('@gmail.com') && emailValue.length > 10;
  const isMessageValid = messageValue.length > 5;

  if (!isEmailValid) refs.inputWrapper.classList.add('is-error');
  if (!isMessageValid) refs.textareaWrapper.classList.add('is-error');

  if (!isEmailValid || !isMessageValid) return;

  try {
    await sendContactForm({ email: emailValue, comment: messageValue });
    refs.modalOverlay.classList.add('is-open');
    refs.body.classList.add('no-scroll');
    refs.inputWrapper.classList.remove('is-correct');
    refs.modalOverlay.addEventListener('click', modalOverlayClose);
    document.addEventListener('keydown', onHandleEscapeKey);
    form.reset();
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      progressBarColor: '#B51B1B',
      message: 'Something went wrong with posting form',
      messageColor: '#FAFAFB',
      backgroundColor: '#EF4040',
    });
  }
};

export const onContactFormInput = event => {
  const input = event.target;

  if (input.id === 'userEmail') {
    const isEmailValid =
      input.value.endsWith('@gmail.com') && input.value.length > 10;
    refs.inputWrapper.classList.toggle('is-correct', isEmailValid);
    refs.inputWrapper.classList.toggle('is-error', !isEmailValid);
  }
  if (input.id === 'userMessage') {
    const isMessageValid = input.value.length > 5;
    refs.textareaWrapper.classList.toggle('is-error', !isMessageValid);
  }
};

const modalOverlayClose = event => {
  if (
    event.target === event.currentTarget ||
    event.target.closest('#modalCloseBtn')
  ) {
    closeModal();
    refs.modalOverlay.removeEventListener('click', modalOverlayClose);
  }
};

const onHandleEscapeKey = event => {
  if (event.key === 'Escape') {
    closeModal();
    document.removeEventListener('keydown', onHandleEscapeKey);
  }
};

const closeModal = () => {
  refs.modalOverlay.classList.remove('is-open');
  refs.body.classList.remove('no-scroll');
};
