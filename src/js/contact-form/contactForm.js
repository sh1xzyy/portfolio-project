// import { sendContactForm } from '../api/api-service';

// export const onContactFormSubmit = async event => {
//   event.preventDefault();
//   const { target } = event;

//   const emailValue = target.elements.userEmail.value.trim();
//   const messageValue = target.elements.userMessage.value.trim();

//   const isEmailValid =
//     emailValue.includes('@gmail.com') && emailValue.length > 10;
//   const isMessageValid = messageValue.length > 5;

//   if (!isEmailValid) {
//     document.querySelector('.input-field-wrapper').classList.add('is-error');
//     return;
//   } else if (isEmailValid) {
//     document.querySelector('.input-field-wrapper').classList.add('is-correct');
//   }

//   if (!isMessageValid) {
//     document.querySelector('.textarea-field-wrapper').classList.add('is-error');
//     return;
//   }

//   const userData = {
//     email: emailValue,
//     comment: messageValue,
//   };

//   try {
//     await sendContactForm(userData);

//     event.currentTarget.reset();
//   } catch (error) {}
// };

// export const onContactFormInput = () => {
//   // ..
// };
