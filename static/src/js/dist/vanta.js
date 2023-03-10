/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/vanta.js":
/*!*************************!*\
  !*** ./src/js/vanta.js ***!
  \*************************/
/***/ (() => {

eval("const vinylDefault = VANTA.TRUNK({\n    el: \"#vanta-background\",\n    mouseControls: true,\n    touchControls: true,\n    gyroControls: false,\n    minHeight: 1100.00,\n    minWidth: 1000.00,\n    scale: 3.0,\n    color: 0xf2be69,\n    backgroundColor: 0x3083ff,\n    spacing: 0.00,\n    chaos: 0,\n    p5: p5\n  })\n\n\nconst lavenderHaze = VANTA.FOG({\n    el: \"#vanta-background\",\n    mouseControls: true,\n    touchControls: true,\n    gyroControls: false,\n    minHeight: 1500.00,\n    minWidth: 1000.00,\n    highlightColor: 0x7f53f7,\n    midtoneColor: 0xa16dde,\n    lowlightColor: 0x473fcd,\n    baseColor: 0x463546,\n    blurFactor: 0.24,\n    speed: 3.60,\n    zoom: 2.30\n })\n\n\nconst goodDays = VANTA.BIRDS({\n    el: \"#vanta-background\",\n    mouseControls: true,\n    touchControls: true,\n    gyroControls: false,\n    minHeight: 1500.00,\n    minWidth: 1000.00,\n    scale: 1.00,\n    scaleMobile: 1.00,\n    backgroundColor: 0x28211e,\n    color1: 0xdc8fbe,\n    color2: 0x23f0,\n    colorMode: \"variance\",\n    wingSpan: 40.00,\n    speedLimit: 6.00,\n    separation: 51.00,\n    alignment: 56.00,\n    cohesion: 52.00,\n    quantity: 4.00,\n    backgroundAlpha: 0.79\n})\n\n\n// const dreams = VANTA.TRUNK({\n//     el: \"#vanta-background\",\n//     mouseControls: true,\n//     touchControls: true,\n//     gyroControls: false,\n//     minHeight: 900.00,\n//     minWidth: 800.00,\n//     scale: 1.00,\n//     scaleMobile: 1.00,\n//     color: 0x642e11,\n//     backgroundColor: 0xf0c25a,\n//     spacing: 10.00,\n//     chaos: 2,\n//     p5: p5\n//   })\n\n\nconst lavenderHazeButton = document.getElementById('lavenderHaze')\nlavenderHazeButton.addEventListener('play', function() {\n    vinylDefault.destroy();\n    goodDays.destroy();\n});\n\n\nconst goodDaysButton = document.getElementById('goodDays')\ngoodDaysButton.addEventListener('play', function() {\n   lavenderHaze.destroy();\n   vinylDefault.destroy();\n});\n\n\nconst foreverButton = document.getElementById('forever')\nforeverButton.addEventListener('play', function() {\n    vinylDefault.destroy();\n    lavenderHaze.destroy();\n    goodDays.destroy();\n});\n\n\nconst superloveButton = document.getElementById('superlove')\nsuperloveButton.addEventListener('play', function(){\n    vinylDefault.destroy();\n    lavenderHaze.destroy();\n    goodDays.destroy();\n})\n\n\nconst perfectButton = document.getElementById('perfect')\nperfectButton.addEventListener('play', function(){\n    vinylDefault.destroy();\n    lavenderHaze.destroy();\n    goodDays.destroy();\n})\n\n//# sourceURL=webpack://Vinyl/./src/js/vanta.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/vanta.js"]();
/******/ 	
/******/ })()
;