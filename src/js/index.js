import CardsSlider from './modules/CardsSlider';
import Loader from './modules/Loader';
import Parallax from './modules/Parallax';

document.addEventListener('DOMContentLoaded', () => {
  const loader = new Loader(
    document.querySelector('.loader__wrapper'), 'loader__wrapper--active'
  );

  loader.showLoader();

  setTimeout(() => {
    loader.hideLoader();
  }, 2000);

  new CardsSlider();
});

document.addEventListener('scroll', () => {
  Parallax();
});
