/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/imageCarousel.js":
/*!******************************!*\
  !*** ./src/imageCarousel.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ imageCarousel\n/* harmony export */ });\n/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide */ \"./src/slide.js\");\n;\n\nfunction imageCarousel({ containerSelector, images }) {\n  const container = document.querySelector(containerSelector);\n  const slides = images.map((img) => _slide__WEBPACK_IMPORTED_MODULE_0__.default.create(img));\n  let iterator = 0;\n  let nextSlide = slides[0];\n  let direction = 'next';\n\n  // remove classes when picture is active\n  function active() {\n    this.setAttribute('class', '');\n    this.removeEventListener('animationend', active);\n  }\n\n  function showNextSlide() {\n    // remove the animation class & listener from the previous element\n    this.setAttribute('class', '');\n    this.removeEventListener('animationend', showNextSlide);\n\n    // clear container, append the next slide with animation\n    container.innerHTML = '';\n    nextSlide.addEventListener('animationend', active);\n    nextSlide.setAttribute('class', direction);\n    container.appendChild(nextSlide);\n  }\n\n  function switchSlide() {\n    const previous = container.firstChild;\n    previous.addEventListener('animationend', showNextSlide);\n    previous.setAttribute('class', `before-${direction}`);\n  }\n\n  // compute the modulus of +ve & -ve numbers\n  function mod(x, n) {\n    return ((x % n) + n) % n;\n  }\n\n  // move forwards, loop back to first slide at the end\n  function moveForward() {\n    iterator = mod(iterator + 1, images.length);\n    nextSlide = slides[iterator];\n    direction = 'next';\n    switchSlide();\n  }\n\n  // move backwards, loop back to last slide at the start\n  function moveBackward() {\n    iterator = mod(iterator - 1, images.length);\n    nextSlide = slides[iterator];\n    direction = 'previous';\n    switchSlide();\n  }\n\n  // initialise carousel with the first slide\n  container.appendChild(nextSlide);\n\n  return { moveForward, moveBackward };\n}\n\n\n//# sourceURL=webpack://image-slider/./src/imageCarousel.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _imageCarousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageCarousel */ \"./src/imageCarousel.js\");\n;\n\n// initialise the image carousel module with a parent container selector and a\n// list of images\nconst carousel = (0,_imageCarousel__WEBPACK_IMPORTED_MODULE_0__.default)({\n  containerSelector: '#image',\n  images: [\n    {\n      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',\n      alt: 'Lovely Beach',\n    },\n    {\n      src: 'https://images.unsplash.com/photo-1532124957326-34c5605398',\n      alt: 'Ski Slope',\n    },\n    {\n      src: 'https://images.unsplash.com/photo-1467453678174-768ec283a940',\n      alt: 'Healthy Living',\n    },\n    {\n      src: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b',\n      alt: 'Working',\n    },\n    {\n      src: 'https://images.unsplash.com/photo-1519852476561-ec618b0183ba',\n      alt: 'Grand river',\n    },\n  ],\n});\n\n// move forward when the forward button is clicked\nconst forward = document.querySelector('#forward');\nforward.addEventListener('click', carousel.moveForward);\n\n// move backward when the backward button is clicked\nconst backward = document.querySelector('#backward');\nbackward.addEventListener('click', carousel.moveBackward);\n\n\n//# sourceURL=webpack://image-slider/./src/index.js?");

/***/ }),

/***/ "./src/slide.js":
/*!**********************!*\
  !*** ./src/slide.js ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function slide() {\n  function create({ src, alt }) {\n    const image = document.createElement('img');\n    image.setAttribute('src', src);\n    image.setAttribute('alt', alt);\n    return image;\n  }\n  return { create };\n})());\n\n\n//# sourceURL=webpack://image-slider/./src/slide.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;