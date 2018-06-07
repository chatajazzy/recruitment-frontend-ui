import { fadeOut } from '../_helpers';

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
    fadeOut(this.loader);
  }
  init() {
    this.showLoader();
  }
}
