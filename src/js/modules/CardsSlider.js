export default class CardsSlider {
  constructor() {
    this.slidesDefault = document.querySelector('.cards-slider__slide--active');
    this.slides = document.querySelectorAll('.cards-slider__slide');
    this.navItems = document.querySelectorAll('.cards-slider__nav-item');

    this.init();
  }
  bindEvents() {
    this.slides.forEach(slide => slide.addEventListener('click', this.changeSlidesPosition));
    this.navItems.forEach(navItem => navItem.addEventListener('click', this.changeSlidesPosition));
  }
  changeSlidesPosition() {
    const selectedSlide   = typeof this.dataset !== 'undefined' ?
          this.dataset.slide : this.slidesDefault.dataset.slide,
          slideWidth      = document.querySelector('.cards-slider__slide').offsetWidth,
          cardWidth       = document.querySelector('.card').offsetWidth,
          slidesContainer = document.querySelector('.cards-slider__slides-list'),
          currentControl  = document.querySelector('.cards-slider__nav-item--active'),
          newControl      = document.querySelector(`.cards-slider__nav-item[data-slide="${selectedSlide}"]`);

    let offset;

    const getDesktopOffset = () => {
      if (selectedSlide == 1) {
        offset = ` ${slideWidth / 2 - (cardWidth * 1.5) + 20}px`;
      } 
      else if (selectedSlide == 2) {
        offset = `-${cardWidth * 2 + cardWidth * 1.5 - 30}px`;
      } 
      else {
        offset = `-${2 * slideWidth - cardWidth / 5 + 20}px`;
      }

      return offset;
    }

    const getMobileOffset = () => {
      if (selectedSlide == 1) {
        offset = '20px';
      } 
      else if (selectedSlide == 2) {
        offset = `-${(slideWidth - 20)}px`;
      } 
      else {
        offset = `-${7.5 * cardWidth}px`;
      }

      return offset;
    }

    const updateNav = (currentEl, newEl, prefix) => {
      currentEl.classList.remove(prefix);
      newEl.classList.add(prefix);
    }

    const updateOffset = (container, offset) => {
      container.style.transform = `translate(${offset})`;
    }

    offset = window.screen.width < 1320 ? getMobileOffset() : getDesktopOffset();

    updateNav(currentControl, newControl, 'cards-slider__nav-item--active');
    updateOffset(slidesContainer, offset); 
  }
  init() {
    this.bindEvents();
    this.changeSlidesPosition();
  }
}
