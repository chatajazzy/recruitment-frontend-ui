'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/__webpack_require__.r = function (exports) {
    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
    /******/Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/__webpack_require__.t = function (value, mode) {
    /******/if (mode & 1) value = __webpack_require__(value);
    /******/if (mode & 8) return value;
    /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && value.__esModule) return value;
    /******/var ns = Object.create(null);
    /******/__webpack_require__.r(ns);
    /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    } /******/return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = "./index.js");
  /******/
})(
/************************************************************************/
/******/{

  /***/"./_helpers.js":
  /*!*********************!*\
    !*** ./_helpers.js ***!
    \*********************/
  /*! exports provided: fadeIn, fadeOut, revealSection, makeCondition */
  /***/function _helpersJs(module, __webpack_exports__, __webpack_require__) {

    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fadeIn\", function() { return fadeIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fadeOut\", function() { return fadeOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"revealSection\", function() { return revealSection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeCondition\", function() { return makeCondition; });\nfunction fadeIn(el, display) {\r\n  el.style.opacity = 0;\r\n  el.style.display = display || \"block\";\r\n\r\n  (function fade() {\r\n    var val = parseFloat(el.style.opacity);\r\n    if (!((val += 0.1) > 1)) {\r\n      el.style.opacity = val;\r\n      requestAnimationFrame(fade);\r\n    }\r\n  })();\r\n}\r\n\r\nfunction fadeOut(el) {\r\n  el.style.opacity = 1;\r\n\r\n  (function fade() {\r\n    if ((el.style.opacity -= 0.1) < 0) {\r\n      el.style.display = 'none';\r\n    } \r\n    else {\r\n      requestAnimationFrame(fade);\r\n    }\r\n  })();\r\n}\r\n\r\nfunction revealSection(section) {\r\n  fadeIn(section)\r\n  section.classList.add('visible')\r\n}\r\n\r\nfunction makeCondition(a, b, c) {\r\n  return !a.classList.contains('visible') && b >= c - (window.innerHeight / 2);\r\n}\r\n\n\n//# sourceURL=webpack:///./_helpers.js?");

    /***/
  },

  /***/"./index.js":
  /*!******************!*\
    !*** ./index.js ***!
    \******************/
  /*! no exports provided */
  /***/function indexJs(module, __webpack_exports__, __webpack_require__) {

    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_CardsSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/CardsSlider */ \"./modules/CardsSlider.js\");\n/* harmony import */ var _modules_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Loader */ \"./modules/Loader.js\");\n/* harmony import */ var _modules_Parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Parallax */ \"./modules/Parallax.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const loader = new _modules_Loader__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n    document.querySelector('.loader__wrapper'), 'loader__wrapper--active'\r\n  );\r\n\r\n  loader.showLoader();\r\n\r\n  setTimeout(() => {\r\n    loader.hideLoader();\r\n  }, 2000);\r\n\r\n  new _modules_CardsSlider__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n});\r\n\r\ndocument.addEventListener('scroll', () => {\r\n  Object(_modules_Parallax__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

    /***/
  },

  /***/"./modules/CardsSlider.js":
  /*!********************************!*\
    !*** ./modules/CardsSlider.js ***!
    \********************************/
  /*! exports provided: default */
  /***/function modulesCardsSliderJs(module, __webpack_exports__, __webpack_require__) {

    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CardsSlider; });\nclass CardsSlider {\r\n  constructor() {\r\n    this.slidesDefault = document.querySelector('.cards-slider__slide--active');\r\n    this.slides = document.querySelectorAll('.cards-slider__slide');\r\n    this.navItems = document.querySelectorAll('.cards-slider__nav-item');\r\n\r\n    this.init();\r\n  }\r\n  bindEvents() {\r\n    this.slides.forEach(slide => slide.addEventListener('click', this.changeSlidesPosition));\r\n    this.navItems.forEach(navItem => navItem.addEventListener('click', this.changeSlidesPosition));\r\n  }\r\n  changeSlidesPosition() {\r\n    const selectedSlide   = typeof this.dataset !== 'undefined' ?\r\n          this.dataset.slide : this.slidesDefault.dataset.slide,\r\n          slideWidth      = document.querySelector('.cards-slider__slide').offsetWidth,\r\n          cardWidth       = document.querySelector('.card').offsetWidth,\r\n          slidesContainer = document.querySelector('.cards-slider__slides-list'),\r\n          currentControl  = document.querySelector('.cards-slider__nav-item--active'),\r\n          newControl      = document.querySelector(`.cards-slider__nav-item[data-slide=\"${selectedSlide}\"]`);\r\n\r\n    let offset;\r\n\r\n    const getDesktopOffset = () => {\r\n      if (selectedSlide == 1) {\r\n        offset = ` ${slideWidth / 2 - (cardWidth * 1.5) + 20}px`;\r\n      } \r\n      else if (selectedSlide == 2) {\r\n        offset = `-${cardWidth * 2 + cardWidth * 1.5 - 30}px`;\r\n      } \r\n      else {\r\n        offset = `-${2 * slideWidth - cardWidth / 5 + 20}px`;\r\n      }\r\n\r\n      return offset;\r\n    }\r\n\r\n    const getMobileOffset = () => {\r\n      if (selectedSlide == 1) {\r\n        offset = '20px';\r\n      } \r\n      else if (selectedSlide == 2) {\r\n        offset = `-${(slideWidth - 20)}px`;\r\n      } \r\n      else {\r\n        offset = `-${7.5 * cardWidth}px`;\r\n      }\r\n\r\n      return offset;\r\n    }\r\n\r\n    const updateNav = (currentEl, newEl, prefix) => {\r\n      currentEl.classList.remove(prefix);\r\n      newEl.classList.add(prefix);\r\n    }\r\n\r\n    const updateOffset = (container, offset) => {\r\n      container.style.transform = `translate(${offset})`;\r\n    }\r\n\r\n    offset = window.screen.width < 1320 ? getMobileOffset() : getDesktopOffset();\r\n\r\n    updateNav(currentControl, newControl, 'cards-slider__nav-item--active');\r\n    updateOffset(slidesContainer, offset); \r\n  }\r\n  init() {\r\n    this.bindEvents();\r\n    this.changeSlidesPosition();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/CardsSlider.js?");

    /***/
  },

  /***/"./modules/Loader.js":
  /*!***************************!*\
    !*** ./modules/Loader.js ***!
    \***************************/
  /*! exports provided: default */
  /***/function modulesLoaderJs(module, __webpack_exports__, __webpack_require__) {

    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Loader; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_helpers */ \"./_helpers.js\");\n\r\n\r\nclass Loader {\r\n  constructor(loader, prefix) {\r\n    this.loader = loader;\r\n    this.prefix = prefix;\r\n\r\n    this.init(this.loader, this.prefix);\r\n  }\r\n  showLoader() {\r\n    this.loader.classList.add(this.prefix);\r\n  }\r\n  hideLoader() {\r\n    this.loader.classList.remove(this.prefix);\r\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"fadeOut\"])(this.loader);\r\n  }\r\n  init() {\r\n    this.showLoader();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/Loader.js?");

    /***/
  },

  /***/"./modules/Parallax.js":
  /*!*****************************!*\
    !*** ./modules/Parallax.js ***!
    \*****************************/
  /*! exports provided: default */
  /***/function modulesParallaxJs(module, __webpack_exports__, __webpack_require__) {

    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_helpers */ \"./_helpers.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n  const heroContent    = document.querySelector('.hero__content'),\r\n        heroShapes     = document.querySelector('.hero__shapes'),\r\n        pricing        = document.querySelector('.pricing'),\r\n        pricingItems   = document.querySelectorAll('.pricing-item'),\r\n        sections       = document.querySelectorAll('.section'),\r\n        section1       = sections[1],\r\n        section2       = sections[2],\r\n        section3       = sections[3],\r\n        section4       = sections[4],\r\n        offset         = window.pageYOffset,\r\n        pricingOffset  = offset + pricing.getBoundingClientRect().top,\r\n        section1Offset = offset + section1.getBoundingClientRect().top,\r\n        section2Offset = offset + section2.getBoundingClientRect().top,\r\n        section3Offset = offset + section3.getBoundingClientRect().top,\r\n        section4Offset = offset + section4.getBoundingClientRect().top;\r\n  \r\n  if (Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"makeCondition\"])(section4, offset, section4Offset)) {\r\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"revealSection\"])(section4);\r\n  }\r\n  else if (\r\n    !section3.classList.contains('visible') && \r\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"makeCondition\"])(pricing, offset, pricingOffset)\r\n  ) {\r\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"revealSection\"])(section3);\r\n    pricingItems.forEach((item, i) => {\r\n      setTimeout(() => {\r\n        pricingItems[i].classList.add('pricing-item--is-showing');\r\n      }, (800 * (Math.exp(i * 0.15))) - 800);\r\n    })\r\n  }\r\n  else if (Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"makeCondition\"])(section2, offset, section2Offset)) {\r\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"revealSection\"])(section2);\r\n  }\r\n  else if (Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"makeCondition\"])(section1, offset, section1Offset)) {\r\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"revealSection\"])(section1);\r\n  }\r\n  \r\n  if (window.screen.width > 1320) {\r\n    if (offset >= 50) {\r\n      heroContent.style.transform = `translate(0, -${offset / 8}%`;\r\n      heroShapes.style.transform = `translate(0, ${offset / 8}%`;\r\n    }\r\n    else {\r\n      heroContent.style.transform = 'none';\r\n      heroShapes.style.transform = 'none';\r\n    }   \r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./modules/Parallax.js?");

    /***/
  }

  /******/ });