/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/_navicon.js":
/*!*********************************!*\
  !*** ./src/scripts/_navicon.js ***!
  \*********************************/
/***/ (function() {

var navMain = document.getElementById('nav-main');
var navicon = document.getElementById('navicon');

// Toggle the navigation menu when the navicon is clicked
navicon.addEventListener('click', function (e) {
  e.preventDefault();
  document.documentElement.classList.toggle('is-nav-open');
});

// Close the navigation when the Escape key is pressed
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.documentElement.classList.remove('is-nav-open');
  }
});

// Close the navigation when clicking outside of the navicon
document.addEventListener('click', function (e) {
  if (document.documentElement.classList.contains('is-nav-open') && !navMain.contains(e.target) && !navicon.contains(e.target)) {
    document.documentElement.classList.remove('is-nav-open');
  }
});

/***/ }),

/***/ "./src/scripts/_scrollto.js":
/*!**********************************!*\
  !*** ./src/scripts/_scrollto.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__);
// Smoothscroll Polyfill

smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default().polyfill();

// Get all anchor tags
var anchorTags = document.querySelectorAll(".__scrollto");
// const anchorTags = document.querySelectorAll('article a[href^="#"]');

// Add click event listener to each anchor tag
anchorTags.forEach(function (anchor) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor tag behavior

    var targetQuery = anchor.hash; // Get the target id from the anchor tag
    console.log(targetQuery);
    var targetElement = document.querySelector(targetQuery); // Find the target element
    if (targetElement) {
      // Scroll smoothly to the target element
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Check if the window has been scrolled
var scrollMin = 100;
window.addEventListener("scroll", function () {
  if (window.scrollY >= scrollMin && !document.documentElement.classList.contains("is-scrolled")) {
    document.documentElement.classList.add("is-scrolled");
  } else if (window.scrollY < scrollMin && document.documentElement.classList.contains("is-scrolled")) {
    document.documentElement.classList.remove("is-scrolled");
  }
}, true);

/***/ }),

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scrollto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_scrollto */ "./src/scripts/_scrollto.js");
/* harmony import */ var _navicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_navicon */ "./src/scripts/_navicon.js");
/* harmony import */ var _navicon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navicon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_dialog */ "./src/scripts/components/_dialog.js");
/* harmony import */ var _components_dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_glightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/_glightbox */ "./src/scripts/components/_glightbox.js");
/* harmony import */ var _components_masonry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/_masonry */ "./src/scripts/components/_masonry.js");
/* harmony import */ var _components_swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/_swiper */ "./src/scripts/components/_swiper.js");






console.log('hello world');

/***/ }),

/***/ "./src/scripts/components/_dialog.js":
/*!*******************************************!*\
  !*** ./src/scripts/components/_dialog.js ***!
  \*******************************************/
/***/ (function() {

var dialogs = document.querySelectorAll('dialog');
dialogs.forEach(function (dialog) {
  var showButton = dialog.nextElementSibling;
  var closeButton = dialog.querySelector('.dialog-close');

  // "Show the dialog" button opens the dialog modally
  if (showButton) {
    showButton.addEventListener('click', function () {
      dialog.showModal();
    });
  }

  // "Close" button closes the dialog
  if (closeButton) {
    closeButton.addEventListener('click', function () {
      dialog.close();
    });
  }

  // Close the dialog when clicking outside of it
  // closedby="any" not working in Safari, so we add a click event listener
  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});

/***/ }),

/***/ "./src/scripts/components/_glightbox.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/_glightbox.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var glightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glightbox */ "./node_modules/glightbox/dist/js/glightbox.min.js");
/* harmony import */ var glightbox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(glightbox__WEBPACK_IMPORTED_MODULE_0__);

var lightbox = glightbox__WEBPACK_IMPORTED_MODULE_0___default()({
  touchNavigation: true,
  autoplayVideos: true,
  openEffect: "fade",
  closeEffect: "fade",
  descPosition: "bottom",
  effect: "fade",
  width: "80rem",
  height: "auto",
  zoomable: false,
  draggable: false
});

/***/ }),

/***/ "./src/scripts/components/_masonry.js":
/*!********************************************!*\
  !*** ./src/scripts/components/_masonry.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! masonry-layout */ "./node_modules/masonry-layout/masonry.js");
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(masonry_layout__WEBPACK_IMPORTED_MODULE_0__);
// $ npm install masonry-layout

// Masonry

var masonryElements = document.querySelectorAll(".__masonry");
if (masonryElements) {
  masonryElements.forEach(function (masonryElement) {
    var msnry = new (masonry_layout__WEBPACK_IMPORTED_MODULE_0___default())(masonryElement, {
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: ".masonry-item",
      // use element for option
      gutter: ".masonry-gutter-sizer",
      columnWidth: ".masonry-sizer"
    });
  });
}

/***/ }),

/***/ "./src/scripts/components/_swiper.js":
/*!*******************************************!*\
  !*** ./src/scripts/components/_swiper.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
// core version + navigation, pagination modules:



// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import '../../styles/blocks/_swiper.css';

// init Swiper:
document.querySelectorAll(".swiper").forEach(function (swiperEl) {
  var swiperParentEl = swiperEl.parentElement;
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](swiperEl, {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
    pagination: {
      el: swiperEl.querySelector(".swiper-pagination"),
      clickable: true
    },
    navigation: {
      prevEl: swiperParentEl.querySelector(".swiper-button-prev"),
      nextEl: swiperParentEl.querySelector(".swiper-button-next")
    }
  });
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/swiper/swiper.css":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/swiper/swiper.css ***!
  \**************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Swiper 14.0.5\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2026 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: July 9, 2026\n */\n\n:root {\n  --swiper-theme-color: #007aff;\n  /*\n  --swiper-preloader-color: var(--swiper-theme-color);\n  --swiper-wrapper-transition-timing-function: initial;\n  */\n}\n:host {\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 1;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n  display: block;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide,\n.swiper-ios .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-horizontal {\n  touch-action: pan-y;\n}\n.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n  display: block;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* 3D Effects */\n.swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n.swiper-3d {\n  perspective: 1200px;\n  .swiper-slide,\n  .swiper-cube-shadow {\n    transform-style: preserve-3d;\n  }\n}\n\n/* CSS Mode */\n.swiper-css-mode {\n  > .swiper-wrapper {\n    overflow: auto;\n    scrollbar-width: none; /* For Firefox */\n    -ms-overflow-style: none; /* For Internet Explorer and Edge */\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n  > .swiper-wrapper > .swiper-slide {\n    scroll-snap-align: start start;\n  }\n  &.swiper-horizontal {\n    > .swiper-wrapper {\n      -ms-scroll-snap-type: x mandatory;\n          scroll-snap-type: x mandatory;\n    }\n    > .swiper-wrapper > .swiper-slide:first-child {\n      -webkit-margin-start: var(--swiper-slides-offset-before);\n              margin-inline-start: var(--swiper-slides-offset-before);\n      scroll-margin-inline-start: var(--swiper-slides-offset-before);\n    }\n    > .swiper-wrapper > .swiper-slide:last-child {\n      -webkit-margin-end: var(--swiper-slides-offset-after);\n              margin-inline-end: var(--swiper-slides-offset-after);\n    }\n  }\n  &.swiper-vertical {\n    > .swiper-wrapper {\n      -ms-scroll-snap-type: y mandatory;\n          scroll-snap-type: y mandatory;\n    }\n    > .swiper-wrapper > .swiper-slide:first-child {\n      -webkit-margin-before: var(--swiper-slides-offset-before);\n              margin-block-start: var(--swiper-slides-offset-before);\n      scroll-margin-block-start: var(--swiper-slides-offset-before);\n    }\n    > .swiper-wrapper > .swiper-slide:last-child {\n      -webkit-margin-after: var(--swiper-slides-offset-after);\n              margin-block-end: var(--swiper-slides-offset-after);\n    }\n  }\n  &.swiper-free-mode {\n    > .swiper-wrapper {\n      -ms-scroll-snap-type: none;\n          scroll-snap-type: none;\n    }\n    > .swiper-wrapper > .swiper-slide {\n      scroll-snap-align: none;\n    }\n  }\n  &.swiper-centered {\n    > .swiper-wrapper::before {\n      content: \"\";\n      flex-shrink: 0;\n      order: 9999;\n    }\n    > .swiper-wrapper > .swiper-slide {\n      scroll-snap-align: center center;\n      scroll-snap-stop: always;\n    }\n  }\n  &.swiper-centered.swiper-horizontal {\n    > .swiper-wrapper > .swiper-slide:first-child {\n      -webkit-margin-start: var(--swiper-centered-offset-before);\n              margin-inline-start: var(--swiper-centered-offset-before);\n    }\n    > .swiper-wrapper::before {\n      height: 100%;\n      min-height: 1px;\n      width: var(--swiper-centered-offset-after);\n    }\n  }\n  &.swiper-centered.swiper-vertical {\n    > .swiper-wrapper > .swiper-slide:first-child {\n      -webkit-margin-before: var(--swiper-centered-offset-before);\n              margin-block-start: var(--swiper-centered-offset-before);\n    }\n    > .swiper-wrapper::before {\n      width: 100%;\n      min-width: 1px;\n      height: var(--swiper-centered-offset-after);\n    }\n  }\n}\n\n/* Slide styles start */\n/* 3D Shadows */\n.swiper-3d {\n  .swiper-slide-shadow,\n  .swiper-slide-shadow-left,\n  .swiper-slide-shadow-right,\n  .swiper-slide-shadow-top,\n  .swiper-slide-shadow-bottom,\n  .swiper-slide-shadow,\n  .swiper-slide-shadow-left,\n  .swiper-slide-shadow-right,\n  .swiper-slide-shadow-top,\n  .swiper-slide-shadow-bottom {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    z-index: 10;\n  }\n  .swiper-slide-shadow {\n    background: rgba(0, 0, 0, 0.15);\n  }\n  .swiper-slide-shadow-left {\n    background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  }\n  .swiper-slide-shadow-right {\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  }\n  .swiper-slide-shadow-top {\n    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  }\n  .swiper-slide-shadow-bottom {\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  }\n}\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n.swiper:not(.swiper-watch-progress),\n.swiper-watch-progress .swiper-slide-visible {\n  .swiper-lazy-preloader {\n    animation: swiper-preloader-spin 1s infinite linear;\n  }\n}\n.swiper-lazy-preloader-white {\n  --swiper-preloader-color: #fff;\n}\n.swiper-lazy-preloader-black {\n  --swiper-preloader-color: #000;\n}\n@keyframes swiper-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/* Slide styles end */\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/desandro-matches-selector/matches-selector.js":
/*!********************************************************************!*\
  !*** ./node_modules/desandro-matches-selector/matches-selector.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));


/***/ }),

/***/ "./node_modules/ev-emitter/ev-emitter.js":
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( typeof window != 'undefined' ? window : this, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));


/***/ }),

/***/ "./node_modules/fizzy-ui-utils/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/fizzy-ui-utils/utils.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! desandro-matches-selector/matches-selector */ "./node_modules/desandro-matches-selector/matches-selector.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( matchesSelector ) {
      return factory( window, matchesSelector );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, matchesSelector ) {

'use strict';

var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));


/***/ }),

/***/ "./node_modules/get-size/get-size.js":
/*!*******************************************!*\
  !*** ./node_modules/get-size/get-size.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});


/***/ }),

/***/ "./node_modules/glightbox/dist/js/glightbox.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/glightbox/dist/js/glightbox.min.js ***!
  \*********************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,n(s.key),s)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function n(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=Date.now();function o(){var e={},t=!0,i=0,n=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],i++);for(var s=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t&&"[object Object]"===Object.prototype.toString.call(i[n])?e[n]=o(!0,e[n],i[n]):e[n]=i[n])};i<n;i++){var l=arguments[i];s(l)}return e}function r(e,t){if((E(e)||e===window||e===document)&&(e=[e]),L(e)||I(e)||(e=[e]),0!=M(e))if(L(e)&&!I(e))for(var i=e.length,n=0;n<i&&!1!==t.call(e[n],e[n],n,e);n++);else if(I(e))for(var s in e)if(P(e,s)&&!1===t.call(e[s],e[s],s,e))break}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=e[l]=e[l]||[],s={all:n,evt:null,found:null};return t&&i&&M(n)>0&&r(n,(function(e,n){if(e.eventName==t&&e.fn.toString()==i.toString())return s.found=!0,s.evt=n,!1})),s}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.onElement,n=t.withCallback,s=t.avoidDuplicate,l=void 0===s||s,o=t.once,h=void 0!==o&&o,d=t.useCapture,c=void 0!==d&&d,u=arguments.length>2?arguments[2]:void 0,g=i||[];function v(e){C(n)&&n.call(u,e,this),h&&v.destroy()}return k(g)&&(g=document.querySelectorAll(g)),v.destroy=function(){r(g,(function(t){var i=a(t,e,v);i.found&&i.all.splice(i.evt,1),t.removeEventListener&&t.removeEventListener(e,v,c)}))},r(g,(function(t){var i=a(t,e,v);(t.addEventListener&&l&&!i.found||!l)&&(t.addEventListener(e,v,c),i.all.push({eventName:e,fn:v}))})),v}function d(e,t){r(t.split(" "),(function(t){return e.classList.add(t)}))}function c(e,t){r(t.split(" "),(function(t){return e.classList.remove(t)}))}function u(e,t){return e.classList.contains(t)}function g(e,t){for(;e!==document.body;){if(!(e=e.parentElement))return!1;if("function"==typeof e.matches?e.matches(t):e.msMatchesSelector(t))return e}}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||""===t)return!1;if("none"===t)return C(i)&&i(),!1;var n=b(),s=t.split(" ");r(s,(function(t){d(e,"g"+t)})),h(n,{onElement:e,avoidDuplicate:!1,once:!0,withCallback:function(e,t){r(s,(function(e){c(t,"g"+e)})),C(i)&&i()}})}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(""===t)return e.style.webkitTransform="",e.style.MozTransform="",e.style.msTransform="",e.style.OTransform="",e.style.transform="",!1;e.style.webkitTransform=t,e.style.MozTransform=t,e.style.msTransform=t,e.style.OTransform=t,e.style.transform=t}function p(e){e.style.display="block"}function m(e){e.style.display="none"}function y(e){var t=document.createDocumentFragment(),i=document.createElement("div");for(i.innerHTML=e;i.firstChild;)t.appendChild(i.firstChild);return t}function x(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}}function b(){var e,t=document.createElement("fakeelement"),i={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}function S(e,t,i,n){if(e())t();else{var s;i||(i=100);var l=setInterval((function(){e()&&(clearInterval(l),s&&clearTimeout(s),t())}),i);n&&(s=setTimeout((function(){clearInterval(l)}),n))}}function w(e,t,i){if(O(e))console.error("Inject assets error");else if(C(t)&&(i=t,t=!1),k(t)&&t in window)C(i)&&i();else{var n;if(-1!==e.indexOf(".css")){if((n=document.querySelectorAll('link[href="'+e+'"]'))&&n.length>0)return void(C(i)&&i());var s=document.getElementsByTagName("head")[0],l=s.querySelectorAll('link[rel="stylesheet"]'),o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.href=e,o.media="all",l?s.insertBefore(o,l[0]):s.appendChild(o),void(C(i)&&i())}if((n=document.querySelectorAll('script[src="'+e+'"]'))&&n.length>0){if(C(i)){if(k(t))return S((function(){return void 0!==window[t]}),(function(){i()})),!1;i()}}else{var r=document.createElement("script");r.type="text/javascript",r.src=e,r.onload=function(){if(C(i)){if(k(t))return S((function(){return void 0!==window[t]}),(function(){i()})),!1;i()}},document.body.appendChild(r)}}}function T(){return"navigator"in window&&window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)}function C(e){return"function"==typeof e}function k(e){return"string"==typeof e}function E(e){return!(!e||!e.nodeType||1!=e.nodeType)}function A(e){return Array.isArray(e)}function L(e){return e&&e.length&&isFinite(e.length)}function I(e){return"object"===s(e)&&null!=e&&!C(e)&&!A(e)}function O(e){return null==e}function P(e,t){return null!==e&&hasOwnProperty.call(e,t)}function M(e){if(I(e)){if(e.keys)return e.keys().length;var t=0;for(var i in e)P(e,i)&&t++;return t}return e.length}function z(e){return!isNaN(parseFloat(e))&&isFinite(e)}function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,t=document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");if(!t.length)return!1;if(1==t.length)return t[0];"string"==typeof e&&(e=parseInt(e));var i=[];r(t,(function(e){i.push(e.getAttribute("data-taborder"))}));var n=Math.max.apply(Math,i.map((function(e){return parseInt(e)}))),s=e<0?1:e+1;s>n&&(s="1");var l=i.filter((function(e){return e>=parseInt(s)})),o=l.sort()[0];return document.querySelector('.gbtn[data-taborder="'.concat(o,'"]'))}function Y(e){if(e.events.hasOwnProperty("keyboard"))return!1;e.events.keyboard=h("keydown",{onElement:window,withCallback:function(t,i){var n=(t=t||window.event).keyCode;if(9==n){var s=document.querySelector(".gbtn.focused");if(!s){var l=!(!document.activeElement||!document.activeElement.nodeName)&&document.activeElement.nodeName.toLocaleLowerCase();if("input"==l||"textarea"==l||"button"==l)return}t.preventDefault();var o=document.querySelectorAll(".gbtn[data-taborder]");if(!o||o.length<=0)return;if(!s){var r=X();return void(r&&(r.focus(),d(r,"focused")))}var a=X(s.getAttribute("data-taborder"));c(s,"focused"),a&&(a.focus(),d(a,"focused"))}39==n&&e.nextSlide(),37==n&&e.prevSlide(),27==n&&e.close()}})}var q=i((function t(i,n){var s=this,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(e(this,t),this.img=i,this.slide=n,this.onclose=l,this.img.setZoomEvents)return!1;this.active=!1,this.zoomedIn=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.img.addEventListener("mousedown",(function(e){return s.dragStart(e)}),!1),this.img.addEventListener("mouseup",(function(e){return s.dragEnd(e)}),!1),this.img.addEventListener("mousemove",(function(e){return s.drag(e)}),!1),this.img.addEventListener("click",(function(e){return s.slide.classList.contains("dragging-nav")?(s.zoomOut(),!1):s.zoomedIn?void(s.zoomedIn&&!s.dragging&&s.zoomOut()):s.zoomIn()}),!1),this.img.setZoomEvents=!0}),[{key:"zoomIn",value:function(){var e=this.widowWidth();if(!(this.zoomedIn||e<=768)){var t=this.img;if(t.setAttribute("data-style",t.getAttribute("style")),t.style.maxWidth=t.naturalWidth+"px",t.style.maxHeight=t.naturalHeight+"px",t.naturalWidth>e){var i=e/2-t.naturalWidth/2;this.setTranslate(this.img.parentNode,i,0)}this.slide.classList.add("zoomed"),this.zoomedIn=!0}}},{key:"zoomOut",value:function(){this.img.parentNode.setAttribute("style",""),this.img.setAttribute("style",this.img.getAttribute("data-style")),this.slide.classList.remove("zoomed"),this.zoomedIn=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.onclose&&"function"==typeof this.onclose&&this.onclose()}},{key:"dragStart",value:function(e){e.preventDefault(),this.zoomedIn?("touchstart"===e.type?(this.initialX=e.touches[0].clientX-this.xOffset,this.initialY=e.touches[0].clientY-this.yOffset):(this.initialX=e.clientX-this.xOffset,this.initialY=e.clientY-this.yOffset),e.target===this.img&&(this.active=!0,this.img.classList.add("dragging"))):this.active=!1}},{key:"dragEnd",value:function(e){var t=this;e.preventDefault(),this.initialX=this.currentX,this.initialY=this.currentY,this.active=!1,setTimeout((function(){t.dragging=!1,t.img.isDragging=!1,t.img.classList.remove("dragging")}),100)}},{key:"drag",value:function(e){this.active&&(e.preventDefault(),"touchmove"===e.type?(this.currentX=e.touches[0].clientX-this.initialX,this.currentY=e.touches[0].clientY-this.initialY):(this.currentX=e.clientX-this.initialX,this.currentY=e.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.img.isDragging=!0,this.dragging=!0,this.setTranslate(this.img,this.currentX,this.currentY))}},{key:"onMove",value:function(e){if(this.zoomedIn){var t=e.clientX-this.img.naturalWidth/2,i=e.clientY-this.img.naturalHeight/2;this.setTranslate(this.img,t,i)}}},{key:"setTranslate",value:function(e,t,i){e.style.transform="translate3d("+t+"px, "+i+"px, 0)"}},{key:"widowWidth",value:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}}]),N=i((function t(){var i=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,t);var s=n.dragEl,l=n.toleranceX,o=void 0===l?40:l,r=n.toleranceY,a=void 0===r?65:r,h=n.slide,d=void 0===h?null:h,c=n.instance,u=void 0===c?null:c;this.el=s,this.active=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.direction=null,this.lastDirection=null,this.toleranceX=o,this.toleranceY=a,this.toleranceReached=!1,this.dragContainer=this.el,this.slide=d,this.instance=u,this.el.addEventListener("mousedown",(function(e){return i.dragStart(e)}),!1),this.el.addEventListener("mouseup",(function(e){return i.dragEnd(e)}),!1),this.el.addEventListener("mousemove",(function(e){return i.drag(e)}),!1)}),[{key:"dragStart",value:function(e){if(this.slide.classList.contains("zoomed"))this.active=!1;else{"touchstart"===e.type?(this.initialX=e.touches[0].clientX-this.xOffset,this.initialY=e.touches[0].clientY-this.yOffset):(this.initialX=e.clientX-this.xOffset,this.initialY=e.clientY-this.yOffset);var t=e.target.nodeName.toLowerCase();e.target.classList.contains("nodrag")||g(e.target,".nodrag")||-1!==["input","select","textarea","button","a"].indexOf(t)?this.active=!1:(e.preventDefault(),(e.target===this.el||"img"!==t&&g(e.target,".gslide-inline"))&&(this.active=!0,this.el.classList.add("dragging"),this.dragContainer=g(e.target,".ginner-container")))}}},{key:"dragEnd",value:function(e){var t=this;e&&e.preventDefault(),this.initialX=0,this.initialY=0,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.active=!1,this.doSlideChange&&(this.instance.preventOutsideClick=!0,"right"==this.doSlideChange&&this.instance.prevSlide(),"left"==this.doSlideChange&&this.instance.nextSlide()),this.doSlideClose&&this.instance.close(),this.toleranceReached||this.setTranslate(this.dragContainer,0,0,!0),setTimeout((function(){t.instance.preventOutsideClick=!1,t.toleranceReached=!1,t.lastDirection=null,t.dragging=!1,t.el.isDragging=!1,t.el.classList.remove("dragging"),t.slide.classList.remove("dragging-nav"),t.dragContainer.style.transform="",t.dragContainer.style.transition=""}),100)}},{key:"drag",value:function(e){if(this.active){e.preventDefault(),this.slide.classList.add("dragging-nav"),"touchmove"===e.type?(this.currentX=e.touches[0].clientX-this.initialX,this.currentY=e.touches[0].clientY-this.initialY):(this.currentX=e.clientX-this.initialX,this.currentY=e.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.el.isDragging=!0,this.dragging=!0,this.doSlideChange=!1,this.doSlideClose=!1;var t=Math.abs(this.currentX),i=Math.abs(this.currentY);if(t>0&&t>=Math.abs(this.currentY)&&(!this.lastDirection||"x"==this.lastDirection)){this.yOffset=0,this.lastDirection="x",this.setTranslate(this.dragContainer,this.currentX,0);var n=this.shouldChange();if(!this.instance.settings.dragAutoSnap&&n&&(this.doSlideChange=n),this.instance.settings.dragAutoSnap&&n)return this.instance.preventOutsideClick=!0,this.toleranceReached=!0,this.active=!1,this.instance.preventOutsideClick=!0,this.dragEnd(null),"right"==n&&this.instance.prevSlide(),void("left"==n&&this.instance.nextSlide())}if(this.toleranceY>0&&i>0&&i>=t&&(!this.lastDirection||"y"==this.lastDirection)){this.xOffset=0,this.lastDirection="y",this.setTranslate(this.dragContainer,0,this.currentY);var s=this.shouldClose();return!this.instance.settings.dragAutoSnap&&s&&(this.doSlideClose=!0),void(this.instance.settings.dragAutoSnap&&s&&this.instance.close())}}}},{key:"shouldChange",value:function(){var e=!1;if(Math.abs(this.currentX)>=this.toleranceX){var t=this.currentX>0?"right":"left";("left"==t&&this.slide!==this.slide.parentNode.lastChild||"right"==t&&this.slide!==this.slide.parentNode.firstChild)&&(e=t)}return e}},{key:"shouldClose",value:function(){var e=!1;return Math.abs(this.currentY)>=this.toleranceY&&(e=!0),e}},{key:"setTranslate",value:function(e,t,i){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.style.transition=n?"all .2s ease":"",e.style.transform="translate3d(".concat(t,"px, ").concat(i,"px, 0)")}}]);function D(e,t,i,n){var s=e.querySelector(".gslide-media"),l=new Image,o="gSlideTitle_"+i,r="gSlideDesc_"+i;l.addEventListener("load",(function(){C(n)&&n()}),!1),l.src=t.href,""!=t.sizes&&""!=t.srcset&&(l.sizes=t.sizes,l.srcset=t.srcset),l.alt="",O(t.alt)||""===t.alt||(l.alt=t.alt),""!==t.title&&l.setAttribute("aria-labelledby",o),""!==t.description&&l.setAttribute("aria-describedby",r),t.hasOwnProperty("_hasCustomWidth")&&t._hasCustomWidth&&(l.style.width=t.width),t.hasOwnProperty("_hasCustomHeight")&&t._hasCustomHeight&&(l.style.height=t.height),s.insertBefore(l,s.firstChild)}function _(e,t,i,n){var s=this,l=e.querySelector(".ginner-container"),o="gvideo"+i,r=e.querySelector(".gslide-media"),a=this.getAllPlayers();d(l,"gvideo-container"),r.insertBefore(y('<div class="gvideo-wrapper"></div>'),r.firstChild);var h=e.querySelector(".gvideo-wrapper");w(this.settings.plyr.css,"Plyr");var c=t.href,u=null==t?void 0:t.videoProvider,g=!1;r.style.maxWidth=t.width,w(this.settings.plyr.js,"Plyr",(function(){if(!u&&c.match(/vimeo\.com\/([0-9]*)/)&&(u="vimeo"),!u&&(c.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||c.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||c.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)||c.match(/(youtube\.com|youtube-nocookie\.com)\/shorts\/([a-zA-Z0-9\-_]+)/))&&(u="youtube"),"local"===u||!u){u="local";var l='<video id="'+o+'" ';l+='style="background:#000; max-width: '.concat(t.width,';" '),l+='preload="metadata" ',l+='x-webkit-airplay="allow" ',l+="playsinline ",l+="controls ",l+='class="gvideo-local">',l+='<source src="'.concat(c,'">'),g=y(l+="</video>")}var r=g||y('<div id="'.concat(o,'" data-plyr-provider="').concat(u,'" data-plyr-embed-id="').concat(c,'"></div>'));d(h,"".concat(u,"-video gvideo")),h.appendChild(r),h.setAttribute("data-id",o),h.setAttribute("data-index",i);var v=P(s.settings.plyr,"config")?s.settings.plyr.config:{},f=new Plyr("#"+o,v);f.on("ready",(function(e){a[o]=e.detail.plyr,C(n)&&n()})),S((function(){return e.querySelector("iframe")&&"true"==e.querySelector("iframe").dataset.ready}),(function(){s.resize(e)})),f.on("enterfullscreen",W),f.on("exitfullscreen",W)}))}function W(e){var t=g(e.target,".gslide-media");"enterfullscreen"===e.type&&d(t,"fullscreen"),"exitfullscreen"===e.type&&c(t,"fullscreen")}function B(e,t,i,n){var s,l=this,o=e.querySelector(".gslide-media"),r=!(!P(t,"href")||!t.href)&&t.href.split("#").pop().trim(),a=!(!P(t,"content")||!t.content)&&t.content;if(a&&(k(a)&&(s=y('<div class="ginlined-content">'.concat(a,"</div>"))),E(a))){"none"==a.style.display&&(a.style.display="block");var c=document.createElement("div");c.className="ginlined-content",c.appendChild(a),s=c}if(r){var u=document.getElementById(r);if(!u)return!1;var g=u.cloneNode(!0);g.style.height=t.height,g.style.maxWidth=t.width,d(g,"ginlined-content"),s=g}if(!s)return console.error("Unable to append inline slide content",t),!1;o.style.height=t.height,o.style.width=t.width,o.appendChild(s),this.events["inlineclose"+r]=h("click",{onElement:o.querySelectorAll(".gtrigger-close"),withCallback:function(e){e.preventDefault(),l.close()}}),C(n)&&n()}function H(e,t,i,n){var s=e.querySelector(".gslide-media"),l=function(e){var t=e.url,i=e.allow,n=e.callback,s=e.appendTo,l=document.createElement("iframe");return l.className="vimeo-video gvideo",l.src=t,l.style.width="100%",l.style.height="100%",i&&l.setAttribute("allow",i),l.onload=function(){l.onload=null,d(l,"node-ready"),C(n)&&n()},s&&s.appendChild(l),l}({url:t.href,callback:n});s.parentNode.style.maxWidth=t.width,s.parentNode.style.height=t.height,s.appendChild(l)}var j=i((function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,t),this.defaults={href:"",sizes:"",srcset:"",title:"",type:"",videoProvider:"",description:"",alt:"",descPosition:"bottom",effect:"",width:"",height:"",content:!1,zoomable:!0,draggable:!0},I(i)&&(this.defaults=o(this.defaults,i))}),[{key:"sourceType",value:function(e){var t=e;return null!==(e=e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/)?"image":e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)||e.match(/(youtube\.com|youtube-nocookie\.com)\/shorts\/([a-zA-Z0-9\-_]+)/)||e.match(/vimeo\.com\/([0-9]*)/)||null!==e.match(/\.(mp4|ogg|webm|mov)/)?"video":null!==e.match(/\.(mp3|wav|wma|aac|ogg)/)?"audio":e.indexOf("#")>-1&&""!==t.split("#").pop().trim()?"inline":e.indexOf("goajax=true")>-1?"ajax":"external"}},{key:"parseConfig",value:function(e,t){var i=this,n=o({descPosition:t.descPosition},this.defaults);if(I(e)&&!E(e)){P(e,"type")||(P(e,"content")&&e.content?e.type="inline":P(e,"href")&&(e.type=this.sourceType(e.href)));var s=o(n,e);return this.setSize(s,t),s}var l="",a=e.getAttribute("data-glightbox"),h=e.nodeName.toLowerCase();if("a"===h&&(l=e.href),"img"===h&&(l=e.src,n.alt=e.alt),n.href=l,r(n,(function(s,l){P(t,l)&&"width"!==l&&(n[l]=t[l]);var o=e.dataset[l];O(o)||(n[l]=i.sanitizeValue(o))})),n.content&&(n.type="inline"),!n.type&&l&&(n.type=this.sourceType(l)),O(a)){if(!n.title&&"a"==h){var d=e.title;O(d)||""===d||(n.title=d)}if(!n.title&&"img"==h){var c=e.alt;O(c)||""===c||(n.title=c)}}else{var u=[];r(n,(function(e,t){u.push(";\\s?"+t)})),u=u.join("\\s?:|"),""!==a.trim()&&r(n,(function(e,t){var s=a,l=new RegExp("s?"+t+"s?:s?(.*?)("+u+"s?:|$)"),o=s.match(l);if(o&&o.length&&o[1]){var r=o[1].trim().replace(/;\s*$/,"");n[t]=i.sanitizeValue(r)}}))}if(n.description&&"."===n.description.substring(0,1)){var g;try{g=document.querySelector(n.description).innerHTML}catch(e){if(!(e instanceof DOMException))throw e}g&&(n.description=g)}if(!n.description){var v=e.querySelector(".glightbox-desc");v&&(n.description=v.innerHTML)}return this.setSize(n,t,e),this.slideConfig=n,n}},{key:"setSize",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n="video"==e.type?this.checkSize(t.videosWidth):this.checkSize(t.width),s=this.checkSize(t.height);return e.width=P(e,"width")&&""!==e.width?this.checkSize(e.width):n,e.height=P(e,"height")&&""!==e.height?this.checkSize(e.height):s,i&&"image"==e.type&&(e._hasCustomWidth=!!i.dataset.width,e._hasCustomHeight=!!i.dataset.height),e}},{key:"checkSize",value:function(e){return z(e)?"".concat(e,"px"):e}},{key:"sanitizeValue",value:function(e){return"true"!==e&&"false"!==e?e:"true"===e}}]),V=i((function t(i,n,s){e(this,t),this.element=i,this.instance=n,this.index=s}),[{key:"setContent",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(u(t,"loaded"))return!1;var n=this.instance.settings,s=this.slideConfig,l=T();C(n.beforeSlideLoad)&&n.beforeSlideLoad({index:this.index,slide:t,player:!1});var o=s.type,r=s.descPosition,a=t.querySelector(".gslide-media"),h=t.querySelector(".gslide-title"),c=t.querySelector(".gslide-desc"),g=t.querySelector(".gdesc-inner"),v=i,f="gSlideTitle_"+this.index,p="gSlideDesc_"+this.index;if(C(n.afterSlideLoad)&&(v=function(){C(i)&&i(),n.afterSlideLoad({index:e.index,slide:t,player:e.instance.getSlidePlayerInstance(e.index)})}),""==s.title&&""==s.description?g&&g.parentNode.parentNode.removeChild(g.parentNode):(h&&""!==s.title?(h.id=f,h.innerHTML=s.title):h.parentNode.removeChild(h),c&&""!==s.description?(c.id=p,l&&n.moreLength>0?(s.smallDescription=this.slideShortDesc(s.description,n.moreLength,n.moreText),c.innerHTML=s.smallDescription,this.descriptionEvents(c,s)):c.innerHTML=s.description):c.parentNode.removeChild(c),d(a.parentNode,"desc-".concat(r)),d(g.parentNode,"description-".concat(r))),d(a,"gslide-".concat(o)),d(t,"loaded"),"video"!==o){if("external"!==o)return"inline"===o?(B.apply(this.instance,[t,s,this.index,v]),void(s.draggable&&new N({dragEl:t.querySelector(".gslide-inline"),toleranceX:n.dragToleranceX,toleranceY:n.dragToleranceY,slide:t,instance:this.instance}))):void("image"!==o?C(v)&&v():D(t,s,this.index,(function(){var i=t.querySelector("img");s.draggable&&new N({dragEl:i,toleranceX:n.dragToleranceX,toleranceY:n.dragToleranceY,slide:t,instance:e.instance}),s.zoomable&&i.naturalWidth>i.offsetWidth&&(d(i,"zoomable"),new q(i,t,(function(){e.instance.resize()}))),C(v)&&v()})));H.apply(this,[t,s,this.index,v])}else _.apply(this.instance,[t,s,this.index,v])}},{key:"slideShortDesc",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=document.createElement("div");n.innerHTML=e;var s=n.innerText,l=i;if((e=s.trim()).length<=t)return e;var o=e.substr(0,t-1);return l?(n=null,o+'... <a href="#" class="desc-more">'+i+"</a>"):o}},{key:"descriptionEvents",value:function(e,t){var i=this,n=e.querySelector(".desc-more");if(!n)return!1;h("click",{onElement:n,withCallback:function(e,n){e.preventDefault();var s=document.body,l=g(n,".gslide-desc");if(!l)return!1;l.innerHTML=t.description,d(s,"gdesc-open");var o=h("click",{onElement:[s,g(l,".gslide-description")],withCallback:function(e,n){"a"!==e.target.nodeName.toLowerCase()&&(c(s,"gdesc-open"),d(s,"gdesc-closed"),l.innerHTML=t.smallDescription,i.descriptionEvents(l,t),setTimeout((function(){c(s,"gdesc-closed")}),400),o.destroy())}})}})}},{key:"create",value:function(){return y(this.instance.settings.slideHTML)}},{key:"getConfig",value:function(){E(this.element)||this.element.hasOwnProperty("draggable")||(this.element.draggable=this.instance.settings.draggable);var e=new j(this.instance.settings.slideExtraAttributes);return this.slideConfig=e.parseConfig(this.element,this.instance.settings),this.slideConfig}}]);function F(e){return Math.sqrt(e.x*e.x+e.y*e.y)}function R(e,t){var i=function(e,t){var i=F(e)*F(t);if(0===i)return 0;var n=function(e,t){return e.x*t.x+e.y*t.y}(e,t)/i;return n>1&&(n=1),Math.acos(n)}(e,t);return function(e,t){return e.x*t.y-t.x*e.y}(e,t)>0&&(i*=-1),180*i/Math.PI}var G=i((function t(i){e(this,t),this.handlers=[],this.el=i}),[{key:"add",value:function(e){this.handlers.push(e)}},{key:"del",value:function(e){e||(this.handlers=[]);for(var t=this.handlers.length;t>=0;t--)this.handlers[t]===e&&this.handlers.splice(t,1)}},{key:"dispatch",value:function(){for(var e=0,t=this.handlers.length;e<t;e++){var i=this.handlers[e];"function"==typeof i&&i.apply(this.el,arguments)}}}]);function Z(e,t){var i=new G(e);return i.add(t),i}var U=i((function t(i,n){e(this,t),this.element="string"==typeof i?document.querySelector(i):i,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var s=function(){};this.rotate=Z(this.element,n.rotate||s),this.touchStart=Z(this.element,n.touchStart||s),this.multipointStart=Z(this.element,n.multipointStart||s),this.multipointEnd=Z(this.element,n.multipointEnd||s),this.pinch=Z(this.element,n.pinch||s),this.swipe=Z(this.element,n.swipe||s),this.tap=Z(this.element,n.tap||s),this.doubleTap=Z(this.element,n.doubleTap||s),this.longTap=Z(this.element,n.longTap||s),this.singleTap=Z(this.element,n.singleTap||s),this.pressMove=Z(this.element,n.pressMove||s),this.twoFingerPressMove=Z(this.element,n.twoFingerPressMove||s),this.touchMove=Z(this.element,n.touchMove||s),this.touchEnd=Z(this.element,n.touchEnd||s),this.touchCancel=Z(this.element,n.touchCancel||s),this.translateContainer=this.element,this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}}),[{key:"start",value:function(e){if(e.touches)if(e.target&&e.target.nodeName&&["a","button","input"].indexOf(e.target.nodeName.toLowerCase())>=0)console.log("ignore drag for this touched element",e.target.nodeName.toLowerCase());else{this.now=Date.now(),this.x1=e.touches[0].pageX,this.y1=e.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(e,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var t=this.preV;if(e.touches.length>1){this._cancelLongTap(),this._cancelSingleTap();var i={x:e.touches[1].pageX-this.x1,y:e.touches[1].pageY-this.y1};t.x=i.x,t.y=i.y,this.pinchStartLen=F(t),this.multipointStart.dispatch(e,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(e,this.element),this._preventTap=!0}.bind(this),750)}}},{key:"move",value:function(e){if(e.touches){var t=this.preV,i=e.touches.length,n=e.touches[0].pageX,s=e.touches[0].pageY;if(this.isDoubleTap=!1,i>1){var l=e.touches[1].pageX,o=e.touches[1].pageY,r={x:e.touches[1].pageX-n,y:e.touches[1].pageY-s};null!==t.x&&(this.pinchStartLen>0&&(e.zoom=F(r)/this.pinchStartLen,this.pinch.dispatch(e,this.element)),e.angle=R(r,t),this.rotate.dispatch(e,this.element)),t.x=r.x,t.y=r.y,null!==this.x2&&null!==this.sx2?(e.deltaX=(n-this.x2+l-this.sx2)/2,e.deltaY=(s-this.y2+o-this.sy2)/2):(e.deltaX=0,e.deltaY=0),this.twoFingerPressMove.dispatch(e,this.element),this.sx2=l,this.sy2=o}else{if(null!==this.x2){e.deltaX=n-this.x2,e.deltaY=s-this.y2;var a=Math.abs(this.x1-this.x2),h=Math.abs(this.y1-this.y2);(a>10||h>10)&&(this._preventTap=!0)}else e.deltaX=0,e.deltaY=0;this.pressMove.dispatch(e,this.element)}this.touchMove.dispatch(e,this.element),this._cancelLongTap(),this.x2=n,this.y2=s,i>1&&e.preventDefault()}}},{key:"end",value:function(e){if(e.changedTouches){this._cancelLongTap();var t=this;e.touches.length<2&&(this.multipointEnd.dispatch(e,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(e.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout((function(){t.swipe.dispatch(e,t.element)}),0)):(this.tapTimeout=setTimeout((function(){t._preventTap||t.tap.dispatch(e,t.element),t.isDoubleTap&&(t.doubleTap.dispatch(e,t.element),t.isDoubleTap=!1)}),0),t.isDoubleTap||(t.singleTapTimeout=setTimeout((function(){t.singleTap.dispatch(e,t.element)}),250))),this.touchEnd.dispatch(e,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}}},{key:"cancelAll",value:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)}},{key:"cancel",value:function(e){this.cancelAll(),this.touchCancel.dispatch(e,this.element)}},{key:"_cancelLongTap",value:function(){clearTimeout(this.longTapTimeout)}},{key:"_cancelSingleTap",value:function(){clearTimeout(this.singleTapTimeout)}},{key:"_swipeDirection",value:function(e,t,i,n){return Math.abs(e-t)>=Math.abs(i-n)?e-t>0?"Left":"Right":i-n>0?"Up":"Down"}},{key:"on",value:function(e,t){this[e]&&this[e].add(t)}},{key:"off",value:function(e,t){this[e]&&this[e].del(t)}},{key:"destroy",value:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}}]);function $(e){var t=function(){var e,t=document.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}(),i=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,n=u(e,"gslide-media")?e:e.querySelector(".gslide-media"),s=g(n,".ginner-container"),l=e.querySelector(".gslide-description");i>769&&(n=s),d(n,"greset"),f(n,"translate3d(0, 0, 0)"),h(t,{onElement:n,once:!0,withCallback:function(e,t){c(n,"greset")}}),n.style.opacity="",l&&(l.style.opacity="")}function J(e){if(e.events.hasOwnProperty("touch"))return!1;var t,i,n,s=x(),l=s.width,o=s.height,r=!1,a=null,h=null,v=null,p=!1,m=1,y=1,b=!1,S=!1,w=null,T=null,C=null,k=null,E=0,A=0,L=!1,I=!1,O={},P={},M=0,z=0,X=document.getElementById("glightbox-slider"),Y=document.querySelector(".goverlay"),q=new U(X,{touchStart:function(t){if(r=!0,(u(t.targetTouches[0].target,"ginner-container")||g(t.targetTouches[0].target,".gslide-desc")||"a"==t.targetTouches[0].target.nodeName.toLowerCase())&&(r=!1),g(t.targetTouches[0].target,".gslide-inline")&&!u(t.targetTouches[0].target.parentNode,"gslide-inline")&&(r=!1),r){if(P=t.targetTouches[0],O.pageX=t.targetTouches[0].pageX,O.pageY=t.targetTouches[0].pageY,M=t.targetTouches[0].clientX,z=t.targetTouches[0].clientY,a=e.activeSlide,h=a.querySelector(".gslide-media"),n=a.querySelector(".gslide-inline"),v=null,u(h,"gslide-image")&&(v=h.querySelector("img")),(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)>769&&(h=a.querySelector(".ginner-container")),c(Y,"greset"),t.pageX>20&&t.pageX<window.innerWidth-20)return;t.preventDefault()}},touchMove:function(s){if(r&&(P=s.targetTouches[0],!b&&!S)){if(n&&n.offsetHeight>o){var a=O.pageX-P.pageX;if(Math.abs(a)<=13)return!1}p=!0;var d,c=s.targetTouches[0].clientX,u=s.targetTouches[0].clientY,g=M-c,m=z-u;if(Math.abs(g)>Math.abs(m)?(L=!1,I=!0):(I=!1,L=!0),t=P.pageX-O.pageX,E=100*t/l,i=P.pageY-O.pageY,A=100*i/o,L&&v&&(d=1-Math.abs(i)/o,Y.style.opacity=d,e.settings.touchFollowAxis&&(E=0)),I&&(d=1-Math.abs(t)/l,h.style.opacity=d,e.settings.touchFollowAxis&&(A=0)),!v)return f(h,"translate3d(".concat(E,"%, 0, 0)"));f(h,"translate3d(".concat(E,"%, ").concat(A,"%, 0)"))}},touchEnd:function(){if(r){if(p=!1,S||b)return C=w,void(k=T);var t=Math.abs(parseInt(A)),i=Math.abs(parseInt(E));if(!(t>29&&v))return t<29&&i<25?(d(Y,"greset"),Y.style.opacity=1,$(h)):void 0;e.close()}},multipointEnd:function(){setTimeout((function(){b=!1}),50)},multipointStart:function(){b=!0,m=y||1},pinch:function(e){if(!v||p)return!1;b=!0,v.scaleX=v.scaleY=m*e.zoom;var t=m*e.zoom;if(S=!0,t<=1)return S=!1,t=1,k=null,C=null,w=null,T=null,void v.setAttribute("style","");t>4.5&&(t=4.5),v.style.transform="scale3d(".concat(t,", ").concat(t,", 1)"),y=t},pressMove:function(e){if(S&&!b){var t=P.pageX-O.pageX,i=P.pageY-O.pageY;C&&(t+=C),k&&(i+=k),w=t,T=i;var n="translate3d(".concat(t,"px, ").concat(i,"px, 0)");y&&(n+=" scale3d(".concat(y,", ").concat(y,", 1)")),f(v,n)}},swipe:function(t){if(!S)if(b)b=!1;else{if("Left"==t.direction){if(e.index==e.elements.length-1)return $(h);e.nextSlide()}if("Right"==t.direction){if(0==e.index)return $(h);e.prevSlide()}}}});e.events.touch=q}var K=T(),Q=null!==T()||void 0!==document.createTouch||"ontouchstart"in window||"onmsgesturechange"in window||navigator.msMaxTouchPoints,ee=document.getElementsByTagName("html")[0],te={selector:".glightbox",elements:null,skin:"clean",theme:"clean",closeButton:!0,startAt:null,autoplayVideos:!0,autofocusVideos:!0,descPosition:"bottom",width:"900px",height:"506px",videosWidth:"960px",beforeSlideChange:null,afterSlideChange:null,beforeSlideLoad:null,afterSlideLoad:null,slideInserted:null,slideRemoved:null,slideExtraAttributes:null,onOpen:null,onClose:null,loop:!1,zoomable:!0,draggable:!0,dragAutoSnap:!1,dragToleranceX:40,dragToleranceY:65,preload:!0,oneSlidePerOpen:!1,touchNavigation:!0,touchFollowAxis:!0,keyboardNavigation:!0,closeOnOutsideClick:!0,plugins:!1,plyr:{css:"https://cdn.plyr.io/3.6.12/plyr.css",js:"https://cdn.plyr.io/3.6.12/plyr.js",config:{ratio:"16:9",fullscreen:{enabled:!0,iosNative:!0},youtube:{noCookie:!0,rel:0,showinfo:0,iv_load_policy:3},vimeo:{byline:!1,portrait:!1,title:!1,transparent:!1}}},openEffect:"zoom",closeEffect:"zoom",slideEffect:"slide",moreText:"See more",moreLength:60,cssEfects:{fade:{in:"fadeIn",out:"fadeOut"},zoom:{in:"zoomIn",out:"zoomOut"},slide:{in:"slideInRight",out:"slideOutLeft"},slideBack:{in:"slideInLeft",out:"slideOutRight"},none:{in:"none",out:"none"}},svg:{close:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',next:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',prev:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'},slideHTML:'<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',lightboxHTML:'<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>'},ie=i((function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,t),this.customOptions=i,this.settings=o(te,i),this.effectsClasses=this.getAnimationClasses(),this.videoPlayers={},this.apiEvents=[],this.fullElementsList=!1}),[{key:"init",value:function(){var e=this,t=this.getSelector();t&&(this.baseEvents=h("click",{onElement:t,withCallback:function(t,i){t.preventDefault(),e.open(i)}})),this.elements=this.getElements()}},{key:"open",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(0===this.elements.length)return!1;this.activeSlide=null,this.prevActiveSlideIndex=null,this.prevActiveSlide=null;var i=z(t)?t:this.settings.startAt;if(E(e)){var n=e.getAttribute("data-gallery");n&&(this.fullElementsList=this.elements,this.elements=this.getGalleryElements(this.elements,n)),O(i)&&(i=this.getElementIndex(e))<0&&(i=0)}z(i)||(i=0),this.build(),v(this.overlay,"none"===this.settings.openEffect?"none":this.settings.cssEfects.fade.in);var s=document.body,l=window.innerWidth-document.documentElement.clientWidth;if(l>0){var o=document.createElement("style");o.type="text/css",o.className="gcss-styles",o.innerText=".gscrollbar-fixer {margin-right: ".concat(l,"px}"),document.head.appendChild(o),d(s,"gscrollbar-fixer")}d(s,"glightbox-open"),d(ee,"glightbox-open"),K&&(d(document.body,"glightbox-mobile"),this.settings.slideEffect="slide"),this.showSlide(i,!0),1===this.elements.length?(d(this.prevButton,"glightbox-button-hidden"),d(this.nextButton,"glightbox-button-hidden")):(c(this.prevButton,"glightbox-button-hidden"),c(this.nextButton,"glightbox-button-hidden")),this.lightboxOpen=!0,this.trigger("open"),C(this.settings.onOpen)&&this.settings.onOpen(),Q&&this.settings.touchNavigation&&J(this),this.settings.keyboardNavigation&&Y(this)}},{key:"openAt",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.open(null,e)}},{key:"showSlide",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];p(this.loader),this.index=parseInt(t);var n=this.slidesContainer.querySelector(".current");n&&c(n,"current"),this.slideAnimateOut();var s=this.slidesContainer.querySelectorAll(".gslide")[t];if(u(s,"loaded"))this.slideAnimateIn(s,i),m(this.loader);else{p(this.loader);var l=this.elements[t],o={index:this.index,slide:s,slideNode:s,slideConfig:l.slideConfig,slideIndex:this.index,trigger:l.node,player:null};this.trigger("slide_before_load",o),l.instance.setContent(s,(function(){m(e.loader),e.resize(),e.slideAnimateIn(s,i),e.trigger("slide_after_load",o)}))}this.slideDescription=s.querySelector(".gslide-description"),this.slideDescriptionContained=this.slideDescription&&u(this.slideDescription.parentNode,"gslide-media"),this.settings.preload&&(this.preloadSlide(t+1),this.preloadSlide(t-1)),this.updateNavigationClasses(),this.activeSlide=s}},{key:"preloadSlide",value:function(e){var t=this;if(e<0||e>this.elements.length-1)return!1;if(O(this.elements[e]))return!1;var i=this.slidesContainer.querySelectorAll(".gslide")[e];if(u(i,"loaded"))return!1;var n=this.elements[e],s=n.type,l={index:e,slide:i,slideNode:i,slideConfig:n.slideConfig,slideIndex:e,trigger:n.node,player:null};this.trigger("slide_before_load",l),"video"===s||"external"===s?setTimeout((function(){n.instance.setContent(i,(function(){t.trigger("slide_after_load",l)}))}),200):n.instance.setContent(i,(function(){t.trigger("slide_after_load",l)}))}},{key:"prevSlide",value:function(){this.goToSlide(this.index-1)}},{key:"nextSlide",value:function(){this.goToSlide(this.index+1)}},{key:"goToSlide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.prevActiveSlide=this.activeSlide,this.prevActiveSlideIndex=this.index,!this.loop()&&(e<0||e>this.elements.length-1))return!1;e<0?e=this.elements.length-1:e>=this.elements.length&&(e=0),this.showSlide(e)}},{key:"insertSlide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;t<0&&(t=this.elements.length);var i=new V(e,this,t),n=i.getConfig(),s=o({},n),l=i.create(),r=this.elements.length-1;s.index=t,s.node=!1,s.instance=i,s.slideConfig=n,this.elements.splice(t,0,s);var a=null,h=null;if(this.slidesContainer){if(t>r)this.slidesContainer.appendChild(l);else{var d=this.slidesContainer.querySelectorAll(".gslide")[t];this.slidesContainer.insertBefore(l,d)}(this.settings.preload&&0==this.index&&0==t||this.index-1==t||this.index+1==t)&&this.preloadSlide(t),0===this.index&&0===t&&(this.index=1),this.updateNavigationClasses(),a=this.slidesContainer.querySelectorAll(".gslide")[t],h=this.getSlidePlayerInstance(t),s.slideNode=a}this.trigger("slide_inserted",{index:t,slide:a,slideNode:a,slideConfig:n,slideIndex:t,trigger:null,player:h}),C(this.settings.slideInserted)&&this.settings.slideInserted({index:t,slide:a,player:h})}},{key:"removeSlide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;if(e<0||e>this.elements.length-1)return!1;var t=this.slidesContainer&&this.slidesContainer.querySelectorAll(".gslide")[e];t&&(this.getActiveSlideIndex()==e&&(e==this.elements.length-1?this.prevSlide():this.nextSlide()),t.parentNode.removeChild(t)),this.elements.splice(e,1),this.trigger("slide_removed",e),C(this.settings.slideRemoved)&&this.settings.slideRemoved(e)}},{key:"slideAnimateIn",value:function(e,t){var i=this,n=e.querySelector(".gslide-media"),s=e.querySelector(".gslide-description"),l={index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,slideNode:this.prevActiveSlide,slideIndex:this.prevActiveSlide,slideConfig:O(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].slideConfig,trigger:O(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].node,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},o={index:this.index,slide:this.activeSlide,slideNode:this.activeSlide,slideConfig:this.elements[this.index].slideConfig,slideIndex:this.index,trigger:this.elements[this.index].node,player:this.getSlidePlayerInstance(this.index)};if(n.offsetWidth>0&&s&&(m(s),s.style.display=""),c(e,this.effectsClasses),t)v(e,this.settings.cssEfects[this.settings.openEffect].in,(function(){i.settings.autoplayVideos&&i.slidePlayerPlay(e),i.trigger("slide_changed",{prev:l,current:o}),C(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[l,o])}));else{var r=this.settings.slideEffect,a="none"!==r?this.settings.cssEfects[r].in:r;this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(a=this.settings.cssEfects.slideBack.in),v(e,a,(function(){i.settings.autoplayVideos&&i.slidePlayerPlay(e),i.trigger("slide_changed",{prev:l,current:o}),C(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[l,o])}))}setTimeout((function(){i.resize(e)}),100),d(e,"current")}},{key:"slideAnimateOut",value:function(){if(!this.prevActiveSlide)return!1;var e=this.prevActiveSlide;c(e,this.effectsClasses),d(e,"prev");var t=this.settings.slideEffect,i="none"!==t?this.settings.cssEfects[t].out:t;this.slidePlayerPause(e),this.trigger("slide_before_change",{prev:{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,slideNode:this.prevActiveSlide,slideIndex:this.prevActiveSlideIndex,slideConfig:O(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].slideConfig,trigger:O(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].node,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},current:{index:this.index,slide:this.activeSlide,slideNode:this.activeSlide,slideIndex:this.index,slideConfig:this.elements[this.index].slideConfig,trigger:this.elements[this.index].node,player:this.getSlidePlayerInstance(this.index)}}),C(this.settings.beforeSlideChange)&&this.settings.beforeSlideChange.apply(this,[{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},{index:this.index,slide:this.activeSlide,player:this.getSlidePlayerInstance(this.index)}]),this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(i=this.settings.cssEfects.slideBack.out),v(e,i,(function(){var t=e.querySelector(".ginner-container"),i=e.querySelector(".gslide-media"),n=e.querySelector(".gslide-description");t.style.transform="",i.style.transform="",c(i,"greset"),i.style.opacity="",n&&(n.style.opacity=""),c(e,"prev")}))}},{key:"getAllPlayers",value:function(){return this.videoPlayers}},{key:"getSlidePlayerInstance",value:function(e){var t="gvideo"+e,i=this.getAllPlayers();return!(!P(i,t)||!i[t])&&i[t]}},{key:"stopSlideVideo",value:function(e){if(E(e)){var t=e.querySelector(".gvideo-wrapper");t&&(e=t.getAttribute("data-index"))}console.log("stopSlideVideo is deprecated, use slidePlayerPause");var i=this.getSlidePlayerInstance(e);i&&i.playing&&i.pause()}},{key:"slidePlayerPause",value:function(e){if(E(e)){var t=e.querySelector(".gvideo-wrapper");t&&(e=t.getAttribute("data-index"))}var i=this.getSlidePlayerInstance(e);i&&i.playing&&i.pause()}},{key:"playSlideVideo",value:function(e){if(E(e)){var t=e.querySelector(".gvideo-wrapper");t&&(e=t.getAttribute("data-index"))}console.log("playSlideVideo is deprecated, use slidePlayerPlay");var i=this.getSlidePlayerInstance(e);i&&!i.playing&&i.play()}},{key:"slidePlayerPlay",value:function(e){var t;if(!K||null!==(t=this.settings.plyr.config)&&void 0!==t&&t.muted){if(E(e)){var i=e.querySelector(".gvideo-wrapper");i&&(e=i.getAttribute("data-index"))}var n=this.getSlidePlayerInstance(e);n&&!n.playing&&(n.play(),this.settings.autofocusVideos&&n.elements.container.focus())}}},{key:"setElements",value:function(e){var t=this;this.settings.elements=!1;var i=[];e&&e.length&&r(e,(function(e,n){var s=new V(e,t,n),l=s.getConfig(),r=o({},l);r.slideConfig=l,r.instance=s,r.index=n,i.push(r)})),this.elements=i,this.lightboxOpen&&(this.slidesContainer.innerHTML="",this.elements.length&&(r(this.elements,(function(){var e=y(t.settings.slideHTML);t.slidesContainer.appendChild(e)})),this.showSlide(0,!0)))}},{key:"getElementIndex",value:function(e){var t=!1;return r(this.elements,(function(i,n){if(P(i,"node")&&i.node==e)return t=n,!0})),t}},{key:"getElements",value:function(){var e=this,t=[];this.elements=this.elements?this.elements:[],!O(this.settings.elements)&&A(this.settings.elements)&&this.settings.elements.length&&r(this.settings.elements,(function(i,n){var s=new V(i,e,n),l=s.getConfig(),r=o({},l);r.node=!1,r.index=n,r.instance=s,r.slideConfig=l,t.push(r)}));var i=!1;return this.getSelector()&&(i=document.querySelectorAll(this.getSelector())),i?(r(i,(function(i,n){var s=new V(i,e,n),l=s.getConfig(),r=o({},l);r.node=i,r.index=n,r.instance=s,r.slideConfig=l,r.gallery=i.getAttribute("data-gallery"),t.push(r)})),t):t}},{key:"getGalleryElements",value:function(e,t){return e.filter((function(e){return e.gallery==t}))}},{key:"getSelector",value:function(){return!this.settings.elements&&(this.settings.selector&&"data-"==this.settings.selector.substring(0,5)?"*[".concat(this.settings.selector,"]"):this.settings.selector)}},{key:"getActiveSlide",value:function(){return this.slidesContainer.querySelectorAll(".gslide")[this.index]}},{key:"getActiveSlideIndex",value:function(){return this.index}},{key:"getAnimationClasses",value:function(){var e=[];for(var t in this.settings.cssEfects)if(this.settings.cssEfects.hasOwnProperty(t)){var i=this.settings.cssEfects[t];e.push("g".concat(i.in)),e.push("g".concat(i.out))}return e.join(" ")}},{key:"build",value:function(){var e=this;if(this.built)return!1;var t=document.body.childNodes,i=[];r(t,(function(e){e.parentNode==document.body&&"#"!==e.nodeName.charAt(0)&&e.hasAttribute&&!e.hasAttribute("aria-hidden")&&(i.push(e),e.setAttribute("aria-hidden","true"))}));var n=P(this.settings.svg,"next")?this.settings.svg.next:"",s=P(this.settings.svg,"prev")?this.settings.svg.prev:"",l=P(this.settings.svg,"close")?this.settings.svg.close:"",o=this.settings.lightboxHTML;o=y(o=(o=(o=o.replace(/{nextSVG}/g,n)).replace(/{prevSVG}/g,s)).replace(/{closeSVG}/g,l)),document.body.appendChild(o);var a=document.getElementById("glightbox-body");this.modal=a;var c=a.querySelector(".gclose");this.prevButton=a.querySelector(".gprev"),this.nextButton=a.querySelector(".gnext"),this.overlay=a.querySelector(".goverlay"),this.loader=a.querySelector(".gloader"),this.slidesContainer=document.getElementById("glightbox-slider"),this.bodyHiddenChildElms=i,this.events={},d(this.modal,"glightbox-"+this.settings.skin),this.settings.closeButton&&c&&(this.events.close=h("click",{onElement:c,withCallback:function(t,i){t.preventDefault(),e.close()}})),c&&!this.settings.closeButton&&c.parentNode.removeChild(c),this.nextButton&&(this.events.next=h("click",{onElement:this.nextButton,withCallback:function(t,i){t.preventDefault(),e.nextSlide()}})),this.prevButton&&(this.events.prev=h("click",{onElement:this.prevButton,withCallback:function(t,i){t.preventDefault(),e.prevSlide()}})),this.settings.closeOnOutsideClick&&(this.events.outClose=h("click",{onElement:a,withCallback:function(t,i){e.preventOutsideClick||u(document.body,"glightbox-mobile")||g(t.target,".ginner-container")||g(t.target,".gbtn")||u(t.target,"gnext")||u(t.target,"gprev")||e.close()}})),r(this.elements,(function(t,i){e.slidesContainer.appendChild(t.instance.create()),t.slideNode=e.slidesContainer.querySelectorAll(".gslide")[i]})),Q&&d(document.body,"glightbox-touch"),this.events.resize=h("resize",{onElement:window,withCallback:function(){e.resize()}}),this.built=!0}},{key:"resize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if((e=e||this.activeSlide)&&!u(e,"zoomed")){var t=x(),i=e.querySelector(".gvideo-wrapper"),n=e.querySelector(".gslide-image"),s=this.slideDescription,l=t.width,o=t.height;if(l<=768?d(document.body,"glightbox-mobile"):c(document.body,"glightbox-mobile"),i||n){var r=!1;if(s&&(u(s,"description-bottom")||u(s,"description-top"))&&!u(s,"gabsolute")&&(r=!0),n)if(l<=768)n.querySelector("img");else if(r){var a,h,g=s.offsetHeight,v=n.querySelector("img"),f=null===(a=this.elements[this.index])||void 0===a?void 0:a.node,p="100vh";f&&(p=null!==(h=f.getAttribute("data-height"))&&void 0!==h?h:p),v.setAttribute("style","max-height: calc(".concat(p," - ").concat(g,"px)")),s.setAttribute("style","max-width: ".concat(v.offsetWidth,"px;"))}if(i){var m=P(this.settings.plyr.config,"ratio")?this.settings.plyr.config.ratio:"";if(!m){var y=i.clientWidth,b=i.clientHeight,S=y/b;m="".concat(y/S,":").concat(b/S)}var w=m.split(":"),T=this.settings.videosWidth,C=this.settings.videosWidth,k=(C=z(T)||-1!==T.indexOf("px")?parseInt(T):-1!==T.indexOf("vw")?l*parseInt(T)/100:-1!==T.indexOf("vh")?o*parseInt(T)/100:-1!==T.indexOf("%")?l*parseInt(T)/100:parseInt(i.clientWidth))/(parseInt(w[0])/parseInt(w[1]));if(k=Math.floor(k),r&&(o-=s.offsetHeight),C>l||k>o||o<k&&l>C){var E=i.offsetWidth,A=i.offsetHeight,L=o/A,I={width:E*L,height:A*L};i.parentNode.setAttribute("style","max-width: ".concat(I.width,"px")),r&&s.setAttribute("style","max-width: ".concat(I.width,"px;"))}else i.parentNode.style.maxWidth="".concat(T),r&&s.setAttribute("style","max-width: ".concat(T,";"))}}}}},{key:"reload",value:function(){this.init()}},{key:"updateNavigationClasses",value:function(){var e=this.loop();c(this.nextButton,"disabled"),c(this.prevButton,"disabled"),0==this.index&&this.elements.length-1==0?(d(this.prevButton,"disabled"),d(this.nextButton,"disabled")):0!==this.index||e?this.index!==this.elements.length-1||e||d(this.nextButton,"disabled"):d(this.prevButton,"disabled")}},{key:"loop",value:function(){var e=P(this.settings,"loopAtEnd")?this.settings.loopAtEnd:null;return e=P(this.settings,"loop")?this.settings.loop:e,e}},{key:"close",value:function(){var e=this;if(!this.lightboxOpen){if(this.events){for(var t in this.events)this.events.hasOwnProperty(t)&&this.events[t].destroy();this.events=null}return!1}if(this.closing)return!1;this.closing=!0,this.slidePlayerPause(this.activeSlide),this.fullElementsList&&(this.elements=this.fullElementsList),this.bodyHiddenChildElms.length&&r(this.bodyHiddenChildElms,(function(e){e.removeAttribute("aria-hidden")})),d(this.modal,"glightbox-closing"),v(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.out),v(this.activeSlide,this.settings.cssEfects[this.settings.closeEffect].out,(function(){if(e.activeSlide=null,e.prevActiveSlideIndex=null,e.prevActiveSlide=null,e.built=!1,e.events){for(var t in e.events)e.events.hasOwnProperty(t)&&e.events[t].destroy();e.events=null}var i=document.body;c(ee,"glightbox-open"),c(i,"glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"),e.modal.parentNode.removeChild(e.modal),e.trigger("close"),C(e.settings.onClose)&&e.settings.onClose();var n=document.querySelector(".gcss-styles");n&&n.parentNode.removeChild(n),e.lightboxOpen=!1,e.closing=null}))}},{key:"destroy",value:function(){this.close(),this.clearAllEvents(),this.baseEvents&&this.baseEvents.destroy()}},{key:"on",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||!C(t))throw new TypeError("Event name and callback must be defined");this.apiEvents.push({evt:e,once:i,callback:t})}},{key:"once",value:function(e,t){this.on(e,t,!0)}},{key:"trigger",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[];r(this.apiEvents,(function(t,s){var l=t.evt,o=t.once,r=t.callback;l==e&&(r(i),o&&n.push(s))})),n.length&&r(n,(function(e){return t.apiEvents.splice(e,1)}))}},{key:"clearAllEvents",value:function(){this.apiEvents.splice(0,this.apiEvents.length)}},{key:"version",value:function(){return"3.3.1"}}]);return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new ie(e);return t.init(),t}}));

/***/ }),

/***/ "./node_modules/masonry-layout/masonry.js":
/*!************************************************!*\
  !*** ./node_modules/masonry-layout/masonry.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! outlayer/outlayer */ "./node_modules/outlayer/outlayer.js"),
        __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( Outlayer, getSize ) {

'use strict';

// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  var proto = Masonry.prototype;

  proto._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
    this.horizontalColIndex = 0;
  };

  proto.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  proto.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );
    // use horizontal or top column position
    var colPosMethod = this.options.horizontalOrder ?
      '_getHorizontalColPosition' : '_getTopColPosition';
    var colPosition = this[ colPosMethod ]( colSpan, item );
    // position the brick
    var position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y
    };
    // apply setHeight to necessary columns
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for ( var i = colPosition.col; i < setMax; i++ ) {
      this.colYs[i] = setHeight;
    }

    return position;
  };

  proto._getTopColPosition = function( colSpan ) {
    var colGroup = this._getTopColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );

    return {
      col: colGroup.indexOf( minimumY ),
      y: minimumY,
    };
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  proto._getTopColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      colGroup[i] = this._getColGroupY( i, colSpan );
    }
    return colGroup;
  };

  proto._getColGroupY = function( col, colSpan ) {
    if ( colSpan < 2 ) {
      return this.colYs[ col ];
    }
    // make an array of colY values for that one group
    var groupColYs = this.colYs.slice( col, col + colSpan );
    // and get the max value of the array
    return Math.max.apply( Math, groupColYs );
  };

  // get column position based on horizontal index. #873
  proto._getHorizontalColPosition = function( colSpan, item ) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    // shift to next row if item can't fit on current row
    col = isOver ? 0 : col;
    // don't let zero-size items take up space
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

    return {
      col: col,
      y: this._getColGroupY( col, colSpan ),
    };
  };

  proto._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  proto._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  proto._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  proto.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));


/***/ }),

/***/ "./src/styles/app.css":
/*!****************************!*\
  !*** ./src/styles/app.css ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/outlayer/item.js":
/*!***************************************!*\
  !*** ./node_modules/outlayer/item.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js"),
        __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  var x = parseFloat( xValue );
  var y = parseFloat( yValue );
  // convert percent to pixels
  var layoutSize = this.layout.size;
  if ( xValue.indexOf('%') != -1 ) {
    x = ( x / 100 ) * layoutSize.width;
  }
  if ( yValue.indexOf('%') != -1 ) {
    y = ( y / 100 ) * layoutSize.height;
  }
  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var didNotMove = x == this.position.x && y == this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseFloat( x );
  this.position.y = parseFloat( y );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));


/***/ }),

/***/ "./node_modules/outlayer/outlayer.js":
/*!*******************************************!*\
  !*** ./node_modules/outlayer/outlayer.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js"),
        __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js"),
        __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"),
        __webpack_require__(/*! ./item */ "./node_modules/outlayer/item.js")
      ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));


/***/ }),

/***/ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/smoothscroll-polyfill/dist/smoothscroll.js ***!
  \*****************************************************************/
/***/ (function(module) {

/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      while (el !== d.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
      }

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (true) {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {}

}());


/***/ }),

/***/ "./node_modules/swiper/swiper.css":
/*!****************************************!*\
  !*** ./node_modules/swiper/swiper.css ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./swiper.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/swiper/swiper.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_swiper_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_swiper_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/swiper/modules/a11y.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/a11y.mjs ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ A11y; }
/* harmony export */ });
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



const isVirtualEnabled = (swiper) => !!swiper.virtual && !!swiper.params.virtual?.enabled;
const A11y = ({ swiper, extendParams, on }) => {
    extendParams({
        a11y: {
            enabled: true,
            notificationClass: 'swiper-notification',
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            slideLabelMessage: '{{index}} / {{slidesLength}}',
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            containerRole: null,
            itemRoleDescriptionMessage: null,
            slideRole: 'group',
            id: null,
            scrollOnFocus: true,
            wrapperLiveRegion: true,
        },
    });
    swiper.a11y = {
        clicked: false,
    };
    let liveRegion = null;
    let preventFocusHandler = false;
    let focusTargetSlideEl;
    let visibilityChangedTimestamp = new Date().getTime();
    function getParams() {
        return swiper.params.a11y;
    }
    function notify(message) {
        const notification = liveRegion;
        if (!notification || !message)
            return;
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)(notification, message);
    }
    function getRandomNumber(size = 16) {
        const randomChar = () => Math.round(16 * Math.random()).toString(16);
        return 'x'.repeat(size).replace(/x/g, randomChar);
    }
    function makeElFocusable(el) {
        const els = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(el);
        els.forEach((subEl) => {
            subEl.setAttribute('tabIndex', '0');
        });
    }
    function makeElNotFocusable(el) {
        const els = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(el);
        els.forEach((subEl) => {
            subEl.setAttribute('tabIndex', '-1');
        });
    }
    function addElRole(el, role) {
        const els = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(el);
        els.forEach((subEl) => {
            subEl.setAttribute('role', role);
        });
    }
    function addElRoleDescription(el, description) {
        const els = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(el);
        els.forEach((subEl) => {
            subEl.setAttribute('aria-roledescription', description);
        });
    }
    function addElLabel(el, label) {
        const els = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(el);
        els.forEach((subEl) => {
            subEl.setAttribute('aria-label', label);
        });
    }
    function addElId(el, id) {
        const els = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(el);
        els.forEach((subEl) => {
            subEl.setAttribute('id', id);
        });
    }
    function addElLive(el, live) {
        const els = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(el);
        els.forEach((subEl) => {
            subEl.setAttribute('aria-live', live);
        });
    }
    function disableEl(el) {
        const els = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(el);
        els.forEach((subEl) => {
            subEl.setAttribute('aria-disabled', 'true');
        });
    }
    function enableEl(el) {
        const els = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(el);
        els.forEach((subEl) => {
            subEl.removeAttribute('aria-disabled');
        });
    }
    function onEnterOrSpaceKey(e) {
        if (e.keyCode !== 13 && e.keyCode !== 32)
            return;
        const params = getParams();
        const paginationParams = swiper.params.pagination;
        const targetEl = e.target;
        if (swiper.pagination &&
            swiper.pagination.el &&
            (targetEl === swiper.pagination.el || swiper.pagination.el.contains(targetEl))) {
            if (!targetEl.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(paginationParams?.bulletClass)))
                return;
        }
        if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {
            const prevEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(swiper.navigation.prevEl);
            const nextEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(swiper.navigation.nextEl);
            if (nextEls.includes(targetEl)) {
                if (!(swiper.isEnd && !swiper.params.loop)) {
                    swiper.slideNext();
                }
                if (swiper.isEnd) {
                    notify(params.lastSlideMessage);
                }
                else {
                    notify(params.nextSlideMessage);
                }
            }
            if (prevEls.includes(targetEl)) {
                if (!(swiper.isBeginning && !swiper.params.loop)) {
                    swiper.slidePrev();
                }
                if (swiper.isBeginning) {
                    notify(params.firstSlideMessage);
                }
                else {
                    notify(params.prevSlideMessage);
                }
            }
        }
        if (swiper.pagination && targetEl.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(paginationParams?.bulletClass))) {
            targetEl.click();
        }
    }
    function updateNavigation() {
        if (swiper.params.loop || swiper.params.rewind || !swiper.navigation)
            return;
        const { nextEl, prevEl } = swiper.navigation;
        if (prevEl) {
            if (swiper.isBeginning) {
                disableEl(prevEl);
                makeElNotFocusable(prevEl);
            }
            else {
                enableEl(prevEl);
                makeElFocusable(prevEl);
            }
        }
        if (nextEl) {
            if (swiper.isEnd) {
                disableEl(nextEl);
                makeElNotFocusable(nextEl);
            }
            else {
                enableEl(nextEl);
                makeElFocusable(nextEl);
            }
        }
    }
    function hasPagination() {
        return !!(swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length);
    }
    function hasClickablePagination() {
        const paginationParams = swiper.params.pagination;
        return hasPagination() && !!paginationParams?.clickable;
    }
    function updatePagination() {
        const params = getParams();
        if (!hasPagination())
            return;
        const paginationParams = swiper.params.pagination;
        swiper.pagination.bullets.forEach((bulletEl) => {
            if (paginationParams.clickable) {
                makeElFocusable(bulletEl);
                if (!paginationParams.renderBullet) {
                    addElRole(bulletEl, 'button');
                    addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, String(((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(bulletEl) ?? 0) + 1)));
                }
            }
            if (bulletEl.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(paginationParams.bulletActiveClass))) {
                bulletEl.setAttribute('aria-current', 'true');
            }
            else {
                bulletEl.removeAttribute('aria-current');
            }
        });
    }
    const initNavEl = (el, _wrapperId, message) => {
        makeElFocusable(el);
        if (el.tagName !== 'BUTTON') {
            addElRole(el, 'button');
            el.addEventListener('keydown', onEnterOrSpaceKey);
        }
        addElLabel(el, message);
    };
    const handlePointerDown = (e) => {
        if (focusTargetSlideEl &&
            focusTargetSlideEl !== e.target &&
            !focusTargetSlideEl.contains(e.target)) {
            preventFocusHandler = true;
        }
        swiper.a11y.clicked = true;
    };
    const handlePointerUp = () => {
        preventFocusHandler = false;
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                if (!swiper.destroyed) {
                    swiper.a11y.clicked = false;
                }
            });
        });
    };
    const onVisibilityChange = (_e) => {
        visibilityChangedTimestamp = new Date().getTime();
    };
    const handleFocus = (e) => {
        const params = getParams();
        if (swiper.a11y.clicked || !params.scrollOnFocus)
            return;
        if (new Date().getTime() - visibilityChangedTimestamp < 100)
            return;
        const target = e.target;
        const slideEl = target.closest(`.${swiper.params.slideClass}, swiper-slide`);
        if (!slideEl || !swiper.slides.includes(slideEl))
            return;
        focusTargetSlideEl = slideEl;
        const isVirtual = isVirtualEnabled(swiper);
        const isActive = (isVirtual
            ? parseInt(slideEl.getAttribute('data-swiper-slide-index') || '0', 10)
            : swiper.slides.indexOf(slideEl)) === swiper.activeIndex;
        const isVisible = swiper.params.watchSlidesProgress &&
            swiper.visibleSlides &&
            swiper.visibleSlides.includes(slideEl);
        if (isActive || isVisible)
            return;
        const sourceCapabilities = e.sourceCapabilities;
        if (sourceCapabilities && sourceCapabilities.firesTouchEvents)
            return;
        if (swiper.isHorizontal()) {
            swiper.el.scrollLeft = 0;
        }
        else {
            swiper.el.scrollTop = 0;
        }
        requestAnimationFrame(() => {
            if (preventFocusHandler)
                return;
            if (swiper.params.loop) {
                swiper.slideToLoop(swiper.getSlideIndexWhenGrid(parseInt(slideEl.getAttribute('data-swiper-slide-index') || '0', 10)), 0);
            }
            else if (isVirtual) {
                swiper.slideTo(swiper.getSlideIndexWhenGrid(parseInt(slideEl.getAttribute('data-swiper-slide-index') || '0', 10)), 0);
            }
            else {
                swiper.slideTo(swiper.getSlideIndexWhenGrid(swiper.slides.indexOf(slideEl)), 0);
            }
            preventFocusHandler = false;
        });
    };
    const initSlides = () => {
        const params = getParams();
        if (params.itemRoleDescriptionMessage) {
            addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
        }
        if (params.slideRole) {
            addElRole(swiper.slides, params.slideRole);
        }
        const slidesLength = swiper.slides.length;
        const slideLabelMessage = params.slideLabelMessage;
        if (slideLabelMessage) {
            swiper.slides.forEach((slideEl, index) => {
                const slideIndex = swiper.params.loop
                    ? parseInt(slideEl.getAttribute('data-swiper-slide-index') || '0', 10)
                    : index;
                const ariaLabelMessage = slideLabelMessage
                    .replace(/\{\{index\}\}/, String(slideIndex + 1))
                    .replace(/\{\{slidesLength\}\}/, String(slidesLength));
                addElLabel(slideEl, ariaLabelMessage);
            });
        }
    };
    const init = () => {
        const params = getParams();
        if (liveRegion)
            swiper.el.append(liveRegion);
        // Container
        const containerEl = swiper.el;
        if (params.containerRoleDescriptionMessage) {
            addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
        }
        if (params.containerMessage) {
            addElLabel(containerEl, params.containerMessage);
        }
        if (params.containerRole) {
            addElRole(containerEl, params.containerRole);
        }
        // Wrapper
        const wrapperEl = swiper.wrapperEl;
        const wrapperId = String(params.id || wrapperEl.getAttribute('id') || `swiper-wrapper-${getRandomNumber(16)}`);
        addElId(wrapperEl, wrapperId);
        if (params.wrapperLiveRegion) {
            const autoplayParams = swiper.params.autoplay;
            const live = swiper.params.autoplay && autoplayParams?.enabled ? 'off' : 'polite';
            addElLive(wrapperEl, live);
        }
        // Slide
        initSlides();
        // Navigation
        const nav = swiper.navigation
            ? swiper.navigation
            : { nextEl: undefined, prevEl: undefined };
        const nextEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(nav.nextEl);
        const prevEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(nav.prevEl);
        if (nextEls) {
            nextEls.forEach((el) => initNavEl(el, wrapperId, params.nextSlideMessage));
        }
        if (prevEls) {
            prevEls.forEach((el) => initNavEl(el, wrapperId, params.prevSlideMessage));
        }
        // Pagination
        if (hasClickablePagination()) {
            const paginationEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(swiper.pagination.el);
            paginationEl.forEach((el) => {
                el.addEventListener('keydown', onEnterOrSpaceKey);
            });
        }
        // Tab focus
        document.addEventListener('visibilitychange', onVisibilityChange);
        swiper.el.addEventListener('focus', handleFocus, true);
        swiper.el.addEventListener('pointerdown', handlePointerDown, true);
        swiper.el.addEventListener('pointerup', handlePointerUp, true);
    };
    function destroy() {
        if (liveRegion)
            liveRegion.remove();
        const nav = swiper.navigation
            ? swiper.navigation
            : { nextEl: undefined, prevEl: undefined };
        const nextEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(nav.nextEl);
        const prevEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(nav.prevEl);
        if (nextEls) {
            nextEls.forEach((el) => el.removeEventListener('keydown', onEnterOrSpaceKey));
        }
        if (prevEls) {
            prevEls.forEach((el) => el.removeEventListener('keydown', onEnterOrSpaceKey));
        }
        // Pagination
        if (hasClickablePagination()) {
            const paginationEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(swiper.pagination.el);
            paginationEl.forEach((el) => {
                el.removeEventListener('keydown', onEnterOrSpaceKey);
            });
        }
        document.removeEventListener('visibilitychange', onVisibilityChange);
        // Tab focus
        if (swiper.el && typeof swiper.el !== 'string') {
            swiper.el.removeEventListener('focus', handleFocus, true);
            swiper.el.removeEventListener('pointerdown', handlePointerDown, true);
            swiper.el.removeEventListener('pointerup', handlePointerUp, true);
        }
    }
    on('beforeInit', () => {
        liveRegion = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)('span', getParams().notificationClass);
        liveRegion.setAttribute('aria-live', 'assertive');
        liveRegion.setAttribute('aria-atomic', 'true');
    });
    on('afterInit', () => {
        if (!getParams().enabled)
            return;
        init();
    });
    on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
        if (!getParams().enabled)
            return;
        initSlides();
    });
    on('fromEdge toEdge afterInit lock unlock', () => {
        if (!getParams().enabled)
            return;
        updateNavigation();
    });
    on('paginationUpdate', () => {
        if (!getParams().enabled)
            return;
        updatePagination();
    });
    on('destroy', () => {
        if (!getParams().enabled)
            return;
        destroy();
    });
};




/***/ }),

/***/ "./node_modules/swiper/modules/autoplay.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/autoplay.mjs ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Autoplay; }
/* harmony export */ });
const Autoplay = ({ swiper, extendParams, on, emit, params }) => {
    swiper.autoplay = {
        running: false,
        paused: false,
        timeLeft: 0,
    };
    extendParams({
        autoplay: {
            enabled: false,
            delay: 3000,
            waitForTransition: true,
            disableOnInteraction: false,
            stopOnLastSlide: false,
            reverseDirection: false,
            pauseOnMouseEnter: false,
        },
    });
    function getParams() {
        return swiper.params.autoplay;
    }
    // params here is the user-supplied passedParams; extendParams hasn't yet
    // merged the defaults into swiper.params.autoplay at this point.
    const initialAutoplayDelay = typeof params.autoplay === 'object' &&
        params.autoplay &&
        typeof params.autoplay.delay === 'number'
        ? params.autoplay.delay
        : 3000;
    let timeout;
    let raf;
    let autoplayDelayTotal = initialAutoplayDelay;
    let autoplayDelayCurrent = initialAutoplayDelay;
    let autoplayTimeLeft = 0;
    let autoplayStartTime = new Date().getTime();
    let wasPaused = false;
    let isTouched = false;
    let pausedByTouch = false;
    let touchStartTimeout;
    let pausedByInteraction = false;
    let pausedByPointerEnter = false;
    function onTransitionEnd(e) {
        if (!swiper || swiper.destroyed || !swiper.wrapperEl)
            return;
        if (e.target !== swiper.wrapperEl)
            return;
        swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
        const detail = e.detail;
        if (pausedByPointerEnter || (detail && detail.bySwiperTouchMove)) {
            return;
        }
        resume();
    }
    const calcTimeLeft = () => {
        if (swiper.destroyed || !swiper.autoplay.running)
            return;
        if (swiper.autoplay.paused) {
            wasPaused = true;
        }
        else if (wasPaused) {
            autoplayDelayCurrent = autoplayTimeLeft;
            wasPaused = false;
        }
        const timeLeft = swiper.autoplay.paused
            ? autoplayTimeLeft
            : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
        swiper.autoplay.timeLeft = timeLeft;
        emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
        raf = requestAnimationFrame(() => {
            calcTimeLeft();
        });
    };
    const getSlideDelay = () => {
        let activeSlideEl;
        const virtualEnabled = !!swiper.params.virtual?.enabled;
        if (swiper.virtual && virtualEnabled) {
            activeSlideEl = swiper.slides.find((slideEl) => slideEl.classList.contains('swiper-slide-active'));
        }
        else {
            activeSlideEl = swiper.slides[swiper.activeIndex];
        }
        if (!activeSlideEl)
            return undefined;
        const attr = activeSlideEl.getAttribute('data-swiper-autoplay');
        if (attr == null)
            return undefined;
        return parseInt(attr, 10);
    };
    const getTotalDelay = () => {
        let totalDelay = getParams().delay;
        const currentSlideDelay = getSlideDelay();
        if (typeof currentSlideDelay === 'number' &&
            !Number.isNaN(currentSlideDelay) &&
            currentSlideDelay > 0) {
            totalDelay = currentSlideDelay;
        }
        return totalDelay;
    };
    const run = (delayForce) => {
        if (swiper.destroyed || !swiper.autoplay.running)
            return 0;
        if (raf !== undefined)
            cancelAnimationFrame(raf);
        calcTimeLeft();
        let delay = delayForce;
        if (typeof delay === 'undefined') {
            delay = getTotalDelay();
            autoplayDelayTotal = delay;
            autoplayDelayCurrent = delay;
        }
        autoplayTimeLeft = delay;
        const speed = swiper.params.speed;
        const proceed = () => {
            if (!swiper || swiper.destroyed)
                return;
            const autoplayParams = getParams();
            if (autoplayParams.reverseDirection) {
                if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
                    swiper.slidePrev(speed, true, true);
                    emit('autoplay');
                }
                else if (!autoplayParams.stopOnLastSlide) {
                    swiper.slideTo(swiper.slides.length - 1, speed, true, true);
                    emit('autoplay');
                }
            }
            else {
                if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
                    swiper.slideNext(speed, true, true);
                    emit('autoplay');
                }
                else if (!autoplayParams.stopOnLastSlide) {
                    swiper.slideTo(0, speed, true, true);
                    emit('autoplay');
                }
            }
            if (swiper.params.cssMode) {
                autoplayStartTime = new Date().getTime();
                requestAnimationFrame(() => {
                    run();
                });
            }
        };
        if (delay > 0) {
            if (timeout !== undefined)
                clearTimeout(timeout);
            timeout = setTimeout(() => {
                proceed();
            }, delay);
        }
        else {
            requestAnimationFrame(() => {
                proceed();
            });
        }
        return delay;
    };
    const start = () => {
        autoplayStartTime = new Date().getTime();
        swiper.autoplay.running = true;
        run();
        emit('autoplayStart');
        return true;
    };
    const stop = () => {
        swiper.autoplay.running = false;
        if (timeout !== undefined)
            clearTimeout(timeout);
        if (raf !== undefined)
            cancelAnimationFrame(raf);
        emit('autoplayStop');
        return true;
    };
    const pause = (internal, reset) => {
        if (swiper.destroyed || !swiper.autoplay.running)
            return;
        if (timeout !== undefined)
            clearTimeout(timeout);
        if (!internal) {
            pausedByInteraction = true;
        }
        const proceed = () => {
            emit('autoplayPause');
            if (getParams().waitForTransition) {
                swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
            }
            else {
                resume();
            }
        };
        swiper.autoplay.paused = true;
        if (reset) {
            proceed();
            return;
        }
        const delay = autoplayTimeLeft || getParams().delay;
        autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
        if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop)
            return;
        if (autoplayTimeLeft < 0)
            autoplayTimeLeft = 0;
        proceed();
    };
    const resume = () => {
        if ((swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) ||
            swiper.destroyed ||
            !swiper.autoplay.running)
            return;
        autoplayStartTime = new Date().getTime();
        if (pausedByInteraction) {
            pausedByInteraction = false;
            run(autoplayTimeLeft);
        }
        else {
            run();
        }
        swiper.autoplay.paused = false;
        emit('autoplayResume');
    };
    const onVisibilityChange = () => {
        if (swiper.destroyed || !swiper.autoplay.running)
            return;
        if (document.visibilityState === 'hidden') {
            pausedByInteraction = true;
            pause(true);
        }
        if (document.visibilityState === 'visible') {
            resume();
        }
    };
    const onPointerEnter = (e) => {
        if (e.pointerType !== 'mouse')
            return;
        pausedByInteraction = true;
        pausedByPointerEnter = true;
        if (swiper.animating || swiper.autoplay.paused)
            return;
        pause(true);
    };
    const onPointerLeave = (e) => {
        if (e.pointerType !== 'mouse')
            return;
        pausedByPointerEnter = false;
        if (swiper.autoplay.paused) {
            resume();
        }
    };
    const attachMouseEvents = () => {
        if (getParams().pauseOnMouseEnter) {
            swiper.el.addEventListener('pointerenter', onPointerEnter);
            swiper.el.addEventListener('pointerleave', onPointerLeave);
        }
    };
    const detachMouseEvents = () => {
        if (swiper.el && typeof swiper.el !== 'string') {
            swiper.el.removeEventListener('pointerenter', onPointerEnter);
            swiper.el.removeEventListener('pointerleave', onPointerLeave);
        }
    };
    const attachDocumentEvents = () => {
        document.addEventListener('visibilitychange', onVisibilityChange);
    };
    const detachDocumentEvents = () => {
        document.removeEventListener('visibilitychange', onVisibilityChange);
    };
    on('init', () => {
        if (getParams().enabled) {
            attachMouseEvents();
            attachDocumentEvents();
            start();
        }
    });
    on('destroy', () => {
        detachMouseEvents();
        detachDocumentEvents();
        if (swiper.autoplay.running) {
            stop();
        }
    });
    on('_freeModeStaticRelease', () => {
        if (pausedByTouch || pausedByInteraction) {
            resume();
        }
    });
    on('_freeModeNoMomentumRelease', () => {
        if (!getParams().disableOnInteraction) {
            pause(true, true);
        }
        else {
            stop();
        }
    });
    on('beforeTransitionStart', (_s, _speed, internal) => {
        if (swiper.destroyed || !swiper.autoplay.running)
            return;
        if (internal || !getParams().disableOnInteraction) {
            pause(true, true);
        }
        else {
            stop();
        }
    });
    on('sliderFirstMove', () => {
        if (swiper.destroyed || !swiper.autoplay.running)
            return;
        if (getParams().disableOnInteraction) {
            stop();
            return;
        }
        isTouched = true;
        pausedByTouch = false;
        pausedByInteraction = false;
        touchStartTimeout = setTimeout(() => {
            pausedByInteraction = true;
            pausedByTouch = true;
            pause(true);
        }, 200);
    });
    on('touchEnd', () => {
        if (swiper.destroyed || !swiper.autoplay.running || !isTouched)
            return;
        if (touchStartTimeout !== undefined)
            clearTimeout(touchStartTimeout);
        if (timeout !== undefined)
            clearTimeout(timeout);
        if (getParams().disableOnInteraction) {
            pausedByTouch = false;
            isTouched = false;
            return;
        }
        if (pausedByTouch && swiper.params.cssMode)
            resume();
        pausedByTouch = false;
        isTouched = false;
    });
    on('slideChange', () => {
        if (swiper.destroyed || !swiper.autoplay.running)
            return;
        if (swiper.autoplay.paused) {
            autoplayTimeLeft = getTotalDelay();
            autoplayDelayTotal = getTotalDelay();
        }
    });
    Object.assign(swiper.autoplay, {
        start,
        stop,
        pause,
        resume,
    });
};




/***/ }),

/***/ "./node_modules/swiper/modules/controller.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/controller.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Controller; }
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


class LinearSpline {
    x;
    y;
    lastIndex;
    binarySearch;
    constructor(x, y) {
        let maxIndex;
        let minIndex;
        let guess;
        this.binarySearch = (array, val) => {
            minIndex = -1;
            maxIndex = array.length;
            while (maxIndex - minIndex > 1) {
                guess = (maxIndex + minIndex) >> 1;
                if (array[guess] <= val) {
                    minIndex = guess;
                }
                else {
                    maxIndex = guess;
                }
            }
            return maxIndex;
        };
        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1;
    }
    interpolate(x2) {
        if (!x2)
            return 0;
        const i3 = this.binarySearch(this.x, x2);
        const i1 = i3 - 1;
        // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.
        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
        return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1]);
    }
}
const Controller = ({ swiper, extendParams, on }) => {
    extendParams({
        controller: {
            control: undefined,
            inverse: false,
            by: 'slide', // or 'container'
        },
    });
    swiper.controller = {
        control: undefined,
    };
    function getParams() {
        return swiper.params.controller;
    }
    function getInterpolateFunction(c) {
        swiper.controller.spline = swiper.params.loop
            ? new LinearSpline(swiper.slidesGrid, c.slidesGrid)
            : new LinearSpline(swiper.snapGrid, c.snapGrid);
    }
    function setTranslate(_t, byController) {
        const controlled = swiper.controller.control;
        let multiplier;
        let controlledTranslate;
        const SwiperCtor = swiper.constructor;
        function setControlledTranslate(c) {
            if (c.destroyed)
                return;
            // this will create an Interpolate function based on the snapGrids
            // x is the Grid of the scrolled scroller and y will be the controlled scroller
            // it makes sense to create this only once and recall it for the interpolation
            // the function does a lot of value caching for performance
            const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
            const controllerParams = getParams();
            if (controllerParams.by === 'slide') {
                getInterpolateFunction(c);
                // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                // but it did not work out
                controlledTranslate = -swiper.controller.spline.interpolate(-translate);
            }
            else {
                controlledTranslate = 0;
            }
            if (!controlledTranslate || controllerParams.by === 'container') {
                multiplier =
                    (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
                    multiplier = 1;
                }
                controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
            }
            if (controllerParams.inverse) {
                controlledTranslate = c.maxTranslate() - controlledTranslate;
            }
            c.updateProgress(controlledTranslate);
            c.setTranslate(controlledTranslate, swiper);
            c.updateActiveIndex();
            c.updateSlidesClasses();
        }
        if (Array.isArray(controlled)) {
            for (let i = 0; i < controlled.length; i += 1) {
                const target = controlled[i];
                if (target && target !== byController && target instanceof SwiperCtor) {
                    setControlledTranslate(target);
                }
            }
        }
        else if (controlled instanceof SwiperCtor && byController !== controlled) {
            setControlledTranslate(controlled);
        }
    }
    function setTransition(duration, byController) {
        const SwiperCtor = swiper.constructor;
        const controlled = swiper.controller.control;
        function setControlledTransition(c) {
            if (c.destroyed)
                return;
            c.setTransition(duration, swiper);
            if (duration !== 0) {
                c.transitionStart();
                if (c.params.autoHeight) {
                    (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.t)(() => {
                        c.updateAutoHeight();
                    });
                }
                (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.m)(c.wrapperEl, () => {
                    if (!controlled)
                        return;
                    c.transitionEnd();
                });
            }
        }
        if (Array.isArray(controlled)) {
            for (let i = 0; i < controlled.length; i += 1) {
                const target = controlled[i];
                if (target && target !== byController && target instanceof SwiperCtor) {
                    setControlledTransition(target);
                }
            }
        }
        else if (controlled instanceof SwiperCtor && byController !== controlled) {
            setControlledTransition(controlled);
        }
    }
    function removeSpline() {
        if (!swiper.controller.control)
            return;
        if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
        }
    }
    on('beforeInit', () => {
        const controllerParam = getParams().control;
        if (typeof window !== 'undefined' &&
            (typeof controllerParam === 'string' || controllerParam instanceof HTMLElement)) {
            const controlElements = typeof controllerParam === 'string'
                ? [...document.querySelectorAll(controllerParam)]
                : [controllerParam];
            controlElements.forEach((controlElement) => {
                if (!swiper.controller.control)
                    swiper.controller.control = [];
                const list = swiper.controller.control;
                if (controlElement && controlElement.swiper) {
                    list.push(controlElement.swiper);
                }
                else if (controlElement) {
                    const eventName = `${swiper.params.eventsPrefix}init`;
                    const onControllerSwiper = (e) => {
                        const detail = e.detail;
                        if (detail && detail[0])
                            list.push(detail[0]);
                        swiper.update();
                        controlElement.removeEventListener(eventName, onControllerSwiper);
                    };
                    controlElement.addEventListener(eventName, onControllerSwiper);
                }
            });
            return;
        }
        // After this point control is either Swiper or Swiper[] (or null/undefined),
        // never the string/HTMLElement forms that the public option accepts.
        swiper.controller.control = controllerParam;
    });
    on('update', () => {
        removeSpline();
    });
    on('resize', () => {
        removeSpline();
    });
    on('observerUpdate', () => {
        removeSpline();
    });
    // Event payloads come typed against the legacy public Swiper class
    // (src/types/swiper-class.d.ts) until Phase 5 deletes src/types/; cast the
    // forwarded byController back to the core Swiper so it lines up with the
    // controller-internal signatures.
    on('setTranslate', (_s, translate, byController) => {
        if (!swiper.controller.control)
            return;
        if (!Array.isArray(swiper.controller.control) && swiper.controller.control.destroyed)
            return;
        swiper.controller.setTranslate(translate, byController);
    });
    on('setTransition', (_s, duration, byController) => {
        if (!swiper.controller.control)
            return;
        if (!Array.isArray(swiper.controller.control) && swiper.controller.control.destroyed)
            return;
        swiper.controller.setTransition(duration, byController);
    });
    Object.assign(swiper.controller, {
        setTranslate,
        setTransition,
    });
};




/***/ }),

/***/ "./node_modules/swiper/modules/effect-cards.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cards.mjs ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCards; }
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






const EffectCards = ({ swiper, extendParams, on }) => {
    extendParams({
        cardsEffect: {
            slideShadows: true,
            rotate: true,
            perSlideRotate: 2,
            perSlideOffset: 8,
        },
    });
    function getParams() {
        return swiper.params.cardsEffect;
    }
    const setTranslate = () => {
        const { slides, activeIndex, rtlTranslate: rtl } = swiper;
        const params = getParams();
        const { startTranslate, isTouched } = swiper.touchEventsData;
        const currentTranslate = rtl ? -swiper.translate : swiper.translate;
        for (let i = 0; i < slides.length; i += 1) {
            const slideEl = slides[i];
            const slideProgress = slideEl.progress ?? 0;
            const progress = Math.min(Math.max(slideProgress, -4), 4);
            let offset = slideEl.swiperSlideOffset ?? 0;
            if (swiper.params.centeredSlides && !swiper.params.cssMode) {
                swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
            }
            if (swiper.params.centeredSlides && swiper.params.cssMode) {
                offset -= slides[0].swiperSlideOffset ?? 0;
            }
            let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
            let tY = 0;
            const tZ = -100 * Math.abs(progress);
            let scale = 1;
            let rotate = -params.perSlideRotate * progress;
            let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
            const slideIndex = swiper.virtual && swiper.params.virtual?.enabled ? swiper.virtual.from + i : i;
            const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) &&
                progress > 0 &&
                progress < 1 &&
                (isTouched || swiper.params.cssMode) &&
                (currentTranslate ?? 0) < (startTranslate ?? 0);
            const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) &&
                progress < 0 &&
                progress > -1 &&
                (isTouched || swiper.params.cssMode) &&
                (currentTranslate ?? 0) > (startTranslate ?? 0);
            if (isSwipeToNext || isSwipeToPrev) {
                const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
                rotate += -28 * progress * subProgress;
                scale += -0.5 * subProgress;
                tXAdd += 96 * subProgress;
                tY = `${(params.rotate || swiper.isHorizontal() ? -25 : 0) * subProgress * Math.abs(progress)}%`;
            }
            if (progress < 0) {
                // next
                tX = `calc(${tX}px ${rtl ? '-' : '+'} (${tXAdd * Math.abs(progress)}%))`;
            }
            else if (progress > 0) {
                // prev
                tX = `calc(${tX}px ${rtl ? '-' : '+'} (-${tXAdd * Math.abs(progress)}%))`;
            }
            else {
                tX = `${tX}px`;
            }
            if (!swiper.isHorizontal()) {
                const prevY = tY;
                tY = tX;
                tX = prevY;
            }
            const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
            const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? (rtl ? -rotate : rotate) : 0}deg)
        scale(${scaleString})
      `;
            if (params.slideShadows) {
                // Set shadows
                let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
                if (!shadowEl) {
                    shadowEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('cards', slideEl);
                }
                if (shadowEl)
                    shadowEl.style.opacity = String(Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1));
            }
            slideEl.style.zIndex = String(-Math.abs(Math.round(slideProgress)) + slides.length);
            const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
            targetEl.style.transform = transform;
        }
    };
    const setTransition = (duration) => {
        const transformElements = swiper.slides.map((slideEl) => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.p)(slideEl));
        transformElements.forEach((el) => {
            el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll('.swiper-slide-shadow').forEach((shadowEl) => {
                shadowEl.style.transitionDuration = `${duration}ms`;
            });
        });
        (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({ swiper, duration, transformElements });
    };
    (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
        effect: 'cards',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: () => true,
        overwriteParams: () => ({
            _loopSwapReset: false,
            watchSlidesProgress: true,
            loopAdditionalSlides: getParams().rotate ? 3 : 2,
            centeredSlides: true,
            virtualTranslate: !swiper.params.cssMode,
        }),
    });
};




/***/ }),

/***/ "./node_modules/swiper/modules/effect-coverflow.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/effect-coverflow.mjs ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCoverflow; }
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");





const EffectCoverflow = ({ swiper, extendParams, on }) => {
    extendParams({
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: true,
        },
    });
    function getParams() {
        return swiper.params.coverflowEffect;
    }
    const setTranslate = () => {
        const { width: swiperWidth, height: swiperHeight, slides, slidesSizesGrid } = swiper;
        const params = getParams();
        const isHorizontal = swiper.isHorizontal();
        const transform = swiper.translate;
        const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth;
        const r = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.o)(swiper);
        // Each slide offset from center
        for (let i = 0, length = slides.length; i < length; i += 1) {
            const slideEl = slides[i];
            const slideSize = slidesSizesGrid[i];
            const slideOffset = slideEl.swiperSlideOffset ?? 0;
            const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
            const offsetMultiplier = typeof params.modifier === 'function'
                ? params.modifier(centerOffset)
                : centerOffset * params.modifier;
            let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
            let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
            // var rotateZ = 0
            let translateZ = -translate * Math.abs(offsetMultiplier);
            let stretch = typeof params.stretch === 'string' && params.stretch.indexOf('%') !== -1
                ? (parseFloat(params.stretch) / 100) * slideSize
                : params.stretch;
            let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
            let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
            let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
            // Fix for ultra small values
            if (Math.abs(translateX) < 0.001)
                translateX = 0;
            if (Math.abs(translateY) < 0.001)
                translateY = 0;
            if (Math.abs(translateZ) < 0.001)
                translateZ = 0;
            if (Math.abs(rotateY) < 0.001)
                rotateY = 0;
            if (Math.abs(rotateX) < 0.001)
                rotateX = 0;
            if (Math.abs(scale) < 0.001)
                scale = 0;
            const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${r(rotateX)}deg) rotateY(${r(rotateY)}deg) scale(${scale})`;
            const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
            targetEl.style.transform = slideTransform;
            slideEl.style.zIndex = String(-Math.abs(Math.round(offsetMultiplier)) + 1);
            if (params.slideShadows) {
                // Set shadows
                let shadowBeforeEl = isHorizontal
                    ? slideEl.querySelector('.swiper-slide-shadow-left')
                    : slideEl.querySelector('.swiper-slide-shadow-top');
                let shadowAfterEl = isHorizontal
                    ? slideEl.querySelector('.swiper-slide-shadow-right')
                    : slideEl.querySelector('.swiper-slide-shadow-bottom');
                if (!shadowBeforeEl) {
                    shadowBeforeEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('coverflow', slideEl, isHorizontal ? 'left' : 'top');
                }
                if (!shadowAfterEl) {
                    shadowAfterEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('coverflow', slideEl, isHorizontal ? 'right' : 'bottom');
                }
                if (shadowBeforeEl)
                    shadowBeforeEl.style.opacity = String(offsetMultiplier > 0 ? offsetMultiplier : 0);
                if (shadowAfterEl)
                    shadowAfterEl.style.opacity = String(-offsetMultiplier > 0 ? -offsetMultiplier : 0);
            }
        }
    };
    const setTransition = (duration) => {
        const transformElements = swiper.slides.map((slideEl) => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.p)(slideEl));
        transformElements.forEach((el) => {
            el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach((shadowEl) => {
                shadowEl.style.transitionDuration = `${duration}ms`;
            });
        });
    };
    (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
        effect: 'coverflow',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: () => true,
        overwriteParams: () => ({
            watchSlidesProgress: true,
        }),
    });
};




/***/ }),

/***/ "./node_modules/swiper/modules/effect-creative.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/modules/effect-creative.mjs ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCreative; }
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






const EffectCreative = ({ swiper, extendParams, on }) => {
    extendParams({
        creativeEffect: {
            limitProgress: 1,
            shadowPerProgress: false,
            progressMultiplier: 1,
            perspective: true,
            prev: {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                opacity: 1,
                scale: 1,
            },
            next: {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                opacity: 1,
                scale: 1,
            },
        },
    });
    function getParams() {
        return swiper.params.creativeEffect;
    }
    const getTranslateValue = (value) => {
        if (typeof value === 'string')
            return value;
        return `${value}px`;
    };
    const setTranslate = () => {
        const { slides, wrapperEl, slidesSizesGrid } = swiper;
        const params = getParams();
        const { progressMultiplier: multiplier } = params;
        const isCenteredSlides = swiper.params.centeredSlides;
        const rotateFix = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.o)(swiper);
        if (isCenteredSlides) {
            const margin = slidesSizesGrid[0] / 2 - (swiper.params.slidesOffsetBefore ?? 0);
            wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
        }
        for (let i = 0; i < slides.length; i += 1) {
            const slideEl = slides[i];
            const slideProgress = slideEl.progress ?? 0;
            const progress = Math.min(Math.max(slideProgress, -params.limitProgress), params.limitProgress);
            let originalProgress = progress;
            if (!isCenteredSlides) {
                originalProgress = Math.min(Math.max(slideEl.originalProgress ?? 0, -params.limitProgress), params.limitProgress);
            }
            const offset = slideEl.swiperSlideOffset ?? 0;
            const t = [
                swiper.params.cssMode ? -offset - swiper.translate : -offset,
                0,
                0,
            ];
            const r = [0, 0, 0];
            let custom = false;
            if (!swiper.isHorizontal()) {
                t[1] = t[0];
                t[0] = 0;
            }
            let data = {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                scale: 1,
                opacity: 1,
            };
            if (progress < 0) {
                data = params.next;
                custom = true;
            }
            else if (progress > 0) {
                data = params.prev;
                custom = true;
            }
            // set translate
            t.forEach((value, index) => {
                t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
            });
            // set rotates
            r.forEach((_value, index) => {
                r[index] = data.rotate[index] * Math.abs(progress * multiplier);
            });
            slideEl.style.zIndex = String(-Math.abs(Math.round(slideProgress)) + slides.length);
            const translateString = t.join(', ');
            const rotateString = `rotateX(${rotateFix(r[0])}deg) rotateY(${rotateFix(r[1])}deg) rotateZ(${rotateFix(r[2])}deg)`;
            const scaleString = originalProgress < 0
                ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})`
                : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
            const opacityString = originalProgress < 0
                ? 1 + (1 - data.opacity) * originalProgress * multiplier
                : 1 - (1 - data.opacity) * originalProgress * multiplier;
            const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;
            // Set shadows
            if ((custom && data.shadow) || !custom) {
                let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
                if (!shadowEl && data.shadow) {
                    shadowEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('creative', slideEl);
                }
                if (shadowEl) {
                    const shadowOpacity = params.shadowPerProgress
                        ? progress * (1 / params.limitProgress)
                        : progress;
                    shadowEl.style.opacity = String(Math.min(Math.max(Math.abs(shadowOpacity), 0), 1));
                }
            }
            const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
            targetEl.style.transform = transform;
            targetEl.style.opacity = String(opacityString);
            if (data.origin) {
                targetEl.style.transformOrigin = data.origin;
            }
        }
    };
    const setTransition = (duration) => {
        const transformElements = swiper.slides.map((slideEl) => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.p)(slideEl));
        transformElements.forEach((el) => {
            el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll('.swiper-slide-shadow').forEach((shadowEl) => {
                shadowEl.style.transitionDuration = `${duration}ms`;
            });
        });
        (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({ swiper, duration, transformElements, allSlides: true });
    };
    (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
        effect: 'creative',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: () => getParams().perspective,
        overwriteParams: () => ({
            watchSlidesProgress: true,
            virtualTranslate: !swiper.params.cssMode,
        }),
    });
};




/***/ }),

/***/ "./node_modules/swiper/modules/effect-cube.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cube.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCube; }
/* harmony export */ });
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



const EffectCube = ({ swiper, extendParams, on }) => {
    extendParams({
        cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
    });
    function getParams() {
        return swiper.params.cubeEffect;
    }
    const createSlideShadows = (slideEl, progress, isHorizontal) => {
        let shadowBefore = isHorizontal
            ? slideEl.querySelector('.swiper-slide-shadow-left')
            : slideEl.querySelector('.swiper-slide-shadow-top');
        let shadowAfter = isHorizontal
            ? slideEl.querySelector('.swiper-slide-shadow-right')
            : slideEl.querySelector('.swiper-slide-shadow-bottom');
        if (!shadowBefore) {
            shadowBefore = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}`.split(' '));
            slideEl.append(shadowBefore);
        }
        if (!shadowAfter) {
            shadowAfter = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}`.split(' '));
            slideEl.append(shadowAfter);
        }
        if (shadowBefore)
            shadowBefore.style.opacity = String(Math.max(-progress, 0));
        if (shadowAfter)
            shadowAfter.style.opacity = String(Math.max(progress, 0));
    };
    const recreateShadows = () => {
        // create new ones
        const isHorizontal = swiper.isHorizontal();
        swiper.slides.forEach((slideEl) => {
            const progress = Math.max(Math.min(slideEl.progress ?? 0, 1), -1);
            createSlideShadows(slideEl, progress, isHorizontal);
        });
    };
    const setTranslate = () => {
        const { el, wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize, } = swiper;
        const r = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(swiper);
        const params = getParams();
        const isHorizontal = swiper.isHorizontal();
        const isVirtual = !!(swiper.virtual && swiper.params.virtual?.enabled);
        let wrapperRotate = 0;
        let cubeShadowEl = null;
        if (params.shadow) {
            if (isHorizontal) {
                cubeShadowEl = swiper.wrapperEl.querySelector('.swiper-cube-shadow');
                if (!cubeShadowEl) {
                    cubeShadowEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)('div', 'swiper-cube-shadow');
                    swiper.wrapperEl.append(cubeShadowEl);
                }
                cubeShadowEl.style.height = `${swiperWidth}px`;
            }
            else {
                cubeShadowEl = el.querySelector('.swiper-cube-shadow');
                if (!cubeShadowEl) {
                    cubeShadowEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)('div', 'swiper-cube-shadow');
                    el.append(cubeShadowEl);
                }
            }
        }
        for (let i = 0; i < slides.length; i += 1) {
            const slideEl = slides[i];
            let slideIndex = i;
            if (isVirtual) {
                slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index') ?? '0', 10);
            }
            let slideAngle = slideIndex * 90;
            let round = Math.floor(slideAngle / 360);
            if (rtl) {
                slideAngle = -slideAngle;
                round = Math.floor(-slideAngle / 360);
            }
            const progress = Math.max(Math.min(slideEl.progress ?? 0, 1), -1);
            let tx = 0;
            let ty = 0;
            let tz = 0;
            if (slideIndex % 4 === 0) {
                tx = -round * 4 * swiperSize;
                tz = 0;
            }
            else if ((slideIndex - 1) % 4 === 0) {
                tx = 0;
                tz = -round * 4 * swiperSize;
            }
            else if ((slideIndex - 2) % 4 === 0) {
                tx = swiperSize + round * 4 * swiperSize;
                tz = swiperSize;
            }
            else if ((slideIndex - 3) % 4 === 0) {
                tx = -swiperSize;
                tz = 3 * swiperSize + swiperSize * 4 * round;
            }
            if (rtl) {
                tx = -tx;
            }
            if (!isHorizontal) {
                ty = tx;
                tx = 0;
            }
            const transform = `rotateX(${r(isHorizontal ? 0 : -slideAngle)}deg) rotateY(${r(isHorizontal ? slideAngle : 0)}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
            if (progress <= 1 && progress > -1) {
                wrapperRotate = slideIndex * 90 + progress * 90;
                if (rtl)
                    wrapperRotate = -slideIndex * 90 - progress * 90;
            }
            slideEl.style.transform = transform;
            if (params.slideShadows) {
                createSlideShadows(slideEl, progress, isHorizontal);
            }
        }
        wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
        wrapperEl.style.setProperty('-webkit-transform-origin', `50% 50% -${swiperSize / 2}px`);
        if (params.shadow && cubeShadowEl) {
            if (isHorizontal) {
                cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${params.shadowScale})`;
            }
            else {
                const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                const multiplier = 1.5 -
                    (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2 +
                        Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2);
                const scale1 = params.shadowScale;
                const scale2 = params.shadowScale / multiplier;
                const offset = params.shadowOffset;
                cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-89.99deg)`;
            }
        }
        wrapperEl.style.transform = `translate3d(0px,0,0px) rotateX(${r(swiper.isHorizontal() ? 0 : wrapperRotate)}deg) rotateY(${r(swiper.isHorizontal() ? -wrapperRotate : 0)}deg)`;
        wrapperEl.style.setProperty('--swiper-cube-translate-z', '0px');
    };
    const setTransition = (duration) => {
        const { el, slides } = swiper;
        slides.forEach((slideEl) => {
            slideEl.style.transitionDuration = `${duration}ms`;
            slideEl
                .querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                .forEach((subEl) => {
                subEl.style.transitionDuration = `${duration}ms`;
            });
        });
        if (swiper.params.cubeEffect?.shadow && !swiper.isHorizontal()) {
            const shadowEl = el.querySelector('.swiper-cube-shadow');
            if (shadowEl)
                shadowEl.style.transitionDuration = `${duration}ms`;
        }
    };
    (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__.e)({
        effect: 'cube',
        swiper,
        on,
        setTranslate,
        setTransition,
        recreateShadows,
        getEffectParams: () => swiper.params.cubeEffect,
        perspective: () => true,
        overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: false,
            virtualTranslate: true,
        }),
    });
};




/***/ }),

/***/ "./node_modules/swiper/modules/effect-fade.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-fade.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectFade; }
/* harmony export */ });
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");





const EffectFade = ({ swiper, extendParams, on }) => {
    extendParams({
        fadeEffect: {
            crossFade: false,
        },
    });
    function getParams() {
        return swiper.params.fadeEffect;
    }
    const setTranslate = () => {
        const { slides } = swiper;
        const params = getParams();
        for (let i = 0; i < slides.length; i += 1) {
            const slideEl = slides[i];
            const offset = slideEl.swiperSlideOffset ?? 0;
            let tx = -offset;
            if (!swiper.params.virtualTranslate)
                tx -= swiper.translate;
            let ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
            }
            const slideProgress = slideEl.progress ?? 0;
            const slideOpacity = params.crossFade
                ? Math.max(1 - Math.abs(slideProgress), 0)
                : 1 + Math.min(Math.max(slideProgress, -1), 0);
            const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(params, slideEl);
            targetEl.style.opacity = String(slideOpacity);
            targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
        }
    };
    const setTransition = (duration) => {
        const transformElements = swiper.slides.map((slideEl) => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.p)(slideEl));
        transformElements.forEach((el) => {
            el.style.transitionDuration = `${duration}ms`;
        });
        (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_2__.e)({ swiper, duration, transformElements, allSlides: true });
    };
    (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__.e)({
        effect: 'fade',
        swiper,
        on,
        setTranslate,
        setTransition,
        overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            spaceBetween: 0,
            virtualTranslate: !swiper.params.cssMode,
        }),
    });
};




/***/ }),

/***/ "./node_modules/swiper/modules/effect-flip.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-flip.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectFlip; }
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






const EffectFlip = ({ swiper, extendParams, on }) => {
    extendParams({
        flipEffect: {
            slideShadows: true,
            limitRotation: true,
        },
    });
    function getParams() {
        return swiper.params.flipEffect;
    }
    const createSlideShadows = (slideEl, progress) => {
        let shadowBefore = swiper.isHorizontal()
            ? slideEl.querySelector('.swiper-slide-shadow-left')
            : slideEl.querySelector('.swiper-slide-shadow-top');
        let shadowAfter = swiper.isHorizontal()
            ? slideEl.querySelector('.swiper-slide-shadow-right')
            : slideEl.querySelector('.swiper-slide-shadow-bottom');
        if (!shadowBefore) {
            shadowBefore = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('flip', slideEl, swiper.isHorizontal() ? 'left' : 'top');
        }
        if (!shadowAfter) {
            shadowAfter = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('flip', slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
        }
        if (shadowBefore)
            shadowBefore.style.opacity = String(Math.max(-progress, 0));
        if (shadowAfter)
            shadowAfter.style.opacity = String(Math.max(progress, 0));
    };
    const recreateShadows = () => {
        // Set shadows
        const params = getParams();
        swiper.slides.forEach((slideEl) => {
            let progress = slideEl.progress ?? 0;
            if (params.limitRotation) {
                progress = Math.max(Math.min(progress, 1), -1);
            }
            createSlideShadows(slideEl, progress);
        });
    };
    const setTranslate = () => {
        const { slides, rtlTranslate: rtl } = swiper;
        const params = getParams();
        const rotateFix = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.o)(swiper);
        for (let i = 0; i < slides.length; i += 1) {
            const slideEl = slides[i];
            let progress = slideEl.progress ?? 0;
            if (params.limitRotation) {
                progress = Math.max(Math.min(progress, 1), -1);
            }
            const offset = slideEl.swiperSlideOffset ?? 0;
            const rotate = -180 * progress;
            let rotateY = rotate;
            let rotateX = 0;
            let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
            let ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
                rotateX = -rotateY;
                rotateY = 0;
            }
            else if (rtl) {
                rotateY = -rotateY;
            }
            slideEl.style.zIndex = String(-Math.abs(Math.round(progress)) + slides.length);
            if (params.slideShadows) {
                createSlideShadows(slideEl, progress);
            }
            const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateFix(rotateX)}deg) rotateY(${rotateFix(rotateY)}deg)`;
            const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
            targetEl.style.transform = transform;
        }
    };
    const setTransition = (duration) => {
        const transformElements = swiper.slides.map((slideEl) => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.p)(slideEl));
        transformElements.forEach((el) => {
            el.style.transitionDuration = `${duration}ms`;
            el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach((shadowEl) => {
                shadowEl.style.transitionDuration = `${duration}ms`;
            });
        });
        (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({ swiper, duration, transformElements });
    };
    (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
        effect: 'flip',
        swiper,
        on,
        setTranslate,
        setTransition,
        recreateShadows,
        getEffectParams: () => swiper.params.flipEffect,
        perspective: () => true,
        overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            spaceBetween: 0,
            virtualTranslate: !swiper.params.cssMode,
        }),
    });
};




/***/ }),

/***/ "./node_modules/swiper/modules/free-mode.mjs":
/*!***************************************************!*\
  !*** ./node_modules/swiper/modules/free-mode.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FreeMode; }
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


const FreeMode = ({ swiper, extendParams, emit, once }) => {
    extendParams({
        freeMode: {
            enabled: false,
            momentum: true,
            momentumRatio: 1,
            momentumBounce: true,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: false,
            minimumVelocity: 0.02,
        },
    });
    function getParams() {
        return swiper.params.freeMode;
    }
    function onTouchStart() {
        if (swiper.params.cssMode)
            return;
        const translate = swiper.getTranslate();
        swiper.setTranslate(translate);
        swiper.setTransition(0);
        swiper.touchEventsData.velocities.length = 0;
        swiper.freeMode.onTouchEnd({ currentPos: swiper.rtl ? swiper.translate : -swiper.translate });
    }
    function onTouchMove() {
        if (swiper.params.cssMode)
            return;
        const { touchEventsData: data, touches } = swiper;
        // Velocity
        if (data.velocities.length === 0) {
            data.velocities.push({
                position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
                time: data.touchStartTime ?? (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.u)(),
            });
        }
        data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
            time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.u)(),
        });
    }
    function onTouchEnd({ currentPos }) {
        if (swiper.params.cssMode)
            return;
        const { wrapperEl, rtlTranslate: rtl, snapGrid, touchEventsData: data } = swiper;
        const params = swiper.params;
        const freeModeParams = getParams();
        // Time diff
        const touchEndTime = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.u)();
        const timeDiff = touchEndTime - (data.touchStartTime ?? touchEndTime);
        if (currentPos < -swiper.minTranslate()) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (currentPos > -swiper.maxTranslate()) {
            if (swiper.slides.length < snapGrid.length) {
                swiper.slideTo(snapGrid.length - 1);
            }
            else {
                swiper.slideTo(swiper.slides.length - 1);
            }
            return;
        }
        if (freeModeParams.momentum) {
            if (data.velocities.length > 1) {
                const lastMoveEvent = data.velocities.pop();
                const velocityEvent = data.velocities.pop();
                const distance = lastMoveEvent.position - velocityEvent.position;
                const time = lastMoveEvent.time - velocityEvent.time;
                swiper.velocity = distance / time;
                swiper.velocity /= 2;
                if (Math.abs(swiper.velocity) < freeModeParams.minimumVelocity) {
                    swiper.velocity = 0;
                }
                // this implies that the user stopped moving a finger then released.
                // There would be no events with distance zero, so the last event is stale.
                if (time > 150 || (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.u)() - lastMoveEvent.time > 300) {
                    swiper.velocity = 0;
                }
            }
            else {
                swiper.velocity = 0;
            }
            swiper.velocity *= freeModeParams.momentumVelocityRatio;
            data.velocities.length = 0;
            let momentumDuration = 1000 * freeModeParams.momentumRatio;
            const momentumDistance = swiper.velocity * momentumDuration;
            let newPosition = swiper.translate + momentumDistance;
            if (rtl)
                newPosition = -newPosition;
            let doBounce = false;
            let afterBouncePosition;
            const bounceAmount = Math.abs(swiper.velocity) * 20 * freeModeParams.momentumBounceRatio;
            let needsLoopFix = false;
            if (newPosition < swiper.maxTranslate()) {
                if (freeModeParams.momentumBounce) {
                    if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                        newPosition = swiper.maxTranslate() - bounceAmount;
                    }
                    afterBouncePosition = swiper.maxTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                }
                else {
                    newPosition = swiper.maxTranslate();
                }
                if (params.loop && params.centeredSlides)
                    needsLoopFix = true;
            }
            else if (newPosition > swiper.minTranslate()) {
                if (freeModeParams.momentumBounce) {
                    if (newPosition - swiper.minTranslate() > bounceAmount) {
                        newPosition = swiper.minTranslate() + bounceAmount;
                    }
                    afterBouncePosition = swiper.minTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                }
                else {
                    newPosition = swiper.minTranslate();
                }
                if (params.loop && params.centeredSlides)
                    needsLoopFix = true;
            }
            else if (freeModeParams.sticky) {
                let nextSlide = 0;
                for (let j = 0; j < snapGrid.length; j += 1) {
                    if (snapGrid[j] > -newPosition) {
                        nextSlide = j;
                        break;
                    }
                }
                if (Math.abs(snapGrid[nextSlide] - newPosition) <
                    Math.abs((snapGrid[nextSlide - 1] ?? snapGrid[nextSlide]) - newPosition) ||
                    swiper.swipeDirection === 'next') {
                    newPosition = snapGrid[nextSlide];
                }
                else {
                    newPosition = snapGrid[nextSlide - 1];
                }
                newPosition = -newPosition;
            }
            if (needsLoopFix) {
                once('transitionEnd', () => {
                    swiper.loopFix();
                });
            }
            // Fix duration
            if (swiper.velocity !== 0) {
                if (rtl) {
                    momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                }
                else {
                    momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                }
                if (freeModeParams.sticky) {
                    // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
                    // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                    // It's easy to see this when simulating touch with mouse events. To fix this,
                    // limit single-slide swipes to the default slide duration. This also has the
                    // nice side effect of matching slide speed if the user stopped moving before
                    // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                    // For faster swipes, also apply limits (albeit higher ones).
                    const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                    const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
                    const speed = params.speed;
                    if (moveDistance < currentSlideSize) {
                        momentumDuration = speed;
                    }
                    else if (moveDistance < 2 * currentSlideSize) {
                        momentumDuration = speed * 1.5;
                    }
                    else {
                        momentumDuration = speed * 2.5;
                    }
                }
            }
            else if (freeModeParams.sticky) {
                swiper.slideToClosest();
                return;
            }
            if (freeModeParams.momentumBounce && doBounce && afterBouncePosition !== undefined) {
                swiper.updateProgress(afterBouncePosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                swiper.animating = true;
                (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.m)(wrapperEl, () => {
                    if (!swiper || swiper.destroyed || !data.allowMomentumBounce)
                        return;
                    emit('momentumBounce');
                    swiper.setTransition(params.speed);
                    setTimeout(() => {
                        swiper.setTranslate(afterBouncePosition);
                        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.m)(wrapperEl, () => {
                            if (!swiper || swiper.destroyed)
                                return;
                            swiper.transitionEnd();
                        });
                    }, 0);
                });
            }
            else if (swiper.velocity) {
                emit('_freeModeNoMomentumRelease');
                swiper.updateProgress(newPosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                if (!swiper.animating) {
                    swiper.animating = true;
                    (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.m)(wrapperEl, () => {
                        if (!swiper || swiper.destroyed)
                            return;
                        swiper.transitionEnd();
                    });
                }
            }
            else {
                swiper.updateProgress(newPosition);
            }
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        else if (freeModeParams.sticky) {
            swiper.slideToClosest();
            return;
        }
        else {
            emit('_freeModeNoMomentumRelease');
        }
        if (!freeModeParams.momentum || timeDiff >= params.longSwipesMs) {
            emit('_freeModeStaticRelease');
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
    }
    swiper.freeMode = {
        onTouchStart,
        onTouchMove,
        onTouchEnd,
    };
};




/***/ }),

/***/ "./node_modules/swiper/modules/grid.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/grid.mjs ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Grid; }
/* harmony export */ });
const Grid = ({ swiper, extendParams, on }) => {
    extendParams({
        grid: {
            rows: 1,
            fill: 'column',
        },
    });
    function getParams() {
        return swiper.params.grid;
    }
    let slidesNumberEvenToRows;
    let slidesPerRow;
    let numFullColumns;
    let wasMultiRow;
    const getSpaceBetween = () => {
        let spaceBetween = swiper.params.spaceBetween ?? 0;
        if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
            spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiper.size;
        }
        else if (typeof spaceBetween === 'string') {
            spaceBetween = parseFloat(spaceBetween);
        }
        return spaceBetween;
    };
    const isVirtualEnabled = () => {
        const virtualParams = swiper.params.virtual;
        return (!!swiper.virtual &&
            typeof virtualParams === 'object' &&
            virtualParams !== null &&
            !!virtualParams.enabled);
    };
    const initSlides = (slides) => {
        const { slidesPerView } = swiper.params;
        const { rows, fill } = getParams();
        const slidesLength = isVirtualEnabled() ? swiper.virtual.slides.length : slides.length;
        numFullColumns = Math.floor(slidesLength / rows);
        if (Math.floor(slidesLength / rows) === slidesLength / rows) {
            slidesNumberEvenToRows = slidesLength;
        }
        else {
            slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
        }
        if (slidesPerView !== 'auto' && fill === 'row') {
            slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, Math.floor(slidesPerView ?? 1) * rows);
        }
        slidesPerRow = slidesNumberEvenToRows / rows;
    };
    const unsetSlides = () => {
        if (swiper.slides) {
            swiper.slides.forEach((slide) => {
                const gridSlide = slide;
                if (gridSlide.swiperSlideGridSet) {
                    slide.style.height = '';
                    slide.style.setProperty(swiper.getDirectionLabel('margin-top'), '');
                }
            });
        }
    };
    const updateSlide = (i, slide, slides) => {
        const { slidesPerGroup } = swiper.params;
        const spaceBetween = getSpaceBetween();
        const { rows, fill } = getParams();
        const slidesLength = isVirtualEnabled() ? swiper.virtual.slides.length : slides.length;
        // Set slides order
        let newSlideOrderIndex;
        let column;
        let row;
        if (fill === 'row' && (slidesPerGroup ?? 1) > 1) {
            const groupsPer = slidesPerGroup ?? 1;
            const groupIndex = Math.floor(i / (groupsPer * rows));
            const slideIndexInGroup = i - rows * groupsPer * groupIndex;
            const columnsInGroup = groupIndex === 0
                ? groupsPer
                : Math.min(Math.ceil((slidesLength - groupIndex * rows * groupsPer) / rows), groupsPer);
            row = Math.floor(slideIndexInGroup / columnsInGroup);
            column = slideIndexInGroup - row * columnsInGroup + groupIndex * groupsPer;
            newSlideOrderIndex = column + (row * slidesNumberEvenToRows) / rows;
            slide.style.order = String(newSlideOrderIndex);
        }
        else if (fill === 'column') {
            column = Math.floor(i / rows);
            row = i - column * rows;
            if (column > numFullColumns || (column === numFullColumns && row === rows - 1)) {
                row += 1;
                if (row >= rows) {
                    row = 0;
                    column += 1;
                }
            }
        }
        else {
            row = Math.floor(i / slidesPerRow);
            column = i - row * slidesPerRow;
        }
        const gridSlide = slide;
        gridSlide.row = row;
        gridSlide.column = column;
        slide.style.height = `calc((100% - ${(rows - 1) * spaceBetween}px) / ${rows})`;
        slide.style.setProperty(swiper.getDirectionLabel('margin-top'), row !== 0 && spaceBetween ? `${spaceBetween}px` : '');
        gridSlide.swiperSlideGridSet = true;
    };
    const updateWrapperSize = (slideSize, snapGrid) => {
        const { centeredSlides, roundLengths } = swiper.params;
        const spaceBetween = getSpaceBetween();
        const { rows } = getParams();
        swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
        swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
        if (!swiper.params.cssMode) {
            swiper.wrapperEl.style.setProperty(swiper.getDirectionLabel('width'), `${swiper.virtualSize + spaceBetween}px`);
        }
        if (centeredSlides) {
            const newSlidesGrid = [];
            for (let i = 0; i < snapGrid.length; i += 1) {
                let slidesGridItem = snapGrid[i];
                if (roundLengths)
                    slidesGridItem = Math.floor(slidesGridItem);
                if (snapGrid[i] < swiper.virtualSize + snapGrid[0])
                    newSlidesGrid.push(slidesGridItem);
            }
            snapGrid.splice(0, snapGrid.length);
            snapGrid.push(...newSlidesGrid);
        }
    };
    const onInit = () => {
        const gridParams = swiper.params.grid;
        wasMultiRow = !!(gridParams && (gridParams.rows ?? 1) > 1);
    };
    const onUpdate = () => {
        const { params, el } = swiper;
        const gridParams = params.grid;
        const isMultiRow = !!(gridParams && (gridParams.rows ?? 1) > 1);
        if (wasMultiRow && !isMultiRow) {
            el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
            numFullColumns = 1;
            swiper.emitContainerClasses();
        }
        else if (!wasMultiRow && isMultiRow) {
            el.classList.add(`${params.containerModifierClass}grid`);
            if (gridParams.fill === 'column') {
                el.classList.add(`${params.containerModifierClass}grid-column`);
            }
            swiper.emitContainerClasses();
        }
        wasMultiRow = isMultiRow;
    };
    on('init', onInit);
    on('update', onUpdate);
    swiper.grid = {
        initSlides,
        unsetSlides,
        updateSlide,
        updateWrapperSize,
    };
};




/***/ }),

/***/ "./node_modules/swiper/modules/hash-navigation.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/modules/hash-navigation.mjs ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HashNavigation; }
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


const isVirtualEnabled = (swiper) => !!swiper.virtual && !!swiper.params.virtual?.enabled;
const HashNavigation = ({ swiper, extendParams, emit, on }) => {
    let initialized = false;
    extendParams({
        hashNavigation: {
            enabled: false,
            replaceState: false,
            watchState: false,
            getSlideIndex(_s, hash) {
                if (isVirtualEnabled(swiper)) {
                    const slideWithHash = swiper.slides.find((slideEl) => slideEl.getAttribute('data-hash') === hash);
                    if (!slideWithHash)
                        return 0;
                    const index = parseInt(slideWithHash.getAttribute('data-swiper-slide-index') || '0', 10);
                    return index;
                }
                const matched = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0];
                return matched ? swiper.getSlideIndex(matched) : 0;
            },
        },
    });
    function getParams() {
        return swiper.params.hashNavigation;
    }
    const onHashChange = () => {
        emit('hashChange');
        const newHash = document.location.hash.replace('#', '');
        const activeSlideEl = isVirtualEnabled(swiper)
            ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`)
            : swiper.slides[swiper.activeIndex];
        const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') : '';
        if (newHash !== activeSlideHash) {
            const newIndex = getParams().getSlideIndex(swiper, newHash);
            if (typeof newIndex === 'undefined' || Number.isNaN(newIndex))
                return;
            swiper.slideTo(newIndex);
        }
    };
    const setHash = () => {
        const params = getParams();
        if (!initialized || !params.enabled)
            return;
        const activeSlideEl = isVirtualEnabled(swiper)
            ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`)
            : swiper.slides[swiper.activeIndex];
        const activeSlideHash = activeSlideEl
            ? activeSlideEl.getAttribute('data-hash') || activeSlideEl.getAttribute('data-history')
            : '';
        if (params.replaceState && window.history && window.history.replaceState) {
            window.history.replaceState(null, '', `#${activeSlideHash}` || '');
            emit('hashSet');
        }
        else {
            document.location.hash = activeSlideHash || '';
            emit('hashSet');
        }
    };
    const init = () => {
        const params = getParams();
        const historyParams = swiper.params.history;
        if (!params.enabled || (historyParams && historyParams.enabled))
            return;
        initialized = true;
        const hash = document.location.hash.replace('#', '');
        if (hash) {
            const speed = 0;
            const index = params.getSlideIndex(swiper, hash);
            swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
        }
        if (params.watchState) {
            window.addEventListener('hashchange', onHashChange);
        }
    };
    const destroy = () => {
        if (getParams().watchState) {
            window.removeEventListener('hashchange', onHashChange);
        }
    };
    on('init', () => {
        if (getParams().enabled) {
            init();
        }
    });
    on('destroy', () => {
        if (getParams().enabled) {
            destroy();
        }
    });
    on('transitionEnd _freeModeNoMomentumRelease', () => {
        if (initialized) {
            setHash();
        }
    });
    on('slideChange', () => {
        if (initialized && swiper.params.cssMode) {
            setHash();
        }
    });
};




/***/ }),

/***/ "./node_modules/swiper/modules/history.mjs":
/*!*************************************************!*\
  !*** ./node_modules/swiper/modules/history.mjs ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ History; }
/* harmony export */ });
const History = ({ swiper, extendParams, on }) => {
    extendParams({
        history: {
            enabled: false,
            root: '',
            replaceState: false,
            key: 'slides',
            keepQuery: false,
        },
    });
    let initialized = false;
    let paths = { key: undefined, value: undefined };
    function getParams() {
        return swiper.params.history;
    }
    const slugify = (text) => {
        return text
            .toString()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    };
    const getPathValues = (urlOverride) => {
        let location;
        if (urlOverride) {
            location = new URL(urlOverride);
        }
        else {
            location = window.location;
        }
        const pathArray = location.pathname
            .slice(1)
            .split('/')
            .filter((part) => part !== '');
        const total = pathArray.length;
        const key = pathArray[total - 2];
        const value = pathArray[total - 1];
        return { key, value };
    };
    const setHistory = (key, index) => {
        const params = getParams();
        if (!initialized || !params.enabled)
            return;
        let location;
        if (swiper.params.url) {
            location = new URL(swiper.params.url);
        }
        else {
            location = window.location;
        }
        const isVirtualEnabled = !!swiper.params.virtual
            ?.enabled;
        const slide = swiper.virtual && isVirtualEnabled
            ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${index}"]`)
            : swiper.slides[index];
        if (!slide)
            return;
        let value = slugify(slide.getAttribute('data-history') || '');
        const root = params.root;
        if (root.length > 0) {
            const trimmedRoot = root[root.length - 1] === '/' ? root.slice(0, root.length - 1) : root;
            value = `${trimmedRoot}/${key ? `${key}/` : ''}${value}`;
        }
        else if (!location.pathname.includes(key || '')) {
            value = `${key ? `${key}/` : ''}${value}`;
        }
        if (params.keepQuery) {
            value += location.search;
        }
        const currentState = window.history.state;
        if (currentState && currentState.value === value) {
            return;
        }
        if (params.replaceState) {
            window.history.replaceState({ value }, '', value);
        }
        else {
            window.history.pushState({ value }, '', value);
        }
    };
    const scrollToSlide = (speed, value, runCallbacks) => {
        if (value) {
            for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
                const slide = swiper.slides[i];
                const slideHistory = slugify(slide.getAttribute('data-history') || '');
                if (slideHistory === value) {
                    const index = swiper.getSlideIndex(slide);
                    swiper.slideTo(index, speed, runCallbacks);
                }
            }
        }
        else {
            swiper.slideTo(0, speed, runCallbacks);
        }
    };
    const setHistoryPopState = () => {
        paths = getPathValues(swiper.params.url);
        scrollToSlide(swiper.params.speed, paths.value, false);
    };
    const init = () => {
        const params = swiper.params.history;
        if (!params)
            return;
        if (!window.history || !window.history.pushState) {
            params.enabled = false;
            const hashParams = swiper.params.hashNavigation;
            if (hashParams)
                hashParams.enabled = true;
            return;
        }
        initialized = true;
        paths = getPathValues(swiper.params.url);
        if (!paths.key && !paths.value) {
            if (!params.replaceState) {
                window.addEventListener('popstate', setHistoryPopState);
            }
            return;
        }
        scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
        if (!params.replaceState) {
            window.addEventListener('popstate', setHistoryPopState);
        }
    };
    const destroy = () => {
        if (!getParams().replaceState) {
            window.removeEventListener('popstate', setHistoryPopState);
        }
    };
    on('init', () => {
        if (getParams().enabled) {
            init();
        }
    });
    on('destroy', () => {
        if (getParams().enabled) {
            destroy();
        }
    });
    on('transitionEnd _freeModeNoMomentumRelease', () => {
        if (initialized) {
            setHistory(getParams().key, swiper.activeIndex);
        }
    });
    on('slideChange', () => {
        if (initialized && swiper.params.cssMode) {
            setHistory(getParams().key, swiper.activeIndex);
        }
    });
};




/***/ }),

/***/ "./node_modules/swiper/modules/index.mjs":
/*!***********************************************!*\
  !*** ./node_modules/swiper/modules/index.mjs ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A11y: function() { return /* reexport safe */ _a11y_mjs__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   Autoplay: function() { return /* reexport safe */ _autoplay_mjs__WEBPACK_IMPORTED_MODULE_12__["default"]; },
/* harmony export */   Controller: function() { return /* reexport safe */ _controller_mjs__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   EffectCards: function() { return /* reexport safe */ _effect_cards_mjs__WEBPACK_IMPORTED_MODULE_22__["default"]; },
/* harmony export */   EffectCoverflow: function() { return /* reexport safe */ _effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_20__["default"]; },
/* harmony export */   EffectCreative: function() { return /* reexport safe */ _effect_creative_mjs__WEBPACK_IMPORTED_MODULE_21__["default"]; },
/* harmony export */   EffectCube: function() { return /* reexport safe */ _effect_cube_mjs__WEBPACK_IMPORTED_MODULE_18__["default"]; },
/* harmony export */   EffectFade: function() { return /* reexport safe */ _effect_fade_mjs__WEBPACK_IMPORTED_MODULE_17__["default"]; },
/* harmony export */   EffectFlip: function() { return /* reexport safe */ _effect_flip_mjs__WEBPACK_IMPORTED_MODULE_19__["default"]; },
/* harmony export */   FreeMode: function() { return /* reexport safe */ _free_mode_mjs__WEBPACK_IMPORTED_MODULE_14__["default"]; },
/* harmony export */   Grid: function() { return /* reexport safe */ _grid_mjs__WEBPACK_IMPORTED_MODULE_15__["default"]; },
/* harmony export */   HashNavigation: function() { return /* reexport safe */ _hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_11__["default"]; },
/* harmony export */   History: function() { return /* reexport safe */ _history_mjs__WEBPACK_IMPORTED_MODULE_10__["default"]; },
/* harmony export */   Keyboard: function() { return /* reexport safe */ _keyboard_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   Manipulation: function() { return /* reexport safe */ _manipulation_mjs__WEBPACK_IMPORTED_MODULE_16__["default"]; },
/* harmony export */   Mousewheel: function() { return /* reexport safe */ _mousewheel_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   Navigation: function() { return /* reexport safe */ _navigation_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   Pagination: function() { return /* reexport safe */ _pagination_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   Parallax: function() { return /* reexport safe */ _parallax_mjs__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   Scrollbar: function() { return /* reexport safe */ _scrollbar_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   Thumbs: function() { return /* reexport safe */ _thumbs_mjs__WEBPACK_IMPORTED_MODULE_13__["default"]; },
/* harmony export */   Virtual: function() { return /* reexport safe */ _virtual_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   Zoom: function() { return /* reexport safe */ _zoom_mjs__WEBPACK_IMPORTED_MODULE_7__["default"]; }
/* harmony export */ });
/* harmony import */ var _virtual_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virtual.mjs */ "./node_modules/swiper/modules/virtual.mjs");
/* harmony import */ var _keyboard_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard.mjs */ "./node_modules/swiper/modules/keyboard.mjs");
/* harmony import */ var _mousewheel_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mousewheel.mjs */ "./node_modules/swiper/modules/mousewheel.mjs");
/* harmony import */ var _navigation_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.mjs */ "./node_modules/swiper/modules/navigation.mjs");
/* harmony import */ var _pagination_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination.mjs */ "./node_modules/swiper/modules/pagination.mjs");
/* harmony import */ var _scrollbar_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrollbar.mjs */ "./node_modules/swiper/modules/scrollbar.mjs");
/* harmony import */ var _parallax_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parallax.mjs */ "./node_modules/swiper/modules/parallax.mjs");
/* harmony import */ var _zoom_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zoom.mjs */ "./node_modules/swiper/modules/zoom.mjs");
/* harmony import */ var _controller_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controller.mjs */ "./node_modules/swiper/modules/controller.mjs");
/* harmony import */ var _a11y_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./a11y.mjs */ "./node_modules/swiper/modules/a11y.mjs");
/* harmony import */ var _history_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./history.mjs */ "./node_modules/swiper/modules/history.mjs");
/* harmony import */ var _hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hash-navigation.mjs */ "./node_modules/swiper/modules/hash-navigation.mjs");
/* harmony import */ var _autoplay_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./autoplay.mjs */ "./node_modules/swiper/modules/autoplay.mjs");
/* harmony import */ var _thumbs_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./thumbs.mjs */ "./node_modules/swiper/modules/thumbs.mjs");
/* harmony import */ var _free_mode_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./free-mode.mjs */ "./node_modules/swiper/modules/free-mode.mjs");
/* harmony import */ var _grid_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./grid.mjs */ "./node_modules/swiper/modules/grid.mjs");
/* harmony import */ var _manipulation_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manipulation.mjs */ "./node_modules/swiper/modules/manipulation.mjs");
/* harmony import */ var _effect_fade_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./effect-fade.mjs */ "./node_modules/swiper/modules/effect-fade.mjs");
/* harmony import */ var _effect_cube_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./effect-cube.mjs */ "./node_modules/swiper/modules/effect-cube.mjs");
/* harmony import */ var _effect_flip_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./effect-flip.mjs */ "./node_modules/swiper/modules/effect-flip.mjs");
/* harmony import */ var _effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./effect-coverflow.mjs */ "./node_modules/swiper/modules/effect-coverflow.mjs");
/* harmony import */ var _effect_creative_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./effect-creative.mjs */ "./node_modules/swiper/modules/effect-creative.mjs");
/* harmony import */ var _effect_cards_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./effect-cards.mjs */ "./node_modules/swiper/modules/effect-cards.mjs");
























/***/ }),

/***/ "./node_modules/swiper/modules/keyboard.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/keyboard.mjs ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Keyboard; }
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


const Keyboard = ({ swiper, extendParams, on, emit }) => {
    extendParams({
        keyboard: {
            enabled: false,
            onlyInViewport: true,
            pageUpDown: true,
            speed: undefined,
        },
    });
    function getParams() {
        return swiper.params.keyboard;
    }
    function handle(event) {
        if (!swiper.enabled)
            return;
        const { rtlTranslate: rtl } = swiper;
        const e = 'originalEvent' in event && event.originalEvent ? event.originalEvent : event;
        const kc = e.keyCode || e.charCode;
        const params = getParams();
        const pageUpDown = !!params.pageUpDown;
        const isPageUp = pageUpDown && kc === 33;
        const isPageDown = pageUpDown && kc === 34;
        const isArrowLeft = kc === 37;
        const isArrowRight = kc === 39;
        const isArrowUp = kc === 38;
        const isArrowDown = kc === 40;
        // Directions locks
        if (!swiper.allowSlideNext &&
            ((swiper.isHorizontal() && isArrowRight) ||
                (swiper.isVertical() && isArrowDown) ||
                isPageDown)) {
            return false;
        }
        if (!swiper.allowSlidePrev &&
            ((swiper.isHorizontal() && isArrowLeft) || (swiper.isVertical() && isArrowUp) || isPageUp)) {
            return false;
        }
        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
            return undefined;
        }
        const activeElement = document.activeElement;
        if (activeElement &&
            (activeElement.isContentEditable ||
                (activeElement.nodeName &&
                    (activeElement.nodeName.toLowerCase() === 'input' ||
                        activeElement.nodeName.toLowerCase() === 'textarea')))) {
            return undefined;
        }
        if (params.onlyInViewport &&
            (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
            let inView = false;
            // Check that swiper should be inside of visible area of window
            if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.j)(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 &&
                (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.j)(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
                return undefined;
            }
            const el = swiper.el;
            const swiperWidth = el.clientWidth;
            const swiperHeight = el.clientHeight;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const swiperOffset = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.h)(el);
            if (rtl)
                swiperOffset.left -= el.scrollLeft;
            const swiperCoord = [
                [swiperOffset.left, swiperOffset.top],
                [swiperOffset.left + swiperWidth, swiperOffset.top],
                [swiperOffset.left, swiperOffset.top + swiperHeight],
                [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight],
            ];
            for (let i = 0; i < swiperCoord.length; i += 1) {
                const point = swiperCoord[i];
                if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                    if (point[0] === 0 && point[1] === 0)
                        continue;
                    inView = true;
                }
            }
            if (!inView)
                return undefined;
        }
        const speed = params.speed;
        if (swiper.isHorizontal()) {
            if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                if (e.cancelable)
                    e.preventDefault();
            }
            if (((isPageDown || isArrowRight) && !rtl) || ((isPageUp || isArrowLeft) && rtl))
                swiper.slideNext(speed);
            if (((isPageUp || isArrowLeft) && !rtl) || ((isPageDown || isArrowRight) && rtl))
                swiper.slidePrev(speed);
        }
        else {
            if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                if (e.cancelable)
                    e.preventDefault();
            }
            if (isPageDown || isArrowDown)
                swiper.slideNext(speed);
            if (isPageUp || isArrowUp)
                swiper.slidePrev(speed);
        }
        emit('keyPress', kc);
        return undefined;
    }
    function enable() {
        if (swiper.keyboard.enabled)
            return;
        document.addEventListener('keydown', handle);
        swiper.keyboard.enabled = true;
    }
    function disable() {
        if (!swiper.keyboard.enabled)
            return;
        document.removeEventListener('keydown', handle);
        swiper.keyboard.enabled = false;
    }
    swiper.keyboard = {
        enabled: false,
        enable,
        disable,
    };
    on('init', () => {
        if (getParams().enabled) {
            enable();
        }
    });
    on('destroy', () => {
        if (swiper.keyboard.enabled) {
            disable();
        }
    });
};




/***/ }),

/***/ "./node_modules/swiper/modules/manipulation.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation.mjs ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Manipulation; }
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function addSlide(index, slides) {
    const swiper = this;
    const { params, activeIndex, slidesEl } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides ?? 0;
        swiper.loopDestroy();
        swiper.recalcSlides();
    }
    const baseLength = swiper.slides.length;
    if (index <= 0) {
        swiper.prependSlide(slides);
        return;
    }
    if (index >= baseLength) {
        swiper.appendSlide(slides);
        return;
    }
    let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    const slidesBuffer = [];
    for (let i = baseLength - 1; i >= index; i -= 1) {
        const currentSlide = swiper.slides[i];
        if (!currentSlide)
            continue;
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
    }
    if (Array.isArray(slides)) {
        for (let i = 0; i < slides.length; i += 1) {
            const slide = slides[i];
            if (slide)
                slidesEl.append(slide);
        }
        newActiveIndex =
            activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    }
    else {
        slidesEl.append(slides);
    }
    for (let i = 0; i < slidesBuffer.length; i += 1) {
        slidesEl.append(slidesBuffer[i]);
    }
    swiper.recalcSlides();
    if (params.loop) {
        swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
        swiper.update();
    }
    if (params.loop) {
        swiper.slideTo(newActiveIndex + (swiper.loopedSlides ?? 0), 0, false);
    }
    else {
        swiper.slideTo(newActiveIndex, 0, false);
    }
}

function appendSlide(slides) {
    const swiper = this;
    const { params, slidesEl } = swiper;
    if (params.loop) {
        swiper.loopDestroy();
    }
    const appendElement = (slideEl) => {
        if (typeof slideEl === 'string') {
            const tempDOM = document.createElement('div');
            (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.w)(tempDOM, slideEl);
            const child = tempDOM.children[0];
            if (child)
                slidesEl.append(child);
            (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.w)(tempDOM, '');
        }
        else {
            slidesEl.append(slideEl);
        }
    };
    if (Array.isArray(slides)) {
        for (let i = 0; i < slides.length; i += 1) {
            const slide = slides[i];
            if (slide)
                appendElement(slide);
        }
    }
    else {
        appendElement(slides);
    }
    swiper.recalcSlides();
    if (params.loop) {
        swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
        swiper.update();
    }
}

function prependSlide(slides) {
    const swiper = this;
    const { params, activeIndex, slidesEl } = swiper;
    if (params.loop) {
        swiper.loopDestroy();
    }
    let newActiveIndex = activeIndex + 1;
    const prependElement = (slideEl) => {
        if (typeof slideEl === 'string') {
            const tempDOM = document.createElement('div');
            (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.w)(tempDOM, slideEl);
            const child = tempDOM.children[0];
            if (child)
                slidesEl.prepend(child);
            (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.w)(tempDOM, '');
        }
        else {
            slidesEl.prepend(slideEl);
        }
    };
    if (Array.isArray(slides)) {
        for (let i = 0; i < slides.length; i += 1) {
            const slide = slides[i];
            if (slide)
                prependElement(slide);
        }
        newActiveIndex = activeIndex + slides.length;
    }
    else {
        prependElement(slides);
    }
    swiper.recalcSlides();
    if (params.loop) {
        swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
        swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
}

function removeAllSlides() {
    const swiper = this;
    const slidesIndexes = [];
    for (let i = 0; i < swiper.slides.length; i += 1) {
        slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
}

function removeSlide(slidesIndexes) {
    const swiper = this;
    const { params, activeIndex } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides ?? 0;
        swiper.loopDestroy();
    }
    let newActiveIndex = activeIndexBuffer;
    if (Array.isArray(slidesIndexes)) {
        for (let i = 0; i < slidesIndexes.length; i += 1) {
            const indexToRemove = slidesIndexes[i];
            if (swiper.slides[indexToRemove])
                swiper.slides[indexToRemove].remove();
            if (indexToRemove < newActiveIndex)
                newActiveIndex -= 1;
        }
        newActiveIndex = Math.max(newActiveIndex, 0);
    }
    else {
        const indexToRemove = slidesIndexes;
        if (swiper.slides[indexToRemove])
            swiper.slides[indexToRemove].remove();
        if (indexToRemove < newActiveIndex)
            newActiveIndex -= 1;
        newActiveIndex = Math.max(newActiveIndex, 0);
    }
    swiper.recalcSlides();
    if (params.loop) {
        swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
        swiper.update();
    }
    if (params.loop) {
        swiper.slideTo(newActiveIndex + (swiper.loopedSlides ?? 0), 0, false);
    }
    else {
        swiper.slideTo(newActiveIndex, 0, false);
    }
}

const Manipulation = ({ swiper }) => {
    Object.assign(swiper, {
        appendSlide: appendSlide.bind(swiper),
        prependSlide: prependSlide.bind(swiper),
        addSlide: addSlide.bind(swiper),
        removeSlide: removeSlide.bind(swiper),
        removeAllSlides: removeAllSlides.bind(swiper),
    });
};




/***/ }),

/***/ "./node_modules/swiper/modules/mousewheel.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/mousewheel.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Mousewheel; }
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


const Mousewheel = ({ swiper, extendParams, on, emit }) => {
    extendParams({
        mousewheel: {
            enabled: false,
            releaseOnEdges: false,
            invert: false,
            forceToAxis: false,
            sensitivity: 1,
            eventsTarget: 'container',
            thresholdDelta: null,
            thresholdTime: null,
            noMousewheelClass: 'swiper-no-mousewheel',
        },
    });
    let timeout;
    let lastScrollTime = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.u)();
    let lastEventBeforeSnap;
    let mouseEntered = false;
    const recentWheelEvents = [];
    function getParams() {
        return swiper.params.mousewheel;
    }
    function normalize(e) {
        // Reasonable defaults
        const PIXEL_STEP = 10;
        const LINE_HEIGHT = 40;
        const PAGE_HEIGHT = 800;
        const ev = e;
        let sX = 0;
        let sY = 0; // spinX, spinY
        let pX = 0;
        let pY = 0; // pixelX, pixelY
        // Legacy
        if (ev.detail !== undefined) {
            sY = ev.detail;
        }
        if (ev.wheelDelta !== undefined) {
            sY = -ev.wheelDelta / 120;
        }
        if (ev.wheelDeltaY !== undefined) {
            sY = -ev.wheelDeltaY / 120;
        }
        if (ev.wheelDeltaX !== undefined) {
            sX = -ev.wheelDeltaX / 120;
        }
        // side scrolling on FF with DOMMouseScroll
        if (ev.axis !== undefined &&
            ev.HORIZONTAL_AXIS !== undefined &&
            ev.axis === ev.HORIZONTAL_AXIS) {
            sX = sY;
            sY = 0;
        }
        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;
        if (ev.deltaY !== undefined) {
            pY = ev.deltaY;
        }
        if (ev.deltaX !== undefined) {
            pX = ev.deltaX;
        }
        if (ev.shiftKey && !pX) {
            // if user scrolls with shift he wants horizontal scroll
            pX = pY;
            pY = 0;
        }
        if ((pX || pY) && ev.deltaMode) {
            if (ev.deltaMode === 1) {
                // delta in LINE units
                pX *= LINE_HEIGHT;
                pY *= LINE_HEIGHT;
            }
            else {
                // delta in PAGE units
                pX *= PAGE_HEIGHT;
                pY *= PAGE_HEIGHT;
            }
        }
        // Fall-back if spin cannot be determined
        if (pX && !sX) {
            sX = pX < 1 ? -1 : 1;
        }
        if (pY && !sY) {
            sY = pY < 1 ? -1 : 1;
        }
        return {
            spinX: sX,
            spinY: sY,
            pixelX: pX,
            pixelY: pY,
        };
    }
    function handleMouseEnter() {
        if (!swiper.enabled)
            return;
        mouseEntered = true;
    }
    function handleMouseLeave() {
        if (!swiper.enabled)
            return;
        mouseEntered = false;
    }
    function animateSlider(newEvent) {
        const params = getParams();
        if (params.thresholdDelta && newEvent.delta < params.thresholdDelta) {
            // Prevent if delta of wheel scroll delta is below configured threshold
            return false;
        }
        if (params.thresholdTime && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.u)() - lastScrollTime < params.thresholdTime) {
            // Prevent if time between scrolls is below configured threshold
            return false;
        }
        // If the movement is NOT big enough and
        // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
        //   Don't go any further (avoid insignificant scroll movement).
        if (newEvent.delta >= 6 && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.u)() - lastScrollTime < 60) {
            // Return false as a default
            return true;
        }
        if (newEvent.direction < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                swiper.slideNext();
                emit('scroll', newEvent.raw);
            }
        }
        else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev();
            emit('scroll', newEvent.raw);
        }
        // If you got here is because an animation has been triggered so store the current time
        lastScrollTime = new window.Date().getTime();
        // Return false as a default
        return false;
    }
    function releaseScroll(newEvent) {
        const params = getParams();
        if (newEvent.direction < 0) {
            if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
                // Return true to animate scroll on edges
                return true;
            }
        }
        else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
            // Return true to animate scroll on edges
            return true;
        }
        return false;
    }
    function handle(event) {
        let e = 'originalEvent' in event && event.originalEvent ? event.originalEvent : event;
        let disableParentSwiper = true;
        if (!swiper.enabled)
            return false;
        // Ignore event if the target or its parents have the swiper-no-mousewheel class
        const params = getParams();
        if (event.target.closest(`.${params.noMousewheelClass}`))
            return false;
        if (swiper.params.cssMode) {
            e.preventDefault();
        }
        let targetEl = swiper.el;
        if (params.eventsTarget !== 'container') {
            targetEl = document.querySelector(params.eventsTarget);
        }
        const targetElContainsTarget = targetEl && targetEl.contains(e.target);
        if (!mouseEntered && !targetElContainsTarget && !params.releaseOnEdges)
            return true;
        let delta = 0;
        const rtlFactor = swiper.rtlTranslate ? -1 : 1;
        const data = normalize(e);
        if (params.forceToAxis) {
            if (swiper.isHorizontal()) {
                if (Math.abs(data.pixelX) > Math.abs(data.pixelY))
                    delta = -data.pixelX * rtlFactor;
                else
                    return true;
            }
            else if (Math.abs(data.pixelY) > Math.abs(data.pixelX))
                delta = -data.pixelY;
            else
                return true;
        }
        else {
            delta =
                Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        }
        if (delta === 0)
            return true;
        if (params.invert)
            delta = -delta;
        // Get the scroll positions
        let positions = swiper.getTranslate() + delta * (params.sensitivity ?? 1);
        if (positions >= swiper.minTranslate())
            positions = swiper.minTranslate();
        if (positions <= swiper.maxTranslate())
            positions = swiper.maxTranslate();
        // When loop is true:
        //     the disableParentSwiper will be true.
        // When loop is false:
        //     if the scroll positions is not on edge,
        //     then the disableParentSwiper will be true.
        //     if the scroll on edge positions,
        //     then the disableParentSwiper will be false.
        disableParentSwiper = swiper.params.loop
            ? true
            : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
        if (disableParentSwiper && swiper.params.nested)
            e.stopPropagation();
        const freeModeParams = swiper.params.freeMode;
        if (!swiper.params.freeMode || !freeModeParams?.enabled) {
            // Register the new event in a variable which stores the relevant data
            const newEvent = {
                time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.u)(),
                delta: Math.abs(delta),
                direction: Math.sign(delta),
                raw: event,
            };
            // Keep the most recent events
            if (recentWheelEvents.length >= 2) {
                recentWheelEvents.shift(); // only store the last N events
            }
            const prevEvent = recentWheelEvents.length
                ? recentWheelEvents[recentWheelEvents.length - 1]
                : undefined;
            recentWheelEvents.push(newEvent);
            if (prevEvent) {
                if (newEvent.direction !== prevEvent.direction ||
                    newEvent.delta > prevEvent.delta ||
                    newEvent.time > prevEvent.time + 150) {
                    animateSlider(newEvent);
                }
            }
            else {
                animateSlider(newEvent);
            }
            // If it's time to release the scroll:
            //   Return now so you don't hit the preventDefault.
            if (releaseScroll(newEvent)) {
                return true;
            }
        }
        else {
            // Freemode or scrollContainer:
            const newEvent = {
                time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.u)(),
                delta: Math.abs(delta),
                direction: Math.sign(delta),
            };
            const ignoreWheelEvents = lastEventBeforeSnap &&
                newEvent.time < lastEventBeforeSnap.time + 500 &&
                newEvent.delta <= lastEventBeforeSnap.delta &&
                newEvent.direction === lastEventBeforeSnap.direction;
            if (!ignoreWheelEvents) {
                lastEventBeforeSnap = undefined;
                let position = swiper.getTranslate() + delta * (params.sensitivity ?? 1);
                const wasBeginning = swiper.isBeginning;
                const wasEnd = swiper.isEnd;
                if (position >= swiper.minTranslate())
                    position = swiper.minTranslate();
                if (position <= swiper.maxTranslate())
                    position = swiper.maxTranslate();
                swiper.setTransition(0);
                swiper.setTranslate(position);
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
                if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
                    swiper.updateSlidesClasses();
                }
                if (swiper.params.loop) {
                    swiper.loopFix({
                        direction: newEvent.direction < 0 ? 'next' : 'prev',
                        byMousewheel: true,
                    });
                }
                if (freeModeParams?.sticky) {
                    clearTimeout(timeout);
                    timeout = undefined;
                    if (recentWheelEvents.length >= 15) {
                        recentWheelEvents.shift(); // only store the last N events
                    }
                    const prevEvent = recentWheelEvents.length
                        ? recentWheelEvents[recentWheelEvents.length - 1]
                        : undefined;
                    const firstEvent = recentWheelEvents[0];
                    recentWheelEvents.push(newEvent);
                    if (prevEvent &&
                        (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
                        // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                        recentWheelEvents.splice(0);
                    }
                    else if (recentWheelEvents.length >= 15 &&
                        firstEvent &&
                        newEvent.time - firstEvent.time < 500 &&
                        firstEvent.delta - newEvent.delta >= 1 &&
                        newEvent.delta <= 6) {
                        const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                        lastEventBeforeSnap = newEvent;
                        recentWheelEvents.splice(0);
                        timeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.t)(() => {
                            if (swiper.destroyed || !swiper.params)
                                return;
                            swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                        }, 0); // no delay; move on next tick
                    }
                    if (!timeout) {
                        timeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.t)(() => {
                            if (swiper.destroyed || !swiper.params)
                                return;
                            const snapToThreshold = 0.5;
                            lastEventBeforeSnap = newEvent;
                            recentWheelEvents.splice(0);
                            swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                        }, 500);
                    }
                }
                // Emit event
                if (!ignoreWheelEvents)
                    emit('scroll', e);
                // Stop autoplay
                const autoplayParams = swiper.params.autoplay;
                if (swiper.params.autoplay && autoplayParams?.disableOnInteraction) {
                    swiper.autoplay.stop();
                }
                // Return page scroll on edge positions
                if (params.releaseOnEdges &&
                    (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
                    return true;
                }
            }
        }
        if (e.cancelable)
            e.preventDefault();
        return false;
    }
    function events(method) {
        const params = getParams();
        let targetEl = swiper.el;
        if (params.eventsTarget !== 'container') {
            targetEl = document.querySelector(params.eventsTarget);
        }
        targetEl[method]('mouseenter', handleMouseEnter);
        targetEl[method]('mouseleave', handleMouseLeave);
        targetEl[method]('wheel', handle);
    }
    function enable() {
        if (swiper.params.cssMode) {
            swiper.wrapperEl.removeEventListener('wheel', handle);
            return true;
        }
        if (swiper.mousewheel.enabled)
            return false;
        events('addEventListener');
        swiper.mousewheel.enabled = true;
        return true;
    }
    function disable() {
        if (swiper.params.cssMode) {
            swiper.wrapperEl.addEventListener('wheel', handle);
            return true;
        }
        if (!swiper.mousewheel.enabled)
            return false;
        events('removeEventListener');
        swiper.mousewheel.enabled = false;
        return true;
    }
    on('init', () => {
        const params = getParams();
        if (!params.enabled && swiper.params.cssMode) {
            disable();
        }
        if (params.enabled)
            enable();
    });
    swiper.mousewheel = {
        enabled: false,
        enable,
        disable,
    };
    on('destroy', () => {
        if (swiper.params.cssMode) {
            enable();
        }
        if (swiper.mousewheel.enabled)
            disable();
    });
};




/***/ }),

/***/ "./node_modules/swiper/modules/navigation.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/navigation.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Navigation; }
/* harmony export */ });
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



const arrowSvg = `<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>`;
const Navigation = ({ swiper, extendParams, on, emit }) => {
    extendParams({
        navigation: {
            nextEl: null,
            prevEl: null,
            addIcons: true,
            hideOnClick: false,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock',
            navigationDisabledClass: 'swiper-navigation-disabled',
        },
    });
    // Initialized as a partial; remaining methods (update, init, destroy,
    // enable, disable) attach after their definitions below.
    swiper.navigation = {
        nextEl: null,
        prevEl: null,
        arrowSvg,
    };
    function getParams() {
        return swiper.params.navigation;
    }
    function getEl(el) {
        let res;
        if (el && typeof el === 'string' && swiper.isElement) {
            res = (swiper.el.querySelector(el) || swiper.hostEl.querySelector(el));
            if (res)
                return res;
        }
        if (el) {
            if (typeof el === 'string')
                res = [...document.querySelectorAll(el)];
            if (swiper.params.uniqueNavElements &&
                typeof el === 'string' &&
                res &&
                res.length > 1 &&
                swiper.el.querySelectorAll(el).length === 1) {
                res = swiper.el.querySelector(el);
            }
            else if (res && res.length === 1) {
                res = res[0];
            }
        }
        if (el && !res)
            return el;
        return res;
    }
    function toggleEl(el, disabled) {
        const params = getParams();
        const els = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(el);
        els.forEach((subEl) => {
            if (subEl) {
                subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));
                if (subEl.tagName === 'BUTTON')
                    subEl.disabled = disabled;
                if (swiper.params.watchOverflow && swiper.enabled) {
                    subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
                }
            }
        });
    }
    function update() {
        // Update Navigation Buttons
        const { nextEl, prevEl } = swiper.navigation;
        if (swiper.params.loop) {
            toggleEl(prevEl, false);
            toggleEl(nextEl, false);
            return;
        }
        toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
        toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind)
            return;
        swiper.slidePrev();
        emit('navigationPrev');
    }
    function onNextClick(e) {
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind)
            return;
        swiper.slideNext();
        emit('navigationNext');
    }
    function init() {
        swiper.params.navigation = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
            nextEl: 'swiper-button-next',
            prevEl: 'swiper-button-prev',
        });
        const params = getParams();
        if (!(params.nextEl || params.prevEl))
            return;
        const nextEl = getEl(params.nextEl);
        const prevEl = getEl(params.prevEl);
        Object.assign(swiper.navigation, {
            nextEl,
            prevEl,
        });
        const nextEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(nextEl);
        const prevEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(prevEl);
        const initButton = (el, dir) => {
            if (el) {
                if (params.addIcons &&
                    el.matches('.swiper-button-next,.swiper-button-prev') &&
                    !el.querySelector('svg')) {
                    const tempEl = document.createElement('div');
                    (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)(tempEl, arrowSvg);
                    const svgEl = tempEl.querySelector('svg');
                    if (svgEl)
                        el.appendChild(svgEl);
                    tempEl.remove();
                }
                el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
            }
            if (!swiper.enabled && el) {
                el.classList.add(...params.lockClass.split(' '));
            }
        };
        nextEls.forEach((el) => initButton(el, 'next'));
        prevEls.forEach((el) => initButton(el, 'prev'));
    }
    function destroy() {
        const params = getParams();
        const { nextEl, prevEl } = swiper.navigation;
        const nextEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(nextEl);
        const prevEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(prevEl);
        const destroyButton = (el, dir) => {
            el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
            el.classList.remove(...params.disabledClass.split(' '));
        };
        nextEls.forEach((el) => destroyButton(el, 'next'));
        prevEls.forEach((el) => destroyButton(el, 'prev'));
    }
    on('init', () => {
        if (getParams().enabled === false) {
            disable();
        }
        else {
            init();
            update();
        }
    });
    on('toEdge fromEdge lock unlock', () => {
        update();
    });
    on('destroy', () => {
        destroy();
    });
    on('enable disable', () => {
        const params = getParams();
        const { nextEl, prevEl } = swiper.navigation;
        const nextEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(nextEl);
        const prevEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(prevEl);
        if (swiper.enabled) {
            update();
            return;
        }
        [...nextEls, ...prevEls]
            .filter((el) => !!el)
            .forEach((el) => el.classList.add(params.lockClass));
    });
    on('click', (_s, e) => {
        const params = getParams();
        const { nextEl, prevEl } = swiper.navigation;
        const nextEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(nextEl);
        const prevEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(prevEl);
        const targetEl = e.target;
        let targetIsButton = prevEls.includes(targetEl) || nextEls.includes(targetEl);
        if (swiper.isElement && !targetIsButton) {
            const path = e.composedPath ? e.composedPath() : [];
            if (path.length) {
                targetIsButton = path.find((pathEl) => nextEls.includes(pathEl) || prevEls.includes(pathEl));
            }
        }
        if (params.hideOnClick && !targetIsButton) {
            if (swiper.pagination &&
                swiper.params.pagination &&
                swiper.params.pagination.clickable &&
                (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl)))
                return;
            let isHidden;
            if (nextEls.length) {
                isHidden = nextEls[0].classList.contains(params.hiddenClass);
            }
            else if (prevEls.length) {
                isHidden = prevEls[0].classList.contains(params.hiddenClass);
            }
            if (isHidden === true) {
                emit('navigationShow');
            }
            else {
                emit('navigationHide');
            }
            [...nextEls, ...prevEls]
                .filter((el) => !!el)
                .forEach((el) => el.classList.toggle(params.hiddenClass));
        }
    });
    const enable = () => {
        const params = getParams();
        swiper.el.classList.remove(...params.navigationDisabledClass.split(' '));
        init();
        update();
    };
    const disable = () => {
        const params = getParams();
        swiper.el.classList.add(...params.navigationDisabledClass.split(' '));
        destroy();
    };
    Object.assign(swiper.navigation, {
        enable,
        disable,
        update,
        init,
        destroy,
    });
};




/***/ }),

/***/ "./node_modules/swiper/modules/pagination.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/pagination.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Pagination; }
/* harmony export */ });
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");




const isVirtualEnabled = (swiper) => !!swiper.virtual && !!swiper.params.virtual?.enabled;
const isFreeModeEnabled = (swiper) => !!swiper.params.freeMode?.enabled;
// Slides count for bullets/fraction/progressbar totals: with grid rows the
// slides that share a column collapse into one snap position.
const getSlidesLength = (swiper) => {
    if (isVirtualEnabled(swiper))
        return swiper.virtual.slides.length;
    const gridRows = swiper.params.grid?.rows;
    if (swiper.grid && gridRows && gridRows > 1) {
        return swiper.slides.length / Math.ceil(gridRows);
    }
    return swiper.slides.length;
};
const Pagination = ({ swiper, extendParams, on, emit }) => {
    const pfx = 'swiper-pagination';
    extendParams({
        pagination: {
            el: null,
            bulletElement: 'span',
            clickable: false,
            hideOnClick: false,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: false,
            type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
            dynamicBullets: false,
            dynamicMainBullets: 1,
            formatFractionCurrent: (number) => number,
            formatFractionTotal: (number) => number,
            bulletClass: `${pfx}-bullet`,
            bulletActiveClass: `${pfx}-bullet-active`,
            modifierClass: `${pfx}-`,
            currentClass: `${pfx}-current`,
            totalClass: `${pfx}-total`,
            hiddenClass: `${pfx}-hidden`,
            progressbarFillClass: `${pfx}-progressbar-fill`,
            progressbarOppositeClass: `${pfx}-progressbar-opposite`,
            clickableClass: `${pfx}-clickable`,
            lockClass: `${pfx}-lock`,
            horizontalClass: `${pfx}-horizontal`,
            verticalClass: `${pfx}-vertical`,
            paginationDisabledClass: `${pfx}-disabled`,
        },
    });
    // Initialized as a partial; remaining methods (render, update, init,
    // destroy, enable, disable) attach after their definitions below.
    swiper.pagination = {
        el: null,
        bullets: [],
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    function getParams() {
        return swiper.params.pagination;
    }
    function isPaginationDisabled() {
        const elParam = getParams().el;
        return (!elParam ||
            !swiper.pagination.el ||
            (Array.isArray(swiper.pagination.el) &&
                swiper.pagination.el.length === 0));
    }
    function setSideBullets(bulletEl, position) {
        const { bulletActiveClass } = getParams();
        if (!bulletEl)
            return;
        let current = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
        if (current) {
            current.classList.add(`${bulletActiveClass}-${position}`);
            current = current[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
            if (current) {
                current.classList.add(`${bulletActiveClass}-${position}-${position}`);
            }
        }
    }
    function getMoveDirection(prevIndex, nextIndex, length) {
        prevIndex = prevIndex % length;
        nextIndex = nextIndex % length;
        if (nextIndex === prevIndex + 1) {
            return 'next';
        }
        else if (nextIndex === prevIndex - 1) {
            return 'previous';
        }
        return undefined;
    }
    function onBulletClick(e) {
        const targetEl = e.target;
        const bulletEl = targetEl.closest((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(getParams().bulletClass));
        if (!bulletEl) {
            return;
        }
        e.preventDefault();
        const index = ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.b)(bulletEl) ?? 0) * (swiper.params.slidesPerGroup ?? 1);
        if (swiper.params.loop) {
            if (swiper.realIndex === index)
                return;
            const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
            if (moveDirection === 'next') {
                swiper.slideNext();
            }
            else if (moveDirection === 'previous') {
                swiper.slidePrev();
            }
            else {
                swiper.slideToLoop(index);
            }
        }
        else {
            swiper.slideTo(index);
        }
    }
    function update() {
        // Render || Update Pagination bullets/items
        const rtl = swiper.rtl;
        const params = getParams();
        if (isPaginationDisabled())
            return;
        const els = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.s)(swiper.pagination.el);
        // Current/Total
        let current;
        let previousIndex;
        const slidesLength = getSlidesLength(swiper);
        const total = swiper.params.loop
            ? Math.ceil(slidesLength / (swiper.params.slidesPerGroup ?? 1))
            : swiper.snapGrid.length;
        if (swiper.params.loop) {
            previousIndex = swiper.previousRealIndex || 0;
            current =
                (swiper.params.slidesPerGroup ?? 1) > 1
                    ? Math.floor(swiper.realIndex / (swiper.params.slidesPerGroup ?? 1))
                    : swiper.realIndex;
        }
        else if (typeof swiper.snapIndex !== 'undefined') {
            current = swiper.snapIndex;
            previousIndex = swiper.previousSnapIndex;
        }
        else {
            previousIndex = swiper.previousIndex || 0;
            current = swiper.activeIndex || 0;
        }
        // Types
        if (params.type === 'bullets' &&
            swiper.pagination.bullets &&
            swiper.pagination.bullets.length > 0) {
            const bullets = swiper.pagination.bullets;
            let firstIndex = 0;
            let lastIndex = 0;
            let midIndex = 0;
            if (params.dynamicBullets) {
                bulletSize = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.i)(bullets[0], swiper.isHorizontal() ? 'width' : 'height');
                const dim = swiper.isHorizontal() ? 'width' : 'height';
                els.forEach((subEl) => {
                    subEl.style[dim] = `${(bulletSize ?? 0) * (params.dynamicMainBullets + 4)}px`;
                });
                if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
                    dynamicBulletIndex += current - (previousIndex || 0);
                    if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
                        dynamicBulletIndex = params.dynamicMainBullets - 1;
                    }
                    else if (dynamicBulletIndex < 0) {
                        dynamicBulletIndex = 0;
                    }
                }
                firstIndex = Math.max(current - dynamicBulletIndex, 0);
                lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                midIndex = (lastIndex + firstIndex) / 2;
            }
            bullets.forEach((bulletEl) => {
                const classesToRemove = [
                    '',
                    '-next',
                    '-next-next',
                    '-prev',
                    '-prev-prev',
                    '-main',
                ]
                    .map((suffix) => `${params.bulletActiveClass}${suffix}`)
                    .flatMap((s) => (typeof s === 'string' && s.includes(' ') ? s.split(' ') : [s]));
                bulletEl.classList.remove(...classesToRemove);
            });
            if (els.length > 1) {
                bullets.forEach((bullet) => {
                    const bulletIndex = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.b)(bullet);
                    if (bulletIndex === current) {
                        bullet.classList.add(...params.bulletActiveClass.split(' '));
                    }
                    else if (swiper.isElement) {
                        bullet.setAttribute('part', 'bullet');
                    }
                    if (params.dynamicBullets && bulletIndex !== undefined) {
                        if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                            bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
                        }
                        if (bulletIndex === firstIndex) {
                            setSideBullets(bullet, 'prev');
                        }
                        if (bulletIndex === lastIndex) {
                            setSideBullets(bullet, 'next');
                        }
                    }
                });
            }
            else {
                const bullet = bullets[current];
                if (bullet) {
                    bullet.classList.add(...params.bulletActiveClass.split(' '));
                }
                if (swiper.isElement) {
                    bullets.forEach((bulletEl, bulletIndex) => {
                        bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
                    });
                }
                if (params.dynamicBullets) {
                    const firstDisplayedBullet = bullets[firstIndex];
                    const lastDisplayedBullet = bullets[lastIndex];
                    for (let i = firstIndex; i <= lastIndex; i += 1) {
                        if (bullets[i]) {
                            bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
                        }
                    }
                    setSideBullets(firstDisplayedBullet, 'prev');
                    setSideBullets(lastDisplayedBullet, 'next');
                }
            }
            if (params.dynamicBullets) {
                const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                const bulletsOffset = ((bulletSize ?? 0) * dynamicBulletsLength - (bulletSize ?? 0)) / 2 -
                    midIndex * (bulletSize ?? 0);
                const offsetProp = rtl ? 'right' : 'left';
                const positionDim = swiper.isHorizontal() ? offsetProp : 'top';
                bullets.forEach((bullet) => {
                    bullet.style[positionDim] = `${bulletsOffset}px`;
                });
            }
        }
        els.forEach((subEl, subElIndex) => {
            if (params.type === 'fraction') {
                subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.currentClass)).forEach((fractionEl) => {
                    fractionEl.textContent = String(params.formatFractionCurrent(current + 1));
                });
                subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.totalClass)).forEach((totalEl) => {
                    totalEl.textContent = String(params.formatFractionTotal(total));
                });
            }
            if (params.type === 'progressbar') {
                let progressbarDirection;
                if (params.progressbarOpposite) {
                    progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
                }
                else {
                    progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
                }
                const scale = (current + 1) / total;
                let scaleX = 1;
                let scaleY = 1;
                if (progressbarDirection === 'horizontal') {
                    scaleX = scale;
                }
                else {
                    scaleY = scale;
                }
                subEl
                    .querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.progressbarFillClass))
                    .forEach((progressEl) => {
                    progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                    progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                });
            }
            if (params.type === 'custom' && params.renderCustom) {
                (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.w)(subEl, params.renderCustom(swiper, current + 1, total));
                if (subElIndex === 0)
                    emit('paginationRender', subEl);
            }
            else {
                if (subElIndex === 0)
                    emit('paginationRender', subEl);
                emit('paginationUpdate', subEl);
            }
            if (swiper.params.watchOverflow && swiper.enabled) {
                subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
            }
        });
    }
    function render() {
        // Render Container
        const params = getParams();
        if (isPaginationDisabled())
            return;
        const slidesLength = getSlidesLength(swiper);
        const els = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.s)(swiper.pagination.el);
        let paginationHTML = '';
        if (params.type === 'bullets') {
            let numberOfBullets = swiper.params.loop
                ? Math.ceil(slidesLength / (swiper.params.slidesPerGroup ?? 1))
                : swiper.snapGrid.length;
            if (swiper.params.freeMode && isFreeModeEnabled(swiper) && numberOfBullets > slidesLength) {
                numberOfBullets = slidesLength;
            }
            for (let i = 0; i < numberOfBullets; i += 1) {
                if (params.renderBullet) {
                    paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
                }
                else {
                    // oxfmt-ignore
                    paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
                }
            }
        }
        if (params.type === 'fraction') {
            if (params.renderFraction) {
                paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
            }
            else {
                paginationHTML =
                    `<span class="${params.currentClass}"></span>` +
                        ' / ' +
                        `<span class="${params.totalClass}"></span>`;
            }
        }
        if (params.type === 'progressbar') {
            if (params.renderProgressbar) {
                paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
            }
            else {
                paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
            }
        }
        swiper.pagination.bullets = [];
        els.forEach((subEl) => {
            if (params.type !== 'custom') {
                (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.w)(subEl, paginationHTML || '');
            }
            if (params.type === 'bullets') {
                swiper.pagination.bullets.push(...Array.from(subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.bulletClass))));
            }
        });
        if (params.type !== 'custom') {
            emit('paginationRender', els[0]);
        }
    }
    function init() {
        swiper.params.pagination = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper, swiper.originalParams.pagination, swiper.params.pagination, { el: 'swiper-pagination' });
        const params = getParams();
        if (!params.el)
            return;
        let el;
        if (typeof params.el === 'string' && swiper.isElement) {
            el = swiper.el.querySelector(params.el);
        }
        if (!el && typeof params.el === 'string') {
            el = [...document.querySelectorAll(params.el)];
        }
        if (!el) {
            el = params.el;
        }
        if (!el || (Array.isArray(el) && el.length === 0))
            return;
        if (swiper.params.uniqueNavElements &&
            typeof params.el === 'string' &&
            Array.isArray(el) &&
            el.length > 1) {
            el = [...swiper.el.querySelectorAll(params.el)];
            // check if it belongs to another nested Swiper
            if (el.length > 1) {
                const found = el.find((subEl) => {
                    if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.j)(subEl, '.swiper')[0] !== swiper.el)
                        return false;
                    return true;
                });
                if (found)
                    el = found;
            }
        }
        if (Array.isArray(el) && el.length === 1)
            el = el[0];
        Object.assign(swiper.pagination, {
            el,
        });
        const els = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.s)(el);
        els.forEach((subEl) => {
            if (params.type === 'bullets' && params.clickable) {
                subEl.classList.add(...(params.clickableClass || '').split(' '));
            }
            subEl.classList.add(params.modifierClass + params.type);
            subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            if (params.type === 'bullets' && params.dynamicBullets) {
                subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                dynamicBulletIndex = 0;
                if (params.dynamicMainBullets < 1) {
                    params.dynamicMainBullets = 1;
                }
            }
            if (params.type === 'progressbar' && params.progressbarOpposite) {
                subEl.classList.add(params.progressbarOppositeClass);
            }
            if (params.clickable) {
                subEl.addEventListener('click', onBulletClick);
            }
            if (!swiper.enabled) {
                subEl.classList.add(params.lockClass);
            }
        });
    }
    function destroy() {
        const params = getParams();
        if (isPaginationDisabled())
            return;
        const el = swiper.pagination.el;
        if (el) {
            const els = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.s)(el);
            els.forEach((subEl) => {
                subEl.classList.remove(params.hiddenClass);
                subEl.classList.remove(params.modifierClass + params.type);
                subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if (params.clickable) {
                    subEl.classList.remove(...(params.clickableClass || '').split(' '));
                    subEl.removeEventListener('click', onBulletClick);
                }
            });
        }
        if (swiper.pagination.bullets)
            swiper.pagination.bullets.forEach((subEl) => subEl.classList.remove(...params.bulletActiveClass.split(' ')));
    }
    on('changeDirection', () => {
        if (!swiper.pagination || !swiper.pagination.el)
            return;
        const params = getParams();
        const els = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.s)(swiper.pagination.el);
        els.forEach((subEl) => {
            subEl.classList.remove(params.horizontalClass, params.verticalClass);
            subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        });
    });
    on('init', () => {
        if (getParams().enabled === false) {
            disable();
        }
        else {
            init();
            render();
            update();
        }
    });
    on('activeIndexChange', () => {
        if (typeof swiper.snapIndex === 'undefined') {
            update();
        }
    });
    on('snapIndexChange', () => {
        update();
    });
    on('snapGridLengthChange', () => {
        render();
        update();
    });
    on('destroy', () => {
        destroy();
    });
    on('enable disable', () => {
        const { el } = swiper.pagination;
        if (el) {
            const params = getParams();
            const els = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.s)(el);
            els.forEach((subEl) => subEl.classList[swiper.enabled ? 'remove' : 'add'](params.lockClass));
        }
    });
    on('lock unlock', () => {
        update();
    });
    on('click', (_s, e) => {
        const targetEl = e.target;
        const els = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.s)(swiper.pagination.el);
        const params = getParams();
        if (params.el &&
            params.hideOnClick &&
            els &&
            els.length > 0 &&
            !targetEl.classList.contains(params.bulletClass)) {
            if (swiper.navigation &&
                ((swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl) ||
                    (swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)))
                return;
            const isHidden = els[0].classList.contains(params.hiddenClass);
            if (isHidden === true) {
                emit('paginationShow');
            }
            else {
                emit('paginationHide');
            }
            els.forEach((subEl) => subEl.classList.toggle(params.hiddenClass));
        }
    });
    const enable = () => {
        const params = getParams();
        swiper.el.classList.remove(params.paginationDisabledClass);
        const { el } = swiper.pagination;
        if (el) {
            const els = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.s)(el);
            els.forEach((subEl) => subEl.classList.remove(params.paginationDisabledClass));
        }
        init();
        render();
        update();
    };
    const disable = () => {
        const params = getParams();
        swiper.el.classList.add(params.paginationDisabledClass);
        const { el } = swiper.pagination;
        if (el) {
            const els = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.s)(el);
            els.forEach((subEl) => subEl.classList.add(params.paginationDisabledClass));
        }
        destroy();
    };
    Object.assign(swiper.pagination, {
        enable,
        disable,
        render,
        update,
        init,
        destroy,
    });
};




/***/ }),

/***/ "./node_modules/swiper/modules/parallax.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/parallax.mjs ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Parallax; }
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


const Parallax = ({ swiper, extendParams, on }) => {
    extendParams({
        parallax: {
            enabled: false,
        },
    });
    function getParams() {
        return swiper.params.parallax;
    }
    const elementsSelector = '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]';
    const setTransform = (el, progress) => {
        const { rtl } = swiper;
        const rtlFactor = rtl ? -1 : 1;
        const p = el.getAttribute('data-swiper-parallax') || '0';
        let x = el.getAttribute('data-swiper-parallax-x');
        let y = el.getAttribute('data-swiper-parallax-y');
        const scale = el.getAttribute('data-swiper-parallax-scale');
        const opacity = el.getAttribute('data-swiper-parallax-opacity');
        const rotate = el.getAttribute('data-swiper-parallax-rotate');
        if (x || y) {
            x = x || '0';
            y = y || '0';
        }
        else if (swiper.isHorizontal()) {
            x = p;
            y = '0';
        }
        else {
            y = p;
            x = '0';
        }
        if (x.indexOf('%') >= 0) {
            x = `${parseInt(x, 10) * progress * rtlFactor}%`;
        }
        else {
            x = `${Number(x) * progress * rtlFactor}px`;
        }
        if (y.indexOf('%') >= 0) {
            y = `${parseInt(y, 10) * progress}%`;
        }
        else {
            y = `${Number(y) * progress}px`;
        }
        if (typeof opacity !== 'undefined' && opacity !== null) {
            const opacityNum = Number(opacity);
            const currentOpacity = opacityNum - (opacityNum - 1) * (1 - Math.abs(progress));
            el.style.opacity = String(currentOpacity);
        }
        let transform = `translate3d(${x}, ${y}, 0px)`;
        if (typeof scale !== 'undefined' && scale !== null) {
            const scaleNum = Number(scale);
            const currentScale = scaleNum - (scaleNum - 1) * (1 - Math.abs(progress));
            transform += ` scale(${currentScale})`;
        }
        if (rotate && typeof rotate !== 'undefined' && rotate !== null) {
            const currentRotate = Number(rotate) * progress * -1;
            transform += ` rotate(${currentRotate}deg)`;
        }
        el.style.transform = transform;
    };
    const setTranslate = () => {
        const { el, slides, progress, snapGrid } = swiper;
        const elements = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(el, elementsSelector);
        if (swiper.isElement) {
            elements.push(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.hostEl, elementsSelector));
        }
        elements.forEach((subEl) => {
            setTransform(subEl, progress);
        });
        slides.forEach((slideEl, slideIndex) => {
            let slideProgress = slideEl.progress ?? 0;
            const slidesPerGroup = swiper.params.slidesPerGroup ?? 1;
            if (slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
                slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
            }
            slideProgress = Math.min(Math.max(slideProgress, -1), 1);
            slideEl
                .querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`)
                .forEach((subEl) => {
                setTransform(subEl, slideProgress);
            });
        });
    };
    const setTransition = (duration = swiper.params.speed ?? 300) => {
        const { el, hostEl } = swiper;
        const elements = [...el.querySelectorAll(elementsSelector)];
        if (swiper.isElement) {
            elements.push(...hostEl.querySelectorAll(elementsSelector));
        }
        elements.forEach((parallaxEl) => {
            const attr = parallaxEl.getAttribute('data-swiper-parallax-duration');
            let parallaxDuration = (attr ? parseInt(attr, 10) : 0) || duration;
            if (duration === 0)
                parallaxDuration = 0;
            parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
        });
    };
    on('beforeInit', () => {
        if (!getParams().enabled)
            return;
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
    });
    on('init', () => {
        if (!getParams().enabled)
            return;
        setTranslate();
    });
    on('setTranslate', () => {
        if (!getParams().enabled)
            return;
        setTranslate();
    });
    on('setTransition', (_swiper, duration) => {
        if (!getParams().enabled)
            return;
        setTransition(duration);
    });
};




/***/ }),

/***/ "./node_modules/swiper/modules/scrollbar.mjs":
/*!***************************************************!*\
  !*** ./node_modules/swiper/modules/scrollbar.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Scrollbar; }
/* harmony export */ });
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");




const Scrollbar = ({ swiper, extendParams, on, emit }) => {
    let isTouched = false;
    let timeout = null;
    let dragTimeout = null;
    let dragStartPos = 0;
    let dragSize = 0;
    let trackSize = 0;
    let divider = 0;
    extendParams({
        scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: false,
            draggable: false,
            snapOnRelease: true,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag',
            scrollbarDisabledClass: 'swiper-scrollbar-disabled',
            horizontalClass: `swiper-scrollbar-horizontal`,
            verticalClass: `swiper-scrollbar-vertical`,
        },
    });
    // Initialized as a partial; remaining methods (updateSize, setTranslate,
    // init, destroy, enable, disable) attach after their definitions below.
    swiper.scrollbar = {
        el: null,
        dragEl: null,
    };
    function getParams() {
        return swiper.params.scrollbar;
    }
    function setTranslate() {
        const params = getParams();
        if (!params.el || !swiper.scrollbar.el)
            return;
        const { scrollbar, rtlTranslate: rtl } = swiper;
        const { dragEl, el } = scrollbar;
        const progress = swiper.params.loop ? (swiper.progressLoop ?? 0) : swiper.progress;
        let newSize = dragSize;
        let newPos = (trackSize - dragSize) * progress;
        if (rtl) {
            newPos = -newPos;
            if (newPos > 0) {
                newSize = dragSize - newPos;
                newPos = 0;
            }
            else if (-newPos + dragSize > trackSize) {
                newSize = trackSize + newPos;
            }
        }
        else if (newPos < 0) {
            newSize = dragSize + newPos;
            newPos = 0;
        }
        else if (newPos + dragSize > trackSize) {
            newSize = trackSize - newPos;
        }
        if (swiper.isHorizontal()) {
            dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
            dragEl.style.width = `${newSize}px`;
        }
        else {
            dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
            dragEl.style.height = `${newSize}px`;
        }
        if (params.hide) {
            if (timeout)
                clearTimeout(timeout);
            el.style.opacity = '1';
            timeout = setTimeout(() => {
                el.style.opacity = '0';
                el.style.transitionDuration = '400ms';
            }, 1000);
        }
    }
    function setTransition(duration) {
        if (!getParams().el || !swiper.scrollbar.el)
            return;
        swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
    }
    function updateSize() {
        const params = getParams();
        if (!params.el || !swiper.scrollbar.el)
            return;
        const { scrollbar } = swiper;
        const { dragEl, el } = scrollbar;
        dragEl.style.width = '';
        dragEl.style.height = '';
        trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
        divider =
            swiper.size /
                (swiper.virtualSize +
                    (swiper.params.slidesOffsetBefore ?? 0) -
                    (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
        if (params.dragSize === 'auto') {
            dragSize = trackSize * divider;
        }
        else {
            dragSize = parseInt(String(params.dragSize), 10);
        }
        if (swiper.isHorizontal()) {
            dragEl.style.width = `${dragSize}px`;
        }
        else {
            dragEl.style.height = `${dragSize}px`;
        }
        if (divider >= 1) {
            el.style.display = 'none';
        }
        else {
            el.style.display = '';
        }
        if (params.hide) {
            el.style.opacity = '0';
        }
        if (swiper.params.watchOverflow && swiper.enabled) {
            scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
        }
    }
    function getPointerPosition(e) {
        if (swiper.isHorizontal()) {
            return e.clientX ?? e.touches?.[0]?.clientX ?? 0;
        }
        return e.clientY ?? e.touches?.[0]?.clientY ?? 0;
    }
    function setDragPosition(e) {
        const { scrollbar, rtlTranslate: rtl } = swiper;
        const { el } = scrollbar;
        let positionRatio;
        positionRatio =
            (getPointerPosition(e) -
                (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(el)[swiper.isHorizontal() ? 'left' : 'top'] -
                (dragStartPos !== null ? dragStartPos : dragSize / 2)) /
                (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);
        if (rtl) {
            positionRatio = 1 - positionRatio;
        }
        const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
        swiper.updateProgress(position);
        swiper.setTranslate(position);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    function onDragStart(e) {
        const params = getParams();
        const { scrollbar, wrapperEl } = swiper;
        const { el, dragEl } = scrollbar;
        isTouched = true;
        dragStartPos =
            e.target === dragEl
                ? getPointerPosition(e) -
                    e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top']
                : null;
        e.preventDefault();
        e.stopPropagation();
        wrapperEl.style.transitionDuration = '100ms';
        dragEl.style.transitionDuration = '100ms';
        setDragPosition(e);
        if (dragTimeout)
            clearTimeout(dragTimeout);
        el.style.transitionDuration = '0ms';
        if (params.hide) {
            el.style.opacity = '1';
        }
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.scrollSnapType = 'none';
        }
        emit('scrollbarDragStart', e);
    }
    function onDragMove(e) {
        const { scrollbar, wrapperEl } = swiper;
        const { el, dragEl } = scrollbar;
        if (!isTouched)
            return;
        if (e.cancelable)
            e.preventDefault();
        setDragPosition(e);
        wrapperEl.style.transitionDuration = '0ms';
        el.style.transitionDuration = '0ms';
        dragEl.style.transitionDuration = '0ms';
        emit('scrollbarDragMove', e);
    }
    function onDragEnd(e) {
        const params = getParams();
        const { scrollbar, wrapperEl } = swiper;
        const { el } = scrollbar;
        if (!isTouched)
            return;
        isTouched = false;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.scrollSnapType = '';
            wrapperEl.style.transitionDuration = '';
        }
        if (params.hide) {
            if (dragTimeout)
                clearTimeout(dragTimeout);
            dragTimeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)(() => {
                el.style.opacity = '0';
                el.style.transitionDuration = '400ms';
            }, 1000);
        }
        emit('scrollbarDragEnd', e);
        if (params.snapOnRelease) {
            swiper.slideToClosest();
        }
    }
    function events(method) {
        const { scrollbar, params } = swiper;
        const el = scrollbar.el;
        if (!el)
            return;
        const activeListener = params.passiveListeners ? { passive: false, capture: false } : false;
        const passiveListener = params.passiveListeners ? { passive: true, capture: false } : false;
        const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
        el[eventMethod]('pointerdown', onDragStart, activeListener);
        document[eventMethod]('pointermove', onDragMove, activeListener);
        document[eventMethod]('pointerup', onDragEnd, passiveListener);
    }
    function enableDraggable() {
        if (!getParams().el || !swiper.scrollbar.el)
            return;
        events('on');
    }
    function disableDraggable() {
        if (!getParams().el || !swiper.scrollbar.el)
            return;
        events('off');
    }
    function init() {
        const { scrollbar, el: swiperEl } = swiper;
        swiper.params.scrollbar = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_2__.c)(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, { el: 'swiper-scrollbar' });
        const params = getParams();
        if (!params.el)
            return;
        let el;
        if (typeof params.el === 'string' && swiper.isElement) {
            el = swiper.el.querySelector(params.el);
        }
        else {
            el = params.el;
        }
        if (!el && typeof params.el === 'string') {
            el = document.querySelectorAll(params.el);
            if (!el.length)
                return;
        }
        else if (!el) {
            el = params.el;
        }
        if (swiper.params.uniqueNavElements &&
            typeof params.el === 'string' &&
            el.length > 1 &&
            swiperEl.querySelectorAll(params.el).length === 1) {
            el = swiperEl.querySelector(params.el);
        }
        if (el.length > 0) {
            el = el[0];
        }
        const elTyped = el;
        elTyped.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        let dragEl = null;
        if (elTyped) {
            dragEl = elTyped.querySelector((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.dragClass));
            if (!dragEl) {
                dragEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)('div', params.dragClass);
                elTyped.append(dragEl);
            }
        }
        Object.assign(scrollbar, {
            el: elTyped,
            dragEl,
        });
        if (params.draggable) {
            enableDraggable();
        }
        if (elTyped) {
            elTyped.classList[swiper.enabled ? 'remove' : 'add'](...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(params.lockClass));
        }
    }
    function destroy() {
        const params = getParams();
        const el = swiper.scrollbar.el;
        if (el) {
            el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
        }
        disableDraggable();
    }
    on('changeDirection', () => {
        if (!swiper.scrollbar || !swiper.scrollbar.el)
            return;
        const params = getParams();
        const els = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(swiper.scrollbar.el);
        els.forEach((subEl) => {
            subEl.classList.remove(params.horizontalClass, params.verticalClass);
            subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        });
    });
    on('init', () => {
        if (getParams().enabled === false) {
            disable();
        }
        else {
            init();
            updateSize();
            setTranslate();
        }
    });
    on('update resize observerUpdate lock unlock changeDirection', () => {
        updateSize();
    });
    on('setTranslate', () => {
        setTranslate();
    });
    on('setTransition', (_s, duration) => {
        setTransition(duration);
    });
    on('enable disable', () => {
        const { el } = swiper.scrollbar;
        if (el) {
            el.classList[swiper.enabled ? 'remove' : 'add'](...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(getParams().lockClass));
        }
    });
    on('destroy', () => {
        destroy();
    });
    const enable = () => {
        const params = getParams();
        swiper.el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(params.scrollbarDisabledClass));
        if (swiper.scrollbar.el) {
            swiper.scrollbar.el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(params.scrollbarDisabledClass));
        }
        init();
        updateSize();
        setTranslate();
    };
    const disable = () => {
        const params = getParams();
        swiper.el.classList.add(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(params.scrollbarDisabledClass));
        if (swiper.scrollbar.el) {
            swiper.scrollbar.el.classList.add(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(params.scrollbarDisabledClass));
        }
        destroy();
    };
    Object.assign(swiper.scrollbar, {
        enable,
        disable,
        updateSize,
        setTranslate,
        init,
        destroy,
    });
};




/***/ }),

/***/ "./node_modules/swiper/modules/thumbs.mjs":
/*!************************************************!*\
  !*** ./node_modules/swiper/modules/thumbs.mjs ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Thumb; }
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


const Thumb = ({ swiper, extendParams, on }) => {
    extendParams({
        thumbs: {
            swiper: null,
            multipleActiveThumbs: true,
            autoScrollOffset: 0,
            slideThumbActiveClass: 'swiper-slide-thumb-active',
            thumbsContainerClass: 'swiper-thumbs',
        },
    });
    let initialized = false;
    let swiperCreated = false;
    swiper.thumbs = {
        swiper: null,
    };
    function getParams() {
        return swiper.params.thumbs;
    }
    function isVirtualEnabled() {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed)
            return false;
        const virtual = thumbsSwiper.params.virtual;
        return !!virtual && !!virtual.enabled;
    }
    function onThumbClick() {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed)
            return;
        const clickedIndex = thumbsSwiper.clickedIndex;
        const clickedSlide = thumbsSwiper.clickedSlide;
        const thumbsParams = getParams();
        if (clickedSlide && clickedSlide.classList.contains(thumbsParams.slideThumbActiveClass))
            return;
        if (typeof clickedIndex === 'undefined' || clickedIndex === null)
            return;
        let slideToIndex;
        if (thumbsSwiper.params.loop) {
            const attr = thumbsSwiper.clickedSlide?.getAttribute('data-swiper-slide-index');
            slideToIndex = attr == null ? clickedIndex : parseInt(attr, 10);
        }
        else {
            slideToIndex = clickedIndex;
        }
        if (swiper.params.loop) {
            swiper.slideToLoop(slideToIndex);
        }
        else {
            swiper.slideTo(slideToIndex);
        }
    }
    function init() {
        const thumbsParams = getParams();
        if (initialized)
            return false;
        initialized = true;
        const SwiperClass = swiper.constructor;
        if (thumbsParams.swiper instanceof SwiperClass) {
            if (thumbsParams.swiper.destroyed) {
                initialized = false;
                return false;
            }
            const thumbsSwiper = thumbsParams.swiper;
            swiper.thumbs.swiper = thumbsSwiper;
            Object.assign(thumbsSwiper.originalParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false,
            });
            Object.assign(thumbsSwiper.params, {
                watchSlidesProgress: true,
                slideToClickedSlide: false,
            });
            thumbsSwiper.update();
        }
        else if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.r)(thumbsParams.swiper)) {
            const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
            Object.assign(thumbsSwiperParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false,
            });
            swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
            swiperCreated = true;
        }
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper)
            return false;
        thumbsSwiper.el.classList.add(thumbsParams.thumbsContainerClass);
        thumbsSwiper.on('tap', onThumbClick);
        if (isVirtualEnabled()) {
            thumbsSwiper.on('virtualUpdate', () => {
                update(false, { autoScroll: false });
            });
        }
        return true;
    }
    function update(initial, p) {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed)
            return;
        // Activate thumbs
        let thumbsToActivate = 1;
        const thumbsParams = getParams();
        const thumbActiveClass = thumbsParams.slideThumbActiveClass;
        const slidesPerView = swiper.params.slidesPerView;
        if (typeof slidesPerView === 'number' && slidesPerView > 1 && !swiper.params.centeredSlides) {
            thumbsToActivate = slidesPerView;
        }
        if (!thumbsParams.multipleActiveThumbs) {
            thumbsToActivate = 1;
        }
        thumbsToActivate = Math.floor(thumbsToActivate);
        thumbsSwiper.slides.forEach((slideEl) => slideEl.classList.remove(thumbActiveClass));
        if (thumbsSwiper.params.loop || isVirtualEnabled()) {
            for (let i = 0; i < thumbsToActivate; i += 1) {
                (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach((slideEl) => {
                    slideEl.classList.add(thumbActiveClass);
                });
            }
        }
        else {
            for (let i = 0; i < thumbsToActivate; i += 1) {
                const slide = thumbsSwiper.slides[swiper.realIndex + i];
                if (slide) {
                    slide.classList.add(thumbActiveClass);
                }
            }
        }
        if (p?.autoScroll ?? true) {
            autoScroll(initial ? 0 : undefined);
        }
    }
    function autoScroll(slideSpeed) {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed)
            return;
        const thumbsSlidesPerView = thumbsSwiper.params.slidesPerView;
        const slidesPerView = thumbsSlidesPerView === 'auto'
            ? thumbsSwiper.slidesPerViewDynamic()
            : (thumbsSlidesPerView ?? 1);
        const autoScrollOffset = getParams().autoScrollOffset;
        const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
        if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
            const currentThumbsIndex = thumbsSwiper.activeIndex;
            let newThumbsIndex;
            let direction;
            if (thumbsSwiper.params.loop) {
                const newThumbsSlide = thumbsSwiper.slides.find((slideEl) => slideEl.getAttribute('data-swiper-slide-index') === `${swiper.realIndex}`);
                newThumbsIndex = newThumbsSlide ? thumbsSwiper.slides.indexOf(newThumbsSlide) : -1;
                direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
            }
            else {
                newThumbsIndex = swiper.realIndex;
                direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
            }
            if (useOffset) {
                newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
            }
            if (thumbsSwiper.visibleSlidesIndexes &&
                thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                if (thumbsSwiper.params.centeredSlides) {
                    if (newThumbsIndex > currentThumbsIndex) {
                        newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                    }
                    else {
                        newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                    }
                }
                else if (newThumbsIndex > currentThumbsIndex &&
                    thumbsSwiper.params.slidesPerGroup === 1) ;
                thumbsSwiper.slideTo(newThumbsIndex, slideSpeed);
            }
        }
    }
    on('beforeInit', () => {
        const thumbs = swiper.params.thumbs;
        if (!thumbs || !thumbs.swiper)
            return;
        if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
            const getThumbsElementAndInit = () => {
                const thumbsElement = typeof thumbs.swiper === 'string'
                    ? document.querySelector(thumbs.swiper)
                    : thumbs.swiper;
                if (thumbsElement && thumbsElement.swiper) {
                    thumbs.swiper = thumbsElement.swiper;
                    init();
                    update(true);
                }
                else if (thumbsElement) {
                    const eventName = `${swiper.params.eventsPrefix}init`;
                    const onThumbsSwiper = (e) => {
                        const detail = e.detail;
                        thumbs.swiper = detail[0];
                        thumbsElement.removeEventListener(eventName, onThumbsSwiper);
                        init();
                        update(true);
                        thumbs.swiper.update();
                        swiper.update();
                    };
                    thumbsElement.addEventListener(eventName, onThumbsSwiper);
                }
                return thumbsElement;
            };
            const watchForThumbsToAppear = () => {
                if (swiper.destroyed)
                    return;
                const thumbsElement = getThumbsElementAndInit();
                if (!thumbsElement) {
                    requestAnimationFrame(watchForThumbsToAppear);
                }
            };
            requestAnimationFrame(watchForThumbsToAppear);
        }
        else {
            init();
            update(true);
        }
    });
    on('slideChange update resize observerUpdate', () => {
        update();
    });
    on('setTransition', (_s, duration) => {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed)
            return;
        thumbsSwiper.setTransition(duration);
    });
    on('beforeDestroy', () => {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed)
            return;
        if (swiperCreated) {
            thumbsSwiper.destroy();
        }
    });
    Object.assign(swiper.thumbs, {
        init,
        update,
    });
};




/***/ }),

/***/ "./node_modules/swiper/modules/virtual.mjs":
/*!*************************************************!*\
  !*** ./node_modules/swiper/modules/virtual.mjs ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Virtual; }
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


const Virtual = ({ swiper, extendParams, on, emit }) => {
    extendParams({
        virtual: {
            enabled: false,
            slides: [],
            cache: true,
            slidesPerViewAutoSlideSize: 320,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: true,
            addSlidesBefore: 0,
            addSlidesAfter: 0,
        },
    });
    let cssModeTimeout;
    // Methods (appendSlide/prependSlide/removeSlide/removeAllSlides/update) are
    // attached via Object.assign below once they're defined. Cast through
    // Partial<> so the initial state-only literal can be assigned without
    // pretending the methods exist yet.
    swiper.virtual = {
        cache: {},
        from: 0,
        // -1 marks "nothing rendered yet": no real update can produce to < from,
        // so the first update() never mistakes slide 0 for an already-rendered
        // slide and always appends the full [from, to] window (#8202).
        to: -1,
        slides: [],
        offset: 0,
        slidesGrid: [],
    };
    function getParams() {
        return swiper.params.virtual;
    }
    // Created lazily so module init does not touch the DOM (SSR / Node safe).
    let tempDOM;
    const getTempDOM = () => (tempDOM ??= document.createElement('div'));
    function renderSlide(slide, index) {
        const params = getParams();
        if (params.cache && swiper.virtual.cache[index]) {
            return swiper.virtual.cache[index];
        }
        let slideEl;
        if (params.renderSlide) {
            const rendered = params.renderSlide.call(swiper, slide, index);
            if (typeof rendered === 'string') {
                const el = getTempDOM();
                (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.w)(el, rendered);
                slideEl = el.children[0];
            }
            else {
                slideEl = rendered;
            }
        }
        else if (swiper.isElement) {
            slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.a)('swiper-slide');
        }
        else {
            slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.a)('div', swiper.params.slideClass);
        }
        slideEl.setAttribute('data-swiper-slide-index', String(index));
        if (!params.renderSlide) {
            (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.w)(slideEl, slide);
        }
        if (params.cache) {
            swiper.virtual.cache[index] = slideEl;
        }
        return slideEl;
    }
    function update(force, beforeInit, forceActiveIndex) {
        const { slidesPerGroup, centeredSlides, slidesPerView, loop: isLoop, initialSlide, } = swiper.params;
        if (beforeInit && !isLoop && (initialSlide ?? 0) > 0) {
            return;
        }
        const { addSlidesBefore, addSlidesAfter, slidesPerViewAutoSlideSize } = getParams();
        const { from: previousFrom, to: previousTo, slides, slidesGrid: previousSlidesGrid, offset: previousOffset, } = swiper.virtual;
        if (!swiper.params.cssMode) {
            swiper.updateActiveIndex();
        }
        const activeIndex = typeof forceActiveIndex === 'undefined' ? swiper.activeIndex || 0 : forceActiveIndex;
        let offsetProp;
        if (swiper.rtlTranslate)
            offsetProp = 'right';
        else
            offsetProp = swiper.isHorizontal() ? 'left' : 'top';
        let slidesPerViewNumeric;
        if (slidesPerView === 'auto') {
            if (slidesPerViewAutoSlideSize) {
                let swiperSize = swiper.size;
                if (!swiperSize) {
                    swiperSize = swiper.isHorizontal()
                        ? swiper.el.getBoundingClientRect().width
                        : swiper.el.getBoundingClientRect().height;
                }
                slidesPerViewNumeric = Math.max(1, Math.ceil(swiperSize / slidesPerViewAutoSlideSize));
            }
            else {
                slidesPerViewNumeric = 1;
            }
        }
        else {
            slidesPerViewNumeric = slidesPerView ?? 1;
        }
        const groupSize = slidesPerGroup ?? 1;
        let slidesAfter;
        let slidesBefore;
        if (centeredSlides) {
            slidesAfter = Math.floor(slidesPerViewNumeric / 2) + groupSize + addSlidesAfter;
            slidesBefore = Math.floor(slidesPerViewNumeric / 2) + groupSize + addSlidesBefore;
        }
        else {
            slidesAfter = slidesPerViewNumeric + (groupSize - 1) + addSlidesAfter;
            slidesBefore = (isLoop ? slidesPerViewNumeric : groupSize) + addSlidesBefore;
        }
        let from = activeIndex - slidesBefore;
        let to = activeIndex + slidesAfter;
        if (!isLoop) {
            from = Math.max(from, 0);
            to = Math.min(to, slides.length - 1);
        }
        let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
        if (isLoop && activeIndex >= slidesBefore) {
            from -= slidesBefore;
            if (!centeredSlides)
                offset += swiper.slidesGrid[0];
        }
        else if (isLoop && activeIndex < slidesBefore) {
            from = -slidesBefore;
            if (centeredSlides)
                offset += swiper.slidesGrid[0];
        }
        Object.assign(swiper.virtual, {
            from,
            to,
            offset,
            slidesGrid: swiper.slidesGrid,
            slidesBefore,
            slidesAfter,
        });
        function onRendered() {
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();
            emit('virtualUpdate');
        }
        if (previousFrom === from && previousTo === to && !force) {
            if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
                swiper.slides.forEach((slideEl) => {
                    slideEl.style.setProperty(offsetProp, `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`);
                });
            }
            swiper.updateProgress();
            emit('virtualUpdate');
            return;
        }
        const virtualParams = getParams();
        if (virtualParams.renderExternal) {
            const slidesToRender = [];
            for (let i = from; i <= to; i += 1) {
                slidesToRender.push(slides[i]);
            }
            virtualParams.renderExternal.call(swiper, {
                offset,
                from,
                to,
                slides: slidesToRender,
            });
            if (virtualParams.renderExternalUpdate) {
                onRendered();
            }
            else {
                emit('virtualUpdate');
            }
            return;
        }
        const prependIndexes = [];
        const appendIndexes = [];
        const getSlideIndex = (index) => {
            let slideIndex = index;
            if (index < 0) {
                slideIndex = slides.length + index;
            }
            else if (slideIndex >= slides.length) {
                slideIndex = slideIndex - slides.length;
            }
            return slideIndex;
        };
        if (force) {
            swiper.slides
                .filter((el) => el.matches(`.${swiper.params.slideClass}, swiper-slide`))
                .forEach((slideEl) => {
                slideEl.remove();
            });
        }
        else {
            for (let i = previousFrom; i <= previousTo; i += 1) {
                if (i < from || i > to) {
                    const slideIndex = getSlideIndex(i);
                    swiper.slides
                        .filter((el) => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`))
                        .forEach((slideEl) => {
                        slideEl.remove();
                    });
                }
            }
        }
        const loopFrom = isLoop ? -slides.length : 0;
        const loopTo = isLoop ? slides.length * 2 : slides.length;
        for (let i = loopFrom; i < loopTo; i += 1) {
            if (i >= from && i <= to) {
                const slideIndex = getSlideIndex(i);
                if (typeof previousTo === 'undefined' || force) {
                    appendIndexes.push(slideIndex);
                }
                else {
                    if (i > previousTo)
                        appendIndexes.push(slideIndex);
                    if (i < previousFrom)
                        prependIndexes.push(slideIndex);
                }
            }
        }
        appendIndexes.forEach((index) => {
            swiper.slidesEl.append(renderSlide(slides[index], index));
        });
        if (isLoop) {
            for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
                const index = prependIndexes[i];
                swiper.slidesEl.prepend(renderSlide(slides[index], index));
            }
        }
        else {
            prependIndexes.sort((a, b) => b - a);
            prependIndexes.forEach((index) => {
                swiper.slidesEl.prepend(renderSlide(slides[index], index));
            });
        }
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach((slideEl) => {
            slideEl.style.setProperty(offsetProp, `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`);
        });
        onRendered();
    }
    function appendSlide(slides) {
        if (slides !== null &&
            typeof slides === 'object' &&
            'length' in slides) {
            const arr = slides;
            for (let i = 0; i < arr.length; i += 1) {
                if (arr[i])
                    swiper.virtual.slides.push(arr[i]);
            }
        }
        else {
            swiper.virtual.slides.push(slides);
        }
        update(true);
    }
    function prependSlide(slides) {
        const activeIndex = swiper.activeIndex;
        let newActiveIndex = activeIndex + 1;
        let numberOfNewSlides = 1;
        if (Array.isArray(slides)) {
            for (let i = 0; i < slides.length; i += 1) {
                if (slides[i])
                    swiper.virtual.slides.unshift(slides[i]);
            }
            newActiveIndex = activeIndex + slides.length;
            numberOfNewSlides = slides.length;
        }
        else {
            swiper.virtual.slides.unshift(slides);
        }
        if (getParams().cache) {
            const cache = swiper.virtual.cache;
            const newCache = {};
            Object.keys(cache).forEach((cachedIndex) => {
                const cachedEl = cache[Number(cachedIndex)];
                const cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index');
                if (cachedElIndex) {
                    cachedEl.setAttribute('data-swiper-slide-index', String(parseInt(cachedElIndex, 10) + numberOfNewSlides));
                }
                newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
            });
            swiper.virtual.cache = newCache;
        }
        update(true);
        swiper.slideTo(newActiveIndex, 0);
    }
    function removeSlide(slidesIndexes) {
        if (typeof slidesIndexes === 'undefined' || slidesIndexes === null)
            return;
        let activeIndex = swiper.activeIndex;
        const shiftCacheDownFrom = (removedIndex) => {
            Object.keys(swiper.virtual.cache).forEach((key) => {
                const numericKey = Number(key);
                if (numericKey > removedIndex) {
                    const shifted = swiper.virtual.cache[numericKey];
                    swiper.virtual.cache[numericKey - 1] = shifted;
                    shifted.setAttribute('data-swiper-slide-index', String(numericKey - 1));
                    delete swiper.virtual.cache[numericKey];
                }
            });
        };
        if (Array.isArray(slidesIndexes)) {
            for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
                if (getParams().cache) {
                    delete swiper.virtual.cache[slidesIndexes[i]];
                    shiftCacheDownFrom(slidesIndexes[i]);
                }
                swiper.virtual.slides.splice(slidesIndexes[i], 1);
                if (slidesIndexes[i] < activeIndex)
                    activeIndex -= 1;
                activeIndex = Math.max(activeIndex, 0);
            }
        }
        else {
            if (getParams().cache) {
                delete swiper.virtual.cache[slidesIndexes];
                shiftCacheDownFrom(slidesIndexes);
            }
            swiper.virtual.slides.splice(slidesIndexes, 1);
            if (slidesIndexes < activeIndex)
                activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        update(true);
        swiper.slideTo(activeIndex, 0);
    }
    function removeAllSlides() {
        swiper.virtual.slides = [];
        if (getParams().cache) {
            swiper.virtual.cache = {};
        }
        update(true);
        swiper.slideTo(0, 0);
    }
    on('beforeInit', () => {
        if (!getParams().enabled)
            return;
        let domSlidesAssigned = false;
        const passedVirtual = swiper.passedParams.virtual;
        const passedSlidesUndefined = !passedVirtual || typeof passedVirtual !== 'object' || passedVirtual.slides === undefined;
        if (passedSlidesUndefined) {
            const slides = [...swiper.slidesEl.children].filter((el) => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
            if (slides && slides.length) {
                swiper.virtual.slides = [...slides];
                domSlidesAssigned = true;
                slides.forEach((slideEl, slideIndex) => {
                    slideEl.setAttribute('data-swiper-slide-index', String(slideIndex));
                    swiper.virtual.cache[slideIndex] = slideEl;
                    slideEl.remove();
                });
            }
        }
        if (!domSlidesAssigned) {
            swiper.virtual.slides = getParams().slides;
        }
        swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
        update(false, true);
    });
    on('setTranslate', () => {
        if (!getParams().enabled)
            return;
        if (swiper.params.cssMode && !swiper._immediateVirtual) {
            clearTimeout(cssModeTimeout);
            cssModeTimeout = setTimeout(() => {
                update();
            }, 100);
        }
        else {
            update();
        }
    });
    on('init update resize', () => {
        if (!getParams().enabled)
            return;
        if (swiper.params.cssMode) {
            (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
        }
    });
    Object.assign(swiper.virtual, {
        appendSlide,
        prependSlide,
        removeSlide,
        removeAllSlides,
        update,
    });
};




/***/ }),

/***/ "./node_modules/swiper/modules/zoom.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/zoom.mjs ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Zoom; }
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


const Zoom = ({ swiper, extendParams, on, emit }) => {
    extendParams({
        zoom: {
            enabled: false,
            limitToOriginalSize: false,
            maxRatio: 3,
            minRatio: 1,
            panOnMouseMove: false,
            toggle: true,
            containerClass: 'swiper-zoom-container',
            zoomedSlideClass: 'swiper-slide-zoomed',
        },
    });
    swiper.zoom = {
        enabled: false,
    };
    function getParams() {
        return swiper.params.zoom;
    }
    let currentScale = 1;
    let isScaling = false;
    let isPanningWithMouse = false;
    let mousePanStart = { x: 0, y: 0 };
    const mousePanSensitivity = -3; // Negative to invert pan direction
    let fakeGestureTouched = false;
    let fakeGestureMoved = false;
    const evCache = [];
    const gesture = {
        originX: 0,
        originY: 0,
        slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        imageEl: undefined,
        imageWrapEl: undefined,
        maxRatio: 3,
    };
    const image = {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {},
        touchesCurrent: {},
    };
    const velocity = {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined,
    };
    let scale = 1;
    Object.defineProperty(swiper.zoom, 'scale', {
        get() {
            return scale;
        },
        set(value) {
            if (scale !== value) {
                const imageEl = gesture.imageEl;
                const slideEl = gesture.slideEl;
                emit('zoomChange', value, imageEl, slideEl);
            }
            scale = value;
        },
    });
    function getDistanceBetweenTouches() {
        if (evCache.length < 2)
            return 1;
        const x1 = evCache[0].pageX;
        const y1 = evCache[0].pageY;
        const x2 = evCache[1].pageX;
        const y2 = evCache[1].pageY;
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return distance;
    }
    function getMaxRatio() {
        const params = getParams();
        const attr = gesture.imageWrapEl?.getAttribute('data-swiper-zoom');
        const maxRatio = attr != null ? Number(attr) : params.maxRatio;
        const imageEl = gesture.imageEl;
        if (params.limitToOriginalSize && imageEl && imageEl.naturalWidth) {
            const imageMaxRatio = imageEl.naturalWidth / imageEl.offsetWidth;
            return Math.min(imageMaxRatio, maxRatio);
        }
        return maxRatio;
    }
    function getScaleOrigin() {
        if (evCache.length < 2 || !gesture.imageEl)
            return [null, null];
        const box = gesture.imageEl.getBoundingClientRect();
        return [
            (evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window.scrollX) /
                currentScale,
            (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window.scrollY) /
                currentScale,
        ];
    }
    function getSlideSelector() {
        return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    }
    function eventWithinSlide(e) {
        const slideSelector = getSlideSelector();
        const target = e.target;
        if (!target)
            return false;
        if (target.matches(slideSelector))
            return true;
        if (swiper.slides.filter((slideEl) => slideEl.contains(target)).length > 0)
            return true;
        return false;
    }
    function eventWithinZoomContainer(e) {
        const selector = `.${getParams().containerClass}`;
        const target = e.target;
        if (!target)
            return false;
        if (target.matches(selector))
            return true;
        if ([...swiper.hostEl.querySelectorAll(selector)].filter((containerEl) => containerEl.contains(target)).length > 0)
            return true;
        return false;
    }
    // Events
    function onGestureStart(e) {
        if (e.pointerType === 'mouse') {
            evCache.splice(0, evCache.length);
        }
        if (!eventWithinSlide(e))
            return;
        const params = getParams();
        fakeGestureTouched = false;
        fakeGestureMoved = false;
        evCache.push(e);
        if (evCache.length < 2) {
            return;
        }
        fakeGestureTouched = true;
        gesture.scaleStart = getDistanceBetweenTouches();
        if (!gesture.slideEl) {
            const target = e.target;
            gesture.slideEl =
                target?.closest(`.${swiper.params.slideClass}, swiper-slide`) ??
                    undefined;
            if (!gesture.slideEl)
                gesture.slideEl = swiper.slides[swiper.activeIndex];
            let imageEl = gesture.slideEl?.querySelector(`.${params.containerClass}`) ?? null;
            if (imageEl) {
                imageEl =
                    imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0] ?? null;
            }
            gesture.imageEl = imageEl ?? undefined;
            if (imageEl) {
                gesture.imageWrapEl =
                    (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.j)(imageEl, `.${params.containerClass}`)[0] ??
                        undefined;
            }
            else {
                gesture.imageWrapEl = undefined;
            }
            if (!gesture.imageWrapEl) {
                gesture.imageEl = undefined;
                return;
            }
            gesture.maxRatio = getMaxRatio();
        }
        if (gesture.imageEl) {
            const [originX, originY] = getScaleOrigin();
            gesture.originX = originX ?? 0;
            gesture.originY = originY ?? 0;
            gesture.imageEl.style.transitionDuration = '0ms';
        }
        isScaling = true;
    }
    function onGestureChange(e) {
        if (!eventWithinSlide(e))
            return;
        const params = getParams();
        const zoom = swiper.zoom;
        const pointerIndex = evCache.findIndex((cachedEv) => cachedEv.pointerId === e.pointerId);
        if (pointerIndex >= 0)
            evCache[pointerIndex] = e;
        if (evCache.length < 2) {
            return;
        }
        fakeGestureMoved = true;
        gesture.scaleMove = getDistanceBetweenTouches();
        if (!gesture.imageEl) {
            return;
        }
        zoom.scale = (gesture.scaleMove / (gesture.scaleStart ?? 1)) * currentScale;
        if (zoom.scale > gesture.maxRatio) {
            zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
        }
        if (zoom.scale < params.minRatio) {
            zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
        }
        gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    }
    function onGestureEnd(e) {
        if (!eventWithinSlide(e))
            return;
        if (e.pointerType === 'mouse' && e.type === 'pointerout')
            return;
        const params = getParams();
        const zoom = swiper.zoom;
        const pointerIndex = evCache.findIndex((cachedEv) => cachedEv.pointerId === e.pointerId);
        if (pointerIndex >= 0)
            evCache.splice(pointerIndex, 1);
        if (!fakeGestureTouched || !fakeGestureMoved) {
            return;
        }
        fakeGestureTouched = false;
        fakeGestureMoved = false;
        if (!gesture.imageEl)
            return;
        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
        gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
        gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
        currentScale = zoom.scale;
        isScaling = false;
        if (zoom.scale > 1 && gesture.slideEl) {
            gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
        }
        else if (zoom.scale <= 1 && gesture.slideEl) {
            gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
        }
        if (zoom.scale === 1) {
            gesture.originX = 0;
            gesture.originY = 0;
            gesture.slideEl = undefined;
        }
    }
    let allowTouchMoveTimeout;
    function allowTouchMove() {
        swiper.touchEventsData.preventTouchMoveFromPointerMove = false;
    }
    function preventTouchMove() {
        if (allowTouchMoveTimeout !== undefined)
            clearTimeout(allowTouchMoveTimeout);
        swiper.touchEventsData.preventTouchMoveFromPointerMove = true;
        allowTouchMoveTimeout = setTimeout(() => {
            if (swiper.destroyed)
                return;
            allowTouchMove();
        });
    }
    function onTouchStart(e) {
        const device = swiper.device;
        if (!gesture.imageEl)
            return;
        if (image.isTouched)
            return;
        if (device.android && e.cancelable)
            e.preventDefault();
        image.isTouched = true;
        const event = evCache.length > 0 ? evCache[0] : e;
        image.touchesStart.x = event.pageX;
        image.touchesStart.y = event.pageY;
    }
    function onTouchMove(e) {
        const isMouseEvent = e.pointerType === 'mouse';
        const isMousePan = isMouseEvent && getParams().panOnMouseMove;
        if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) {
            return;
        }
        const zoom = swiper.zoom;
        if (!gesture.imageEl) {
            return;
        }
        if (!image.isTouched || !gesture.slideEl) {
            if (isMousePan)
                onMouseMove(e);
            return;
        }
        if (isMousePan) {
            onMouseMove(e);
            return;
        }
        if (!image.isMoved) {
            image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
            image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
            image.startX = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.q)(gesture.imageWrapEl, 'x') || 0;
            image.startY = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.q)(gesture.imageWrapEl, 'y') || 0;
            gesture.slideWidth = gesture.slideEl.offsetWidth;
            gesture.slideHeight = gesture.slideEl.offsetHeight;
            gesture.imageWrapEl.style.transitionDuration = '0ms';
        }
        // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
        image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
        const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - (image.touchesStart.x ?? 0)), Math.abs(image.touchesCurrent.y - (image.touchesStart.y ?? 0)));
        if (touchesDiff > 5) {
            swiper.allowClick = false;
        }
        const startX = image.startX ?? 0;
        const startY = image.startY ?? 0;
        if (!image.isMoved && !isScaling) {
            if (swiper.isHorizontal() &&
                ((Math.floor(image.minX) === Math.floor(startX) &&
                    image.touchesCurrent.x < (image.touchesStart.x ?? 0)) ||
                    (Math.floor(image.maxX) === Math.floor(startX) &&
                        image.touchesCurrent.x > (image.touchesStart.x ?? 0)))) {
                image.isTouched = false;
                allowTouchMove();
                return;
            }
            if (!swiper.isHorizontal() &&
                ((Math.floor(image.minY) === Math.floor(startY) &&
                    image.touchesCurrent.y < (image.touchesStart.y ?? 0)) ||
                    (Math.floor(image.maxY) === Math.floor(startY) &&
                        image.touchesCurrent.y > (image.touchesStart.y ?? 0)))) {
                image.isTouched = false;
                allowTouchMove();
                return;
            }
        }
        if (e.cancelable) {
            e.preventDefault();
        }
        e.stopPropagation();
        preventTouchMove();
        image.isMoved = true;
        const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - getParams().minRatio);
        const { originX, originY } = gesture;
        image.currentX =
            image.touchesCurrent.x -
                (image.touchesStart.x ?? 0) +
                startX +
                scaleRatio * (image.width - originX * 2);
        image.currentY =
            image.touchesCurrent.y -
                (image.touchesStart.y ?? 0) +
                startY +
                scaleRatio * (image.height - originY * 2);
        if (image.currentX < image.minX) {
            image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
        }
        if (image.currentX > image.maxX) {
            image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
        }
        if (image.currentY < image.minY) {
            image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
        }
        if (image.currentY > image.maxY) {
            image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
        }
        // Velocity
        if (!velocity.prevPositionX)
            velocity.prevPositionX = image.touchesCurrent.x;
        if (!velocity.prevPositionY)
            velocity.prevPositionY = image.touchesCurrent.y;
        if (!velocity.prevTime)
            velocity.prevTime = Date.now();
        velocity.x =
            (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y =
            (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2)
            velocity.x = 0;
        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2)
            velocity.y = 0;
        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();
        gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
    }
    function onTouchEnd() {
        const zoom = swiper.zoom;
        evCache.length = 0;
        if (!gesture.imageEl)
            return;
        if (!image.isTouched || !image.isMoved) {
            image.isTouched = false;
            image.isMoved = false;
            return;
        }
        image.isTouched = false;
        image.isMoved = false;
        let momentumDurationX = 300;
        let momentumDurationY = 300;
        const velocityX = velocity.x ?? 0;
        const velocityY = velocity.y ?? 0;
        const momentumDistanceX = velocityX * momentumDurationX;
        const newPositionX = image.currentX + momentumDistanceX;
        const momentumDistanceY = velocityY * momentumDurationY;
        const newPositionY = image.currentY + momentumDistanceY;
        // Fix duration
        if (velocityX !== 0)
            momentumDurationX = Math.abs((newPositionX - image.currentX) / velocityX);
        if (velocityY !== 0)
            momentumDurationY = Math.abs((newPositionY - image.currentY) / velocityY);
        const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        image.currentX = newPositionX;
        image.currentY = newPositionY;
        // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
        gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
        gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
    }
    function onTransitionEnd() {
        const zoom = swiper.zoom;
        if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
            if (gesture.imageEl) {
                gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
            }
            if (gesture.imageWrapEl) {
                gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
            }
            gesture.slideEl.classList.remove(`${getParams().zoomedSlideClass}`);
            zoom.scale = 1;
            currentScale = 1;
            gesture.slideEl = undefined;
            gesture.imageEl = undefined;
            gesture.imageWrapEl = undefined;
            gesture.originX = 0;
            gesture.originY = 0;
        }
    }
    function onMouseMove(e) {
        // Only pan if zoomed in and mouse panning is enabled
        if (currentScale <= 1 || !gesture.imageWrapEl)
            return;
        if (!eventWithinSlide(e) || !eventWithinZoomContainer(e))
            return;
        const currentTransform = window.getComputedStyle(gesture.imageWrapEl).transform;
        const matrix = new window.DOMMatrix(currentTransform);
        if (!isPanningWithMouse) {
            isPanningWithMouse = true;
            mousePanStart.x = e.clientX;
            mousePanStart.y = e.clientY;
            image.startX = matrix.e;
            image.startY = matrix.f;
            image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
            image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
            gesture.slideWidth = gesture.slideEl.offsetWidth;
            gesture.slideHeight = gesture.slideEl.offsetHeight;
            return;
        }
        const deltaX = (e.clientX - mousePanStart.x) * mousePanSensitivity;
        const deltaY = (e.clientY - mousePanStart.y) * mousePanSensitivity;
        const scaledWidth = image.width * currentScale;
        const scaledHeight = image.height * currentScale;
        const slideWidth = gesture.slideWidth;
        const slideHeight = gesture.slideHeight;
        const minX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
        const maxX = -minX;
        const minY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
        const maxY = -minY;
        const newX = Math.max(Math.min(image.startX + deltaX, maxX), minX);
        const newY = Math.max(Math.min(image.startY + deltaY, maxY), minY);
        gesture.imageWrapEl.style.transitionDuration = '0ms';
        gesture.imageWrapEl.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
        mousePanStart.x = e.clientX;
        mousePanStart.y = e.clientY;
        image.startX = newX;
        image.startY = newY;
        image.currentX = newX;
        image.currentY = newY;
    }
    function zoomIn(e) {
        const zoom = swiper.zoom;
        const params = getParams();
        if (!gesture.slideEl) {
            if (e && typeof e !== 'number' && 'target' in e && e.target) {
                gesture.slideEl =
                    e.target.closest(`.${swiper.params.slideClass}, swiper-slide`) ?? undefined;
            }
            if (!gesture.slideEl) {
                const virtual = swiper.params.virtual;
                if (virtual && virtual.enabled && swiper.virtual) {
                    gesture.slideEl =
                        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0] ?? undefined;
                }
                else {
                    gesture.slideEl = swiper.slides[swiper.activeIndex];
                }
            }
            let imageEl = gesture.slideEl?.querySelector(`.${params.containerClass}`) ?? null;
            if (imageEl) {
                imageEl =
                    imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0] ?? null;
            }
            gesture.imageEl = imageEl ?? undefined;
            if (imageEl) {
                gesture.imageWrapEl =
                    (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.j)(imageEl, `.${params.containerClass}`)[0] ??
                        undefined;
            }
            else {
                gesture.imageWrapEl = undefined;
            }
        }
        if (!gesture.imageEl || !gesture.imageWrapEl || !gesture.slideEl)
            return;
        gesture.maxRatio = getMaxRatio();
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.overflow = 'hidden';
            swiper.wrapperEl.style.touchAction = 'none';
        }
        gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
        let touchX;
        let touchY;
        let offsetX;
        let offsetY;
        let diffX;
        let diffY;
        let translateX;
        let translateY;
        let imageWidth;
        let imageHeight;
        let scaledWidth;
        let scaledHeight;
        let translateMinX;
        let translateMinY;
        let translateMaxX;
        let translateMaxY;
        let slideWidth;
        let slideHeight;
        const eventIsPointer = e && typeof e !== 'number';
        if (typeof image.touchesStart.x === 'undefined' && eventIsPointer) {
            touchX = e.pageX;
            touchY = e.pageY;
        }
        else {
            touchX = image.touchesStart.x;
            touchY = image.touchesStart.y;
        }
        const prevScale = currentScale;
        const forceZoomRatio = typeof e === 'number' ? e : null;
        if (currentScale === 1 && forceZoomRatio) {
            touchX = undefined;
            touchY = undefined;
            image.touchesStart.x = undefined;
            image.touchesStart.y = undefined;
        }
        const maxRatio = getMaxRatio();
        zoom.scale = forceZoomRatio || maxRatio;
        currentScale = forceZoomRatio || maxRatio;
        if (e && !(currentScale === 1 && forceZoomRatio)) {
            slideWidth = gesture.slideEl.offsetWidth;
            slideHeight = gesture.slideEl.offsetHeight;
            offsetX = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.h)(gesture.slideEl).left + window.scrollX;
            offsetY = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.h)(gesture.slideEl).top + window.scrollY;
            diffX = offsetX + slideWidth / 2 - (touchX ?? 0);
            diffY = offsetY + slideHeight / 2 - (touchY ?? 0);
            imageWidth = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
            imageHeight = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
            scaledWidth = imageWidth * zoom.scale;
            scaledHeight = imageHeight * zoom.scale;
            translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
            translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
            translateMaxX = -translateMinX;
            translateMaxY = -translateMinY;
            if (prevScale > 0 &&
                forceZoomRatio &&
                typeof image.currentX === 'number' &&
                typeof image.currentY === 'number') {
                translateX = (image.currentX * zoom.scale) / prevScale;
                translateY = (image.currentY * zoom.scale) / prevScale;
            }
            else {
                translateX = diffX * zoom.scale;
                translateY = diffY * zoom.scale;
            }
            if (translateX < translateMinX) {
                translateX = translateMinX;
            }
            if (translateX > translateMaxX) {
                translateX = translateMaxX;
            }
            if (translateY < translateMinY) {
                translateY = translateMinY;
            }
            if (translateY > translateMaxY) {
                translateY = translateMaxY;
            }
        }
        else {
            translateX = 0;
            translateY = 0;
        }
        if (forceZoomRatio && zoom.scale === 1) {
            gesture.originX = 0;
            gesture.originY = 0;
        }
        image.currentX = translateX;
        image.currentY = translateY;
        gesture.imageWrapEl.style.transitionDuration = '300ms';
        gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
        gesture.imageEl.style.transitionDuration = '300ms';
        gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    }
    function zoomOut() {
        const zoom = swiper.zoom;
        const params = getParams();
        if (!gesture.slideEl) {
            const virtual = swiper.params.virtual;
            if (virtual && virtual.enabled && swiper.virtual) {
                gesture.slideEl =
                    (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0] ?? undefined;
            }
            else {
                gesture.slideEl = swiper.slides[swiper.activeIndex];
            }
            let imageEl = gesture.slideEl?.querySelector(`.${params.containerClass}`) ?? null;
            if (imageEl) {
                imageEl =
                    imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0] ?? null;
            }
            gesture.imageEl = imageEl ?? undefined;
            if (imageEl) {
                gesture.imageWrapEl =
                    (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.j)(imageEl, `.${params.containerClass}`)[0] ??
                        undefined;
            }
            else {
                gesture.imageWrapEl = undefined;
            }
        }
        if (!gesture.imageEl || !gesture.imageWrapEl || !gesture.slideEl)
            return;
        gesture.maxRatio = getMaxRatio();
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.overflow = '';
            swiper.wrapperEl.style.touchAction = '';
        }
        zoom.scale = 1;
        currentScale = 1;
        image.currentX = undefined;
        image.currentY = undefined;
        image.touchesStart.x = undefined;
        image.touchesStart.y = undefined;
        gesture.imageWrapEl.style.transitionDuration = '300ms';
        gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
        gesture.imageEl.style.transitionDuration = '300ms';
        gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
        gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
        gesture.slideEl = undefined;
        gesture.originX = 0;
        gesture.originY = 0;
        if (params.panOnMouseMove) {
            mousePanStart = { x: 0, y: 0 };
            if (isPanningWithMouse) {
                isPanningWithMouse = false;
                image.startX = 0;
                image.startY = 0;
            }
        }
    }
    // Toggle Zoom
    function zoomToggle(e) {
        const zoom = swiper.zoom;
        if (zoom.scale && zoom.scale !== 1) {
            // Zoom Out
            zoomOut();
        }
        else {
            // Zoom In
            zoomIn(e);
        }
    }
    function getListeners() {
        const passiveListener = swiper.params.passiveListeners
            ? { passive: true, capture: false }
            : false;
        const activeListenerWithCapture = swiper.params.passiveListeners
            ? { passive: false, capture: true }
            : true;
        return { passiveListener, activeListenerWithCapture };
    }
    // Attach/Detach Events
    function enable() {
        const zoom = swiper.zoom;
        if (zoom.enabled)
            return;
        zoom.enabled = true;
        const { passiveListener, activeListenerWithCapture } = getListeners();
        // Scale image
        swiper.wrapperEl.addEventListener('pointerdown', onGestureStart, passiveListener);
        swiper.wrapperEl.addEventListener('pointermove', onGestureChange, activeListenerWithCapture);
        ['pointerup', 'pointercancel', 'pointerout'].forEach((eventName) => {
            swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
        });
        // Move image
        swiper.wrapperEl.addEventListener('pointermove', onTouchMove, activeListenerWithCapture);
    }
    function disable() {
        const zoom = swiper.zoom;
        if (!zoom.enabled)
            return;
        zoom.enabled = false;
        const { passiveListener, activeListenerWithCapture } = getListeners();
        // Scale image
        swiper.wrapperEl.removeEventListener('pointerdown', onGestureStart, passiveListener);
        swiper.wrapperEl.removeEventListener('pointermove', onGestureChange, activeListenerWithCapture);
        ['pointerup', 'pointercancel', 'pointerout'].forEach((eventName) => {
            swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
        });
        // Move image
        swiper.wrapperEl.removeEventListener('pointermove', onTouchMove, activeListenerWithCapture);
    }
    on('init', () => {
        if (getParams().enabled) {
            enable();
        }
    });
    on('destroy', () => {
        disable();
    });
    on('touchStart', (_s, e) => {
        if (!swiper.zoom.enabled)
            return;
        onTouchStart(e);
    });
    on('touchEnd', () => {
        if (!swiper.zoom.enabled)
            return;
        onTouchEnd();
    });
    on('doubleTap', (_s, e) => {
        if (!swiper.animating && getParams().enabled && swiper.zoom.enabled && getParams().toggle) {
            zoomToggle(e);
        }
    });
    on('transitionEnd', () => {
        if (swiper.zoom.enabled && getParams().enabled) {
            onTransitionEnd();
        }
    });
    on('slideChange', () => {
        if (swiper.zoom.enabled && getParams().enabled && swiper.params.cssMode) {
            onTransitionEnd();
        }
    });
    Object.assign(swiper.zoom, {
        enable,
        disable,
        in: zoomIn,
        out: zoomOut,
        toggle: zoomToggle,
    });
};




/***/ }),

/***/ "./node_modules/swiper/shared/classes-to-selector.mjs":
/*!************************************************************!*\
  !*** ./node_modules/swiper/shared/classes-to-selector.mjs ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: function() { return /* binding */ classesToSelector; }
/* harmony export */ });
function classesToSelector(classes = '') {
    return `.${classes
        .trim()
        .replace(/([.:!+/()[\]#>~*^$|=,'"@{}\\])/g, '\\$1')
        .replace(/ /g, '.')}`;
}




/***/ }),

/***/ "./node_modules/swiper/shared/create-element-if-not-defined.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/shared/create-element-if-not-defined.mjs ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: function() { return /* binding */ createElementIfNotDefined; }
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    const target = (params ?? {});
    const original = (originalParams ?? {});
    if (swiper.params.createElements) {
        Object.keys(checkProps).forEach((key) => {
            if (!target[key] && target.auto === true) {
                let element = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.el, `.${checkProps[key]}`)[0];
                if (!element) {
                    element = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.a)('div', checkProps[key]);
                    element.className = checkProps[key];
                    swiper.el.append(element);
                }
                target[key] = element;
                original[key] = element;
            }
        });
    }
    return target;
}




/***/ }),

/***/ "./node_modules/swiper/shared/create-shadow.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/shared/create-shadow.mjs ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: function() { return /* binding */ createShadow; }
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function createShadow(suffix, slideEl, side) {
    const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}${suffix ? ` swiper-slide-shadow-${suffix}` : ''}`;
    const shadowContainer = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.p)(slideEl);
    const selector = `.${shadowClass.split(' ').join('.')}`;
    const existing = shadowContainer.querySelector(selector);
    if (existing)
        return existing;
    const created = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.a)('div', shadowClass.split(' '));
    shadowContainer.append(created);
    return created;
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-init.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/shared/effect-init.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: function() { return /* binding */ effectInit; }
/* harmony export */ });
function effectInit(params) {
    const { effect, swiper, on, setTranslate, setTransition, overwriteParams, perspective, recreateShadows, getEffectParams, } = params;
    on('beforeInit', () => {
        if (swiper.params.effect !== effect)
            return;
        swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
        if (perspective && perspective()) {
            swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        }
        const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
        Object.assign(swiper.params, overwriteParamsResult);
        Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on('setTranslate _virtualUpdated', () => {
        if (swiper.params.effect !== effect)
            return;
        setTranslate();
    });
    on('setTransition', (_s, duration) => {
        if (swiper.params.effect !== effect)
            return;
        setTransition(duration);
    });
    on('transitionEnd', () => {
        if (swiper.params.effect !== effect)
            return;
        if (recreateShadows) {
            const effectParams = getEffectParams ? getEffectParams() : undefined;
            if (!effectParams || !effectParams.slideShadows)
                return;
            swiper.slides.forEach((slideEl) => {
                slideEl
                    .querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                    .forEach((shadowEl) => shadowEl.remove());
            });
            recreateShadows();
        }
    });
    let requireUpdateOnVirtual = false;
    on('virtualUpdate', () => {
        if (swiper.params.effect !== effect)
            return;
        if (!swiper.slides.length) {
            requireUpdateOnVirtual = true;
        }
        requestAnimationFrame(() => {
            if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
                setTranslate();
                requireUpdateOnVirtual = false;
            }
        });
    });
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-target.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/shared/effect-target.mjs ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: function() { return /* binding */ effectTarget; }
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function effectTarget(_effectParams, slideEl) {
    const transformEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.p)(slideEl);
    if (transformEl !== slideEl) {
        transformEl.style.backfaceVisibility = 'hidden';
        transformEl.style.setProperty('-webkit-backface-visibility', 'hidden');
    }
    return transformEl;
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/shared/effect-virtual-transition-end.mjs ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: function() { return /* binding */ effectVirtualTransitionEnd; }
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function effectVirtualTransitionEnd({ swiper, duration, transformElements, allSlides, }) {
    const { activeIndex } = swiper;
    const getSlide = (el) => {
        if (!el.parentElement) {
            // assume shadow root
            return swiper.slides.find((slideEl) => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode);
        }
        if (el.parentElement instanceof HTMLElement)
            return el.parentElement;
        return undefined;
    };
    if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        let transitionEndTarget;
        if (allSlides) {
            transitionEndTarget = transformElements;
        }
        else {
            transitionEndTarget = transformElements.filter((transformEl) => {
                const el = transformEl.classList.contains('swiper-slide-transform')
                    ? getSlide(transformEl)
                    : transformEl;
                return !!el && swiper.getSlideIndex(el) === activeIndex;
            });
        }
        transitionEndTarget.forEach((el) => {
            (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.m)(el, () => {
                if (eventTriggered)
                    return;
                if (!swiper || swiper.destroyed)
                    return;
                eventTriggered = true;
                swiper.animating = false;
                const evt = new CustomEvent('transitionend', { bubbles: true, cancelable: true });
                swiper.wrapperEl.dispatchEvent(evt);
            });
        });
    }
}




/***/ }),

/***/ "./node_modules/swiper/shared/swiper-core.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/shared/swiper-core.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ Swiper; },
/* harmony export */   d: function() { return /* binding */ defaults; }
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


let supportCached;
function calcSupport() {
    if (typeof window === 'undefined')
        return { touch: false };
    return {
        touch: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
    };
}
function getSupport() {
    if (!supportCached)
        supportCached = calcSupport();
    return supportCached;
}

let deviceCached;
function calcDevice({ userAgent } = {}) {
    if (typeof window === 'undefined')
        return { ios: false, android: false };
    const support = getSupport();
    const platform = navigator.platform;
    const ua = userAgent || navigator.userAgent;
    const device = { ios: false, android: false };
    const isAndroid = /(Android);?[\s/]+([\d.]+)?/.test(ua);
    const isIPhoneOrIPod = /(iPhone\sOS|iOS|iPod)/.test(ua);
    const isIPadDirect = /iPad/.test(ua);
    // iPad on iPadOS 13+ reports as MacIntel; distinguish from a real Mac by touch capability.
    const isIPadMasquerade = platform === 'MacIntel' && support.touch && navigator.maxTouchPoints > 1;
    const isIPad = isIPadDirect || isIPadMasquerade;
    const isWindows = platform === 'Win32';
    if (isAndroid && !isWindows) {
        device.os = 'android';
        device.android = true;
    }
    if (isIPad || isIPhoneOrIPod) {
        device.os = 'ios';
        device.ios = true;
    }
    return device;
}
function getDevice(overrides = {}) {
    if (!deviceCached)
        deviceCached = calcDevice(overrides);
    return deviceCached;
}

let browserCached;
function calcBrowser() {
    if (typeof window === 'undefined') {
        return { isSafari: false, isWebView: false, need3dFix: false };
    }
    const device = getDevice();
    const ua = navigator.userAgent;
    const uaLower = ua.toLowerCase();
    const isSafari = uaLower.includes('safari') && !uaLower.includes('chrome') && !uaLower.includes('android');
    const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(ua);
    // 3D transform glitches still affect iOS WebView and Safari at the baseline (16.4+).
    const need3dFix = isSafari || (isWebView && device.ios);
    return { isSafari, isWebView, need3dFix };
}
function getBrowser() {
    if (!browserCached)
        browserCached = calcBrowser();
    return browserCached;
}

const processLazyPreloader = (swiper, imageEl) => {
    if (!swiper || swiper.destroyed || !swiper.params)
        return;
    const slideSelector = () => (swiper.isElement ? 'swiper-slide' : `.${swiper.params.slideClass}`);
    const slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
        let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
        if (!lazyEl && swiper.isElement) {
            if (slideEl.shadowRoot) {
                lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            }
            else {
                requestAnimationFrame(() => {
                    if (slideEl.shadowRoot) {
                        const innerLazy = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                        if (innerLazy && !innerLazy.lazyPreloaderManaged)
                            innerLazy.remove();
                    }
                });
            }
        }
        if (lazyEl && !lazyEl.lazyPreloaderManaged)
            lazyEl.remove();
    }
};
const unlazy = (swiper, index) => {
    if (!swiper.slides[index])
        return;
    const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
    if (imageEl)
        imageEl.removeAttribute('loading');
};
const preload = (swiper) => {
    if (!swiper || swiper.destroyed || !swiper.params)
        return;
    let amount = swiper.params.lazyPreloadPrevNext;
    const len = swiper.slides.length;
    if (!len || !amount || amount < 0)
        return;
    amount = Math.min(amount, len);
    const slidesPerView = swiper.params.slidesPerView === 'auto'
        ? swiper.slidesPerViewDynamic()
        : Math.ceil(swiper.params.slidesPerView);
    const activeIndex = swiper.activeIndex;
    if (swiper.params.grid && (swiper.params.grid.rows ?? 1) > 1) {
        const activeColumn = activeIndex;
        const preloadColumns = [activeColumn - amount];
        preloadColumns.push(...Array.from({ length: amount }).map((_, i) => activeColumn + slidesPerView + i));
        swiper.slides.forEach((slideEl, i) => {
            if (slideEl.column !== undefined && preloadColumns.includes(slideEl.column))
                unlazy(swiper, i);
        });
        return;
    }
    const slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper.params.rewind || swiper.params.loop) {
        for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
            const realIndex = ((i % len) + len) % len;
            if (realIndex < activeIndex || realIndex > slideIndexLastInView)
                unlazy(swiper, realIndex);
        }
    }
    else {
        for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
            if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
                unlazy(swiper, i);
            }
        }
    }
};

function getBreakpoint(breakpoints, base = 'window', containerEl) {
    if (!breakpoints || (base === 'container' && !containerEl))
        return undefined;
    let breakpoint = false;
    const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints).map((point) => {
        if (typeof point === 'string' && point.indexOf('@') === 0) {
            const minRatio = parseFloat(point.substr(1));
            const value = currentHeight * minRatio;
            return { value, point };
        }
        return { value: point, point };
    });
    points.sort((a, b) => parseInt(String(a.value), 10) - parseInt(String(b.value), 10));
    for (let i = 0; i < points.length; i += 1) {
        const { point, value } = points[i];
        if (base === 'window') {
            if (window.matchMedia(`(min-width: ${value}px)`).matches) {
                breakpoint = point;
            }
        }
        else if (value <= containerEl.clientWidth) {
            breakpoint = point;
        }
    }
    return breakpoint || 'max';
}

const isGridEnabled = (swiper, params) => {
    return !!(swiper.grid && params.grid && params.grid.rows > 1);
};
function setBreakpoint() {
    const swiper = this;
    const { realIndex, initialized, params, el } = swiper;
    const breakpoints = params.breakpoints;
    if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0))
        return;
    // Get breakpoint for window/container width and update parameters
    const breakpointsBase = params.breakpointsBase === 'window' || !params.breakpointsBase
        ? params.breakpointsBase
        : 'container';
    const breakpointContainer = ['window', 'container'].includes(params.breakpointsBase) || !params.breakpointsBase
        ? swiper.el
        : document.querySelector(params.breakpointsBase);
    const breakpoint = swiper.getBreakpoint(breakpoints, breakpointsBase, breakpointContainer);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint)
        return;
    const breakpointsRecord = breakpoints;
    const breakpointOnlyParams = breakpoint in breakpointsRecord ? breakpointsRecord[breakpoint] : undefined;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasGrabCursor = swiper.params.grabCursor;
    const isGrabCursor = breakpointParams.grabCursor;
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
        el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    }
    else if (!wasMultiRow && isMultiRow) {
        el.classList.add(`${params.containerModifierClass}grid`);
        if ((breakpointParams.grid.fill && breakpointParams.grid.fill === 'column') ||
            (!breakpointParams.grid.fill && params.grid.fill === 'column')) {
            el.classList.add(`${params.containerModifierClass}grid-column`);
        }
        swiper.emitContainerClasses();
    }
    if (wasGrabCursor && !isGrabCursor) {
        swiper.unsetGrabCursor();
    }
    else if (!wasGrabCursor && isGrabCursor) {
        swiper.setGrabCursor();
    }
    const moduleOpt = (opts, prop) => opts[prop];
    ['navigation', 'pagination', 'scrollbar'].forEach((prop) => {
        const bpOpts = moduleOpt(breakpointParams, prop);
        if (typeof bpOpts === 'undefined')
            return;
        const paramsOpts = moduleOpt(params, prop);
        const wasModuleEnabled = typeof paramsOpts === 'object' && paramsOpts !== null && paramsOpts.enabled;
        const isModuleEnabled = typeof bpOpts === 'object' && bpOpts !== null && bpOpts.enabled;
        const moduleApi = swiper[prop];
        if (wasModuleEnabled && !isModuleEnabled)
            moduleApi?.disable?.();
        if (!wasModuleEnabled && isModuleEnabled)
            moduleApi?.enable?.();
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    const wasLoop = params.loop;
    if (directionChanged && initialized) {
        swiper.changeDirection();
    }
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    const hasLoop = swiper.params.loop;
    Object.assign(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
    });
    if (wasEnabled && !isEnabled) {
        swiper.disable();
    }
    else if (!wasEnabled && isEnabled) {
        swiper.enable();
    }
    swiper.currentBreakpoint = breakpoint;
    swiper.emit('_beforeBreakpoint', breakpointParams);
    if (initialized) {
        if (needsReLoop) {
            swiper.loopDestroy();
            swiper.loopCreate(realIndex);
            swiper.updateSlides();
        }
        else if (!wasLoop && hasLoop) {
            swiper.loopCreate(realIndex);
            swiper.updateSlides();
        }
        else if (wasLoop && !hasLoop) {
            swiper.loopDestroy();
        }
    }
    swiper.emit('breakpoint', breakpointParams);
}

var breakpoints = { setBreakpoint, getBreakpoint };

function checkOverflow() {
    const swiper = this;
    const { isLocked: wasLocked, params } = swiper;
    const { slidesOffsetBefore } = params;
    if (slidesOffsetBefore) {
        const lastSlideIndex = swiper.slides.length - 1;
        const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] +
            swiper.slidesSizesGrid[lastSlideIndex] +
            slidesOffsetBefore * 2;
        swiper.isLocked = swiper.size > lastSlideRightEdge;
    }
    else {
        swiper.isLocked = swiper.snapGrid.length === 1;
    }
    if (params.allowSlideNext === true) {
        swiper.allowSlideNext = !swiper.isLocked;
    }
    if (params.allowSlidePrev === true) {
        swiper.allowSlidePrev = !swiper.isLocked;
    }
    if (wasLocked && wasLocked !== swiper.isLocked) {
        swiper.isEnd = false;
    }
    if (wasLocked !== swiper.isLocked) {
        swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
    }
}
var checkOverflow$1 = { checkOverflow };

function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item) => {
        if (typeof item === 'object') {
            Object.keys(item).forEach((classNames) => {
                if (item[classNames]) {
                    resultClasses.push(prefix + classNames);
                }
            });
        }
        else if (typeof item === 'string') {
            resultClasses.push(prefix + item);
        }
    });
    return resultClasses;
}
function addClasses() {
    const swiper = this;
    const { classNames, params, rtl, el, device } = swiper;
    // oxfmt-ignore
    const suffixes = prepareClasses([
        'initialized',
        params.direction,
        { 'free-mode': swiper.params.freeMode && params.freeMode.enabled },
        { 'autoheight': params.autoHeight },
        { 'rtl': rtl },
        { 'grid': params.grid && params.grid.rows > 1 },
        { 'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column' },
        { 'android': device.android },
        { 'ios': device.ios },
        { 'css-mode': params.cssMode },
        { 'centered': params.cssMode && params.centeredSlides },
        { 'watch-progress': params.watchSlidesProgress },
    ], params.containerModifierClass);
    classNames.push(...suffixes);
    el.classList.add(...classNames);
    swiper.emitContainerClasses();
}

function removeClasses() {
    const swiper = this;
    const { el, classNames } = swiper;
    if (!el || typeof el === 'string')
        return;
    el.classList.remove(...classNames);
    swiper.emitContainerClasses();
}

var classes = { addClasses, removeClasses };

const defaults = {
    init: true,
    direction: 'horizontal',
    oneWayMovement: false,
    swiperElementNodeName: 'SWIPER-CONTAINER',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    eventsPrefix: 'swiper',
    enabled: true,
    focusableElements: 'input, select, option, textarea, button, video, label',
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: 'slide',
    // Breakpoints
    breakpoints: undefined,
    breakpointsBase: 'window',
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    snapToSlideEdge: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 5,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // loop
    loop: false,
    loopAddBlankSlides: true,
    loopAdditionalSlides: 0,
    loopPreventsSliding: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-blank',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideFullyVisibleClass: 'swiper-slide-fully-visible',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    wrapperClass: 'swiper-wrapper',
    lazyPreloaderClass: 'swiper-lazy-preloader',
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false,
};

var eventsEmitter = {
    on(events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed)
            return self;
        if (typeof handler !== 'function')
            return self;
        const method = priority ? 'unshift' : 'push';
        events.split(' ').forEach((event) => {
            if (!self.eventsListeners[event])
                self.eventsListeners[event] = [];
            self.eventsListeners[event][method](handler);
        });
        return self;
    },
    once(events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed)
            return self;
        if (typeof handler !== 'function')
            return self;
        const onceHandler = function onceHandlerFn(...args) {
            self.off(events, onceHandler);
            if (onceHandler.__emitterProxy) {
                delete onceHandler.__emitterProxy;
            }
            handler.apply(self, args);
        };
        onceHandler.__emitterProxy = handler;
        return self.on(events, onceHandler, priority);
    },
    onAny(handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed)
            return self;
        if (typeof handler !== 'function')
            return self;
        const method = priority ? 'unshift' : 'push';
        if (self.eventsAnyListeners.indexOf(handler) < 0) {
            self.eventsAnyListeners[method](handler);
        }
        return self;
    },
    offAny(handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed)
            return self;
        if (!self.eventsAnyListeners)
            return self;
        const index = self.eventsAnyListeners.indexOf(handler);
        if (index >= 0) {
            self.eventsAnyListeners.splice(index, 1);
        }
        return self;
    },
    off(events, handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed)
            return self;
        if (!self.eventsListeners)
            return self;
        events.split(' ').forEach((event) => {
            if (typeof handler === 'undefined') {
                self.eventsListeners[event] = [];
            }
            else if (self.eventsListeners[event]) {
                self.eventsListeners[event].forEach((eventHandler, index) => {
                    if (eventHandler === handler ||
                        (eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler)) {
                        self.eventsListeners[event].splice(index, 1);
                    }
                });
            }
        });
        return self;
    },
    emit(...args) {
        const self = this;
        if (!self.eventsListeners || self.destroyed)
            return self;
        if (!self.eventsListeners)
            return self;
        let events;
        let data;
        let context;
        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
        }
        else {
            const opts = args[0];
            events = opts.events;
            data = opts.data ?? [];
            context = opts.context || self;
        }
        data.unshift(context);
        const eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach((event) => {
            if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
                self.eventsAnyListeners.forEach((eventHandler) => {
                    eventHandler.apply(context, [event, ...data]);
                });
            }
            if (self.eventsListeners && self.eventsListeners[event]) {
                self.eventsListeners[event].forEach((eventHandler) => {
                    eventHandler.apply(context, data);
                });
            }
        });
        return self;
    },
};

function onClick(e) {
    const swiper = this;
    if (swiper.destroyed)
        return;
    if (!swiper.enabled)
        return;
    if (!swiper.allowClick) {
        if (swiper.params.preventClicks)
            e.preventDefault();
        if (swiper.params.preventClicksPropagation && swiper.animating) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
    }
}

function onDocumentTouchStart() {
    const swiper = this;
    if (swiper.destroyed)
        return;
    if (swiper.documentTouchHandlerProceeded)
        return;
    swiper.documentTouchHandlerProceeded = true;
    if (swiper.params.touchReleaseOnEdges) {
        swiper.el.style.touchAction = 'auto';
    }
}

function onLoad(e) {
    const swiper = this;
    if (swiper.destroyed)
        return;
    processLazyPreloader(swiper, e.target);
    if (swiper.params.cssMode ||
        (swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight)) {
        return;
    }
    swiper.update();
}

function onResize() {
    const swiper = this;
    const { params, el } = swiper;
    if (el && el.offsetWidth === 0)
        return;
    // Breakpoints
    if (params.breakpoints) {
        swiper.setBreakpoint();
    }
    // Save locks
    const { allowSlideNext, allowSlidePrev, snapGrid } = swiper;
    const isVirtual = swiper.virtual && swiper.params.virtual?.enabled;
    // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    const isVirtualLoop = isVirtual && params.loop;
    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) &&
        swiper.isEnd &&
        !swiper.isBeginning &&
        !swiper.params.centeredSlides &&
        !isVirtualLoop) {
        const slidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
        swiper.slideTo(slidesLength - 1, 0, false, true);
    }
    else {
        if (swiper.params.loop && !isVirtual) {
            swiper.slideToLoop(swiper.realIndex, 0, false, true);
        }
        else {
            swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        const autoplay = swiper.autoplay;
        clearTimeout(autoplay.resizeTimeout);
        autoplay.resizeTimeout = setTimeout(() => {
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                swiper.autoplay.resume();
            }
        }, 500);
    }
    // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
    }
}

function onScroll() {
    const swiper = this;
    if (swiper.destroyed)
        return;
    const { wrapperEl, rtlTranslate, enabled } = swiper;
    if (!enabled)
        return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
        swiper.translate = -wrapperEl.scrollLeft;
    }
    else {
        swiper.translate = -wrapperEl.scrollTop;
    }
    if (swiper.translate === 0)
        swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
        newProgress = 0;
    }
    else {
        newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
        swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    }
    swiper.emit('setTranslate', swiper.translate, false);
}

function onTouchEnd(event) {
    const swiper = this;
    if (swiper.destroyed)
        return;
    const data = swiper.touchEventsData;
    let e = event.originalEvent ?? event;
    const isTouchEvent = e.type === 'touchend' || e.type === 'touchcancel';
    if (!isTouchEvent) {
        if (data.touchId !== null)
            return; // return from pointer if we use touch
        const pe = e;
        if (pe.pointerId !== data.pointerId)
            return;
    }
    else {
        const te = e;
        const found = [...te.changedTouches].find((t) => t.identifier === data.touchId);
        if (!found || found.identifier !== data.touchId)
            return;
    }
    if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(e.type)) {
        const proceed = ['pointercancel', 'contextmenu'].includes(e.type) &&
            (swiper.browser.isSafari || swiper.browser.isWebView);
        if (!proceed) {
            return;
        }
    }
    data.pointerId = null;
    data.touchId = null;
    const { params, touches, rtlTranslate: rtl, slidesGrid, enabled } = swiper;
    if (!enabled)
        return;
    if (!params.simulateTouch && e.pointerType === 'mouse')
        return;
    if (data.allowTouchCallbacks) {
        swiper.emit('touchEnd', e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) {
            swiper.setGrabCursor(false);
        }
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    // Return Grab Cursor
    if (params.grabCursor &&
        data.isMoved &&
        data.isTouched &&
        (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(false);
    }
    // Time diff
    const touchEndTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.u)();
    const timeDiff = touchEndTime - data.touchStartTime;
    // Tap, doubleTap, Click
    if (swiper.allowClick) {
        // Legacy `e.path` was a non-standard Chrome extension; `composedPath()` is the modern API.
        const pathTree = e.path ?? (e.composedPath && e.composedPath());
        swiper.updateClickedSlide((pathTree && pathTree[0]), pathTree);
        swiper.emit('tap click', e);
        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
            swiper.emit('doubleTap doubleClick', e);
        }
    }
    data.lastClickTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.u)();
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.t)(() => {
        if (!swiper.destroyed)
            swiper.allowClick = true;
    });
    if (!data.isTouched ||
        !data.isMoved ||
        !swiper.swipeDirection ||
        (touches.diff === 0 && !data.loopSwapReset) ||
        (data.currentTranslate === data.startTranslate && !data.loopSwapReset)) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) {
        currentPos = rtl ? swiper.translate : -swiper.translate;
    }
    else {
        currentPos = -(data.currentTranslate ?? 0);
    }
    if (params.cssMode) {
        return;
    }
    if (params.freeMode && params.freeMode.enabled) {
        swiper.freeMode.onTouchEnd({ currentPos });
        return;
    }
    // Find current slide
    const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
        const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (typeof slidesGrid[i + increment] !== 'undefined') {
            if (swipeToLast ||
                (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment])) {
                stopIndex = i;
                groupSize = slidesGrid[i + increment] - slidesGrid[i];
            }
        }
        else if (swipeToLast || currentPos >= slidesGrid[i]) {
            stopIndex = i;
            groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
        if (swiper.isBeginning) {
            rewindLastIndex =
                params.virtual?.enabled && swiper.virtual
                    ? swiper.virtual.slides.length - 1
                    : swiper.slides.length - 1;
        }
        else if (swiper.isEnd) {
            rewindFirstIndex = 0;
        }
    }
    // Find current slide size
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (swiper.swipeDirection === 'next') {
            if (ratio >= params.longSwipesRatio)
                swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
            else
                swiper.slideTo(stopIndex);
        }
        if (swiper.swipeDirection === 'prev') {
            if (ratio > 1 - params.longSwipesRatio) {
                swiper.slideTo(stopIndex + increment);
            }
            else if (rewindLastIndex !== null &&
                ratio < 0 &&
                Math.abs(ratio) > params.longSwipesRatio) {
                swiper.slideTo(rewindLastIndex);
            }
            else {
                swiper.slideTo(stopIndex);
            }
        }
    }
    else {
        // Short swipes
        if (!params.shortSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        const isNavButtonTarget = swiper.navigation &&
            (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
        if (!isNavButtonTarget) {
            if (swiper.swipeDirection === 'next') {
                swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
            }
            if (swiper.swipeDirection === 'prev') {
                swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
            }
        }
        else if (e.target === swiper.navigation.nextEl) {
            swiper.slideTo(stopIndex + increment);
        }
        else {
            swiper.slideTo(stopIndex);
        }
    }
}

function onTouchMove(event) {
    const swiper = this;
    if (swiper.destroyed)
        return;
    const data = swiper.touchEventsData;
    const { params, touches, rtlTranslate: rtl, enabled } = swiper;
    if (!enabled)
        return;
    if (!params.simulateTouch && event.pointerType === 'mouse')
        return;
    // Legacy event wrappers nest the native event under .originalEvent.
    const wrapped = event;
    const e = wrapped.originalEvent ?? wrapped;
    if (e.type === 'pointermove') {
        if (data.touchId !== null)
            return; // return from pointer if we use touch
        const pe = e;
        if (pe.pointerId !== data.pointerId)
            return;
    }
    let targetTouch;
    if (e.type === 'touchmove') {
        const te = e;
        const found = [...te.changedTouches].find((t) => t.identifier === data.touchId);
        if (!found || found.identifier !== data.touchId)
            return;
        targetTouch = found;
    }
    else {
        targetTouch = e;
    }
    if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) {
            swiper.emit('touchMoveOpposite', e);
        }
        return;
    }
    const pageX = targetTouch.pageX;
    const pageY = targetTouch.pageY;
    if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
    }
    if (!swiper.allowTouchMove) {
        if (!e.target.matches(data.focusableElements)) {
            swiper.allowClick = false;
        }
        if (data.isTouched) {
            Object.assign(touches, {
                startX: pageX,
                startY: pageY,
                currentX: pageX,
                currentY: pageY,
            });
            data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.u)();
        }
        return;
    }
    if (params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) {
            // Vertical
            if ((pageY < touches.startY && swiper.translate <= swiper.maxTranslate()) ||
                (pageY > touches.startY && swiper.translate >= swiper.minTranslate())) {
                data.isTouched = false;
                data.isMoved = false;
                return;
            }
        }
        else if (rtl &&
            ((pageX > touches.startX && -swiper.translate <= swiper.maxTranslate()) ||
                (pageX < touches.startX && -swiper.translate >= swiper.minTranslate()))) {
            return;
        }
        else if (!rtl &&
            ((pageX < touches.startX && swiper.translate <= swiper.maxTranslate()) ||
                (pageX > touches.startX && swiper.translate >= swiper.minTranslate()))) {
            return;
        }
    }
    if (document.activeElement &&
        document.activeElement.matches(data.focusableElements) &&
        document.activeElement !== e.target &&
        e.pointerType !== 'mouse') {
        document.activeElement.blur();
    }
    if (document.activeElement) {
        if (e.target === document.activeElement &&
            e.target.matches(data.focusableElements)) {
            data.isMoved = true;
            swiper.allowClick = false;
            return;
        }
    }
    if (data.allowTouchCallbacks) {
        swiper.emit('touchMove', e);
    }
    touches.previousX = touches.currentX;
    touches.previousY = touches.currentY;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold)
        return;
    if (typeof data.isScrolling === 'undefined') {
        let touchAngle;
        if ((swiper.isHorizontal() && touches.currentY === touches.startY) ||
            (swiper.isVertical() && touches.currentX === touches.startX)) {
            data.isScrolling = false;
        }
        else {
            if (diffX * diffX + diffY * diffY >= 25) {
                touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
                data.isScrolling = swiper.isHorizontal()
                    ? touchAngle > params.touchAngle
                    : 90 - touchAngle > params.touchAngle;
            }
        }
    }
    if (data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
    }
    if (typeof data.startMoving === 'undefined') {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
            data.startMoving = true;
        }
    }
    if (data.isScrolling || (e.type === 'touchmove' && data.preventTouchMoveFromPointerMove)) {
        data.isTouched = false;
        return;
    }
    if (!data.startMoving) {
        return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) {
        e.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
        e.stopPropagation();
    }
    let diff = swiper.isHorizontal() ? diffX : diffY;
    let touchesDiff = swiper.isHorizontal()
        ? touches.currentX - touches.previousX
        : touches.currentY - touches.previousY;
    if (params.oneWayMovement) {
        diff = Math.abs(diff) * (rtl ? 1 : -1);
        touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
    }
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
        diff = -diff;
        touchesDiff = -touchesDiff;
    }
    const prevTouchesDirection = swiper.touchesDirection;
    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
    const isLoop = swiper.params.loop && !params.cssMode;
    const allowLoopFix = (swiper.touchesDirection === 'next' && swiper.allowSlideNext) ||
        (swiper.touchesDirection === 'prev' && swiper.allowSlidePrev);
    if (!data.isMoved) {
        if (isLoop && allowLoopFix) {
            swiper.loopFix({ direction: swiper.swipeDirection });
        }
        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);
        if (swiper.animating) {
            const evt = new window.CustomEvent('transitionend', {
                bubbles: true,
                cancelable: true,
                detail: {
                    bySwiperTouchMove: true,
                },
            });
            swiper.wrapperEl.dispatchEvent(evt);
        }
        data.allowMomentumBounce = false;
        // Grab Cursor
        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
            swiper.setGrabCursor(true);
        }
        swiper.emit('sliderFirstMove', e);
    }
    new Date().getTime();
    if (params._loopSwapReset !== false &&
        data.isMoved &&
        data.allowThresholdMove &&
        prevTouchesDirection !== swiper.touchesDirection &&
        isLoop &&
        allowLoopFix &&
        Math.abs(diff) >= 1) {
        Object.assign(touches, {
            startX: pageX,
            startY: pageY,
            currentX: pageX,
            currentY: pageY,
            startTranslate: data.currentTranslate,
        });
        data.loopSwapReset = true;
        data.startTranslate = data.currentTranslate;
        return;
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;
    // startTranslate is guaranteed to be set by this point (set in onTouchStart-side init).
    const startTranslate = data.startTranslate ?? 0;
    data.currentTranslate = diff + startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
        resistanceRatio = 0;
    }
    if (diff > 0) {
        if (isLoop &&
            allowLoopFix &&
            true &&
            data.allowThresholdMove &&
            data.currentTranslate >
                (params.centeredSlides
                    ? swiper.minTranslate() -
                        swiper.slidesSizesGrid[swiper.activeIndex + 1] -
                        (params.slidesPerView !== 'auto' &&
                            swiper.slides.length - params.slidesPerView >= 2
                            ? swiper.slidesSizesGrid[swiper.activeIndex + 1] +
                                swiper.params.spaceBetween
                            : 0) -
                        swiper.params.spaceBetween
                    : swiper.minTranslate())) {
            swiper.loopFix({ direction: 'prev', setTranslate: true, activeSlideIndex: 0 });
        }
        if (data.currentTranslate > swiper.minTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) {
                data.currentTranslate =
                    swiper.minTranslate() -
                        1 +
                        (-swiper.minTranslate() + startTranslate + diff) ** resistanceRatio;
            }
        }
    }
    else if (diff < 0) {
        if (isLoop &&
            allowLoopFix &&
            true &&
            data.allowThresholdMove &&
            data.currentTranslate <
                (params.centeredSlides
                    ? swiper.maxTranslate() +
                        swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] +
                        swiper.params.spaceBetween +
                        (params.slidesPerView !== 'auto' &&
                            swiper.slides.length - params.slidesPerView >= 2
                            ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] +
                                swiper.params.spaceBetween
                            : 0)
                    : swiper.maxTranslate())) {
            swiper.loopFix({
                direction: 'next',
                setTranslate: true,
                activeSlideIndex: swiper.slides.length -
                    (params.slidesPerView === 'auto'
                        ? swiper.slidesPerViewDynamic()
                        : Math.ceil(parseFloat(String(params.slidesPerView)))),
            });
        }
        if (data.currentTranslate < swiper.maxTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) {
                data.currentTranslate =
                    swiper.maxTranslate() +
                        1 -
                        (swiper.maxTranslate() - startTranslate - diff) ** resistanceRatio;
            }
        }
    }
    if (disableParentSwiper) {
        e.preventedByNestedSwiper = true;
    }
    // Directions locks
    if (!swiper.allowSlideNext &&
        swiper.swipeDirection === 'next' &&
        (data.currentTranslate ?? 0) < startTranslate) {
        data.currentTranslate = startTranslate;
    }
    if (!swiper.allowSlidePrev &&
        swiper.swipeDirection === 'prev' &&
        (data.currentTranslate ?? 0) > startTranslate) {
        data.currentTranslate = startTranslate;
    }
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
        data.currentTranslate = startTranslate;
    }
    // Threshold
    if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
            if (!data.allowThresholdMove) {
                data.allowThresholdMove = true;
                touches.startX = touches.currentX;
                touches.startY = touches.currentY;
                data.currentTranslate = data.startTranslate;
                touches.diff = swiper.isHorizontal()
                    ? touches.currentX - touches.startX
                    : touches.currentY - touches.startY;
                return;
            }
        }
        else {
            data.currentTranslate = data.startTranslate;
            return;
        }
    }
    if (!params.followFinger || params.cssMode)
        return;
    // Update active index in free mode
    if ((params.freeMode && params.freeMode.enabled && swiper.freeMode) ||
        params.watchSlidesProgress) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
        swiper.freeMode.onTouchMove();
    }
    // Update progress
    swiper.updateProgress(data.currentTranslate);
    // Update translate
    swiper.setTranslate(data.currentTranslate ?? 0);
}

// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base) {
    function __closestFrom(el) {
        if (!el || el === document || el === window)
            return null;
        let cur = el;
        if (cur.assignedSlot)
            cur = cur.assignedSlot;
        const found = cur.closest(selector);
        if (!found && !cur.getRootNode) {
            return null;
        }
        const root = cur.getRootNode();
        return found || __closestFrom(root.host);
    }
    return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event, startX) {
    const { params } = swiper;
    const edgeSwipeDetection = params.edgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold;
    if (edgeSwipeDetection &&
        (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
        if (edgeSwipeDetection === 'prevent') {
            event.preventDefault();
            return true;
        }
        return false;
    }
    return true;
}
function onTouchStart(event) {
    const swiper = this;
    if (swiper.destroyed)
        return;
    const e = event.originalEvent ?? event;
    const data = swiper.touchEventsData;
    if (e.type === 'pointerdown') {
        const pe = e;
        if (data.pointerId !== null && data.pointerId !== pe.pointerId) {
            return;
        }
        data.pointerId = pe.pointerId;
    }
    else if (e.type === 'touchstart' && e.targetTouches.length === 1) {
        data.touchId = e.targetTouches[0].identifier;
    }
    if (e.type === 'touchstart') {
        // don't proceed touch event
        preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
        return;
    }
    const { params, touches, enabled } = swiper;
    if (!enabled)
        return;
    if (!params.simulateTouch && e.pointerType === 'mouse')
        return;
    if (swiper.animating && params.preventInteractionOnTransition) {
        return;
    }
    if (!swiper.animating && params.cssMode && params.loop) {
        swiper.loopFix();
    }
    let targetEl = e.target;
    if (params.touchEventsTarget === 'wrapper') {
        if (!(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.f)(targetEl, swiper.wrapperEl))
            return;
    }
    // Secondary mouse buttons (right-click / middle-click) shouldn't start a swipe.
    const mouseLike = e;
    if (typeof mouseLike.which === 'number' && mouseLike.which === 3)
        return;
    if (typeof mouseLike.button === 'number' && mouseLike.button > 0)
        return;
    if (data.isTouched && data.isMoved)
        return;
    // change target el for shadow root component
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
    // `path` is a non-standard Chrome extension; `composedPath()` is the modern API.
    const eventPath = e.composedPath
        ? e.composedPath()
        : e.path;
    if (swipingClassHasValue &&
        e.target &&
        e.target.shadowRoot &&
        eventPath) {
        targetEl = eventPath[0];
    }
    const noSwipingSelector = params.noSwipingSelector
        ? params.noSwipingSelector
        : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e.target && e.target.shadowRoot);
    // use closestElement for shadow root element to get the actual closest for nested shadow root element
    if (params.noSwiping &&
        (isTargetShadow
            ? closestElement(noSwipingSelector, targetEl)
            : targetEl.closest(noSwipingSelector))) {
        swiper.allowClick = true;
        return;
    }
    if (params.swipeHandler) {
        if (typeof params.swipeHandler === 'string' && !targetEl.closest(params.swipeHandler))
            return;
    }
    // At this point `e` is a PointerEvent or MouseEvent (touchstart returned earlier).
    const pe = e;
    touches.currentX = pe.pageX;
    touches.currentY = pe.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
    if (!preventEdgeSwipe(swiper, e, startX)) {
        return;
    }
    Object.assign(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined,
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.u)();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0)
        data.allowThresholdMove = false;
    let preventDefault = true;
    if (targetEl.matches(data.focusableElements)) {
        preventDefault = false;
        if (targetEl.nodeName === 'SELECT') {
            data.isTouched = false;
        }
    }
    if (document.activeElement &&
        document.activeElement.matches(data.focusableElements) &&
        document.activeElement !== targetEl &&
        (pe.pointerType === 'mouse' ||
            (pe.pointerType !== 'mouse' && !targetEl.matches(data.focusableElements)))) {
        document.activeElement.blur();
    }
    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) &&
        !targetEl.isContentEditable) {
        e.preventDefault();
    }
    if (params.freeMode &&
        params.freeMode.enabled &&
        swiper.freeMode &&
        swiper.animating &&
        !params.cssMode) {
        swiper.freeMode.onTouchStart();
    }
    swiper.emit('touchStart', e);
}

const events = (swiper, method) => {
    const { params, el, wrapperEl, device } = swiper;
    const capture = !!params.nested;
    const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    const swiperMethod = method;
    if (!el || typeof el === 'string')
        return;
    // Touch Events
    document[domMethod]('touchstart', swiper.onDocumentTouchStart, {
        passive: false,
        capture,
    });
    el[domMethod]('touchstart', swiper.onTouchStart, { passive: false });
    el[domMethod]('pointerdown', swiper.onTouchStart, { passive: false });
    document[domMethod]('touchmove', swiper.onTouchMove, {
        passive: false,
        capture,
    });
    document[domMethod]('pointermove', swiper.onTouchMove, {
        passive: false,
        capture,
    });
    document[domMethod]('touchend', swiper.onTouchEnd, { passive: true });
    document[domMethod]('pointerup', swiper.onTouchEnd, { passive: true });
    document[domMethod]('pointercancel', swiper.onTouchEnd, { passive: true });
    document[domMethod]('touchcancel', swiper.onTouchEnd, { passive: true });
    document[domMethod]('pointerout', swiper.onTouchEnd, { passive: true });
    document[domMethod]('pointerleave', swiper.onTouchEnd, { passive: true });
    document[domMethod]('contextmenu', swiper.onTouchEnd, { passive: true });
    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) {
        el[domMethod]('click', swiper.onClick, true);
    }
    if (params.cssMode) {
        wrapperEl[domMethod]('scroll', swiper.onScroll);
    }
    // Resize handler
    const subscribe = (events) => {
        swiper[swiperMethod](events, onResize, true);
    };
    if (params.updateOnWindowResize) {
        subscribe(device.ios || device.android
            ? 'resize orientationchange observerUpdate'
            : 'resize observerUpdate');
    }
    else {
        subscribe('observerUpdate');
    }
    // Images loader
    el[domMethod]('load', swiper.onLoad, { capture: true });
};
function attachEvents() {
    const swiper = this;
    const { params } = swiper;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
    if (params.cssMode) {
        swiper.onScroll = onScroll.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    swiper.onLoad = onLoad.bind(swiper);
    events(swiper, 'on');
}
function detachEvents() {
    const swiper = this;
    events(swiper, 'off');
}
var events$1 = {
    attachEvents,
    detachEvents,
};

function setGrabCursor(moving) {
    const swiper = this;
    if (!swiper.params.simulateTouch ||
        (swiper.params.watchOverflow && swiper.isLocked) ||
        swiper.params.cssMode)
        return;
    const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
    if (swiper.isElement) {
        swiper.__preventObserver__ = true;
    }
    el.style.cursor = 'move';
    el.style.cursor = moving ? 'grabbing' : 'grab';
    if (swiper.isElement) {
        requestAnimationFrame(() => {
            swiper.__preventObserver__ = false;
        });
    }
}

function unsetGrabCursor() {
    const swiper = this;
    if ((swiper.params.watchOverflow && swiper.isLocked) || swiper.params.cssMode) {
        return;
    }
    if (swiper.isElement) {
        swiper.__preventObserver__ = true;
    }
    swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
    if (swiper.isElement) {
        requestAnimationFrame(() => {
            swiper.__preventObserver__ = false;
        });
    }
}

var grabCursor = {
    setGrabCursor,
    unsetGrabCursor,
};

function loopCreate(slideRealIndex, initial) {
    const swiper = this;
    const { params, slidesEl } = swiper;
    if (!params.loop || (swiper.virtual && swiper.params.virtual?.enabled))
        return;
    const initSlides = () => {
        const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
        slides.forEach((el, index) => {
            el.setAttribute('data-swiper-slide-index', String(index));
        });
    };
    const clearBlankSlides = () => {
        const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(slidesEl, `.${params.slideBlankClass}`);
        slides.forEach((el) => {
            el.remove();
        });
        if (slides.length > 0) {
            swiper.recalcSlides();
            swiper.updateSlides();
        }
    };
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    if (params.loopAddBlankSlides && (params.slidesPerGroup > 1 || gridEnabled)) {
        clearBlankSlides();
    }
    const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
    const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
    const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
    const addBlankSlides = (amountOfSlides) => {
        for (let i = 0; i < amountOfSlides; i += 1) {
            const slideEl = swiper.isElement
                ? (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.a)('swiper-slide', [params.slideBlankClass])
                : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.a)('div', [params.slideClass, params.slideBlankClass]);
            swiper.slidesEl.append(slideEl);
        }
    };
    if (shouldFillGroup) {
        if (params.loopAddBlankSlides) {
            const slidesToAdd = slidesPerGroup - (swiper.slides.length % slidesPerGroup);
            addBlankSlides(slidesToAdd);
            swiper.recalcSlides();
            swiper.updateSlides();
        }
        else {
            (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.x)('Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
        }
        initSlides();
    }
    else if (shouldFillGrid) {
        if (params.loopAddBlankSlides) {
            const slidesToAdd = params.grid.rows - (swiper.slides.length % params.grid.rows);
            addBlankSlides(slidesToAdd);
            swiper.recalcSlides();
            swiper.updateSlides();
        }
        else {
            (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.x)('Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
        }
        initSlides();
    }
    else {
        initSlides();
    }
    const bothDirections = params.centeredSlides || !!params.slidesOffsetBefore || !!params.slidesOffsetAfter;
    swiper.loopFix({
        slideRealIndex,
        direction: bothDirections ? undefined : 'next',
        initial,
    });
}

function loopDestroy() {
    const swiper = this;
    const { params, slidesEl } = swiper;
    if (!params.loop || !slidesEl || (swiper.virtual && swiper.params.virtual?.enabled))
        return;
    swiper.recalcSlides();
    const newSlidesOrder = [];
    swiper.slides.forEach((slideEl) => {
        const loopSlideEl = slideEl;
        const index = typeof loopSlideEl.swiperSlideIndex === 'undefined'
            ? Number(slideEl.getAttribute('data-swiper-slide-index'))
            : loopSlideEl.swiperSlideIndex;
        newSlidesOrder[index] = slideEl;
    });
    swiper.slides.forEach((slideEl) => {
        slideEl.removeAttribute('data-swiper-slide-index');
    });
    newSlidesOrder.forEach((slideEl) => {
        slidesEl.append(slideEl);
    });
    swiper.recalcSlides();
    swiper.slideTo(swiper.realIndex, 0);
}

function loopFix(options = {}) {
    const { slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex: activeSlideIndexParam, initial, byController, byMousewheel, } = options;
    let activeSlideIndex = activeSlideIndexParam;
    const swiper = this;
    if (!swiper.params.loop)
        return;
    swiper.emit('beforeLoopFix');
    const { slides, allowSlidePrev, allowSlideNext, slidesEl, params } = swiper;
    const { centeredSlides, slidesOffsetBefore, slidesOffsetAfter, initialSlide } = params;
    const bothDirections = centeredSlides || !!slidesOffsetBefore || !!slidesOffsetAfter;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    if (swiper.virtual && params.virtual?.enabled) {
        if (slideTo) {
            const virtualSlidesLength = swiper.virtual.slides.length;
            const virtualSlidesBefore = swiper.virtual.slidesBefore ?? 0;
            if (!bothDirections && swiper.snapIndex === 0) {
                swiper.slideTo(virtualSlidesLength, 0, false, true);
            }
            else if (bothDirections && swiper.snapIndex < params.slidesPerView) {
                swiper.slideTo(virtualSlidesLength + swiper.snapIndex, 0, false, true);
            }
            else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
                swiper.slideTo(virtualSlidesBefore, 0, false, true);
            }
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        swiper.emit('loopFix');
        return;
    }
    let slidesPerView = params.slidesPerView;
    if (slidesPerView === 'auto') {
        slidesPerView = swiper.slidesPerViewDynamic();
    }
    else {
        slidesPerView = Math.ceil(parseFloat(String(params.slidesPerView)));
        if (bothDirections && slidesPerView % 2 === 0) {
            slidesPerView = slidesPerView + 1;
        }
    }
    const slidesPerGroup = params.slidesPerGroupAuto
        ? slidesPerView
        : params.slidesPerGroup;
    let loopedSlides = bothDirections
        ? Math.max(slidesPerGroup, Math.ceil(slidesPerView / 2))
        : slidesPerGroup;
    if (loopedSlides % slidesPerGroup !== 0) {
        loopedSlides += slidesPerGroup - (loopedSlides % slidesPerGroup);
    }
    loopedSlides += params.loopAdditionalSlides;
    swiper.loopedSlides = loopedSlides;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    if (slides.length < slidesPerView + loopedSlides ||
        (swiper.params.effect === 'cards' && slides.length < slidesPerView + loopedSlides * 2)) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.x)('Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters');
    }
    else if (gridEnabled && params.grid.fill === 'row') {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.x)('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
    }
    const prependSlidesIndexes = [];
    const appendSlidesIndexes = [];
    const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
    const isInitialOverflow = initial && cols - initialSlide < slidesPerView && !bothDirections;
    let activeIndex = isInitialOverflow ? initialSlide : swiper.activeIndex;
    if (typeof activeSlideIndex === 'undefined') {
        activeSlideIndex = swiper.getSlideIndex(slides.find((el) => el.classList.contains(params.slideActiveClass)));
    }
    else {
        activeIndex = activeSlideIndex;
    }
    const isNext = direction === 'next' || !direction;
    const isPrev = direction === 'prev' || !direction;
    let slidesPrepended = 0;
    let slidesAppended = 0;
    const activeColIndex = gridEnabled
        ? (slides[activeSlideIndex].column ?? 0)
        : activeSlideIndex;
    const activeColIndexWithShift = activeColIndex +
        (bothDirections && typeof setTranslate === 'undefined' ? -slidesPerView / 2 + 0.5 : 0);
    // prepend last slides before start
    if (activeColIndexWithShift < loopedSlides) {
        slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
        for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
            const index = i - Math.floor(i / cols) * cols;
            if (gridEnabled) {
                const colIndexToPrepend = cols - index - 1;
                for (let j = slides.length - 1; j >= 0; j -= 1) {
                    if (slides[j].column === colIndexToPrepend)
                        prependSlidesIndexes.push(j);
                }
            }
            else {
                prependSlidesIndexes.push(cols - index - 1);
            }
        }
    }
    else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
        slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
        if (isInitialOverflow) {
            slidesAppended = Math.max(slidesAppended, slidesPerView - cols + initialSlide + 1);
        }
        for (let i = 0; i < slidesAppended; i += 1) {
            const index = i - Math.floor(i / cols) * cols;
            if (gridEnabled) {
                slides.forEach((slide, slideIndex) => {
                    if (slide.column === index)
                        appendSlidesIndexes.push(slideIndex);
                });
            }
            else {
                appendSlidesIndexes.push(index);
            }
        }
    }
    swiper.__preventObserver__ = true;
    requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
    });
    if (swiper.params.effect === 'cards' && slides.length < slidesPerView + loopedSlides * 2) {
        if (appendSlidesIndexes.includes(activeSlideIndex)) {
            appendSlidesIndexes.splice(appendSlidesIndexes.indexOf(activeSlideIndex), 1);
        }
        if (prependSlidesIndexes.includes(activeSlideIndex)) {
            prependSlidesIndexes.splice(prependSlidesIndexes.indexOf(activeSlideIndex), 1);
        }
    }
    if (isPrev) {
        prependSlidesIndexes.forEach((index) => {
            const slideEl = slides[index];
            slideEl.swiperLoopMoveDOM = true;
            slidesEl.prepend(slideEl);
            slideEl.swiperLoopMoveDOM = false;
        });
    }
    if (isNext) {
        appendSlidesIndexes.forEach((index) => {
            const slideEl = slides[index];
            slideEl.swiperLoopMoveDOM = true;
            slidesEl.append(slideEl);
            slideEl.swiperLoopMoveDOM = false;
        });
    }
    swiper.recalcSlides();
    if (params.slidesPerView === 'auto') {
        swiper.updateSlides();
    }
    else if (gridEnabled &&
        ((prependSlidesIndexes.length > 0 && isPrev) || (appendSlidesIndexes.length > 0 && isNext))) {
        swiper.slides.forEach((slide, slideIndex) => {
            swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
        });
    }
    if (params.watchSlidesProgress) {
        swiper.updateSlidesOffset();
    }
    if (slideTo) {
        if (prependSlidesIndexes.length > 0 && isPrev) {
            if (typeof slideRealIndex === 'undefined') {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) {
                    swiper.setTranslate(swiper.translate - diff);
                }
                else {
                    swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
                    if (setTranslate) {
                        swiper.touchEventsData.startTranslate =
                            swiper.touchEventsData.startTranslate - diff;
                        swiper.touchEventsData.currentTranslate =
                            swiper.touchEventsData.currentTranslate - diff;
                    }
                }
            }
            else {
                if (setTranslate) {
                    const shift = gridEnabled
                        ? prependSlidesIndexes.length / params.grid.rows
                        : prependSlidesIndexes.length;
                    swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
                    swiper.touchEventsData.currentTranslate = swiper.translate;
                }
            }
        }
        else if (appendSlidesIndexes.length > 0 && isNext) {
            if (typeof slideRealIndex === 'undefined') {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) {
                    swiper.setTranslate(swiper.translate - diff);
                }
                else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) {
                        swiper.touchEventsData.startTranslate =
                            swiper.touchEventsData.startTranslate - diff;
                        swiper.touchEventsData.currentTranslate =
                            swiper.touchEventsData.currentTranslate - diff;
                    }
                }
            }
            else {
                const shift = gridEnabled
                    ? appendSlidesIndexes.length / params.grid.rows
                    : appendSlidesIndexes.length;
                swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
            }
        }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    const controlled = swiper.controller?.control;
    if (controlled && !byController) {
        const loopParams = {
            slideRealIndex,
            direction,
            setTranslate,
            activeSlideIndex,
            byController: true,
        };
        if (Array.isArray(controlled)) {
            controlled.forEach((c) => {
                if (!c.destroyed && c.params.loop)
                    c.loopFix({
                        ...loopParams,
                        slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false,
                    });
            });
        }
        else if (controlled instanceof swiper.constructor &&
            controlled.params.loop) {
            controlled.loopFix({
                ...loopParams,
                slideTo: controlled.params.slidesPerView === params.slidesPerView ? slideTo : false,
            });
        }
    }
    swiper.emit('loopFix');
}

var loop = {
    loopCreate,
    loopFix,
    loopDestroy,
};

function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj = {}) {
        const moduleParamName = Object.keys(obj)[0];
        const moduleParams = obj[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) {
            (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(allModulesParams, obj);
            return;
        }
        if (params[moduleParamName] === true) {
            params[moduleParamName] = { enabled: true };
        }
        if (moduleParamName === 'navigation' &&
            params[moduleParamName] &&
            params[moduleParamName].enabled &&
            !params[moduleParamName].prevEl &&
            !params[moduleParamName].nextEl) {
            params[moduleParamName].auto = true;
        }
        if (['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 &&
            params[moduleParamName] &&
            params[moduleParamName].enabled &&
            !params[moduleParamName].el) {
            params[moduleParamName].auto = true;
        }
        if (!(moduleParamName in params && 'enabled' in moduleParams)) {
            (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(allModulesParams, obj);
            return;
        }
        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
            params[moduleParamName].enabled = true;
        }
        if (!params[moduleParamName])
            params[moduleParamName] = { enabled: false };
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(allModulesParams, obj);
    };
}

const Observer = ({ swiper, extendParams, on }) => {
    const observers = [];
    const attach = (target, options = {}) => {
        const ObserverFunc = window.MutationObserver ||
            window
                .WebkitMutationObserver;
        if (!ObserverFunc)
            return;
        const observer = new ObserverFunc((mutations) => {
            // The observerUpdate event should only be triggered
            // once despite the number of mutations.  Additional
            // triggers are redundant and are very costly
            if (swiper.__preventObserver__)
                return;
            if (mutations.length === 1) {
                swiper.emit('observerUpdate', mutations[0]);
                return;
            }
            const observerUpdate = function observerUpdate() {
                swiper.emit('observerUpdate', mutations[0]);
            };
            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(observerUpdate);
            }
            else {
                window.setTimeout(observerUpdate, 0);
            }
        });
        observer.observe(target, {
            attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
            childList: swiper.isElement || (typeof options.childList === 'undefined' ? true : options.childList),
            characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
        });
        observers.push(observer);
    };
    const init = () => {
        if (!swiper.params.observer)
            return;
        if (swiper.params.observeParents) {
            const containerParents = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.j)(swiper.hostEl);
            for (let i = 0; i < containerParents.length; i += 1) {
                attach(containerParents[i]);
            }
        }
        // Observe container
        attach(swiper.hostEl, {
            childList: swiper.params.observeSlideChildren,
        });
        // Observe wrapper
        attach(swiper.wrapperEl, { attributes: false });
    };
    const destroy = () => {
        observers.forEach((observer) => {
            observer.disconnect();
        });
        observers.splice(0, observers.length);
    };
    extendParams({
        observer: false,
        observeParents: false,
        observeSlideChildren: false,
    });
    on('init', init);
    on('destroy', destroy);
};

const Resize = ({ swiper, on, emit }) => {
    let observer = null;
    let animationFrame = null;
    const resizeHandler = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized)
            return;
        emit('beforeResize');
        emit('resize');
    };
    const createObserver = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized)
            return;
        observer = new ResizeObserver((entries) => {
            animationFrame = window.requestAnimationFrame(() => {
                const { width, height } = swiper;
                let newWidth = width;
                let newHeight = height;
                entries.forEach(({ contentBoxSize, contentRect, target }) => {
                    if (target && target !== swiper.el)
                        return;
                    // Older Safari (≤15) exposed `contentBoxSize` as a single object instead of an array.
                    const box = Array.isArray(contentBoxSize)
                        ? contentBoxSize[0]
                        : contentBoxSize;
                    newWidth = contentRect ? contentRect.width : box.inlineSize;
                    newHeight = contentRect ? contentRect.height : box.blockSize;
                });
                if (newWidth !== width || newHeight !== height) {
                    resizeHandler();
                }
            });
        });
        observer.observe(swiper.el);
    };
    const removeObserver = () => {
        if (animationFrame) {
            window.cancelAnimationFrame(animationFrame);
        }
        if (observer && observer.unobserve && swiper.el) {
            observer.unobserve(swiper.el);
            observer = null;
        }
    };
    const orientationChangeHandler = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized)
            return;
        emit('orientationchange');
    };
    on('init', () => {
        if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
            createObserver();
            return;
        }
        window.addEventListener('resize', resizeHandler);
        window.addEventListener('orientationchange', orientationChangeHandler);
    });
    on('destroy', () => {
        removeObserver();
        window.removeEventListener('resize', resizeHandler);
        window.removeEventListener('orientationchange', orientationChangeHandler);
    });
};

function slideNext(speed, runCallbacks = true, internal) {
    const swiper = this;
    const { enabled, params, animating } = swiper;
    if (!enabled || swiper.destroyed)
        return swiper;
    if (typeof speed === 'undefined') {
        speed = swiper.params.speed;
    }
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
    }
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    const isVirtual = swiper.virtual && params.virtual?.enabled;
    if (params.loop) {
        if (animating && !isVirtual && params.loopPreventsSliding)
            return false;
        swiper.loopFix({ direction: 'next' });
        swiper._clientLeft = swiper.wrapperEl.clientLeft;
        if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
            requestAnimationFrame(() => {
                swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
            });
            return true;
        }
    }
    if (params.rewind && swiper.isEnd) {
        return swiper.slideTo(0, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

function slidePrev(speed, runCallbacks = true, internal) {
    const swiper = this;
    const { params, snapGrid, slidesGrid, rtlTranslate, enabled, animating } = swiper;
    if (!enabled || swiper.destroyed)
        return swiper;
    if (typeof speed === 'undefined') {
        speed = swiper.params.speed;
    }
    const isVirtual = swiper.virtual && params.virtual?.enabled;
    if (params.loop) {
        if (animating && !isVirtual && params.loopPreventsSliding)
            return false;
        swiper.loopFix({ direction: 'prev' });
        swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    const translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
        if (val < 0)
            return -Math.floor(Math.abs(val));
        return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate);
    const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
    const isFreeMode = params.freeMode && params.freeMode.enabled;
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === 'undefined' && (params.cssMode || isFreeMode)) {
        let prevSnapIndex;
        snapGrid.forEach((snap, snapIndex) => {
            if (normalizedTranslate >= snap) {
                prevSnapIndex = snapIndex;
            }
        });
        if (typeof prevSnapIndex !== 'undefined') {
            prevSnap = isFreeMode
                ? snapGrid[prevSnapIndex]
                : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
        }
    }
    let prevIndex = 0;
    if (typeof prevSnap !== 'undefined') {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0)
            prevIndex = swiper.activeIndex - 1;
        if (params.slidesPerView === 'auto' &&
            params.slidesPerGroup === 1 &&
            params.slidesPerGroupAuto) {
            prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
            prevIndex = Math.max(prevIndex, 0);
        }
    }
    if (params.rewind && swiper.isBeginning) {
        const lastIndex = swiper.params.virtual?.enabled && swiper.virtual
            ? swiper.virtual.slides.length - 1
            : swiper.slides.length - 1;
        return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    }
    else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
        requestAnimationFrame(() => {
            swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        });
        return true;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

function slideReset(speed, runCallbacks = true, internal) {
    const swiper = this;
    if (swiper.destroyed)
        return;
    if (typeof speed === 'undefined') {
        speed = swiper.params.speed;
    }
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

function slideTo(index = 0, speed, runCallbacks = true, internal, initial) {
    if (typeof index === 'string') {
        index = parseInt(index, 10);
    }
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0)
        slideIndex = 0;
    const { params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled, } = swiper;
    if ((!enabled && !internal && !initial) ||
        swiper.destroyed ||
        (swiper.animating && params.preventInteractionOnTransition)) {
        return false;
    }
    if (typeof speed === 'undefined') {
        speed = swiper.params.speed;
    }
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length)
        snapIndex = snapGrid.length - 1;
    const translate = -snapGrid[snapIndex];
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
        for (let i = 0; i < slidesGrid.length; i += 1) {
            const normalizedTranslate = -Math.floor(translate * 100);
            const normalizedGrid = Math.floor(slidesGrid[i] * 100);
            const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
            if (typeof slidesGrid[i + 1] !== 'undefined') {
                if (normalizedTranslate >= normalizedGrid &&
                    normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
                    slideIndex = i;
                }
                else if (normalizedTranslate >= normalizedGrid &&
                    normalizedTranslate < normalizedGridNext) {
                    slideIndex = i + 1;
                }
            }
            else if (normalizedTranslate >= normalizedGrid) {
                slideIndex = i;
            }
        }
    }
    // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext &&
            (rtl
                ? translate > swiper.translate && translate > swiper.minTranslate()
                : translate < swiper.translate && translate < swiper.minTranslate())) {
            return false;
        }
        if (!swiper.allowSlidePrev &&
            translate > swiper.translate &&
            translate > swiper.maxTranslate()) {
            if ((activeIndex || 0) !== slideIndex) {
                return false;
            }
        }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) {
        swiper.emit('beforeSlideChangeStart');
    }
    // Update progress
    swiper.updateProgress(translate);
    let direction;
    if (slideIndex > activeIndex)
        direction = 'next';
    else if (slideIndex < activeIndex)
        direction = 'prev';
    else
        direction = 'reset';
    // initial virtual
    const isVirtual = swiper.virtual && swiper.params.virtual?.enabled;
    const isInitialVirtual = isVirtual && initial;
    // Update Index
    if (!isInitialVirtual &&
        ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate))) {
        swiper.updateActiveIndex(slideIndex);
        // Update Height
        if (params.autoHeight) {
            swiper.updateAutoHeight();
        }
        swiper.updateSlidesClasses();
        if (params.effect !== 'slide') {
            swiper.setTranslate(translate);
        }
        if (direction !== 'reset') {
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        }
        return false;
    }
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        const t = rtl ? translate : -translate;
        if (speed === 0) {
            if (isVirtual) {
                swiper.wrapperEl.style.scrollSnapType = 'none';
                swiper._immediateVirtual = true;
            }
            if (isVirtual && !swiper._cssModeVirtualInitialSet && (swiper.params.initialSlide ?? 0) > 0) {
                swiper._cssModeVirtualInitialSet = true;
                requestAnimationFrame(() => {
                    wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
                });
            }
            else {
                wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
            }
            if (isVirtual) {
                requestAnimationFrame(() => {
                    swiper.wrapperEl.style.scrollSnapType = '';
                    swiper._immediateVirtual = false;
                });
            }
        }
        else {
            wrapperEl.scrollTo({
                [isH ? 'left' : 'top']: t,
                behavior: 'smooth',
            });
        }
        return true;
    }
    const browser = getBrowser();
    const isSafari = browser.isSafari;
    if (isVirtual && !initial && isSafari && swiper.isElement) {
        swiper.virtual.update(false, false, slideIndex);
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) {
        swiper.transitionEnd(runCallbacks, direction);
    }
    else if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) {
            swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                if (!swiper || swiper.destroyed)
                    return;
                if (e.target !== this)
                    return;
                swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                swiper.onSlideToWrapperTransitionEnd = null;
                delete swiper.onSlideToWrapperTransitionEnd;
                swiper.transitionEnd(runCallbacks, direction);
            };
        }
        swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
}

function slideToClickedSlide() {
    const swiper = this;
    if (swiper.destroyed)
        return;
    const { params, slidesEl, clickedSlide, clickedIndex } = swiper;
    if (clickedSlide === undefined || clickedIndex === undefined)
        return;
    const slidesPerView = params.slidesPerView === 'auto'
        ? swiper.slidesPerViewDynamic()
        : params.slidesPerView;
    let slideToIndex = swiper.getSlideIndexWhenGrid(clickedIndex);
    let realIndex;
    const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
    const isGrid = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
    if (params.loop) {
        if (swiper.animating)
            return;
        realIndex = parseInt(clickedSlide.getAttribute('data-swiper-slide-index'), 10);
        if (params.centeredSlides) {
            swiper.slideToLoop(realIndex);
        }
        else if (slideToIndex >
            (isGrid
                ? (swiper.slides.length - slidesPerView) / 2 - (swiper.params.grid.rows - 1)
                : swiper.slides.length - slidesPerView)) {
            swiper.loopFix();
            slideToIndex = swiper.getSlideIndex((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
            (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.t)(() => {
                swiper.slideTo(slideToIndex);
            });
        }
        else {
            swiper.slideTo(slideToIndex);
        }
    }
    else {
        swiper.slideTo(slideToIndex);
    }
}

function slideToClosest(speed, runCallbacks = true, internal, threshold = 0.5) {
    const swiper = this;
    if (swiper.destroyed)
        return;
    if (typeof speed === 'undefined') {
        speed = swiper.params.speed;
    }
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        const currentSnap = swiper.snapGrid[snapIndex];
        const nextSnap = swiper.snapGrid[snapIndex + 1];
        if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
            index += swiper.params.slidesPerGroup;
        }
    }
    else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        const prevSnap = swiper.snapGrid[snapIndex - 1];
        const currentSnap = swiper.snapGrid[snapIndex];
        if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
            index -= swiper.params.slidesPerGroup;
        }
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToLoop(index = 0, speed, runCallbacks = true, internal) {
    if (typeof index === 'string') {
        const indexAsNumber = parseInt(index, 10);
        index = indexAsNumber;
    }
    const swiper = this;
    if (swiper.destroyed)
        return;
    if (typeof speed === 'undefined') {
        speed = swiper.params.speed;
    }
    const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
    let newIndex = index;
    if (swiper.params.loop) {
        if (swiper.virtual && swiper.params.virtual?.enabled) {
            newIndex = newIndex + (swiper.virtual.slidesBefore ?? 0);
        }
        else {
            let targetSlideIndex;
            if (gridEnabled) {
                const slideIndex = newIndex * swiper.params.grid.rows;
                const targetSlideEl = swiper.slides.find((slideEl) => Number(slideEl.getAttribute('data-swiper-slide-index')) === slideIndex);
                targetSlideIndex = targetSlideEl?.column ?? 0;
            }
            else {
                targetSlideIndex = swiper.getSlideIndexByData(newIndex);
            }
            const cols = gridEnabled
                ? Math.ceil(swiper.slides.length / swiper.params.grid.rows)
                : swiper.slides.length;
            const { centeredSlides, slidesOffsetBefore, slidesOffsetAfter } = swiper.params;
            const bothDirections = centeredSlides || !!slidesOffsetBefore || !!slidesOffsetAfter;
            let slidesPerView;
            if (swiper.params.slidesPerView === 'auto') {
                slidesPerView = swiper.slidesPerViewDynamic();
            }
            else {
                slidesPerView = Math.ceil(parseFloat(String(swiper.params.slidesPerView)));
                if (bothDirections && slidesPerView % 2 === 0) {
                    slidesPerView = slidesPerView + 1;
                }
            }
            let needLoopFix = cols - targetSlideIndex < slidesPerView;
            if (bothDirections) {
                needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
            }
            if (internal && bothDirections && swiper.params.slidesPerView !== 'auto' && !gridEnabled) {
                needLoopFix = false;
            }
            if (needLoopFix) {
                const direction = bothDirections
                    ? targetSlideIndex < swiper.activeIndex
                        ? 'prev'
                        : 'next'
                    : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView
                        ? 'next'
                        : 'prev';
                swiper.loopFix({
                    direction,
                    slideTo: true,
                    activeSlideIndex: direction === 'next' ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
                    slideRealIndex: direction === 'next' ? swiper.realIndex : undefined,
                });
            }
            if (gridEnabled) {
                const slideIndex = newIndex * swiper.params.grid.rows;
                const targetSlideEl = swiper.slides.find((slideEl) => Number(slideEl.getAttribute('data-swiper-slide-index')) === slideIndex);
                newIndex = targetSlideEl?.column ?? 0;
            }
            else {
                newIndex = swiper.getSlideIndexByData(newIndex);
            }
        }
    }
    requestAnimationFrame(() => {
        swiper.slideTo(newIndex, speed, runCallbacks, internal);
    });
    return swiper;
}

var slide = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide,
};

function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) {
        swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
        swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
    }
    swiper.emit('setTransition', duration, byController);
}

function transitionEmit({ swiper, runCallbacks, direction, step, }) {
    const { activeIndex, previousIndex } = swiper;
    let dir = direction;
    if (!dir) {
        if (activeIndex > previousIndex)
            dir = 'next';
        else if (activeIndex < previousIndex)
            dir = 'prev';
        else
            dir = 'reset';
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && dir === 'reset') {
        swiper.emit(`slideResetTransition${step}`);
    }
    else if (runCallbacks && activeIndex !== previousIndex) {
        swiper.emit(`slideChangeTransition${step}`);
        if (dir === 'next') {
            swiper.emit(`slideNextTransition${step}`);
        }
        else {
            swiper.emit(`slidePrevTransition${step}`);
        }
    }
}

function transitionEnd(runCallbacks = true, direction) {
    const swiper = this;
    const { params } = swiper;
    swiper.animating = false;
    if (params.cssMode)
        return;
    swiper.setTransition(0);
    transitionEmit({ swiper, runCallbacks, direction, step: 'End' });
}

function transitionStart(runCallbacks = true, direction) {
    const swiper = this;
    const { params } = swiper;
    if (params.cssMode)
        return;
    if (params.autoHeight) {
        swiper.updateAutoHeight();
    }
    transitionEmit({ swiper, runCallbacks, direction, step: 'Start' });
}

var transition = {
    setTransition,
    transitionStart,
    transitionEnd,
};

function getSwiperTranslate(axis = this.isHorizontal() ? 'x' : 'y') {
    const swiper = this;
    const { params, rtlTranslate: rtl, translate, wrapperEl } = swiper;
    if (params.virtualTranslate) {
        return rtl ? -translate : translate;
    }
    if (params.cssMode) {
        return translate;
    }
    let currentTranslate = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.q)(wrapperEl, axis);
    currentTranslate += swiper.cssOverflowAdjustment();
    if (rtl)
        currentTranslate = -currentTranslate;
    return currentTranslate || 0;
}

function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
}

function minTranslate() {
    return -this.snapGrid[0];
}

function setTranslate(translate, byController) {
    const swiper = this;
    const { rtlTranslate: rtl, params, wrapperEl, progress } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) {
        x = rtl ? -translate : translate;
    }
    else {
        y = translate;
    }
    if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    if (params.cssMode) {
        wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
    }
    else if (!params.virtualTranslate) {
        if (swiper.isHorizontal()) {
            x -= swiper.cssOverflowAdjustment();
        }
        else {
            y -= swiper.cssOverflowAdjustment();
        }
        wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    }
    // Check if we need to update progress
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
        newProgress = 0;
    }
    else {
        newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
        swiper.updateProgress(translate);
    }
    swiper.emit('setTranslate', swiper.translate, byController);
}

function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
    const swiper = this;
    const { params, wrapperEl } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) {
        return false;
    }
    const minTranslate = swiper.minTranslate();
    const maxTranslate = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate > minTranslate)
        newTranslate = minTranslate;
    else if (translateBounds && translate < maxTranslate)
        newTranslate = maxTranslate;
    else
        newTranslate = translate;
    // Update progress
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        if (speed === 0) {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        }
        else {
            wrapperEl.scrollTo({
                [isH ? 'left' : 'top']: -newTranslate,
                behavior: 'smooth',
            });
        }
        return true;
    }
    if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.emit('transitionEnd');
        }
    }
    else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.emit('transitionStart');
        }
        if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onTranslateToWrapperTransitionEnd) {
                swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed)
                        return;
                    if (e.target !== this)
                        return;
                    swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                    swiper.onTranslateToWrapperTransitionEnd = null;
                    delete swiper.onTranslateToWrapperTransitionEnd;
                    swiper.animating = false;
                    if (runCallbacks) {
                        swiper.emit('transitionEnd');
                    }
                };
            }
            swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
        }
    }
    return true;
}

var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo,
};

function getActiveIndexByTranslate(swiper) {
    const { slidesGrid, params } = swiper;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    let activeIndex;
    for (let i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (translate >= slidesGrid[i] &&
                translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
                activeIndex = i;
            }
            else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
                activeIndex = i + 1;
            }
        }
        else if (translate >= slidesGrid[i]) {
            activeIndex = i;
        }
    }
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === 'undefined')
            activeIndex = 0;
    }
    return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const { snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex, } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    const getVirtualRealIndex = (aIndex) => {
        const virtualSlides = swiper.virtual.slides;
        let realIndex = aIndex - (swiper.virtual.slidesBefore ?? 0);
        if (realIndex < 0) {
            realIndex = virtualSlides.length + realIndex;
        }
        if (realIndex >= virtualSlides.length) {
            realIndex -= virtualSlides.length;
        }
        return realIndex;
    };
    if (typeof activeIndex === 'undefined') {
        activeIndex = getActiveIndexByTranslate(swiper);
    }
    if (snapGrid.indexOf(translate) >= 0) {
        snapIndex = snapGrid.indexOf(translate);
    }
    else {
        const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length)
        snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex && !swiper.params.loop) {
        if (snapIndex !== previousSnapIndex) {
            swiper.snapIndex = snapIndex;
            swiper.emit('snapIndexChange');
        }
        return;
    }
    if (activeIndex === previousIndex &&
        swiper.params.loop &&
        swiper.virtual &&
        swiper.params.virtual?.enabled) {
        swiper.realIndex = getVirtualRealIndex(activeIndex);
        return;
    }
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    // Get real index
    let realIndex;
    if (swiper.virtual && params.virtual?.enabled) {
        if (params.loop) {
            realIndex = getVirtualRealIndex(activeIndex);
        }
        else {
            realIndex = activeIndex;
        }
    }
    else if (gridEnabled) {
        const firstSlideInColumn = swiper.slides.find((slideEl) => slideEl.column === activeIndex);
        let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute('data-swiper-slide-index'), 10);
        if (Number.isNaN(activeSlideIndex)) {
            activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
        }
        realIndex = Math.floor(activeSlideIndex / params.grid.rows);
    }
    else if (swiper.slides[activeIndex]) {
        const slideIndex = swiper.slides[activeIndex].getAttribute('data-swiper-slide-index');
        if (slideIndex) {
            realIndex = parseInt(slideIndex, 10);
        }
        else {
            realIndex = activeIndex;
        }
    }
    else {
        realIndex = activeIndex;
    }
    Object.assign(swiper, {
        previousSnapIndex,
        snapIndex,
        previousRealIndex,
        realIndex,
        previousIndex,
        activeIndex,
    });
    if (swiper.initialized) {
        preload(swiper);
    }
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
        if (previousRealIndex !== realIndex) {
            swiper.emit('realIndexChange');
        }
        swiper.emit('slideChange');
    }
}

function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual?.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === 'number') {
        swiper.setTransition(speed);
    }
    else if (speed === true) {
        swiper.setTransition(swiper.params.speed);
    }
    const getSlideByIndex = (index) => {
        if (isVirtual) {
            return swiper.slides[swiper.getSlideIndexByData(index)];
        }
        return swiper.slides[index];
    };
    // Find slides currently in view
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) {
            (swiper.visibleSlides || []).forEach((slide) => {
                activeSlides.push(slide);
            });
        }
        else {
            for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual)
                    break;
                const slide = getSlideByIndex(index);
                if (slide)
                    activeSlides.push(slide);
            }
        }
    }
    else {
        const slide = getSlideByIndex(swiper.activeIndex);
        if (slide)
            activeSlides.push(slide);
    }
    // Find new height from highest slide in view
    for (i = 0; i < activeSlides.length; i += 1) {
        if (typeof activeSlides[i] !== 'undefined') {
            const height = activeSlides[i].offsetHeight;
            newHeight = height > newHeight ? height : newHeight;
        }
    }
    // Update Height
    if (newHeight || newHeight === 0)
        swiper.wrapperEl.style.height = `${newHeight}px`;
}

function updateClickedSlide(el, path) {
    const swiper = this;
    const params = swiper.params;
    let slide = el.closest(`.${params.slideClass}, swiper-slide`);
    if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) {
        [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
            if (!slide &&
                pathEl.matches &&
                pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
                slide = pathEl;
            }
        });
    }
    let slideFound = false;
    let slideIndex;
    if (slide) {
        for (let i = 0; i < swiper.slides.length; i += 1) {
            if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
        }
    }
    if (slide && slideFound) {
        swiper.clickedSlide = slide;
        if (swiper.virtual && swiper.params.virtual?.enabled) {
            swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
        }
        else {
            swiper.clickedIndex = slideIndex;
        }
    }
    else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
    }
    if (params.slideToClickedSlide &&
        swiper.clickedIndex !== undefined &&
        swiper.clickedIndex !== swiper.activeIndex) {
        swiper.slideToClickedSlide();
    }
}

function updateProgress(translate) {
    const swiper = this;
    if (typeof translate === 'undefined') {
        const multiplier = swiper.rtlTranslate ? -1 : 1;
        translate = (swiper && swiper.translate && swiper.translate * multiplier) || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let { progress, isBeginning, isEnd } = swiper;
    let progressLoop = swiper.progressLoop;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
    }
    else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
        const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
        isBeginning = isBeginningRounded || progress <= 0;
        isEnd = isEndRounded || progress >= 1;
        if (isBeginningRounded)
            progress = 0;
        if (isEndRounded)
            progress = 1;
    }
    if (params.loop) {
        const firstSlideIndex = swiper.getSlideIndexByData(0);
        const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
        const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
        const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
        const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
        const translateAbs = Math.abs(translate);
        if (translateAbs >= firstSlideTranslate) {
            progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
        }
        else {
            progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
        }
        if (progressLoop > 1)
            progressLoop -= 1;
    }
    Object.assign(swiper, {
        progress,
        progressLoop,
        isBeginning,
        isEnd,
    });
    if (params.watchSlidesProgress || (params.centeredSlides && params.autoHeight))
        swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) {
        swiper.emit('reachBeginning toEdge');
    }
    if (isEnd && !wasEnd) {
        swiper.emit('reachEnd toEdge');
    }
    if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
        swiper.emit('fromEdge');
    }
    swiper.emit('progress', progress);
}

function updateSize() {
    const swiper = this;
    let width;
    let height;
    const el = swiper.el;
    if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
        width = swiper.params.width;
    }
    else {
        width = el.clientWidth;
    }
    if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
        height = swiper.params.height;
    }
    else {
        height = el.clientHeight;
    }
    if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
        return;
    }
    // Subtract paddings
    width =
        width -
            parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(el, 'padding-left') || '0', 10) -
            parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(el, 'padding-right') || '0', 10);
    height =
        height -
            parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(el, 'padding-top') || '0', 10) -
            parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(el, 'padding-bottom') || '0', 10);
    if (Number.isNaN(width))
        width = 0;
    if (Number.isNaN(height))
        height = 0;
    Object.assign(swiper, {
        width,
        height,
        size: swiper.isHorizontal() ? width : height,
    });
}

function updateSlides() {
    const swiper = this;
    function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || '0');
    }
    const params = swiper.params;
    const { wrapperEl, slidesEl, rtlTranslate: rtl, wrongRTL } = swiper;
    const isVirtual = !!(swiper.virtual && params.virtual?.enabled);
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    const resolveOffset = (value) => typeof value === 'function' ? value.call(swiper) : value;
    const offsetBefore = resolveOffset(params.slidesOffsetBefore);
    const offsetAfter = resolveOffset(params.slidesOffsetAfter);
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    const swiperSize = swiper.size - offsetBefore - offsetAfter;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === 'undefined') {
        return;
    }
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
        spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
    }
    else if (typeof spaceBetween === 'string') {
        spaceBetween = parseFloat(spaceBetween);
    }
    swiper.virtualSize =
        -spaceBetween - offsetBefore - offsetAfter;
    // reset margins
    slides.forEach((slideEl) => {
        if (rtl) {
            slideEl.style.marginLeft = '';
        }
        else {
            slideEl.style.marginRight = '';
        }
        slideEl.style.marginBottom = '';
        slideEl.style.marginTop = '';
    });
    // reset cssMode offsets
    if (params.centeredSlides && params.cssMode) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(wrapperEl, '--swiper-centered-offset-before', '');
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(wrapperEl, '--swiper-centered-offset-after', '');
    }
    // set cssMode offsets
    if (params.cssMode) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(wrapperEl, '--swiper-slides-offset-before', `${offsetBefore}px`);
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(wrapperEl, '--swiper-slides-offset-after', `${offsetAfter}px`);
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) {
        swiper.grid.initSlides(slides);
    }
    else if (swiper.grid) {
        swiper.grid.unsetSlides();
    }
    // Calc slides
    let slideSize = 0;
    const shouldResetSlideSize = params.slidesPerView === 'auto' &&
        params.breakpoints &&
        Object.keys(params.breakpoints).filter((key) => {
            const bp = params.breakpoints[key];
            return typeof bp?.slidesPerView !== 'undefined';
        }).length > 0;
    for (let i = 0; i < slidesLength; i += 1) {
        slideSize = 0;
        const slide = slides[i];
        if (slide) {
            if (gridEnabled) {
                swiper.grid.updateSlide(i, slide, slides);
            }
            if ((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(slide, 'display') === 'none')
                continue;
        }
        if (isVirtual && params.slidesPerView === 'auto') {
            if (params.virtual?.slidesPerViewAutoSlideSize) {
                slideSize = params.virtual.slidesPerViewAutoSlideSize;
            }
            if (slideSize && slide) {
                if (params.roundLengths)
                    slideSize = Math.floor(slideSize);
                slide.style[swiper.getDirectionLabel('width')] =
                    `${slideSize}px`;
            }
        }
        else if (params.slidesPerView === 'auto') {
            if (shouldResetSlideSize) {
                slide.style[swiper.getDirectionLabel('width')] = ``;
            }
            const slideStyles = getComputedStyle(slide);
            const currentTransform = slide.style.transform;
            const currentWebKitTransform = slide.style.webkitTransform;
            if (currentTransform) {
                slide.style.transform = 'none';
            }
            if (currentWebKitTransform) {
                slide.style.webkitTransform =
                    'none';
            }
            if (params.roundLengths) {
                slideSize = swiper.isHorizontal()
                    ? (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(slide, 'width')
                    : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(slide, 'height');
            }
            else {
                const width = getDirectionPropertyValue(slideStyles, 'width');
                const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
                const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
                const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
                const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
                const boxSizing = slideStyles.getPropertyValue('box-sizing');
                if (boxSizing && boxSizing === 'border-box') {
                    slideSize = width + marginLeft + marginRight;
                }
                else {
                    const { clientWidth, offsetWidth } = slide;
                    slideSize =
                        width +
                            paddingLeft +
                            paddingRight +
                            marginLeft +
                            marginRight +
                            (offsetWidth - clientWidth);
                }
            }
            if (currentTransform) {
                slide.style.transform = currentTransform;
            }
            if (currentWebKitTransform) {
                slide.style.webkitTransform =
                    currentWebKitTransform;
            }
            if (params.roundLengths)
                slideSize = Math.floor(slideSize);
        }
        else {
            slideSize =
                (swiperSize - (params.slidesPerView - 1) * spaceBetween) /
                    params.slidesPerView;
            if (params.roundLengths)
                slideSize = Math.floor(slideSize);
            if (slide) {
                slide.style[swiper.getDirectionLabel('width')] =
                    `${slideSize}px`;
            }
        }
        if (slide) {
            slide.swiperSlideSize = slideSize;
        }
        slidesSizesGrid.push(slideSize);
        if (params.centeredSlides) {
            slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
            if (prevSlideSize === 0 && i !== 0)
                slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (i === 0)
                slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (Math.abs(slidePosition) < 1 / 1000)
                slidePosition = 0;
            if (params.roundLengths)
                slidePosition = Math.floor(slidePosition);
            if (index % params.slidesPerGroup === 0)
                snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
        }
        else {
            if (params.roundLengths)
                slidePosition = Math.floor(slidePosition);
            if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) %
                swiper.params.slidesPerGroup ===
                0)
                snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
            slidePosition = slidePosition + slideSize + spaceBetween;
        }
        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
        wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (params.setWrapperSize) {
        wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (gridEnabled) {
        swiper.grid.updateWrapperSize(slideSize, snapGrid);
    }
    // Remove last grid elements depending on width
    if (!params.centeredSlides) {
        // Check if snapToSlideEdge should be applied
        const isFractionalSlidesPerView = params.slidesPerView !== 'auto' && params.slidesPerView % 1 !== 0;
        const shouldSnapToSlideEdge = params.snapToSlideEdge &&
            !params.loop &&
            (params.slidesPerView === 'auto' || isFractionalSlidesPerView);
        // Calculate the last allowed snap index when snapToSlideEdge is enabled
        // This ensures minimum slides are visible at the end
        let lastAllowedSnapIndex = snapGrid.length;
        if (shouldSnapToSlideEdge) {
            let minVisibleSlides;
            if (params.slidesPerView === 'auto') {
                // For 'auto' mode, calculate how many slides fit based on actual sizes
                minVisibleSlides = 1;
                let accumulatedSize = 0;
                for (let i = slidesSizesGrid.length - 1; i >= 0; i -= 1) {
                    accumulatedSize +=
                        slidesSizesGrid[i] + (i < slidesSizesGrid.length - 1 ? spaceBetween : 0);
                    if (accumulatedSize <= swiperSize) {
                        minVisibleSlides = slidesSizesGrid.length - i;
                    }
                    else {
                        break;
                    }
                }
            }
            else {
                minVisibleSlides = Math.floor(params.slidesPerView);
            }
            lastAllowedSnapIndex = Math.max(slidesLength - minVisibleSlides, 0);
        }
        const newSlidesGrid = [];
        for (let i = 0; i < snapGrid.length; i += 1) {
            let slidesGridItem = snapGrid[i];
            if (params.roundLengths)
                slidesGridItem = Math.floor(slidesGridItem);
            if (shouldSnapToSlideEdge) {
                // When snapToSlideEdge is enabled, only keep snaps up to lastAllowedSnapIndex
                if (i <= lastAllowedSnapIndex) {
                    newSlidesGrid.push(slidesGridItem);
                }
            }
            else if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
                // When snapToSlideEdge is disabled, keep snaps that fit within scrollable area
                newSlidesGrid.push(slidesGridItem);
            }
        }
        snapGrid = newSlidesGrid;
        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) >
            1) {
            // Only add edge-aligned snap if snapToSlideEdge is not enabled
            if (!shouldSnapToSlideEdge) {
                snapGrid.push(swiper.virtualSize - swiperSize);
            }
        }
    }
    if (isVirtual && params.loop) {
        const size = slidesSizesGrid[0] + spaceBetween;
        const slidesBefore = swiper.virtual.slidesBefore ?? 0;
        const slidesAfter = swiper.virtual.slidesAfter ?? 0;
        const virtualLoopCount = slidesBefore + slidesAfter;
        if (params.slidesPerGroup > 1) {
            const groups = Math.ceil(virtualLoopCount / params.slidesPerGroup);
            const groupSize = size * params.slidesPerGroup;
            for (let i = 0; i < groups; i += 1) {
                snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
            }
        }
        for (let i = 0; i < virtualLoopCount; i += 1) {
            if (params.slidesPerGroup === 1) {
                snapGrid.push(snapGrid[snapGrid.length - 1] + size);
            }
            slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
            swiper.virtualSize += size;
        }
    }
    if (snapGrid.length === 0)
        snapGrid = [0];
    if (spaceBetween !== 0) {
        const key = swiper.isHorizontal() && rtl ? 'marginLeft' : swiper.getDirectionLabel('marginRight');
        slides
            .filter((_, slideIndex) => {
            if (!params.cssMode || params.loop)
                return true;
            if (slideIndex === slides.length - 1) {
                return false;
            }
            return true;
        })
            .forEach((slideEl) => {
            slideEl.style[key] = `${spaceBetween}px`;
        });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue) => {
            allSlidesSize += slideSizeValue + (spaceBetween || 0);
        });
        allSlidesSize -= spaceBetween;
        const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
        snapGrid = snapGrid.map((snap) => {
            if (snap <= 0)
                return -offsetBefore;
            if (snap > maxSnap)
                return maxSnap + offsetAfter;
            return snap;
        });
    }
    if (params.centerInsufficientSlides) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue) => {
            allSlidesSize += slideSizeValue + (spaceBetween || 0);
        });
        allSlidesSize -= spaceBetween;
        if (allSlidesSize < swiperSize) {
            const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
            snapGrid.forEach((snap, snapIndex) => {
                snapGrid[snapIndex] = snap - allSlidesOffset;
            });
            slidesGrid.forEach((snap, snapIndex) => {
                slidesGrid[snapIndex] = snap + allSlidesOffset;
            });
        }
    }
    Object.assign(swiper, {
        slides,
        snapGrid,
        slidesGrid,
        slidesSizesGrid,
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.v)(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
        const addToSnapGrid = -swiper.snapGrid[0];
        const addToSlidesGrid = -swiper.slidesGrid[0];
        swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
        swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) {
        swiper.emit('slidesLengthChange');
    }
    if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow)
            swiper.checkOverflow();
        swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
        swiper.emit('slidesGridLengthChange');
    }
    if (params.watchSlidesProgress) {
        swiper.updateSlidesOffset();
    }
    swiper.emit('slidesUpdated');
    if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
        const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
        const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
        if (slidesLength <= params.maxBackfaceHiddenSlides) {
            if (!hasClassBackfaceClassAdded)
                swiper.el.classList.add(backFaceHiddenClass);
        }
        else if (hasClassBackfaceClassAdded) {
            swiper.el.classList.remove(backFaceHiddenClass);
        }
    }
}

const toggleSlideClasses$1 = (slideEl, condition, className) => {
    if (condition && !slideEl.classList.contains(className)) {
        slideEl.classList.add(className);
    }
    else if (!condition && slideEl.classList.contains(className)) {
        slideEl.classList.remove(className);
    }
};
function updateSlidesClasses() {
    const swiper = this;
    const { slides, params, slidesEl, activeIndex } = swiper;
    const isVirtual = !!(swiper.virtual && params.virtual?.enabled);
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const getFilteredSlide = (selector) => {
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
    };
    let activeSlide;
    let prevSlide;
    let nextSlide;
    if (isVirtual) {
        if (params.loop) {
            const virtualSlides = swiper.virtual.slides;
            let slideIndex = activeIndex - (swiper.virtual.slidesBefore ?? 0);
            if (slideIndex < 0)
                slideIndex = virtualSlides.length + slideIndex;
            if (slideIndex >= virtualSlides.length)
                slideIndex -= virtualSlides.length;
            activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
        }
        else {
            activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
        }
    }
    else if (gridEnabled) {
        activeSlide = slides.find((slideEl) => slideEl.column === activeIndex);
        nextSlide = slides.find((slideEl) => slideEl.column === activeIndex + 1);
        prevSlide = slides.find((slideEl) => slideEl.column === activeIndex - 1);
    }
    else {
        activeSlide = slides[activeIndex];
    }
    if (activeSlide) {
        if (!gridEnabled) {
            // Next Slide
            nextSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
            if (params.loop && !nextSlide) {
                nextSlide = slides[0];
            }
            // Prev Slide
            prevSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
            // NOTE: legacy guard from v9; `(!prevSlide) === 0` is always false, but we preserve
            // the original behaviour (no-op) to avoid runtime changes in v14. Audit candidate.
            if (params.loop && !prevSlide === 0) {
                prevSlide = slides[slides.length - 1];
            }
        }
    }
    slides.forEach((slideEl) => {
        toggleSlideClasses$1(slideEl, slideEl === activeSlide, params.slideActiveClass);
        toggleSlideClasses$1(slideEl, slideEl === nextSlide, params.slideNextClass);
        toggleSlideClasses$1(slideEl, slideEl === prevSlide, params.slidePrevClass);
    });
    swiper.emitSlidesClasses();
}

function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    const minusOffset = swiper.isElement
        ? swiper.isHorizontal()
            ? swiper.wrapperEl.offsetLeft
            : swiper.wrapperEl.offsetTop
        : 0;
    for (let i = 0; i < slides.length; i += 1) {
        slides[i].swiperSlideOffset =
            (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) -
                minusOffset -
                swiper.cssOverflowAdjustment();
    }
}

const toggleSlideClasses = (slideEl, condition, className) => {
    if (condition && !slideEl.classList.contains(className)) {
        slideEl.classList.add(className);
    }
    else if (!condition && slideEl.classList.contains(className)) {
        slideEl.classList.remove(className);
    }
};
function updateSlidesProgress(translate = (this && this.translate) || 0) {
    const swiper = this;
    const params = swiper.params;
    const { slides, rtlTranslate: rtl, snapGrid } = swiper;
    if (slides.length === 0)
        return;
    if (typeof slides[0].swiperSlideOffset === 'undefined')
        swiper.updateSlidesOffset();
    let offsetCenter = -translate;
    if (rtl)
        offsetCenter = translate;
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    let spaceBetween = params.spaceBetween;
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
        spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiper.size;
    }
    else if (typeof spaceBetween === 'string') {
        spaceBetween = parseFloat(spaceBetween);
    }
    for (let i = 0; i < slides.length; i += 1) {
        const slide = slides[i];
        let slideOffset = slide.swiperSlideOffset ?? 0;
        if (params.cssMode && params.centeredSlides) {
            slideOffset -= slides[0].swiperSlideOffset ?? 0;
        }
        const slideSize = slide.swiperSlideSize ?? 0;
        const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) /
            (slideSize + spaceBetween);
        const originalSlideProgress = (offsetCenter -
            snapGrid[0] +
            (params.centeredSlides ? swiper.minTranslate() : 0) -
            slideOffset) /
            (slideSize + spaceBetween);
        const slideBefore = -(offsetCenter - slideOffset);
        const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
        const isVisible = (slideBefore >= 0 && slideBefore < swiper.size - 1) ||
            (slideAfter > 1 && slideAfter <= swiper.size) ||
            (slideBefore <= 0 && slideAfter >= swiper.size);
        if (isVisible) {
            swiper.visibleSlides.push(slide);
            swiper.visibleSlidesIndexes.push(i);
        }
        toggleSlideClasses(slide, isVisible, params.slideVisibleClass);
        toggleSlideClasses(slide, isFullyVisible, params.slideFullyVisibleClass);
        slide.progress = rtl ? -slideProgress : slideProgress;
        slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
}

var update = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide,
};

const prototypes = {
    eventsEmitter,
    update,
    translate,
    transition,
    slide,
    loop,
    grabCursor,
    events: events$1,
    breakpoints,
    checkOverflow: checkOverflow$1,
    classes,
};
const extendedDefaults = {};
class Swiper {
    static extendedDefaults;
    static defaults;
    constructor(...args) {
        let el;
        let params;
        if (args.length === 1 &&
            args[0] !== null &&
            typeof args[0] === 'object' &&
            Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
            params = args[0];
        }
        else {
            [el, params] = args;
        }
        if (!params)
            params = {};
        params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.n)({}, params);
        if (el && !params.el)
            params.el = el;
        if (params.el &&
            typeof params.el === 'string' &&
            typeof document !== 'undefined' &&
            document.querySelectorAll(params.el).length > 1) {
            const swipers = [];
            document.querySelectorAll(params.el).forEach((containerEl) => {
                const newParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.n)({}, params, { el: containerEl });
                swipers.push(new Swiper(newParams));
            });
            return swipers;
        }
        // Swiper Instance
        const swiper = this;
        swiper.__swiper__ = true;
        swiper.support = getSupport();
        swiper.device = getDevice({ userAgent: params.userAgent ?? undefined });
        swiper.browser = getBrowser();
        swiper.eventsListeners = {};
        swiper.eventsAnyListeners = [];
        swiper.modules = [...(swiper.__modules__ || [])];
        if (params.modules && Array.isArray(params.modules)) {
            params.modules.forEach((mod) => {
                const fn = mod;
                if (typeof fn === 'function' && swiper.modules.indexOf(fn) < 0) {
                    swiper.modules.push(fn);
                }
            });
        }
        const allModulesParams = {};
        swiper.modules.forEach((mod) => {
            mod({
                params: params,
                swiper,
                extendParams: moduleExtendParams(params, allModulesParams),
                on: swiper.on.bind(swiper),
                once: swiper.once.bind(swiper),
                off: swiper.off.bind(swiper),
                emit: swiper.emit.bind(swiper),
            });
        });
        // Extend defaults with modules params
        const swiperParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.n)({}, defaults, allModulesParams);
        // Extend defaults with passed params
        swiper.params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.n)({}, swiperParams, extendedDefaults, params);
        swiper.originalParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.n)({}, swiper.params);
        swiper.passedParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.n)({}, params);
        // add event listeners
        if (swiper.params && swiper.params.on) {
            const onHandlers = swiper.params.on;
            Object.keys(onHandlers).forEach((eventName) => {
                const handler = onHandlers[eventName];
                if (handler)
                    swiper.on(eventName, handler);
            });
        }
        if (swiper.params && swiper.params.onAny) {
            swiper.onAny(swiper.params.onAny);
        }
        // Extend Swiper
        Object.assign(swiper, {
            enabled: swiper.params.enabled,
            el,
            // Classes
            classNames: [],
            // Slides
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            // isDirection
            isHorizontal() {
                return swiper.params.direction === 'horizontal';
            },
            isVertical() {
                return swiper.params.direction === 'vertical';
            },
            // Indexes
            activeIndex: 0,
            realIndex: 0,
            //
            isBeginning: true,
            isEnd: false,
            // Props
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: false,
            cssOverflowAdjustment() {
                // Returns 0 unless `translate` is > 2**23
                // Should be subtracted from css values to prevent overflow
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            // Locks
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev,
            // Touch Events
            touchEventsData: {
                isTouched: undefined,
                isMoved: undefined,
                allowTouchCallbacks: undefined,
                touchStartTime: undefined,
                isScrolling: undefined,
                currentTranslate: undefined,
                startTranslate: undefined,
                allowThresholdMove: undefined,
                // Form elements to match
                focusableElements: swiper.params.focusableElements,
                // Last click time
                lastClickTime: 0,
                clickTimeout: undefined,
                // Velocities
                velocities: [],
                allowMomentumBounce: undefined,
                startMoving: undefined,
                pointerId: null,
                touchId: null,
            },
            // Clicks
            allowClick: true,
            // Touches
            allowTouchMove: swiper.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
            },
            // Images
            imagesToLoad: [],
            imagesLoaded: 0,
        });
        swiper.emit('_swiper');
        // Init
        if (swiper.params.init) {
            swiper.init();
        }
        // Return app instance
        return swiper;
    }
    getDirectionLabel(property) {
        if (this.isHorizontal()) {
            return property;
        }
        // oxfmt-ignore
        return {
            'width': 'height',
            'margin-top': 'margin-left',
            'margin-bottom ': 'margin-right',
            'margin-left': 'margin-top',
            'margin-right': 'margin-bottom',
            'padding-left': 'padding-top',
            'padding-right': 'padding-bottom',
            'marginRight': 'marginBottom',
        }[property];
    }
    /**
     * !INTERNAL
     */
    isHorizontal() {
        return this.params.direction === 'horizontal';
    }
    isVertical() {
        return this.params.direction === 'vertical';
    }
    cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
    }
    getSlideIndex(slideEl) {
        const { slidesEl, params } = this;
        const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
        const firstSlideIndex = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.b)(slides[0]);
        return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.b)(slideEl) - (firstSlideIndex ?? 0);
    }
    getSlideIndexByData(index) {
        return this.getSlideIndex(this.slides.find((slideEl) => Number(slideEl.getAttribute('data-swiper-slide-index')) === index));
    }
    getSlideIndexWhenGrid(index) {
        if (this.grid && this.params.grid && this.params.grid.rows > 1) {
            if (this.params.grid.fill === 'column') {
                index = Math.floor(index / this.params.grid.rows);
            }
            else if (this.params.grid.fill === 'row') {
                index = index % Math.ceil(this.slides.length / this.params.grid.rows);
            }
        }
        return index;
    }
    recalcSlides() {
        const { slidesEl, params } = this;
        this.slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
    }
    /**
     * Enable Swiper (if it was disabled)
     */
    enable() {
        if (this.enabled)
            return;
        this.enabled = true;
        if (this.params.grabCursor) {
            this.setGrabCursor();
        }
        this.emit('enable');
    }
    /**
     * Disable Swiper (if it was enabled). When Swiper is disabled, it will hide all navigation elements and won't respond to any events and interactions
     */
    disable() {
        if (!this.enabled)
            return;
        this.enabled = false;
        if (this.params.grabCursor) {
            this.unsetGrabCursor();
        }
        this.emit('disable');
    }
    /**
     * Set Swiper translate progress (from 0 to 1). Where 0 - its initial position (offset) on first slide, and 1 - its maximum position (offset) on last slide
     *
     * @param progress Swiper translate progress (from 0 to 1).
     * @param speed Transition duration (in ms).
     */
    setProgress(progress, speed) {
        progress = Math.min(Math.max(progress, 0), 1);
        const min = this.minTranslate();
        const max = this.maxTranslate();
        const current = (max - min) * progress + min;
        this.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
        this.updateActiveIndex();
        this.updateSlidesClasses();
    }
    emitContainerClasses() {
        if (!this.params._emitClasses || !this.el)
            return;
        const cls = this.el.className.split(' ').filter((className) => {
            return (className.indexOf('swiper') === 0 ||
                className.indexOf(this.params.containerModifierClass) === 0);
        });
        this.emit('_containerClasses', cls.join(' '));
    }
    getSlideClasses(slideEl) {
        if (this.destroyed)
            return '';
        return slideEl.className
            .split(' ')
            .filter((className) => {
            return (className.indexOf('swiper-slide') === 0 ||
                className.indexOf(this.params.slideClass) === 0);
        })
            .join(' ');
    }
    emitSlidesClasses() {
        if (!this.params._emitClasses || !this.el)
            return;
        const updates = [];
        this.slides.forEach((slideEl) => {
            const classNames = this.getSlideClasses(slideEl);
            updates.push({ slideEl, classNames });
            this.emit('_slideClass', slideEl, classNames);
        });
        this.emit('_slideClasses', updates);
    }
    /**
     * Get dynamically calculated amount of slides per view, useful only when slidesPerView set to `auto`
     */
    slidesPerViewDynamic(view = 'current', exact = false) {
        const { params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex } = this;
        let spv = 1;
        if (typeof params.slidesPerView === 'number')
            return params.slidesPerView;
        if (params.centeredSlides) {
            let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize ?? 0) : 0;
            let breakLoop = false;
            for (let i = activeIndex + 1; i < slides.length; i += 1) {
                if (slides[i] && !breakLoop) {
                    slideSize += Math.ceil(slides[i].swiperSlideSize ?? 0);
                    spv += 1;
                    if (slideSize > swiperSize)
                        breakLoop = true;
                }
            }
            for (let i = activeIndex - 1; i >= 0; i -= 1) {
                if (slides[i] && !breakLoop) {
                    slideSize += slides[i].swiperSlideSize ?? 0;
                    spv += 1;
                    if (slideSize > swiperSize)
                        breakLoop = true;
                }
            }
        }
        else if (view === 'current') {
            for (let i = activeIndex + 1; i < slides.length; i += 1) {
                const slideInView = exact
                    ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize
                    : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                if (slideInView) {
                    spv += 1;
                }
            }
        }
        else {
            // previous
            for (let i = activeIndex - 1; i >= 0; i -= 1) {
                const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                if (slideInView) {
                    spv += 1;
                }
            }
        }
        return spv;
    }
    /**
     * You should call it after you add/remove slides
     * manually, or after you hide/show it, or do any
     * custom DOM modifications with Swiper
     * This method also includes subcall of the following
     * methods which you can use separately:
     */
    update() {
        const swiper = this;
        if (!swiper || swiper.destroyed)
            return;
        const { snapGrid, params } = swiper;
        // Breakpoints
        if (params.breakpoints) {
            swiper.setBreakpoint();
        }
        [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
            if (imageEl.complete) {
                processLazyPreloader(swiper, imageEl);
            }
        });
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        function setTranslate() {
            const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
            const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
            swiper.setTranslate(newTranslate);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        let translated;
        if (params.freeMode?.enabled && !params.cssMode) {
            setTranslate();
            if (params.autoHeight) {
                swiper.updateAutoHeight();
            }
        }
        else {
            if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) &&
                swiper.isEnd &&
                !params.centeredSlides) {
                const slidesLength = swiper.virtual && params.virtual?.enabled
                    ? swiper.virtual.slides.length
                    : swiper.slides.length;
                translated = swiper.slideTo(slidesLength - 1, 0, false, true);
            }
            else {
                translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
            }
            if (!translated) {
                setTranslate();
            }
        }
        if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
            swiper.checkOverflow();
        }
        swiper.emit('update');
    }
    /**
     * Changes slider direction from horizontal to vertical and back.
     *
     * @param direction New direction. If not specified, then will automatically changed to opposite direction
     * @param needUpdate Will call swiper.update(). Default true
     */
    changeDirection(newDirection, needUpdate = true) {
        const swiper = this;
        const currentDirection = swiper.params.direction;
        if (!newDirection) {
            newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
        }
        if (newDirection === currentDirection ||
            (newDirection !== 'horizontal' && newDirection !== 'vertical')) {
            return swiper;
        }
        swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
        swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.forEach((slideEl) => {
            if (newDirection === 'vertical') {
                slideEl.style.width = '';
            }
            else {
                slideEl.style.height = '';
            }
        });
        swiper.emit('changeDirection');
        if (needUpdate)
            swiper.update();
        return swiper;
    }
    /**
     * Changes slider language
     *
     * @param direction New direction. Should be `rtl` or `ltr`
     */
    changeLanguageDirection(direction) {
        const swiper = this;
        if ((swiper.rtl && direction === 'rtl') || (!swiper.rtl && direction === 'ltr'))
            return;
        swiper.rtl = direction === 'rtl';
        swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
        if (swiper.rtl) {
            swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
            swiper.el.dir = 'rtl';
        }
        else {
            swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
            swiper.el.dir = 'ltr';
        }
        swiper.update();
    }
    mount(element) {
        const swiper = this;
        if (swiper.mounted)
            return true;
        // No DOM (SSR / Node) — nothing to mount to.
        if (typeof document === 'undefined')
            return false;
        // Find el (params.el can be a CSSSelector, HTMLElement, or undefined)
        const initialEl = element ?? swiper.params.el;
        let el = null;
        if (typeof initialEl === 'string') {
            el = document.querySelector(initialEl);
        }
        else if (initialEl instanceof HTMLElement) {
            el = initialEl;
        }
        if (!el) {
            return false;
        }
        el.swiper = swiper;
        const parent = el.parentNode;
        if (parent &&
            parent.host &&
            parent.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
            swiper.isElement = true;
        }
        const getWrapperSelector = () => {
            return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
        };
        const getWrapper = () => {
            if (el && el.shadowRoot) {
                const res = el.shadowRoot.querySelector(getWrapperSelector());
                // Children needs to return slot items
                return res;
            }
            return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(el, getWrapperSelector())[0];
        };
        // Find Wrapper
        let wrapperEl = getWrapper();
        if (!wrapperEl && swiper.params.createElements) {
            wrapperEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.a)('div', swiper.params.wrapperClass);
            el.append(wrapperEl);
            (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
                wrapperEl.append(slideEl);
            });
        }
        const host = swiper.isElement ? el.parentNode.host : null;
        Object.assign(swiper, {
            el,
            wrapperEl,
            slidesEl: swiper.isElement && !host.slideSlots ? host : wrapperEl,
            hostEl: swiper.isElement ? host : el,
            mounted: true,
            // RTL
            rtl: el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(el, 'direction') === 'rtl',
            rtlTranslate: swiper.params.direction === 'horizontal' &&
                (el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(el, 'direction') === 'rtl'),
            wrongRTL: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(wrapperEl, 'display') === '-webkit-box',
        });
        return true;
    }
    /**
     * Initialize slider
     */
    init(el) {
        const swiper = this;
        if (swiper.initialized)
            return swiper;
        const mounted = swiper.mount(el);
        if (mounted === false)
            return swiper;
        swiper.emit('beforeInit');
        // Set breakpoint
        if (swiper.params.breakpoints) {
            swiper.setBreakpoint();
        }
        // Add Classes
        swiper.addClasses();
        // Update size
        swiper.updateSize();
        // Update slides
        swiper.updateSlides();
        if (swiper.params.watchOverflow) {
            swiper.checkOverflow();
        }
        // Set Grab Cursor
        if (swiper.params.grabCursor && swiper.enabled) {
            swiper.setGrabCursor();
        }
        // Slide To Initial Slide
        if (swiper.params.loop && swiper.virtual && swiper.params.virtual?.enabled) {
            swiper.slideTo((swiper.params.initialSlide ?? 0) + (swiper.virtual.slidesBefore ?? 0), 0, swiper.params.runCallbacksOnInit, false, true);
        }
        else {
            swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
        }
        // Create loop
        if (swiper.params.loop) {
            swiper.loopCreate(undefined, true);
        }
        // Attach events
        swiper.attachEvents();
        const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
        if (swiper.isElement) {
            lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
        }
        lazyElements.forEach((imageEl) => {
            if (imageEl.complete) {
                processLazyPreloader(swiper, imageEl);
            }
            else {
                imageEl.addEventListener('load', (e) => {
                    processLazyPreloader(swiper, e.target);
                });
            }
        });
        preload(swiper);
        // Init Flag
        swiper.initialized = true;
        preload(swiper);
        // Emit
        swiper.emit('init');
        swiper.emit('afterInit');
        return swiper;
    }
    /**
     * Destroy slider instance and detach all events listeners
     *
     * @param deleteInstance Set it to false (by default it is true) to not to delete Swiper instance
     * @param cleanStyles Set it to true (by default it is true) and all custom styles will be removed from slides, wrapper and container.
     * Useful if you need to destroy Swiper and to init again with new options or in different direction
     */
    destroy(deleteInstance = true, cleanStyles = true) {
        const swiper = this;
        const { params, el, wrapperEl, slides } = swiper;
        if (typeof swiper.params === 'undefined' || swiper.destroyed) {
            return null;
        }
        swiper.emit('beforeDestroy');
        // Init Flag
        swiper.initialized = false;
        // Detach events
        swiper.detachEvents();
        // Destroy loop
        if (params.loop) {
            swiper.loopDestroy();
        }
        // Cleanup styles
        if (cleanStyles) {
            swiper.removeClasses();
            if (el && typeof el !== 'string') {
                el.removeAttribute('style');
            }
            if (wrapperEl) {
                wrapperEl.removeAttribute('style');
            }
            if (slides && slides.length) {
                slides.forEach((slideEl) => {
                    slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                    slideEl.removeAttribute('style');
                    slideEl.removeAttribute('data-swiper-slide-index');
                });
            }
        }
        swiper.emit('destroy');
        // Detach emitter events
        Object.keys(swiper.eventsListeners).forEach((eventName) => {
            swiper.off(eventName);
        });
        if (deleteInstance !== false) {
            if (swiper.el && typeof swiper.el !== 'string') {
                swiper.el.swiper = null;
            }
            (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.d)(swiper);
        }
        swiper.destroyed = true;
        return null;
    }
    static extendDefaults(newDefaults) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(extendedDefaults, newDefaults);
    }
    static installModule(mod) {
        if (!Swiper.prototype.__modules__)
            Swiper.prototype.__modules__ = [];
        const modules = Swiper.prototype.__modules__;
        if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
            modules.push(mod);
        }
    }
    static use(module) {
        if (Array.isArray(module)) {
            module.forEach((m) => Swiper.installModule(m));
            return Swiper;
        }
        Swiper.installModule(module);
        return Swiper;
    }
}
Object.defineProperty(Swiper, 'extendedDefaults', {
    get() {
        return extendedDefaults;
    },
});
Object.defineProperty(Swiper, 'defaults', {
    get() {
        return defaults;
    },
});
// Attach prototype-mixin method groups onto Swiper.prototype. Each group is a
// plain record of method-name → function; we copy them across as-is.
const prototypeRecord = prototypes;
const swiperProto = Swiper.prototype;
Object.keys(prototypeRecord).forEach((prototypeGroup) => {
    const group = prototypeRecord[prototypeGroup];
    Object.keys(group).forEach((protoMethod) => {
        swiperProto[protoMethod] = group[protoMethod];
    });
});
Swiper.use([Resize, Observer]);




/***/ }),

/***/ "./node_modules/swiper/shared/utils.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/shared/utils.mjs ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: function() { return /* binding */ createElement; },
/* harmony export */   b: function() { return /* binding */ elementIndex; },
/* harmony export */   c: function() { return /* binding */ classesToTokens; },
/* harmony export */   d: function() { return /* binding */ deleteProps; },
/* harmony export */   e: function() { return /* binding */ elementChildren; },
/* harmony export */   f: function() { return /* binding */ elementIsChildOf; },
/* harmony export */   g: function() { return /* binding */ elementNextAll; },
/* harmony export */   h: function() { return /* binding */ elementOffset; },
/* harmony export */   i: function() { return /* binding */ elementOuterSize; },
/* harmony export */   j: function() { return /* binding */ elementParents; },
/* harmony export */   k: function() { return /* binding */ elementPrevAll; },
/* harmony export */   l: function() { return /* binding */ elementStyle; },
/* harmony export */   m: function() { return /* binding */ elementTransitionEnd; },
/* harmony export */   n: function() { return /* binding */ extend; },
/* harmony export */   o: function() { return /* binding */ getRotateFix; },
/* harmony export */   p: function() { return /* binding */ getSlideTransformEl; },
/* harmony export */   q: function() { return /* binding */ getTranslate; },
/* harmony export */   r: function() { return /* binding */ isObject; },
/* harmony export */   s: function() { return /* binding */ makeElementsArray; },
/* harmony export */   t: function() { return /* binding */ nextTick; },
/* harmony export */   u: function() { return /* binding */ now; },
/* harmony export */   v: function() { return /* binding */ setCSSProperty; },
/* harmony export */   w: function() { return /* binding */ setInnerHTML; },
/* harmony export */   x: function() { return /* binding */ showWarning; }
/* harmony export */ });
function classesToTokens(classes = '') {
    return classes
        .trim()
        .split(' ')
        .filter((c) => !!c.trim());
}

function deleteProps(obj) {
    Object.keys(obj).forEach((key) => {
        try {
            obj[key] = null;
        }
        catch {
            // no getter for object
        }
        try {
            delete obj[key];
        }
        catch {
            // something got wrong
        }
    });
}
function nextTick(callback, delay = 0) {
    return setTimeout(callback, delay);
}
function now() {
    return Date.now();
}
function getComputedStyle(el) {
    return window.getComputedStyle(el, null);
}
function getTranslate(el, axis = 'x') {
    const style = getComputedStyle(el);
    const transform = style.transform || style.webkitTransform;
    if (!transform || transform === 'none')
        return 0;
    const matrix = new DOMMatrixReadOnly(transform);
    return axis === 'x' ? matrix.m41 : matrix.m42;
}
function isObject(o) {
    return (typeof o === 'object' &&
        o !== null &&
        o.constructor === Object &&
        Object.prototype.toString.call(o).slice(8, -1) === 'Object');
}
function isNode(node) {
    if (typeof HTMLElement !== 'undefined' && node instanceof HTMLElement)
        return true;
    return (!!node &&
        typeof node === 'object' &&
        (node.nodeType === 1 || node.nodeType === 11));
}
function extend(target, ...sources) {
    const to = Object(target);
    for (let i = 0; i < sources.length; i += 1) {
        const nextSource = sources[i];
        if (nextSource === undefined || nextSource === null || isNode(nextSource))
            continue;
        const sourceObj = nextSource;
        const keysArray = Object.keys(Object(sourceObj)).filter((key) => key !== '__proto__' && key !== 'constructor' && key !== 'prototype');
        for (const nextKey of keysArray) {
            const desc = Object.getOwnPropertyDescriptor(sourceObj, nextKey);
            if (!desc || !desc.enumerable)
                continue;
            const sourceVal = sourceObj[nextKey];
            if (isObject(to[nextKey]) && isObject(sourceVal)) {
                if (sourceVal.__swiper__) {
                    to[nextKey] = sourceVal;
                }
                else {
                    extend(to[nextKey], sourceVal);
                }
            }
            else if (!isObject(to[nextKey]) && isObject(sourceVal)) {
                to[nextKey] = {};
                if (sourceVal.__swiper__) {
                    to[nextKey] = sourceVal;
                }
                else {
                    extend(to[nextKey], sourceVal);
                }
            }
            else {
                to[nextKey] = sourceVal;
            }
        }
    }
    return to;
}
function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
}
function getSlideTransformEl(slideEl) {
    const direct = slideEl.querySelector('.swiper-slide-transform');
    if (direct)
        return direct;
    if (slideEl.shadowRoot) {
        const shadowed = slideEl.shadowRoot.querySelector('.swiper-slide-transform');
        if (shadowed)
            return shadowed;
    }
    return slideEl;
}
function elementChildren(element, selector = '') {
    const children = [...element.children];
    if (element instanceof HTMLSlotElement) {
        children.push(...element.assignedElements());
    }
    return selector ? children.filter((el) => el.matches(selector)) : children;
}
function elementIsChildOfSlot(el, slot) {
    const queue = [slot];
    while (queue.length > 0) {
        const cur = queue.shift();
        if (el === cur)
            return true;
        queue.push(...cur.children, ...(cur.shadowRoot ? cur.shadowRoot.children : []), ...(cur.assignedElements
            ? cur.assignedElements()
            : []));
    }
    return false;
}
function elementIsChildOf(el, parent) {
    let isChild = parent.contains(el);
    if (!isChild && parent instanceof HTMLSlotElement) {
        const children = [...parent.assignedElements()];
        isChild = children.includes(el);
        if (!isChild)
            isChild = elementIsChildOfSlot(el, parent);
    }
    return isChild;
}
function showWarning(text) {
    try {
        console.warn(text);
    }
    catch {
        // err
    }
}
function createElement(tag, classes = []) {
    const el = document.createElement(tag);
    el.classList.add(...(Array.isArray(classes) ? classes : classesToTokens(classes)));
    return el;
}
function elementOffset(el) {
    const box = el.getBoundingClientRect();
    return {
        top: box.top + window.scrollY - (el.clientTop || 0),
        left: box.left + window.scrollX - (el.clientLeft || 0),
    };
}
function elementPrevAll(el, selector) {
    const prevEls = [];
    let prev = el.previousElementSibling;
    while (prev) {
        if (!selector || prev.matches(selector))
            prevEls.push(prev);
        prev = prev.previousElementSibling;
    }
    return prevEls;
}
function elementNextAll(el, selector) {
    const nextEls = [];
    let next = el.nextElementSibling;
    while (next) {
        if (!selector || next.matches(selector))
            nextEls.push(next);
        next = next.nextElementSibling;
    }
    return nextEls;
}
function elementStyle(el, prop) {
    return window.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
    if (!el || !el.parentNode)
        return undefined;
    return [...el.parentNode.children].indexOf(el);
}
function elementParents(el, selector) {
    const parents = [];
    let parent = el.parentElement;
    while (parent) {
        if (!selector || parent.matches(selector))
            parents.push(parent);
        parent = parent.parentElement;
    }
    return parents;
}
function elementTransitionEnd(el, callback) {
    if (!callback)
        return;
    el.addEventListener('transitionend', function fireCallBack(e) {
        if (e.target !== el)
            return;
        callback.call(el, e);
    }, { once: true });
}
function elementOuterSize(el, size, includeMargins) {
    {
        const style = window.getComputedStyle(el, null);
        return (el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] +
            parseFloat(style.getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) +
            parseFloat(style.getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom')));
    }
}
function makeElementsArray(el) {
    return (Array.isArray(el) ? el : [el]).filter((e) => !!e);
}
function getRotateFix(swiper) {
    return (v) => {
        if (Math.abs(v) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v) % 90 === 0) {
            return v + 0.001;
        }
        return v;
    };
}
function setInnerHTML(el, html = '') {
    const tt = globalThis.trustedTypes;
    if (typeof tt !== 'undefined') {
        el.innerHTML = tt.createPolicy('html', { createHTML: (s) => s }).createHTML(html);
    }
    else {
        el.innerHTML = html;
    }
}




/***/ }),

/***/ "./node_modules/swiper/swiper.mjs":
/*!****************************************!*\
  !*** ./node_modules/swiper/swiper.mjs ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Swiper: function() { return /* reexport safe */ _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S; },
/* harmony export */   "default": function() { return /* reexport safe */ _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S; }
/* harmony export */ });
/* harmony import */ var _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/swiper-core.mjs */ "./node_modules/swiper/shared/swiper-core.mjs");
/**
 * Swiper 14.0.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2026 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: July 9, 2026
 */




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklaravel_mix_package"] = self["webpackChunklaravel_mix_package"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], function() { return __webpack_require__("./src/scripts/app.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], function() { return __webpack_require__("./src/styles/app.css"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;