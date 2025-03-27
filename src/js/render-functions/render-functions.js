import { refs } from '../refs/refs';

const createReviewMarkup = ({ author, avatar_url, review }) => {
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
        loading="lazy"
      />
      <h3 class="swiper-user-name">${author}</h3>
    </div>
  </li>`;
};

const createProjectMarkup = ({ title, url1, url2, technologies }) => {
  return `
    <li class="projects-list-item">
      <img class="projects-img" src="${url1}" srcset="${url1} 1x, ${url2} 2x" alt="${title}" loading="lazy">
      <p class="projects-technologies">${technologies}</p>
      <div class="projects-container">
        <h3 class="projects-name">${title}</h3>
        <div class="projects-link-wrapper">
          <a href="#" class="projects-visit-link">visit
            <svg class="projects-visit-svg">
              <use href="./img/icons.svg#visit-arrow"></use>
            </svg>
          </a>
        </div>
      </div>
    </li>
  `;
};

export const renderMarkup = data => {
  const markup = data.map(createReviewMarkup).join('');
  refs.reviewsList.insertAdjacentHTML('beforeend', markup);
};

export const renderProjectsMarkup = data => {
  const markup = data.map(createProjectMarkup).join('');
  refs.projectsList.insertAdjacentHTML('beforeend', markup);
};
