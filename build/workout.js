/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// Lorem ipsum

	var workout = {};

	workout.VERSION = __webpack_require__(1);

	workout.doSomethingCool = __webpack_require__(2);

	__webpack_require__(3);

	workout.template = __webpack_require__(7);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
		"major": 0,
		"minor": 1,
		"patch": 0
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function somethingCool () {
		console.log("Yup. Whatever. 🙃");
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	module.exports = "<p>\n\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus in deleniti ipsa temporibus, vero aperiam culpa voluptate dignissimos quas blanditiis inventore laboriosam, omnis deserunt ex perspiciatis rerum, provident modi impedit.\n</p>\n";

/***/ }
/******/ ]);