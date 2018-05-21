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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _urlLoader = _interopRequireDefault(__webpack_require__(/*! ./url-loader.jsm */ \"../src/url-loader.jsm\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }\n\n/**\n * Class to submit a form and generate a page with the result\n */\nvar FormLoader =\n/*#__PURE__*/\nfunction (_UrlLoader) {\n  function FormLoader(form) {\n    var _this;\n\n    _classCallCheck(this, FormLoader);\n\n    var url = form.target;\n    var method = (form.method || 'GET').toUpperCase();\n\n    if (method === 'GET') {\n      url += '?' + new URLSearchParams(new FormData(form));\n    }\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormLoader).call(this, url));\n    _this.method = method;\n    _this.form = form;\n    return _this;\n  }\n  /**\n   * Submit natively the form. Used as fallback\n   */\n\n\n  _createClass(FormLoader, [{\n    key: \"go\",\n    value: function go() {\n      this.form.submit();\n    }\n    /**\n     * Performs a fetch with the form data and return a promise\n     *\n     * @return {Promise}\n     */\n\n  }, {\n    key: \"fetch\",\n    value: function (_fetch) {\n      function fetch() {\n        return _fetch.apply(this, arguments);\n      }\n\n      fetch.toString = function () {\n        return _fetch.toString();\n      };\n\n      return fetch;\n    }(function () {\n      var options = {\n        method: this.method\n      };\n\n      if (this.method === 'POST') {\n        options.body = new FormData(this.form);\n      }\n\n      return fetch(this.url, options);\n    })\n  }]);\n\n  _inherits(FormLoader, _UrlLoader);\n\n  return FormLoader;\n}(_urlLoader.default);\n\nexports.default = FormLoader;\n\n//# sourceURL=webpack:///../src/form-loader.jsm?");

/***/ }),

/***/ "../src/navigator.jsm":
/*!****************************!*\
  !*** ../src/navigator.jsm ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _urlLoader = _interopRequireDefault(__webpack_require__(/*! ./url-loader.jsm */ \"../src/url-loader.jsm\"));\n\nvar _formLoader = _interopRequireDefault(__webpack_require__(/*! ./form-loader.jsm */ \"../src/form-loader.jsm\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * Class to handle the navigation history\n */\nvar Navigator =\n/*#__PURE__*/\nfunction () {\n  function Navigator(handler, errorHandler) {\n    _classCallCheck(this, Navigator);\n\n    this.loaders = [];\n    this.currentLoader = null;\n    this.previousLoader = null;\n    this.handler = handler;\n    this.errorHandler = errorHandler;\n    this.filters = [function (el, url) {\n      return url && url.indexOf(\"\".concat(document.location.protocol, \"//\").concat(document.location.host)) === 0;\n    }, function (el, url) {\n      return url !== document.location.href;\n    }, function (el) {\n      return !el.target;\n    }];\n  }\n  /**\n   * Add a filter to discard some urls and forms.\n   * It must be a function accepting two arguments: the element clicked and url\n   *\n   * @param {Function} filter\n   *\n   * @return {this}\n   */\n\n\n  _createClass(Navigator, [{\n    key: \"addFilter\",\n    value: function addFilter(filter) {\n      this.filters.push(filter);\n      return this;\n    }\n    /**\n     * Init the navigator, attach the events to capture the history changes\n     *\n     * @return {this}\n     */\n\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      delegate('click', 'a', function (event, link) {\n        if (_this.filters.every(function (filter) {\n          return filter(link, link.href);\n        })) {\n          _this.go(link.href, Object.assign({\n            event: event.type\n          }, link.dataset));\n\n          event.preventDefault();\n        }\n      });\n      delegate('submit', 'form', function (event, form) {\n        var url = resolve(form.action);\n\n        if (_this.filters.every(function (filter) {\n          return filter(form, url);\n        })) {\n          _this.submit(form, Object.assign({\n            event: event.type\n          }, form.dataset));\n\n          event.preventDefault();\n        }\n      });\n\n      window.onpopstate = function (event) {\n        return _this.go(document.location.href, Object.assign(event.state || {}, {\n          event: event.type\n        }));\n      };\n\n      this.currentLoader = new _urlLoader.default(document.location.href);\n      this.loaders.push(this.currentLoader);\n      return this;\n    }\n    /**\n     * Go to other url. If the url is the previous visited, performs a history.back()\n     *\n     * @param  {string} url\n     * @param  {Object} state\n     *\n     * @return {Promise|void}\n     */\n\n  }, {\n    key: \"go\",\n    value: function go(url) {\n      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      url = resolve(url);\n      var loader = this.loaders.find(function (loader) {\n        return loader.url === url;\n      });\n\n      if (loader) {\n        if (this.previousLoader === loader && state.event === 'click') {\n          return history.back();\n        }\n      } else {\n        loader = new _urlLoader.default(url);\n        this.loaders.push(loader);\n      }\n\n      return this.load(loader, state);\n    }\n    /**\n     * Submit a form via ajax\n     *\n     * @param  {HTMLFormElement} form\n     * @param  {Object} state\n     *\n     * @return {Promise}\n     */\n\n  }, {\n    key: \"submit\",\n    value: function submit(form) {\n      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      return this.load(new _formLoader.default(form), state);\n    }\n    /**\n     * Execute a page loader\n     *\n     * @param  {UrlLoader|FormLoader} loader\n     * @param  {Object} state\n     *\n     * @return {Promise}\n     */\n\n  }, {\n    key: \"load\",\n    value: function load(loader) {\n      var _this2 = this;\n\n      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      state.direction = 'forward';\n      var indexCurrent = this.loaders.indexOf(this.currentLoader);\n      var indexNext = this.loaders.indexOf(loader);\n\n      if (indexCurrent > indexNext) {\n        state.direction = 'backward';\n      }\n\n      this.previousLoader = this.currentLoader;\n      this.currentLoader = loader;\n      var promise = loader.load(state);\n\n      if (this.handler) {\n        return promise.then(function (page) {\n          return _this2.handler(page);\n        }).catch(function (err) {\n          if (_this2.errorHandler) {\n            _this2.errorHandler(err);\n          } else {\n            console.error(err);\n          }\n\n          loader.go();\n        });\n      }\n\n      return promise;\n    }\n  }]);\n\n  return Navigator;\n}();\n\nexports.default = Navigator;\nvar link = document.createElement('a');\n\nfunction resolve(url) {\n  link.setAttribute('href', url);\n  return link.href;\n}\n\nfunction delegate(event, selector, callback) {\n  document.addEventListener(event, function (event) {\n    for (var target = event.target; target && target != this; target = target.parentNode) {\n      if (target.matches(selector)) {\n        callback.call(target, event, target);\n        break;\n      }\n    }\n  }, true);\n}\n\n//# sourceURL=webpack:///../src/navigator.jsm?");

/***/ }),

/***/ "../src/page.jsm":
/*!***********************!*\
  !*** ../src/page.jsm ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * Class to handle a loaded page\n */\nvar Page =\n/*#__PURE__*/\nfunction () {\n  function Page(url, dom, state) {\n    _classCallCheck(this, Page);\n\n    this.url = url;\n    this.dom = dom;\n    this.state = state || {};\n  }\n\n  _createClass(Page, [{\n    key: \"querySelector\",\n\n    /**\n     * Performs a querySelector in the page content or document\n     *\n     * @param  {string} selector\n     * @param  {DocumentElement} context\n     *\n     * @return {Node}\n     */\n    value: function querySelector(selector) {\n      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.dom;\n      var result = context.querySelector(selector);\n\n      if (!result) {\n        throw new Error(\"Not found the target \\\"\".concat(selector, \"\\\"\"));\n      }\n\n      return result;\n    }\n    /**\n     * Performs a querySelector\n     *\n     * @param  {string} selector\n     * @param  {DocumentElement} context\n     *\n     * @return {Nodelist}\n     */\n\n  }, {\n    key: \"querySelectorAll\",\n    value: function querySelectorAll(selector) {\n      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.dom;\n      var result = context.querySelectorAll(selector);\n\n      if (!result.length) {\n        throw new Error(\"Not found the target \\\"\".concat(selector, \"\\\"\"));\n      }\n\n      return result;\n    }\n    /**\n     * Replace an element in the document by an element in the page\n     * Optionally, it can execute a callback to the new inserted element\n     *\n     * @param  {String} selector\n     * @param  {Function|undefined} callback\n     *\n     * @return {this}\n     */\n\n  }, {\n    key: \"replaceContent\",\n    value: function replaceContent() {\n      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n      var content = this.querySelector(selector);\n      this.querySelector(selector, document).replaceWith(content);\n\n      if (typeof callback === 'function') {\n        callback(content);\n      }\n\n      return this;\n    }\n    /**\n     * Appends the content of an element in the page in other element in the document\n     * Optionally, it can execute a callback for each new inserted elements\n     *\n     * @param  {String} selector\n     * @param  {Function|undefined} callback\n     *\n     * @return {this}\n     */\n\n  }, {\n    key: \"appendContent\",\n    value: function appendContent() {\n      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n      var content = Array.from(this.querySelector(target).childNodes);\n      var fragment = document.createDocumentFragment();\n      content.forEach(function (item) {\n        return fragment.appendChild(item);\n      });\n      this.querySelector(target, document).append(fragment);\n\n      if (typeof callback === 'function') {\n        content.filter(function (item) {\n          return item.nodeType === Node.ELEMENT_NODE;\n        }).forEach(callback);\n      }\n\n      return this;\n    }\n    /**\n     * Change the title of the document with the title of the page\n     *\n     * @return {this}\n     */\n\n  }, {\n    key: \"changeTitle\",\n    value: function changeTitle() {\n      document.title = this.title;\n      return this;\n    }\n    /**\n     * Change the location of the document with the url of the page\n     * Use the first argument to replace the state instead push\n     *\n     * @param  {Boolean} replace\n     *\n     * @return {this}\n     */\n\n  }, {\n    key: \"changeLocation\",\n    value: function changeLocation() {\n      var replace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n      if (this.url === document.location.href) {\n        return this;\n      }\n\n      if (replace) {\n        history.replaceState(this.state, null, this.url);\n      } else {\n        history.pushState(this.state, null, this.url);\n      }\n\n      return this;\n    }\n    /**\n     * Change the css of the current page\n     *\n     * @param {string} context\n     *\n     * @return {this}\n     */\n\n  }, {\n    key: \"changeStyles\",\n    value: function changeStyles() {\n      var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'head';\n      var documentContext = this.querySelector(context, document);\n      var pageContext = this.querySelector(context);\n      var oldLinks = Array.from(documentContext.querySelectorAll('link[rel=\"stylesheet\"]'));\n      var newLinks = Array.from(pageContext.querySelectorAll('link[rel=\"stylesheet\"]'));\n      oldLinks.forEach(function (link) {\n        var exists = newLinks.find(function (newLink) {\n          return newLink.href === link.href;\n        });\n\n        if (!exists) {\n          link.remove();\n        }\n      });\n      newLinks.forEach(function (link) {\n        var exists = oldLinks.find(function (oldLink) {\n          return oldLink.href === link.href;\n        });\n\n        if (!exists) {\n          documentContext.append(link);\n        }\n      });\n      return this;\n    }\n    /**\n     * Change the scripts of the current page\n     *\n     * @param {string} context\n     *\n     * @return {this}\n     */\n\n  }, {\n    key: \"changeScripts\",\n    value: function changeScripts() {\n      var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'head';\n      var documentContext = this.querySelector(context, document);\n      var pageContext = this.querySelector(context);\n      var oldScripts = Array.from(documentContext.querySelectorAll('script[src]'));\n      var newScripts = Array.from(pageContext.querySelectorAll('script[src]'));\n      oldScripts.forEach(function (script) {\n        var exists = newScripts.find(function (newScript) {\n          return newScript.src === script.src;\n        });\n\n        if (!exists) {\n          script.remove();\n        }\n      });\n      newScripts.forEach(function (script) {\n        var exists = oldScripts.find(function (oldScript) {\n          return oldScript.src === script.src;\n        });\n\n        if (!exists) {\n          var newScript = document.createElement('script');\n          newScript.src = script.src;\n          newScript.defer = script.defer;\n          newScript.async = script.async;\n          documentContext.append(newScript);\n        }\n      });\n      return this;\n    }\n  }, {\n    key: \"title\",\n    get: function get() {\n      return this.dom.title;\n    }\n  }]);\n\n  return Page;\n}();\n\nexports.default = Page;\n\n//# sourceURL=webpack:///../src/page.jsm?");

/***/ }),

/***/ "../src/url-loader.jsm":
/*!*****************************!*\
  !*** ../src/url-loader.jsm ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _page = _interopRequireDefault(__webpack_require__(/*! ./page.jsm */ \"../src/page.jsm\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * Class to load an url and generate a page with the result\n */\nvar UrlLoader =\n/*#__PURE__*/\nfunction () {\n  function UrlLoader(url) {\n    _classCallCheck(this, UrlLoader);\n\n    this.url = url;\n  }\n  /**\n   * Performs a fetch to the url and return a promise\n   *\n   * @return {Promise}\n   */\n\n\n  _createClass(UrlLoader, [{\n    key: \"fetch\",\n    value: function (_fetch) {\n      function fetch() {\n        return _fetch.apply(this, arguments);\n      }\n\n      fetch.toString = function () {\n        return _fetch.toString();\n      };\n\n      return fetch;\n    }(function () {\n      return fetch(this.url);\n    })\n    /**\n     * Go natively to the url. Used as fallback\n     */\n\n  }, {\n    key: \"go\",\n    value: function go() {\n      document.location = this.url;\n    }\n    /**\n     * Load the page with the content of the page\n     *\n     * @param  {Object} state\n     *\n     * @return {Promise}\n     */\n\n  }, {\n    key: \"load\",\n    value: function load() {\n      var _this = this;\n\n      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n      if (state.cache) {\n        return new Promise(function (accept) {\n          return accept(new _page.default(_this.url, parseHtml(state.cache), state));\n        });\n      }\n\n      return this.fetch().then(function (res) {\n        if (res.status < 200 || res.status >= 400) {\n          throw new Error(\"The request status code is \".concat(res.status));\n        }\n\n        return res;\n      }).then(function (res) {\n        return res.text();\n      }).then(function (html) {\n        state.cache = html;\n        return new _page.default(_this.url, parseHtml(html), state);\n      });\n    }\n  }]);\n\n  return UrlLoader;\n}();\n\nexports.default = UrlLoader;\n\nfunction parseHtml(html) {\n  html = html.trim().replace(/^\\<!DOCTYPE html\\>/i, '');\n  var doc = document.implementation.createHTMLDocument();\n  doc.documentElement.innerHTML = html;\n  return doc;\n}\n\n//# sourceURL=webpack:///../src/url-loader.jsm?");

/***/ }),

/***/ "./script.jsm":
/*!********************!*\
  !*** ./script.jsm ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _navigator = _interopRequireDefault(__webpack_require__(/*! ../src/navigator.jsm */ \"../src/navigator.jsm\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar navigator = new _navigator.default(function (page) {\n  page.replaceContent('.content').changeTitle().changeStyles().changeScripts().changeLocation();\n  console.log(\"Page changed to \\\"\".concat(page.url, \"\\\"\"));\n});\nnavigator.init();\n\n//# sourceURL=webpack:///./script.jsm?");

/***/ })

/******/ });