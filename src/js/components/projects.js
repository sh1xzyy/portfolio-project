import { renderProjectsMarkup } from '../render-functions/render-functions';
import projects from '../../json/projects.json';
import { refs } from '../refs/refs';

let startIndex = 0;
let endIndex = 3;

export const initProjectItems = () => {
  endIndex = 3;
  renderProjectsMarkup(projects.slice(startIndex, endIndex));
};

export const onLoadMoreBtnClick = event => {
  startIndex += 3;
  endIndex += 3;
  renderProjectsMarkup(projects.slice(startIndex, endIndex));

  const item = document
    .querySelector('.projects-list-item')
    .getBoundingClientRect();
  window.scrollBy({
    top: item.height,
    behavior: 'smooth',
  });

  if (endIndex >= projects.length) {
    event.currentTarget.style.display = 'none';
    refs.loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);
  }
};

refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
