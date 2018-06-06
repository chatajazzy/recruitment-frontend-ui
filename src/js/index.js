import Loader from './modules/Loader';
import CardsSlider from './modules/CardsSlider';

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
