/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./script.jsm");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/form-loader.jsm":
/*!******************************!*\
  !*** ../src/form-loader.jsm ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _page = _interopRequireDefault(__webpack_require__(/*! ./page.jsm */ \"../src/page.jsm\"));\n\nvar _urlLoader = _interopRequireDefault(__webpack_require__(/*! ./url-loader.jsm */ \"../src/url-loader.jsm\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }\n\nvar FormLoader =\n/*#__PURE__*/\nfunction (_UrlLoader) {\n  function FormLoader(form) {\n    var _this;\n\n    _classCallCheck(this, FormLoader);\n\n    var url = form.target;\n    var method = (form.method || 'GET').toUpperCase();\n\n    if (method === 'GET') {\n      url += '?' + new URLSearchParams(new FormData(form));\n    }\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormLoader).call(this, url));\n    _this.method = method;\n    _this.form = form;\n    _this.cache = false;\n    return _this;\n  }\n\n  _createClass(FormLoader, [{\n    key: \"go\",\n    value: function go() {\n      this.form.submit();\n    }\n  }, {\n    key: \"fetch\",\n    value: function (_fetch) {\n      function fetch() {\n        return _fetch.apply(this, arguments);\n      }\n\n      fetch.toString = function () {\n        return _fetch.toString();\n      };\n\n      return fetch;\n    }(function () {\n      var options = {\n        method: this.method\n      };\n\n      if (this.method === 'POST') {\n        options.body = new FormData(this.form);\n      }\n\n      return fetch(this.url, options);\n    })\n  }]);\n\n  _inherits(FormLoader, _UrlLoader);\n\n  return FormLoader;\n}(_urlLoader.default);\n\nexports.default = FormLoader;\n\n//# sourceURL=webpack:///../src/form-loader.jsm?");

/***/ }),

/***/ "../src/navigator.jsm":
/*!****************************!*\
  !*** ../src/navigator.jsm ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _urlLoader = _interopRequireDefault(__webpack_require__(/*! ./url-loader.jsm */ \"../src/url-loader.jsm\"));\n\nvar _formLoader = _interopRequireDefault(__webpack_require__(/*! ./form-loader.jsm */ \"../src/form-loader.jsm\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Navigator =\n/*#__PURE__*/\nfunction () {\n  function Navigator(handler, errorHandler) {\n    _classCallCheck(this, Navigator);\n\n    this.loaders = {};\n    this.handler = handler;\n    this.errorHandler = errorHandler;\n    this.filters = [function (el, url) {\n      return url && url.indexOf(\"\".concat(document.location.protocol, \"//\").concat(document.location.host)) === 0;\n    }, function (el, url) {\n      return url !== document.location.href;\n    }];\n  }\n\n  _createClass(Navigator, [{\n    key: \"addFilter\",\n    value: function addFilter(callback) {\n      this.filters.push(callback);\n      return this;\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      delegate('click', 'a', function (event, link) {\n        if (_this.filters.every(function (filter) {\n          return filter(link, link.href);\n        })) {\n          _this.go(link.href, link);\n\n          event.preventDefault();\n        }\n      });\n      delegate('submit', 'form', function (event, form) {\n        var url = resolve(form.target);\n\n        if (_this.filters.every(function (filter) {\n          return filter(form, url);\n        })) {\n          _this.submit(form, form);\n\n          event.preventDefault();\n        }\n      });\n\n      window.onpopstate = function (event) {\n        return _this.go(document.location.href);\n      };\n\n      return this;\n    }\n  }, {\n    key: \"go\",\n    value: function go(url) {\n      url = resolve(url);\n\n      if (!this.loaders[url]) {\n        this.loaders[url] = new _urlLoader.default(url);\n      }\n\n      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        params[_key - 1] = arguments[_key];\n      }\n\n      return this.load.apply(this, [this.loaders[url]].concat(params));\n    }\n  }, {\n    key: \"submit\",\n    value: function submit(form) {\n      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {\n        params[_key2 - 1] = arguments[_key2];\n      }\n\n      return this.load.apply(this, [new _formLoader.default(form)].concat(params));\n    }\n  }, {\n    key: \"load\",\n    value: function load(loader) {\n      var _this2 = this;\n\n      for (var _len3 = arguments.length, params = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {\n        params[_key3 - 1] = arguments[_key3];\n      }\n\n      var promise = loader.load();\n\n      if (this.handler) {\n        return promise.then(function (page) {\n          return _this2.handler.apply(_this2, [page].concat(params));\n        }).catch(function (err) {\n          if (_this2.errorHandler) {\n            _this2.errorHandler(err);\n          }\n\n          console.error(err);\n\n          _this2.loaders[url].go();\n        });\n      }\n\n      return promise;\n    }\n  }]);\n\n  return Navigator;\n}();\n\nexports.default = Navigator;\nvar link = document.createElement('a');\n\nfunction resolve(url) {\n  link.setAttribute('href', url);\n  return link.href;\n}\n\nfunction delegate(event, selector, callback) {\n  document.addEventListener(event, function (event) {\n    for (var target = event.target; target && target != this; target = target.parentNode) {\n      if (target.matches(selector)) {\n        callback.call(target, event, target);\n        break;\n      }\n    }\n  }, true);\n}\n\n//# sourceURL=webpack:///../src/navigator.jsm?");

/***/ }),

/***/ "../src/page.jsm":
/*!***********************!*\
  !*** ../src/page.jsm ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Page =\n/*#__PURE__*/\nfunction () {\n  _createClass(Page, null, [{\n    key: \"createFromHtml\",\n    value: function createFromHtml(html, url) {\n      html = html.trim().replace(/^\\<!DOCTYPE html\\>/i, '');\n      var doc = document.implementation.createHTMLDocument();\n      doc.documentElement.innerHTML = html;\n      return new Page(url, doc);\n    }\n  }]);\n\n  function Page(url, dom) {\n    _classCallCheck(this, Page);\n\n    this.url = url;\n    this.dom = dom;\n  }\n\n  _createClass(Page, [{\n    key: \"querySelector\",\n    value: function querySelector(selector) {\n      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.dom;\n      var result = context.querySelector(selector);\n\n      if (!result) {\n        throw new Error(\"Not found the target \\\"\".concat(selector, \"\\\"\"));\n      }\n\n      return result;\n    }\n  }, {\n    key: \"querySelectorAll\",\n    value: function querySelectorAll(selector) {\n      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.dom;\n      var result = context.querySelectorAll(selector);\n\n      if (!result.length) {\n        throw new Error(\"Not found the target \\\"\".concat(selector, \"\\\"\"));\n      }\n\n      return result;\n    }\n  }, {\n    key: \"replaceContent\",\n    value: function replaceContent() {\n      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n      var content = this.querySelector(target);\n      this.querySelector(target, document).replaceWith(content);\n\n      if (typeof callback === 'function') {\n        callback(content);\n      }\n\n      return this;\n    }\n  }, {\n    key: \"appendContent\",\n    value: function appendContent() {\n      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n      var content = Array.from(this.querySelector(target).childNodes);\n      var fragment = document.createDocumentFragment();\n      content.forEach(function (item) {\n        return fragment.appendChild(item);\n      });\n      this.querySelector(target, document).append(fragment);\n\n      if (typeof callback === 'function') {\n        content.filter(function (item) {\n          return item.nodeType === Node.ELEMENT_NODE;\n        }).forEach(callback);\n      }\n\n      return this;\n    }\n  }, {\n    key: \"applyTitle\",\n    value: function applyTitle() {\n      document.title = this.title;\n      return this;\n    }\n  }, {\n    key: \"applyLocation\",\n    value: function applyLocation() {\n      var replace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n      if (this.url === document.location.href) {\n        return this;\n      }\n\n      if (replace) {\n        history.replaceState({}, null, this.url);\n      } else {\n        history.pushState({}, null, this.url);\n      }\n\n      return this;\n    }\n  }, {\n    key: \"title\",\n    get: function get() {\n      return this.dom.title;\n    }\n  }]);\n\n  return Page;\n}();\n\nexports.default = Page;\n\n//# sourceURL=webpack:///../src/page.jsm?");

/***/ }),

/***/ "../src/url-loader.jsm":
/*!*****************************!*\
  !*** ../src/url-loader.jsm ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _page = _interopRequireDefault(__webpack_require__(/*! ./page.jsm */ \"../src/page.jsm\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar UrlLoader =\n/*#__PURE__*/\nfunction () {\n  function UrlLoader(url) {\n    _classCallCheck(this, UrlLoader);\n\n    this.url = url;\n    this.html = '';\n    this.cache = true;\n  }\n\n  _createClass(UrlLoader, [{\n    key: \"fetch\",\n    value: function (_fetch) {\n      function fetch() {\n        return _fetch.apply(this, arguments);\n      }\n\n      fetch.toString = function () {\n        return _fetch.toString();\n      };\n\n      return fetch;\n    }(function () {\n      return fetch(this.url);\n    })\n  }, {\n    key: \"go\",\n    value: function go() {\n      document.location = this.url;\n    }\n  }, {\n    key: \"load\",\n    value: function load() {\n      var _this = this;\n\n      if (this.cache && this.html) {\n        return new Promise(function (accept) {\n          return accept(_page.default.createFromHtml(_this.html, _this.url));\n        });\n      }\n\n      return this.fetch().then(function (res) {\n        if (res.status < 200 || res.status >= 400) {\n          throw new Error(\"The request status code is \".concat(res.status));\n        }\n\n        return res;\n      }).then(function (res) {\n        return res.text();\n      }).then(function (html) {\n        _this.html = _this.cache ? html : '';\n        return _page.default.createFromHtml(html, _this.url);\n      });\n    }\n  }]);\n\n  return UrlLoader;\n}();\n\nexports.default = UrlLoader;\n\n//# sourceURL=webpack:///../src/url-loader.jsm?");

/***/ }),

/***/ "./script.jsm":
/*!********************!*\
  !*** ./script.jsm ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _navigator = _interopRequireDefault(__webpack_require__(/*! ../src/navigator.jsm */ \"../src/navigator.jsm\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar navigator = new _navigator.default(function (page) {\n  page.replaceContent('.content').applyTitle().applyLocation();\n  console.log(\"Page changed to \\\"\".concat(page.url, \"\\\"\"));\n});\nnavigator.init();\n\n//# sourceURL=webpack:///./script.jsm?");

/***/ })

/******/ });