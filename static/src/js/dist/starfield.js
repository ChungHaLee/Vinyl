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

/***/ "./src/js/starfield.js":
/*!*****************************!*\
  !*** ./src/js/starfield.js ***!
  \*****************************/
/***/ (() => {

eval("const canvas = document.getElementById('c1');\nconst c = canvas.getContext('2d');\ncanvas.width = window.innerWidth; //screen width\ncanvas.height = window.innerHeight; //screem height\n\n//on mouse scroll changes speed and color\nwindow.addEventListener('wheel', (event) => {\n  c.strokeStyle = 'rgb('+Math.random()*255+', '+Math.random()*255+', '+Math.random()*255+')';\n  if (event.deltaY < 0) speed *= 1.1;\n  else speed *= 0.9;\n  if (speed < 0.01) speed = 0.01;\n  else if (speed > 0.1) speed = 0.1;\n});\n\nclass Star {\n  constructor() {\n    //initializing\n    this.x = Math.random()*canvas.width-canvas.width/2;  //random x\n    this.y = Math.random()*canvas.height-canvas.height/2; //random y\n    this.px, this.py;\n    this.z = Math.random()*4; //random z    \n  }\n  \n  update() {\n    //stores previous x, y and z and generates new coordinates    \n    this.px = this.x;\n    this.py = this.y;\n    this.z += speed;\n    this.x += this.x*(speed*0.2)*this.z;\n    this.y += this.y*(speed*0.2)*this.z;\n    if (this.x > canvas.width/2+50 || this.x < -canvas.width/2-50 ||\n        this.y > canvas.height/2+50 || this.y < -canvas.height/2-50) {\n      this.x = Math.random()*canvas.width-canvas.width/2;\n      this.y = Math.random()*canvas.height-canvas.height/2;\n      this.px = this.x;\n      this.py = this.y;\n      this.z = 0;\n    }\n  }\n  \n  //draws line from x,y to px,py\n  show() {    \n    c.lineWidth = this.z;\n    c.beginPath();\n    c.moveTo(this.x, this.y);\n    c.lineTo(this.px, this.py);\n    c.stroke();\n  }\n}\n\nlet speed = 0.04;\nlet stars = [];\n\n//create 1500 stars (objects)\nfor (let i = 0; i < 1500; i++) stars.push(new Star());\n\nc.fillStyle = 'rgba(0, 0, 0, 0.1)';\nc.strokeStyle = 'rgb('+Math.random()*255+', '+Math.random()*255+', '+Math.random()*255+')';\n\nc.translate(canvas.width/2, canvas.height/2);\n\nfunction draw() {\n  //create rectangle\n  c.fillRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);\n  for (let s of stars) {\n    s.update();\n    s.show();\n  }\n  //infinte call to draw\n  requestAnimationFrame(draw);\n}\n\ndraw();\n\n//# sourceURL=webpack://Vinyl/./src/js/starfield.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/starfield.js"]();
/******/ 	
/******/ })()
;