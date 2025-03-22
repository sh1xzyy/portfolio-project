
const createMarkup = ({ author, avatar_url, review }) => {
  return `
  <li class="swiper-slide">
    <p class="swiper-description" tabindex="-1">${review}</p>
    <div class="swiper-user-info">
      <img
        class="swiper-user-img"
        src="${avatar_url}"
        alt="${author}"
        width="40"
        height="40"
      />
      <h3 class="swiper-user-name">${author}</h3>
    </div>
  </li>`;
};

export const renderMarkup = data => {
  const markup = data.map(review => createMarkup(review)).join('');
  refs.list.insertAdjacentHTML('beforeend', markup);
};