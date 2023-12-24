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

/***/ "./function/add.js":
/*!*************************!*\
  !*** ./function/add.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\r\nfunction add(a, b) {\r\n  return a + b;\r\n}\r\nmodule.exports = add;\r\n*/\r\n////////// Es6 Method //////////\r\nfunction add(a, b) {\r\n  return a + b;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (add);\r\n\n\n//# sourceURL=webpack://02_modules/./function/add.js?");

/***/ }),

/***/ "./function/index.js":
/*!***************************!*\
  !*** ./function/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   add: () => (/* reexport safe */ _add__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   substract: () => (/* reexport safe */ _subtrect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ \"./function/add.js\");\n/* harmony import */ var _subtrect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subtrect */ \"./function/subtrect.js\");\n/*\r\nconst add = require(\"./add\");\r\nconst substract = require(\"./subtrect\");\r\n\r\nmodule.exports = { add, substract };\r\n*/\r\n\r\n///////////es6 MEthod////////////\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://02_modules/./function/index.js?");

/***/ }),

/***/ "./function/subtrect.js":
/*!******************************!*\
  !*** ./function/subtrect.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\r\nfunction subtrect(a, b) {\r\n  return a - b;\r\n}\r\nmodule.exports = subtrect;\r\n*/\r\n////////// Es6 Method /////////\r\nfunction subtrect(a, b) {\r\n  return a - b;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subtrect);\r\n\n\n//# sourceURL=webpack://02_modules/./function/subtrect.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ \"./function/index.js\");\n/*\r\nconst { add, substract } = require(\"./function/index.js\");\r\n\r\nconst output1 = add(2, 3);\r\nconst output2 = substract(2, 3);\r\n\r\nconsole.log(output1, output2);\r\n*/\r\n\r\n////////// ***************Es6 Method*********** /////////\r\n\r\n/*\r\nimport { add, substract } from \"./function\";\r\n\r\nconst output1 = add(2, 3);\r\nconst output2 = substract(2, 3);\r\n\r\nconsole.log(output1, output2);\r\n*/\r\n\r\n////////// ***************alias method*********** /////////\r\n\r\n\r\n\r\nconst output1 = _function__WEBPACK_IMPORTED_MODULE_0__.add(2, 3);\r\nconst output2 = _function__WEBPACK_IMPORTED_MODULE_0__.substract(2, 3);\r\n\r\nconsole.log(output1, output2);\r\n\n\n//# sourceURL=webpack://02_modules/./main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;