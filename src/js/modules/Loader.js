export default class Loader {
  constructor(loader, prefix) {
    this.loader = loader;
    this.prefix = prefix;

    this.init(this.loader, this.prefix);
  }
  showLoader() {
    this.loader.classList.add(this.prefix);
  }
  hideLoader() {
    this.loader.classList.remove(this.prefix);

    function fadeOut(el) {
      el.style.opacity = 1;

      (function fade() {
        if ((el.style.opacity -= .1) < 0) {
          el.style.display = 'none';
        } else {
          requestAnimationFrame(fade);
        }
      })();
    }

    fadeOut(this.loader);
  }
  init() {
    this.showLoader();
  }
}
