import { refs } from '../refs/refs';

export const onThemeSwitchBtnClick = ({ target }) => {
  const theme = target.checked ? 'dark' : 'light';
  localStorage.setItem('userTheme', theme);
  applyTheme(theme);
};

export const userThemes = () => {
  const savedTheme = localStorage.getItem('userTheme') || 'light';
  refs.themeSwitchBtn.checked = savedTheme === 'dark';
  applyTheme(savedTheme);
};

const applyTheme = theme => {
  refs.body.classList.toggle('theme-dark', theme === 'dark');
  refs.body.classList.toggle('theme-light', theme === 'light');
};
