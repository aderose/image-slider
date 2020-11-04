/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("const carousel = [\n  {\n    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',\n    alt: 'Lovely Beach',\n  },\n  {\n    src: 'https://images.unsplash.com/photo-1532124957326-34c5605398',\n    alt: 'Ski Slope',\n  },\n  {\n    src: 'https://images.unsplash.com/photo-1467453678174-768ec283a940',\n    alt: 'Healthy Living',\n  },\n  {\n    src: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b',\n    alt: 'Working',\n  },\n  {\n    src: 'https://images.unsplash.com/photo-1519852476561-ec618b0183ba',\n    alt: 'Grand river',\n  },\n];\n\nconst imageDiv = document.querySelector('#image');\n\n// add the provided image to the image container\nfunction showImage({ src, alt }) {\n  imageDiv.innerHTML = '';\n  const image = document.createElement('img');\n  image.setAttribute('src', src);\n  image.setAttribute('alt', alt);\n  imageDiv.appendChild(image);\n}\n\n// show the first carousel image on load\nshowImage(carousel[0]);\n\n\n//# sourceURL=webpack://image-slider/./src/index.js?");
/******/ })()
;