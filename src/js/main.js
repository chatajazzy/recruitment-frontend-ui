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

  /***/"./index.js":
  /*!******************!*\
    !*** ./index.js ***!
    \******************/
  /*! no exports provided */
  /***/function indexJs(module, __webpack_exports__, __webpack_require__) {

    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_CardsSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/CardsSlider */ \"./modules/CardsSlider.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  new _modules_CardsSlider__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

    /***/
  },

  /***/"./modules/CardsSlider.js":
  /*!********************************!*\
    !*** ./modules/CardsSlider.js ***!
    \********************************/
  /*! exports provided: default */
  /***/function modulesCardsSliderJs(module, __webpack_exports__, __webpack_require__) {

    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CardsSlider; });\nclass CardsSlider {\r\n  constructor() {\r\n    this.slidesDefault = document.querySelector('.cards-slider__slide--active');\r\n    this.slides = document.querySelectorAll('.cards-slider__slide');\r\n    this.navItems = document.querySelectorAll('.cards-slider__nav-item');\r\n\r\n    this.init();\r\n  }\r\n  bindEvents() {\r\n    this.slides.forEach(slide => slide.addEventListener('click', this.changeSlidesPosition));\r\n    this.navItems.forEach(navItem => navItem.addEventListener('click', this.changeSlidesPosition()));\r\n  }\r\n  changeSlidesPosition() {\r\n    const selectedSlide   = typeof this.dataset !== 'undefined' ?\r\n          this.dataset.slide : this.slidesDefault.dataset.slide,\r\n          slideWidth      = document.querySelector('.cards-slider__slide').offsetWidth,\r\n          cardWidth       = document.querySelector('.card').offsetWidth,\r\n          slidesContainer = document.querySelector('.cards-slider__slides-list'),\r\n          currentControl  = document.querySelector('.cards-slider__nav-item--active'),\r\n          newControl      = document.querySelector(`.cards-slider__nav-item[data-slide=\"${selectedSlide}\"]`);\r\n\r\n    let offset;\r\n\r\n    const getDesktopOffset = () => {\r\n      if (selectedSlide == 1) {\r\n        offset = ` ${slideWidth / 2 - (cardWidth * 1.5) + 20}px`;\r\n      } \r\n      else if (selectedSlide == 2) {\r\n        offset = `-${cardWidth * 2 + cardWidth * 1.5 - 30}px`;\r\n      } \r\n      else {\r\n        offset = `-${2 * slideWidth - cardWidth / 5 + 20}px`;\r\n      }\r\n\r\n      return offset;\r\n    }\r\n\r\n    const getMobileOffset = () => {\r\n      if (selectedSlide == 1) {\r\n        offset = '20px';\r\n      } \r\n      else if (selectedSlide == 2) {\r\n        offset = `-${(slideWidth - 20)}px`;\r\n      } \r\n      else {\r\n        offset = `-${7.5 * cardWidth}px`;\r\n      }\r\n\r\n      return offset;\r\n    }\r\n\r\n    const updateNav = (currentEl, newEl, prefix) => {\r\n      currentEl.classList.remove(prefix);\r\n      newEl.classList.add(prefix);\r\n    }\r\n\r\n    const updateOffset = (container, offset) => {\r\n      container.style.transform = `translate(${offset})`;\r\n    }\r\n\r\n    offset = window.screen.width < 1320 ? getMobileOffset() : getDesktopOffset();\r\n\r\n    updateNav(currentControl, newControl, 'cards-slider__nav-item--active');\r\n    updateOffset(slidesContainer, offset); \r\n  }\r\n  init() {\r\n    this.bindEvents();\r\n    this.changeSlidesPosition();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/CardsSlider.js?");

    /***/
  }

  /******/ });