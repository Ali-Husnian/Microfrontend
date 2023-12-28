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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libs_toast_toastr_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/toast/toastr.scss */ \"./src/libs/toast/toastr.scss\");\n/* harmony import */ var _libs_toast_toastr_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_toast_toastr_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst footerCol1Items = [\"Home\", \"About\", \"Contact us\", \"FAQ\", \"Blog\"];\nconst footerCol2Items = [\"Flutter\", \"Javascript\", \"Java\", \"Nodejs\", \"Python\"];\nconst footerCol3Items = [\"Home\", \"Feature\", \"Pricing\", \"FAQ\", \"About\"];\n\n//Animating the text\n\nvar options = {\n  strings: [\"<i>Top Educational Courses</i>\"],\n  typeSpeed: 40,\n  showCursor: false,\n};\n\nvar typed = new Typed(\".typed\", options);\n\n//Validate the email id\n\n$(\"#subscribeBtn\").on(\"click\", (e) => {\n  e.preventDefault();\n  const emailId = $(\"#newsletter1\")[0].value;\n  const isInvalid = validate.single(emailId, { presence: true, email: true });\n  if (isInvalid === undefined) {\n    console.log();\n    toastr.success(\"You have been subscribed !\");\n  } else {\n    toastr.error(\"Invalid email address is entered!\");\n  }\n});\n\n// Build footer items\nfunction buildFooterItems(footerCol, itemsArr) {\n  let listItems = \"\";\n  _.forEach(itemsArr, (item) => {\n    let menuItem =\n      '<li class=\"nav-item mb-2\"><a href=\"#\" class=\"nav-link p-0 text-muted\">' +\n      item +\n      \"</a></li>\";\n    listItems += menuItem;\n  });\n  footerCol.innerHTML = listItems;\n}\n\nconst footerCol1 = $(\"#footer-column-1\")[0];\nconst footerCol2 = $(\"#footer-column-2\")[0];\nconst footerCol3 = $(\"#footer-column-3\")[0];\n\nbuildFooterItems(footerCol1, footerCol1Items);\nbuildFooterItems(footerCol2, footerCol2Items);\nbuildFooterItems(footerCol3, footerCol3Items);\n\n\n//# sourceURL=webpack://8_course_project_base/./src/index.js?");

/***/ }),

/***/ "./src/libs/toast/toastr.scss":
/*!************************************!*\
  !*** ./src/libs/toast/toastr.scss ***!
  \************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .toast-title {\\n|   font-weight: bold;\\n| }\");\n\n//# sourceURL=webpack://8_course_project_base/./src/libs/toast/toastr.scss?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;