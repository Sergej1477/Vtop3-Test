import './button.scss';

const btn = document.querySelector('.btn--lang');
btn.addEventListener('click', () => {
  btn.textContent = btn.textContent === 'RU' ? (btn.textContent = 'EN') : (btn.textContent = 'RU');
});
