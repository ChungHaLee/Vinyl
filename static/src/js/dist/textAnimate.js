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

/***/ "./src/js/textAnimate.js":
/*!*******************************!*\
  !*** ./src/js/textAnimate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lyrics_lavenderhaze_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lyrics/lavenderhaze.json */ \"./src/js/lyrics/lavenderhaze.json\");\n/* harmony import */ var _lyrics_forever_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lyrics/forever.json */ \"./src/js/lyrics/forever.json\");\n\n\n\n// Wrap every letter in a span\nlet textWrapper_ml13 = document.querySelector('.ml13');\nlet textWrapper_ml14 = document.querySelector(\"#text-forever > h1 > span.letters.letters-1\")\n\nlet totalSeconds = 0;\n\nvar timeNow, timeNowList, timeStart, timeEnd;\n\n\nconst text_lavenderHaze = document.getElementById('text-lavenderHaze')\nconst lavenderHazeButton = document.getElementById('lavenderHaze')\n\nconst text_forever = document.getElementById('text-forever')\nconst foreverButton = document.getElementById('forever')\n\n\n\nfunction countUpTimer(){\n    ++totalSeconds;\n    var timestamps;\n    var lyrics;\n    let hour = Math.floor(totalSeconds / 3600);\n    let minute = Math.floor((totalSeconds - hour * 3600) / 60);\n    let seconds = totalSeconds - (hour * 3600 + minute * 60);\n    var time = hour + \":\" + minute + \":\" + seconds;\n    let i = 0;\n\n\n    if (lavenderHazeButton.played.length == 1){\n        timestamps = Object.keys(_lyrics_lavenderhaze_json__WEBPACK_IMPORTED_MODULE_0__)\n        lyrics = Object.values(_lyrics_lavenderhaze_json__WEBPACK_IMPORTED_MODULE_0__)\n    } else if (foreverButton.played.length == 1){\n        timestamps = Object.keys(_lyrics_forever_json__WEBPACK_IMPORTED_MODULE_1__)\n        lyrics = Object.values(_lyrics_forever_json__WEBPACK_IMPORTED_MODULE_1__)\n    }\n\n\n    while (i < timestamps.length){\n        timeNow = timestamps[i]\n        timeNowList = timeNow.split('-')\n        timeStart = timeNowList[0]\n        timeEnd = timeNowList[1]\n        if (time == timeStart && lavenderHazeButton.played.length == 1){\n            text_lavenderHaze.style.visibility = 'visible';\n            textWrapper_ml13.innerHTML = lyrics[i].replace(/\\S/g, \"<span class='letter'>$&</span>\");\n            anime_slowUp();\n        } else if (time == timeStart && foreverButton.played.length == 1){\n            text_forever.style.visibility = 'visible';\n            textWrapper_ml14.innerHTML = lyrics[i]\n            anime_popUp();\n        }\n        i++;\n    }\n}\n\n\n\n\n\nfunction anime_popUp(){\n    var ml4 = {};\n    ml4.opacityIn = [0,1];\n    ml4.scaleIn = [0.2, 1];\n    ml4.scaleOut = 3;\n    ml4.durationIn = 800;\n    ml4.durationOut = 600;\n    ml4.delay = 500;\n\n    anime.timeline({loop: false})\n    .add({\n        targets: '.ml4 .letters-1',\n        opacity: ml4.opacityIn,\n        scale: ml4.scaleIn,\n        duration: ml4.durationIn\n    }).add({\n        targets: '.ml4 .letters-1',\n        opacity: 0,\n        scale: ml4.scaleOut,\n        duration: ml4.durationOut,\n        easing: \"easeInExpo\",\n        delay: ml4.delay\n    }).add({\n        targets: '.ml4',\n        opacity: 1,\n        duration: 500,\n        delay: 500\n    });\n}\n\n\nfunction anime_slowUp(){\n    anime.timeline({loop: false})\n    .add({\n      targets: '.ml13 .letter',\n      translateY: [100,0],\n      translateZ: 0,\n      opacity: [0,1],\n      easing: \"easeOutExpo\",\n      duration: 1400,\n      delay: (el, i) => 300 + 30 * i\n    }).add({\n      targets: '.ml13 .letter',\n      translateY: [0,-100],\n      opacity: [1,0],\n      easing: \"easeInExpo\",\n      duration: 1200,\n      delay: (el, i) => 100 + 30 * i\n    });\n}\n\n\n\n// 이벤트 리스너들\nlavenderHazeButton.addEventListener('play', function () {\n    textWrapper_ml13.innerHTML = textWrapper_ml13.textContent.replace(/\\S/g, \"<span class='letter'>$&</span>\");\n    text_lavenderHaze.style.visibility = 'visible';\n\n    setInterval(countUpTimer, 1000); // 1초에 한번씩 CountUpTimer 실행\n    anime_slowUp();\n\n});\n\n\nforeverButton.addEventListener('play', function () {\n    // textWrapper_ml14.innerHTML = lyrics[i]\n    text_forever.style.visibility = 'visible';\n    setInterval(countUpTimer, 1000); // 1초에 한번씩 CountUpTimer 실행\n    anime_popUp();\n})\n\nclearInterval();\n\n//# sourceURL=webpack://Vinyl/./src/js/textAnimate.js?");

/***/ }),

/***/ "./src/js/lyrics/forever.json":
/*!************************************!*\
  !*** ./src/js/lyrics/forever.json ***!
  \************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"0:0:2-0:0:3\":\"Reyez\",\"0:0:4-0:0:5\":\"Forever\",\"0:0:16-0:0:17\":\"Passwords\",\"0:0:18-0:0:19\":\"that means you love me,\",\"0:0:20-0:0:21\":\"I can give you what you ask for\",\"0:0:22-0:0:23\":\"Say you need a shooter,\",\"0:0:24-0:0:25\":\"I can do it from the half-court\",\"0:0:26-0:0:27\":\"I can change your life up,\",\"0:0:28-0:0:30\":\"painting murals on your passport\",\"0:0:31-0:0:33\":\"Future kids all on the dashboard\"}');\n\n//# sourceURL=webpack://Vinyl/./src/js/lyrics/forever.json?");

/***/ }),

/***/ "./src/js/lyrics/lavenderhaze.json":
/*!*****************************************!*\
  !*** ./src/js/lyrics/lavenderhaze.json ***!
  \*****************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"0:0:4-0:0:9\":\"Meet me at midnight\",\"0:0:10-0:0:14\":\"Oh, ooh, oh-oh, oh, ooh, oh-oh\",\"0:0:15-0:0:19\":\"Oh, ooh, oh-oh, whoa, whoa, whoa, whoa\",\"0:0:20-0:0:22\":\"Staring at the ceiling with you\",\"0:0:23-0:0:27\":\"Oh, you don\\'t ever say too much\",\"0:0:29-0:0:32\":\"And you don\\'t really read into\",\"0:0:33-0:0:39\":\"My melancholia\",\"0:0:40-0:0:42\":\"I\\'ve been under scrutiny\",\"0:0:43-0:0:45\":\"You handle it beautifully\",\"0:0:46-0:0:48\":\"All this shit is new to me\",\"0:0:50-0:0:51\":\"I feel,\",\"0:0:52-0:0:54\":\"the lavender haze creeping up on me\",\"0:0:55-0:0:56\":\"Surreal,\",\"0:0:57-0:0:59\":\"I\\'m damned if I do give a damn what people say\",\"0:1:0-0:1:1\":\"No deal,\",\"0:1:2-0:1:4\":\"the 1950s shit they want from me\",\"0:1:5-0:1:7\":\"I just wanna stay,\",\"0:1:8-0:1:10\":\"in that lavender haze\",\"0:1:11-0:1:22\":\"Oh, ooh, oh-oh, whoa, whoa, whoa, whoa, whoa\"}');\n\n//# sourceURL=webpack://Vinyl/./src/js/lyrics/lavenderhaze.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/textAnimate.js");
/******/ 	
/******/ })()
;