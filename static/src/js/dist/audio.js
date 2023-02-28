/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/audio.js":
/*!*************************!*\
  !*** ./src/js/audio.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"audio_context\": () => (/* binding */ audio_context),\n/* harmony export */   \"energy\": () => (/* binding */ energy),\n/* harmony export */   \"meydaAnalyser\": () => (/* binding */ meydaAnalyser)\n/* harmony export */ });\n\n\n\nlet audio, file, output, rAF;\nlet analyser, src, bufferLength, dataArray, audio_context;\nlet chroma, maxChroma, energy, amplitudeSpectrum, perceptualSpread, spectralCentroid\n\n\nconst lavenderHazeButton = document.getElementById('lavenderHaze')\nlavenderHazeButton.addEventListener('play', function() {\n    meydaAnalyser(lavenderHazeButton);\n});\n\n\nconst foreverButton = document.getElementById('forever')\nforeverButton.addEventListener('play', function() {\n    meydaAnalyser(foreverButton);\n});\n\nconst goodDaysButton = document.getElementById('goodDays')\ngoodDaysButton.addEventListener('play', function() {\n    meydaAnalyser(goodDaysButton);\n});\n\n\nconst obsessedButton = document.getElementById('obsessed')\nobsessedButton.addEventListener('play', function() {\n    meydaAnalyser(obsessedButton);\n});\n\n\nconst theothersideButton = document.getElementById('theotherside')\ntheothersideButton.addEventListener('play', function() {\n    meydaAnalyser(theothersideButton);\n});\n\n\nconst superloveButton = document.getElementById('superlove')\nsuperloveButton.addEventListener('play', function() {\n    meydaAnalyser(superloveButton);\n});\n\n\n\nfunction meydaAnalyser(audio) {\n    \n    audio_context = audio_context || new AudioContext();\n\n    if (!src) {\n        analyser = audio_context.createAnalyser();\n        src = audio_context.createMediaElementSource(audio)\n        src.connect(analyser);\n        analyser.connect(audio_context.destination)\n    }\n\n    energy = 0;\n\n    const meyda_analyser = Meyda.createMeydaAnalyzer({\n        audioContext: audio_context,\n        source: src,\n        buffersize: 1024,\n        featureExtractors: [\"energy\", \"perceptualSpread\", \"spectralCentroid\"],\n        callback: (features) => {\n            energy = features['energy']\n            perceptualSpread = features['perceptualSpread']\n            spectralCentroid = features['spectralCentroid']\n\n            // console.log('energy', energy.toFixed(2))\n            // if (energy.toFixed(2) > 50){\n            //     console.log('*********강조*********')\n            // }\n        }\n    })\n\n    meyda_analyser.start();\n};\n\n\n\n\n\n\n//# sourceURL=webpack://Vinyl/./src/js/audio.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/audio.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;