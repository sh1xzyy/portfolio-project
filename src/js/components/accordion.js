export const accordion = () => {
  const accordion = document.querySelectorAll('.faq-list-item');

  accordion.forEach(item => {
    item.addEventListener('click', ({ target }) => {
      const li = target.closest('li');
      const check = document.querySelector('.is-active');
      li.classList.toggle('is-active');

      if (check) {
        check.classList.remove('is-active');
      }
    });
  });
};
