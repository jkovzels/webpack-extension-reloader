/// <reference path="../typings/webpack-extension-reloader.d.ts" />
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("webpack"), require("useragent"), require("ws"), require("webpack-sources"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "webpack", "useragent", "ws", "webpack-sources"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("lodash"), require("webpack"), require("useragent"), require("ws"), require("webpack-sources")) : factory(root["lodash"], root["webpack"], root["useragent"], root["ws"], root["webpack-sources"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function(__WEBPACK_EXTERNAL_MODULE__3804__, __WEBPACK_EXTERNAL_MODULE__4078__, __WEBPACK_EXTERNAL_MODULE__2549__, __WEBPACK_EXTERNAL_MODULE__2439__, __WEBPACK_EXTERNAL_MODULE__3745__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 6048:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var lodash_1 = __webpack_require__(3804);

var webpack_1 = __webpack_require__(4078);

var hot_reload_1 = __webpack_require__(3009);

var warnings_1 = __webpack_require__(2436);

var middleware_1 = __webpack_require__(6392);

var default_options_1 = __webpack_require__(6961);

var logger_1 = __webpack_require__(6373);

var manifest_1 = __webpack_require__(6005);

var AbstractExtensionReloader_1 = __webpack_require__(4257);

var CompilerEventsFacade_1 = __webpack_require__(8675);

var ExtensionReloaderImpl = /*#__PURE__*/function (_AbstractExtensionRel) {
  _inherits(ExtensionReloaderImpl, _AbstractExtensionRel);

  var _super = _createSuper(ExtensionReloaderImpl);

  function ExtensionReloaderImpl(options) {
    var _this;

    _classCallCheck(this, ExtensionReloaderImpl);

    _this = _super.call(this);
    _this._opts = options;
    _this._chunkVersions = {};
    return _this;
  }

  _createClass(ExtensionReloaderImpl, [{
    key: "_isWebpackGToEV4",
    value: function _isWebpackGToEV4() {
      if (webpack_1.version) {
        var _webpack_1$version$sp = webpack_1.version.split("."),
            _webpack_1$version$sp2 = _slicedToArray(_webpack_1$version$sp, 1),
            major = _webpack_1$version$sp2[0];

        if (parseInt(major, 10) >= 4) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "_whatChanged",
    value: function _whatChanged(chunks, _ref) {
      var _this2 = this;

      var background = _ref.background,
          contentScript = _ref.contentScript,
          extensionPage = _ref.extensionPage;
      var changedChunks = chunks.filter(function (_ref2) {
        var name = _ref2.name,
            hash = _ref2.hash;
        var oldVersion = _this2._chunkVersions[name];
        _this2._chunkVersions[name] = hash;
        return hash !== oldVersion;
      });
      var contentOrBgChanged = changedChunks.some(function (_ref3) {
        var name = _ref3.name;
        var contentChanged = false;
        var bgChanged = name === background;

        if (Array.isArray(contentScript)) {
          contentChanged = contentScript.some(function (script) {
            return script === name;
          });
        } else {
          contentChanged = name === contentScript;
        }

        return contentChanged || bgChanged;
      });
      var onlyPageChanged = !contentOrBgChanged && changedChunks.some(function (_ref4) {
        var name = _ref4.name;
        var pageChanged = false;

        if (Array.isArray(extensionPage)) {
          pageChanged = extensionPage.some(function (script) {
            return script === name;
          });
        } else {
          pageChanged = name === extensionPage;
        }

        return pageChanged;
      });
      return {
        contentOrBgChanged: contentOrBgChanged,
        onlyPageChanged: onlyPageChanged
      };
    }
  }, {
    key: "_registerPlugin",
    value: function _registerPlugin(compiler) {
      var _this3 = this;

      var _lodash_1$merge = lodash_1.merge(default_options_1["default"], this._opts),
          reloadPage = _lodash_1$merge.reloadPage,
          port = _lodash_1$merge.port,
          entries = _lodash_1$merge.entries,
          manifest = _lodash_1$merge.manifest;

      var parsedEntries = manifest ? manifest_1.extractEntries(compiler.options.entry, compiler.options.output.filename, manifest) : entries;
      this._eventAPI = new CompilerEventsFacade_1["default"](compiler);
      this._injector = middleware_1.middlewareInjector(parsedEntries, {
        port: port,
        reloadPage: reloadPage
      });
      this._triggerer = hot_reload_1.changesTriggerer(port, reloadPage);

      this._eventAPI.afterOptimizeChunkAssets(function (comp, chunks) {
        comp.assets = Object.assign(Object.assign({}, comp.assets), _this3._injector(comp.assets, chunks));
      });

      this._eventAPI.afterEmit(function (comp, done) {
        var _this3$_whatChanged = _this3._whatChanged(comp.chunks, parsedEntries),
            contentOrBgChanged = _this3$_whatChanged.contentOrBgChanged,
            onlyPageChanged = _this3$_whatChanged.onlyPageChanged;

        if (contentOrBgChanged || onlyPageChanged) {
          _this3._triggerer(onlyPageChanged).then(done)["catch"](done);
        }
      });
    }
  }, {
    key: "apply",
    value: function apply(compiler) {
      if ((this._isWebpackGToEV4() ? compiler.options.mode : process.env.NODE_ENV) === "development") {
        this._registerPlugin(compiler);
      } else {
        logger_1.warn(warnings_1.onlyOnDevelopmentMsg.get());
      }
    }
  }]);

  return ExtensionReloaderImpl;
}(AbstractExtensionReloader_1["default"]);

exports.default = ExtensionReloaderImpl;

/***/ }),

/***/ 9871:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NEW_FAST_RELOAD_CALLS = exports.NEW_FAST_RELOAD_DEBOUNCING_FRAME = exports.NEW_FAST_RELOAD_CHROME_VERSION = exports.FAST_RELOAD_WAIT = exports.FAST_RELOAD_CALLS = exports.FAST_RELOAD_DEBOUNCING_FRAME = void 0;
/**
 * Chrome lets only a max number of calls in a time frame
 * before block the plugin for be reloading itself to much
 * @see https://github.com/rubenspgcavalcante/webpack-chrome-extension-reloader/issues/2
 */

exports.FAST_RELOAD_DEBOUNCING_FRAME = 2000;
exports.FAST_RELOAD_CALLS = 6;
exports.FAST_RELOAD_WAIT = 10 * 1000; // ================================================================================================================= //

/**
 * A new reloading rate was created after opening a bug ticket on
 * Chromium, and the revision was merged to master
 * @see https://chromium-review.googlesource.com/c/chromium/src/+/1340272
 */

/**
 * The Chrome/Chromium version number that includes the new rates
 * @see https://storage.googleapis.com/chromium-find-releases-static/d3b.html#d3b25e1380984b2f1f23d0e8dc1a337743c6caaf
 */

exports.NEW_FAST_RELOAD_CHROME_VERSION = [73, 0, 3637];
exports.NEW_FAST_RELOAD_DEBOUNCING_FRAME = 1000;
exports.NEW_FAST_RELOAD_CALLS = 30;

/***/ }),

/***/ 1918:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DEBUG = exports.ERROR = exports.WARN = exports.INFO = exports.LOG = exports.NONE = void 0;
exports.NONE = 0;
exports.LOG = 1;
exports.INFO = 2;
exports.WARN = 3;
exports.ERROR = 4;
exports.DEBUG = 5;

/***/ }),

/***/ 5934:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SOCKET_ERR_CODE_REF = exports.RECONNECT_INTERVAL = void 0;
exports.RECONNECT_INTERVAL = 2000;
exports.SOCKET_ERR_CODE_REF = "https://tools.ietf.org/html/rfc6455#section-7.4.1";

/***/ }),

/***/ 8804:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DEFAULT_EXTENSION_PAGE_ENTRY = exports.DEFAULT_BACKGROUND_ENTRY = exports.DEFAULT_CONTENT_SCRIPT_ENTRY = exports.DEFAULT_RELOAD_PAGE = exports.DEFAULT_CONFIG = exports.DEFAULT_PORT = void 0;
exports.DEFAULT_PORT = 9090;
exports.DEFAULT_CONFIG = "webpack.config.js";
exports.DEFAULT_RELOAD_PAGE = true;
exports.DEFAULT_CONTENT_SCRIPT_ENTRY = "content-script";
exports.DEFAULT_BACKGROUND_ENTRY = "background";
exports.DEFAULT_EXTENSION_PAGE_ENTRY = "popup";

/***/ }),

/***/ 6578:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.REF_URL = void 0;
exports.REF_URL = "https://github.com/rubenspgcavalcante/webpack-extension-reloader/wiki/General-Information";

/***/ }),

/***/ 1692:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var useragent_1 = __webpack_require__(2549);

var ws_1 = __webpack_require__(2439);

var logger_1 = __webpack_require__(6373);

var SignEmitter_1 = __webpack_require__(7574);

var HotReloaderServer = /*#__PURE__*/function () {
  function HotReloaderServer(port) {
    _classCallCheck(this, HotReloaderServer);

    this._server = new ws_1.Server({
      port: port
    });
  }

  _createClass(HotReloaderServer, [{
    key: "listen",
    value: function listen() {
      var _this = this;

      this._server.on("connection", function (ws, msg) {
        var userAgent = useragent_1.parse(msg.headers["user-agent"]);
        _this._signEmitter = new SignEmitter_1["default"](_this._server, userAgent);
        ws.on("message", function (data) {
          return logger_1.info("Message from ".concat(userAgent.family, ": ").concat(JSON.parse(data).payload));
        });
        ws.on("error", function () {// NOOP - swallow socket errors due to http://git.io/vbhSN
        });
      });
    }
  }, {
    key: "signChange",
    value: function signChange(reloadPage, onlyPageChanged) {
      if (this._signEmitter) {
        return this._signEmitter.safeSignChange(reloadPage, onlyPageChanged);
      } else {
        return Promise.resolve(null);
      }
    }
  }]);

  return HotReloaderServer;
}();

exports.default = HotReloaderServer;

/***/ }),

/***/ 7574:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var lodash_1 = __webpack_require__(3804);

var ws_1 = __webpack_require__(2439);

var fast_reloading_constants_1 = __webpack_require__(9871);

var block_protection_1 = __webpack_require__(9832);

var signals_1 = __webpack_require__(1873);

var SignEmitter = /*#__PURE__*/function () {
  function SignEmitter(server, _ref) {
    var family = _ref.family,
        major = _ref.major,
        minor = _ref.minor,
        patch = _ref.patch;

    _classCallCheck(this, SignEmitter);

    this._server = server;

    if (family === "Chrome") {
      var _ref2 = this._satisfies([parseInt(major, 10), parseInt(minor, 10), parseInt(patch, 10)], fast_reloading_constants_1.NEW_FAST_RELOAD_CHROME_VERSION) ? [fast_reloading_constants_1.NEW_FAST_RELOAD_CALLS, fast_reloading_constants_1.NEW_FAST_RELOAD_DEBOUNCING_FRAME] : [fast_reloading_constants_1.FAST_RELOAD_CALLS, fast_reloading_constants_1.FAST_RELOAD_DEBOUNCING_FRAME],
          _ref3 = _slicedToArray(_ref2, 2),
          reloadCalls = _ref3[0],
          reloadDeboucingFrame = _ref3[1];

      var debouncer = block_protection_1.debounceSignal(reloadDeboucingFrame, this);
      var blocker = block_protection_1.fastReloadBlocker(reloadCalls, fast_reloading_constants_1.FAST_RELOAD_WAIT, this);
      this._safeSignChange = debouncer(blocker(this._setupSafeSignChange()));
    } else {
      this._safeSignChange = this._setupSafeSignChange();
    }
  }

  _createClass(SignEmitter, [{
    key: "safeSignChange",
    value: function safeSignChange(reloadPage, onlyPageChanged) {
      var _this = this;

      return new Promise(function (res, rej) {
        _this._safeSignChange(reloadPage, onlyPageChanged, res, rej);
      });
    }
  }, {
    key: "_setupSafeSignChange",
    value: function _setupSafeSignChange() {
      var _this2 = this;

      return function (reloadPage, onlyPageChanged, onSuccess, onError) {
        try {
          _this2._sendMsg(signals_1.signChange({
            reloadPage: reloadPage,
            onlyPageChanged: onlyPageChanged
          }));

          onSuccess();
        } catch (err) {
          onError(err);
        }
      };
    }
  }, {
    key: "_sendMsg",
    value: function _sendMsg(msg) {
      this._server.clients.forEach(function (client) {
        if (client.readyState === ws_1.OPEN) {
          client.send(JSON.stringify(msg));
        }
      });
    }
  }, {
    key: "_satisfies",
    value: function _satisfies(browserVersion, targetVersion) {
      var versionPairs = lodash_1.zip(browserVersion, targetVersion);

      var _iterator = _createForOfIteratorHelper(versionPairs),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              _step$value$ = _step$value[0],
              version = _step$value$ === void 0 ? 0 : _step$value$,
              _step$value$2 = _step$value[1],
              target = _step$value$2 === void 0 ? 0 : _step$value$2;

          if (version !== target) {
            return version > target;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return true;
    }
  }]);

  return SignEmitter;
}();

exports.default = SignEmitter;

/***/ }),

/***/ 3362:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var logger_1 = __webpack_require__(6373);

var HotReloaderServer_1 = __webpack_require__(1692);

var changesTriggerer = function changesTriggerer(port, reloadPage) {
  var server = new HotReloaderServer_1["default"](port);
  logger_1.info("[ Starting the Hot Extension Reload Server... ]");
  server.listen();
  return function (onlyPageChanged) {
    return server.signChange(reloadPage, onlyPageChanged);
  };
};

exports.default = changesTriggerer;

/***/ }),

/***/ 3009:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.changesTriggerer = void 0;

var changes_triggerer_1 = __webpack_require__(3362);

exports.changesTriggerer = changes_triggerer_1["default"];

/***/ }),

/***/ 9820:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _a;

var source_map_support_1 = __webpack_require__(6252);

var log_constants_1 = __webpack_require__(1918);

var ExtensionReloader_1 = __webpack_require__(6048);

var logger_1 = __webpack_require__(6373);

source_map_support_1.install();
var logLevel = {
  development: log_constants_1.DEBUG,
  production: log_constants_1.ERROR,
  test: log_constants_1.NONE
}[(_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : log_constants_1.ERROR];
logger_1.setLogLevel(logLevel);
module.exports = ExtensionReloader_1["default"];

/***/ }),

/***/ 9197:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var safe_1 = __webpack_require__(4431);

var lodash_1 = __webpack_require__(3804);

var log_constants_1 = __webpack_require__(1918);

var reference_docs_constants_1 = __webpack_require__(6578);

var Message = /*#__PURE__*/function () {
  function Message(type, referenceNumber, message) {
    _classCallCheck(this, Message);

    this.type = type;
    this.referenceNumber = referenceNumber;
    this.message = message;
  }

  _createClass(Message, [{
    key: "get",
    value: function get() {
      var additionalData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var code = "WER-".concat(this.getPrefix()).concat(this.referenceNumber);
      var refLink = safe_1.bold(safe_1.white("".concat(reference_docs_constants_1.REF_URL, "#").concat(code)));
      return "[".concat(code, "] ").concat(lodash_1.template(this.message, additionalData), ".\nVisit ").concat(refLink, " for complete details\n");
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.get();
    }
  }, {
    key: "getPrefix",
    value: function getPrefix() {
      switch (this.type) {
        case log_constants_1.INFO:
          return "I";

        case log_constants_1.WARN:
          return "W";

        case log_constants_1.ERROR:
          return "E";
      }
    }
  }]);

  return Message;
}();

exports.default = Message;

/***/ }),

/***/ 1049:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bgScriptManifestRequiredMsg = exports.bgScriptEntryErrorMsg = void 0;

var log_constants_1 = __webpack_require__(1918);

var Message_1 = __webpack_require__(9197);

exports.bgScriptEntryErrorMsg = new Message_1["default"](log_constants_1.ERROR, 1, "Background script webpack entry not found/match \
the provided on 'manifest.json' or 'entry.background' \
option of the plugin");
exports.bgScriptManifestRequiredMsg = new Message_1["default"](log_constants_1.ERROR, 2, "Background script on manifest is required");

/***/ }),

/***/ 2436:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.onlyOnDevelopmentMsg = void 0;

var log_constants_1 = __webpack_require__(1918);

var Message_1 = __webpack_require__(9197);

exports.onlyOnDevelopmentMsg = new Message_1["default"](log_constants_1.WARN, 1, "Warning, Extension Reloader Plugin was not enabled! \
It runs only on webpack --mode=development (v4 or more) \
or with NODE_ENV=development (lower versions)");

/***/ }),

/***/ 6392:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.middlewareInjector = void 0;

var middleware_injector_1 = __webpack_require__(91);

exports.middlewareInjector = middleware_injector_1["default"];

/***/ }),

/***/ 91:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var webpack_sources_1 = __webpack_require__(3745);

var middleware_source_builder_1 = __webpack_require__(6271);

var middlewareInjector = function middlewareInjector(_ref, _ref2) {
  var background = _ref.background,
      contentScript = _ref.contentScript,
      extensionPage = _ref.extensionPage;
  var port = _ref2.port,
      reloadPage = _ref2.reloadPage;
  var source = middleware_source_builder_1["default"]({
    port: port,
    reloadPage: reloadPage
  });

  var sourceFactory = function sourceFactory() {
    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }

    return _construct(webpack_sources_1.ConcatSource, sources);
  };

  var matchBgOrContentOrPage = function matchBgOrContentOrPage(name) {
    return name === background || name === contentScript || contentScript && contentScript.includes(name) || name === extensionPage || extensionPage && extensionPage.includes(name);
  };

  return function (assets, chunks) {
    return chunks.reduce(function (prev, _ref3) {
      var name = _ref3.name,
          files = _ref3.files;

      if (matchBgOrContentOrPage(name)) {
        files.forEach(function (entryPoint) {
          if (/\.js$/.test(entryPoint)) {
            var finalSrc = sourceFactory(source, assets[entryPoint]);
            prev[entryPoint] = finalSrc;
          }
        });
      }

      return prev;
    }, {});
  };
};

exports.default = middlewareInjector;

/***/ }),

/***/ 6271:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var lodash_1 = __webpack_require__(3804);

var wer_middleware_raw_1 = __webpack_require__(3653);

var raw_loader_webextension_polyfill_1 = __webpack_require__(2634);

var webpack_sources_1 = __webpack_require__(3745);

var middleware_config_constants_1 = __webpack_require__(5934);

var signals = __webpack_require__(1873);

function middleWareSourceBuilder(_ref) {
  var port = _ref.port,
      reloadPage = _ref.reloadPage;
  var tmpl = lodash_1.template(wer_middleware_raw_1["default"]);
  return new webpack_sources_1.RawSource(tmpl({
    WSHost: "ws://localhost:".concat(port),
    config: JSON.stringify({
      RECONNECT_INTERVAL: middleware_config_constants_1.RECONNECT_INTERVAL,
      SOCKET_ERR_CODE_REF: middleware_config_constants_1.SOCKET_ERR_CODE_REF
    }),
    polyfillSource: "\"||".concat(raw_loader_webextension_polyfill_1["default"], "\""),
    reloadPage: "".concat(reloadPage),
    signals: JSON.stringify(signals)
  }));
}

exports.default = middleWareSourceBuilder;

/***/ }),

/***/ 9832:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fastReloadBlocker = exports.debounceSignal = void 0;

var lodash_1 = __webpack_require__(3804);

var logger_1 = __webpack_require__(6373);

var debounceSignal = function debounceSignal(deboucingFrame, context) {
  return function (func) {
    if (context) {
      lodash_1.runInContext(context);
    }

    return lodash_1.debounce(function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return func.apply(context, args);
    }, deboucingFrame);
  };
};

exports.debounceSignal = debounceSignal;

var fastReloadBlocker = function fastReloadBlocker(maxCalls, wait, context) {
  return function (func) {
    var calls = 0;
    var inWait = false;
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (inWait) {
        return;
      } else if (calls === maxCalls) {
        calls = 0;
        inWait = true;
        var interval = wait / 1000;
        logger_1.warn("Please wait ".concat(interval, " secs. for next reload to prevent your extension being blocked"));
        var logInterval = setInterval(function () {
          return logger_1.warn("".concat(--interval, " ..."));
        }, 1000);
        setTimeout(function () {
          clearInterval(logInterval);
          logger_1.info("Signing for reload now");
          func.apply(context, args);
          inWait = false;
        }, wait);
      } else {
        calls++;
        return func.apply(context, args);
      }
    };
  };
};

exports.fastReloadBlocker = fastReloadBlocker;

/***/ }),

/***/ 6961:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var options_constants_1 = __webpack_require__(8804);

exports.default = {
  entries: {
    background: options_constants_1.DEFAULT_BACKGROUND_ENTRY,
    contentScript: options_constants_1.DEFAULT_CONTENT_SCRIPT_ENTRY,
    extensionPage: options_constants_1.DEFAULT_EXTENSION_PAGE_ENTRY
  },
  port: options_constants_1.DEFAULT_PORT,
  reloadPage: options_constants_1.DEFAULT_RELOAD_PAGE
};

/***/ }),

/***/ 6373:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.debug = exports.error = exports.warn = exports.info = exports.log = exports.setLogLevel = void 0; // tslint:disable: no-console

var safe_1 = __webpack_require__(4431);

var log_constants_1 = __webpack_require__(1918);

var logLevel;

var setLogLevel = function setLogLevel(level) {
  return logLevel = level;
};

exports.setLogLevel = setLogLevel;

var log = function log(message) {
  return logLevel >= log_constants_1.LOG && console.log(message);
};

exports.log = log;

var info = function info(message) {
  return logLevel >= log_constants_1.INFO && console.info(safe_1.green(message));
};

exports.info = info;

var warn = function warn(message) {
  return logLevel >= log_constants_1.WARN && console.warn(safe_1.yellow(message));
};

exports.warn = warn;

var error = function error(message) {
  return logLevel >= log_constants_1.ERROR && console.error(safe_1.red(message));
};

exports.error = error;

var debug = function debug(message) {
  return logLevel >= log_constants_1.DEBUG && console.debug(safe_1.white(exports.debug(message)));
};

exports.debug = debug;

/***/ }),

/***/ 6005:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.extractEntries = void 0;

var fs_1 = __webpack_require__(5747);

var lodash_1 = __webpack_require__(3804);

var errors_1 = __webpack_require__(1049);

function extractEntries(webpackEntry, filename, manifestPath) {
  var manifestJson = JSON.parse(fs_1.readFileSync(manifestPath).toString());
  var background = manifestJson.background,
      content_scripts = manifestJson.content_scripts;

  if (!filename) {
    throw new Error();
  }

  if (!(background === null || background === void 0 ? void 0 : background.scripts)) {
    throw new TypeError(errors_1.bgScriptManifestRequiredMsg.get());
  }

  var bgScriptFileNames = background.scripts;
  var toRemove = filename.replace("[name]", "");
  var bgWebpackEntry = Object.keys(webpackEntry).find(function (entryName) {
    return bgScriptFileNames.some(function (bgManifest) {
      return bgManifest.replace(toRemove, "") === entryName;
    });
  });

  if (!bgWebpackEntry) {
    throw new TypeError(errors_1.bgScriptEntryErrorMsg.get());
  }

  var contentEntries = content_scripts ? lodash_1.flatMapDeep(Object.keys(webpackEntry), function (entryName) {
    return content_scripts.map(function (_ref) {
      var js = _ref.js;
      return js.map(function (contentItem) {
        return contentItem.replace(toRemove, "");
      }).filter(function (contentItem) {
        return contentItem === entryName;
      });
    });
  }) : null;
  return {
    background: bgWebpackEntry,
    contentScript: contentEntries,
    extensionPage: null
  };
}

exports.extractEntries = extractEntries;

/***/ }),

/***/ 1873:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.signLog = exports.signReloaded = exports.signReload = exports.signChange = exports.SIGN_CONNECT = exports.SIGN_LOG = exports.SIGN_RELOADED = exports.SIGN_RELOAD = exports.SIGN_CHANGE = void 0;
exports.SIGN_CHANGE = "SIGN_CHANGE";
exports.SIGN_RELOAD = "SIGN_RELOAD";
exports.SIGN_RELOADED = "SIGN_RELOADED";
exports.SIGN_LOG = "SIGN_LOG";
exports.SIGN_CONNECT = "SIGN_CONNECT";

var signChange = function signChange(_ref) {
  var _ref$reloadPage = _ref.reloadPage,
      reloadPage = _ref$reloadPage === void 0 ? true : _ref$reloadPage,
      _ref$onlyPageChanged = _ref.onlyPageChanged,
      onlyPageChanged = _ref$onlyPageChanged === void 0 ? false : _ref$onlyPageChanged;
  return {
    payload: {
      reloadPage: reloadPage,
      onlyPageChanged: onlyPageChanged
    },
    type: exports.SIGN_CHANGE
  };
};

exports.signChange = signChange;

var signReload = function signReload() {
  return {
    type: exports.SIGN_RELOAD
  };
};

exports.signReload = signReload;

var signReloaded = function signReloaded(msg) {
  return {
    payload: msg,
    type: exports.SIGN_RELOADED
  };
};

exports.signReloaded = signReloaded;

var signLog = function signLog(msg) {
  return {
    payload: msg,
    type: exports.SIGN_LOG
  };
};

exports.signLog = signLog;

/***/ }),

/***/ 4257:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var AbstractExtensionReloader = function AbstractExtensionReloader() {
  _classCallCheck(this, AbstractExtensionReloader);
};

exports.default = AbstractExtensionReloader;

/***/ }),

/***/ 8675:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var CompilerEventsFacade = /*#__PURE__*/function () {
  function CompilerEventsFacade(compiler) {
    _classCallCheck(this, CompilerEventsFacade);

    this._compiler = compiler;
  }

  _createClass(CompilerEventsFacade, [{
    key: "afterOptimizeChunkAssets",
    value: function afterOptimizeChunkAssets(call) {
      return this._compiler.hooks.compilation.tap(CompilerEventsFacade.extensionName, function (comp) {
        return comp.hooks.afterOptimizeChunkAssets.tap(CompilerEventsFacade.extensionName, function (chunks) {
          return call(comp, chunks);
        });
      });
    }
  }, {
    key: "afterEmit",
    value: function afterEmit(call) {
      return this._compiler.hooks.afterEmit.tap(CompilerEventsFacade.extensionName, call);
    }
  }]);

  return CompilerEventsFacade;
}();

exports.default = CompilerEventsFacade;
CompilerEventsFacade.extensionName = "webpack-extension-reloader";

/***/ }),

/***/ 5420:
/***/ ((module) => {

var toString = Object.prototype.toString

var isModern = (
  typeof Buffer.alloc === 'function' &&
  typeof Buffer.allocUnsafe === 'function' &&
  typeof Buffer.from === 'function'
)

function isArrayBuffer (input) {
  return toString.call(input).slice(8, -1) === 'ArrayBuffer'
}

function fromArrayBuffer (obj, byteOffset, length) {
  byteOffset >>>= 0

  var maxLength = obj.byteLength - byteOffset

  if (maxLength < 0) {
    throw new RangeError("'offset' is out of bounds")
  }

  if (length === undefined) {
    length = maxLength
  } else {
    length >>>= 0

    if (length > maxLength) {
      throw new RangeError("'length' is out of bounds")
    }
  }

  return isModern
    ? Buffer.from(obj.slice(byteOffset, byteOffset + length))
    : new Buffer(new Uint8Array(obj.slice(byteOffset, byteOffset + length)))
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  return isModern
    ? Buffer.from(string, encoding)
    : new Buffer(string, encoding)
}

function bufferFrom (value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (isArrayBuffer(value)) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  return isModern
    ? Buffer.from(value)
    : new Buffer(value)
}

module.exports = bufferFrom


/***/ }),

/***/ 2517:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*

The MIT License (MIT)

Original Library
  - Copyright (c) Marak Squires

Additional functionality
 - Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var colors = {};
module['exports'] = colors;

colors.themes = {};

var util = __webpack_require__(1669);
var ansiStyles = colors.styles = __webpack_require__(5784);
var defineProps = Object.defineProperties;
var newLineRegex = new RegExp(/[\r\n]+/g);

colors.supportsColor = __webpack_require__(6561).supportsColor;

if (typeof colors.enabled === 'undefined') {
  colors.enabled = colors.supportsColor() !== false;
}

colors.enable = function() {
  colors.enabled = true;
};

colors.disable = function() {
  colors.enabled = false;
};

colors.stripColors = colors.strip = function(str) {
  return ('' + str).replace(/\x1B\[\d+m/g, '');
};

// eslint-disable-next-line no-unused-vars
var stylize = colors.stylize = function stylize(str, style) {
  if (!colors.enabled) {
    return str+'';
  }

  var styleMap = ansiStyles[style];

  // Stylize should work for non-ANSI styles, too
  if(!styleMap && style in colors){
    // Style maps like trap operate as functions on strings;
    // they don't have properties like open or close.
    return colors[style](str);
  }

  return styleMap.open + str + styleMap.close;
};

var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
var escapeStringRegexp = function(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str.replace(matchOperatorsRe, '\\$&');
};

function build(_styles) {
  var builder = function builder() {
    return applyStyle.apply(builder, arguments);
  };
  builder._styles = _styles;
  // __proto__ is used because we must return a function, but there is
  // no way to create a function with a different prototype.
  builder.__proto__ = proto;
  return builder;
}

var styles = (function() {
  var ret = {};
  ansiStyles.grey = ansiStyles.gray;
  Object.keys(ansiStyles).forEach(function(key) {
    ansiStyles[key].closeRe =
      new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
    ret[key] = {
      get: function() {
        return build(this._styles.concat(key));
      },
    };
  });
  return ret;
})();

var proto = defineProps(function colors() {}, styles);

function applyStyle() {
  var args = Array.prototype.slice.call(arguments);

  var str = args.map(function(arg) {
    // Use weak equality check so we can colorize null/undefined in safe mode
    if (arg != null && arg.constructor === String) {
      return arg;
    } else {
      return util.inspect(arg);
    }
  }).join(' ');

  if (!colors.enabled || !str) {
    return str;
  }

  var newLinesPresent = str.indexOf('\n') != -1;

  var nestedStyles = this._styles;

  var i = nestedStyles.length;
  while (i--) {
    var code = ansiStyles[nestedStyles[i]];
    str = code.open + str.replace(code.closeRe, code.open) + code.close;
    if (newLinesPresent) {
      str = str.replace(newLineRegex, function(match) {
        return code.close + match + code.open;
      });
    }
  }

  return str;
}

colors.setTheme = function(theme) {
  if (typeof theme === 'string') {
    console.log('colors.setTheme now only accepts an object, not a string.  ' +
      'If you are trying to set a theme from a file, it is now your (the ' +
      'caller\'s) responsibility to require the file.  The old syntax ' +
      'looked like colors.setTheme(__dirname + ' +
      '\'/../themes/generic-logging.js\'); The new syntax looks like '+
      'colors.setTheme(require(__dirname + ' +
      '\'/../themes/generic-logging.js\'));');
    return;
  }
  for (var style in theme) {
    (function(style) {
      colors[style] = function(str) {
        if (typeof theme[style] === 'object') {
          var out = str;
          for (var i in theme[style]) {
            out = colors[theme[style][i]](out);
          }
          return out;
        }
        return colors[theme[style]](str);
      };
    })(style);
  }
};

function init() {
  var ret = {};
  Object.keys(styles).forEach(function(name) {
    ret[name] = {
      get: function() {
        return build([name]);
      },
    };
  });
  return ret;
}

var sequencer = function sequencer(map, str) {
  var exploded = str.split('');
  exploded = exploded.map(map);
  return exploded.join('');
};

// custom formatter methods
colors.trap = __webpack_require__(5117);
colors.zalgo = __webpack_require__(1492);

// maps
colors.maps = {};
colors.maps.america = __webpack_require__(6260)(colors);
colors.maps.zebra = __webpack_require__(3270)(colors);
colors.maps.rainbow = __webpack_require__(5920)(colors);
colors.maps.random = __webpack_require__(2449)(colors);

for (var map in colors.maps) {
  (function(map) {
    colors[map] = function(str) {
      return sequencer(colors.maps[map], str);
    };
  })(map);
}

defineProps(colors, init());


/***/ }),

/***/ 5117:
/***/ ((module) => {

module['exports'] = function runTheTrap(text, options) {
  var result = '';
  text = text || 'Run the trap, drop the bass';
  text = text.split('');
  var trap = {
    a: ['\u0040', '\u0104', '\u023a', '\u0245', '\u0394', '\u039b', '\u0414'],
    b: ['\u00df', '\u0181', '\u0243', '\u026e', '\u03b2', '\u0e3f'],
    c: ['\u00a9', '\u023b', '\u03fe'],
    d: ['\u00d0', '\u018a', '\u0500', '\u0501', '\u0502', '\u0503'],
    e: ['\u00cb', '\u0115', '\u018e', '\u0258', '\u03a3', '\u03be', '\u04bc',
      '\u0a6c'],
    f: ['\u04fa'],
    g: ['\u0262'],
    h: ['\u0126', '\u0195', '\u04a2', '\u04ba', '\u04c7', '\u050a'],
    i: ['\u0f0f'],
    j: ['\u0134'],
    k: ['\u0138', '\u04a0', '\u04c3', '\u051e'],
    l: ['\u0139'],
    m: ['\u028d', '\u04cd', '\u04ce', '\u0520', '\u0521', '\u0d69'],
    n: ['\u00d1', '\u014b', '\u019d', '\u0376', '\u03a0', '\u048a'],
    o: ['\u00d8', '\u00f5', '\u00f8', '\u01fe', '\u0298', '\u047a', '\u05dd',
      '\u06dd', '\u0e4f'],
    p: ['\u01f7', '\u048e'],
    q: ['\u09cd'],
    r: ['\u00ae', '\u01a6', '\u0210', '\u024c', '\u0280', '\u042f'],
    s: ['\u00a7', '\u03de', '\u03df', '\u03e8'],
    t: ['\u0141', '\u0166', '\u0373'],
    u: ['\u01b1', '\u054d'],
    v: ['\u05d8'],
    w: ['\u0428', '\u0460', '\u047c', '\u0d70'],
    x: ['\u04b2', '\u04fe', '\u04fc', '\u04fd'],
    y: ['\u00a5', '\u04b0', '\u04cb'],
    z: ['\u01b5', '\u0240'],
  };
  text.forEach(function(c) {
    c = c.toLowerCase();
    var chars = trap[c] || [' '];
    var rand = Math.floor(Math.random() * chars.length);
    if (typeof trap[c] !== 'undefined') {
      result += trap[c][rand];
    } else {
      result += c;
    }
  });
  return result;
};


/***/ }),

/***/ 1492:
/***/ ((module) => {

// please no
module['exports'] = function zalgo(text, options) {
  text = text || '   he is here   ';
  var soul = {
    'up': [
      '̍', '̎', '̄', '̅',
      '̿', '̑', '̆', '̐',
      '͒', '͗', '͑', '̇',
      '̈', '̊', '͂', '̓',
      '̈', '͊', '͋', '͌',
      '̃', '̂', '̌', '͐',
      '̀', '́', '̋', '̏',
      '̒', '̓', '̔', '̽',
      '̉', 'ͣ', 'ͤ', 'ͥ',
      'ͦ', 'ͧ', 'ͨ', 'ͩ',
      'ͪ', 'ͫ', 'ͬ', 'ͭ',
      'ͮ', 'ͯ', '̾', '͛',
      '͆', '̚',
    ],
    'down': [
      '̖', '̗', '̘', '̙',
      '̜', '̝', '̞', '̟',
      '̠', '̤', '̥', '̦',
      '̩', '̪', '̫', '̬',
      '̭', '̮', '̯', '̰',
      '̱', '̲', '̳', '̹',
      '̺', '̻', '̼', 'ͅ',
      '͇', '͈', '͉', '͍',
      '͎', '͓', '͔', '͕',
      '͖', '͙', '͚', '̣',
    ],
    'mid': [
      '̕', '̛', '̀', '́',
      '͘', '̡', '̢', '̧',
      '̨', '̴', '̵', '̶',
      '͜', '͝', '͞',
      '͟', '͠', '͢', '̸',
      '̷', '͡', ' ҉',
    ],
  };
  var all = [].concat(soul.up, soul.down, soul.mid);

  function randomNumber(range) {
    var r = Math.floor(Math.random() * range);
    return r;
  }

  function isChar(character) {
    var bool = false;
    all.filter(function(i) {
      bool = (i === character);
    });
    return bool;
  }


  function heComes(text, options) {
    var result = '';
    var counts;
    var l;
    options = options || {};
    options['up'] =
      typeof options['up'] !== 'undefined' ? options['up'] : true;
    options['mid'] =
      typeof options['mid'] !== 'undefined' ? options['mid'] : true;
    options['down'] =
      typeof options['down'] !== 'undefined' ? options['down'] : true;
    options['size'] =
      typeof options['size'] !== 'undefined' ? options['size'] : 'maxi';
    text = text.split('');
    for (l in text) {
      if (isChar(l)) {
        continue;
      }
      result = result + text[l];
      counts = {'up': 0, 'down': 0, 'mid': 0};
      switch (options.size) {
        case 'mini':
          counts.up = randomNumber(8);
          counts.mid = randomNumber(2);
          counts.down = randomNumber(8);
          break;
        case 'maxi':
          counts.up = randomNumber(16) + 3;
          counts.mid = randomNumber(4) + 1;
          counts.down = randomNumber(64) + 3;
          break;
        default:
          counts.up = randomNumber(8) + 1;
          counts.mid = randomNumber(6) / 2;
          counts.down = randomNumber(8) + 1;
          break;
      }

      var arr = ['up', 'mid', 'down'];
      for (var d in arr) {
        var index = arr[d];
        for (var i = 0; i <= counts[index]; i++) {
          if (options[index]) {
            result = result + soul[index][randomNumber(soul[index].length)];
          }
        }
      }
    }
    return result;
  }
  // don't summon him
  return heComes(text, options);
};



/***/ }),

/***/ 6260:
/***/ ((module) => {

module['exports'] = function(colors) {
  return function(letter, i, exploded) {
    if (letter === ' ') return letter;
    switch (i%3) {
      case 0: return colors.red(letter);
      case 1: return colors.white(letter);
      case 2: return colors.blue(letter);
    }
  };
};


/***/ }),

/***/ 5920:
/***/ ((module) => {

module['exports'] = function(colors) {
  // RoY G BiV
  var rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta'];
  return function(letter, i, exploded) {
    if (letter === ' ') {
      return letter;
    } else {
      return colors[rainbowColors[i++ % rainbowColors.length]](letter);
    }
  };
};



/***/ }),

/***/ 2449:
/***/ ((module) => {

module['exports'] = function(colors) {
  var available = ['underline', 'inverse', 'grey', 'yellow', 'red', 'green',
    'blue', 'white', 'cyan', 'magenta', 'brightYellow', 'brightRed',
    'brightGreen', 'brightBlue', 'brightWhite', 'brightCyan', 'brightMagenta'];
  return function(letter, i, exploded) {
    return letter === ' ' ? letter :
      colors[
          available[Math.round(Math.random() * (available.length - 2))]
      ](letter);
  };
};


/***/ }),

/***/ 3270:
/***/ ((module) => {

module['exports'] = function(colors) {
  return function(letter, i, exploded) {
    return i % 2 === 0 ? letter : colors.inverse(letter);
  };
};


/***/ }),

/***/ 5784:
/***/ ((module) => {

/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var styles = {};
module['exports'] = styles;

var codes = {
  reset: [0, 0],

  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],

  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  grey: [90, 39],

  brightRed: [91, 39],
  brightGreen: [92, 39],
  brightYellow: [93, 39],
  brightBlue: [94, 39],
  brightMagenta: [95, 39],
  brightCyan: [96, 39],
  brightWhite: [97, 39],

  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  bgGray: [100, 49],
  bgGrey: [100, 49],

  bgBrightRed: [101, 49],
  bgBrightGreen: [102, 49],
  bgBrightYellow: [103, 49],
  bgBrightBlue: [104, 49],
  bgBrightMagenta: [105, 49],
  bgBrightCyan: [106, 49],
  bgBrightWhite: [107, 49],

  // legacy styles for colors pre v1.0.0
  blackBG: [40, 49],
  redBG: [41, 49],
  greenBG: [42, 49],
  yellowBG: [43, 49],
  blueBG: [44, 49],
  magentaBG: [45, 49],
  cyanBG: [46, 49],
  whiteBG: [47, 49],

};

Object.keys(codes).forEach(function(key) {
  var val = codes[key];
  var style = styles[key] = [];
  style.open = '\u001b[' + val[0] + 'm';
  style.close = '\u001b[' + val[1] + 'm';
});


/***/ }),

/***/ 4340:
/***/ ((module) => {

"use strict";
/*
MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/



module.exports = function(flag, argv) {
  argv = argv || process.argv;

  var terminatorPos = argv.indexOf('--');
  var prefix = /^-{1,2}/.test(flag) ? '' : '--';
  var pos = argv.indexOf(prefix + flag);

  return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};


/***/ }),

/***/ 6561:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/



var os = __webpack_require__(2087);
var hasFlag = __webpack_require__(4340);

var env = process.env;

var forceColor = void 0;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
  forceColor = false;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true')
           || hasFlag('color=always')) {
  forceColor = true;
}
if ('FORCE_COLOR' in env) {
  forceColor = env.FORCE_COLOR.length === 0
    || parseInt(env.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
  if (level === 0) {
    return false;
  }

  return {
    level: level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3,
  };
}

function supportsColor(stream) {
  if (forceColor === false) {
    return 0;
  }

  if (hasFlag('color=16m') || hasFlag('color=full')
      || hasFlag('color=truecolor')) {
    return 3;
  }

  if (hasFlag('color=256')) {
    return 2;
  }

  if (stream && !stream.isTTY && forceColor !== true) {
    return 0;
  }

  var min = forceColor ? 1 : 0;

  if (process.platform === 'win32') {
    // Node.js 7.5.0 is the first version of Node.js to include a patch to
    // libuv that enables 256 color output on Windows. Anything earlier and it
    // won't work. However, here we target Node.js 8 at minimum as it is an LTS
    // release, and Node.js 7 is not. Windows 10 build 10586 is the first
    // Windows release that supports 256 colors. Windows 10 build 14931 is the
    // first release that supports 16m/TrueColor.
    var osRelease = os.release().split('.');
    if (Number(process.versions.node.split('.')[0]) >= 8
        && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }

    return 1;
  }

  if ('CI' in env) {
    if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(function(sign) {
      return sign in env;
    }) || env.CI_NAME === 'codeship') {
      return 1;
    }

    return min;
  }

  if ('TEAMCITY_VERSION' in env) {
    return (/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0
    );
  }

  if ('TERM_PROGRAM' in env) {
    var version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

    switch (env.TERM_PROGRAM) {
      case 'iTerm.app':
        return version >= 3 ? 3 : 2;
      case 'Hyper':
        return 3;
      case 'Apple_Terminal':
        return 2;
      // No default
    }
  }

  if (/-256(color)?$/i.test(env.TERM)) {
    return 2;
  }

  if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    return 1;
  }

  if ('COLORTERM' in env) {
    return 1;
  }

  if (env.TERM === 'dumb') {
    return min;
  }

  return min;
}

function getSupportLevel(stream) {
  var level = supportsColor(stream);
  return translateLevel(level);
}

module.exports = {
  supportsColor: getSupportLevel,
  stdout: getSupportLevel(process.stdout),
  stderr: getSupportLevel(process.stderr),
};


/***/ }),

/***/ 4431:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//
// Remark: Requiring this file will use the "safe" colors API,
// which will not touch String.prototype.
//
//   var colors = require('colors/safe');
//   colors.red("foo")
//
//
var colors = __webpack_require__(2517);
module['exports'] = colors;


/***/ }),

/***/ 3653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* tslint:disable */\n\n/* -------------------------------------------------- */\n\n/*      Start of Webpack Hot Extension Middleware     */\n\n/* ================================================== */\n\n/*  This will be converted into a lodash templ., any  */\n\n/*  external argument must be provided using it       */\n\n/* -------------------------------------------------- */\n(function (window) {\n  var injectionContext = {\n    browser: null\n  };\n  (function () {\n    \"<%= polyfillSource %>\";\n  }).bind(injectionContext)();\n  var browser = injectionContext.browser;\n  var signals = JSON.parse('<%= signals %>');\n  var config = JSON.parse('<%= config %>');\n  var reloadPage = \"<%= reloadPage %>\" === \"true\";\n  var wsHost = \"<%= WSHost %>\";\n  var SIGN_CHANGE = signals.SIGN_CHANGE,\n      SIGN_RELOAD = signals.SIGN_RELOAD,\n      SIGN_RELOADED = signals.SIGN_RELOADED,\n      SIGN_LOG = signals.SIGN_LOG,\n      SIGN_CONNECT = signals.SIGN_CONNECT;\n  var RECONNECT_INTERVAL = config.RECONNECT_INTERVAL,\n      SOCKET_ERR_CODE_REF = config.SOCKET_ERR_CODE_REF;\n  var extension = browser.extension,\n      runtime = browser.runtime,\n      tabs = browser.tabs;\n  var manifest = runtime.getManifest(); // =============================== Helper functions ======================================= //\n\n  var formatter = function formatter(msg) {\n    return \"[ WER: \".concat(msg, \" ]\");\n  };\n\n  var logger = function logger(msg) {\n    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"info\";\n    return console[level](formatter(msg));\n  };\n\n  var timeFormatter = function timeFormatter(date) {\n    return date.toTimeString().replace(/.*(\\d{2}:\\d{2}:\\d{2}).*/, \"$1\");\n  }; // ========================== Called only on content scripts ============================== //\n\n\n  function contentScriptWorker() {\n    runtime.sendMessage({\n      type: SIGN_CONNECT\n    }).then(function (msg) {\n      return console.info(msg);\n    });\n    runtime.onMessage.addListener(function (_ref) {\n      var type = _ref.type,\n          payload = _ref.payload;\n\n      switch (type) {\n        case SIGN_RELOAD:\n          logger(\"Detected Changes. Reloading ...\");\n          reloadPage && window.location.reload();\n          break;\n\n        case SIGN_LOG:\n          console.info(payload);\n          break;\n      }\n    });\n  } // ======================== Called only on background scripts ============================= //\n\n\n  function backgroundWorker(socket) {\n    runtime.onMessage.addListener(function (action, sender) {\n      if (action.type === SIGN_CONNECT) {\n        return Promise.resolve(formatter(\"Connected to Extension Hot Reloader\"));\n      }\n\n      return true;\n    });\n    socket.addEventListener(\"message\", function (_ref2) {\n      var data = _ref2.data;\n\n      var _JSON$parse = JSON.parse(data),\n          type = _JSON$parse.type,\n          payload = _JSON$parse.payload;\n\n      if (type === SIGN_CHANGE && (!payload || !payload.onlyPageChanged)) {\n        tabs.query({\n          status: \"complete\"\n        }).then(function (loadedTabs) {\n          loadedTabs.forEach(function (tab) {\n            return tab.id && tabs.sendMessage(tab.id, {\n              type: SIGN_RELOAD\n            });\n          });\n          socket.send(JSON.stringify({\n            type: SIGN_RELOADED,\n            payload: formatter(\"\".concat(timeFormatter(new Date()), \" - \").concat(manifest.name, \" successfully reloaded\"))\n          }));\n          runtime.reload();\n        });\n      } else {\n        runtime.sendMessage({\n          type: type,\n          payload: payload\n        });\n      }\n    });\n    socket.addEventListener(\"close\", function (_ref3) {\n      var code = _ref3.code;\n      logger(\"Socket connection closed. Code \".concat(code, \". See more in \").concat(SOCKET_ERR_CODE_REF), \"warn\");\n      var intId = setInterval(function () {\n        logger(\"Attempting to reconnect (tip: Check if Webpack is running)\");\n        var ws = new WebSocket(wsHost);\n\n        ws.onerror = function () {\n          return logger(\"Error trying to re-connect. Reattempting in \".concat(RECONNECT_INTERVAL / 1000, \"s\"), \"warn\");\n        };\n\n        ws.addEventListener(\"open\", function () {\n          clearInterval(intId);\n          logger(\"Reconnected. Reloading plugin\");\n          runtime.reload();\n        });\n      }, RECONNECT_INTERVAL);\n    });\n  } // ======================== Called only on extension pages that are not the background ============================= //\n\n\n  function extensionPageWorker() {\n    runtime.sendMessage({\n      type: SIGN_CONNECT\n    }).then(function (msg) {\n      return console.info(msg);\n    });\n    runtime.onMessage.addListener(function (_ref4) {\n      var type = _ref4.type,\n          payload = _ref4.payload;\n\n      switch (type) {\n        case SIGN_CHANGE:\n          logger(\"Detected Changes. Reloading ...\");\n          reloadPage && window.location.reload();\n          break;\n\n        case SIGN_LOG:\n          console.info(payload);\n          break;\n      }\n    });\n  } // ======================= Bootstraps the middleware =========================== //\n\n\n  runtime.reload ? extension.getBackgroundPage() === window ? backgroundWorker(new WebSocket(wsHost)) : extensionPageWorker() : contentScriptWorker();\n})(window);\n/* ----------------------------------------------- */\n\n/* End of Webpack Hot Extension Middleware  */\n\n/* ----------------------------------------------- */");

/***/ }),

/***/ 2634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("(function (global, factory) {\n  if (typeof define === \"function\" && define.amd) {\n    define(\"webextension-polyfill\", [\"module\"], factory);\n  } else if (typeof exports !== \"undefined\") {\n    factory(module);\n  } else {\n    var mod = {\n      exports: {}\n    };\n    factory(mod);\n    global.browser = mod.exports;\n  }\n})(typeof globalThis !== \"undefined\" ? globalThis : typeof self !== \"undefined\" ? self : this, function (module) {\n  /* webextension-polyfill - v0.7.0 - Tue Nov 10 2020 20:24:04 */\n\n  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */\n\n  /* vim: set sts=2 sw=2 et tw=80: */\n\n  /* This Source Code Form is subject to the terms of the Mozilla Public\n   * License, v. 2.0. If a copy of the MPL was not distributed with this\n   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n  \"use strict\";\n\n  if (typeof browser === \"undefined\" || Object.getPrototypeOf(browser) !== Object.prototype) {\n    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = \"The message port closed before a response was received.\";\n    const SEND_RESPONSE_DEPRECATION_WARNING = \"Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)\"; // Wrapping the bulk of this polyfill in a one-time-use function is a minor\n    // optimization for Firefox. Since Spidermonkey does not fully parse the\n    // contents of a function until the first time it's called, and since it will\n    // never actually need to be called, this allows the polyfill to be included\n    // in Firefox nearly for free.\n\n    const wrapAPIs = extensionAPIs => {\n      // NOTE: apiMetadata is associated to the content of the api-metadata.json file\n      // at build time by replacing the following \"include\" with the content of the\n      // JSON file.\n      const apiMetadata = {\n        \"alarms\": {\n          \"clear\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"clearAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"get\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"bookmarks\": {\n          \"create\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getChildren\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getRecent\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getSubTree\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getTree\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"move\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeTree\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"search\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"update\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          }\n        },\n        \"browserAction\": {\n          \"disable\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"enable\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"getBadgeBackgroundColor\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getBadgeText\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getPopup\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getTitle\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"openPopup\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"setBadgeBackgroundColor\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setBadgeText\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setIcon\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"setPopup\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setTitle\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          }\n        },\n        \"browsingData\": {\n          \"remove\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"removeCache\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeCookies\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeDownloads\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeFormData\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeHistory\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeLocalStorage\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removePasswords\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removePluginData\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"settings\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"commands\": {\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"contextMenus\": {\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"update\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          }\n        },\n        \"cookies\": {\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAll\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAllCookieStores\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"set\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"devtools\": {\n          \"inspectedWindow\": {\n            \"eval\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 2,\n              \"singleCallbackArg\": false\n            }\n          },\n          \"panels\": {\n            \"create\": {\n              \"minArgs\": 3,\n              \"maxArgs\": 3,\n              \"singleCallbackArg\": true\n            },\n            \"elements\": {\n              \"createSidebarPane\": {\n                \"minArgs\": 1,\n                \"maxArgs\": 1\n              }\n            }\n          }\n        },\n        \"downloads\": {\n          \"cancel\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"download\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"erase\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getFileIcon\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"open\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"pause\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeFile\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"resume\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"search\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"show\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          }\n        },\n        \"extension\": {\n          \"isAllowedFileSchemeAccess\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"isAllowedIncognitoAccess\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"history\": {\n          \"addUrl\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"deleteAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"deleteRange\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"deleteUrl\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getVisits\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"search\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"i18n\": {\n          \"detectLanguage\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAcceptLanguages\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"identity\": {\n          \"launchWebAuthFlow\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"idle\": {\n          \"queryState\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"management\": {\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"getSelf\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"setEnabled\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"uninstallSelf\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          }\n        },\n        \"notifications\": {\n          \"clear\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"create\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"getPermissionLevel\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"update\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          }\n        },\n        \"pageAction\": {\n          \"getPopup\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getTitle\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"hide\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setIcon\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"setPopup\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setTitle\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"show\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          }\n        },\n        \"permissions\": {\n          \"contains\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"request\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"runtime\": {\n          \"getBackgroundPage\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"getPlatformInfo\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"openOptionsPage\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"requestUpdateCheck\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"sendMessage\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 3\n          },\n          \"sendNativeMessage\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"setUninstallURL\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"sessions\": {\n          \"getDevices\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getRecentlyClosed\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"restore\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          }\n        },\n        \"storage\": {\n          \"local\": {\n            \"clear\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 0\n            },\n            \"get\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"getBytesInUse\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"remove\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 1\n            },\n            \"set\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 1\n            }\n          },\n          \"managed\": {\n            \"get\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"getBytesInUse\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            }\n          },\n          \"sync\": {\n            \"clear\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 0\n            },\n            \"get\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"getBytesInUse\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"remove\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 1\n            },\n            \"set\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 1\n            }\n          }\n        },\n        \"tabs\": {\n          \"captureVisibleTab\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 2\n          },\n          \"create\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"detectLanguage\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"discard\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"duplicate\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"executeScript\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getCurrent\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"getZoom\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getZoomSettings\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"goBack\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"goForward\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"highlight\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"insertCSS\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"move\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"query\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"reload\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 2\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeCSS\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"sendMessage\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 3\n          },\n          \"setZoom\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"setZoomSettings\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"update\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          }\n        },\n        \"topSites\": {\n          \"get\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"webNavigation\": {\n          \"getAllFrames\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getFrame\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"webRequest\": {\n          \"handlerBehaviorChanged\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"windows\": {\n          \"create\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getCurrent\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getLastFocused\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"update\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          }\n        }\n      };\n\n      if (Object.keys(apiMetadata).length === 0) {\n        throw new Error(\"api-metadata.json has not been included in browser-polyfill\");\n      }\n      /**\n       * A WeakMap subclass which creates and stores a value for any key which does\n       * not exist when accessed, but behaves exactly as an ordinary WeakMap\n       * otherwise.\n       *\n       * @param {function} createItem\n       *        A function which will be called in order to create the value for any\n       *        key which does not exist, the first time it is accessed. The\n       *        function receives, as its only argument, the key being created.\n       */\n\n\n      class DefaultWeakMap extends WeakMap {\n        constructor(createItem, items = undefined) {\n          super(items);\n          this.createItem = createItem;\n        }\n\n        get(key) {\n          if (!this.has(key)) {\n            this.set(key, this.createItem(key));\n          }\n\n          return super.get(key);\n        }\n\n      }\n      /**\n       * Returns true if the given object is an object with a `then` method, and can\n       * therefore be assumed to behave as a Promise.\n       *\n       * @param {*} value The value to test.\n       * @returns {boolean} True if the value is thenable.\n       */\n\n\n      const isThenable = value => {\n        return value && typeof value === \"object\" && typeof value.then === \"function\";\n      };\n      /**\n       * Creates and returns a function which, when called, will resolve or reject\n       * the given promise based on how it is called:\n       *\n       * - If, when called, `chrome.runtime.lastError` contains a non-null object,\n       *   the promise is rejected with that value.\n       * - If the function is called with exactly one argument, the promise is\n       *   resolved to that value.\n       * - Otherwise, the promise is resolved to an array containing all of the\n       *   function's arguments.\n       *\n       * @param {object} promise\n       *        An object containing the resolution and rejection functions of a\n       *        promise.\n       * @param {function} promise.resolve\n       *        The promise's resolution function.\n       * @param {function} promise.rejection\n       *        The promise's rejection function.\n       * @param {object} metadata\n       *        Metadata about the wrapped method which has created the callback.\n       * @param {integer} metadata.maxResolvedArgs\n       *        The maximum number of arguments which may be passed to the\n       *        callback created by the wrapped async function.\n       *\n       * @returns {function}\n       *        The generated callback function.\n       */\n\n\n      const makeCallback = (promise, metadata) => {\n        return (...callbackArgs) => {\n          if (extensionAPIs.runtime.lastError) {\n            promise.reject(extensionAPIs.runtime.lastError);\n          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {\n            promise.resolve(callbackArgs[0]);\n          } else {\n            promise.resolve(callbackArgs);\n          }\n        };\n      };\n\n      const pluralizeArguments = numArgs => numArgs == 1 ? \"argument\" : \"arguments\";\n      /**\n       * Creates a wrapper function for a method with the given name and metadata.\n       *\n       * @param {string} name\n       *        The name of the method which is being wrapped.\n       * @param {object} metadata\n       *        Metadata about the method being wrapped.\n       * @param {integer} metadata.minArgs\n       *        The minimum number of arguments which must be passed to the\n       *        function. If called with fewer than this number of arguments, the\n       *        wrapper will raise an exception.\n       * @param {integer} metadata.maxArgs\n       *        The maximum number of arguments which may be passed to the\n       *        function. If called with more than this number of arguments, the\n       *        wrapper will raise an exception.\n       * @param {integer} metadata.maxResolvedArgs\n       *        The maximum number of arguments which may be passed to the\n       *        callback created by the wrapped async function.\n       *\n       * @returns {function(object, ...*)}\n       *       The generated wrapper function.\n       */\n\n\n      const wrapAsyncFunction = (name, metadata) => {\n        return function asyncFunctionWrapper(target, ...args) {\n          if (args.length < metadata.minArgs) {\n            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);\n          }\n\n          if (args.length > metadata.maxArgs) {\n            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);\n          }\n\n          return new Promise((resolve, reject) => {\n            if (metadata.fallbackToNoCallback) {\n              // This API method has currently no callback on Chrome, but it return a promise on Firefox,\n              // and so the polyfill will try to call it with a callback first, and it will fallback\n              // to not passing the callback if the first call fails.\n              try {\n                target[name](...args, makeCallback({\n                  resolve,\n                  reject\n                }, metadata));\n              } catch (cbError) {\n                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + \"falling back to call it without a callback: \", cbError);\n                target[name](...args); // Update the API method metadata, so that the next API calls will not try to\n                // use the unsupported callback anymore.\n\n                metadata.fallbackToNoCallback = false;\n                metadata.noCallback = true;\n                resolve();\n              }\n            } else if (metadata.noCallback) {\n              target[name](...args);\n              resolve();\n            } else {\n              target[name](...args, makeCallback({\n                resolve,\n                reject\n              }, metadata));\n            }\n          });\n        };\n      };\n      /**\n       * Wraps an existing method of the target object, so that calls to it are\n       * intercepted by the given wrapper function. The wrapper function receives,\n       * as its first argument, the original `target` object, followed by each of\n       * the arguments passed to the original method.\n       *\n       * @param {object} target\n       *        The original target object that the wrapped method belongs to.\n       * @param {function} method\n       *        The method being wrapped. This is used as the target of the Proxy\n       *        object which is created to wrap the method.\n       * @param {function} wrapper\n       *        The wrapper function which is called in place of a direct invocation\n       *        of the wrapped method.\n       *\n       * @returns {Proxy<function>}\n       *        A Proxy object for the given method, which invokes the given wrapper\n       *        method in its place.\n       */\n\n\n      const wrapMethod = (target, method, wrapper) => {\n        return new Proxy(method, {\n          apply(targetMethod, thisObj, args) {\n            return wrapper.call(thisObj, target, ...args);\n          }\n\n        });\n      };\n\n      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);\n      /**\n       * Wraps an object in a Proxy which intercepts and wraps certain methods\n       * based on the given `wrappers` and `metadata` objects.\n       *\n       * @param {object} target\n       *        The target object to wrap.\n       *\n       * @param {object} [wrappers = {}]\n       *        An object tree containing wrapper functions for special cases. Any\n       *        function present in this object tree is called in place of the\n       *        method in the same location in the `target` object tree. These\n       *        wrapper methods are invoked as described in {@see wrapMethod}.\n       *\n       * @param {object} [metadata = {}]\n       *        An object tree containing metadata used to automatically generate\n       *        Promise-based wrapper functions for asynchronous. Any function in\n       *        the `target` object tree which has a corresponding metadata object\n       *        in the same location in the `metadata` tree is replaced with an\n       *        automatically-generated wrapper function, as described in\n       *        {@see wrapAsyncFunction}\n       *\n       * @returns {Proxy<object>}\n       */\n\n      const wrapObject = (target, wrappers = {}, metadata = {}) => {\n        let cache = Object.create(null);\n        let handlers = {\n          has(proxyTarget, prop) {\n            return prop in target || prop in cache;\n          },\n\n          get(proxyTarget, prop, receiver) {\n            if (prop in cache) {\n              return cache[prop];\n            }\n\n            if (!(prop in target)) {\n              return undefined;\n            }\n\n            let value = target[prop];\n\n            if (typeof value === \"function\") {\n              // This is a method on the underlying object. Check if we need to do\n              // any wrapping.\n              if (typeof wrappers[prop] === \"function\") {\n                // We have a special-case wrapper for this method.\n                value = wrapMethod(target, target[prop], wrappers[prop]);\n              } else if (hasOwnProperty(metadata, prop)) {\n                // This is an async method that we have metadata for. Create a\n                // Promise wrapper for it.\n                let wrapper = wrapAsyncFunction(prop, metadata[prop]);\n                value = wrapMethod(target, target[prop], wrapper);\n              } else {\n                // This is a method that we don't know or care about. Return the\n                // original method, bound to the underlying object.\n                value = value.bind(target);\n              }\n            } else if (typeof value === \"object\" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {\n              // This is an object that we need to do some wrapping for the children\n              // of. Create a sub-object wrapper for it with the appropriate child\n              // metadata.\n              value = wrapObject(value, wrappers[prop], metadata[prop]);\n            } else if (hasOwnProperty(metadata, \"*\")) {\n              // Wrap all properties in * namespace.\n              value = wrapObject(value, wrappers[prop], metadata[\"*\"]);\n            } else {\n              // We don't need to do any wrapping for this property,\n              // so just forward all access to the underlying object.\n              Object.defineProperty(cache, prop, {\n                configurable: true,\n                enumerable: true,\n\n                get() {\n                  return target[prop];\n                },\n\n                set(value) {\n                  target[prop] = value;\n                }\n\n              });\n              return value;\n            }\n\n            cache[prop] = value;\n            return value;\n          },\n\n          set(proxyTarget, prop, value, receiver) {\n            if (prop in cache) {\n              cache[prop] = value;\n            } else {\n              target[prop] = value;\n            }\n\n            return true;\n          },\n\n          defineProperty(proxyTarget, prop, desc) {\n            return Reflect.defineProperty(cache, prop, desc);\n          },\n\n          deleteProperty(proxyTarget, prop) {\n            return Reflect.deleteProperty(cache, prop);\n          }\n\n        }; // Per contract of the Proxy API, the \"get\" proxy handler must return the\n        // original value of the target if that value is declared read-only and\n        // non-configurable. For this reason, we create an object with the\n        // prototype set to `target` instead of using `target` directly.\n        // Otherwise we cannot return a custom object for APIs that\n        // are declared read-only and non-configurable, such as `chrome.devtools`.\n        //\n        // The proxy handlers themselves will still use the original `target`\n        // instead of the `proxyTarget`, so that the methods and properties are\n        // dereferenced via the original targets.\n\n        let proxyTarget = Object.create(target);\n        return new Proxy(proxyTarget, handlers);\n      };\n      /**\n       * Creates a set of wrapper functions for an event object, which handles\n       * wrapping of listener functions that those messages are passed.\n       *\n       * A single wrapper is created for each listener function, and stored in a\n       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`\n       * retrieve the original wrapper, so that  attempts to remove a\n       * previously-added listener work as expected.\n       *\n       * @param {DefaultWeakMap<function, function>} wrapperMap\n       *        A DefaultWeakMap object which will create the appropriate wrapper\n       *        for a given listener function when one does not exist, and retrieve\n       *        an existing one when it does.\n       *\n       * @returns {object}\n       */\n\n\n      const wrapEvent = wrapperMap => ({\n        addListener(target, listener, ...args) {\n          target.addListener(wrapperMap.get(listener), ...args);\n        },\n\n        hasListener(target, listener) {\n          return target.hasListener(wrapperMap.get(listener));\n        },\n\n        removeListener(target, listener) {\n          target.removeListener(wrapperMap.get(listener));\n        }\n\n      }); // Keep track if the deprecation warning has been logged at least once.\n\n\n      let loggedSendResponseDeprecationWarning = false;\n      const onMessageWrappers = new DefaultWeakMap(listener => {\n        if (typeof listener !== \"function\") {\n          return listener;\n        }\n        /**\n         * Wraps a message listener function so that it may send responses based on\n         * its return value, rather than by returning a sentinel value and calling a\n         * callback. If the listener function returns a Promise, the response is\n         * sent when the promise either resolves or rejects.\n         *\n         * @param {*} message\n         *        The message sent by the other end of the channel.\n         * @param {object} sender\n         *        Details about the sender of the message.\n         * @param {function(*)} sendResponse\n         *        A callback which, when called with an arbitrary argument, sends\n         *        that value as a response.\n         * @returns {boolean}\n         *        True if the wrapped listener returned a Promise, which will later\n         *        yield a response. False otherwise.\n         */\n\n\n        return function onMessage(message, sender, sendResponse) {\n          let didCallSendResponse = false;\n          let wrappedSendResponse;\n          let sendResponsePromise = new Promise(resolve => {\n            wrappedSendResponse = function (response) {\n              if (!loggedSendResponseDeprecationWarning) {\n                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);\n                loggedSendResponseDeprecationWarning = true;\n              }\n\n              didCallSendResponse = true;\n              resolve(response);\n            };\n          });\n          let result;\n\n          try {\n            result = listener(message, sender, wrappedSendResponse);\n          } catch (err) {\n            result = Promise.reject(err);\n          }\n\n          const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called\n          // wrappedSendResponse synchronously, we can exit earlier\n          // because there will be no response sent from this listener.\n\n          if (result !== true && !isResultThenable && !didCallSendResponse) {\n            return false;\n          } // A small helper to send the message if the promise resolves\n          // and an error if the promise rejects (a wrapped sendMessage has\n          // to translate the message into a resolved promise or a rejected\n          // promise).\n\n\n          const sendPromisedResult = promise => {\n            promise.then(msg => {\n              // send the message value.\n              sendResponse(msg);\n            }, error => {\n              // Send a JSON representation of the error if the rejected value\n              // is an instance of error, or the object itself otherwise.\n              let message;\n\n              if (error && (error instanceof Error || typeof error.message === \"string\")) {\n                message = error.message;\n              } else {\n                message = \"An unexpected error occurred\";\n              }\n\n              sendResponse({\n                __mozWebExtensionPolyfillReject__: true,\n                message\n              });\n            }).catch(err => {\n              // Print an error on the console if unable to send the response.\n              console.error(\"Failed to send onMessage rejected reply\", err);\n            });\n          }; // If the listener returned a Promise, send the resolved value as a\n          // result, otherwise wait the promise related to the wrappedSendResponse\n          // callback to resolve and send it as a response.\n\n\n          if (isResultThenable) {\n            sendPromisedResult(result);\n          } else {\n            sendPromisedResult(sendResponsePromise);\n          } // Let Chrome know that the listener is replying.\n\n\n          return true;\n        };\n      });\n\n      const wrappedSendMessageCallback = ({\n        reject,\n        resolve\n      }, reply) => {\n        if (extensionAPIs.runtime.lastError) {\n          // Detect when none of the listeners replied to the sendMessage call and resolve\n          // the promise to undefined as in Firefox.\n          // See https://github.com/mozilla/webextension-polyfill/issues/130\n          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {\n            resolve();\n          } else {\n            reject(extensionAPIs.runtime.lastError);\n          }\n        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {\n          // Convert back the JSON representation of the error into\n          // an Error instance.\n          reject(new Error(reply.message));\n        } else {\n          resolve(reply);\n        }\n      };\n\n      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {\n        if (args.length < metadata.minArgs) {\n          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);\n        }\n\n        if (args.length > metadata.maxArgs) {\n          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);\n        }\n\n        return new Promise((resolve, reject) => {\n          const wrappedCb = wrappedSendMessageCallback.bind(null, {\n            resolve,\n            reject\n          });\n          args.push(wrappedCb);\n          apiNamespaceObj.sendMessage(...args);\n        });\n      };\n\n      const staticWrappers = {\n        runtime: {\n          onMessage: wrapEvent(onMessageWrappers),\n          onMessageExternal: wrapEvent(onMessageWrappers),\n          sendMessage: wrappedSendMessage.bind(null, \"sendMessage\", {\n            minArgs: 1,\n            maxArgs: 3\n          })\n        },\n        tabs: {\n          sendMessage: wrappedSendMessage.bind(null, \"sendMessage\", {\n            minArgs: 2,\n            maxArgs: 3\n          })\n        }\n      };\n      const settingMetadata = {\n        clear: {\n          minArgs: 1,\n          maxArgs: 1\n        },\n        get: {\n          minArgs: 1,\n          maxArgs: 1\n        },\n        set: {\n          minArgs: 1,\n          maxArgs: 1\n        }\n      };\n      apiMetadata.privacy = {\n        network: {\n          \"*\": settingMetadata\n        },\n        services: {\n          \"*\": settingMetadata\n        },\n        websites: {\n          \"*\": settingMetadata\n        }\n      };\n      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);\n    };\n\n    if (typeof chrome != \"object\" || !chrome || !chrome.runtime || !chrome.runtime.id) {\n      throw new Error(\"This script should only be loaded in a browser extension.\");\n    } // The build process adds a UMD wrapper around this file, which makes the\n    // `module` variable available.\n\n\n    module.exports = wrapAPIs(chrome);\n  } else {\n    module.exports = browser;\n  }\n});\n//# sourceMappingURL=browser-polyfill.js.map\n");

/***/ }),

/***/ 6252:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var SourceMapConsumer = __webpack_require__(9125).SourceMapConsumer;
var path = __webpack_require__(5622);

var fs;
try {
  fs = __webpack_require__(5747);
  if (!fs.existsSync || !fs.readFileSync) {
    // fs doesn't have all methods we need
    fs = null;
  }
} catch (err) {
  /* nop */
}

var bufferFrom = __webpack_require__(5420);

/**
 * Requires a module which is protected against bundler minification.
 *
 * @param {NodeModule} mod
 * @param {string} request
 */
function dynamicRequire(mod, request) {
  return mod.require(request);
}

// Only install once if called multiple times
var errorFormatterInstalled = false;
var uncaughtShimInstalled = false;

// If true, the caches are reset before a stack trace formatting operation
var emptyCacheBetweenOperations = false;

// Supports {browser, node, auto}
var environment = "auto";

// Maps a file path to a string containing the file contents
var fileContentsCache = {};

// Maps a file path to a source map for that file
var sourceMapCache = {};

// Regex for detecting source maps
var reSourceMap = /^data:application\/json[^,]+base64,/;

// Priority list of retrieve handlers
var retrieveFileHandlers = [];
var retrieveMapHandlers = [];

function isInBrowser() {
  if (environment === "browser")
    return true;
  if (environment === "node")
    return false;
  return ((typeof window !== 'undefined') && (typeof XMLHttpRequest === 'function') && !(window.require && window.module && window.process && window.process.type === "renderer"));
}

function hasGlobalProcessEventEmitter() {
  return ((typeof process === 'object') && (process !== null) && (typeof process.on === 'function'));
}

function handlerExec(list) {
  return function(arg) {
    for (var i = 0; i < list.length; i++) {
      var ret = list[i](arg);
      if (ret) {
        return ret;
      }
    }
    return null;
  };
}

var retrieveFile = handlerExec(retrieveFileHandlers);

retrieveFileHandlers.push(function(path) {
  // Trim the path to make sure there is no extra whitespace.
  path = path.trim();
  if (/^file:/.test(path)) {
    // existsSync/readFileSync can't handle file protocol, but once stripped, it works
    path = path.replace(/file:\/\/\/(\w:)?/, function(protocol, drive) {
      return drive ?
        '' : // file:///C:/dir/file -> C:/dir/file
        '/'; // file:///root-dir/file -> /root-dir/file
    });
  }
  if (path in fileContentsCache) {
    return fileContentsCache[path];
  }

  var contents = '';
  try {
    if (!fs) {
      // Use SJAX if we are in the browser
      var xhr = new XMLHttpRequest();
      xhr.open('GET', path, /** async */ false);
      xhr.send(null);
      if (xhr.readyState === 4 && xhr.status === 200) {
        contents = xhr.responseText;
      }
    } else if (fs.existsSync(path)) {
      // Otherwise, use the filesystem
      contents = fs.readFileSync(path, 'utf8');
    }
  } catch (er) {
    /* ignore any errors */
  }

  return fileContentsCache[path] = contents;
});

// Support URLs relative to a directory, but be careful about a protocol prefix
// in case we are in the browser (i.e. directories may start with "http://" or "file:///")
function supportRelativeURL(file, url) {
  if (!file) return url;
  var dir = path.dirname(file);
  var match = /^\w+:\/\/[^\/]*/.exec(dir);
  var protocol = match ? match[0] : '';
  var startPath = dir.slice(protocol.length);
  if (protocol && /^\/\w\:/.test(startPath)) {
    // handle file:///C:/ paths
    protocol += '/';
    return protocol + path.resolve(dir.slice(protocol.length), url).replace(/\\/g, '/');
  }
  return protocol + path.resolve(dir.slice(protocol.length), url);
}

function retrieveSourceMapURL(source) {
  var fileData;

  if (isInBrowser()) {
     try {
       var xhr = new XMLHttpRequest();
       xhr.open('GET', source, false);
       xhr.send(null);
       fileData = xhr.readyState === 4 ? xhr.responseText : null;

       // Support providing a sourceMappingURL via the SourceMap header
       var sourceMapHeader = xhr.getResponseHeader("SourceMap") ||
                             xhr.getResponseHeader("X-SourceMap");
       if (sourceMapHeader) {
         return sourceMapHeader;
       }
     } catch (e) {
     }
  }

  // Get the URL of the source map
  fileData = retrieveFile(source);
  var re = /(?:\/\/[@#][\s]*sourceMappingURL=([^\s'"]+)[\s]*$)|(?:\/\*[@#][\s]*sourceMappingURL=([^\s*'"]+)[\s]*(?:\*\/)[\s]*$)/mg;
  // Keep executing the search to find the *last* sourceMappingURL to avoid
  // picking up sourceMappingURLs from comments, strings, etc.
  var lastMatch, match;
  while (match = re.exec(fileData)) lastMatch = match;
  if (!lastMatch) return null;
  return lastMatch[1];
};

// Can be overridden by the retrieveSourceMap option to install. Takes a
// generated source filename; returns a {map, optional url} object, or null if
// there is no source map.  The map field may be either a string or the parsed
// JSON object (ie, it must be a valid argument to the SourceMapConsumer
// constructor).
var retrieveSourceMap = handlerExec(retrieveMapHandlers);
retrieveMapHandlers.push(function(source) {
  var sourceMappingURL = retrieveSourceMapURL(source);
  if (!sourceMappingURL) return null;

  // Read the contents of the source map
  var sourceMapData;
  if (reSourceMap.test(sourceMappingURL)) {
    // Support source map URL as a data url
    var rawData = sourceMappingURL.slice(sourceMappingURL.indexOf(',') + 1);
    sourceMapData = bufferFrom(rawData, "base64").toString();
    sourceMappingURL = source;
  } else {
    // Support source map URLs relative to the source URL
    sourceMappingURL = supportRelativeURL(source, sourceMappingURL);
    sourceMapData = retrieveFile(sourceMappingURL);
  }

  if (!sourceMapData) {
    return null;
  }

  return {
    url: sourceMappingURL,
    map: sourceMapData
  };
});

function mapSourcePosition(position) {
  var sourceMap = sourceMapCache[position.source];
  if (!sourceMap) {
    // Call the (overrideable) retrieveSourceMap function to get the source map.
    var urlAndMap = retrieveSourceMap(position.source);
    if (urlAndMap) {
      sourceMap = sourceMapCache[position.source] = {
        url: urlAndMap.url,
        map: new SourceMapConsumer(urlAndMap.map)
      };

      // Load all sources stored inline with the source map into the file cache
      // to pretend like they are already loaded. They may not exist on disk.
      if (sourceMap.map.sourcesContent) {
        sourceMap.map.sources.forEach(function(source, i) {
          var contents = sourceMap.map.sourcesContent[i];
          if (contents) {
            var url = supportRelativeURL(sourceMap.url, source);
            fileContentsCache[url] = contents;
          }
        });
      }
    } else {
      sourceMap = sourceMapCache[position.source] = {
        url: null,
        map: null
      };
    }
  }

  // Resolve the source URL relative to the URL of the source map
  if (sourceMap && sourceMap.map && typeof sourceMap.map.originalPositionFor === 'function') {
    var originalPosition = sourceMap.map.originalPositionFor(position);

    // Only return the original position if a matching line was found. If no
    // matching line is found then we return position instead, which will cause
    // the stack trace to print the path and line for the compiled file. It is
    // better to give a precise location in the compiled file than a vague
    // location in the original file.
    if (originalPosition.source !== null) {
      originalPosition.source = supportRelativeURL(
        sourceMap.url, originalPosition.source);
      return originalPosition;
    }
  }

  return position;
}

// Parses code generated by FormatEvalOrigin(), a function inside V8:
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js
function mapEvalOrigin(origin) {
  // Most eval() calls are in this format
  var match = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(origin);
  if (match) {
    var position = mapSourcePosition({
      source: match[2],
      line: +match[3],
      column: match[4] - 1
    });
    return 'eval at ' + match[1] + ' (' + position.source + ':' +
      position.line + ':' + (position.column + 1) + ')';
  }

  // Parse nested eval() calls using recursion
  match = /^eval at ([^(]+) \((.+)\)$/.exec(origin);
  if (match) {
    return 'eval at ' + match[1] + ' (' + mapEvalOrigin(match[2]) + ')';
  }

  // Make sure we still return useful information if we didn't find anything
  return origin;
}

// This is copied almost verbatim from the V8 source code at
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js. The
// implementation of wrapCallSite() used to just forward to the actual source
// code of CallSite.prototype.toString but unfortunately a new release of V8
// did something to the prototype chain and broke the shim. The only fix I
// could find was copy/paste.
function CallSiteToString() {
  var fileName;
  var fileLocation = "";
  if (this.isNative()) {
    fileLocation = "native";
  } else {
    fileName = this.getScriptNameOrSourceURL();
    if (!fileName && this.isEval()) {
      fileLocation = this.getEvalOrigin();
      fileLocation += ", ";  // Expecting source position to follow.
    }

    if (fileName) {
      fileLocation += fileName;
    } else {
      // Source code does not originate from a file and is not native, but we
      // can still get the source position inside the source string, e.g. in
      // an eval string.
      fileLocation += "<anonymous>";
    }
    var lineNumber = this.getLineNumber();
    if (lineNumber != null) {
      fileLocation += ":" + lineNumber;
      var columnNumber = this.getColumnNumber();
      if (columnNumber) {
        fileLocation += ":" + columnNumber;
      }
    }
  }

  var line = "";
  var functionName = this.getFunctionName();
  var addSuffix = true;
  var isConstructor = this.isConstructor();
  var isMethodCall = !(this.isToplevel() || isConstructor);
  if (isMethodCall) {
    var typeName = this.getTypeName();
    // Fixes shim to be backward compatable with Node v0 to v4
    if (typeName === "[object Object]") {
      typeName = "null";
    }
    var methodName = this.getMethodName();
    if (functionName) {
      if (typeName && functionName.indexOf(typeName) != 0) {
        line += typeName + ".";
      }
      line += functionName;
      if (methodName && functionName.indexOf("." + methodName) != functionName.length - methodName.length - 1) {
        line += " [as " + methodName + "]";
      }
    } else {
      line += typeName + "." + (methodName || "<anonymous>");
    }
  } else if (isConstructor) {
    line += "new " + (functionName || "<anonymous>");
  } else if (functionName) {
    line += functionName;
  } else {
    line += fileLocation;
    addSuffix = false;
  }
  if (addSuffix) {
    line += " (" + fileLocation + ")";
  }
  return line;
}

function cloneCallSite(frame) {
  var object = {};
  Object.getOwnPropertyNames(Object.getPrototypeOf(frame)).forEach(function(name) {
    object[name] = /^(?:is|get)/.test(name) ? function() { return frame[name].call(frame); } : frame[name];
  });
  object.toString = CallSiteToString;
  return object;
}

function wrapCallSite(frame, state) {
  // provides interface backward compatibility
  if (state === undefined) {
    state = { nextPosition: null, curPosition: null }
  }
  if(frame.isNative()) {
    state.curPosition = null;
    return frame;
  }

  // Most call sites will return the source file from getFileName(), but code
  // passed to eval() ending in "//# sourceURL=..." will return the source file
  // from getScriptNameOrSourceURL() instead
  var source = frame.getFileName() || frame.getScriptNameOrSourceURL();
  if (source) {
    var line = frame.getLineNumber();
    var column = frame.getColumnNumber() - 1;

    // Fix position in Node where some (internal) code is prepended.
    // See https://github.com/evanw/node-source-map-support/issues/36
    // Header removed in node at ^10.16 || >=11.11.0
    // v11 is not an LTS candidate, we can just test the one version with it.
    // Test node versions for: 10.16-19, 10.20+, 12-19, 20-99, 100+, or 11.11
    var noHeader = /^v(10\.1[6-9]|10\.[2-9][0-9]|10\.[0-9]{3,}|1[2-9]\d*|[2-9]\d|\d{3,}|11\.11)/;
    var headerLength = noHeader.test(process.version) ? 0 : 62;
    if (line === 1 && column > headerLength && !isInBrowser() && !frame.isEval()) {
      column -= headerLength;
    }

    var position = mapSourcePosition({
      source: source,
      line: line,
      column: column
    });
    state.curPosition = position;
    frame = cloneCallSite(frame);
    var originalFunctionName = frame.getFunctionName;
    frame.getFunctionName = function() {
      if (state.nextPosition == null) {
        return originalFunctionName();
      }
      return state.nextPosition.name || originalFunctionName();
    };
    frame.getFileName = function() { return position.source; };
    frame.getLineNumber = function() { return position.line; };
    frame.getColumnNumber = function() { return position.column + 1; };
    frame.getScriptNameOrSourceURL = function() { return position.source; };
    return frame;
  }

  // Code called using eval() needs special handling
  var origin = frame.isEval() && frame.getEvalOrigin();
  if (origin) {
    origin = mapEvalOrigin(origin);
    frame = cloneCallSite(frame);
    frame.getEvalOrigin = function() { return origin; };
    return frame;
  }

  // If we get here then we were unable to change the source position
  return frame;
}

// This function is part of the V8 stack trace API, for more info see:
// https://v8.dev/docs/stack-trace-api
function prepareStackTrace(error, stack) {
  if (emptyCacheBetweenOperations) {
    fileContentsCache = {};
    sourceMapCache = {};
  }

  var name = error.name || 'Error';
  var message = error.message || '';
  var errorString = name + ": " + message;

  var state = { nextPosition: null, curPosition: null };
  var processedStack = [];
  for (var i = stack.length - 1; i >= 0; i--) {
    processedStack.push('\n    at ' + wrapCallSite(stack[i], state));
    state.nextPosition = state.curPosition;
  }
  state.curPosition = state.nextPosition = null;
  return errorString + processedStack.reverse().join('');
}

// Generate position and snippet of original source with pointer
function getErrorSource(error) {
  var match = /\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(error.stack);
  if (match) {
    var source = match[1];
    var line = +match[2];
    var column = +match[3];

    // Support the inline sourceContents inside the source map
    var contents = fileContentsCache[source];

    // Support files on disk
    if (!contents && fs && fs.existsSync(source)) {
      try {
        contents = fs.readFileSync(source, 'utf8');
      } catch (er) {
        contents = '';
      }
    }

    // Format the line from the original source code like node does
    if (contents) {
      var code = contents.split(/(?:\r\n|\r|\n)/)[line - 1];
      if (code) {
        return source + ':' + line + '\n' + code + '\n' +
          new Array(column).join(' ') + '^';
      }
    }
  }
  return null;
}

function printErrorAndExit (error) {
  var source = getErrorSource(error);

  // Ensure error is printed synchronously and not truncated
  if (process.stderr._handle && process.stderr._handle.setBlocking) {
    process.stderr._handle.setBlocking(true);
  }

  if (source) {
    console.error();
    console.error(source);
  }

  console.error(error.stack);
  process.exit(1);
}

function shimEmitUncaughtException () {
  var origEmit = process.emit;

  process.emit = function (type) {
    if (type === 'uncaughtException') {
      var hasStack = (arguments[1] && arguments[1].stack);
      var hasListeners = (this.listeners(type).length > 0);

      if (hasStack && !hasListeners) {
        return printErrorAndExit(arguments[1]);
      }
    }

    return origEmit.apply(this, arguments);
  };
}

var originalRetrieveFileHandlers = retrieveFileHandlers.slice(0);
var originalRetrieveMapHandlers = retrieveMapHandlers.slice(0);

exports.wrapCallSite = wrapCallSite;
exports.getErrorSource = getErrorSource;
exports.mapSourcePosition = mapSourcePosition;
exports.retrieveSourceMap = retrieveSourceMap;

exports.install = function(options) {
  options = options || {};

  if (options.environment) {
    environment = options.environment;
    if (["node", "browser", "auto"].indexOf(environment) === -1) {
      throw new Error("environment " + environment + " was unknown. Available options are {auto, browser, node}")
    }
  }

  // Allow sources to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveFile) {
    if (options.overrideRetrieveFile) {
      retrieveFileHandlers.length = 0;
    }

    retrieveFileHandlers.unshift(options.retrieveFile);
  }

  // Allow source maps to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveSourceMap) {
    if (options.overrideRetrieveSourceMap) {
      retrieveMapHandlers.length = 0;
    }

    retrieveMapHandlers.unshift(options.retrieveSourceMap);
  }

  // Support runtime transpilers that include inline source maps
  if (options.hookRequire && !isInBrowser()) {
    // Use dynamicRequire to avoid including in browser bundles
    var Module = dynamicRequire(module, 'module');
    var $compile = Module.prototype._compile;

    if (!$compile.__sourceMapSupport) {
      Module.prototype._compile = function(content, filename) {
        fileContentsCache[filename] = content;
        sourceMapCache[filename] = undefined;
        return $compile.call(this, content, filename);
      };

      Module.prototype._compile.__sourceMapSupport = true;
    }
  }

  // Configure options
  if (!emptyCacheBetweenOperations) {
    emptyCacheBetweenOperations = 'emptyCacheBetweenOperations' in options ?
      options.emptyCacheBetweenOperations : false;
  }

  // Install the error reformatter
  if (!errorFormatterInstalled) {
    errorFormatterInstalled = true;
    Error.prepareStackTrace = prepareStackTrace;
  }

  if (!uncaughtShimInstalled) {
    var installHandler = 'handleUncaughtExceptions' in options ?
      options.handleUncaughtExceptions : true;

    // Do not override 'uncaughtException' with our own handler in Node.js
    // Worker threads. Workers pass the error to the main thread as an event,
    // rather than printing something to stderr and exiting.
    try {
      // We need to use `dynamicRequire` because `require` on it's own will be optimized by WebPack/Browserify.
      var worker_threads = dynamicRequire(module, 'worker_threads');
      if (worker_threads.isMainThread === false) {
        installHandler = false;
      }
    } catch(e) {}

    // Provide the option to not install the uncaught exception handler. This is
    // to support other uncaught exception handlers (in test frameworks, for
    // example). If this handler is not installed and there are no other uncaught
    // exception handlers, uncaught exceptions will be caught by node's built-in
    // exception handler and the process will still be terminated. However, the
    // generated JavaScript code will be shown above the stack trace instead of
    // the original source code.
    if (installHandler && hasGlobalProcessEventEmitter()) {
      uncaughtShimInstalled = true;
      shimEmitUncaughtException();
    }
  }
};

exports.resetRetrieveHandlers = function() {
  retrieveFileHandlers.length = 0;
  retrieveMapHandlers.length = 0;

  retrieveFileHandlers = originalRetrieveFileHandlers.slice(0);
  retrieveMapHandlers = originalRetrieveMapHandlers.slice(0);

  retrieveSourceMap = handlerExec(retrieveMapHandlers);
  retrieveFile = handlerExec(retrieveFileHandlers);
}


/***/ }),

/***/ 8213:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(2728);
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.I = ArraySet;


/***/ }),

/***/ 6400:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var base64 = __webpack_require__(7923);

// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};


/***/ }),

/***/ 7923:
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
exports.decode = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};


/***/ }),

/***/ 9216:
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};


/***/ }),

/***/ 1188:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(2728);

/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */
function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA ||
         util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}

/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */
function MappingList() {
  this._array = [];
  this._sorted = true;
  // Serves as infimum
  this._last = {generatedLine: -1, generatedColumn: 0};
}

/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */
MappingList.prototype.unsortedForEach =
  function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };

/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */
MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};

/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */
MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};

exports.H = MappingList;


/***/ }),

/***/ 2826:
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
exports.U = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};


/***/ }),

/***/ 6771:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(2728);
var binarySearch = __webpack_require__(9216);
var ArraySet = __webpack_require__(8213)/* .ArraySet */ .I;
var base64VLQ = __webpack_require__(6400);
var quickSort = __webpack_require__(2826)/* .quickSort */ .U;

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
    : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
}

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

exports.SourceMapConsumer = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);

  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }

  // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function (s) {
      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }

    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

__webpack_unused_export__ = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
  };

__webpack_unused_export__ = IndexedSourceMapConsumer;


/***/ }),

/***/ 4433:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var base64VLQ = __webpack_require__(6400);
var util = __webpack_require__(2728);
var ArraySet = __webpack_require__(8213)/* .ArraySet */ .I;
var MappingList = __webpack_require__(1188)/* .MappingList */ .H;

/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */
function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;

/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */
SourceMapGenerator.fromSourceMap =
  function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function (mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };

      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util.relative(sourceRoot, newMapping.source);
        }

        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };

        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }

      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var sourceRelative = sourceFile;
      if (sourceRoot !== null) {
        sourceRelative = util.relative(sourceRoot, sourceFile);
      }

      if (!generator._sources.has(sourceRelative)) {
        generator._sources.add(sourceRelative);
      }

      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };

/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */
SourceMapGenerator.prototype.addMapping =
  function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);

    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }

    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }

    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }

    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source: source,
      name: name
    });
  };

/**
 * Set the source content for a source file.
 */
SourceMapGenerator.prototype.setSourceContent =
  function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util.relative(this._sourceRoot, source);
    }

    if (aSourceContent != null) {
      // Add the source content to the _sourcesContents map.
      // Create a new _sourcesContents map if the property is null.
      if (!this._sourcesContents) {
        this._sourcesContents = Object.create(null);
      }
      this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      // Remove the source file from the _sourcesContents map.
      // If the _sourcesContents map is empty, set the property to null.
      delete this._sourcesContents[util.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };

/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */
SourceMapGenerator.prototype.applySourceMap =
  function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
          'or the source map\'s "file" property. Both were omitted.'
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) {
      sourceFile = util.relative(sourceRoot, sourceFile);
    }
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();

    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function (mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        // Check if it can be mapped by the source map, then update the mapping.
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          // Copy mapping
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util.join(aSourceMapPath, mapping.source)
          }
          if (sourceRoot != null) {
            mapping.source = util.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }

      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }

      var name = mapping.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }

    }, this);
    this._sources = newSources;
    this._names = newNames;

    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile = util.join(aSourceMapPath, sourceFile);
        }
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        this.setSourceContent(sourceFile, content);
      }
    }, this);
  };

/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */
SourceMapGenerator.prototype._validateMapping =
  function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                              aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
        throw new Error(
            'original.line and original.column are not numbers -- you probably meant to omit ' +
            'the original mapping entirely and only map the generated position. If so, pass ' +
            'null for the original mapping instead of an object with empty or null values.'
        );
    }

    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
        && aGenerated.line > 0 && aGenerated.column >= 0
        && !aOriginal && !aSource && !aName) {
      // Case 1.
      return;
    }
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
             && aOriginal && 'line' in aOriginal && 'column' in aOriginal
             && aGenerated.line > 0 && aGenerated.column >= 0
             && aOriginal.line > 0 && aOriginal.column >= 0
             && aSource) {
      // Cases 2 and 3.
      return;
    }
    else {
      throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };

/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */
SourceMapGenerator.prototype._serializeMappings =
  function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;

    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = ''

      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ';';
          previousGeneratedLine++;
        }
      }
      else {
        if (i > 0) {
          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ',';
        }
      }

      next += base64VLQ.encode(mapping.generatedColumn
                                 - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;

      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;

        // lines are stored 0-based in SourceMap spec version 3
        next += base64VLQ.encode(mapping.originalLine - 1
                                   - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;

        next += base64VLQ.encode(mapping.originalColumn
                                   - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;

        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }

      result += next;
    }

    return result;
  };

SourceMapGenerator.prototype._generateSourcesContent =
  function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function (source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util.relative(aSourceRoot, source);
      }
      var key = util.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
        ? this._sourcesContents[key]
        : null;
    }, this);
  };

/**
 * Externalize the source map.
 */
SourceMapGenerator.prototype.toJSON =
  function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }

    return map;
  };

/**
 * Render the source map being generated to a string.
 */
SourceMapGenerator.prototype.toString =
  function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };

exports.h = SourceMapGenerator;


/***/ }),

/***/ 7085:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var SourceMapGenerator = __webpack_require__(4433)/* .SourceMapGenerator */ .h;
var util = __webpack_require__(2728);

// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;

// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;

// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";

/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}

/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */
SourceNode.fromStringWithSourceMap =
  function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();

    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
      var lineContents = getNextLine();
      // The last line of a file might not have a newline.
      var newLine = getNextLine() || "";
      return lineContents + newLine;

      function getNextLine() {
        return remainingLinesIndex < remainingLines.length ?
            remainingLines[remainingLinesIndex++] : undefined;
      }
    };

    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;

    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;

    aSourceMapConsumer.eachMapping(function (mapping) {
      if (lastMapping !== null) {
        // We add the code from "lastMapping" to "mapping":
        // First check if there is a new line in between.
        if (lastGeneratedLine < mapping.generatedLine) {
          // Associate first line with "lastMapping"
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
          // The remaining code is added without mapping
        } else {
          // There is no new line in between.
          // Associate the code between "lastGeneratedColumn" and
          // "mapping.generatedColumn" with "lastMapping"
          var nextLine = remainingLines[remainingLinesIndex] || '';
          var code = nextLine.substr(0, mapping.generatedColumn -
                                        lastGeneratedColumn);
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn -
                                              lastGeneratedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
          addMappingWithCode(lastMapping, code);
          // No more remaining code, continue
          lastMapping = mapping;
          return;
        }
      }
      // We add the generated code until the first mapping
      // to the SourceNode without any mapping.
      // Each line is added as separate string.
      while (lastGeneratedLine < mapping.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping.generatedColumn) {
        var nextLine = remainingLines[remainingLinesIndex] || '';
        node.add(nextLine.substr(0, mapping.generatedColumn));
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
      }
      lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
      if (lastMapping) {
        // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      // and add the remaining lines without any mapping
      node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }

    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });

    return node;

    function addMappingWithCode(mapping, code) {
      if (mapping === null || mapping.source === undefined) {
        node.add(code);
      } else {
        var source = aRelativePath
          ? util.join(aRelativePath, mapping.source)
          : mapping.source;
        node.add(new SourceNode(mapping.originalLine,
                                mapping.originalColumn,
                                source,
                                code,
                                mapping.name));
      }
    }
  };

/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length-1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;
  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];
    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    }
    else {
      if (chunk !== '') {
        aFn(chunk, { source: this.source,
                     line: this.line,
                     column: this.column,
                     name: this.name });
      }
    }
  }
};

/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */
SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;
  if (len > 0) {
    newChildren = [];
    for (i = 0; i < len-1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }
    newChildren.push(this.children[i]);
    this.children = newChildren;
  }
  return this;
};

/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];
  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  }
  else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  }
  else {
    this.children.push(''.replace(aPattern, aReplacement));
  }
  return this;
};

/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */
SourceNode.prototype.setSourceContent =
  function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
  };

/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walkSourceContents =
  function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }

    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };

/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */
SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};

/**
 * Returns the string representation of this source node along with a source
 * map.
 */
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;
    if (original.source !== null
        && original.line !== null
        && original.column !== null) {
      if(lastOriginalSource !== original.source
         || lastOriginalLine !== original.line
         || lastOriginalColumn !== original.column
         || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }
      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }
    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0;
        // Mappings end at eol
        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });

  return { code: generated.code, map: map };
};

__webpack_unused_export__ = SourceNode;


/***/ }),

/***/ 2728:
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;


/***/ }),

/***/ 9125:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
/* unused reexport */ __webpack_require__(4433)/* .SourceMapGenerator */ .h;
exports.SourceMapConsumer = __webpack_require__(6771).SourceMapConsumer;
/* unused reexport */ __webpack_require__(7085);


/***/ }),

/***/ 5747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 3804:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__3804__;

/***/ }),

/***/ 2087:
/***/ ((module) => {

"use strict";
module.exports = require("os");;

/***/ }),

/***/ 5622:
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 2549:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__2549__;

/***/ }),

/***/ 1669:
/***/ ((module) => {

"use strict";
module.exports = require("util");;

/***/ }),

/***/ 4078:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__4078__;

/***/ }),

/***/ 3745:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__3745__;

/***/ }),

/***/ 2439:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__2439__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(9820);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvRXh0ZW5zaW9uUmVsb2FkZXIudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvY29uc3RhbnRzL2Zhc3QtcmVsb2FkaW5nLmNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy9jb25zdGFudHMvbG9nLmNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy9jb25zdGFudHMvbWlkZGxld2FyZS1jb25maWcuY29uc3RhbnRzLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vc3JjL2NvbnN0YW50cy9vcHRpb25zLmNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy9jb25zdGFudHMvcmVmZXJlbmNlLWRvY3MuY29uc3RhbnRzLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vc3JjL2hvdC1yZWxvYWQvSG90UmVsb2FkZXJTZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvaG90LXJlbG9hZC9TaWduRW1pdHRlci50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy9ob3QtcmVsb2FkL2NoYW5nZXMtdHJpZ2dlcmVyLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vc3JjL2hvdC1yZWxvYWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvbWVzc2FnZXMvTWVzc2FnZS50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy9tZXNzYWdlcy9lcnJvcnMudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvbWVzc2FnZXMvd2FybmluZ3MudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvbWlkZGxld2FyZS9pbmRleC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy9taWRkbGV3YXJlL21pZGRsZXdhcmUtaW5qZWN0b3IudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvbWlkZGxld2FyZS9taWRkbGV3YXJlLXNvdXJjZS1idWlsZGVyLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vc3JjL3V0aWxzL2Jsb2NrLXByb3RlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9zcmMvdXRpbHMvZGVmYXVsdC1vcHRpb25zLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vc3JjL3V0aWxzL2xvZ2dlci50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy91dGlscy9tYW5pZmVzdC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy91dGlscy9zaWduYWxzLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vc3JjL3dlYnBhY2svQWJzdHJhY3RFeHRlbnNpb25SZWxvYWRlci50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL3NyYy93ZWJwYWNrL0NvbXBpbGVyRXZlbnRzRmFjYWRlLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL2J1ZmZlci1mcm9tL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL2NvbG9ycy9saWIvY29sb3JzLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL2NvbG9ycy9saWIvY3VzdG9tL3RyYXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9jdXN0b20vemFsZ28uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9tYXBzL2FtZXJpY2EuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9tYXBzL3JhaW5ib3cuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9tYXBzL3JhbmRvbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9jb2xvcnMvbGliL21hcHMvemVicmEuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9zeXN0ZW0vaGFzLWZsYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9zeXN0ZW0vc3VwcG9ydHMtY29sb3JzLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL2NvbG9ycy9zYWZlLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vc3JjL21pZGRsZXdhcmUvd2VyLW1pZGRsZXdhcmUucmF3LnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1zdXBwb3J0L3NvdXJjZS1tYXAtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwL2xpYi9hcnJheS1zZXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC9saWIvYmFzZTY0LXZscS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwL2xpYi9iYXNlNjQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC9saWIvYmluYXJ5LXNlYXJjaC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwL2xpYi9tYXBwaW5nLWxpc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC9saWIvcXVpY2stc29ydC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwL2xpYi9zb3VyY2UtbWFwLWNvbnN1bWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAvbGliL3NvdXJjZS1tYXAtZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAvbGliL3NvdXJjZS1ub2RlLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC9zb3VyY2UtbWFwLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL2V4dGVybmFsIFwib3NcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci9leHRlcm5hbCBcInVzZXJhZ2VudFwiIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL2V4dGVybmFsIFwidXRpbFwiIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL2V4dGVybmFsIFwid2VicGFja1wiIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL2V4dGVybmFsIFwid2VicGFjay1zb3VyY2VzXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvZXh0ZXJuYWwgXCJ3c1wiIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZXh0ZW5zaW9uLXJlbG9hZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztJQU9xQixxQjs7Ozs7QUFJbkIsaUNBQVksT0FBWixFQUFvQztBQUFBOztBQUFBOztBQUNsQztBQUNBLFVBQUssS0FBTCxHQUFhLE9BQWI7QUFDQSxVQUFLLGNBQUwsR0FBc0IsRUFBdEI7QUFIa0M7QUFJbkM7Ozs7V0FFTSw0QkFBZ0I7QUFDckIsVUFBSSxpQkFBSixFQUFhO0FBQUEsb0NBQ0ssa0JBQVEsS0FBUixDQUFjLEdBQWQsQ0FETDtBQUFBO0FBQUEsWUFDSixLQURJOztBQUVYLFlBQUksUUFBUSxDQUFDLEtBQUQsRUFBUSxFQUFSLENBQVIsSUFBdUIsQ0FBM0IsRUFBOEI7QUFDNUIsaUJBQU8sSUFBUDtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNKQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7OztBQzlGRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBLG1C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QTtBQUNBLFlBQVk7QUFDWixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QixZQUFZLGtCQUFrQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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RWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE1BQU07QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0NBQWtDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNEQUFzRCxZQUFZO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdDQUF3QztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxtQkFBbUIsRUFBRTtBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixNQUFNO0FBQ25DO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyQkFBMkI7QUFDOUMscUJBQXFCLCtDQUErQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJCQUEyQjtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQSxxQkFBcUIsNEJBQTRCO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlCQUFnQzs7Ozs7Ozs7QUN4bkNoQyxnQkFBZ0Isb0JBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLG1CQUFPLENBQUMsSUFBYztBQUN0QyxXQUFXLG1CQUFPLENBQUMsSUFBUTtBQUMzQixlQUFlLDJDQUErQjtBQUM5QyxrQkFBa0IsOENBQXFDOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLFNBQVM7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQTBCOzs7Ozs7Ozs7QUN4YTFCLGdCQUFnQixvQkFBb0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIscURBQW9EO0FBQzdFLFdBQVcsbUJBQU8sQ0FBQyxJQUFROztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsUUFBUTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxTQUFTO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxjQUFjO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxVQUFVO0FBQ1Y7O0FBRUEseUJBQWtCOzs7Ozs7OztBQzVabEIsZ0JBQWdCLG9CQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7VUNKQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJ3ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcIndlYnBhY2tcIiksIHJlcXVpcmUoXCJ1c2VyYWdlbnRcIiksIHJlcXVpcmUoXCJ3c1wiKSwgcmVxdWlyZShcIndlYnBhY2stc291cmNlc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJsb2Rhc2hcIiwgXCJ3ZWJwYWNrXCIsIFwidXNlcmFnZW50XCIsIFwid3NcIiwgXCJ3ZWJwYWNrLXNvdXJjZXNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSwgcmVxdWlyZShcIndlYnBhY2tcIiksIHJlcXVpcmUoXCJ1c2VyYWdlbnRcIiksIHJlcXVpcmUoXCJ3c1wiKSwgcmVxdWlyZShcIndlYnBhY2stc291cmNlc1wiKSkgOiBmYWN0b3J5KHJvb3RbXCJsb2Rhc2hcIl0sIHJvb3RbXCJ3ZWJwYWNrXCJdLCByb290W1widXNlcmFnZW50XCJdLCByb290W1wid3NcIl0sIHJvb3RbXCJ3ZWJwYWNrLXNvdXJjZXNcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoZ2xvYmFsLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18zODA0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzQwNzhfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMjU0OV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18yNDM5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzM3NDVfXykge1xucmV0dXJuICIsImltcG9ydCB7IG1lcmdlIH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHtDb21waWxlciwgRW50cnksIHZlcnNpb24gfSBmcm9tIFwid2VicGFja1wiO1xuaW1wb3J0IHsgY2hhbmdlc1RyaWdnZXJlciB9IGZyb20gXCIuL2hvdC1yZWxvYWRcIjtcbmltcG9ydCB7IG9ubHlPbkRldmVsb3BtZW50TXNnIH0gZnJvbSBcIi4vbWVzc2FnZXMvd2FybmluZ3NcIjtcbmltcG9ydCB7IG1pZGRsZXdhcmVJbmplY3RvciB9IGZyb20gXCIuL21pZGRsZXdhcmVcIjtcbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tIFwiLi91dGlscy9kZWZhdWx0LW9wdGlvbnNcIjtcbmltcG9ydCB7IHdhcm4gfSBmcm9tIFwiLi91dGlscy9sb2dnZXJcIjtcbmltcG9ydCB7IGV4dHJhY3RFbnRyaWVzIH0gZnJvbSBcIi4vdXRpbHMvbWFuaWZlc3RcIjtcbmltcG9ydCBBYnN0cmFjdFBsdWdpblJlbG9hZGVyIGZyb20gXCIuL3dlYnBhY2svQWJzdHJhY3RFeHRlbnNpb25SZWxvYWRlclwiO1xuaW1wb3J0IENvbXBpbGVyRXZlbnRzRmFjYWRlIGZyb20gXCIuL3dlYnBhY2svQ29tcGlsZXJFdmVudHNGYWNhZGVcIjtcblxuaW1wb3J0IHtcbiAgSUV4dGVuc2lvblJlbG9hZGVySW5zdGFuY2UsXG4gIElQbHVnaW5PcHRpb25zLFxufSBmcm9tIFwiLi4vdHlwaW5ncy93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRlbnNpb25SZWxvYWRlckltcGwgZXh0ZW5kcyBBYnN0cmFjdFBsdWdpblJlbG9hZGVyXG4gIGltcGxlbWVudHMgSUV4dGVuc2lvblJlbG9hZGVySW5zdGFuY2Uge1xuICBwcml2YXRlIF9vcHRzPzogSVBsdWdpbk9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucz86IElQbHVnaW5PcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9vcHRzID0gb3B0aW9ucztcbiAgICB0aGlzLl9jaHVua1ZlcnNpb25zID0ge307XG4gIH1cblxuICBwdWJsaWMgX2lzV2VicGFja0dUb0VWNCgpIHtcbiAgICBpZiAodmVyc2lvbikge1xuICAgICAgY29uc3QgW21ham9yXSA9IHZlcnNpb24uc3BsaXQoXCIuXCIpO1xuICAgICAgaWYgKHBhcnNlSW50KG1ham9yLCAxMCkgPj0gNCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIF93aGF0Q2hhbmdlZChcbiAgICBjaHVua3M6IElXZWJwYWNrQ2h1bmtbXSxcbiAgICB7IGJhY2tncm91bmQsIGNvbnRlbnRTY3JpcHQsIGV4dGVuc2lvblBhZ2UgfTogSUVudHJpZXNPcHRpb24sXG4gICkge1xuICAgIGNvbnN0IGNoYW5nZWRDaHVua3MgPSBjaHVua3MuZmlsdGVyKCh7IG5hbWUsIGhhc2ggfSkgPT4ge1xuICAgICAgY29uc3Qgb2xkVmVyc2lvbiA9IHRoaXMuX2NodW5rVmVyc2lvbnNbbmFtZV07XG4gICAgICB0aGlzLl9jaHVua1ZlcnNpb25zW25hbWVdID0gaGFzaDtcbiAgICAgIHJldHVybiBoYXNoICE9PSBvbGRWZXJzaW9uO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGVudE9yQmdDaGFuZ2VkID0gY2hhbmdlZENodW5rcy5zb21lKCh7IG5hbWUgfSkgPT4ge1xuICAgICAgbGV0IGNvbnRlbnRDaGFuZ2VkID0gZmFsc2U7XG4gICAgICBjb25zdCBiZ0NoYW5nZWQgPSBuYW1lID09PSBiYWNrZ3JvdW5kO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjb250ZW50U2NyaXB0KSkge1xuICAgICAgICBjb250ZW50Q2hhbmdlZCA9IGNvbnRlbnRTY3JpcHQuc29tZShzY3JpcHQgPT4gc2NyaXB0ID09PSBuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gbmFtZSA9PT0gY29udGVudFNjcmlwdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnRDaGFuZ2VkIHx8IGJnQ2hhbmdlZDtcbiAgICB9KTtcblxuICAgIGNvbnN0IG9ubHlQYWdlQ2hhbmdlZCA9XG4gICAgICAhY29udGVudE9yQmdDaGFuZ2VkICYmXG4gICAgICBjaGFuZ2VkQ2h1bmtzLnNvbWUoKHsgbmFtZSB9KSA9PiB7XG4gICAgICAgIGxldCBwYWdlQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV4dGVuc2lvblBhZ2UpKSB7XG4gICAgICAgICAgcGFnZUNoYW5nZWQgPSBleHRlbnNpb25QYWdlLnNvbWUoc2NyaXB0ID0+IHNjcmlwdCA9PT0gbmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFnZUNoYW5nZWQgPSBuYW1lID09PSBleHRlbnNpb25QYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZ2VDaGFuZ2VkO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4geyBjb250ZW50T3JCZ0NoYW5nZWQsIG9ubHlQYWdlQ2hhbmdlZCB9O1xuICB9XG5cbiAgcHVibGljIF9yZWdpc3RlclBsdWdpbihjb21waWxlcjogQ29tcGlsZXIpIHtcbiAgICBjb25zdCB7IHJlbG9hZFBhZ2UsIHBvcnQsIGVudHJpZXMsIG1hbmlmZXN0IH0gPSBtZXJnZShcbiAgICAgIGRlZmF1bHRPcHRpb25zLFxuICAgICAgdGhpcy5fb3B0cyxcbiAgICApO1xuXG4gICAgY29uc3QgcGFyc2VkRW50cmllczogSUVudHJpZXNPcHRpb24gPSBtYW5pZmVzdFxuICAgICAgPyBleHRyYWN0RW50cmllcyhcbiAgICAgICAgICBjb21waWxlci5vcHRpb25zLmVudHJ5IGFzIEVudHJ5LFxuICAgICAgICAgIGNvbXBpbGVyLm9wdGlvbnMub3V0cHV0LmZpbGVuYW1lIGFzIHN0cmluZyxcbiAgICAgICAgICBtYW5pZmVzdCxcbiAgICAgICAgKVxuICAgICAgOiBlbnRyaWVzO1xuXG4gICAgdGhpcy5fZXZlbnRBUEkgPSBuZXcgQ29tcGlsZXJFdmVudHNGYWNhZGUoY29tcGlsZXIpO1xuICAgIHRoaXMuX2luamVjdG9yID0gbWlkZGxld2FyZUluamVjdG9yKHBhcnNlZEVudHJpZXMsIHsgcG9ydCwgcmVsb2FkUGFnZSB9KTtcbiAgICB0aGlzLl90cmlnZ2VyZXIgPSBjaGFuZ2VzVHJpZ2dlcmVyKHBvcnQsIHJlbG9hZFBhZ2UpO1xuICAgIHRoaXMuX2V2ZW50QVBJLmFmdGVyT3B0aW1pemVDaHVua0Fzc2V0cygoY29tcCwgY2h1bmtzKSA9PiB7XG4gICAgICBjb21wLmFzc2V0cyA9IHtcbiAgICAgICAgLi4uY29tcC5hc3NldHMsXG4gICAgICAgIC4uLnRoaXMuX2luamVjdG9yKGNvbXAuYXNzZXRzLCBjaHVua3MpLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2V2ZW50QVBJLmFmdGVyRW1pdCgoY29tcCwgZG9uZSkgPT4ge1xuICAgICAgY29uc3QgeyBjb250ZW50T3JCZ0NoYW5nZWQsIG9ubHlQYWdlQ2hhbmdlZCB9ID0gdGhpcy5fd2hhdENoYW5nZWQoXG4gICAgICAgIGNvbXAuY2h1bmtzLFxuICAgICAgICBwYXJzZWRFbnRyaWVzLFxuICAgICAgKTtcblxuICAgICAgaWYgKGNvbnRlbnRPckJnQ2hhbmdlZCB8fCBvbmx5UGFnZUNoYW5nZWQpIHtcbiAgICAgICAgdGhpcy5fdHJpZ2dlcmVyKG9ubHlQYWdlQ2hhbmdlZClcbiAgICAgICAgICAudGhlbihkb25lKVxuICAgICAgICAgIC5jYXRjaChkb25lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseShjb21waWxlcjogQ29tcGlsZXIpIHtcbiAgICBpZiAoXG4gICAgICAodGhpcy5faXNXZWJwYWNrR1RvRVY0KClcbiAgICAgICAgPyBjb21waWxlci5vcHRpb25zLm1vZGVcbiAgICAgICAgOiBwcm9jZXNzLmVudi5OT0RFX0VOVikgPT09IFwiZGV2ZWxvcG1lbnRcIlxuICAgICkge1xuICAgICAgdGhpcy5fcmVnaXN0ZXJQbHVnaW4oY29tcGlsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuKG9ubHlPbkRldmVsb3BtZW50TXNnLmdldCgpKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQ2hyb21lIGxldHMgb25seSBhIG1heCBudW1iZXIgb2YgY2FsbHMgaW4gYSB0aW1lIGZyYW1lXG4gKiBiZWZvcmUgYmxvY2sgdGhlIHBsdWdpbiBmb3IgYmUgcmVsb2FkaW5nIGl0c2VsZiB0byBtdWNoXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ydWJlbnNwZ2NhdmFsY2FudGUvd2VicGFjay1jaHJvbWUtZXh0ZW5zaW9uLXJlbG9hZGVyL2lzc3Vlcy8yXG4gKi9cbmV4cG9ydCBjb25zdCBGQVNUX1JFTE9BRF9ERUJPVU5DSU5HX0ZSQU1FID0gMjAwMDtcblxuZXhwb3J0IGNvbnN0IEZBU1RfUkVMT0FEX0NBTExTID0gNjtcbmV4cG9ydCBjb25zdCBGQVNUX1JFTE9BRF9XQUlUID0gMTAgKiAxMDAwO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xuXG4vKipcbiAqIEEgbmV3IHJlbG9hZGluZyByYXRlIHdhcyBjcmVhdGVkIGFmdGVyIG9wZW5pbmcgYSBidWcgdGlja2V0IG9uXG4gKiBDaHJvbWl1bSwgYW5kIHRoZSByZXZpc2lvbiB3YXMgbWVyZ2VkIHRvIG1hc3RlclxuICogQHNlZSBodHRwczovL2Nocm9taXVtLXJldmlldy5nb29nbGVzb3VyY2UuY29tL2MvY2hyb21pdW0vc3JjLysvMTM0MDI3MlxuICovXG5cbi8qKlxuICogVGhlIENocm9tZS9DaHJvbWl1bSB2ZXJzaW9uIG51bWJlciB0aGF0IGluY2x1ZGVzIHRoZSBuZXcgcmF0ZXNcbiAqIEBzZWUgaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2Nocm9taXVtLWZpbmQtcmVsZWFzZXMtc3RhdGljL2QzYi5odG1sI2QzYjI1ZTEzODA5ODRiMmYxZjIzZDBlOGRjMWEzMzc3NDNjNmNhYWZcbiAqL1xuZXhwb3J0IGNvbnN0IE5FV19GQVNUX1JFTE9BRF9DSFJPTUVfVkVSU0lPTjogQnJvd3NlclZlcnNpb24gPSBbNzMsIDAsIDM2MzddO1xuXG5leHBvcnQgY29uc3QgTkVXX0ZBU1RfUkVMT0FEX0RFQk9VTkNJTkdfRlJBTUUgPSAxMDAwO1xuZXhwb3J0IGNvbnN0IE5FV19GQVNUX1JFTE9BRF9DQUxMUyA9IDMwO1xuIiwiZXhwb3J0IGNvbnN0IE5PTkU6IExPR19OT05FID0gMDtcbmV4cG9ydCBjb25zdCBMT0c6IExPR19MT0cgPSAxO1xuZXhwb3J0IGNvbnN0IElORk86IExPR19JTkZPID0gMjtcbmV4cG9ydCBjb25zdCBXQVJOOiBMT0dfV0FSTiA9IDM7XG5leHBvcnQgY29uc3QgRVJST1I6IExPR19FUlJPUiA9IDQ7XG5leHBvcnQgY29uc3QgREVCVUc6IExPR19ERUJVRyA9IDU7XG4iLCJleHBvcnQgY29uc3QgUkVDT05ORUNUX0lOVEVSVkFMID0gMjAwMDtcbmV4cG9ydCBjb25zdCBTT0NLRVRfRVJSX0NPREVfUkVGID1cbiAgXCJodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjQ1NSNzZWN0aW9uLTcuNC4xXCI7XG4iLCJleHBvcnQgY29uc3QgREVGQVVMVF9QT1JUID0gOTA5MDtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0NPTkZJRyA9IFwid2VicGFjay5jb25maWcuanNcIjtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1JFTE9BRF9QQUdFID0gdHJ1ZTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0NPTlRFTlRfU0NSSVBUX0VOVFJZID0gXCJjb250ZW50LXNjcmlwdFwiO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQkFDS0dST1VORF9FTlRSWSA9IFwiYmFja2dyb3VuZFwiO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVhURU5TSU9OX1BBR0VfRU5UUlkgPSBcInBvcHVwXCI7XG4iLCJleHBvcnQgY29uc3QgUkVGX1VSTCA9XG4gIFwiaHR0cHM6Ly9naXRodWIuY29tL3J1YmVuc3BnY2F2YWxjYW50ZS93ZWJwYWNrLWV4dGVuc2lvbi1yZWxvYWRlci93aWtpL0dlbmVyYWwtSW5mb3JtYXRpb25cIjtcbiIsImltcG9ydCB7IHBhcnNlIH0gZnJvbSBcInVzZXJhZ2VudFwiO1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSBcIndzXCI7XG5pbXBvcnQgeyBpbmZvIH0gZnJvbSBcIi4uL3V0aWxzL2xvZ2dlclwiO1xuaW1wb3J0IFNpZ25FbWl0dGVyIGZyb20gXCIuL1NpZ25FbWl0dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdFJlbG9hZGVyU2VydmVyIHtcbiAgcHJpdmF0ZSBfc2VydmVyOiBTZXJ2ZXI7XG4gIHByaXZhdGUgX3NpZ25FbWl0dGVyOiBTaWduRW1pdHRlcjtcblxuICBjb25zdHJ1Y3Rvcihwb3J0OiBudW1iZXIpIHtcbiAgICB0aGlzLl9zZXJ2ZXIgPSBuZXcgU2VydmVyKHsgcG9ydCB9KTtcbiAgfVxuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5fc2VydmVyLm9uKFwiY29ubmVjdGlvblwiLCAod3MsIG1zZykgPT4ge1xuICAgICAgY29uc3QgdXNlckFnZW50ID0gcGFyc2UobXNnLmhlYWRlcnNbXCJ1c2VyLWFnZW50XCJdKTtcbiAgICAgIHRoaXMuX3NpZ25FbWl0dGVyID0gbmV3IFNpZ25FbWl0dGVyKHRoaXMuX3NlcnZlciwgdXNlckFnZW50KTtcblxuICAgICAgd3Mub24oXCJtZXNzYWdlXCIsIChkYXRhOiBzdHJpbmcpID0+XG4gICAgICAgIGluZm8oYE1lc3NhZ2UgZnJvbSAke3VzZXJBZ2VudC5mYW1pbHl9OiAke0pTT04ucGFyc2UoZGF0YSkucGF5bG9hZH1gKSxcbiAgICAgICk7XG4gICAgICB3cy5vbihcImVycm9yXCIsICgpID0+IHtcbiAgICAgICAgLy8gTk9PUCAtIHN3YWxsb3cgc29ja2V0IGVycm9ycyBkdWUgdG8gaHR0cDovL2dpdC5pby92YmhTTlxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2lnbkNoYW5nZShcbiAgICByZWxvYWRQYWdlOiBib29sZWFuLFxuICAgIG9ubHlQYWdlQ2hhbmdlZDogYm9vbGVhbixcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAodGhpcy5fc2lnbkVtaXR0ZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaWduRW1pdHRlci5zYWZlU2lnbkNoYW5nZShyZWxvYWRQYWdlLCBvbmx5UGFnZUNoYW5nZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgemlwIH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgQWdlbnQgfSBmcm9tIFwidXNlcmFnZW50XCI7XG5pbXBvcnQgeyBPUEVOLCBTZXJ2ZXIgfSBmcm9tIFwid3NcIjtcblxuaW1wb3J0IHtcbiAgRkFTVF9SRUxPQURfQ0FMTFMsXG4gIEZBU1RfUkVMT0FEX0RFQk9VTkNJTkdfRlJBTUUsXG4gIEZBU1RfUkVMT0FEX1dBSVQsXG4gIE5FV19GQVNUX1JFTE9BRF9DQUxMUyxcbiAgTkVXX0ZBU1RfUkVMT0FEX0NIUk9NRV9WRVJTSU9OLFxuICBORVdfRkFTVF9SRUxPQURfREVCT1VOQ0lOR19GUkFNRSxcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9mYXN0LXJlbG9hZGluZy5jb25zdGFudHNcIjtcbmltcG9ydCB7IGRlYm91bmNlU2lnbmFsLCBmYXN0UmVsb2FkQmxvY2tlciB9IGZyb20gXCIuLi91dGlscy9ibG9jay1wcm90ZWN0aW9uXCI7XG5pbXBvcnQgeyBzaWduQ2hhbmdlIH0gZnJvbSBcIi4uL3V0aWxzL3NpZ25hbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbkVtaXR0ZXIge1xuICBwcml2YXRlIF9zYWZlU2lnbkNoYW5nZTogKFxuICAgIHJlbG9hZFBhZ2U6IGJvb2xlYW4sXG4gICAgb25seVBhZ2VDaGFuZ2VkOiBib29sZWFuLFxuICAgIG9uU3VjY2VzczogKCkgPT4gdm9pZCxcbiAgICBvbkVycm9yOiAoZXJyOiBFcnJvcikgPT4gdm9pZCxcbiAgKSA9PiB2b2lkO1xuICBwcml2YXRlIF9zZXJ2ZXI6IFNlcnZlcjtcblxuICBjb25zdHJ1Y3RvcihzZXJ2ZXI6IFNlcnZlciwgeyBmYW1pbHksIG1ham9yLCBtaW5vciwgcGF0Y2ggfTogQWdlbnQpIHtcbiAgICB0aGlzLl9zZXJ2ZXIgPSBzZXJ2ZXI7XG4gICAgaWYgKGZhbWlseSA9PT0gXCJDaHJvbWVcIikge1xuICAgICAgY29uc3QgW3JlbG9hZENhbGxzLCByZWxvYWREZWJvdWNpbmdGcmFtZV0gPSB0aGlzLl9zYXRpc2ZpZXMoXG4gICAgICAgIFtwYXJzZUludChtYWpvciwgMTApLCBwYXJzZUludChtaW5vciwgMTApLCBwYXJzZUludChwYXRjaCwgMTApXSxcbiAgICAgICAgTkVXX0ZBU1RfUkVMT0FEX0NIUk9NRV9WRVJTSU9OLFxuICAgICAgKVxuICAgICAgICA/IFtORVdfRkFTVF9SRUxPQURfQ0FMTFMsIE5FV19GQVNUX1JFTE9BRF9ERUJPVU5DSU5HX0ZSQU1FXVxuICAgICAgICA6IFtGQVNUX1JFTE9BRF9DQUxMUywgRkFTVF9SRUxPQURfREVCT1VOQ0lOR19GUkFNRV07XG5cbiAgICAgIGNvbnN0IGRlYm91bmNlciA9IGRlYm91bmNlU2lnbmFsKHJlbG9hZERlYm91Y2luZ0ZyYW1lLCB0aGlzKTtcbiAgICAgIGNvbnN0IGJsb2NrZXIgPSBmYXN0UmVsb2FkQmxvY2tlcihyZWxvYWRDYWxscywgRkFTVF9SRUxPQURfV0FJVCwgdGhpcyk7XG4gICAgICB0aGlzLl9zYWZlU2lnbkNoYW5nZSA9IGRlYm91bmNlcihibG9ja2VyKHRoaXMuX3NldHVwU2FmZVNpZ25DaGFuZ2UoKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zYWZlU2lnbkNoYW5nZSA9IHRoaXMuX3NldHVwU2FmZVNpZ25DaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2FmZVNpZ25DaGFuZ2UoXG4gICAgcmVsb2FkUGFnZTogYm9vbGVhbixcbiAgICBvbmx5UGFnZUNoYW5nZWQ6IGJvb2xlYW4sXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXMsIHJlaikgPT4ge1xuICAgICAgdGhpcy5fc2FmZVNpZ25DaGFuZ2UocmVsb2FkUGFnZSwgb25seVBhZ2VDaGFuZ2VkLCByZXMsIHJlaik7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXR1cFNhZmVTaWduQ2hhbmdlKCkge1xuICAgIHJldHVybiAoXG4gICAgICByZWxvYWRQYWdlOiBib29sZWFuLFxuICAgICAgb25seVBhZ2VDaGFuZ2VkOiBib29sZWFuLFxuICAgICAgb25TdWNjZXNzOiAoKSA9PiB2b2lkLFxuICAgICAgb25FcnJvcjogKGVycjogRXJyb3IpID0+IHZvaWQsXG4gICAgKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9zZW5kTXNnKHNpZ25DaGFuZ2UoeyByZWxvYWRQYWdlLCBvbmx5UGFnZUNoYW5nZWQgfSkpO1xuICAgICAgICBvblN1Y2Nlc3MoKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBvbkVycm9yKGVycik7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX3NlbmRNc2cobXNnOiBhbnkpIHtcbiAgICB0aGlzLl9zZXJ2ZXIuY2xpZW50cy5mb3JFYWNoKGNsaWVudCA9PiB7XG4gICAgICBpZiAoY2xpZW50LnJlYWR5U3RhdGUgPT09IE9QRU4pIHtcbiAgICAgICAgY2xpZW50LnNlbmQoSlNPTi5zdHJpbmdpZnkobXNnKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zYXRpc2ZpZXMoXG4gICAgYnJvd3NlclZlcnNpb246IEJyb3dzZXJWZXJzaW9uLFxuICAgIHRhcmdldFZlcnNpb246IEJyb3dzZXJWZXJzaW9uLFxuICApIHtcbiAgICBjb25zdCB2ZXJzaW9uUGFpcnM6IFZlcnNpb25QYWlyW10gPSB6aXAoYnJvd3NlclZlcnNpb24sIHRhcmdldFZlcnNpb24pO1xuXG4gICAgZm9yIChjb25zdCBbdmVyc2lvbiA9IDAsIHRhcmdldCA9IDBdIG9mIHZlcnNpb25QYWlycykge1xuICAgICAgaWYgKHZlcnNpb24gIT09IHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdmVyc2lvbiA+IHRhcmdldDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluZm8gfSBmcm9tIFwiLi4vdXRpbHMvbG9nZ2VyXCI7XG5pbXBvcnQgSG90UmVsb2FkZXJTZXJ2ZXIgZnJvbSBcIi4vSG90UmVsb2FkZXJTZXJ2ZXJcIjtcblxuY29uc3QgY2hhbmdlc1RyaWdnZXJlcjogVHJpZ2dlcmVyRmFjdG9yeSA9IChcbiAgcG9ydDogbnVtYmVyLFxuICByZWxvYWRQYWdlOiBib29sZWFuLFxuKSA9PiB7XG4gIGNvbnN0IHNlcnZlciA9IG5ldyBIb3RSZWxvYWRlclNlcnZlcihwb3J0KTtcblxuICBpbmZvKFwiWyBTdGFydGluZyB0aGUgSG90IEV4dGVuc2lvbiBSZWxvYWQgU2VydmVyLi4uIF1cIik7XG4gIHNlcnZlci5saXN0ZW4oKTtcblxuICByZXR1cm4gKG9ubHlQYWdlQ2hhbmdlZDogYm9vbGVhbik6IFByb21pc2U8YW55PiA9PiB7XG4gICAgcmV0dXJuIHNlcnZlci5zaWduQ2hhbmdlKHJlbG9hZFBhZ2UsIG9ubHlQYWdlQ2hhbmdlZCk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGFuZ2VzVHJpZ2dlcmVyO1xuIiwiaW1wb3J0IF9jaGFuZ2VzVHJpZ2dlcmVyIGZyb20gXCIuL2NoYW5nZXMtdHJpZ2dlcmVyXCI7XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VzVHJpZ2dlcmVyID0gX2NoYW5nZXNUcmlnZ2VyZXI7XG4iLCJpbXBvcnQge2luc3RhbGx9IGZyb20gXCJzb3VyY2UtbWFwLXN1cHBvcnRcIjtcbmltcG9ydCB7REVCVUcsIEVSUk9SLCBOT05FfSBmcm9tIFwiLi9jb25zdGFudHMvbG9nLmNvbnN0YW50c1wiO1xuaW1wb3J0IEV4dGVuc2lvblJlbG9hZGVySW1wbCBmcm9tIFwiLi9FeHRlbnNpb25SZWxvYWRlclwiO1xuaW1wb3J0IHtzZXRMb2dMZXZlbH0gZnJvbSBcIi4vdXRpbHMvbG9nZ2VyXCI7XG5cbmluc3RhbGwoKTtcblxuY29uc3QgbG9nTGV2ZWw6IExPR19MRVZFTCA9IHtcblx0ZGV2ZWxvcG1lbnQ6IERFQlVHLFxuXHRwcm9kdWN0aW9uOiBFUlJPUixcblx0dGVzdDogTk9ORSxcbn1bcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPz8gRVJST1JdO1xuXG5cbnNldExvZ0xldmVsKGxvZ0xldmVsKTtcbmV4cG9ydCA9IEV4dGVuc2lvblJlbG9hZGVySW1wbDtcbiIsImltcG9ydCB7IGJvbGQsIHdoaXRlIH0gZnJvbSBcImNvbG9ycy9zYWZlXCI7XG5pbXBvcnQgeyB0ZW1wbGF0ZSB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IEVSUk9SLCBJTkZPLCBXQVJOIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9sb2cuY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBSRUZfVVJMIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9yZWZlcmVuY2UtZG9jcy5jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSB7XG4gIHByaXZhdGUgcmVmZXJlbmNlTnVtYmVyOiBudW1iZXI7XG4gIHByaXZhdGUgdHlwZTogTE9HX0lORk8gfCBMT0dfV0FSTiB8IExPR19FUlJPUjtcbiAgcHJpdmF0ZSBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodHlwZSwgcmVmZXJlbmNlTnVtYmVyLCBtZXNzYWdlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnJlZmVyZW5jZU51bWJlciA9IHJlZmVyZW5jZU51bWJlcjtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG5cbiAgcHVibGljIGdldChhZGRpdGlvbmFsRGF0YTogb2JqZWN0ID0ge30pIHtcbiAgICBjb25zdCBjb2RlID0gYFdFUi0ke3RoaXMuZ2V0UHJlZml4KCl9JHt0aGlzLnJlZmVyZW5jZU51bWJlcn1gO1xuICAgIGNvbnN0IHJlZkxpbmsgPSBib2xkKHdoaXRlKGAke1JFRl9VUkx9IyR7Y29kZX1gKSk7XG4gICAgcmV0dXJuIGBbJHtjb2RlfV0gJHt0ZW1wbGF0ZShcbiAgICAgIHRoaXMubWVzc2FnZSxcbiAgICAgIGFkZGl0aW9uYWxEYXRhLFxuICAgICl9LlxcblZpc2l0ICR7cmVmTGlua30gZm9yIGNvbXBsZXRlIGRldGFpbHNcXG5gO1xuICB9XG5cbiAgcHVibGljIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcmVmaXgoKSB7XG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgSU5GTzpcbiAgICAgICAgcmV0dXJuIFwiSVwiO1xuICAgICAgY2FzZSBXQVJOOlxuICAgICAgICByZXR1cm4gXCJXXCI7XG4gICAgICBjYXNlIEVSUk9SOlxuICAgICAgICByZXR1cm4gXCJFXCI7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBFUlJPUiB9IGZyb20gXCIuLi9jb25zdGFudHMvbG9nLmNvbnN0YW50c1wiO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4vTWVzc2FnZVwiO1xuXG5leHBvcnQgY29uc3QgYmdTY3JpcHRFbnRyeUVycm9yTXNnID0gbmV3IE1lc3NhZ2UoXG4gIEVSUk9SLFxuICAxLFxuICBcIkJhY2tncm91bmQgc2NyaXB0IHdlYnBhY2sgZW50cnkgbm90IGZvdW5kL21hdGNoIFxcXG50aGUgcHJvdmlkZWQgb24gJ21hbmlmZXN0Lmpzb24nIG9yICdlbnRyeS5iYWNrZ3JvdW5kJyBcXFxub3B0aW9uIG9mIHRoZSBwbHVnaW5cIixcbik7XG5cbmV4cG9ydCBjb25zdCBiZ1NjcmlwdE1hbmlmZXN0UmVxdWlyZWRNc2cgPSBuZXcgTWVzc2FnZShcbiAgRVJST1IsXG4gIDIsXG4gIFwiQmFja2dyb3VuZCBzY3JpcHQgb24gbWFuaWZlc3QgaXMgcmVxdWlyZWRcIixcbik7XG4iLCJpbXBvcnQgeyBXQVJOIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9sb2cuY29uc3RhbnRzXCI7XG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi9NZXNzYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBvbmx5T25EZXZlbG9wbWVudE1zZyA9IG5ldyBNZXNzYWdlKFxuICBXQVJOLFxuICAxLFxuICBcIldhcm5pbmcsIEV4dGVuc2lvbiBSZWxvYWRlciBQbHVnaW4gd2FzIG5vdCBlbmFibGVkISBcXFxuSXQgcnVucyBvbmx5IG9uIHdlYnBhY2sgLS1tb2RlPWRldmVsb3BtZW50ICh2NCBvciBtb3JlKSBcXFxub3Igd2l0aCBOT0RFX0VOVj1kZXZlbG9wbWVudCAobG93ZXIgdmVyc2lvbnMpXCIsXG4pO1xuIiwiaW1wb3J0IF9taWRkbGV3YXJlSW5qZWN0b3IgZnJvbSBcIi4vbWlkZGxld2FyZS1pbmplY3RvclwiO1xuXG5leHBvcnQgY29uc3QgbWlkZGxld2FyZUluamVjdG9yID0gX21pZGRsZXdhcmVJbmplY3RvcjtcbiIsImltcG9ydCB7IENvbmNhdFNvdXJjZSwgU291cmNlIH0gZnJvbSBcIndlYnBhY2stc291cmNlc1wiO1xuaW1wb3J0IHsgU291cmNlRmFjdG9yeSB9IGZyb20gXCIuLi8uLi90eXBpbmdzXCI7XG5pbXBvcnQgbWlkZGxlV2FyZVNvdXJjZUJ1aWxkZXIgZnJvbSBcIi4vbWlkZGxld2FyZS1zb3VyY2UtYnVpbGRlclwiO1xuXG5jb25zdCBtaWRkbGV3YXJlSW5qZWN0b3I6IE1pZGRsZXdhcmVJbmplY3RvciA9IChcbiAgeyBiYWNrZ3JvdW5kLCBjb250ZW50U2NyaXB0LCBleHRlbnNpb25QYWdlIH0sXG4gIHsgcG9ydCwgcmVsb2FkUGFnZSB9LFxuKSA9PiB7XG4gIGNvbnN0IHNvdXJjZTogU291cmNlID0gbWlkZGxlV2FyZVNvdXJjZUJ1aWxkZXIoeyBwb3J0LCByZWxvYWRQYWdlIH0pO1xuICBjb25zdCBzb3VyY2VGYWN0b3J5OiBTb3VyY2VGYWN0b3J5ID0gKC4uLnNvdXJjZXMpOiBTb3VyY2UgPT5cbiAgICBuZXcgQ29uY2F0U291cmNlKC4uLnNvdXJjZXMpO1xuXG4gIGNvbnN0IG1hdGNoQmdPckNvbnRlbnRPclBhZ2UgPSAobmFtZTogc3RyaW5nKSA9PlxuICAgIG5hbWUgPT09IGJhY2tncm91bmQgfHxcbiAgICBuYW1lID09PSBjb250ZW50U2NyaXB0IHx8XG4gICAgKGNvbnRlbnRTY3JpcHQgJiYgY29udGVudFNjcmlwdC5pbmNsdWRlcyhuYW1lKSkgfHxcbiAgICBuYW1lID09PSBleHRlbnNpb25QYWdlIHx8XG4gICAgKGV4dGVuc2lvblBhZ2UgJiYgZXh0ZW5zaW9uUGFnZS5pbmNsdWRlcyhuYW1lKSk7XG5cbiAgcmV0dXJuIChhc3NldHMsIGNodW5rcykgPT5cbiAgICBjaHVua3MucmVkdWNlKChwcmV2LCB7IG5hbWUsIGZpbGVzIH0pID0+IHtcbiAgICAgIGlmIChtYXRjaEJnT3JDb250ZW50T3JQYWdlKG5hbWUpKSB7XG4gICAgICAgIGZpbGVzLmZvckVhY2goZW50cnlQb2ludCA9PiB7XG4gICAgICAgICAgaWYgKC9cXC5qcyQvLnRlc3QoZW50cnlQb2ludCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsU3JjID0gc291cmNlRmFjdG9yeShzb3VyY2UsIGFzc2V0c1tlbnRyeVBvaW50XSk7XG4gICAgICAgICAgICBwcmV2W2VudHJ5UG9pbnRdID0gZmluYWxTcmM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH0sIHt9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1pZGRsZXdhcmVJbmplY3RvcjtcbiIsImltcG9ydCB7IHRlbXBsYXRlIH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHJhd1NvdXJjZSBmcm9tIFwicmF3LWxvYWRlciEuL3dlci1taWRkbGV3YXJlLnJhd1wiO1xuaW1wb3J0IHBvbHlmaWxsU291cmNlIGZyb20gXCJyYXctbG9hZGVyIXdlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiO1xuaW1wb3J0IHsgUmF3U291cmNlLCBTb3VyY2UgfSBmcm9tIFwid2VicGFjay1zb3VyY2VzXCI7XG5cbmltcG9ydCB7XG4gIFJFQ09OTkVDVF9JTlRFUlZBTCxcbiAgU09DS0VUX0VSUl9DT0RFX1JFRixcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9taWRkbGV3YXJlLWNvbmZpZy5jb25zdGFudHNcIjtcbmltcG9ydCAqIGFzIHNpZ25hbHMgZnJvbSBcIi4uL3V0aWxzL3NpZ25hbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWlkZGxlV2FyZVNvdXJjZUJ1aWxkZXIoe1xuICBwb3J0LFxuICByZWxvYWRQYWdlLFxufTogSU1pZGRsZXdhcmVUZW1wbGF0ZVBhcmFtcyk6IFNvdXJjZSB7XG4gIGNvbnN0IHRtcGwgPSB0ZW1wbGF0ZShyYXdTb3VyY2UpO1xuXG4gIHJldHVybiBuZXcgUmF3U291cmNlKFxuICAgIHRtcGwoe1xuICAgICAgV1NIb3N0OiBgd3M6Ly9sb2NhbGhvc3Q6JHtwb3J0fWAsXG4gICAgICBjb25maWc6IEpTT04uc3RyaW5naWZ5KHsgUkVDT05ORUNUX0lOVEVSVkFMLCBTT0NLRVRfRVJSX0NPREVfUkVGIH0pLFxuICAgICAgcG9seWZpbGxTb3VyY2U6IGBcInx8JHtwb2x5ZmlsbFNvdXJjZX1cImAsXG4gICAgICByZWxvYWRQYWdlOiBgJHtyZWxvYWRQYWdlfWAsXG4gICAgICBzaWduYWxzOiBKU09OLnN0cmluZ2lmeShzaWduYWxzKSxcbiAgICB9KSxcbiAgKTtcbn1cbiIsImltcG9ydCB7IGRlYm91bmNlLCBydW5JbkNvbnRleHQgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBpbmZvLCB3YXJuIH0gZnJvbSBcIi4vbG9nZ2VyXCI7XG5cbmV4cG9ydCBjb25zdCBkZWJvdW5jZVNpZ25hbCA9IChkZWJvdWNpbmdGcmFtZTogbnVtYmVyLCBjb250ZXh0Pzogb2JqZWN0KSA9PiAoXG4gIGZ1bmM6ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55LFxuKSA9PiB7XG4gIGlmIChjb250ZXh0KSB7XG4gICAgcnVuSW5Db250ZXh0KGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGRlYm91bmNlKCguLi5hcmdzKSA9PiB7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gIH0sIGRlYm91Y2luZ0ZyYW1lKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmYXN0UmVsb2FkQmxvY2tlciA9IChtYXhDYWxsczogbnVtYmVyLCB3YWl0OiBudW1iZXIsIGNvbnRleHQpID0+IChcbiAgZnVuYzogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnksXG4pID0+IHtcbiAgbGV0IGNhbGxzID0gMDtcbiAgbGV0IGluV2FpdCA9IGZhbHNlO1xuXG4gIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgIGlmIChpbldhaXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNhbGxzID09PSBtYXhDYWxscykge1xuICAgICAgY2FsbHMgPSAwO1xuICAgICAgaW5XYWl0ID0gdHJ1ZTtcblxuICAgICAgbGV0IGludGVydmFsID0gd2FpdCAvIDEwMDA7XG4gICAgICB3YXJuKFxuICAgICAgICBgUGxlYXNlIHdhaXQgJHtpbnRlcnZhbH0gc2Vjcy4gZm9yIG5leHQgcmVsb2FkIHRvIHByZXZlbnQgeW91ciBleHRlbnNpb24gYmVpbmcgYmxvY2tlZGAsXG4gICAgICApO1xuICAgICAgY29uc3QgbG9nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB3YXJuKGAkey0taW50ZXJ2YWx9IC4uLmApLCAxMDAwKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwobG9nSW50ZXJ2YWwpO1xuICAgICAgICBpbmZvKFwiU2lnbmluZyBmb3IgcmVsb2FkIG5vd1wiKTtcbiAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgaW5XYWl0ID0gZmFsc2U7XG4gICAgICB9LCB3YWl0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbHMrKztcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH1cbiAgfTtcbn07XG4iLCJpbXBvcnQge1xuICBERUZBVUxUX0JBQ0tHUk9VTkRfRU5UUlksXG4gIERFRkFVTFRfQ09OVEVOVF9TQ1JJUFRfRU5UUlksXG4gIERFRkFVTFRfRVhURU5TSU9OX1BBR0VfRU5UUlksXG4gIERFRkFVTFRfUE9SVCxcbiAgREVGQVVMVF9SRUxPQURfUEFHRSxcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9vcHRpb25zLmNvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGVudHJpZXM6IHtcbiAgICBiYWNrZ3JvdW5kOiBERUZBVUxUX0JBQ0tHUk9VTkRfRU5UUlksXG4gICAgY29udGVudFNjcmlwdDogREVGQVVMVF9DT05URU5UX1NDUklQVF9FTlRSWSxcbiAgICBleHRlbnNpb25QYWdlOiBERUZBVUxUX0VYVEVOU0lPTl9QQUdFX0VOVFJZLFxuICB9LFxuICBwb3J0OiBERUZBVUxUX1BPUlQsXG4gIHJlbG9hZFBhZ2U6IERFRkFVTFRfUkVMT0FEX1BBR0UsXG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6IG5vLWNvbnNvbGVcbmltcG9ydCB7IGdyZWVuLCByZWQsIHdoaXRlLCB5ZWxsb3cgfSBmcm9tIFwiY29sb3JzL3NhZmVcIjtcbmltcG9ydCB7IERFQlVHLCBFUlJPUiwgSU5GTywgTE9HLCBXQVJOIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9sb2cuY29uc3RhbnRzXCI7XG5cbmxldCBsb2dMZXZlbDtcbmV4cG9ydCBjb25zdCBzZXRMb2dMZXZlbCA9IChsZXZlbDogTE9HX0xFVkVMKSA9PiAobG9nTGV2ZWwgPSBsZXZlbCk7XG5cbmV4cG9ydCBjb25zdCBsb2cgPSAobWVzc2FnZTogc3RyaW5nKSA9PiBsb2dMZXZlbCA+PSBMT0cgJiYgY29uc29sZS5sb2cobWVzc2FnZSk7XG5leHBvcnQgY29uc3QgaW5mbyA9IChtZXNzYWdlOiBzdHJpbmcpID0+XG4gIGxvZ0xldmVsID49IElORk8gJiYgY29uc29sZS5pbmZvKGdyZWVuKG1lc3NhZ2UpKTtcbmV4cG9ydCBjb25zdCB3YXJuID0gKG1lc3NhZ2U6IHN0cmluZykgPT5cbiAgbG9nTGV2ZWwgPj0gV0FSTiAmJiBjb25zb2xlLndhcm4oeWVsbG93KG1lc3NhZ2UpKTtcbmV4cG9ydCBjb25zdCBlcnJvciA9IChtZXNzYWdlOiBzdHJpbmcpID0+XG4gIGxvZ0xldmVsID49IEVSUk9SICYmIGNvbnNvbGUuZXJyb3IocmVkKG1lc3NhZ2UpKTtcbmV4cG9ydCBjb25zdCBkZWJ1ZyA9IChtZXNzYWdlOiBzdHJpbmcpID0+XG4gIGxvZ0xldmVsID49IERFQlVHICYmIGNvbnNvbGUuZGVidWcod2hpdGUoZGVidWcobWVzc2FnZSkpKTtcbiIsImltcG9ydCB7cmVhZEZpbGVTeW5jfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB7ZmxhdE1hcERlZXB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7RW50cnl9IGZyb20gXCJ3ZWJwYWNrXCI7XG5pbXBvcnQge1xuXHRiZ1NjcmlwdEVudHJ5RXJyb3JNc2csXG5cdGJnU2NyaXB0TWFuaWZlc3RSZXF1aXJlZE1zZyxcbn0gZnJvbSBcIi4uL21lc3NhZ2VzL2Vycm9yc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE91dHB1dCB7XG5cdGZpbGVuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEVudHJpZXMoXG5cdHdlYnBhY2tFbnRyeTogRW50cnksXG5cdGZpbGVuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQsXG5cdG1hbmlmZXN0UGF0aDogc3RyaW5nLFxuKTogSUVudHJpZXNPcHRpb24ge1xuXHRjb25zdCBtYW5pZmVzdEpzb24gPSBKU09OLnBhcnNlKFxuXHRcdHJlYWRGaWxlU3luYyhtYW5pZmVzdFBhdGgpLnRvU3RyaW5nKCksXG5cdCkgYXMgSUV4dGVuc2lvbk1hbmlmZXN0O1xuXHRjb25zdCB7YmFja2dyb3VuZCwgY29udGVudF9zY3JpcHRzfSA9IG1hbmlmZXN0SnNvbjtcblxuXHRpZighZmlsZW5hbWUpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoKTtcblx0fVxuXG5cdGlmKCFiYWNrZ3JvdW5kPy5zY3JpcHRzKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihiZ1NjcmlwdE1hbmlmZXN0UmVxdWlyZWRNc2cuZ2V0KCkpO1xuXHR9XG5cblx0Y29uc3QgYmdTY3JpcHRGaWxlTmFtZXMgPSBiYWNrZ3JvdW5kLnNjcmlwdHM7XG5cdGNvbnN0IHRvUmVtb3ZlID0gKGZpbGVuYW1lIGFzIHN0cmluZykucmVwbGFjZShcIltuYW1lXVwiLCBcIlwiKTtcblxuXHRjb25zdCBiZ1dlYnBhY2tFbnRyeSA9IE9iamVjdC5rZXlzKHdlYnBhY2tFbnRyeSkuZmluZChlbnRyeU5hbWUgPT5cblx0XHRiZ1NjcmlwdEZpbGVOYW1lcy5zb21lKFxuXHRcdFx0YmdNYW5pZmVzdCA9PiBiZ01hbmlmZXN0LnJlcGxhY2UodG9SZW1vdmUsIFwiXCIpID09PSBlbnRyeU5hbWUsXG5cdFx0KSxcblx0KTtcblxuXHRpZighYmdXZWJwYWNrRW50cnkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGJnU2NyaXB0RW50cnlFcnJvck1zZy5nZXQoKSk7XG5cdH1cblxuXHRjb25zdCBjb250ZW50RW50cmllczogdW5rbm93biA9IGNvbnRlbnRfc2NyaXB0c1xuXHRcdD8gZmxhdE1hcERlZXAoT2JqZWN0LmtleXMod2VicGFja0VudHJ5KSwgZW50cnlOYW1lID0+XG5cdFx0XHRjb250ZW50X3NjcmlwdHMubWFwKCh7anN9KSA9PlxuXHRcdFx0XHRqc1xuXHRcdFx0XHRcdC5tYXAoY29udGVudEl0ZW0gPT4gY29udGVudEl0ZW0ucmVwbGFjZSh0b1JlbW92ZSwgXCJcIikpXG5cdFx0XHRcdFx0LmZpbHRlcihjb250ZW50SXRlbSA9PiBjb250ZW50SXRlbSA9PT0gZW50cnlOYW1lKSxcblx0XHRcdCksXG5cdFx0KVxuXHRcdDogbnVsbDtcblx0cmV0dXJuIHtcblx0XHRiYWNrZ3JvdW5kOiBiZ1dlYnBhY2tFbnRyeSxcblx0XHRjb250ZW50U2NyaXB0OiBjb250ZW50RW50cmllcyBhcyBzdHJpbmdbXSxcblx0XHRleHRlbnNpb25QYWdlOiBudWxsLFxuXHR9O1xufVxuIiwiZXhwb3J0IGNvbnN0IFNJR05fQ0hBTkdFOiBBY3Rpb25UeXBlID0gXCJTSUdOX0NIQU5HRVwiO1xuZXhwb3J0IGNvbnN0IFNJR05fUkVMT0FEOiBBY3Rpb25UeXBlID0gXCJTSUdOX1JFTE9BRFwiO1xuZXhwb3J0IGNvbnN0IFNJR05fUkVMT0FERUQ6IEFjdGlvblR5cGUgPSBcIlNJR05fUkVMT0FERURcIjtcbmV4cG9ydCBjb25zdCBTSUdOX0xPRzogQWN0aW9uVHlwZSA9IFwiU0lHTl9MT0dcIjtcbmV4cG9ydCBjb25zdCBTSUdOX0NPTk5FQ1Q6IEFjdGlvblR5cGUgPSBcIlNJR05fQ09OTkVDVFwiO1xuXG5leHBvcnQgY29uc3Qgc2lnbkNoYW5nZTogQWN0aW9uRmFjdG9yeSA9ICh7XG4gIHJlbG9hZFBhZ2UgPSB0cnVlLFxuICBvbmx5UGFnZUNoYW5nZWQgPSBmYWxzZSxcbn0pID0+ICh7XG4gIHBheWxvYWQ6IHsgcmVsb2FkUGFnZSwgb25seVBhZ2VDaGFuZ2VkIH0sXG4gIHR5cGU6IFNJR05fQ0hBTkdFLFxufSk7XG5leHBvcnQgY29uc3Qgc2lnblJlbG9hZDogQWN0aW9uRmFjdG9yeSA9ICgpID0+ICh7IHR5cGU6IFNJR05fUkVMT0FEIH0pO1xuZXhwb3J0IGNvbnN0IHNpZ25SZWxvYWRlZDogQWN0aW9uRmFjdG9yeSA9IChtc2c6IHN0cmluZykgPT4gKHtcbiAgcGF5bG9hZDogbXNnLFxuICB0eXBlOiBTSUdOX1JFTE9BREVELFxufSk7XG5leHBvcnQgY29uc3Qgc2lnbkxvZzogQWN0aW9uRmFjdG9yeSA9IChtc2c6IHN0cmluZykgPT4gKHtcbiAgcGF5bG9hZDogbXNnLFxuICB0eXBlOiBTSUdOX0xPRyxcbn0pO1xuIiwiaW1wb3J0IHsgQ29tcGlsZXIgfSBmcm9tIFwid2VicGFja1wiO1xuaW1wb3J0IENvbXBpbGVyRXZlbnRzRmFjYWRlIGZyb20gXCIuL0NvbXBpbGVyRXZlbnRzRmFjYWRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RXh0ZW5zaW9uUmVsb2FkZXIge1xuICBwdWJsaWMgY29udGV4dDogYW55O1xuICBwcm90ZWN0ZWQgX2luamVjdG9yOiBJbmplY3RNaWRkbGV3YXJlO1xuICBwcm90ZWN0ZWQgX3RyaWdnZXJlcjogVHJpZ2dlcmVyO1xuICBwcm90ZWN0ZWQgX2V2ZW50QVBJOiBDb21waWxlckV2ZW50c0ZhY2FkZTtcbiAgcHJvdGVjdGVkIF9jaHVua1ZlcnNpb25zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuXG4gIHB1YmxpYyBhYnN0cmFjdCBhcHBseShjb21waWxlcjogQ29tcGlsZXIpO1xufVxuIiwiaW1wb3J0IHsgQ29tcGlsZXIgfSBmcm9tIFwid2VicGFja1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21waWxlckV2ZW50c0ZhY2FkZSB7XG4gIHB1YmxpYyBzdGF0aWMgZXh0ZW5zaW9uTmFtZSA9IFwid2VicGFjay1leHRlbnNpb24tcmVsb2FkZXJcIjtcbiAgcHJpdmF0ZSBfY29tcGlsZXI6IENvbXBpbGVyO1xuXG4gIGNvbnN0cnVjdG9yKGNvbXBpbGVyKSB7XG4gICAgdGhpcy5fY29tcGlsZXIgPSBjb21waWxlcjtcbiAgfVxuXG4gIHB1YmxpYyBhZnRlck9wdGltaXplQ2h1bmtBc3NldHMoY2FsbCkge1xuICAgIHJldHVybiB0aGlzLl9jb21waWxlci5ob29rcy5jb21waWxhdGlvbi50YXAoXG4gICAgICAgICAgQ29tcGlsZXJFdmVudHNGYWNhZGUuZXh0ZW5zaW9uTmFtZSxcbiAgICAgICAgICBjb21wID0+XG4gICAgICAgICAgICBjb21wLmhvb2tzLmFmdGVyT3B0aW1pemVDaHVua0Fzc2V0cy50YXAoXG4gICAgICAgICAgICAgIENvbXBpbGVyRXZlbnRzRmFjYWRlLmV4dGVuc2lvbk5hbWUsXG4gICAgICAgICAgICAgIGNodW5rcyA9PiBjYWxsKGNvbXAsIGNodW5rcyksXG4gICAgICAgICAgICApLFxuICAgICAgICApO1xuICB9XG5cbiAgcHVibGljIGFmdGVyRW1pdChjYWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBpbGVyLmhvb2tzLmFmdGVyRW1pdC50YXAoXG4gICAgICAgICAgQ29tcGlsZXJFdmVudHNGYWNhZGUuZXh0ZW5zaW9uTmFtZSxcbiAgICAgICAgICBjYWxsLFxuICAgICAgICApO1xuICB9XG59XG4iLCJ2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbnZhciBpc01vZGVybiA9IChcbiAgdHlwZW9mIEJ1ZmZlci5hbGxvYyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgQnVmZmVyLmFsbG9jVW5zYWZlID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBCdWZmZXIuZnJvbSA9PT0gJ2Z1bmN0aW9uJ1xuKVxuXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyIChpbnB1dCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpbnB1dCkuc2xpY2UoOCwgLTEpID09PSAnQXJyYXlCdWZmZXInXG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAob2JqLCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgYnl0ZU9mZnNldCA+Pj49IDBcblxuICB2YXIgbWF4TGVuZ3RoID0gb2JqLmJ5dGVMZW5ndGggLSBieXRlT2Zmc2V0XG5cbiAgaWYgKG1heExlbmd0aCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIidvZmZzZXQnIGlzIG91dCBvZiBib3VuZHNcIilcbiAgfVxuXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IG1heExlbmd0aFxuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA+Pj49IDBcblxuICAgIGlmIChsZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiJ2xlbmd0aCcgaXMgb3V0IG9mIGJvdW5kc1wiKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc01vZGVyblxuICAgID8gQnVmZmVyLmZyb20ob2JqLnNsaWNlKGJ5dGVPZmZzZXQsIGJ5dGVPZmZzZXQgKyBsZW5ndGgpKVxuICAgIDogbmV3IEJ1ZmZlcihuZXcgVWludDhBcnJheShvYmouc2xpY2UoYnl0ZU9mZnNldCwgYnl0ZU9mZnNldCArIGxlbmd0aCkpKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHJldHVybiBpc01vZGVyblxuICAgID8gQnVmZmVyLmZyb20oc3RyaW5nLCBlbmNvZGluZylcbiAgICA6IG5ldyBCdWZmZXIoc3RyaW5nLCBlbmNvZGluZylcbn1cblxuZnVuY3Rpb24gYnVmZmVyRnJvbSAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cblxuICBpZiAoaXNBcnJheUJ1ZmZlcih2YWx1ZSkpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0KVxuICB9XG5cbiAgcmV0dXJuIGlzTW9kZXJuXG4gICAgPyBCdWZmZXIuZnJvbSh2YWx1ZSlcbiAgICA6IG5ldyBCdWZmZXIodmFsdWUpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnVmZmVyRnJvbVxuIiwiLypcblxuVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbk9yaWdpbmFsIExpYnJhcnlcbiAgLSBDb3B5cmlnaHQgKGMpIE1hcmFrIFNxdWlyZXNcblxuQWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5XG4gLSBDb3B5cmlnaHQgKGMpIFNpbmRyZSBTb3JodXMgPHNpbmRyZXNvcmh1c0BnbWFpbC5jb20+IChzaW5kcmVzb3JodXMuY29tKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG5cbiovXG5cbnZhciBjb2xvcnMgPSB7fTtcbm1vZHVsZVsnZXhwb3J0cyddID0gY29sb3JzO1xuXG5jb2xvcnMudGhlbWVzID0ge307XG5cbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xudmFyIGFuc2lTdHlsZXMgPSBjb2xvcnMuc3R5bGVzID0gcmVxdWlyZSgnLi9zdHlsZXMnKTtcbnZhciBkZWZpbmVQcm9wcyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzO1xudmFyIG5ld0xpbmVSZWdleCA9IG5ldyBSZWdFeHAoL1tcXHJcXG5dKy9nKTtcblxuY29sb3JzLnN1cHBvcnRzQ29sb3IgPSByZXF1aXJlKCcuL3N5c3RlbS9zdXBwb3J0cy1jb2xvcnMnKS5zdXBwb3J0c0NvbG9yO1xuXG5pZiAodHlwZW9mIGNvbG9ycy5lbmFibGVkID09PSAndW5kZWZpbmVkJykge1xuICBjb2xvcnMuZW5hYmxlZCA9IGNvbG9ycy5zdXBwb3J0c0NvbG9yKCkgIT09IGZhbHNlO1xufVxuXG5jb2xvcnMuZW5hYmxlID0gZnVuY3Rpb24oKSB7XG4gIGNvbG9ycy5lbmFibGVkID0gdHJ1ZTtcbn07XG5cbmNvbG9ycy5kaXNhYmxlID0gZnVuY3Rpb24oKSB7XG4gIGNvbG9ycy5lbmFibGVkID0gZmFsc2U7XG59O1xuXG5jb2xvcnMuc3RyaXBDb2xvcnMgPSBjb2xvcnMuc3RyaXAgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuICgnJyArIHN0cikucmVwbGFjZSgvXFx4MUJcXFtcXGQrbS9nLCAnJyk7XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbnZhciBzdHlsaXplID0gY29sb3JzLnN0eWxpemUgPSBmdW5jdGlvbiBzdHlsaXplKHN0ciwgc3R5bGUpIHtcbiAgaWYgKCFjb2xvcnMuZW5hYmxlZCkge1xuICAgIHJldHVybiBzdHIrJyc7XG4gIH1cblxuICB2YXIgc3R5bGVNYXAgPSBhbnNpU3R5bGVzW3N0eWxlXTtcblxuICAvLyBTdHlsaXplIHNob3VsZCB3b3JrIGZvciBub24tQU5TSSBzdHlsZXMsIHRvb1xuICBpZighc3R5bGVNYXAgJiYgc3R5bGUgaW4gY29sb3JzKXtcbiAgICAvLyBTdHlsZSBtYXBzIGxpa2UgdHJhcCBvcGVyYXRlIGFzIGZ1bmN0aW9ucyBvbiBzdHJpbmdzO1xuICAgIC8vIHRoZXkgZG9uJ3QgaGF2ZSBwcm9wZXJ0aWVzIGxpa2Ugb3BlbiBvciBjbG9zZS5cbiAgICByZXR1cm4gY29sb3JzW3N0eWxlXShzdHIpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlTWFwLm9wZW4gKyBzdHIgKyBzdHlsZU1hcC5jbG9zZTtcbn07XG5cbnZhciBtYXRjaE9wZXJhdG9yc1JlID0gL1t8XFxcXHt9KClbXFxdXiQrKj8uXS9nO1xudmFyIGVzY2FwZVN0cmluZ1JlZ2V4cCA9IGZ1bmN0aW9uKHN0cikge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZycpO1xuICB9XG4gIHJldHVybiBzdHIucmVwbGFjZShtYXRjaE9wZXJhdG9yc1JlLCAnXFxcXCQmJyk7XG59O1xuXG5mdW5jdGlvbiBidWlsZChfc3R5bGVzKSB7XG4gIHZhciBidWlsZGVyID0gZnVuY3Rpb24gYnVpbGRlcigpIHtcbiAgICByZXR1cm4gYXBwbHlTdHlsZS5hcHBseShidWlsZGVyLCBhcmd1bWVudHMpO1xuICB9O1xuICBidWlsZGVyLl9zdHlsZXMgPSBfc3R5bGVzO1xuICAvLyBfX3Byb3RvX18gaXMgdXNlZCBiZWNhdXNlIHdlIG11c3QgcmV0dXJuIGEgZnVuY3Rpb24sIGJ1dCB0aGVyZSBpc1xuICAvLyBubyB3YXkgdG8gY3JlYXRlIGEgZnVuY3Rpb24gd2l0aCBhIGRpZmZlcmVudCBwcm90b3R5cGUuXG4gIGJ1aWxkZXIuX19wcm90b19fID0gcHJvdG87XG4gIHJldHVybiBidWlsZGVyO1xufVxuXG52YXIgc3R5bGVzID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgcmV0ID0ge307XG4gIGFuc2lTdHlsZXMuZ3JleSA9IGFuc2lTdHlsZXMuZ3JheTtcbiAgT2JqZWN0LmtleXMoYW5zaVN0eWxlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBhbnNpU3R5bGVzW2tleV0uY2xvc2VSZSA9XG4gICAgICBuZXcgUmVnRXhwKGVzY2FwZVN0cmluZ1JlZ2V4cChhbnNpU3R5bGVzW2tleV0uY2xvc2UpLCAnZycpO1xuICAgIHJldFtrZXldID0ge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGJ1aWxkKHRoaXMuX3N0eWxlcy5jb25jYXQoa2V5KSk7XG4gICAgICB9LFxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufSkoKTtcblxudmFyIHByb3RvID0gZGVmaW5lUHJvcHMoZnVuY3Rpb24gY29sb3JzKCkge30sIHN0eWxlcyk7XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGUoKSB7XG4gIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICB2YXIgc3RyID0gYXJncy5tYXAoZnVuY3Rpb24oYXJnKSB7XG4gICAgLy8gVXNlIHdlYWsgZXF1YWxpdHkgY2hlY2sgc28gd2UgY2FuIGNvbG9yaXplIG51bGwvdW5kZWZpbmVkIGluIHNhZmUgbW9kZVxuICAgIGlmIChhcmcgIT0gbnVsbCAmJiBhcmcuY29uc3RydWN0b3IgPT09IFN0cmluZykge1xuICAgICAgcmV0dXJuIGFyZztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHV0aWwuaW5zcGVjdChhcmcpO1xuICAgIH1cbiAgfSkuam9pbignICcpO1xuXG4gIGlmICghY29sb3JzLmVuYWJsZWQgfHwgIXN0cikge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICB2YXIgbmV3TGluZXNQcmVzZW50ID0gc3RyLmluZGV4T2YoJ1xcbicpICE9IC0xO1xuXG4gIHZhciBuZXN0ZWRTdHlsZXMgPSB0aGlzLl9zdHlsZXM7XG5cbiAgdmFyIGkgPSBuZXN0ZWRTdHlsZXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIGNvZGUgPSBhbnNpU3R5bGVzW25lc3RlZFN0eWxlc1tpXV07XG4gICAgc3RyID0gY29kZS5vcGVuICsgc3RyLnJlcGxhY2UoY29kZS5jbG9zZVJlLCBjb2RlLm9wZW4pICsgY29kZS5jbG9zZTtcbiAgICBpZiAobmV3TGluZXNQcmVzZW50KSB7XG4gICAgICBzdHIgPSBzdHIucmVwbGFjZShuZXdMaW5lUmVnZXgsIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBjb2RlLmNsb3NlICsgbWF0Y2ggKyBjb2RlLm9wZW47XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyO1xufVxuXG5jb2xvcnMuc2V0VGhlbWUgPSBmdW5jdGlvbih0aGVtZSkge1xuICBpZiAodHlwZW9mIHRoZW1lID09PSAnc3RyaW5nJykge1xuICAgIGNvbnNvbGUubG9nKCdjb2xvcnMuc2V0VGhlbWUgbm93IG9ubHkgYWNjZXB0cyBhbiBvYmplY3QsIG5vdCBhIHN0cmluZy4gICcgK1xuICAgICAgJ0lmIHlvdSBhcmUgdHJ5aW5nIHRvIHNldCBhIHRoZW1lIGZyb20gYSBmaWxlLCBpdCBpcyBub3cgeW91ciAodGhlICcgK1xuICAgICAgJ2NhbGxlclxcJ3MpIHJlc3BvbnNpYmlsaXR5IHRvIHJlcXVpcmUgdGhlIGZpbGUuICBUaGUgb2xkIHN5bnRheCAnICtcbiAgICAgICdsb29rZWQgbGlrZSBjb2xvcnMuc2V0VGhlbWUoX19kaXJuYW1lICsgJyArXG4gICAgICAnXFwnLy4uL3RoZW1lcy9nZW5lcmljLWxvZ2dpbmcuanNcXCcpOyBUaGUgbmV3IHN5bnRheCBsb29rcyBsaWtlICcrXG4gICAgICAnY29sb3JzLnNldFRoZW1lKHJlcXVpcmUoX19kaXJuYW1lICsgJyArXG4gICAgICAnXFwnLy4uL3RoZW1lcy9nZW5lcmljLWxvZ2dpbmcuanNcXCcpKTsnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgZm9yICh2YXIgc3R5bGUgaW4gdGhlbWUpIHtcbiAgICAoZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgIGNvbG9yc1tzdHlsZV0gPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGVtZVtzdHlsZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdmFyIG91dCA9IHN0cjtcbiAgICAgICAgICBmb3IgKHZhciBpIGluIHRoZW1lW3N0eWxlXSkge1xuICAgICAgICAgICAgb3V0ID0gY29sb3JzW3RoZW1lW3N0eWxlXVtpXV0ob3V0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sb3JzW3RoZW1lW3N0eWxlXV0oc3RyKTtcbiAgICAgIH07XG4gICAgfSkoc3R5bGUpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICB2YXIgcmV0ID0ge307XG4gIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0W25hbWVdID0ge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGJ1aWxkKFtuYW1lXSk7XG4gICAgICB9LFxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG52YXIgc2VxdWVuY2VyID0gZnVuY3Rpb24gc2VxdWVuY2VyKG1hcCwgc3RyKSB7XG4gIHZhciBleHBsb2RlZCA9IHN0ci5zcGxpdCgnJyk7XG4gIGV4cGxvZGVkID0gZXhwbG9kZWQubWFwKG1hcCk7XG4gIHJldHVybiBleHBsb2RlZC5qb2luKCcnKTtcbn07XG5cbi8vIGN1c3RvbSBmb3JtYXR0ZXIgbWV0aG9kc1xuY29sb3JzLnRyYXAgPSByZXF1aXJlKCcuL2N1c3RvbS90cmFwJyk7XG5jb2xvcnMuemFsZ28gPSByZXF1aXJlKCcuL2N1c3RvbS96YWxnbycpO1xuXG4vLyBtYXBzXG5jb2xvcnMubWFwcyA9IHt9O1xuY29sb3JzLm1hcHMuYW1lcmljYSA9IHJlcXVpcmUoJy4vbWFwcy9hbWVyaWNhJykoY29sb3JzKTtcbmNvbG9ycy5tYXBzLnplYnJhID0gcmVxdWlyZSgnLi9tYXBzL3plYnJhJykoY29sb3JzKTtcbmNvbG9ycy5tYXBzLnJhaW5ib3cgPSByZXF1aXJlKCcuL21hcHMvcmFpbmJvdycpKGNvbG9ycyk7XG5jb2xvcnMubWFwcy5yYW5kb20gPSByZXF1aXJlKCcuL21hcHMvcmFuZG9tJykoY29sb3JzKTtcblxuZm9yICh2YXIgbWFwIGluIGNvbG9ycy5tYXBzKSB7XG4gIChmdW5jdGlvbihtYXApIHtcbiAgICBjb2xvcnNbbWFwXSA9IGZ1bmN0aW9uKHN0cikge1xuICAgICAgcmV0dXJuIHNlcXVlbmNlcihjb2xvcnMubWFwc1ttYXBdLCBzdHIpO1xuICAgIH07XG4gIH0pKG1hcCk7XG59XG5cbmRlZmluZVByb3BzKGNvbG9ycywgaW5pdCgpKTtcbiIsIm1vZHVsZVsnZXhwb3J0cyddID0gZnVuY3Rpb24gcnVuVGhlVHJhcCh0ZXh0LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgdGV4dCA9IHRleHQgfHwgJ1J1biB0aGUgdHJhcCwgZHJvcCB0aGUgYmFzcyc7XG4gIHRleHQgPSB0ZXh0LnNwbGl0KCcnKTtcbiAgdmFyIHRyYXAgPSB7XG4gICAgYTogWydcXHUwMDQwJywgJ1xcdTAxMDQnLCAnXFx1MDIzYScsICdcXHUwMjQ1JywgJ1xcdTAzOTQnLCAnXFx1MDM5YicsICdcXHUwNDE0J10sXG4gICAgYjogWydcXHUwMGRmJywgJ1xcdTAxODEnLCAnXFx1MDI0MycsICdcXHUwMjZlJywgJ1xcdTAzYjInLCAnXFx1MGUzZiddLFxuICAgIGM6IFsnXFx1MDBhOScsICdcXHUwMjNiJywgJ1xcdTAzZmUnXSxcbiAgICBkOiBbJ1xcdTAwZDAnLCAnXFx1MDE4YScsICdcXHUwNTAwJywgJ1xcdTA1MDEnLCAnXFx1MDUwMicsICdcXHUwNTAzJ10sXG4gICAgZTogWydcXHUwMGNiJywgJ1xcdTAxMTUnLCAnXFx1MDE4ZScsICdcXHUwMjU4JywgJ1xcdTAzYTMnLCAnXFx1MDNiZScsICdcXHUwNGJjJyxcbiAgICAgICdcXHUwYTZjJ10sXG4gICAgZjogWydcXHUwNGZhJ10sXG4gICAgZzogWydcXHUwMjYyJ10sXG4gICAgaDogWydcXHUwMTI2JywgJ1xcdTAxOTUnLCAnXFx1MDRhMicsICdcXHUwNGJhJywgJ1xcdTA0YzcnLCAnXFx1MDUwYSddLFxuICAgIGk6IFsnXFx1MGYwZiddLFxuICAgIGo6IFsnXFx1MDEzNCddLFxuICAgIGs6IFsnXFx1MDEzOCcsICdcXHUwNGEwJywgJ1xcdTA0YzMnLCAnXFx1MDUxZSddLFxuICAgIGw6IFsnXFx1MDEzOSddLFxuICAgIG06IFsnXFx1MDI4ZCcsICdcXHUwNGNkJywgJ1xcdTA0Y2UnLCAnXFx1MDUyMCcsICdcXHUwNTIxJywgJ1xcdTBkNjknXSxcbiAgICBuOiBbJ1xcdTAwZDEnLCAnXFx1MDE0YicsICdcXHUwMTlkJywgJ1xcdTAzNzYnLCAnXFx1MDNhMCcsICdcXHUwNDhhJ10sXG4gICAgbzogWydcXHUwMGQ4JywgJ1xcdTAwZjUnLCAnXFx1MDBmOCcsICdcXHUwMWZlJywgJ1xcdTAyOTgnLCAnXFx1MDQ3YScsICdcXHUwNWRkJyxcbiAgICAgICdcXHUwNmRkJywgJ1xcdTBlNGYnXSxcbiAgICBwOiBbJ1xcdTAxZjcnLCAnXFx1MDQ4ZSddLFxuICAgIHE6IFsnXFx1MDljZCddLFxuICAgIHI6IFsnXFx1MDBhZScsICdcXHUwMWE2JywgJ1xcdTAyMTAnLCAnXFx1MDI0YycsICdcXHUwMjgwJywgJ1xcdTA0MmYnXSxcbiAgICBzOiBbJ1xcdTAwYTcnLCAnXFx1MDNkZScsICdcXHUwM2RmJywgJ1xcdTAzZTgnXSxcbiAgICB0OiBbJ1xcdTAxNDEnLCAnXFx1MDE2NicsICdcXHUwMzczJ10sXG4gICAgdTogWydcXHUwMWIxJywgJ1xcdTA1NGQnXSxcbiAgICB2OiBbJ1xcdTA1ZDgnXSxcbiAgICB3OiBbJ1xcdTA0MjgnLCAnXFx1MDQ2MCcsICdcXHUwNDdjJywgJ1xcdTBkNzAnXSxcbiAgICB4OiBbJ1xcdTA0YjInLCAnXFx1MDRmZScsICdcXHUwNGZjJywgJ1xcdTA0ZmQnXSxcbiAgICB5OiBbJ1xcdTAwYTUnLCAnXFx1MDRiMCcsICdcXHUwNGNiJ10sXG4gICAgejogWydcXHUwMWI1JywgJ1xcdTAyNDAnXSxcbiAgfTtcbiAgdGV4dC5mb3JFYWNoKGZ1bmN0aW9uKGMpIHtcbiAgICBjID0gYy50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBjaGFycyA9IHRyYXBbY10gfHwgWycgJ107XG4gICAgdmFyIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFycy5sZW5ndGgpO1xuICAgIGlmICh0eXBlb2YgdHJhcFtjXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlc3VsdCArPSB0cmFwW2NdW3JhbmRdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgKz0gYztcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIHBsZWFzZSBub1xubW9kdWxlWydleHBvcnRzJ10gPSBmdW5jdGlvbiB6YWxnbyh0ZXh0LCBvcHRpb25zKSB7XG4gIHRleHQgPSB0ZXh0IHx8ICcgICBoZSBpcyBoZXJlICAgJztcbiAgdmFyIHNvdWwgPSB7XG4gICAgJ3VwJzogW1xuICAgICAgJ8yNJywgJ8yOJywgJ8yEJywgJ8yFJyxcbiAgICAgICfMvycsICfMkScsICfMhicsICfMkCcsXG4gICAgICAnzZInLCAnzZcnLCAnzZEnLCAnzIcnLFxuICAgICAgJ8yIJywgJ8yKJywgJ82CJywgJ8yTJyxcbiAgICAgICfMiCcsICfNiicsICfNiycsICfNjCcsXG4gICAgICAnzIMnLCAnzIInLCAnzIwnLCAnzZAnLFxuICAgICAgJ8yAJywgJ8yBJywgJ8yLJywgJ8yPJyxcbiAgICAgICfMkicsICfMkycsICfMlCcsICfMvScsXG4gICAgICAnzIknLCAnzaMnLCAnzaQnLCAnzaUnLFxuICAgICAgJ82mJywgJ82nJywgJ82oJywgJ82pJyxcbiAgICAgICfNqicsICfNqycsICfNrCcsICfNrScsXG4gICAgICAnza4nLCAnza8nLCAnzL4nLCAnzZsnLFxuICAgICAgJ82GJywgJ8yaJyxcbiAgICBdLFxuICAgICdkb3duJzogW1xuICAgICAgJ8yWJywgJ8yXJywgJ8yYJywgJ8yZJyxcbiAgICAgICfMnCcsICfMnScsICfMnicsICfMnycsXG4gICAgICAnzKAnLCAnzKQnLCAnzKUnLCAnzKYnLFxuICAgICAgJ8ypJywgJ8yqJywgJ8yrJywgJ8ysJyxcbiAgICAgICfMrScsICfMricsICfMrycsICfMsCcsXG4gICAgICAnzLEnLCAnzLInLCAnzLMnLCAnzLknLFxuICAgICAgJ8y6JywgJ8y7JywgJ8y8JywgJ82FJyxcbiAgICAgICfNhycsICfNiCcsICfNiScsICfNjScsXG4gICAgICAnzY4nLCAnzZMnLCAnzZQnLCAnzZUnLFxuICAgICAgJ82WJywgJ82ZJywgJ82aJywgJ8yjJyxcbiAgICBdLFxuICAgICdtaWQnOiBbXG4gICAgICAnzJUnLCAnzJsnLCAnzIAnLCAnzIEnLFxuICAgICAgJ82YJywgJ8yhJywgJ8yiJywgJ8ynJyxcbiAgICAgICfMqCcsICfMtCcsICfMtScsICfMticsXG4gICAgICAnzZwnLCAnzZ0nLCAnzZ4nLFxuICAgICAgJ82fJywgJ82gJywgJ82iJywgJ8y4JyxcbiAgICAgICfMtycsICfNoScsICcg0oknLFxuICAgIF0sXG4gIH07XG4gIHZhciBhbGwgPSBbXS5jb25jYXQoc291bC51cCwgc291bC5kb3duLCBzb3VsLm1pZCk7XG5cbiAgZnVuY3Rpb24gcmFuZG9tTnVtYmVyKHJhbmdlKSB7XG4gICAgdmFyIHIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5nZSk7XG4gICAgcmV0dXJuIHI7XG4gIH1cblxuICBmdW5jdGlvbiBpc0NoYXIoY2hhcmFjdGVyKSB7XG4gICAgdmFyIGJvb2wgPSBmYWxzZTtcbiAgICBhbGwuZmlsdGVyKGZ1bmN0aW9uKGkpIHtcbiAgICAgIGJvb2wgPSAoaSA9PT0gY2hhcmFjdGVyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYm9vbDtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gaGVDb21lcyh0ZXh0LCBvcHRpb25zKSB7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBjb3VudHM7XG4gICAgdmFyIGw7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9uc1sndXAnXSA9XG4gICAgICB0eXBlb2Ygb3B0aW9uc1sndXAnXSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zWyd1cCddIDogdHJ1ZTtcbiAgICBvcHRpb25zWydtaWQnXSA9XG4gICAgICB0eXBlb2Ygb3B0aW9uc1snbWlkJ10gIT09ICd1bmRlZmluZWQnID8gb3B0aW9uc1snbWlkJ10gOiB0cnVlO1xuICAgIG9wdGlvbnNbJ2Rvd24nXSA9XG4gICAgICB0eXBlb2Ygb3B0aW9uc1snZG93biddICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnNbJ2Rvd24nXSA6IHRydWU7XG4gICAgb3B0aW9uc1snc2l6ZSddID1cbiAgICAgIHR5cGVvZiBvcHRpb25zWydzaXplJ10gIT09ICd1bmRlZmluZWQnID8gb3B0aW9uc1snc2l6ZSddIDogJ21heGknO1xuICAgIHRleHQgPSB0ZXh0LnNwbGl0KCcnKTtcbiAgICBmb3IgKGwgaW4gdGV4dCkge1xuICAgICAgaWYgKGlzQ2hhcihsKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHRleHRbbF07XG4gICAgICBjb3VudHMgPSB7J3VwJzogMCwgJ2Rvd24nOiAwLCAnbWlkJzogMH07XG4gICAgICBzd2l0Y2ggKG9wdGlvbnMuc2l6ZSkge1xuICAgICAgICBjYXNlICdtaW5pJzpcbiAgICAgICAgICBjb3VudHMudXAgPSByYW5kb21OdW1iZXIoOCk7XG4gICAgICAgICAgY291bnRzLm1pZCA9IHJhbmRvbU51bWJlcigyKTtcbiAgICAgICAgICBjb3VudHMuZG93biA9IHJhbmRvbU51bWJlcig4KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWF4aSc6XG4gICAgICAgICAgY291bnRzLnVwID0gcmFuZG9tTnVtYmVyKDE2KSArIDM7XG4gICAgICAgICAgY291bnRzLm1pZCA9IHJhbmRvbU51bWJlcig0KSArIDE7XG4gICAgICAgICAgY291bnRzLmRvd24gPSByYW5kb21OdW1iZXIoNjQpICsgMztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb3VudHMudXAgPSByYW5kb21OdW1iZXIoOCkgKyAxO1xuICAgICAgICAgIGNvdW50cy5taWQgPSByYW5kb21OdW1iZXIoNikgLyAyO1xuICAgICAgICAgIGNvdW50cy5kb3duID0gcmFuZG9tTnVtYmVyKDgpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgdmFyIGFyciA9IFsndXAnLCAnbWlkJywgJ2Rvd24nXTtcbiAgICAgIGZvciAodmFyIGQgaW4gYXJyKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGFycltkXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gY291bnRzW2luZGV4XTsgaSsrKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnNbaW5kZXhdKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBzb3VsW2luZGV4XVtyYW5kb21OdW1iZXIoc291bFtpbmRleF0ubGVuZ3RoKV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgLy8gZG9uJ3Qgc3VtbW9uIGhpbVxuICByZXR1cm4gaGVDb21lcyh0ZXh0LCBvcHRpb25zKTtcbn07XG5cbiIsIm1vZHVsZVsnZXhwb3J0cyddID0gZnVuY3Rpb24oY29sb3JzKSB7XG4gIHJldHVybiBmdW5jdGlvbihsZXR0ZXIsIGksIGV4cGxvZGVkKSB7XG4gICAgaWYgKGxldHRlciA9PT0gJyAnKSByZXR1cm4gbGV0dGVyO1xuICAgIHN3aXRjaCAoaSUzKSB7XG4gICAgICBjYXNlIDA6IHJldHVybiBjb2xvcnMucmVkKGxldHRlcik7XG4gICAgICBjYXNlIDE6IHJldHVybiBjb2xvcnMud2hpdGUobGV0dGVyKTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGNvbG9ycy5ibHVlKGxldHRlcik7XG4gICAgfVxuICB9O1xufTtcbiIsIm1vZHVsZVsnZXhwb3J0cyddID0gZnVuY3Rpb24oY29sb3JzKSB7XG4gIC8vIFJvWSBHIEJpVlxuICB2YXIgcmFpbmJvd0NvbG9ycyA9IFsncmVkJywgJ3llbGxvdycsICdncmVlbicsICdibHVlJywgJ21hZ2VudGEnXTtcbiAgcmV0dXJuIGZ1bmN0aW9uKGxldHRlciwgaSwgZXhwbG9kZWQpIHtcbiAgICBpZiAobGV0dGVyID09PSAnICcpIHtcbiAgICAgIHJldHVybiBsZXR0ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb2xvcnNbcmFpbmJvd0NvbG9yc1tpKysgJSByYWluYm93Q29sb3JzLmxlbmd0aF1dKGxldHRlcik7XG4gICAgfVxuICB9O1xufTtcblxuIiwibW9kdWxlWydleHBvcnRzJ10gPSBmdW5jdGlvbihjb2xvcnMpIHtcbiAgdmFyIGF2YWlsYWJsZSA9IFsndW5kZXJsaW5lJywgJ2ludmVyc2UnLCAnZ3JleScsICd5ZWxsb3cnLCAncmVkJywgJ2dyZWVuJyxcbiAgICAnYmx1ZScsICd3aGl0ZScsICdjeWFuJywgJ21hZ2VudGEnLCAnYnJpZ2h0WWVsbG93JywgJ2JyaWdodFJlZCcsXG4gICAgJ2JyaWdodEdyZWVuJywgJ2JyaWdodEJsdWUnLCAnYnJpZ2h0V2hpdGUnLCAnYnJpZ2h0Q3lhbicsICdicmlnaHRNYWdlbnRhJ107XG4gIHJldHVybiBmdW5jdGlvbihsZXR0ZXIsIGksIGV4cGxvZGVkKSB7XG4gICAgcmV0dXJuIGxldHRlciA9PT0gJyAnID8gbGV0dGVyIDpcbiAgICAgIGNvbG9yc1tcbiAgICAgICAgICBhdmFpbGFibGVbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGF2YWlsYWJsZS5sZW5ndGggLSAyKSldXG4gICAgICBdKGxldHRlcik7XG4gIH07XG59O1xuIiwibW9kdWxlWydleHBvcnRzJ10gPSBmdW5jdGlvbihjb2xvcnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGxldHRlciwgaSwgZXhwbG9kZWQpIHtcbiAgICByZXR1cm4gaSAlIDIgPT09IDAgPyBsZXR0ZXIgOiBjb2xvcnMuaW52ZXJzZShsZXR0ZXIpO1xuICB9O1xufTtcbiIsIi8qXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuQ29weXJpZ2h0IChjKSBTaW5kcmUgU29yaHVzIDxzaW5kcmVzb3JodXNAZ21haWwuY29tPiAoc2luZHJlc29yaHVzLmNvbSlcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuXG4qL1xuXG52YXIgc3R5bGVzID0ge307XG5tb2R1bGVbJ2V4cG9ydHMnXSA9IHN0eWxlcztcblxudmFyIGNvZGVzID0ge1xuICByZXNldDogWzAsIDBdLFxuXG4gIGJvbGQ6IFsxLCAyMl0sXG4gIGRpbTogWzIsIDIyXSxcbiAgaXRhbGljOiBbMywgMjNdLFxuICB1bmRlcmxpbmU6IFs0LCAyNF0sXG4gIGludmVyc2U6IFs3LCAyN10sXG4gIGhpZGRlbjogWzgsIDI4XSxcbiAgc3RyaWtldGhyb3VnaDogWzksIDI5XSxcblxuICBibGFjazogWzMwLCAzOV0sXG4gIHJlZDogWzMxLCAzOV0sXG4gIGdyZWVuOiBbMzIsIDM5XSxcbiAgeWVsbG93OiBbMzMsIDM5XSxcbiAgYmx1ZTogWzM0LCAzOV0sXG4gIG1hZ2VudGE6IFszNSwgMzldLFxuICBjeWFuOiBbMzYsIDM5XSxcbiAgd2hpdGU6IFszNywgMzldLFxuICBncmF5OiBbOTAsIDM5XSxcbiAgZ3JleTogWzkwLCAzOV0sXG5cbiAgYnJpZ2h0UmVkOiBbOTEsIDM5XSxcbiAgYnJpZ2h0R3JlZW46IFs5MiwgMzldLFxuICBicmlnaHRZZWxsb3c6IFs5MywgMzldLFxuICBicmlnaHRCbHVlOiBbOTQsIDM5XSxcbiAgYnJpZ2h0TWFnZW50YTogWzk1LCAzOV0sXG4gIGJyaWdodEN5YW46IFs5NiwgMzldLFxuICBicmlnaHRXaGl0ZTogWzk3LCAzOV0sXG5cbiAgYmdCbGFjazogWzQwLCA0OV0sXG4gIGJnUmVkOiBbNDEsIDQ5XSxcbiAgYmdHcmVlbjogWzQyLCA0OV0sXG4gIGJnWWVsbG93OiBbNDMsIDQ5XSxcbiAgYmdCbHVlOiBbNDQsIDQ5XSxcbiAgYmdNYWdlbnRhOiBbNDUsIDQ5XSxcbiAgYmdDeWFuOiBbNDYsIDQ5XSxcbiAgYmdXaGl0ZTogWzQ3LCA0OV0sXG4gIGJnR3JheTogWzEwMCwgNDldLFxuICBiZ0dyZXk6IFsxMDAsIDQ5XSxcblxuICBiZ0JyaWdodFJlZDogWzEwMSwgNDldLFxuICBiZ0JyaWdodEdyZWVuOiBbMTAyLCA0OV0sXG4gIGJnQnJpZ2h0WWVsbG93OiBbMTAzLCA0OV0sXG4gIGJnQnJpZ2h0Qmx1ZTogWzEwNCwgNDldLFxuICBiZ0JyaWdodE1hZ2VudGE6IFsxMDUsIDQ5XSxcbiAgYmdCcmlnaHRDeWFuOiBbMTA2LCA0OV0sXG4gIGJnQnJpZ2h0V2hpdGU6IFsxMDcsIDQ5XSxcblxuICAvLyBsZWdhY3kgc3R5bGVzIGZvciBjb2xvcnMgcHJlIHYxLjAuMFxuICBibGFja0JHOiBbNDAsIDQ5XSxcbiAgcmVkQkc6IFs0MSwgNDldLFxuICBncmVlbkJHOiBbNDIsIDQ5XSxcbiAgeWVsbG93Qkc6IFs0MywgNDldLFxuICBibHVlQkc6IFs0NCwgNDldLFxuICBtYWdlbnRhQkc6IFs0NSwgNDldLFxuICBjeWFuQkc6IFs0NiwgNDldLFxuICB3aGl0ZUJHOiBbNDcsIDQ5XSxcblxufTtcblxuT2JqZWN0LmtleXMoY29kZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gIHZhciB2YWwgPSBjb2Rlc1trZXldO1xuICB2YXIgc3R5bGUgPSBzdHlsZXNba2V5XSA9IFtdO1xuICBzdHlsZS5vcGVuID0gJ1xcdTAwMWJbJyArIHZhbFswXSArICdtJztcbiAgc3R5bGUuY2xvc2UgPSAnXFx1MDAxYlsnICsgdmFsWzFdICsgJ20nO1xufSk7XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBTaW5kcmUgU29yaHVzIDxzaW5kcmVzb3JodXNAZ21haWwuY29tPiAoc2luZHJlc29yaHVzLmNvbSlcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZlxudGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpblxudGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0b1xudXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXNcbm9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkb1xuc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbmNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblNPRlRXQVJFLlxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZsYWcsIGFyZ3YpIHtcbiAgYXJndiA9IGFyZ3YgfHwgcHJvY2Vzcy5hcmd2O1xuXG4gIHZhciB0ZXJtaW5hdG9yUG9zID0gYXJndi5pbmRleE9mKCctLScpO1xuICB2YXIgcHJlZml4ID0gL14tezEsMn0vLnRlc3QoZmxhZykgPyAnJyA6ICctLSc7XG4gIHZhciBwb3MgPSBhcmd2LmluZGV4T2YocHJlZml4ICsgZmxhZyk7XG5cbiAgcmV0dXJuIHBvcyAhPT0gLTEgJiYgKHRlcm1pbmF0b3JQb3MgPT09IC0xID8gdHJ1ZSA6IHBvcyA8IHRlcm1pbmF0b3JQb3MpO1xufTtcbiIsIi8qXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuQ29weXJpZ2h0IChjKSBTaW5kcmUgU29yaHVzIDxzaW5kcmVzb3JodXNAZ21haWwuY29tPiAoc2luZHJlc29yaHVzLmNvbSlcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuXG4qL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBvcyA9IHJlcXVpcmUoJ29zJyk7XG52YXIgaGFzRmxhZyA9IHJlcXVpcmUoJy4vaGFzLWZsYWcuanMnKTtcblxudmFyIGVudiA9IHByb2Nlc3MuZW52O1xuXG52YXIgZm9yY2VDb2xvciA9IHZvaWQgMDtcbmlmIChoYXNGbGFnKCduby1jb2xvcicpIHx8IGhhc0ZsYWcoJ25vLWNvbG9ycycpIHx8IGhhc0ZsYWcoJ2NvbG9yPWZhbHNlJykpIHtcbiAgZm9yY2VDb2xvciA9IGZhbHNlO1xufSBlbHNlIGlmIChoYXNGbGFnKCdjb2xvcicpIHx8IGhhc0ZsYWcoJ2NvbG9ycycpIHx8IGhhc0ZsYWcoJ2NvbG9yPXRydWUnKVxuICAgICAgICAgICB8fCBoYXNGbGFnKCdjb2xvcj1hbHdheXMnKSkge1xuICBmb3JjZUNvbG9yID0gdHJ1ZTtcbn1cbmlmICgnRk9SQ0VfQ09MT1InIGluIGVudikge1xuICBmb3JjZUNvbG9yID0gZW52LkZPUkNFX0NPTE9SLmxlbmd0aCA9PT0gMFxuICAgIHx8IHBhcnNlSW50KGVudi5GT1JDRV9DT0xPUiwgMTApICE9PSAwO1xufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGVMZXZlbChsZXZlbCkge1xuICBpZiAobGV2ZWwgPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxldmVsOiBsZXZlbCxcbiAgICBoYXNCYXNpYzogdHJ1ZSxcbiAgICBoYXMyNTY6IGxldmVsID49IDIsXG4gICAgaGFzMTZtOiBsZXZlbCA+PSAzLFxuICB9O1xufVxuXG5mdW5jdGlvbiBzdXBwb3J0c0NvbG9yKHN0cmVhbSkge1xuICBpZiAoZm9yY2VDb2xvciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGlmIChoYXNGbGFnKCdjb2xvcj0xNm0nKSB8fCBoYXNGbGFnKCdjb2xvcj1mdWxsJylcbiAgICAgIHx8IGhhc0ZsYWcoJ2NvbG9yPXRydWVjb2xvcicpKSB7XG4gICAgcmV0dXJuIDM7XG4gIH1cblxuICBpZiAoaGFzRmxhZygnY29sb3I9MjU2JykpIHtcbiAgICByZXR1cm4gMjtcbiAgfVxuXG4gIGlmIChzdHJlYW0gJiYgIXN0cmVhbS5pc1RUWSAmJiBmb3JjZUNvbG9yICE9PSB0cnVlKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICB2YXIgbWluID0gZm9yY2VDb2xvciA/IDEgOiAwO1xuXG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG4gICAgLy8gTm9kZS5qcyA3LjUuMCBpcyB0aGUgZmlyc3QgdmVyc2lvbiBvZiBOb2RlLmpzIHRvIGluY2x1ZGUgYSBwYXRjaCB0b1xuICAgIC8vIGxpYnV2IHRoYXQgZW5hYmxlcyAyNTYgY29sb3Igb3V0cHV0IG9uIFdpbmRvd3MuIEFueXRoaW5nIGVhcmxpZXIgYW5kIGl0XG4gICAgLy8gd29uJ3Qgd29yay4gSG93ZXZlciwgaGVyZSB3ZSB0YXJnZXQgTm9kZS5qcyA4IGF0IG1pbmltdW0gYXMgaXQgaXMgYW4gTFRTXG4gICAgLy8gcmVsZWFzZSwgYW5kIE5vZGUuanMgNyBpcyBub3QuIFdpbmRvd3MgMTAgYnVpbGQgMTA1ODYgaXMgdGhlIGZpcnN0XG4gICAgLy8gV2luZG93cyByZWxlYXNlIHRoYXQgc3VwcG9ydHMgMjU2IGNvbG9ycy4gV2luZG93cyAxMCBidWlsZCAxNDkzMSBpcyB0aGVcbiAgICAvLyBmaXJzdCByZWxlYXNlIHRoYXQgc3VwcG9ydHMgMTZtL1RydWVDb2xvci5cbiAgICB2YXIgb3NSZWxlYXNlID0gb3MucmVsZWFzZSgpLnNwbGl0KCcuJyk7XG4gICAgaWYgKE51bWJlcihwcm9jZXNzLnZlcnNpb25zLm5vZGUuc3BsaXQoJy4nKVswXSkgPj0gOFxuICAgICAgICAmJiBOdW1iZXIob3NSZWxlYXNlWzBdKSA+PSAxMCAmJiBOdW1iZXIob3NSZWxlYXNlWzJdKSA+PSAxMDU4Nikge1xuICAgICAgcmV0dXJuIE51bWJlcihvc1JlbGVhc2VbMl0pID49IDE0OTMxID8gMyA6IDI7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBpZiAoJ0NJJyBpbiBlbnYpIHtcbiAgICBpZiAoWydUUkFWSVMnLCAnQ0lSQ0xFQ0knLCAnQVBQVkVZT1InLCAnR0lUTEFCX0NJJ10uc29tZShmdW5jdGlvbihzaWduKSB7XG4gICAgICByZXR1cm4gc2lnbiBpbiBlbnY7XG4gICAgfSkgfHwgZW52LkNJX05BTUUgPT09ICdjb2Rlc2hpcCcpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHJldHVybiBtaW47XG4gIH1cblxuICBpZiAoJ1RFQU1DSVRZX1ZFUlNJT04nIGluIGVudikge1xuICAgIHJldHVybiAoL14oOVxcLigwKlsxLTldXFxkKilcXC58XFxkezIsfVxcLikvLnRlc3QoZW52LlRFQU1DSVRZX1ZFUlNJT04pID8gMSA6IDBcbiAgICApO1xuICB9XG5cbiAgaWYgKCdURVJNX1BST0dSQU0nIGluIGVudikge1xuICAgIHZhciB2ZXJzaW9uID0gcGFyc2VJbnQoKGVudi5URVJNX1BST0dSQU1fVkVSU0lPTiB8fCAnJykuc3BsaXQoJy4nKVswXSwgMTApO1xuXG4gICAgc3dpdGNoIChlbnYuVEVSTV9QUk9HUkFNKSB7XG4gICAgICBjYXNlICdpVGVybS5hcHAnOlxuICAgICAgICByZXR1cm4gdmVyc2lvbiA+PSAzID8gMyA6IDI7XG4gICAgICBjYXNlICdIeXBlcic6XG4gICAgICAgIHJldHVybiAzO1xuICAgICAgY2FzZSAnQXBwbGVfVGVybWluYWwnOlxuICAgICAgICByZXR1cm4gMjtcbiAgICAgIC8vIE5vIGRlZmF1bHRcbiAgICB9XG4gIH1cblxuICBpZiAoLy0yNTYoY29sb3IpPyQvaS50ZXN0KGVudi5URVJNKSkge1xuICAgIHJldHVybiAyO1xuICB9XG5cbiAgaWYgKC9ec2NyZWVufF54dGVybXxednQxMDB8XnJ4dnR8Y29sb3J8YW5zaXxjeWd3aW58bGludXgvaS50ZXN0KGVudi5URVJNKSkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgaWYgKCdDT0xPUlRFUk0nIGluIGVudikge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgaWYgKGVudi5URVJNID09PSAnZHVtYicpIHtcbiAgICByZXR1cm4gbWluO1xuICB9XG5cbiAgcmV0dXJuIG1pbjtcbn1cblxuZnVuY3Rpb24gZ2V0U3VwcG9ydExldmVsKHN0cmVhbSkge1xuICB2YXIgbGV2ZWwgPSBzdXBwb3J0c0NvbG9yKHN0cmVhbSk7XG4gIHJldHVybiB0cmFuc2xhdGVMZXZlbChsZXZlbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzdXBwb3J0c0NvbG9yOiBnZXRTdXBwb3J0TGV2ZWwsXG4gIHN0ZG91dDogZ2V0U3VwcG9ydExldmVsKHByb2Nlc3Muc3Rkb3V0KSxcbiAgc3RkZXJyOiBnZXRTdXBwb3J0TGV2ZWwocHJvY2Vzcy5zdGRlcnIpLFxufTtcbiIsIi8vXG4vLyBSZW1hcms6IFJlcXVpcmluZyB0aGlzIGZpbGUgd2lsbCB1c2UgdGhlIFwic2FmZVwiIGNvbG9ycyBBUEksXG4vLyB3aGljaCB3aWxsIG5vdCB0b3VjaCBTdHJpbmcucHJvdG90eXBlLlxuLy9cbi8vICAgdmFyIGNvbG9ycyA9IHJlcXVpcmUoJ2NvbG9ycy9zYWZlJyk7XG4vLyAgIGNvbG9ycy5yZWQoXCJmb29cIilcbi8vXG4vL1xudmFyIGNvbG9ycyA9IHJlcXVpcmUoJy4vbGliL2NvbG9ycycpO1xubW9kdWxlWydleHBvcnRzJ10gPSBjb2xvcnM7XG4iLCJleHBvcnQgZGVmYXVsdCBcIi8qIHRzbGludDpkaXNhYmxlICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiAgICAgIFN0YXJ0IG9mIFdlYnBhY2sgSG90IEV4dGVuc2lvbiBNaWRkbGV3YXJlICAgICAqL1xcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogIFRoaXMgd2lsbCBiZSBjb252ZXJ0ZWQgaW50byBhIGxvZGFzaCB0ZW1wbC4sIGFueSAgKi9cXG5cXG4vKiAgZXh0ZXJuYWwgYXJndW1lbnQgbXVzdCBiZSBwcm92aWRlZCB1c2luZyBpdCAgICAgICAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuKGZ1bmN0aW9uICh3aW5kb3cpIHtcXG4gIHZhciBpbmplY3Rpb25Db250ZXh0ID0ge1xcbiAgICBicm93c2VyOiBudWxsXFxuICB9O1xcbiAgKGZ1bmN0aW9uICgpIHtcXG4gICAgXFxcIjwlPSBwb2x5ZmlsbFNvdXJjZSAlPlxcXCI7XFxuICB9KS5iaW5kKGluamVjdGlvbkNvbnRleHQpKCk7XFxuICB2YXIgYnJvd3NlciA9IGluamVjdGlvbkNvbnRleHQuYnJvd3NlcjtcXG4gIHZhciBzaWduYWxzID0gSlNPTi5wYXJzZSgnPCU9IHNpZ25hbHMgJT4nKTtcXG4gIHZhciBjb25maWcgPSBKU09OLnBhcnNlKCc8JT0gY29uZmlnICU+Jyk7XFxuICB2YXIgcmVsb2FkUGFnZSA9IFxcXCI8JT0gcmVsb2FkUGFnZSAlPlxcXCIgPT09IFxcXCJ0cnVlXFxcIjtcXG4gIHZhciB3c0hvc3QgPSBcXFwiPCU9IFdTSG9zdCAlPlxcXCI7XFxuICB2YXIgU0lHTl9DSEFOR0UgPSBzaWduYWxzLlNJR05fQ0hBTkdFLFxcbiAgICAgIFNJR05fUkVMT0FEID0gc2lnbmFscy5TSUdOX1JFTE9BRCxcXG4gICAgICBTSUdOX1JFTE9BREVEID0gc2lnbmFscy5TSUdOX1JFTE9BREVELFxcbiAgICAgIFNJR05fTE9HID0gc2lnbmFscy5TSUdOX0xPRyxcXG4gICAgICBTSUdOX0NPTk5FQ1QgPSBzaWduYWxzLlNJR05fQ09OTkVDVDtcXG4gIHZhciBSRUNPTk5FQ1RfSU5URVJWQUwgPSBjb25maWcuUkVDT05ORUNUX0lOVEVSVkFMLFxcbiAgICAgIFNPQ0tFVF9FUlJfQ09ERV9SRUYgPSBjb25maWcuU09DS0VUX0VSUl9DT0RFX1JFRjtcXG4gIHZhciBleHRlbnNpb24gPSBicm93c2VyLmV4dGVuc2lvbixcXG4gICAgICBydW50aW1lID0gYnJvd3Nlci5ydW50aW1lLFxcbiAgICAgIHRhYnMgPSBicm93c2VyLnRhYnM7XFxuICB2YXIgbWFuaWZlc3QgPSBydW50aW1lLmdldE1hbmlmZXN0KCk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gSGVscGVyIGZ1bmN0aW9ucyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cXG5cXG4gIHZhciBmb3JtYXR0ZXIgPSBmdW5jdGlvbiBmb3JtYXR0ZXIobXNnKSB7XFxuICAgIHJldHVybiBcXFwiWyBXRVI6IFxcXCIuY29uY2F0KG1zZywgXFxcIiBdXFxcIik7XFxuICB9O1xcblxcbiAgdmFyIGxvZ2dlciA9IGZ1bmN0aW9uIGxvZ2dlcihtc2cpIHtcXG4gICAgdmFyIGxldmVsID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBcXFwiaW5mb1xcXCI7XFxuICAgIHJldHVybiBjb25zb2xlW2xldmVsXShmb3JtYXR0ZXIobXNnKSk7XFxuICB9O1xcblxcbiAgdmFyIHRpbWVGb3JtYXR0ZXIgPSBmdW5jdGlvbiB0aW1lRm9ybWF0dGVyKGRhdGUpIHtcXG4gICAgcmV0dXJuIGRhdGUudG9UaW1lU3RyaW5nKCkucmVwbGFjZSgvLiooXFxcXGR7Mn06XFxcXGR7Mn06XFxcXGR7Mn0pLiovLCBcXFwiJDFcXFwiKTtcXG4gIH07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09IENhbGxlZCBvbmx5IG9uIGNvbnRlbnQgc2NyaXB0cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cXG5cXG5cXG4gIGZ1bmN0aW9uIGNvbnRlbnRTY3JpcHRXb3JrZXIoKSB7XFxuICAgIHJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xcbiAgICAgIHR5cGU6IFNJR05fQ09OTkVDVFxcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChtc2cpIHtcXG4gICAgICByZXR1cm4gY29uc29sZS5pbmZvKG1zZyk7XFxuICAgIH0pO1xcbiAgICBydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoX3JlZikge1xcbiAgICAgIHZhciB0eXBlID0gX3JlZi50eXBlLFxcbiAgICAgICAgICBwYXlsb2FkID0gX3JlZi5wYXlsb2FkO1xcblxcbiAgICAgIHN3aXRjaCAodHlwZSkge1xcbiAgICAgICAgY2FzZSBTSUdOX1JFTE9BRDpcXG4gICAgICAgICAgbG9nZ2VyKFxcXCJEZXRlY3RlZCBDaGFuZ2VzLiBSZWxvYWRpbmcgLi4uXFxcIik7XFxuICAgICAgICAgIHJlbG9hZFBhZ2UgJiYgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xcbiAgICAgICAgICBicmVhaztcXG5cXG4gICAgICAgIGNhc2UgU0lHTl9MT0c6XFxuICAgICAgICAgIGNvbnNvbGUuaW5mbyhwYXlsb2FkKTtcXG4gICAgICAgICAgYnJlYWs7XFxuICAgICAgfVxcbiAgICB9KTtcXG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09IENhbGxlZCBvbmx5IG9uIGJhY2tncm91bmQgc2NyaXB0cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xcblxcblxcbiAgZnVuY3Rpb24gYmFja2dyb3VuZFdvcmtlcihzb2NrZXQpIHtcXG4gICAgcnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKGFjdGlvbiwgc2VuZGVyKSB7XFxuICAgICAgaWYgKGFjdGlvbi50eXBlID09PSBTSUdOX0NPTk5FQ1QpIHtcXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZm9ybWF0dGVyKFxcXCJDb25uZWN0ZWQgdG8gRXh0ZW5zaW9uIEhvdCBSZWxvYWRlclxcXCIpKTtcXG4gICAgICB9XFxuXFxuICAgICAgcmV0dXJuIHRydWU7XFxuICAgIH0pO1xcbiAgICBzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcihcXFwibWVzc2FnZVxcXCIsIGZ1bmN0aW9uIChfcmVmMikge1xcbiAgICAgIHZhciBkYXRhID0gX3JlZjIuZGF0YTtcXG5cXG4gICAgICB2YXIgX0pTT04kcGFyc2UgPSBKU09OLnBhcnNlKGRhdGEpLFxcbiAgICAgICAgICB0eXBlID0gX0pTT04kcGFyc2UudHlwZSxcXG4gICAgICAgICAgcGF5bG9hZCA9IF9KU09OJHBhcnNlLnBheWxvYWQ7XFxuXFxuICAgICAgaWYgKHR5cGUgPT09IFNJR05fQ0hBTkdFICYmICghcGF5bG9hZCB8fCAhcGF5bG9hZC5vbmx5UGFnZUNoYW5nZWQpKSB7XFxuICAgICAgICB0YWJzLnF1ZXJ5KHtcXG4gICAgICAgICAgc3RhdHVzOiBcXFwiY29tcGxldGVcXFwiXFxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChsb2FkZWRUYWJzKSB7XFxuICAgICAgICAgIGxvYWRlZFRhYnMuZm9yRWFjaChmdW5jdGlvbiAodGFiKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRhYi5pZCAmJiB0YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwge1xcbiAgICAgICAgICAgICAgdHlwZTogU0lHTl9SRUxPQURcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgICAgfSk7XFxuICAgICAgICAgIHNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHtcXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1JFTE9BREVELFxcbiAgICAgICAgICAgIHBheWxvYWQ6IGZvcm1hdHRlcihcXFwiXFxcIi5jb25jYXQodGltZUZvcm1hdHRlcihuZXcgRGF0ZSgpKSwgXFxcIiAtIFxcXCIpLmNvbmNhdChtYW5pZmVzdC5uYW1lLCBcXFwiIHN1Y2Nlc3NmdWxseSByZWxvYWRlZFxcXCIpKVxcbiAgICAgICAgICB9KSk7XFxuICAgICAgICAgIHJ1bnRpbWUucmVsb2FkKCk7XFxuICAgICAgICB9KTtcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgcnVudGltZS5zZW5kTWVzc2FnZSh7XFxuICAgICAgICAgIHR5cGU6IHR5cGUsXFxuICAgICAgICAgIHBheWxvYWQ6IHBheWxvYWRcXG4gICAgICAgIH0pO1xcbiAgICAgIH1cXG4gICAgfSk7XFxuICAgIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKFxcXCJjbG9zZVxcXCIsIGZ1bmN0aW9uIChfcmVmMykge1xcbiAgICAgIHZhciBjb2RlID0gX3JlZjMuY29kZTtcXG4gICAgICBsb2dnZXIoXFxcIlNvY2tldCBjb25uZWN0aW9uIGNsb3NlZC4gQ29kZSBcXFwiLmNvbmNhdChjb2RlLCBcXFwiLiBTZWUgbW9yZSBpbiBcXFwiKS5jb25jYXQoU09DS0VUX0VSUl9DT0RFX1JFRiksIFxcXCJ3YXJuXFxcIik7XFxuICAgICAgdmFyIGludElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xcbiAgICAgICAgbG9nZ2VyKFxcXCJBdHRlbXB0aW5nIHRvIHJlY29ubmVjdCAodGlwOiBDaGVjayBpZiBXZWJwYWNrIGlzIHJ1bm5pbmcpXFxcIik7XFxuICAgICAgICB2YXIgd3MgPSBuZXcgV2ViU29ja2V0KHdzSG9zdCk7XFxuXFxuICAgICAgICB3cy5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICByZXR1cm4gbG9nZ2VyKFxcXCJFcnJvciB0cnlpbmcgdG8gcmUtY29ubmVjdC4gUmVhdHRlbXB0aW5nIGluIFxcXCIuY29uY2F0KFJFQ09OTkVDVF9JTlRFUlZBTCAvIDEwMDAsIFxcXCJzXFxcIiksIFxcXCJ3YXJuXFxcIik7XFxuICAgICAgICB9O1xcblxcbiAgICAgICAgd3MuYWRkRXZlbnRMaXN0ZW5lcihcXFwib3BlblxcXCIsIGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRJZCk7XFxuICAgICAgICAgIGxvZ2dlcihcXFwiUmVjb25uZWN0ZWQuIFJlbG9hZGluZyBwbHVnaW5cXFwiKTtcXG4gICAgICAgICAgcnVudGltZS5yZWxvYWQoKTtcXG4gICAgICAgIH0pO1xcbiAgICAgIH0sIFJFQ09OTkVDVF9JTlRFUlZBTCk7XFxuICAgIH0pO1xcbiAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT0gQ2FsbGVkIG9ubHkgb24gZXh0ZW5zaW9uIHBhZ2VzIHRoYXQgYXJlIG5vdCB0aGUgYmFja2dyb3VuZCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xcblxcblxcbiAgZnVuY3Rpb24gZXh0ZW5zaW9uUGFnZVdvcmtlcigpIHtcXG4gICAgcnVudGltZS5zZW5kTWVzc2FnZSh7XFxuICAgICAgdHlwZTogU0lHTl9DT05ORUNUXFxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKG1zZykge1xcbiAgICAgIHJldHVybiBjb25zb2xlLmluZm8obXNnKTtcXG4gICAgfSk7XFxuICAgIHJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChfcmVmNCkge1xcbiAgICAgIHZhciB0eXBlID0gX3JlZjQudHlwZSxcXG4gICAgICAgICAgcGF5bG9hZCA9IF9yZWY0LnBheWxvYWQ7XFxuXFxuICAgICAgc3dpdGNoICh0eXBlKSB7XFxuICAgICAgICBjYXNlIFNJR05fQ0hBTkdFOlxcbiAgICAgICAgICBsb2dnZXIoXFxcIkRldGVjdGVkIENoYW5nZXMuIFJlbG9hZGluZyAuLi5cXFwiKTtcXG4gICAgICAgICAgcmVsb2FkUGFnZSAmJiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XFxuICAgICAgICAgIGJyZWFrO1xcblxcbiAgICAgICAgY2FzZSBTSUdOX0xPRzpcXG4gICAgICAgICAgY29uc29sZS5pbmZvKHBheWxvYWQpO1xcbiAgICAgICAgICBicmVhaztcXG4gICAgICB9XFxuICAgIH0pO1xcbiAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PSBCb290c3RyYXBzIHRoZSBtaWRkbGV3YXJlID09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xcblxcblxcbiAgcnVudGltZS5yZWxvYWQgPyBleHRlbnNpb24uZ2V0QmFja2dyb3VuZFBhZ2UoKSA9PT0gd2luZG93ID8gYmFja2dyb3VuZFdvcmtlcihuZXcgV2ViU29ja2V0KHdzSG9zdCkpIDogZXh0ZW5zaW9uUGFnZVdvcmtlcigpIDogY29udGVudFNjcmlwdFdvcmtlcigpO1xcbn0pKHdpbmRvdyk7XFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiBFbmQgb2YgV2VicGFjayBIb3QgRXh0ZW5zaW9uIE1pZGRsZXdhcmUgICovXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cIjsiLCJleHBvcnQgZGVmYXVsdCBcIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XFxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXFxcImZ1bmN0aW9uXFxcIiAmJiBkZWZpbmUuYW1kKSB7XFxuICAgIGRlZmluZShcXFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXFxcIiwgW1xcXCJtb2R1bGVcXFwiXSwgZmFjdG9yeSk7XFxuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcXFwidW5kZWZpbmVkXFxcIikge1xcbiAgICBmYWN0b3J5KG1vZHVsZSk7XFxuICB9IGVsc2Uge1xcbiAgICB2YXIgbW9kID0ge1xcbiAgICAgIGV4cG9ydHM6IHt9XFxuICAgIH07XFxuICAgIGZhY3RvcnkobW9kKTtcXG4gICAgZ2xvYmFsLmJyb3dzZXIgPSBtb2QuZXhwb3J0cztcXG4gIH1cXG59KSh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXFxcInVuZGVmaW5lZFxcXCIgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHNlbGYgIT09IFxcXCJ1bmRlZmluZWRcXFwiID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uIChtb2R1bGUpIHtcXG4gIC8qIHdlYmV4dGVuc2lvbi1wb2x5ZmlsbCAtIHYwLjcuMCAtIFR1ZSBOb3YgMTAgMjAyMCAyMDoyNDowNCAqL1xcblxcbiAgLyogLSotIE1vZGU6IGluZGVudC10YWJzLW1vZGU6IG5pbDsganMtaW5kZW50LWxldmVsOiAyIC0qLSAqL1xcblxcbiAgLyogdmltOiBzZXQgc3RzPTIgc3c9MiBldCB0dz04MDogKi9cXG5cXG4gIC8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcXG4gICAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcXG4gICAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXFxuICBcXFwidXNlIHN0cmljdFxcXCI7XFxuXFxuICBpZiAodHlwZW9mIGJyb3dzZXIgPT09IFxcXCJ1bmRlZmluZWRcXFwiIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihicm93c2VyKSAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xcbiAgICBjb25zdCBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UgPSBcXFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlxcXCI7XFxuICAgIGNvbnN0IFNFTkRfUkVTUE9OU0VfREVQUkVDQVRJT05fV0FSTklORyA9IFxcXCJSZXR1cm5pbmcgYSBQcm9taXNlIGlzIHRoZSBwcmVmZXJyZWQgd2F5IHRvIHNlbmQgYSByZXBseSBmcm9tIGFuIG9uTWVzc2FnZS9vbk1lc3NhZ2VFeHRlcm5hbCBsaXN0ZW5lciwgYXMgdGhlIHNlbmRSZXNwb25zZSB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgc3BlY3MgKFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL01vemlsbGEvQWRkLW9ucy9XZWJFeHRlbnNpb25zL0FQSS9ydW50aW1lL29uTWVzc2FnZSlcXFwiOyAvLyBXcmFwcGluZyB0aGUgYnVsayBvZiB0aGlzIHBvbHlmaWxsIGluIGEgb25lLXRpbWUtdXNlIGZ1bmN0aW9uIGlzIGEgbWlub3JcXG4gICAgLy8gb3B0aW1pemF0aW9uIGZvciBGaXJlZm94LiBTaW5jZSBTcGlkZXJtb25rZXkgZG9lcyBub3QgZnVsbHkgcGFyc2UgdGhlXFxuICAgIC8vIGNvbnRlbnRzIG9mIGEgZnVuY3Rpb24gdW50aWwgdGhlIGZpcnN0IHRpbWUgaXQncyBjYWxsZWQsIGFuZCBzaW5jZSBpdCB3aWxsXFxuICAgIC8vIG5ldmVyIGFjdHVhbGx5IG5lZWQgdG8gYmUgY2FsbGVkLCB0aGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gYmUgaW5jbHVkZWRcXG4gICAgLy8gaW4gRmlyZWZveCBuZWFybHkgZm9yIGZyZWUuXFxuXFxuICAgIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XFxuICAgICAgLy8gTk9URTogYXBpTWV0YWRhdGEgaXMgYXNzb2NpYXRlZCB0byB0aGUgY29udGVudCBvZiB0aGUgYXBpLW1ldGFkYXRhLmpzb24gZmlsZVxcbiAgICAgIC8vIGF0IGJ1aWxkIHRpbWUgYnkgcmVwbGFjaW5nIHRoZSBmb2xsb3dpbmcgXFxcImluY2x1ZGVcXFwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXFxuICAgICAgLy8gSlNPTiBmaWxlLlxcbiAgICAgIGNvbnN0IGFwaU1ldGFkYXRhID0ge1xcbiAgICAgICAgXFxcImFsYXJtc1xcXCI6IHtcXG4gICAgICAgICAgXFxcImNsZWFyXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImNsZWFyQWxsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRBbGxcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcImJvb2ttYXJrc1xcXCI6IHtcXG4gICAgICAgICAgXFxcImNyZWF0ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0Q2hpbGRyZW5cXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0UmVjZW50XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFN1YlRyZWVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0VHJlZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJtb3ZlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMixcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVUcmVlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNlYXJjaFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJ1cGRhdGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAyLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcImJyb3dzZXJBY3Rpb25cXFwiOiB7XFxuICAgICAgICAgIFxcXCJkaXNhYmxlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXFxcIjogdHJ1ZVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZW5hYmxlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXFxcIjogdHJ1ZVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0QmFkZ2VUZXh0XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFBvcHVwXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFRpdGxlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcIm9wZW5Qb3B1cFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJmYWxsYmFja1RvTm9DYWxsYmFja1xcXCI6IHRydWVcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNldEJhZGdlVGV4dFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJmYWxsYmFja1RvTm9DYWxsYmFja1xcXCI6IHRydWVcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNldEljb25cXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0UG9wdXBcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcXFwiOiB0cnVlXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZXRUaXRsZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJmYWxsYmFja1RvTm9DYWxsYmFja1xcXCI6IHRydWVcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJicm93c2luZ0RhdGFcXFwiOiB7XFxuICAgICAgICAgIFxcXCJyZW1vdmVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAyLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlQ2FjaGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlQ29va2llc1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVEb3dubG9hZHNcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlRm9ybURhdGFcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlSGlzdG9yeVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVMb2NhbFN0b3JhZ2VcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlUGFzc3dvcmRzXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZVBsdWdpbkRhdGFcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0dGluZ3NcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcImNvbW1hbmRzXFxcIjoge1xcbiAgICAgICAgICBcXFwiZ2V0QWxsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJjb250ZXh0TWVudXNcXFwiOiB7XFxuICAgICAgICAgIFxcXCJyZW1vdmVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlQWxsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInVwZGF0ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDIsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwiY29va2llc1xcXCI6IHtcXG4gICAgICAgICAgXFxcImdldFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRBbGxcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0QWxsQ29va2llU3RvcmVzXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZXRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcImRldnRvb2xzXFxcIjoge1xcbiAgICAgICAgICBcXFwiaW5zcGVjdGVkV2luZG93XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJldmFsXFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyLFxcbiAgICAgICAgICAgICAgXFxcInNpbmdsZUNhbGxiYWNrQXJnXFxcIjogZmFsc2VcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJwYW5lbHNcXFwiOiB7XFxuICAgICAgICAgICAgXFxcImNyZWF0ZVxcXCI6IHtcXG4gICAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMyxcXG4gICAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMyxcXG4gICAgICAgICAgICAgIFxcXCJzaW5nbGVDYWxsYmFja0FyZ1xcXCI6IHRydWVcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIFxcXCJlbGVtZW50c1xcXCI6IHtcXG4gICAgICAgICAgICAgIFxcXCJjcmVhdGVTaWRlYmFyUGFuZVxcXCI6IHtcXG4gICAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwiZG93bmxvYWRzXFxcIjoge1xcbiAgICAgICAgICBcXFwiY2FuY2VsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImRvd25sb2FkXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImVyYXNlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldEZpbGVJY29uXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcIm9wZW5cXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcXFwiOiB0cnVlXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJwYXVzZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVGaWxlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlc3VtZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZWFyY2hcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2hvd1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJmYWxsYmFja1RvTm9DYWxsYmFja1xcXCI6IHRydWVcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJleHRlbnNpb25cXFwiOiB7XFxuICAgICAgICAgIFxcXCJpc0FsbG93ZWRGaWxlU2NoZW1lQWNjZXNzXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwiaGlzdG9yeVxcXCI6IHtcXG4gICAgICAgICAgXFxcImFkZFVybFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJkZWxldGVBbGxcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZGVsZXRlUmFuZ2VcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZGVsZXRlVXJsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFZpc2l0c1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZWFyY2hcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcImkxOG5cXFwiOiB7XFxuICAgICAgICAgIFxcXCJkZXRlY3RMYW5ndWFnZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRBY2NlcHRMYW5ndWFnZXNcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcImlkZW50aXR5XFxcIjoge1xcbiAgICAgICAgICBcXFwibGF1bmNoV2ViQXV0aEZsb3dcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcImlkbGVcXFwiOiB7XFxuICAgICAgICAgIFxcXCJxdWVyeVN0YXRlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJtYW5hZ2VtZW50XFxcIjoge1xcbiAgICAgICAgICBcXFwiZ2V0XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldEFsbFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRTZWxmXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNldEVuYWJsZWRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAyLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwidW5pbnN0YWxsU2VsZlxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwibm90aWZpY2F0aW9uc1xcXCI6IHtcXG4gICAgICAgICAgXFxcImNsZWFyXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImNyZWF0ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRBbGxcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0UGVybWlzc2lvbkxldmVsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInVwZGF0ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDIsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwicGFnZUFjdGlvblxcXCI6IHtcXG4gICAgICAgICAgXFxcImdldFBvcHVwXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFRpdGxlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImhpZGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcXFwiOiB0cnVlXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZXRJY29uXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNldFBvcHVwXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXFxcIjogdHJ1ZVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0VGl0bGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcXFwiOiB0cnVlXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzaG93XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXFxcIjogdHJ1ZVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcInBlcm1pc3Npb25zXFxcIjoge1xcbiAgICAgICAgICBcXFwiY29udGFpbnNcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0QWxsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZXF1ZXN0XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJydW50aW1lXFxcIjoge1xcbiAgICAgICAgICBcXFwiZ2V0QmFja2dyb3VuZFBhZ2VcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0UGxhdGZvcm1JbmZvXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcIm9wZW5PcHRpb25zUGFnZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZXF1ZXN0VXBkYXRlQ2hlY2tcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2VuZE1lc3NhZ2VcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogM1xcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2VuZE5hdGl2ZU1lc3NhZ2VcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAyLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0VW5pbnN0YWxsVVJMXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJzZXNzaW9uc1xcXCI6IHtcXG4gICAgICAgICAgXFxcImdldERldmljZXNcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0UmVjZW50bHlDbG9zZWRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVzdG9yZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwic3RvcmFnZVxcXCI6IHtcXG4gICAgICAgICAgXFxcImxvY2FsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJjbGVhclxcXCI6IHtcXG4gICAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgXFxcImdldFxcXCI6IHtcXG4gICAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgXFxcImdldEJ5dGVzSW5Vc2VcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIFxcXCJyZW1vdmVcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIFxcXCJzZXRcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJtYW5hZ2VkXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJnZXRcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIFxcXCJnZXRCeXRlc0luVXNlXFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic3luY1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwiY2xlYXJcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIFxcXCJnZXRcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIFxcXCJnZXRCeXRlc0luVXNlXFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBcXFwicmVtb3ZlXFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBcXFwic2V0XFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcInRhYnNcXFwiOiB7XFxuICAgICAgICAgIFxcXCJjYXB0dXJlVmlzaWJsZVRhYlxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJjcmVhdGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZGV0ZWN0TGFuZ3VhZ2VcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZGlzY2FyZFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJkdXBsaWNhdGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZXhlY3V0ZVNjcmlwdFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0Q3VycmVudFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRab29tXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFpvb21TZXR0aW5nc1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnb0JhY2tcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ29Gb3J3YXJkXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImhpZ2hsaWdodFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJpbnNlcnRDU1NcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwibW92ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDIsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJxdWVyeVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZWxvYWRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZUNTU1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZW5kTWVzc2FnZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDIsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAzXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZXRab29tXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNldFpvb21TZXR0aW5nc1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJ1cGRhdGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcInRvcFNpdGVzXFxcIjoge1xcbiAgICAgICAgICBcXFwiZ2V0XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJ3ZWJOYXZpZ2F0aW9uXFxcIjoge1xcbiAgICAgICAgICBcXFwiZ2V0QWxsRnJhbWVzXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldEZyYW1lXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJ3ZWJSZXF1ZXN0XFxcIjoge1xcbiAgICAgICAgICBcXFwiaGFuZGxlckJlaGF2aW9yQ2hhbmdlZFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwid2luZG93c1xcXCI6IHtcXG4gICAgICAgICAgXFxcImNyZWF0ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0QWxsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldEN1cnJlbnRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0TGFzdEZvY3VzZWRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInVwZGF0ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDIsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9O1xcblxcbiAgICAgIGlmIChPYmplY3Qua2V5cyhhcGlNZXRhZGF0YSkubGVuZ3RoID09PSAwKSB7XFxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXFxcImFwaS1tZXRhZGF0YS5qc29uIGhhcyBub3QgYmVlbiBpbmNsdWRlZCBpbiBicm93c2VyLXBvbHlmaWxsXFxcIik7XFxuICAgICAgfVxcbiAgICAgIC8qKlxcbiAgICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXFxuICAgICAgICogbm90IGV4aXN0IHdoZW4gYWNjZXNzZWQsIGJ1dCBiZWhhdmVzIGV4YWN0bHkgYXMgYW4gb3JkaW5hcnkgV2Vha01hcFxcbiAgICAgICAqIG90aGVyd2lzZS5cXG4gICAgICAgKlxcbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNyZWF0ZUl0ZW1cXG4gICAgICAgKiAgICAgICAgQSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGNhbGxlZCBpbiBvcmRlciB0byBjcmVhdGUgdGhlIHZhbHVlIGZvciBhbnlcXG4gICAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXFxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHJlY2VpdmVzLCBhcyBpdHMgb25seSBhcmd1bWVudCwgdGhlIGtleSBiZWluZyBjcmVhdGVkLlxcbiAgICAgICAqL1xcblxcblxcbiAgICAgIGNsYXNzIERlZmF1bHRXZWFrTWFwIGV4dGVuZHMgV2Vha01hcCB7XFxuICAgICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xcbiAgICAgICAgICBzdXBlcihpdGVtcyk7XFxuICAgICAgICAgIHRoaXMuY3JlYXRlSXRlbSA9IGNyZWF0ZUl0ZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICBnZXQoa2V5KSB7XFxuICAgICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xcbiAgICAgICAgICAgIHRoaXMuc2V0KGtleSwgdGhpcy5jcmVhdGVJdGVtKGtleSkpO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KTtcXG4gICAgICAgIH1cXG5cXG4gICAgICB9XFxuICAgICAgLyoqXFxuICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXFxuICAgICAgICogdGhlcmVmb3JlIGJlIGFzc3VtZWQgdG8gYmVoYXZlIGFzIGEgUHJvbWlzZS5cXG4gICAgICAgKlxcbiAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXFxuICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHRoZW5hYmxlLlxcbiAgICAgICAqL1xcblxcblxcbiAgICAgIGNvbnN0IGlzVGhlbmFibGUgPSB2YWx1ZSA9PiB7XFxuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcXFwib2JqZWN0XFxcIiAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXFxcImZ1bmN0aW9uXFxcIjtcXG4gICAgICB9O1xcbiAgICAgIC8qKlxcbiAgICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBjYWxsZWQsIHdpbGwgcmVzb2x2ZSBvciByZWplY3RcXG4gICAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxcbiAgICAgICAqXFxuICAgICAgICogLSBJZiwgd2hlbiBjYWxsZWQsIGBjaHJvbWUucnVudGltZS5sYXN0RXJyb3JgIGNvbnRhaW5zIGEgbm9uLW51bGwgb2JqZWN0LFxcbiAgICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxcbiAgICAgICAqIC0gSWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGV4YWN0bHkgb25lIGFyZ3VtZW50LCB0aGUgcHJvbWlzZSBpc1xcbiAgICAgICAqICAgcmVzb2x2ZWQgdG8gdGhhdCB2YWx1ZS5cXG4gICAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXFxuICAgICAgICogICBmdW5jdGlvbidzIGFyZ3VtZW50cy5cXG4gICAgICAgKlxcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXFxuICAgICAgICogICAgICAgIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZXNvbHV0aW9uIGFuZCByZWplY3Rpb24gZnVuY3Rpb25zIG9mIGFcXG4gICAgICAgKiAgICAgICAgcHJvbWlzZS5cXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcXG4gICAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZXNvbHV0aW9uIGZ1bmN0aW9uLlxcbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVqZWN0aW9uXFxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgd3JhcHBlZCBtZXRob2Qgd2hpY2ggaGFzIGNyZWF0ZWQgdGhlIGNhbGxiYWNrLlxcbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4UmVzb2x2ZWRBcmdzXFxuICAgICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcXG4gICAgICAgKiAgICAgICAgY2FsbGJhY2sgY3JlYXRlZCBieSB0aGUgd3JhcHBlZCBhc3luYyBmdW5jdGlvbi5cXG4gICAgICAgKlxcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cXG4gICAgICAgKiAgICAgICAgVGhlIGdlbmVyYXRlZCBjYWxsYmFjayBmdW5jdGlvbi5cXG4gICAgICAgKi9cXG5cXG5cXG4gICAgICBjb25zdCBtYWtlQ2FsbGJhY2sgPSAocHJvbWlzZSwgbWV0YWRhdGEpID0+IHtcXG4gICAgICAgIHJldHVybiAoLi4uY2FsbGJhY2tBcmdzKSA9PiB7XFxuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XFxuICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcik7XFxuICAgICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgfHwgY2FsbGJhY2tBcmdzLmxlbmd0aCA8PSAxICYmIG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnICE9PSBmYWxzZSkge1xcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3NbMF0pO1xcbiAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3MpO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9O1xcbiAgICAgIH07XFxuXFxuICAgICAgY29uc3QgcGx1cmFsaXplQXJndW1lbnRzID0gbnVtQXJncyA9PiBudW1BcmdzID09IDEgPyBcXFwiYXJndW1lbnRcXFwiIDogXFxcImFyZ3VtZW50c1xcXCI7XFxuICAgICAgLyoqXFxuICAgICAgICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gZm9yIGEgbWV0aG9kIHdpdGggdGhlIGdpdmVuIG5hbWUgYW5kIG1ldGFkYXRhLlxcbiAgICAgICAqXFxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcXG4gICAgICAgKiAgICAgICAgVGhlIG5hbWUgb2YgdGhlIG1ldGhvZCB3aGljaCBpcyBiZWluZyB3cmFwcGVkLlxcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuXFxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5taW5BcmdzXFxuICAgICAgICogICAgICAgIFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbXVzdCBiZSBwYXNzZWQgdG8gdGhlXFxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBmZXdlciB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXFxuICAgICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXFxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhBcmdzXFxuICAgICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIG1vcmUgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxcbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4UmVzb2x2ZWRBcmdzXFxuICAgICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcXG4gICAgICAgKiAgICAgICAgY2FsbGJhY2sgY3JlYXRlZCBieSB0aGUgd3JhcHBlZCBhc3luYyBmdW5jdGlvbi5cXG4gICAgICAgKlxcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbihvYmplY3QsIC4uLiopfVxcbiAgICAgICAqICAgICAgIFRoZSBnZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbi5cXG4gICAgICAgKi9cXG5cXG5cXG4gICAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGFzeW5jRnVuY3Rpb25XcmFwcGVyKHRhcmdldCwgLi4uYXJncykge1xcbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XFxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XFxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XFxuICAgICAgICAgICAgaWYgKG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrKSB7XFxuICAgICAgICAgICAgICAvLyBUaGlzIEFQSSBtZXRob2QgaGFzIGN1cnJlbnRseSBubyBjYWxsYmFjayBvbiBDaHJvbWUsIGJ1dCBpdCByZXR1cm4gYSBwcm9taXNlIG9uIEZpcmVmb3gsXFxuICAgICAgICAgICAgICAvLyBhbmQgc28gdGhlIHBvbHlmaWxsIHdpbGwgdHJ5IHRvIGNhbGwgaXQgd2l0aCBhIGNhbGxiYWNrIGZpcnN0LCBhbmQgaXQgd2lsbCBmYWxsYmFja1xcbiAgICAgICAgICAgICAgLy8gdG8gbm90IHBhc3NpbmcgdGhlIGNhbGxiYWNrIGlmIHRoZSBmaXJzdCBjYWxsIGZhaWxzLlxcbiAgICAgICAgICAgICAgdHJ5IHtcXG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XFxuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSxcXG4gICAgICAgICAgICAgICAgICByZWplY3RcXG4gICAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcXG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGNiRXJyb3IpIHtcXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArIFxcXCJmYWxsaW5nIGJhY2sgdG8gY2FsbCBpdCB3aXRob3V0IGEgY2FsbGJhY2s6IFxcXCIsIGNiRXJyb3IpO1xcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7IC8vIFVwZGF0ZSB0aGUgQVBJIG1ldGhvZCBtZXRhZGF0YSwgc28gdGhhdCB0aGUgbmV4dCBBUEkgY2FsbHMgd2lsbCBub3QgdHJ5IHRvXFxuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cXG5cXG4gICAgICAgICAgICAgICAgbWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2sgPSBmYWxzZTtcXG4gICAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XFxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcXG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcXG4gICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XFxuICAgICAgICAgICAgICAgIHJlc29sdmUsXFxuICAgICAgICAgICAgICAgIHJlamVjdFxcbiAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH0pO1xcbiAgICAgICAgfTtcXG4gICAgICB9O1xcbiAgICAgIC8qKlxcbiAgICAgICAqIFdyYXBzIGFuIGV4aXN0aW5nIG1ldGhvZCBvZiB0aGUgdGFyZ2V0IG9iamVjdCwgc28gdGhhdCBjYWxscyB0byBpdCBhcmVcXG4gICAgICAgKiBpbnRlcmNlcHRlZCBieSB0aGUgZ2l2ZW4gd3JhcHBlciBmdW5jdGlvbi4gVGhlIHdyYXBwZXIgZnVuY3Rpb24gcmVjZWl2ZXMsXFxuICAgICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXFxuICAgICAgICogdGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cXG4gICAgICAgKlxcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcXG4gICAgICAgKiAgICAgICAgVGhlIG9yaWdpbmFsIHRhcmdldCBvYmplY3QgdGhhdCB0aGUgd3JhcHBlZCBtZXRob2QgYmVsb25ncyB0by5cXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtZXRob2RcXG4gICAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcXG4gICAgICAgKiAgICAgICAgb2JqZWN0IHdoaWNoIGlzIGNyZWF0ZWQgdG8gd3JhcCB0aGUgbWV0aG9kLlxcbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHdyYXBwZXJcXG4gICAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cXG4gICAgICAgKiAgICAgICAgb2YgdGhlIHdyYXBwZWQgbWV0aG9kLlxcbiAgICAgICAqXFxuICAgICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cXG4gICAgICAgKiAgICAgICAgQSBQcm94eSBvYmplY3QgZm9yIHRoZSBnaXZlbiBtZXRob2QsIHdoaWNoIGludm9rZXMgdGhlIGdpdmVuIHdyYXBwZXJcXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIGl0cyBwbGFjZS5cXG4gICAgICAgKi9cXG5cXG5cXG4gICAgICBjb25zdCB3cmFwTWV0aG9kID0gKHRhcmdldCwgbWV0aG9kLCB3cmFwcGVyKSA9PiB7XFxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KG1ldGhvZCwge1xcbiAgICAgICAgICBhcHBseSh0YXJnZXRNZXRob2QsIHRoaXNPYmosIGFyZ3MpIHtcXG4gICAgICAgICAgICByZXR1cm4gd3JhcHBlci5jYWxsKHRoaXNPYmosIHRhcmdldCwgLi4uYXJncyk7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgIH0pO1xcbiAgICAgIH07XFxuXFxuICAgICAgbGV0IGhhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xcbiAgICAgIC8qKlxcbiAgICAgICAqIFdyYXBzIGFuIG9iamVjdCBpbiBhIFByb3h5IHdoaWNoIGludGVyY2VwdHMgYW5kIHdyYXBzIGNlcnRhaW4gbWV0aG9kc1xcbiAgICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXFxuICAgICAgICpcXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XFxuICAgICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXFxuICAgICAgICpcXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gW3dyYXBwZXJzID0ge31dXFxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiBwcmVzZW50IGluIHRoaXMgb2JqZWN0IHRyZWUgaXMgY2FsbGVkIGluIHBsYWNlIG9mIHRoZVxcbiAgICAgICAqICAgICAgICBtZXRob2QgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlLiBUaGVzZVxcbiAgICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxcbiAgICAgICAqXFxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFttZXRhZGF0YSA9IHt9XVxcbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxcbiAgICAgICAqICAgICAgICBQcm9taXNlLWJhc2VkIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhc3luY2hyb25vdXMuIEFueSBmdW5jdGlvbiBpblxcbiAgICAgICAqICAgICAgICB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUgd2hpY2ggaGFzIGEgY29ycmVzcG9uZGluZyBtZXRhZGF0YSBvYmplY3RcXG4gICAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXFxuICAgICAgICogICAgICAgIGF1dG9tYXRpY2FsbHktZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24sIGFzIGRlc2NyaWJlZCBpblxcbiAgICAgICAqICAgICAgICB7QHNlZSB3cmFwQXN5bmNGdW5jdGlvbn1cXG4gICAgICAgKlxcbiAgICAgICAqIEByZXR1cm5zIHtQcm94eTxvYmplY3Q+fVxcbiAgICAgICAqL1xcblxcbiAgICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XFxuICAgICAgICBsZXQgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xcbiAgICAgICAgbGV0IGhhbmRsZXJzID0ge1xcbiAgICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcXG4gICAgICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQgfHwgcHJvcCBpbiBjYWNoZTtcXG4gICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgZ2V0KHByb3h5VGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XFxuICAgICAgICAgICAgICByZXR1cm4gY2FjaGVbcHJvcF07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGlmICghKHByb3AgaW4gdGFyZ2V0KSkge1xcbiAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BdO1xcblxcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFxcXCJmdW5jdGlvblxcXCIpIHtcXG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2Qgb24gdGhlIHVuZGVybHlpbmcgb2JqZWN0LiBDaGVjayBpZiB3ZSBuZWVkIHRvIGRvXFxuICAgICAgICAgICAgICAvLyBhbnkgd3JhcHBpbmcuXFxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHdyYXBwZXJzW3Byb3BdID09PSBcXFwiZnVuY3Rpb25cXFwiKSB7XFxuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBzcGVjaWFsLWNhc2Ugd3JhcHBlciBmb3IgdGhpcyBtZXRob2QuXFxuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcnNbcHJvcF0pO1xcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBhc3luYyBtZXRob2QgdGhhdCB3ZSBoYXZlIG1ldGFkYXRhIGZvci4gQ3JlYXRlIGFcXG4gICAgICAgICAgICAgICAgLy8gUHJvbWlzZSB3cmFwcGVyIGZvciBpdC5cXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XFxuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcik7XFxuICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXFxuICAgICAgICAgICAgICAgIC8vIG9yaWdpbmFsIG1ldGhvZCwgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmJpbmQodGFyZ2V0KTtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXFxcIm9iamVjdFxcXCIgJiYgdmFsdWUgIT09IG51bGwgJiYgKGhhc093blByb3BlcnR5KHdyYXBwZXJzLCBwcm9wKSB8fCBoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpKSB7XFxuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIG9iamVjdCB0aGF0IHdlIG5lZWQgdG8gZG8gc29tZSB3cmFwcGluZyBmb3IgdGhlIGNoaWxkcmVuXFxuICAgICAgICAgICAgICAvLyBvZi4gQ3JlYXRlIGEgc3ViLW9iamVjdCB3cmFwcGVyIGZvciBpdCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBjaGlsZFxcbiAgICAgICAgICAgICAgLy8gbWV0YWRhdGEuXFxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtwcm9wXSk7XFxuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgXFxcIipcXFwiKSkge1xcbiAgICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW1xcXCIqXFxcIl0pO1xcbiAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGRvIGFueSB3cmFwcGluZyBmb3IgdGhpcyBwcm9wZXJ0eSxcXG4gICAgICAgICAgICAgIC8vIHNvIGp1c3QgZm9yd2FyZCBhbGwgYWNjZXNzIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cXG4gICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwge1xcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXFxuXFxuICAgICAgICAgICAgICAgIGdldCgpIHtcXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xcbiAgICAgICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcXG4gICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XFxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xcbiAgICAgICAgICB9LFxcblxcbiAgICAgICAgICBzZXQocHJveHlUYXJnZXQsIHByb3AsIHZhbHVlLCByZWNlaXZlcikge1xcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XFxuICAgICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xcbiAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XFxuICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wLCBkZXNjKSB7XFxuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIGRlc2MpO1xcbiAgICAgICAgICB9LFxcblxcbiAgICAgICAgICBkZWxldGVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCkge1xcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGNhY2hlLCBwcm9wKTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgfTsgLy8gUGVyIGNvbnRyYWN0IG9mIHRoZSBQcm94eSBBUEksIHRoZSBcXFwiZ2V0XFxcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxcbiAgICAgICAgLy8gb3JpZ2luYWwgdmFsdWUgb2YgdGhlIHRhcmdldCBpZiB0aGF0IHZhbHVlIGlzIGRlY2xhcmVkIHJlYWQtb25seSBhbmRcXG4gICAgICAgIC8vIG5vbi1jb25maWd1cmFibGUuIEZvciB0aGlzIHJlYXNvbiwgd2UgY3JlYXRlIGFuIG9iamVjdCB3aXRoIHRoZVxcbiAgICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxcbiAgICAgICAgLy8gT3RoZXJ3aXNlIHdlIGNhbm5vdCByZXR1cm4gYSBjdXN0b20gb2JqZWN0IGZvciBBUElzIHRoYXRcXG4gICAgICAgIC8vIGFyZSBkZWNsYXJlZCByZWFkLW9ubHkgYW5kIG5vbi1jb25maWd1cmFibGUsIHN1Y2ggYXMgYGNocm9tZS5kZXZ0b29sc2AuXFxuICAgICAgICAvL1xcbiAgICAgICAgLy8gVGhlIHByb3h5IGhhbmRsZXJzIHRoZW1zZWx2ZXMgd2lsbCBzdGlsbCB1c2UgdGhlIG9yaWdpbmFsIGB0YXJnZXRgXFxuICAgICAgICAvLyBpbnN0ZWFkIG9mIHRoZSBgcHJveHlUYXJnZXRgLCBzbyB0aGF0IHRoZSBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIGFyZVxcbiAgICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cXG5cXG4gICAgICAgIGxldCBwcm94eVRhcmdldCA9IE9iamVjdC5jcmVhdGUodGFyZ2V0KTtcXG4gICAgICAgIHJldHVybiBuZXcgUHJveHkocHJveHlUYXJnZXQsIGhhbmRsZXJzKTtcXG4gICAgICB9O1xcbiAgICAgIC8qKlxcbiAgICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xcbiAgICAgICAqIHdyYXBwaW5nIG9mIGxpc3RlbmVyIGZ1bmN0aW9ucyB0aGF0IHRob3NlIG1lc3NhZ2VzIGFyZSBwYXNzZWQuXFxuICAgICAgICpcXG4gICAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxcbiAgICAgICAqIG1hcC4gU3Vic2VxdWVudCBjYWxscyB0byBgYWRkTGlzdGVuZXJgLCBgaGFzTGlzdGVuZXJgLCBvciBgcmVtb3ZlTGlzdGVuZXJgXFxuICAgICAgICogcmV0cmlldmUgdGhlIG9yaWdpbmFsIHdyYXBwZXIsIHNvIHRoYXQgIGF0dGVtcHRzIHRvIHJlbW92ZSBhXFxuICAgICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxcbiAgICAgICAqXFxuICAgICAgICogQHBhcmFtIHtEZWZhdWx0V2Vha01hcDxmdW5jdGlvbiwgZnVuY3Rpb24+fSB3cmFwcGVyTWFwXFxuICAgICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXFxuICAgICAgICogICAgICAgIGZvciBhIGdpdmVuIGxpc3RlbmVyIGZ1bmN0aW9uIHdoZW4gb25lIGRvZXMgbm90IGV4aXN0LCBhbmQgcmV0cmlldmVcXG4gICAgICAgKiAgICAgICAgYW4gZXhpc3Rpbmcgb25lIHdoZW4gaXQgZG9lcy5cXG4gICAgICAgKlxcbiAgICAgICAqIEByZXR1cm5zIHtvYmplY3R9XFxuICAgICAgICovXFxuXFxuXFxuICAgICAgY29uc3Qgd3JhcEV2ZW50ID0gd3JhcHBlck1hcCA9PiAoe1xcbiAgICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xcbiAgICAgICAgICB0YXJnZXQuYWRkTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpLCAuLi5hcmdzKTtcXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBoYXNMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XFxuICAgICAgICAgIHJldHVybiB0YXJnZXQuaGFzTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcXG4gICAgICAgIH0sXFxuXFxuICAgICAgICByZW1vdmVMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XFxuICAgICAgICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xcbiAgICAgICAgfVxcblxcbiAgICAgIH0pOyAvLyBLZWVwIHRyYWNrIGlmIHRoZSBkZXByZWNhdGlvbiB3YXJuaW5nIGhhcyBiZWVuIGxvZ2dlZCBhdCBsZWFzdCBvbmNlLlxcblxcblxcbiAgICAgIGxldCBsb2dnZWRTZW5kUmVzcG9uc2VEZXByZWNhdGlvbldhcm5pbmcgPSBmYWxzZTtcXG4gICAgICBjb25zdCBvbk1lc3NhZ2VXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XFxuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcXFwiZnVuY3Rpb25cXFwiKSB7XFxuICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcXG4gICAgICAgIH1cXG4gICAgICAgIC8qKlxcbiAgICAgICAgICogV3JhcHMgYSBtZXNzYWdlIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgbWF5IHNlbmQgcmVzcG9uc2VzIGJhc2VkIG9uXFxuICAgICAgICAgKiBpdHMgcmV0dXJuIHZhbHVlLCByYXRoZXIgdGhhbiBieSByZXR1cm5pbmcgYSBzZW50aW5lbCB2YWx1ZSBhbmQgY2FsbGluZyBhXFxuICAgICAgICAgKiBjYWxsYmFjay4gSWYgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLCB0aGUgcmVzcG9uc2UgaXNcXG4gICAgICAgICAqIHNlbnQgd2hlbiB0aGUgcHJvbWlzZSBlaXRoZXIgcmVzb2x2ZXMgb3IgcmVqZWN0cy5cXG4gICAgICAgICAqXFxuICAgICAgICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VcXG4gICAgICAgICAqICAgICAgICBUaGUgbWVzc2FnZSBzZW50IGJ5IHRoZSBvdGhlciBlbmQgb2YgdGhlIGNoYW5uZWwuXFxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gc2VuZGVyXFxuICAgICAgICAgKiAgICAgICAgRGV0YWlscyBhYm91dCB0aGUgc2VuZGVyIG9mIHRoZSBtZXNzYWdlLlxcbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbigqKX0gc2VuZFJlc3BvbnNlXFxuICAgICAgICAgKiAgICAgICAgQSBjYWxsYmFjayB3aGljaCwgd2hlbiBjYWxsZWQgd2l0aCBhbiBhcmJpdHJhcnkgYXJndW1lbnQsIHNlbmRzXFxuICAgICAgICAgKiAgICAgICAgdGhhdCB2YWx1ZSBhcyBhIHJlc3BvbnNlLlxcbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XFxuICAgICAgICAgKiAgICAgICAgVHJ1ZSBpZiB0aGUgd3JhcHBlZCBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHdoaWNoIHdpbGwgbGF0ZXJcXG4gICAgICAgICAqICAgICAgICB5aWVsZCBhIHJlc3BvbnNlLiBGYWxzZSBvdGhlcndpc2UuXFxuICAgICAgICAgKi9cXG5cXG5cXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBvbk1lc3NhZ2UobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcXG4gICAgICAgICAgbGV0IGRpZENhbGxTZW5kUmVzcG9uc2UgPSBmYWxzZTtcXG4gICAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XFxuICAgICAgICAgIGxldCBzZW5kUmVzcG9uc2VQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XFxuICAgICAgICAgICAgd3JhcHBlZFNlbmRSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xcbiAgICAgICAgICAgICAgaWYgKCFsb2dnZWRTZW5kUmVzcG9uc2VEZXByZWNhdGlvbldhcm5pbmcpIHtcXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFNFTkRfUkVTUE9OU0VfREVQUkVDQVRJT05fV0FSTklORywgbmV3IEVycm9yKCkuc3RhY2spO1xcbiAgICAgICAgICAgICAgICBsb2dnZWRTZW5kUmVzcG9uc2VEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xcbiAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XFxuICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcXG4gICAgICAgICAgICB9O1xcbiAgICAgICAgICB9KTtcXG4gICAgICAgICAgbGV0IHJlc3VsdDtcXG5cXG4gICAgICAgICAgdHJ5IHtcXG4gICAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHdyYXBwZWRTZW5kUmVzcG9uc2UpO1xcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcXG4gICAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlamVjdChlcnIpO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIGNvbnN0IGlzUmVzdWx0VGhlbmFibGUgPSByZXN1bHQgIT09IHRydWUgJiYgaXNUaGVuYWJsZShyZXN1bHQpOyAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcXG4gICAgICAgICAgLy8gd3JhcHBlZFNlbmRSZXNwb25zZSBzeW5jaHJvbm91c2x5LCB3ZSBjYW4gZXhpdCBlYXJsaWVyXFxuICAgICAgICAgIC8vIGJlY2F1c2UgdGhlcmUgd2lsbCBiZSBubyByZXNwb25zZSBzZW50IGZyb20gdGhpcyBsaXN0ZW5lci5cXG5cXG4gICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSAmJiAhaXNSZXN1bHRUaGVuYWJsZSAmJiAhZGlkQ2FsbFNlbmRSZXNwb25zZSkge1xcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcXG4gICAgICAgICAgfSAvLyBBIHNtYWxsIGhlbHBlciB0byBzZW5kIHRoZSBtZXNzYWdlIGlmIHRoZSBwcm9taXNlIHJlc29sdmVzXFxuICAgICAgICAgIC8vIGFuZCBhbiBlcnJvciBpZiB0aGUgcHJvbWlzZSByZWplY3RzIChhIHdyYXBwZWQgc2VuZE1lc3NhZ2UgaGFzXFxuICAgICAgICAgIC8vIHRvIHRyYW5zbGF0ZSB0aGUgbWVzc2FnZSBpbnRvIGEgcmVzb2x2ZWQgcHJvbWlzZSBvciBhIHJlamVjdGVkXFxuICAgICAgICAgIC8vIHByb21pc2UpLlxcblxcblxcbiAgICAgICAgICBjb25zdCBzZW5kUHJvbWlzZWRSZXN1bHQgPSBwcm9taXNlID0+IHtcXG4gICAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcXG4gICAgICAgICAgICAgIC8vIHNlbmQgdGhlIG1lc3NhZ2UgdmFsdWUuXFxuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnKTtcXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XFxuICAgICAgICAgICAgICAvLyBTZW5kIGEgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaWYgdGhlIHJlamVjdGVkIHZhbHVlXFxuICAgICAgICAgICAgICAvLyBpcyBhbiBpbnN0YW5jZSBvZiBlcnJvciwgb3IgdGhlIG9iamVjdCBpdHNlbGYgb3RoZXJ3aXNlLlxcbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XFxuXFxuICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgfHwgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09IFxcXCJzdHJpbmdcXFwiKSkge1xcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcXG4gICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcXFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFxcXCI7XFxuICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2Uoe1xcbiAgICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcXG4gICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XFxuICAgICAgICAgICAgICAvLyBQcmludCBhbiBlcnJvciBvbiB0aGUgY29uc29sZSBpZiB1bmFibGUgdG8gc2VuZCB0aGUgcmVzcG9uc2UuXFxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxcXCJGYWlsZWQgdG8gc2VuZCBvbk1lc3NhZ2UgcmVqZWN0ZWQgcmVwbHlcXFwiLCBlcnIpO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICB9OyAvLyBJZiB0aGUgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCBzZW5kIHRoZSByZXNvbHZlZCB2YWx1ZSBhcyBhXFxuICAgICAgICAgIC8vIHJlc3VsdCwgb3RoZXJ3aXNlIHdhaXQgdGhlIHByb21pc2UgcmVsYXRlZCB0byB0aGUgd3JhcHBlZFNlbmRSZXNwb25zZVxcbiAgICAgICAgICAvLyBjYWxsYmFjayB0byByZXNvbHZlIGFuZCBzZW5kIGl0IGFzIGEgcmVzcG9uc2UuXFxuXFxuXFxuICAgICAgICAgIGlmIChpc1Jlc3VsdFRoZW5hYmxlKSB7XFxuICAgICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHJlc3VsdCk7XFxuICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHNlbmRSZXNwb25zZVByb21pc2UpO1xcbiAgICAgICAgICB9IC8vIExldCBDaHJvbWUga25vdyB0aGF0IHRoZSBsaXN0ZW5lciBpcyByZXBseWluZy5cXG5cXG5cXG4gICAgICAgICAgcmV0dXJuIHRydWU7XFxuICAgICAgICB9O1xcbiAgICAgIH0pO1xcblxcbiAgICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrID0gKHtcXG4gICAgICAgIHJlamVjdCxcXG4gICAgICAgIHJlc29sdmVcXG4gICAgICB9LCByZXBseSkgPT4ge1xcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcXG4gICAgICAgICAgLy8gRGV0ZWN0IHdoZW4gbm9uZSBvZiB0aGUgbGlzdGVuZXJzIHJlcGxpZWQgdG8gdGhlIHNlbmRNZXNzYWdlIGNhbGwgYW5kIHJlc29sdmVcXG4gICAgICAgICAgLy8gdGhlIHByb21pc2UgdG8gdW5kZWZpbmVkIGFzIGluIEZpcmVmb3guXFxuICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxcbiAgICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlID09PSBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UpIHtcXG4gICAgICAgICAgICByZXNvbHZlKCk7XFxuICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgcmVqZWN0KGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xcbiAgICAgICAgICAvLyBDb252ZXJ0IGJhY2sgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGludG9cXG4gICAgICAgICAgLy8gYW4gRXJyb3IgaW5zdGFuY2UuXFxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgcmVzb2x2ZShyZXBseSk7XFxuICAgICAgICB9XFxuICAgICAgfTtcXG5cXG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xcbiAgICAgICAgICBjb25zdCB3cmFwcGVkQ2IgPSB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjay5iaW5kKG51bGwsIHtcXG4gICAgICAgICAgICByZXNvbHZlLFxcbiAgICAgICAgICAgIHJlamVjdFxcbiAgICAgICAgICB9KTtcXG4gICAgICAgICAgYXJncy5wdXNoKHdyYXBwZWRDYik7XFxuICAgICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcXG4gICAgICAgIH0pO1xcbiAgICAgIH07XFxuXFxuICAgICAgY29uc3Qgc3RhdGljV3JhcHBlcnMgPSB7XFxuICAgICAgICBydW50aW1lOiB7XFxuICAgICAgICAgIG9uTWVzc2FnZTogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcXG4gICAgICAgICAgb25NZXNzYWdlRXh0ZXJuYWw6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXFxuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcXFwic2VuZE1lc3NhZ2VcXFwiLCB7XFxuICAgICAgICAgICAgbWluQXJnczogMSxcXG4gICAgICAgICAgICBtYXhBcmdzOiAzXFxuICAgICAgICAgIH0pXFxuICAgICAgICB9LFxcbiAgICAgICAgdGFiczoge1xcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXFxcInNlbmRNZXNzYWdlXFxcIiwge1xcbiAgICAgICAgICAgIG1pbkFyZ3M6IDIsXFxuICAgICAgICAgICAgbWF4QXJnczogM1xcbiAgICAgICAgICB9KVxcbiAgICAgICAgfVxcbiAgICAgIH07XFxuICAgICAgY29uc3Qgc2V0dGluZ01ldGFkYXRhID0ge1xcbiAgICAgICAgY2xlYXI6IHtcXG4gICAgICAgICAgbWluQXJnczogMSxcXG4gICAgICAgICAgbWF4QXJnczogMVxcbiAgICAgICAgfSxcXG4gICAgICAgIGdldDoge1xcbiAgICAgICAgICBtaW5BcmdzOiAxLFxcbiAgICAgICAgICBtYXhBcmdzOiAxXFxuICAgICAgICB9LFxcbiAgICAgICAgc2V0OiB7XFxuICAgICAgICAgIG1pbkFyZ3M6IDEsXFxuICAgICAgICAgIG1heEFyZ3M6IDFcXG4gICAgICAgIH1cXG4gICAgICB9O1xcbiAgICAgIGFwaU1ldGFkYXRhLnByaXZhY3kgPSB7XFxuICAgICAgICBuZXR3b3JrOiB7XFxuICAgICAgICAgIFxcXCIqXFxcIjogc2V0dGluZ01ldGFkYXRhXFxuICAgICAgICB9LFxcbiAgICAgICAgc2VydmljZXM6IHtcXG4gICAgICAgICAgXFxcIipcXFwiOiBzZXR0aW5nTWV0YWRhdGFcXG4gICAgICAgIH0sXFxuICAgICAgICB3ZWJzaXRlczoge1xcbiAgICAgICAgICBcXFwiKlxcXCI6IHNldHRpbmdNZXRhZGF0YVxcbiAgICAgICAgfVxcbiAgICAgIH07XFxuICAgICAgcmV0dXJuIHdyYXBPYmplY3QoZXh0ZW5zaW9uQVBJcywgc3RhdGljV3JhcHBlcnMsIGFwaU1ldGFkYXRhKTtcXG4gICAgfTtcXG5cXG4gICAgaWYgKHR5cGVvZiBjaHJvbWUgIT0gXFxcIm9iamVjdFxcXCIgfHwgIWNocm9tZSB8fCAhY2hyb21lLnJ1bnRpbWUgfHwgIWNocm9tZS5ydW50aW1lLmlkKSB7XFxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxcXCJUaGlzIHNjcmlwdCBzaG91bGQgb25seSBiZSBsb2FkZWQgaW4gYSBicm93c2VyIGV4dGVuc2lvbi5cXFwiKTtcXG4gICAgfSAvLyBUaGUgYnVpbGQgcHJvY2VzcyBhZGRzIGEgVU1EIHdyYXBwZXIgYXJvdW5kIHRoaXMgZmlsZSwgd2hpY2ggbWFrZXMgdGhlXFxuICAgIC8vIGBtb2R1bGVgIHZhcmlhYmxlIGF2YWlsYWJsZS5cXG5cXG5cXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB3cmFwQVBJcyhjaHJvbWUpO1xcbiAgfSBlbHNlIHtcXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBicm93c2VyO1xcbiAgfVxcbn0pO1xcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJyb3dzZXItcG9seWZpbGwuanMubWFwXFxuXCI7IiwidmFyIFNvdXJjZU1hcENvbnN1bWVyID0gcmVxdWlyZSgnc291cmNlLW1hcCcpLlNvdXJjZU1hcENvbnN1bWVyO1xudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbnZhciBmcztcbnRyeSB7XG4gIGZzID0gcmVxdWlyZSgnZnMnKTtcbiAgaWYgKCFmcy5leGlzdHNTeW5jIHx8ICFmcy5yZWFkRmlsZVN5bmMpIHtcbiAgICAvLyBmcyBkb2Vzbid0IGhhdmUgYWxsIG1ldGhvZHMgd2UgbmVlZFxuICAgIGZzID0gbnVsbDtcbiAgfVxufSBjYXRjaCAoZXJyKSB7XG4gIC8qIG5vcCAqL1xufVxuXG52YXIgYnVmZmVyRnJvbSA9IHJlcXVpcmUoJ2J1ZmZlci1mcm9tJyk7XG5cbi8qKlxuICogUmVxdWlyZXMgYSBtb2R1bGUgd2hpY2ggaXMgcHJvdGVjdGVkIGFnYWluc3QgYnVuZGxlciBtaW5pZmljYXRpb24uXG4gKlxuICogQHBhcmFtIHtOb2RlTW9kdWxlfSBtb2RcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0XG4gKi9cbmZ1bmN0aW9uIGR5bmFtaWNSZXF1aXJlKG1vZCwgcmVxdWVzdCkge1xuICByZXR1cm4gbW9kLnJlcXVpcmUocmVxdWVzdCk7XG59XG5cbi8vIE9ubHkgaW5zdGFsbCBvbmNlIGlmIGNhbGxlZCBtdWx0aXBsZSB0aW1lc1xudmFyIGVycm9yRm9ybWF0dGVySW5zdGFsbGVkID0gZmFsc2U7XG52YXIgdW5jYXVnaHRTaGltSW5zdGFsbGVkID0gZmFsc2U7XG5cbi8vIElmIHRydWUsIHRoZSBjYWNoZXMgYXJlIHJlc2V0IGJlZm9yZSBhIHN0YWNrIHRyYWNlIGZvcm1hdHRpbmcgb3BlcmF0aW9uXG52YXIgZW1wdHlDYWNoZUJldHdlZW5PcGVyYXRpb25zID0gZmFsc2U7XG5cbi8vIFN1cHBvcnRzIHticm93c2VyLCBub2RlLCBhdXRvfVxudmFyIGVudmlyb25tZW50ID0gXCJhdXRvXCI7XG5cbi8vIE1hcHMgYSBmaWxlIHBhdGggdG8gYSBzdHJpbmcgY29udGFpbmluZyB0aGUgZmlsZSBjb250ZW50c1xudmFyIGZpbGVDb250ZW50c0NhY2hlID0ge307XG5cbi8vIE1hcHMgYSBmaWxlIHBhdGggdG8gYSBzb3VyY2UgbWFwIGZvciB0aGF0IGZpbGVcbnZhciBzb3VyY2VNYXBDYWNoZSA9IHt9O1xuXG4vLyBSZWdleCBmb3IgZGV0ZWN0aW5nIHNvdXJjZSBtYXBzXG52YXIgcmVTb3VyY2VNYXAgPSAvXmRhdGE6YXBwbGljYXRpb25cXC9qc29uW14sXStiYXNlNjQsLztcblxuLy8gUHJpb3JpdHkgbGlzdCBvZiByZXRyaWV2ZSBoYW5kbGVyc1xudmFyIHJldHJpZXZlRmlsZUhhbmRsZXJzID0gW107XG52YXIgcmV0cmlldmVNYXBIYW5kbGVycyA9IFtdO1xuXG5mdW5jdGlvbiBpc0luQnJvd3NlcigpIHtcbiAgaWYgKGVudmlyb25tZW50ID09PSBcImJyb3dzZXJcIilcbiAgICByZXR1cm4gdHJ1ZTtcbiAgaWYgKGVudmlyb25tZW50ID09PSBcIm5vZGVcIilcbiAgICByZXR1cm4gZmFsc2U7XG4gIHJldHVybiAoKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSAmJiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSAnZnVuY3Rpb24nKSAmJiAhKHdpbmRvdy5yZXF1aXJlICYmIHdpbmRvdy5tb2R1bGUgJiYgd2luZG93LnByb2Nlc3MgJiYgd2luZG93LnByb2Nlc3MudHlwZSA9PT0gXCJyZW5kZXJlclwiKSk7XG59XG5cbmZ1bmN0aW9uIGhhc0dsb2JhbFByb2Nlc3NFdmVudEVtaXR0ZXIoKSB7XG4gIHJldHVybiAoKHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JykgJiYgKHByb2Nlc3MgIT09IG51bGwpICYmICh0eXBlb2YgcHJvY2Vzcy5vbiA9PT0gJ2Z1bmN0aW9uJykpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVyRXhlYyhsaXN0KSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciByZXQgPSBsaXN0W2ldKGFyZyk7XG4gICAgICBpZiAocmV0KSB7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xufVxuXG52YXIgcmV0cmlldmVGaWxlID0gaGFuZGxlckV4ZWMocmV0cmlldmVGaWxlSGFuZGxlcnMpO1xuXG5yZXRyaWV2ZUZpbGVIYW5kbGVycy5wdXNoKGZ1bmN0aW9uKHBhdGgpIHtcbiAgLy8gVHJpbSB0aGUgcGF0aCB0byBtYWtlIHN1cmUgdGhlcmUgaXMgbm8gZXh0cmEgd2hpdGVzcGFjZS5cbiAgcGF0aCA9IHBhdGgudHJpbSgpO1xuICBpZiAoL15maWxlOi8udGVzdChwYXRoKSkge1xuICAgIC8vIGV4aXN0c1N5bmMvcmVhZEZpbGVTeW5jIGNhbid0IGhhbmRsZSBmaWxlIHByb3RvY29sLCBidXQgb25jZSBzdHJpcHBlZCwgaXQgd29ya3NcbiAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9maWxlOlxcL1xcL1xcLyhcXHc6KT8vLCBmdW5jdGlvbihwcm90b2NvbCwgZHJpdmUpIHtcbiAgICAgIHJldHVybiBkcml2ZSA/XG4gICAgICAgICcnIDogLy8gZmlsZTovLy9DOi9kaXIvZmlsZSAtPiBDOi9kaXIvZmlsZVxuICAgICAgICAnLyc7IC8vIGZpbGU6Ly8vcm9vdC1kaXIvZmlsZSAtPiAvcm9vdC1kaXIvZmlsZVxuICAgIH0pO1xuICB9XG4gIGlmIChwYXRoIGluIGZpbGVDb250ZW50c0NhY2hlKSB7XG4gICAgcmV0dXJuIGZpbGVDb250ZW50c0NhY2hlW3BhdGhdO1xuICB9XG5cbiAgdmFyIGNvbnRlbnRzID0gJyc7XG4gIHRyeSB7XG4gICAgaWYgKCFmcykge1xuICAgICAgLy8gVXNlIFNKQVggaWYgd2UgYXJlIGluIHRoZSBicm93c2VyXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICB4aHIub3BlbignR0VUJywgcGF0aCwgLyoqIGFzeW5jICovIGZhbHNlKTtcbiAgICAgIHhoci5zZW5kKG51bGwpO1xuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICBjb250ZW50cyA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmcy5leGlzdHNTeW5jKHBhdGgpKSB7XG4gICAgICAvLyBPdGhlcndpc2UsIHVzZSB0aGUgZmlsZXN5c3RlbVxuICAgICAgY29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMocGF0aCwgJ3V0ZjgnKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgLyogaWdub3JlIGFueSBlcnJvcnMgKi9cbiAgfVxuXG4gIHJldHVybiBmaWxlQ29udGVudHNDYWNoZVtwYXRoXSA9IGNvbnRlbnRzO1xufSk7XG5cbi8vIFN1cHBvcnQgVVJMcyByZWxhdGl2ZSB0byBhIGRpcmVjdG9yeSwgYnV0IGJlIGNhcmVmdWwgYWJvdXQgYSBwcm90b2NvbCBwcmVmaXhcbi8vIGluIGNhc2Ugd2UgYXJlIGluIHRoZSBicm93c2VyIChpLmUuIGRpcmVjdG9yaWVzIG1heSBzdGFydCB3aXRoIFwiaHR0cDovL1wiIG9yIFwiZmlsZTovLy9cIilcbmZ1bmN0aW9uIHN1cHBvcnRSZWxhdGl2ZVVSTChmaWxlLCB1cmwpIHtcbiAgaWYgKCFmaWxlKSByZXR1cm4gdXJsO1xuICB2YXIgZGlyID0gcGF0aC5kaXJuYW1lKGZpbGUpO1xuICB2YXIgbWF0Y2ggPSAvXlxcdys6XFwvXFwvW15cXC9dKi8uZXhlYyhkaXIpO1xuICB2YXIgcHJvdG9jb2wgPSBtYXRjaCA/IG1hdGNoWzBdIDogJyc7XG4gIHZhciBzdGFydFBhdGggPSBkaXIuc2xpY2UocHJvdG9jb2wubGVuZ3RoKTtcbiAgaWYgKHByb3RvY29sICYmIC9eXFwvXFx3XFw6Ly50ZXN0KHN0YXJ0UGF0aCkpIHtcbiAgICAvLyBoYW5kbGUgZmlsZTovLy9DOi8gcGF0aHNcbiAgICBwcm90b2NvbCArPSAnLyc7XG4gICAgcmV0dXJuIHByb3RvY29sICsgcGF0aC5yZXNvbHZlKGRpci5zbGljZShwcm90b2NvbC5sZW5ndGgpLCB1cmwpLnJlcGxhY2UoL1xcXFwvZywgJy8nKTtcbiAgfVxuICByZXR1cm4gcHJvdG9jb2wgKyBwYXRoLnJlc29sdmUoZGlyLnNsaWNlKHByb3RvY29sLmxlbmd0aCksIHVybCk7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlU291cmNlTWFwVVJMKHNvdXJjZSkge1xuICB2YXIgZmlsZURhdGE7XG5cbiAgaWYgKGlzSW5Ccm93c2VyKCkpIHtcbiAgICAgdHJ5IHtcbiAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgeGhyLm9wZW4oJ0dFVCcsIHNvdXJjZSwgZmFsc2UpO1xuICAgICAgIHhoci5zZW5kKG51bGwpO1xuICAgICAgIGZpbGVEYXRhID0geGhyLnJlYWR5U3RhdGUgPT09IDQgPyB4aHIucmVzcG9uc2VUZXh0IDogbnVsbDtcblxuICAgICAgIC8vIFN1cHBvcnQgcHJvdmlkaW5nIGEgc291cmNlTWFwcGluZ1VSTCB2aWEgdGhlIFNvdXJjZU1hcCBoZWFkZXJcbiAgICAgICB2YXIgc291cmNlTWFwSGVhZGVyID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKFwiU291cmNlTWFwXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5nZXRSZXNwb25zZUhlYWRlcihcIlgtU291cmNlTWFwXCIpO1xuICAgICAgIGlmIChzb3VyY2VNYXBIZWFkZXIpIHtcbiAgICAgICAgIHJldHVybiBzb3VyY2VNYXBIZWFkZXI7XG4gICAgICAgfVxuICAgICB9IGNhdGNoIChlKSB7XG4gICAgIH1cbiAgfVxuXG4gIC8vIEdldCB0aGUgVVJMIG9mIHRoZSBzb3VyY2UgbWFwXG4gIGZpbGVEYXRhID0gcmV0cmlldmVGaWxlKHNvdXJjZSk7XG4gIHZhciByZSA9IC8oPzpcXC9cXC9bQCNdW1xcc10qc291cmNlTWFwcGluZ1VSTD0oW15cXHMnXCJdKylbXFxzXSokKXwoPzpcXC9cXCpbQCNdW1xcc10qc291cmNlTWFwcGluZ1VSTD0oW15cXHMqJ1wiXSspW1xcc10qKD86XFwqXFwvKVtcXHNdKiQpL21nO1xuICAvLyBLZWVwIGV4ZWN1dGluZyB0aGUgc2VhcmNoIHRvIGZpbmQgdGhlICpsYXN0KiBzb3VyY2VNYXBwaW5nVVJMIHRvIGF2b2lkXG4gIC8vIHBpY2tpbmcgdXAgc291cmNlTWFwcGluZ1VSTHMgZnJvbSBjb21tZW50cywgc3RyaW5ncywgZXRjLlxuICB2YXIgbGFzdE1hdGNoLCBtYXRjaDtcbiAgd2hpbGUgKG1hdGNoID0gcmUuZXhlYyhmaWxlRGF0YSkpIGxhc3RNYXRjaCA9IG1hdGNoO1xuICBpZiAoIWxhc3RNYXRjaCkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBsYXN0TWF0Y2hbMV07XG59O1xuXG4vLyBDYW4gYmUgb3ZlcnJpZGRlbiBieSB0aGUgcmV0cmlldmVTb3VyY2VNYXAgb3B0aW9uIHRvIGluc3RhbGwuIFRha2VzIGFcbi8vIGdlbmVyYXRlZCBzb3VyY2UgZmlsZW5hbWU7IHJldHVybnMgYSB7bWFwLCBvcHRpb25hbCB1cmx9IG9iamVjdCwgb3IgbnVsbCBpZlxuLy8gdGhlcmUgaXMgbm8gc291cmNlIG1hcC4gIFRoZSBtYXAgZmllbGQgbWF5IGJlIGVpdGhlciBhIHN0cmluZyBvciB0aGUgcGFyc2VkXG4vLyBKU09OIG9iamVjdCAoaWUsIGl0IG11c3QgYmUgYSB2YWxpZCBhcmd1bWVudCB0byB0aGUgU291cmNlTWFwQ29uc3VtZXJcbi8vIGNvbnN0cnVjdG9yKS5cbnZhciByZXRyaWV2ZVNvdXJjZU1hcCA9IGhhbmRsZXJFeGVjKHJldHJpZXZlTWFwSGFuZGxlcnMpO1xucmV0cmlldmVNYXBIYW5kbGVycy5wdXNoKGZ1bmN0aW9uKHNvdXJjZSkge1xuICB2YXIgc291cmNlTWFwcGluZ1VSTCA9IHJldHJpZXZlU291cmNlTWFwVVJMKHNvdXJjZSk7XG4gIGlmICghc291cmNlTWFwcGluZ1VSTCkgcmV0dXJuIG51bGw7XG5cbiAgLy8gUmVhZCB0aGUgY29udGVudHMgb2YgdGhlIHNvdXJjZSBtYXBcbiAgdmFyIHNvdXJjZU1hcERhdGE7XG4gIGlmIChyZVNvdXJjZU1hcC50ZXN0KHNvdXJjZU1hcHBpbmdVUkwpKSB7XG4gICAgLy8gU3VwcG9ydCBzb3VyY2UgbWFwIFVSTCBhcyBhIGRhdGEgdXJsXG4gICAgdmFyIHJhd0RhdGEgPSBzb3VyY2VNYXBwaW5nVVJMLnNsaWNlKHNvdXJjZU1hcHBpbmdVUkwuaW5kZXhPZignLCcpICsgMSk7XG4gICAgc291cmNlTWFwRGF0YSA9IGJ1ZmZlckZyb20ocmF3RGF0YSwgXCJiYXNlNjRcIikudG9TdHJpbmcoKTtcbiAgICBzb3VyY2VNYXBwaW5nVVJMID0gc291cmNlO1xuICB9IGVsc2Uge1xuICAgIC8vIFN1cHBvcnQgc291cmNlIG1hcCBVUkxzIHJlbGF0aXZlIHRvIHRoZSBzb3VyY2UgVVJMXG4gICAgc291cmNlTWFwcGluZ1VSTCA9IHN1cHBvcnRSZWxhdGl2ZVVSTChzb3VyY2UsIHNvdXJjZU1hcHBpbmdVUkwpO1xuICAgIHNvdXJjZU1hcERhdGEgPSByZXRyaWV2ZUZpbGUoc291cmNlTWFwcGluZ1VSTCk7XG4gIH1cblxuICBpZiAoIXNvdXJjZU1hcERhdGEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBzb3VyY2VNYXBwaW5nVVJMLFxuICAgIG1hcDogc291cmNlTWFwRGF0YVxuICB9O1xufSk7XG5cbmZ1bmN0aW9uIG1hcFNvdXJjZVBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gIHZhciBzb3VyY2VNYXAgPSBzb3VyY2VNYXBDYWNoZVtwb3NpdGlvbi5zb3VyY2VdO1xuICBpZiAoIXNvdXJjZU1hcCkge1xuICAgIC8vIENhbGwgdGhlIChvdmVycmlkZWFibGUpIHJldHJpZXZlU291cmNlTWFwIGZ1bmN0aW9uIHRvIGdldCB0aGUgc291cmNlIG1hcC5cbiAgICB2YXIgdXJsQW5kTWFwID0gcmV0cmlldmVTb3VyY2VNYXAocG9zaXRpb24uc291cmNlKTtcbiAgICBpZiAodXJsQW5kTWFwKSB7XG4gICAgICBzb3VyY2VNYXAgPSBzb3VyY2VNYXBDYWNoZVtwb3NpdGlvbi5zb3VyY2VdID0ge1xuICAgICAgICB1cmw6IHVybEFuZE1hcC51cmwsXG4gICAgICAgIG1hcDogbmV3IFNvdXJjZU1hcENvbnN1bWVyKHVybEFuZE1hcC5tYXApXG4gICAgICB9O1xuXG4gICAgICAvLyBMb2FkIGFsbCBzb3VyY2VzIHN0b3JlZCBpbmxpbmUgd2l0aCB0aGUgc291cmNlIG1hcCBpbnRvIHRoZSBmaWxlIGNhY2hlXG4gICAgICAvLyB0byBwcmV0ZW5kIGxpa2UgdGhleSBhcmUgYWxyZWFkeSBsb2FkZWQuIFRoZXkgbWF5IG5vdCBleGlzdCBvbiBkaXNrLlxuICAgICAgaWYgKHNvdXJjZU1hcC5tYXAuc291cmNlc0NvbnRlbnQpIHtcbiAgICAgICAgc291cmNlTWFwLm1hcC5zb3VyY2VzLmZvckVhY2goZnVuY3Rpb24oc291cmNlLCBpKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnRzID0gc291cmNlTWFwLm1hcC5zb3VyY2VzQ29udGVudFtpXTtcbiAgICAgICAgICBpZiAoY29udGVudHMpIHtcbiAgICAgICAgICAgIHZhciB1cmwgPSBzdXBwb3J0UmVsYXRpdmVVUkwoc291cmNlTWFwLnVybCwgc291cmNlKTtcbiAgICAgICAgICAgIGZpbGVDb250ZW50c0NhY2hlW3VybF0gPSBjb250ZW50cztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzb3VyY2VNYXAgPSBzb3VyY2VNYXBDYWNoZVtwb3NpdGlvbi5zb3VyY2VdID0ge1xuICAgICAgICB1cmw6IG51bGwsXG4gICAgICAgIG1hcDogbnVsbFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXNvbHZlIHRoZSBzb3VyY2UgVVJMIHJlbGF0aXZlIHRvIHRoZSBVUkwgb2YgdGhlIHNvdXJjZSBtYXBcbiAgaWYgKHNvdXJjZU1hcCAmJiBzb3VyY2VNYXAubWFwICYmIHR5cGVvZiBzb3VyY2VNYXAubWFwLm9yaWdpbmFsUG9zaXRpb25Gb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgb3JpZ2luYWxQb3NpdGlvbiA9IHNvdXJjZU1hcC5tYXAub3JpZ2luYWxQb3NpdGlvbkZvcihwb3NpdGlvbik7XG5cbiAgICAvLyBPbmx5IHJldHVybiB0aGUgb3JpZ2luYWwgcG9zaXRpb24gaWYgYSBtYXRjaGluZyBsaW5lIHdhcyBmb3VuZC4gSWYgbm9cbiAgICAvLyBtYXRjaGluZyBsaW5lIGlzIGZvdW5kIHRoZW4gd2UgcmV0dXJuIHBvc2l0aW9uIGluc3RlYWQsIHdoaWNoIHdpbGwgY2F1c2VcbiAgICAvLyB0aGUgc3RhY2sgdHJhY2UgdG8gcHJpbnQgdGhlIHBhdGggYW5kIGxpbmUgZm9yIHRoZSBjb21waWxlZCBmaWxlLiBJdCBpc1xuICAgIC8vIGJldHRlciB0byBnaXZlIGEgcHJlY2lzZSBsb2NhdGlvbiBpbiB0aGUgY29tcGlsZWQgZmlsZSB0aGFuIGEgdmFndWVcbiAgICAvLyBsb2NhdGlvbiBpbiB0aGUgb3JpZ2luYWwgZmlsZS5cbiAgICBpZiAob3JpZ2luYWxQb3NpdGlvbi5zb3VyY2UgIT09IG51bGwpIHtcbiAgICAgIG9yaWdpbmFsUG9zaXRpb24uc291cmNlID0gc3VwcG9ydFJlbGF0aXZlVVJMKFxuICAgICAgICBzb3VyY2VNYXAudXJsLCBvcmlnaW5hbFBvc2l0aW9uLnNvdXJjZSk7XG4gICAgICByZXR1cm4gb3JpZ2luYWxQb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcG9zaXRpb247XG59XG5cbi8vIFBhcnNlcyBjb2RlIGdlbmVyYXRlZCBieSBGb3JtYXRFdmFsT3JpZ2luKCksIGEgZnVuY3Rpb24gaW5zaWRlIFY4OlxuLy8gaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9zb3VyY2UvYnJvd3NlL3RydW5rL3NyYy9tZXNzYWdlcy5qc1xuZnVuY3Rpb24gbWFwRXZhbE9yaWdpbihvcmlnaW4pIHtcbiAgLy8gTW9zdCBldmFsKCkgY2FsbHMgYXJlIGluIHRoaXMgZm9ybWF0XG4gIHZhciBtYXRjaCA9IC9eZXZhbCBhdCAoW14oXSspIFxcKCguKyk6KFxcZCspOihcXGQrKVxcKSQvLmV4ZWMob3JpZ2luKTtcbiAgaWYgKG1hdGNoKSB7XG4gICAgdmFyIHBvc2l0aW9uID0gbWFwU291cmNlUG9zaXRpb24oe1xuICAgICAgc291cmNlOiBtYXRjaFsyXSxcbiAgICAgIGxpbmU6ICttYXRjaFszXSxcbiAgICAgIGNvbHVtbjogbWF0Y2hbNF0gLSAxXG4gICAgfSk7XG4gICAgcmV0dXJuICdldmFsIGF0ICcgKyBtYXRjaFsxXSArICcgKCcgKyBwb3NpdGlvbi5zb3VyY2UgKyAnOicgK1xuICAgICAgcG9zaXRpb24ubGluZSArICc6JyArIChwb3NpdGlvbi5jb2x1bW4gKyAxKSArICcpJztcbiAgfVxuXG4gIC8vIFBhcnNlIG5lc3RlZCBldmFsKCkgY2FsbHMgdXNpbmcgcmVjdXJzaW9uXG4gIG1hdGNoID0gL15ldmFsIGF0IChbXihdKykgXFwoKC4rKVxcKSQvLmV4ZWMob3JpZ2luKTtcbiAgaWYgKG1hdGNoKSB7XG4gICAgcmV0dXJuICdldmFsIGF0ICcgKyBtYXRjaFsxXSArICcgKCcgKyBtYXBFdmFsT3JpZ2luKG1hdGNoWzJdKSArICcpJztcbiAgfVxuXG4gIC8vIE1ha2Ugc3VyZSB3ZSBzdGlsbCByZXR1cm4gdXNlZnVsIGluZm9ybWF0aW9uIGlmIHdlIGRpZG4ndCBmaW5kIGFueXRoaW5nXG4gIHJldHVybiBvcmlnaW47XG59XG5cbi8vIFRoaXMgaXMgY29waWVkIGFsbW9zdCB2ZXJiYXRpbSBmcm9tIHRoZSBWOCBzb3VyY2UgY29kZSBhdFxuLy8gaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9zb3VyY2UvYnJvd3NlL3RydW5rL3NyYy9tZXNzYWdlcy5qcy4gVGhlXG4vLyBpbXBsZW1lbnRhdGlvbiBvZiB3cmFwQ2FsbFNpdGUoKSB1c2VkIHRvIGp1c3QgZm9yd2FyZCB0byB0aGUgYWN0dWFsIHNvdXJjZVxuLy8gY29kZSBvZiBDYWxsU2l0ZS5wcm90b3R5cGUudG9TdHJpbmcgYnV0IHVuZm9ydHVuYXRlbHkgYSBuZXcgcmVsZWFzZSBvZiBWOFxuLy8gZGlkIHNvbWV0aGluZyB0byB0aGUgcHJvdG90eXBlIGNoYWluIGFuZCBicm9rZSB0aGUgc2hpbS4gVGhlIG9ubHkgZml4IElcbi8vIGNvdWxkIGZpbmQgd2FzIGNvcHkvcGFzdGUuXG5mdW5jdGlvbiBDYWxsU2l0ZVRvU3RyaW5nKCkge1xuICB2YXIgZmlsZU5hbWU7XG4gIHZhciBmaWxlTG9jYXRpb24gPSBcIlwiO1xuICBpZiAodGhpcy5pc05hdGl2ZSgpKSB7XG4gICAgZmlsZUxvY2F0aW9uID0gXCJuYXRpdmVcIjtcbiAgfSBlbHNlIHtcbiAgICBmaWxlTmFtZSA9IHRoaXMuZ2V0U2NyaXB0TmFtZU9yU291cmNlVVJMKCk7XG4gICAgaWYgKCFmaWxlTmFtZSAmJiB0aGlzLmlzRXZhbCgpKSB7XG4gICAgICBmaWxlTG9jYXRpb24gPSB0aGlzLmdldEV2YWxPcmlnaW4oKTtcbiAgICAgIGZpbGVMb2NhdGlvbiArPSBcIiwgXCI7ICAvLyBFeHBlY3Rpbmcgc291cmNlIHBvc2l0aW9uIHRvIGZvbGxvdy5cbiAgICB9XG5cbiAgICBpZiAoZmlsZU5hbWUpIHtcbiAgICAgIGZpbGVMb2NhdGlvbiArPSBmaWxlTmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU291cmNlIGNvZGUgZG9lcyBub3Qgb3JpZ2luYXRlIGZyb20gYSBmaWxlIGFuZCBpcyBub3QgbmF0aXZlLCBidXQgd2VcbiAgICAgIC8vIGNhbiBzdGlsbCBnZXQgdGhlIHNvdXJjZSBwb3NpdGlvbiBpbnNpZGUgdGhlIHNvdXJjZSBzdHJpbmcsIGUuZy4gaW5cbiAgICAgIC8vIGFuIGV2YWwgc3RyaW5nLlxuICAgICAgZmlsZUxvY2F0aW9uICs9IFwiPGFub255bW91cz5cIjtcbiAgICB9XG4gICAgdmFyIGxpbmVOdW1iZXIgPSB0aGlzLmdldExpbmVOdW1iZXIoKTtcbiAgICBpZiAobGluZU51bWJlciAhPSBudWxsKSB7XG4gICAgICBmaWxlTG9jYXRpb24gKz0gXCI6XCIgKyBsaW5lTnVtYmVyO1xuICAgICAgdmFyIGNvbHVtbk51bWJlciA9IHRoaXMuZ2V0Q29sdW1uTnVtYmVyKCk7XG4gICAgICBpZiAoY29sdW1uTnVtYmVyKSB7XG4gICAgICAgIGZpbGVMb2NhdGlvbiArPSBcIjpcIiArIGNvbHVtbk51bWJlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgbGluZSA9IFwiXCI7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSB0aGlzLmdldEZ1bmN0aW9uTmFtZSgpO1xuICB2YXIgYWRkU3VmZml4ID0gdHJ1ZTtcbiAgdmFyIGlzQ29uc3RydWN0b3IgPSB0aGlzLmlzQ29uc3RydWN0b3IoKTtcbiAgdmFyIGlzTWV0aG9kQ2FsbCA9ICEodGhpcy5pc1RvcGxldmVsKCkgfHwgaXNDb25zdHJ1Y3Rvcik7XG4gIGlmIChpc01ldGhvZENhbGwpIHtcbiAgICB2YXIgdHlwZU5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKCk7XG4gICAgLy8gRml4ZXMgc2hpbSB0byBiZSBiYWNrd2FyZCBjb21wYXRhYmxlIHdpdGggTm9kZSB2MCB0byB2NFxuICAgIGlmICh0eXBlTmFtZSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgICAgdHlwZU5hbWUgPSBcIm51bGxcIjtcbiAgICB9XG4gICAgdmFyIG1ldGhvZE5hbWUgPSB0aGlzLmdldE1ldGhvZE5hbWUoKTtcbiAgICBpZiAoZnVuY3Rpb25OYW1lKSB7XG4gICAgICBpZiAodHlwZU5hbWUgJiYgZnVuY3Rpb25OYW1lLmluZGV4T2YodHlwZU5hbWUpICE9IDApIHtcbiAgICAgICAgbGluZSArPSB0eXBlTmFtZSArIFwiLlwiO1xuICAgICAgfVxuICAgICAgbGluZSArPSBmdW5jdGlvbk5hbWU7XG4gICAgICBpZiAobWV0aG9kTmFtZSAmJiBmdW5jdGlvbk5hbWUuaW5kZXhPZihcIi5cIiArIG1ldGhvZE5hbWUpICE9IGZ1bmN0aW9uTmFtZS5sZW5ndGggLSBtZXRob2ROYW1lLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgbGluZSArPSBcIiBbYXMgXCIgKyBtZXRob2ROYW1lICsgXCJdXCI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmUgKz0gdHlwZU5hbWUgKyBcIi5cIiArIChtZXRob2ROYW1lIHx8IFwiPGFub255bW91cz5cIik7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzQ29uc3RydWN0b3IpIHtcbiAgICBsaW5lICs9IFwibmV3IFwiICsgKGZ1bmN0aW9uTmFtZSB8fCBcIjxhbm9ueW1vdXM+XCIpO1xuICB9IGVsc2UgaWYgKGZ1bmN0aW9uTmFtZSkge1xuICAgIGxpbmUgKz0gZnVuY3Rpb25OYW1lO1xuICB9IGVsc2Uge1xuICAgIGxpbmUgKz0gZmlsZUxvY2F0aW9uO1xuICAgIGFkZFN1ZmZpeCA9IGZhbHNlO1xuICB9XG4gIGlmIChhZGRTdWZmaXgpIHtcbiAgICBsaW5lICs9IFwiIChcIiArIGZpbGVMb2NhdGlvbiArIFwiKVwiO1xuICB9XG4gIHJldHVybiBsaW5lO1xufVxuXG5mdW5jdGlvbiBjbG9uZUNhbGxTaXRlKGZyYW1lKSB7XG4gIHZhciBvYmplY3QgPSB7fTtcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoT2JqZWN0LmdldFByb3RvdHlwZU9mKGZyYW1lKSkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgb2JqZWN0W25hbWVdID0gL14oPzppc3xnZXQpLy50ZXN0KG5hbWUpID8gZnVuY3Rpb24oKSB7IHJldHVybiBmcmFtZVtuYW1lXS5jYWxsKGZyYW1lKTsgfSA6IGZyYW1lW25hbWVdO1xuICB9KTtcbiAgb2JqZWN0LnRvU3RyaW5nID0gQ2FsbFNpdGVUb1N0cmluZztcbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gd3JhcENhbGxTaXRlKGZyYW1lLCBzdGF0ZSkge1xuICAvLyBwcm92aWRlcyBpbnRlcmZhY2UgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXRlID0geyBuZXh0UG9zaXRpb246IG51bGwsIGN1clBvc2l0aW9uOiBudWxsIH1cbiAgfVxuICBpZihmcmFtZS5pc05hdGl2ZSgpKSB7XG4gICAgc3RhdGUuY3VyUG9zaXRpb24gPSBudWxsO1xuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIC8vIE1vc3QgY2FsbCBzaXRlcyB3aWxsIHJldHVybiB0aGUgc291cmNlIGZpbGUgZnJvbSBnZXRGaWxlTmFtZSgpLCBidXQgY29kZVxuICAvLyBwYXNzZWQgdG8gZXZhbCgpIGVuZGluZyBpbiBcIi8vIyBzb3VyY2VVUkw9Li4uXCIgd2lsbCByZXR1cm4gdGhlIHNvdXJjZSBmaWxlXG4gIC8vIGZyb20gZ2V0U2NyaXB0TmFtZU9yU291cmNlVVJMKCkgaW5zdGVhZFxuICB2YXIgc291cmNlID0gZnJhbWUuZ2V0RmlsZU5hbWUoKSB8fCBmcmFtZS5nZXRTY3JpcHROYW1lT3JTb3VyY2VVUkwoKTtcbiAgaWYgKHNvdXJjZSkge1xuICAgIHZhciBsaW5lID0gZnJhbWUuZ2V0TGluZU51bWJlcigpO1xuICAgIHZhciBjb2x1bW4gPSBmcmFtZS5nZXRDb2x1bW5OdW1iZXIoKSAtIDE7XG5cbiAgICAvLyBGaXggcG9zaXRpb24gaW4gTm9kZSB3aGVyZSBzb21lIChpbnRlcm5hbCkgY29kZSBpcyBwcmVwZW5kZWQuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ldmFudy9ub2RlLXNvdXJjZS1tYXAtc3VwcG9ydC9pc3N1ZXMvMzZcbiAgICAvLyBIZWFkZXIgcmVtb3ZlZCBpbiBub2RlIGF0IF4xMC4xNiB8fCA+PTExLjExLjBcbiAgICAvLyB2MTEgaXMgbm90IGFuIExUUyBjYW5kaWRhdGUsIHdlIGNhbiBqdXN0IHRlc3QgdGhlIG9uZSB2ZXJzaW9uIHdpdGggaXQuXG4gICAgLy8gVGVzdCBub2RlIHZlcnNpb25zIGZvcjogMTAuMTYtMTksIDEwLjIwKywgMTItMTksIDIwLTk5LCAxMDArLCBvciAxMS4xMVxuICAgIHZhciBub0hlYWRlciA9IC9edigxMFxcLjFbNi05XXwxMFxcLlsyLTldWzAtOV18MTBcXC5bMC05XXszLH18MVsyLTldXFxkKnxbMi05XVxcZHxcXGR7Myx9fDExXFwuMTEpLztcbiAgICB2YXIgaGVhZGVyTGVuZ3RoID0gbm9IZWFkZXIudGVzdChwcm9jZXNzLnZlcnNpb24pID8gMCA6IDYyO1xuICAgIGlmIChsaW5lID09PSAxICYmIGNvbHVtbiA+IGhlYWRlckxlbmd0aCAmJiAhaXNJbkJyb3dzZXIoKSAmJiAhZnJhbWUuaXNFdmFsKCkpIHtcbiAgICAgIGNvbHVtbiAtPSBoZWFkZXJMZW5ndGg7XG4gICAgfVxuXG4gICAgdmFyIHBvc2l0aW9uID0gbWFwU291cmNlUG9zaXRpb24oe1xuICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICBsaW5lOiBsaW5lLFxuICAgICAgY29sdW1uOiBjb2x1bW5cbiAgICB9KTtcbiAgICBzdGF0ZS5jdXJQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIGZyYW1lID0gY2xvbmVDYWxsU2l0ZShmcmFtZSk7XG4gICAgdmFyIG9yaWdpbmFsRnVuY3Rpb25OYW1lID0gZnJhbWUuZ2V0RnVuY3Rpb25OYW1lO1xuICAgIGZyYW1lLmdldEZ1bmN0aW9uTmFtZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHN0YXRlLm5leHRQb3NpdGlvbiA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbEZ1bmN0aW9uTmFtZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXRlLm5leHRQb3NpdGlvbi5uYW1lIHx8IG9yaWdpbmFsRnVuY3Rpb25OYW1lKCk7XG4gICAgfTtcbiAgICBmcmFtZS5nZXRGaWxlTmFtZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gcG9zaXRpb24uc291cmNlOyB9O1xuICAgIGZyYW1lLmdldExpbmVOdW1iZXIgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHBvc2l0aW9uLmxpbmU7IH07XG4gICAgZnJhbWUuZ2V0Q29sdW1uTnVtYmVyID0gZnVuY3Rpb24oKSB7IHJldHVybiBwb3NpdGlvbi5jb2x1bW4gKyAxOyB9O1xuICAgIGZyYW1lLmdldFNjcmlwdE5hbWVPclNvdXJjZVVSTCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gcG9zaXRpb24uc291cmNlOyB9O1xuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIC8vIENvZGUgY2FsbGVkIHVzaW5nIGV2YWwoKSBuZWVkcyBzcGVjaWFsIGhhbmRsaW5nXG4gIHZhciBvcmlnaW4gPSBmcmFtZS5pc0V2YWwoKSAmJiBmcmFtZS5nZXRFdmFsT3JpZ2luKCk7XG4gIGlmIChvcmlnaW4pIHtcbiAgICBvcmlnaW4gPSBtYXBFdmFsT3JpZ2luKG9yaWdpbik7XG4gICAgZnJhbWUgPSBjbG9uZUNhbGxTaXRlKGZyYW1lKTtcbiAgICBmcmFtZS5nZXRFdmFsT3JpZ2luID0gZnVuY3Rpb24oKSB7IHJldHVybiBvcmlnaW47IH07XG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgLy8gSWYgd2UgZ2V0IGhlcmUgdGhlbiB3ZSB3ZXJlIHVuYWJsZSB0byBjaGFuZ2UgdGhlIHNvdXJjZSBwb3NpdGlvblxuICByZXR1cm4gZnJhbWU7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgcGFydCBvZiB0aGUgVjggc3RhY2sgdHJhY2UgQVBJLCBmb3IgbW9yZSBpbmZvIHNlZTpcbi8vIGh0dHBzOi8vdjguZGV2L2RvY3Mvc3RhY2stdHJhY2UtYXBpXG5mdW5jdGlvbiBwcmVwYXJlU3RhY2tUcmFjZShlcnJvciwgc3RhY2spIHtcbiAgaWYgKGVtcHR5Q2FjaGVCZXR3ZWVuT3BlcmF0aW9ucykge1xuICAgIGZpbGVDb250ZW50c0NhY2hlID0ge307XG4gICAgc291cmNlTWFwQ2FjaGUgPSB7fTtcbiAgfVxuXG4gIHZhciBuYW1lID0gZXJyb3IubmFtZSB8fCAnRXJyb3InO1xuICB2YXIgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2UgfHwgJyc7XG4gIHZhciBlcnJvclN0cmluZyA9IG5hbWUgKyBcIjogXCIgKyBtZXNzYWdlO1xuXG4gIHZhciBzdGF0ZSA9IHsgbmV4dFBvc2l0aW9uOiBudWxsLCBjdXJQb3NpdGlvbjogbnVsbCB9O1xuICB2YXIgcHJvY2Vzc2VkU3RhY2sgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHN0YWNrLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgcHJvY2Vzc2VkU3RhY2sucHVzaCgnXFxuICAgIGF0ICcgKyB3cmFwQ2FsbFNpdGUoc3RhY2tbaV0sIHN0YXRlKSk7XG4gICAgc3RhdGUubmV4dFBvc2l0aW9uID0gc3RhdGUuY3VyUG9zaXRpb247XG4gIH1cbiAgc3RhdGUuY3VyUG9zaXRpb24gPSBzdGF0ZS5uZXh0UG9zaXRpb24gPSBudWxsO1xuICByZXR1cm4gZXJyb3JTdHJpbmcgKyBwcm9jZXNzZWRTdGFjay5yZXZlcnNlKCkuam9pbignJyk7XG59XG5cbi8vIEdlbmVyYXRlIHBvc2l0aW9uIGFuZCBzbmlwcGV0IG9mIG9yaWdpbmFsIHNvdXJjZSB3aXRoIHBvaW50ZXJcbmZ1bmN0aW9uIGdldEVycm9yU291cmNlKGVycm9yKSB7XG4gIHZhciBtYXRjaCA9IC9cXG4gICAgYXQgW14oXSsgXFwoKC4qKTooXFxkKyk6KFxcZCspXFwpLy5leGVjKGVycm9yLnN0YWNrKTtcbiAgaWYgKG1hdGNoKSB7XG4gICAgdmFyIHNvdXJjZSA9IG1hdGNoWzFdO1xuICAgIHZhciBsaW5lID0gK21hdGNoWzJdO1xuICAgIHZhciBjb2x1bW4gPSArbWF0Y2hbM107XG5cbiAgICAvLyBTdXBwb3J0IHRoZSBpbmxpbmUgc291cmNlQ29udGVudHMgaW5zaWRlIHRoZSBzb3VyY2UgbWFwXG4gICAgdmFyIGNvbnRlbnRzID0gZmlsZUNvbnRlbnRzQ2FjaGVbc291cmNlXTtcblxuICAgIC8vIFN1cHBvcnQgZmlsZXMgb24gZGlza1xuICAgIGlmICghY29udGVudHMgJiYgZnMgJiYgZnMuZXhpc3RzU3luYyhzb3VyY2UpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhzb3VyY2UsICd1dGY4Jyk7XG4gICAgICB9IGNhdGNoIChlcikge1xuICAgICAgICBjb250ZW50cyA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZvcm1hdCB0aGUgbGluZSBmcm9tIHRoZSBvcmlnaW5hbCBzb3VyY2UgY29kZSBsaWtlIG5vZGUgZG9lc1xuICAgIGlmIChjb250ZW50cykge1xuICAgICAgdmFyIGNvZGUgPSBjb250ZW50cy5zcGxpdCgvKD86XFxyXFxufFxccnxcXG4pLylbbGluZSAtIDFdO1xuICAgICAgaWYgKGNvZGUpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZSArICc6JyArIGxpbmUgKyAnXFxuJyArIGNvZGUgKyAnXFxuJyArXG4gICAgICAgICAgbmV3IEFycmF5KGNvbHVtbikuam9pbignICcpICsgJ14nO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gcHJpbnRFcnJvckFuZEV4aXQgKGVycm9yKSB7XG4gIHZhciBzb3VyY2UgPSBnZXRFcnJvclNvdXJjZShlcnJvcik7XG5cbiAgLy8gRW5zdXJlIGVycm9yIGlzIHByaW50ZWQgc3luY2hyb25vdXNseSBhbmQgbm90IHRydW5jYXRlZFxuICBpZiAocHJvY2Vzcy5zdGRlcnIuX2hhbmRsZSAmJiBwcm9jZXNzLnN0ZGVyci5faGFuZGxlLnNldEJsb2NraW5nKSB7XG4gICAgcHJvY2Vzcy5zdGRlcnIuX2hhbmRsZS5zZXRCbG9ja2luZyh0cnVlKTtcbiAgfVxuXG4gIGlmIChzb3VyY2UpIHtcbiAgICBjb25zb2xlLmVycm9yKCk7XG4gICAgY29uc29sZS5lcnJvcihzb3VyY2UpO1xuICB9XG5cbiAgY29uc29sZS5lcnJvcihlcnJvci5zdGFjayk7XG4gIHByb2Nlc3MuZXhpdCgxKTtcbn1cblxuZnVuY3Rpb24gc2hpbUVtaXRVbmNhdWdodEV4Y2VwdGlvbiAoKSB7XG4gIHZhciBvcmlnRW1pdCA9IHByb2Nlc3MuZW1pdDtcblxuICBwcm9jZXNzLmVtaXQgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgIGlmICh0eXBlID09PSAndW5jYXVnaHRFeGNlcHRpb24nKSB7XG4gICAgICB2YXIgaGFzU3RhY2sgPSAoYXJndW1lbnRzWzFdICYmIGFyZ3VtZW50c1sxXS5zdGFjayk7XG4gICAgICB2YXIgaGFzTGlzdGVuZXJzID0gKHRoaXMubGlzdGVuZXJzKHR5cGUpLmxlbmd0aCA+IDApO1xuXG4gICAgICBpZiAoaGFzU3RhY2sgJiYgIWhhc0xpc3RlbmVycykge1xuICAgICAgICByZXR1cm4gcHJpbnRFcnJvckFuZEV4aXQoYXJndW1lbnRzWzFdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3JpZ0VtaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxudmFyIG9yaWdpbmFsUmV0cmlldmVGaWxlSGFuZGxlcnMgPSByZXRyaWV2ZUZpbGVIYW5kbGVycy5zbGljZSgwKTtcbnZhciBvcmlnaW5hbFJldHJpZXZlTWFwSGFuZGxlcnMgPSByZXRyaWV2ZU1hcEhhbmRsZXJzLnNsaWNlKDApO1xuXG5leHBvcnRzLndyYXBDYWxsU2l0ZSA9IHdyYXBDYWxsU2l0ZTtcbmV4cG9ydHMuZ2V0RXJyb3JTb3VyY2UgPSBnZXRFcnJvclNvdXJjZTtcbmV4cG9ydHMubWFwU291cmNlUG9zaXRpb24gPSBtYXBTb3VyY2VQb3NpdGlvbjtcbmV4cG9ydHMucmV0cmlldmVTb3VyY2VNYXAgPSByZXRyaWV2ZVNvdXJjZU1hcDtcblxuZXhwb3J0cy5pbnN0YWxsID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAob3B0aW9ucy5lbnZpcm9ubWVudCkge1xuICAgIGVudmlyb25tZW50ID0gb3B0aW9ucy5lbnZpcm9ubWVudDtcbiAgICBpZiAoW1wibm9kZVwiLCBcImJyb3dzZXJcIiwgXCJhdXRvXCJdLmluZGV4T2YoZW52aXJvbm1lbnQpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZW52aXJvbm1lbnQgXCIgKyBlbnZpcm9ubWVudCArIFwiIHdhcyB1bmtub3duLiBBdmFpbGFibGUgb3B0aW9ucyBhcmUge2F1dG8sIGJyb3dzZXIsIG5vZGV9XCIpXG4gICAgfVxuICB9XG5cbiAgLy8gQWxsb3cgc291cmNlcyB0byBiZSBmb3VuZCBieSBtZXRob2RzIG90aGVyIHRoYW4gcmVhZGluZyB0aGUgZmlsZXNcbiAgLy8gZGlyZWN0bHkgZnJvbSBkaXNrLlxuICBpZiAob3B0aW9ucy5yZXRyaWV2ZUZpbGUpIHtcbiAgICBpZiAob3B0aW9ucy5vdmVycmlkZVJldHJpZXZlRmlsZSkge1xuICAgICAgcmV0cmlldmVGaWxlSGFuZGxlcnMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICByZXRyaWV2ZUZpbGVIYW5kbGVycy51bnNoaWZ0KG9wdGlvbnMucmV0cmlldmVGaWxlKTtcbiAgfVxuXG4gIC8vIEFsbG93IHNvdXJjZSBtYXBzIHRvIGJlIGZvdW5kIGJ5IG1ldGhvZHMgb3RoZXIgdGhhbiByZWFkaW5nIHRoZSBmaWxlc1xuICAvLyBkaXJlY3RseSBmcm9tIGRpc2suXG4gIGlmIChvcHRpb25zLnJldHJpZXZlU291cmNlTWFwKSB7XG4gICAgaWYgKG9wdGlvbnMub3ZlcnJpZGVSZXRyaWV2ZVNvdXJjZU1hcCkge1xuICAgICAgcmV0cmlldmVNYXBIYW5kbGVycy5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIHJldHJpZXZlTWFwSGFuZGxlcnMudW5zaGlmdChvcHRpb25zLnJldHJpZXZlU291cmNlTWFwKTtcbiAgfVxuXG4gIC8vIFN1cHBvcnQgcnVudGltZSB0cmFuc3BpbGVycyB0aGF0IGluY2x1ZGUgaW5saW5lIHNvdXJjZSBtYXBzXG4gIGlmIChvcHRpb25zLmhvb2tSZXF1aXJlICYmICFpc0luQnJvd3NlcigpKSB7XG4gICAgLy8gVXNlIGR5bmFtaWNSZXF1aXJlIHRvIGF2b2lkIGluY2x1ZGluZyBpbiBicm93c2VyIGJ1bmRsZXNcbiAgICB2YXIgTW9kdWxlID0gZHluYW1pY1JlcXVpcmUobW9kdWxlLCAnbW9kdWxlJyk7XG4gICAgdmFyICRjb21waWxlID0gTW9kdWxlLnByb3RvdHlwZS5fY29tcGlsZTtcblxuICAgIGlmICghJGNvbXBpbGUuX19zb3VyY2VNYXBTdXBwb3J0KSB7XG4gICAgICBNb2R1bGUucHJvdG90eXBlLl9jb21waWxlID0gZnVuY3Rpb24oY29udGVudCwgZmlsZW5hbWUpIHtcbiAgICAgICAgZmlsZUNvbnRlbnRzQ2FjaGVbZmlsZW5hbWVdID0gY29udGVudDtcbiAgICAgICAgc291cmNlTWFwQ2FjaGVbZmlsZW5hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gJGNvbXBpbGUuY2FsbCh0aGlzLCBjb250ZW50LCBmaWxlbmFtZSk7XG4gICAgICB9O1xuXG4gICAgICBNb2R1bGUucHJvdG90eXBlLl9jb21waWxlLl9fc291cmNlTWFwU3VwcG9ydCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLy8gQ29uZmlndXJlIG9wdGlvbnNcbiAgaWYgKCFlbXB0eUNhY2hlQmV0d2Vlbk9wZXJhdGlvbnMpIHtcbiAgICBlbXB0eUNhY2hlQmV0d2Vlbk9wZXJhdGlvbnMgPSAnZW1wdHlDYWNoZUJldHdlZW5PcGVyYXRpb25zJyBpbiBvcHRpb25zID9cbiAgICAgIG9wdGlvbnMuZW1wdHlDYWNoZUJldHdlZW5PcGVyYXRpb25zIDogZmFsc2U7XG4gIH1cblxuICAvLyBJbnN0YWxsIHRoZSBlcnJvciByZWZvcm1hdHRlclxuICBpZiAoIWVycm9yRm9ybWF0dGVySW5zdGFsbGVkKSB7XG4gICAgZXJyb3JGb3JtYXR0ZXJJbnN0YWxsZWQgPSB0cnVlO1xuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJlcGFyZVN0YWNrVHJhY2U7XG4gIH1cblxuICBpZiAoIXVuY2F1Z2h0U2hpbUluc3RhbGxlZCkge1xuICAgIHZhciBpbnN0YWxsSGFuZGxlciA9ICdoYW5kbGVVbmNhdWdodEV4Y2VwdGlvbnMnIGluIG9wdGlvbnMgP1xuICAgICAgb3B0aW9ucy5oYW5kbGVVbmNhdWdodEV4Y2VwdGlvbnMgOiB0cnVlO1xuXG4gICAgLy8gRG8gbm90IG92ZXJyaWRlICd1bmNhdWdodEV4Y2VwdGlvbicgd2l0aCBvdXIgb3duIGhhbmRsZXIgaW4gTm9kZS5qc1xuICAgIC8vIFdvcmtlciB0aHJlYWRzLiBXb3JrZXJzIHBhc3MgdGhlIGVycm9yIHRvIHRoZSBtYWluIHRocmVhZCBhcyBhbiBldmVudCxcbiAgICAvLyByYXRoZXIgdGhhbiBwcmludGluZyBzb21ldGhpbmcgdG8gc3RkZXJyIGFuZCBleGl0aW5nLlxuICAgIHRyeSB7XG4gICAgICAvLyBXZSBuZWVkIHRvIHVzZSBgZHluYW1pY1JlcXVpcmVgIGJlY2F1c2UgYHJlcXVpcmVgIG9uIGl0J3Mgb3duIHdpbGwgYmUgb3B0aW1pemVkIGJ5IFdlYlBhY2svQnJvd3NlcmlmeS5cbiAgICAgIHZhciB3b3JrZXJfdGhyZWFkcyA9IGR5bmFtaWNSZXF1aXJlKG1vZHVsZSwgJ3dvcmtlcl90aHJlYWRzJyk7XG4gICAgICBpZiAod29ya2VyX3RocmVhZHMuaXNNYWluVGhyZWFkID09PSBmYWxzZSkge1xuICAgICAgICBpbnN0YWxsSGFuZGxlciA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gY2F0Y2goZSkge31cblxuICAgIC8vIFByb3ZpZGUgdGhlIG9wdGlvbiB0byBub3QgaW5zdGFsbCB0aGUgdW5jYXVnaHQgZXhjZXB0aW9uIGhhbmRsZXIuIFRoaXMgaXNcbiAgICAvLyB0byBzdXBwb3J0IG90aGVyIHVuY2F1Z2h0IGV4Y2VwdGlvbiBoYW5kbGVycyAoaW4gdGVzdCBmcmFtZXdvcmtzLCBmb3JcbiAgICAvLyBleGFtcGxlKS4gSWYgdGhpcyBoYW5kbGVyIGlzIG5vdCBpbnN0YWxsZWQgYW5kIHRoZXJlIGFyZSBubyBvdGhlciB1bmNhdWdodFxuICAgIC8vIGV4Y2VwdGlvbiBoYW5kbGVycywgdW5jYXVnaHQgZXhjZXB0aW9ucyB3aWxsIGJlIGNhdWdodCBieSBub2RlJ3MgYnVpbHQtaW5cbiAgICAvLyBleGNlcHRpb24gaGFuZGxlciBhbmQgdGhlIHByb2Nlc3Mgd2lsbCBzdGlsbCBiZSB0ZXJtaW5hdGVkLiBIb3dldmVyLCB0aGVcbiAgICAvLyBnZW5lcmF0ZWQgSmF2YVNjcmlwdCBjb2RlIHdpbGwgYmUgc2hvd24gYWJvdmUgdGhlIHN0YWNrIHRyYWNlIGluc3RlYWQgb2ZcbiAgICAvLyB0aGUgb3JpZ2luYWwgc291cmNlIGNvZGUuXG4gICAgaWYgKGluc3RhbGxIYW5kbGVyICYmIGhhc0dsb2JhbFByb2Nlc3NFdmVudEVtaXR0ZXIoKSkge1xuICAgICAgdW5jYXVnaHRTaGltSW5zdGFsbGVkID0gdHJ1ZTtcbiAgICAgIHNoaW1FbWl0VW5jYXVnaHRFeGNlcHRpb24oKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHMucmVzZXRSZXRyaWV2ZUhhbmRsZXJzID0gZnVuY3Rpb24oKSB7XG4gIHJldHJpZXZlRmlsZUhhbmRsZXJzLmxlbmd0aCA9IDA7XG4gIHJldHJpZXZlTWFwSGFuZGxlcnMubGVuZ3RoID0gMDtcblxuICByZXRyaWV2ZUZpbGVIYW5kbGVycyA9IG9yaWdpbmFsUmV0cmlldmVGaWxlSGFuZGxlcnMuc2xpY2UoMCk7XG4gIHJldHJpZXZlTWFwSGFuZGxlcnMgPSBvcmlnaW5hbFJldHJpZXZlTWFwSGFuZGxlcnMuc2xpY2UoMCk7XG5cbiAgcmV0cmlldmVTb3VyY2VNYXAgPSBoYW5kbGVyRXhlYyhyZXRyaWV2ZU1hcEhhbmRsZXJzKTtcbiAgcmV0cmlldmVGaWxlID0gaGFuZGxlckV4ZWMocmV0cmlldmVGaWxlSGFuZGxlcnMpO1xufVxuIiwiLyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuLypcbiAqIENvcHlyaWdodCAyMDExIE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2VcbiAqL1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgaGFzTmF0aXZlTWFwID0gdHlwZW9mIE1hcCAhPT0gXCJ1bmRlZmluZWRcIjtcblxuLyoqXG4gKiBBIGRhdGEgc3RydWN0dXJlIHdoaWNoIGlzIGEgY29tYmluYXRpb24gb2YgYW4gYXJyYXkgYW5kIGEgc2V0LiBBZGRpbmcgYSBuZXdcbiAqIG1lbWJlciBpcyBPKDEpLCB0ZXN0aW5nIGZvciBtZW1iZXJzaGlwIGlzIE8oMSksIGFuZCBmaW5kaW5nIHRoZSBpbmRleCBvZiBhblxuICogZWxlbWVudCBpcyBPKDEpLiBSZW1vdmluZyBlbGVtZW50cyBmcm9tIHRoZSBzZXQgaXMgbm90IHN1cHBvcnRlZC4gT25seVxuICogc3RyaW5ncyBhcmUgc3VwcG9ydGVkIGZvciBtZW1iZXJzaGlwLlxuICovXG5mdW5jdGlvbiBBcnJheVNldCgpIHtcbiAgdGhpcy5fYXJyYXkgPSBbXTtcbiAgdGhpcy5fc2V0ID0gaGFzTmF0aXZlTWFwID8gbmV3IE1hcCgpIDogT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cblxuLyoqXG4gKiBTdGF0aWMgbWV0aG9kIGZvciBjcmVhdGluZyBBcnJheVNldCBpbnN0YW5jZXMgZnJvbSBhbiBleGlzdGluZyBhcnJheS5cbiAqL1xuQXJyYXlTZXQuZnJvbUFycmF5ID0gZnVuY3Rpb24gQXJyYXlTZXRfZnJvbUFycmF5KGFBcnJheSwgYUFsbG93RHVwbGljYXRlcykge1xuICB2YXIgc2V0ID0gbmV3IEFycmF5U2V0KCk7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhQXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBzZXQuYWRkKGFBcnJheVtpXSwgYUFsbG93RHVwbGljYXRlcyk7XG4gIH1cbiAgcmV0dXJuIHNldDtcbn07XG5cbi8qKlxuICogUmV0dXJuIGhvdyBtYW55IHVuaXF1ZSBpdGVtcyBhcmUgaW4gdGhpcyBBcnJheVNldC4gSWYgZHVwbGljYXRlcyBoYXZlIGJlZW5cbiAqIGFkZGVkLCB0aGFuIHRob3NlIGRvIG5vdCBjb3VudCB0b3dhcmRzIHRoZSBzaXplLlxuICpcbiAqIEByZXR1cm5zIE51bWJlclxuICovXG5BcnJheVNldC5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uIEFycmF5U2V0X3NpemUoKSB7XG4gIHJldHVybiBoYXNOYXRpdmVNYXAgPyB0aGlzLl9zZXQuc2l6ZSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuX3NldCkubGVuZ3RoO1xufTtcblxuLyoqXG4gKiBBZGQgdGhlIGdpdmVuIHN0cmluZyB0byB0aGlzIHNldC5cbiAqXG4gKiBAcGFyYW0gU3RyaW5nIGFTdHJcbiAqL1xuQXJyYXlTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIEFycmF5U2V0X2FkZChhU3RyLCBhQWxsb3dEdXBsaWNhdGVzKSB7XG4gIHZhciBzU3RyID0gaGFzTmF0aXZlTWFwID8gYVN0ciA6IHV0aWwudG9TZXRTdHJpbmcoYVN0cik7XG4gIHZhciBpc0R1cGxpY2F0ZSA9IGhhc05hdGl2ZU1hcCA/IHRoaXMuaGFzKGFTdHIpIDogaGFzLmNhbGwodGhpcy5fc2V0LCBzU3RyKTtcbiAgdmFyIGlkeCA9IHRoaXMuX2FycmF5Lmxlbmd0aDtcbiAgaWYgKCFpc0R1cGxpY2F0ZSB8fCBhQWxsb3dEdXBsaWNhdGVzKSB7XG4gICAgdGhpcy5fYXJyYXkucHVzaChhU3RyKTtcbiAgfVxuICBpZiAoIWlzRHVwbGljYXRlKSB7XG4gICAgaWYgKGhhc05hdGl2ZU1hcCkge1xuICAgICAgdGhpcy5fc2V0LnNldChhU3RyLCBpZHgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZXRbc1N0cl0gPSBpZHg7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIElzIHRoZSBnaXZlbiBzdHJpbmcgYSBtZW1iZXIgb2YgdGhpcyBzZXQ/XG4gKlxuICogQHBhcmFtIFN0cmluZyBhU3RyXG4gKi9cbkFycmF5U2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBBcnJheVNldF9oYXMoYVN0cikge1xuICBpZiAoaGFzTmF0aXZlTWFwKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NldC5oYXMoYVN0cik7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHNTdHIgPSB1dGlsLnRvU2V0U3RyaW5nKGFTdHIpO1xuICAgIHJldHVybiBoYXMuY2FsbCh0aGlzLl9zZXQsIHNTdHIpO1xuICB9XG59O1xuXG4vKipcbiAqIFdoYXQgaXMgdGhlIGluZGV4IG9mIHRoZSBnaXZlbiBzdHJpbmcgaW4gdGhlIGFycmF5P1xuICpcbiAqIEBwYXJhbSBTdHJpbmcgYVN0clxuICovXG5BcnJheVNldC5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIEFycmF5U2V0X2luZGV4T2YoYVN0cikge1xuICBpZiAoaGFzTmF0aXZlTWFwKSB7XG4gICAgdmFyIGlkeCA9IHRoaXMuX3NldC5nZXQoYVN0cik7XG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgIHJldHVybiBpZHg7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBzU3RyID0gdXRpbC50b1NldFN0cmluZyhhU3RyKTtcbiAgICBpZiAoaGFzLmNhbGwodGhpcy5fc2V0LCBzU3RyKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NldFtzU3RyXTtcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIGFTdHIgKyAnXCIgaXMgbm90IGluIHRoZSBzZXQuJyk7XG59O1xuXG4vKipcbiAqIFdoYXQgaXMgdGhlIGVsZW1lbnQgYXQgdGhlIGdpdmVuIGluZGV4P1xuICpcbiAqIEBwYXJhbSBOdW1iZXIgYUlkeFxuICovXG5BcnJheVNldC5wcm90b3R5cGUuYXQgPSBmdW5jdGlvbiBBcnJheVNldF9hdChhSWR4KSB7XG4gIGlmIChhSWR4ID49IDAgJiYgYUlkeCA8IHRoaXMuX2FycmF5Lmxlbmd0aCkge1xuICAgIHJldHVybiB0aGlzLl9hcnJheVthSWR4XTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ05vIGVsZW1lbnQgaW5kZXhlZCBieSAnICsgYUlkeCk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgc2V0ICh3aGljaCBoYXMgdGhlIHByb3BlciBpbmRpY2VzXG4gKiBpbmRpY2F0ZWQgYnkgaW5kZXhPZikuIE5vdGUgdGhhdCB0aGlzIGlzIGEgY29weSBvZiB0aGUgaW50ZXJuYWwgYXJyYXkgdXNlZFxuICogZm9yIHN0b3JpbmcgdGhlIG1lbWJlcnMgc28gdGhhdCBubyBvbmUgY2FuIG1lc3Mgd2l0aCBpbnRlcm5hbCBzdGF0ZS5cbiAqL1xuQXJyYXlTZXQucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiBBcnJheVNldF90b0FycmF5KCkge1xuICByZXR1cm4gdGhpcy5fYXJyYXkuc2xpY2UoKTtcbn07XG5cbmV4cG9ydHMuQXJyYXlTZXQgPSBBcnJheVNldDtcbiIsIi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKlxuICogQmFzZWQgb24gdGhlIEJhc2UgNjQgVkxRIGltcGxlbWVudGF0aW9uIGluIENsb3N1cmUgQ29tcGlsZXI6XG4gKiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nsb3N1cmUtY29tcGlsZXIvc291cmNlL2Jyb3dzZS90cnVuay9zcmMvY29tL2dvb2dsZS9kZWJ1Z2dpbmcvc291cmNlbWFwL0Jhc2U2NFZMUS5qYXZhXG4gKlxuICogQ29weXJpZ2h0IDIwMTEgVGhlIENsb3N1cmUgQ29tcGlsZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuICogbWV0OlxuICpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4gKiAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4gKiAgICBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuICogICAgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkXG4gKiAgICB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdvb2dsZSBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWRcbiAqICAgIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4gKiBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4gKiBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1JcbiAqIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4gKiBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbiAqIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1RcbiAqIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuICogREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4gKiBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4gKiAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0VcbiAqIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJy4vYmFzZTY0Jyk7XG5cbi8vIEEgc2luZ2xlIGJhc2UgNjQgZGlnaXQgY2FuIGNvbnRhaW4gNiBiaXRzIG9mIGRhdGEuIEZvciB0aGUgYmFzZSA2NCB2YXJpYWJsZVxuLy8gbGVuZ3RoIHF1YW50aXRpZXMgd2UgdXNlIGluIHRoZSBzb3VyY2UgbWFwIHNwZWMsIHRoZSBmaXJzdCBiaXQgaXMgdGhlIHNpZ24sXG4vLyB0aGUgbmV4dCBmb3VyIGJpdHMgYXJlIHRoZSBhY3R1YWwgdmFsdWUsIGFuZCB0aGUgNnRoIGJpdCBpcyB0aGVcbi8vIGNvbnRpbnVhdGlvbiBiaXQuIFRoZSBjb250aW51YXRpb24gYml0IHRlbGxzIHVzIHdoZXRoZXIgdGhlcmUgYXJlIG1vcmVcbi8vIGRpZ2l0cyBpbiB0aGlzIHZhbHVlIGZvbGxvd2luZyB0aGlzIGRpZ2l0LlxuLy9cbi8vICAgQ29udGludWF0aW9uXG4vLyAgIHwgICAgU2lnblxuLy8gICB8ICAgIHxcbi8vICAgViAgICBWXG4vLyAgIDEwMTAxMVxuXG52YXIgVkxRX0JBU0VfU0hJRlQgPSA1O1xuXG4vLyBiaW5hcnk6IDEwMDAwMFxudmFyIFZMUV9CQVNFID0gMSA8PCBWTFFfQkFTRV9TSElGVDtcblxuLy8gYmluYXJ5OiAwMTExMTFcbnZhciBWTFFfQkFTRV9NQVNLID0gVkxRX0JBU0UgLSAxO1xuXG4vLyBiaW5hcnk6IDEwMDAwMFxudmFyIFZMUV9DT05USU5VQVRJT05fQklUID0gVkxRX0JBU0U7XG5cbi8qKlxuICogQ29udmVydHMgZnJvbSBhIHR3by1jb21wbGVtZW50IHZhbHVlIHRvIGEgdmFsdWUgd2hlcmUgdGhlIHNpZ24gYml0IGlzXG4gKiBwbGFjZWQgaW4gdGhlIGxlYXN0IHNpZ25pZmljYW50IGJpdC4gIEZvciBleGFtcGxlLCBhcyBkZWNpbWFsczpcbiAqICAgMSBiZWNvbWVzIDIgKDEwIGJpbmFyeSksIC0xIGJlY29tZXMgMyAoMTEgYmluYXJ5KVxuICogICAyIGJlY29tZXMgNCAoMTAwIGJpbmFyeSksIC0yIGJlY29tZXMgNSAoMTAxIGJpbmFyeSlcbiAqL1xuZnVuY3Rpb24gdG9WTFFTaWduZWQoYVZhbHVlKSB7XG4gIHJldHVybiBhVmFsdWUgPCAwXG4gICAgPyAoKC1hVmFsdWUpIDw8IDEpICsgMVxuICAgIDogKGFWYWx1ZSA8PCAxKSArIDA7XG59XG5cbi8qKlxuICogQ29udmVydHMgdG8gYSB0d28tY29tcGxlbWVudCB2YWx1ZSBmcm9tIGEgdmFsdWUgd2hlcmUgdGhlIHNpZ24gYml0IGlzXG4gKiBwbGFjZWQgaW4gdGhlIGxlYXN0IHNpZ25pZmljYW50IGJpdC4gIEZvciBleGFtcGxlLCBhcyBkZWNpbWFsczpcbiAqICAgMiAoMTAgYmluYXJ5KSBiZWNvbWVzIDEsIDMgKDExIGJpbmFyeSkgYmVjb21lcyAtMVxuICogICA0ICgxMDAgYmluYXJ5KSBiZWNvbWVzIDIsIDUgKDEwMSBiaW5hcnkpIGJlY29tZXMgLTJcbiAqL1xuZnVuY3Rpb24gZnJvbVZMUVNpZ25lZChhVmFsdWUpIHtcbiAgdmFyIGlzTmVnYXRpdmUgPSAoYVZhbHVlICYgMSkgPT09IDE7XG4gIHZhciBzaGlmdGVkID0gYVZhbHVlID4+IDE7XG4gIHJldHVybiBpc05lZ2F0aXZlXG4gICAgPyAtc2hpZnRlZFxuICAgIDogc2hpZnRlZDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBiYXNlIDY0IFZMUSBlbmNvZGVkIHZhbHVlLlxuICovXG5leHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uIGJhc2U2NFZMUV9lbmNvZGUoYVZhbHVlKSB7XG4gIHZhciBlbmNvZGVkID0gXCJcIjtcbiAgdmFyIGRpZ2l0O1xuXG4gIHZhciB2bHEgPSB0b1ZMUVNpZ25lZChhVmFsdWUpO1xuXG4gIGRvIHtcbiAgICBkaWdpdCA9IHZscSAmIFZMUV9CQVNFX01BU0s7XG4gICAgdmxxID4+Pj0gVkxRX0JBU0VfU0hJRlQ7XG4gICAgaWYgKHZscSA+IDApIHtcbiAgICAgIC8vIFRoZXJlIGFyZSBzdGlsbCBtb3JlIGRpZ2l0cyBpbiB0aGlzIHZhbHVlLCBzbyB3ZSBtdXN0IG1ha2Ugc3VyZSB0aGVcbiAgICAgIC8vIGNvbnRpbnVhdGlvbiBiaXQgaXMgbWFya2VkLlxuICAgICAgZGlnaXQgfD0gVkxRX0NPTlRJTlVBVElPTl9CSVQ7XG4gICAgfVxuICAgIGVuY29kZWQgKz0gYmFzZTY0LmVuY29kZShkaWdpdCk7XG4gIH0gd2hpbGUgKHZscSA+IDApO1xuXG4gIHJldHVybiBlbmNvZGVkO1xufTtcblxuLyoqXG4gKiBEZWNvZGVzIHRoZSBuZXh0IGJhc2UgNjQgVkxRIHZhbHVlIGZyb20gdGhlIGdpdmVuIHN0cmluZyBhbmQgcmV0dXJucyB0aGVcbiAqIHZhbHVlIGFuZCB0aGUgcmVzdCBvZiB0aGUgc3RyaW5nIHZpYSB0aGUgb3V0IHBhcmFtZXRlci5cbiAqL1xuZXhwb3J0cy5kZWNvZGUgPSBmdW5jdGlvbiBiYXNlNjRWTFFfZGVjb2RlKGFTdHIsIGFJbmRleCwgYU91dFBhcmFtKSB7XG4gIHZhciBzdHJMZW4gPSBhU3RyLmxlbmd0aDtcbiAgdmFyIHJlc3VsdCA9IDA7XG4gIHZhciBzaGlmdCA9IDA7XG4gIHZhciBjb250aW51YXRpb24sIGRpZ2l0O1xuXG4gIGRvIHtcbiAgICBpZiAoYUluZGV4ID49IHN0ckxlbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgbW9yZSBkaWdpdHMgaW4gYmFzZSA2NCBWTFEgdmFsdWUuXCIpO1xuICAgIH1cblxuICAgIGRpZ2l0ID0gYmFzZTY0LmRlY29kZShhU3RyLmNoYXJDb2RlQXQoYUluZGV4KyspKTtcbiAgICBpZiAoZGlnaXQgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGJhc2U2NCBkaWdpdDogXCIgKyBhU3RyLmNoYXJBdChhSW5kZXggLSAxKSk7XG4gICAgfVxuXG4gICAgY29udGludWF0aW9uID0gISEoZGlnaXQgJiBWTFFfQ09OVElOVUFUSU9OX0JJVCk7XG4gICAgZGlnaXQgJj0gVkxRX0JBU0VfTUFTSztcbiAgICByZXN1bHQgPSByZXN1bHQgKyAoZGlnaXQgPDwgc2hpZnQpO1xuICAgIHNoaWZ0ICs9IFZMUV9CQVNFX1NISUZUO1xuICB9IHdoaWxlIChjb250aW51YXRpb24pO1xuXG4gIGFPdXRQYXJhbS52YWx1ZSA9IGZyb21WTFFTaWduZWQocmVzdWx0KTtcbiAgYU91dFBhcmFtLnJlc3QgPSBhSW5kZXg7XG59O1xuIiwiLyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuLypcbiAqIENvcHlyaWdodCAyMDExIE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2VcbiAqL1xuXG52YXIgaW50VG9DaGFyTWFwID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nLnNwbGl0KCcnKTtcblxuLyoqXG4gKiBFbmNvZGUgYW4gaW50ZWdlciBpbiB0aGUgcmFuZ2Ugb2YgMCB0byA2MyB0byBhIHNpbmdsZSBiYXNlIDY0IGRpZ2l0LlxuICovXG5leHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgaWYgKDAgPD0gbnVtYmVyICYmIG51bWJlciA8IGludFRvQ2hhck1hcC5sZW5ndGgpIHtcbiAgICByZXR1cm4gaW50VG9DaGFyTWFwW251bWJlcl07XG4gIH1cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk11c3QgYmUgYmV0d2VlbiAwIGFuZCA2MzogXCIgKyBudW1iZXIpO1xufTtcblxuLyoqXG4gKiBEZWNvZGUgYSBzaW5nbGUgYmFzZSA2NCBjaGFyYWN0ZXIgY29kZSBkaWdpdCB0byBhbiBpbnRlZ2VyLiBSZXR1cm5zIC0xIG9uXG4gKiBmYWlsdXJlLlxuICovXG5leHBvcnRzLmRlY29kZSA9IGZ1bmN0aW9uIChjaGFyQ29kZSkge1xuICB2YXIgYmlnQSA9IDY1OyAgICAgLy8gJ0EnXG4gIHZhciBiaWdaID0gOTA7ICAgICAvLyAnWidcblxuICB2YXIgbGl0dGxlQSA9IDk3OyAgLy8gJ2EnXG4gIHZhciBsaXR0bGVaID0gMTIyOyAvLyAneidcblxuICB2YXIgemVybyA9IDQ4OyAgICAgLy8gJzAnXG4gIHZhciBuaW5lID0gNTc7ICAgICAvLyAnOSdcblxuICB2YXIgcGx1cyA9IDQzOyAgICAgLy8gJysnXG4gIHZhciBzbGFzaCA9IDQ3OyAgICAvLyAnLydcblxuICB2YXIgbGl0dGxlT2Zmc2V0ID0gMjY7XG4gIHZhciBudW1iZXJPZmZzZXQgPSA1MjtcblxuICAvLyAwIC0gMjU6IEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXG4gIGlmIChiaWdBIDw9IGNoYXJDb2RlICYmIGNoYXJDb2RlIDw9IGJpZ1opIHtcbiAgICByZXR1cm4gKGNoYXJDb2RlIC0gYmlnQSk7XG4gIH1cblxuICAvLyAyNiAtIDUxOiBhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elxuICBpZiAobGl0dGxlQSA8PSBjaGFyQ29kZSAmJiBjaGFyQ29kZSA8PSBsaXR0bGVaKSB7XG4gICAgcmV0dXJuIChjaGFyQ29kZSAtIGxpdHRsZUEgKyBsaXR0bGVPZmZzZXQpO1xuICB9XG5cbiAgLy8gNTIgLSA2MTogMDEyMzQ1Njc4OVxuICBpZiAoemVybyA8PSBjaGFyQ29kZSAmJiBjaGFyQ29kZSA8PSBuaW5lKSB7XG4gICAgcmV0dXJuIChjaGFyQ29kZSAtIHplcm8gKyBudW1iZXJPZmZzZXQpO1xuICB9XG5cbiAgLy8gNjI6ICtcbiAgaWYgKGNoYXJDb2RlID09IHBsdXMpIHtcbiAgICByZXR1cm4gNjI7XG4gIH1cblxuICAvLyA2MzogL1xuICBpZiAoY2hhckNvZGUgPT0gc2xhc2gpIHtcbiAgICByZXR1cm4gNjM7XG4gIH1cblxuICAvLyBJbnZhbGlkIGJhc2U2NCBkaWdpdC5cbiAgcmV0dXJuIC0xO1xufTtcbiIsIi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cblxuZXhwb3J0cy5HUkVBVEVTVF9MT1dFUl9CT1VORCA9IDE7XG5leHBvcnRzLkxFQVNUX1VQUEVSX0JPVU5EID0gMjtcblxuLyoqXG4gKiBSZWN1cnNpdmUgaW1wbGVtZW50YXRpb24gb2YgYmluYXJ5IHNlYXJjaC5cbiAqXG4gKiBAcGFyYW0gYUxvdyBJbmRpY2VzIGhlcmUgYW5kIGxvd2VyIGRvIG5vdCBjb250YWluIHRoZSBuZWVkbGUuXG4gKiBAcGFyYW0gYUhpZ2ggSW5kaWNlcyBoZXJlIGFuZCBoaWdoZXIgZG8gbm90IGNvbnRhaW4gdGhlIG5lZWRsZS5cbiAqIEBwYXJhbSBhTmVlZGxlIFRoZSBlbGVtZW50IGJlaW5nIHNlYXJjaGVkIGZvci5cbiAqIEBwYXJhbSBhSGF5c3RhY2sgVGhlIG5vbi1lbXB0eSBhcnJheSBiZWluZyBzZWFyY2hlZC5cbiAqIEBwYXJhbSBhQ29tcGFyZSBGdW5jdGlvbiB3aGljaCB0YWtlcyB0d28gZWxlbWVudHMgYW5kIHJldHVybnMgLTEsIDAsIG9yIDEuXG4gKiBAcGFyYW0gYUJpYXMgRWl0aGVyICdiaW5hcnlTZWFyY2guR1JFQVRFU1RfTE9XRVJfQk9VTkQnIG9yXG4gKiAgICAgJ2JpbmFyeVNlYXJjaC5MRUFTVF9VUFBFUl9CT1VORCcuIFNwZWNpZmllcyB3aGV0aGVyIHRvIHJldHVybiB0aGVcbiAqICAgICBjbG9zZXN0IGVsZW1lbnQgdGhhdCBpcyBzbWFsbGVyIHRoYW4gb3IgZ3JlYXRlciB0aGFuIHRoZSBvbmUgd2UgYXJlXG4gKiAgICAgc2VhcmNoaW5nIGZvciwgcmVzcGVjdGl2ZWx5LCBpZiB0aGUgZXhhY3QgZWxlbWVudCBjYW5ub3QgYmUgZm91bmQuXG4gKi9cbmZ1bmN0aW9uIHJlY3Vyc2l2ZVNlYXJjaChhTG93LCBhSGlnaCwgYU5lZWRsZSwgYUhheXN0YWNrLCBhQ29tcGFyZSwgYUJpYXMpIHtcbiAgLy8gVGhpcyBmdW5jdGlvbiB0ZXJtaW5hdGVzIHdoZW4gb25lIG9mIHRoZSBmb2xsb3dpbmcgaXMgdHJ1ZTpcbiAgLy9cbiAgLy8gICAxLiBXZSBmaW5kIHRoZSBleGFjdCBlbGVtZW50IHdlIGFyZSBsb29raW5nIGZvci5cbiAgLy9cbiAgLy8gICAyLiBXZSBkaWQgbm90IGZpbmQgdGhlIGV4YWN0IGVsZW1lbnQsIGJ1dCB3ZSBjYW4gcmV0dXJuIHRoZSBpbmRleCBvZlxuICAvLyAgICAgIHRoZSBuZXh0LWNsb3Nlc3QgZWxlbWVudC5cbiAgLy9cbiAgLy8gICAzLiBXZSBkaWQgbm90IGZpbmQgdGhlIGV4YWN0IGVsZW1lbnQsIGFuZCB0aGVyZSBpcyBubyBuZXh0LWNsb3Nlc3RcbiAgLy8gICAgICBlbGVtZW50IHRoYW4gdGhlIG9uZSB3ZSBhcmUgc2VhcmNoaW5nIGZvciwgc28gd2UgcmV0dXJuIC0xLlxuICB2YXIgbWlkID0gTWF0aC5mbG9vcigoYUhpZ2ggLSBhTG93KSAvIDIpICsgYUxvdztcbiAgdmFyIGNtcCA9IGFDb21wYXJlKGFOZWVkbGUsIGFIYXlzdGFja1ttaWRdLCB0cnVlKTtcbiAgaWYgKGNtcCA9PT0gMCkge1xuICAgIC8vIEZvdW5kIHRoZSBlbGVtZW50IHdlIGFyZSBsb29raW5nIGZvci5cbiAgICByZXR1cm4gbWlkO1xuICB9XG4gIGVsc2UgaWYgKGNtcCA+IDApIHtcbiAgICAvLyBPdXIgbmVlZGxlIGlzIGdyZWF0ZXIgdGhhbiBhSGF5c3RhY2tbbWlkXS5cbiAgICBpZiAoYUhpZ2ggLSBtaWQgPiAxKSB7XG4gICAgICAvLyBUaGUgZWxlbWVudCBpcyBpbiB0aGUgdXBwZXIgaGFsZi5cbiAgICAgIHJldHVybiByZWN1cnNpdmVTZWFyY2gobWlkLCBhSGlnaCwgYU5lZWRsZSwgYUhheXN0YWNrLCBhQ29tcGFyZSwgYUJpYXMpO1xuICAgIH1cblxuICAgIC8vIFRoZSBleGFjdCBuZWVkbGUgZWxlbWVudCB3YXMgbm90IGZvdW5kIGluIHRoaXMgaGF5c3RhY2suIERldGVybWluZSBpZlxuICAgIC8vIHdlIGFyZSBpbiB0ZXJtaW5hdGlvbiBjYXNlICgzKSBvciAoMikgYW5kIHJldHVybiB0aGUgYXBwcm9wcmlhdGUgdGhpbmcuXG4gICAgaWYgKGFCaWFzID09IGV4cG9ydHMuTEVBU1RfVVBQRVJfQk9VTkQpIHtcbiAgICAgIHJldHVybiBhSGlnaCA8IGFIYXlzdGFjay5sZW5ndGggPyBhSGlnaCA6IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWlkO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICAvLyBPdXIgbmVlZGxlIGlzIGxlc3MgdGhhbiBhSGF5c3RhY2tbbWlkXS5cbiAgICBpZiAobWlkIC0gYUxvdyA+IDEpIHtcbiAgICAgIC8vIFRoZSBlbGVtZW50IGlzIGluIHRoZSBsb3dlciBoYWxmLlxuICAgICAgcmV0dXJuIHJlY3Vyc2l2ZVNlYXJjaChhTG93LCBtaWQsIGFOZWVkbGUsIGFIYXlzdGFjaywgYUNvbXBhcmUsIGFCaWFzKTtcbiAgICB9XG5cbiAgICAvLyB3ZSBhcmUgaW4gdGVybWluYXRpb24gY2FzZSAoMykgb3IgKDIpIGFuZCByZXR1cm4gdGhlIGFwcHJvcHJpYXRlIHRoaW5nLlxuICAgIGlmIChhQmlhcyA9PSBleHBvcnRzLkxFQVNUX1VQUEVSX0JPVU5EKSB7XG4gICAgICByZXR1cm4gbWlkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYUxvdyA8IDAgPyAtMSA6IGFMb3c7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVGhpcyBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiBiaW5hcnkgc2VhcmNoIHdoaWNoIHdpbGwgYWx3YXlzIHRyeSBhbmQgcmV0dXJuXG4gKiB0aGUgaW5kZXggb2YgdGhlIGNsb3Nlc3QgZWxlbWVudCBpZiB0aGVyZSBpcyBubyBleGFjdCBoaXQuIFRoaXMgaXMgYmVjYXVzZVxuICogbWFwcGluZ3MgYmV0d2VlbiBvcmlnaW5hbCBhbmQgZ2VuZXJhdGVkIGxpbmUvY29sIHBhaXJzIGFyZSBzaW5nbGUgcG9pbnRzLFxuICogYW5kIHRoZXJlIGlzIGFuIGltcGxpY2l0IHJlZ2lvbiBiZXR3ZWVuIGVhY2ggb2YgdGhlbSwgc28gYSBtaXNzIGp1c3QgbWVhbnNcbiAqIHRoYXQgeW91IGFyZW4ndCBvbiB0aGUgdmVyeSBzdGFydCBvZiBhIHJlZ2lvbi5cbiAqXG4gKiBAcGFyYW0gYU5lZWRsZSBUaGUgZWxlbWVudCB5b3UgYXJlIGxvb2tpbmcgZm9yLlxuICogQHBhcmFtIGFIYXlzdGFjayBUaGUgYXJyYXkgdGhhdCBpcyBiZWluZyBzZWFyY2hlZC5cbiAqIEBwYXJhbSBhQ29tcGFyZSBBIGZ1bmN0aW9uIHdoaWNoIHRha2VzIHRoZSBuZWVkbGUgYW5kIGFuIGVsZW1lbnQgaW4gdGhlXG4gKiAgICAgYXJyYXkgYW5kIHJldHVybnMgLTEsIDAsIG9yIDEgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIG5lZWRsZSBpcyBsZXNzXG4gKiAgICAgdGhhbiwgZXF1YWwgdG8sIG9yIGdyZWF0ZXIgdGhhbiB0aGUgZWxlbWVudCwgcmVzcGVjdGl2ZWx5LlxuICogQHBhcmFtIGFCaWFzIEVpdGhlciAnYmluYXJ5U2VhcmNoLkdSRUFURVNUX0xPV0VSX0JPVU5EJyBvclxuICogICAgICdiaW5hcnlTZWFyY2guTEVBU1RfVVBQRVJfQk9VTkQnLiBTcGVjaWZpZXMgd2hldGhlciB0byByZXR1cm4gdGhlXG4gKiAgICAgY2xvc2VzdCBlbGVtZW50IHRoYXQgaXMgc21hbGxlciB0aGFuIG9yIGdyZWF0ZXIgdGhhbiB0aGUgb25lIHdlIGFyZVxuICogICAgIHNlYXJjaGluZyBmb3IsIHJlc3BlY3RpdmVseSwgaWYgdGhlIGV4YWN0IGVsZW1lbnQgY2Fubm90IGJlIGZvdW5kLlxuICogICAgIERlZmF1bHRzIHRvICdiaW5hcnlTZWFyY2guR1JFQVRFU1RfTE9XRVJfQk9VTkQnLlxuICovXG5leHBvcnRzLnNlYXJjaCA9IGZ1bmN0aW9uIHNlYXJjaChhTmVlZGxlLCBhSGF5c3RhY2ssIGFDb21wYXJlLCBhQmlhcykge1xuICBpZiAoYUhheXN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIHZhciBpbmRleCA9IHJlY3Vyc2l2ZVNlYXJjaCgtMSwgYUhheXN0YWNrLmxlbmd0aCwgYU5lZWRsZSwgYUhheXN0YWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYUNvbXBhcmUsIGFCaWFzIHx8IGV4cG9ydHMuR1JFQVRFU1RfTE9XRVJfQk9VTkQpO1xuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLy8gV2UgaGF2ZSBmb3VuZCBlaXRoZXIgdGhlIGV4YWN0IGVsZW1lbnQsIG9yIHRoZSBuZXh0LWNsb3Nlc3QgZWxlbWVudCB0aGFuXG4gIC8vIHRoZSBvbmUgd2UgYXJlIHNlYXJjaGluZyBmb3IuIEhvd2V2ZXIsIHRoZXJlIG1heSBiZSBtb3JlIHRoYW4gb25lIHN1Y2hcbiAgLy8gZWxlbWVudC4gTWFrZSBzdXJlIHdlIGFsd2F5cyByZXR1cm4gdGhlIHNtYWxsZXN0IG9mIHRoZXNlLlxuICB3aGlsZSAoaW5kZXggLSAxID49IDApIHtcbiAgICBpZiAoYUNvbXBhcmUoYUhheXN0YWNrW2luZGV4XSwgYUhheXN0YWNrW2luZGV4IC0gMV0sIHRydWUpICE9PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgLS1pbmRleDtcbiAgfVxuXG4gIHJldHVybiBpbmRleDtcbn07XG4iLCIvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTQgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICovXG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgbWFwcGluZ0IgaXMgYWZ0ZXIgbWFwcGluZ0Egd2l0aCByZXNwZWN0IHRvIGdlbmVyYXRlZFxuICogcG9zaXRpb24uXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlZFBvc2l0aW9uQWZ0ZXIobWFwcGluZ0EsIG1hcHBpbmdCKSB7XG4gIC8vIE9wdGltaXplZCBmb3IgbW9zdCBjb21tb24gY2FzZVxuICB2YXIgbGluZUEgPSBtYXBwaW5nQS5nZW5lcmF0ZWRMaW5lO1xuICB2YXIgbGluZUIgPSBtYXBwaW5nQi5nZW5lcmF0ZWRMaW5lO1xuICB2YXIgY29sdW1uQSA9IG1hcHBpbmdBLmdlbmVyYXRlZENvbHVtbjtcbiAgdmFyIGNvbHVtbkIgPSBtYXBwaW5nQi5nZW5lcmF0ZWRDb2x1bW47XG4gIHJldHVybiBsaW5lQiA+IGxpbmVBIHx8IGxpbmVCID09IGxpbmVBICYmIGNvbHVtbkIgPj0gY29sdW1uQSB8fFxuICAgICAgICAgdXRpbC5jb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNJbmZsYXRlZChtYXBwaW5nQSwgbWFwcGluZ0IpIDw9IDA7XG59XG5cbi8qKlxuICogQSBkYXRhIHN0cnVjdHVyZSB0byBwcm92aWRlIGEgc29ydGVkIHZpZXcgb2YgYWNjdW11bGF0ZWQgbWFwcGluZ3MgaW4gYVxuICogcGVyZm9ybWFuY2UgY29uc2Npb3VzIG1hbm5lci4gSXQgdHJhZGVzIGEgbmVnbGliYWJsZSBvdmVyaGVhZCBpbiBnZW5lcmFsXG4gKiBjYXNlIGZvciBhIGxhcmdlIHNwZWVkdXAgaW4gY2FzZSBvZiBtYXBwaW5ncyBiZWluZyBhZGRlZCBpbiBvcmRlci5cbiAqL1xuZnVuY3Rpb24gTWFwcGluZ0xpc3QoKSB7XG4gIHRoaXMuX2FycmF5ID0gW107XG4gIHRoaXMuX3NvcnRlZCA9IHRydWU7XG4gIC8vIFNlcnZlcyBhcyBpbmZpbXVtXG4gIHRoaXMuX2xhc3QgPSB7Z2VuZXJhdGVkTGluZTogLTEsIGdlbmVyYXRlZENvbHVtbjogMH07XG59XG5cbi8qKlxuICogSXRlcmF0ZSB0aHJvdWdoIGludGVybmFsIGl0ZW1zLiBUaGlzIG1ldGhvZCB0YWtlcyB0aGUgc2FtZSBhcmd1bWVudHMgdGhhdFxuICogYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCB0YWtlcy5cbiAqXG4gKiBOT1RFOiBUaGUgb3JkZXIgb2YgdGhlIG1hcHBpbmdzIGlzIE5PVCBndWFyYW50ZWVkLlxuICovXG5NYXBwaW5nTGlzdC5wcm90b3R5cGUudW5zb3J0ZWRGb3JFYWNoID1cbiAgZnVuY3Rpb24gTWFwcGluZ0xpc3RfZm9yRWFjaChhQ2FsbGJhY2ssIGFUaGlzQXJnKSB7XG4gICAgdGhpcy5fYXJyYXkuZm9yRWFjaChhQ2FsbGJhY2ssIGFUaGlzQXJnKTtcbiAgfTtcblxuLyoqXG4gKiBBZGQgdGhlIGdpdmVuIHNvdXJjZSBtYXBwaW5nLlxuICpcbiAqIEBwYXJhbSBPYmplY3QgYU1hcHBpbmdcbiAqL1xuTWFwcGluZ0xpc3QucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIE1hcHBpbmdMaXN0X2FkZChhTWFwcGluZykge1xuICBpZiAoZ2VuZXJhdGVkUG9zaXRpb25BZnRlcih0aGlzLl9sYXN0LCBhTWFwcGluZykpIHtcbiAgICB0aGlzLl9sYXN0ID0gYU1hcHBpbmc7XG4gICAgdGhpcy5fYXJyYXkucHVzaChhTWFwcGluZyk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fc29ydGVkID0gZmFsc2U7XG4gICAgdGhpcy5fYXJyYXkucHVzaChhTWFwcGluZyk7XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmxhdCwgc29ydGVkIGFycmF5IG9mIG1hcHBpbmdzLiBUaGUgbWFwcGluZ3MgYXJlIHNvcnRlZCBieVxuICogZ2VuZXJhdGVkIHBvc2l0aW9uLlxuICpcbiAqIFdBUk5JTkc6IFRoaXMgbWV0aG9kIHJldHVybnMgaW50ZXJuYWwgZGF0YSB3aXRob3V0IGNvcHlpbmcsIGZvclxuICogcGVyZm9ybWFuY2UuIFRoZSByZXR1cm4gdmFsdWUgbXVzdCBOT1QgYmUgbXV0YXRlZCwgYW5kIHNob3VsZCBiZSB0cmVhdGVkIGFzXG4gKiBhbiBpbW11dGFibGUgYm9ycm93LiBJZiB5b3Ugd2FudCB0byB0YWtlIG93bmVyc2hpcCwgeW91IG11c3QgbWFrZSB5b3VyIG93blxuICogY29weS5cbiAqL1xuTWFwcGluZ0xpc3QucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiBNYXBwaW5nTGlzdF90b0FycmF5KCkge1xuICBpZiAoIXRoaXMuX3NvcnRlZCkge1xuICAgIHRoaXMuX2FycmF5LnNvcnQodXRpbC5jb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNJbmZsYXRlZCk7XG4gICAgdGhpcy5fc29ydGVkID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gdGhpcy5fYXJyYXk7XG59O1xuXG5leHBvcnRzLk1hcHBpbmdMaXN0ID0gTWFwcGluZ0xpc3Q7XG4iLCIvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICovXG5cbi8vIEl0IHR1cm5zIG91dCB0aGF0IHNvbWUgKG1vc3Q/KSBKYXZhU2NyaXB0IGVuZ2luZXMgZG9uJ3Qgc2VsZi1ob3N0XG4vLyBgQXJyYXkucHJvdG90eXBlLnNvcnRgLiBUaGlzIG1ha2VzIHNlbnNlIGJlY2F1c2UgQysrIHdpbGwgbGlrZWx5IHJlbWFpblxuLy8gZmFzdGVyIHRoYW4gSlMgd2hlbiBkb2luZyByYXcgQ1BVLWludGVuc2l2ZSBzb3J0aW5nLiBIb3dldmVyLCB3aGVuIHVzaW5nIGFcbi8vIGN1c3RvbSBjb21wYXJhdG9yIGZ1bmN0aW9uLCBjYWxsaW5nIGJhY2sgYW5kIGZvcnRoIGJldHdlZW4gdGhlIFZNJ3MgQysrIGFuZFxuLy8gSklUJ2QgSlMgaXMgcmF0aGVyIHNsb3cgKmFuZCogbG9zZXMgSklUIHR5cGUgaW5mb3JtYXRpb24sIHJlc3VsdGluZyBpblxuLy8gd29yc2UgZ2VuZXJhdGVkIGNvZGUgZm9yIHRoZSBjb21wYXJhdG9yIGZ1bmN0aW9uIHRoYW4gd291bGQgYmUgb3B0aW1hbC4gSW5cbi8vIGZhY3QsIHdoZW4gc29ydGluZyB3aXRoIGEgY29tcGFyYXRvciwgdGhlc2UgY29zdHMgb3V0d2VpZ2ggdGhlIGJlbmVmaXRzIG9mXG4vLyBzb3J0aW5nIGluIEMrKy4gQnkgdXNpbmcgb3VyIG93biBKUy1pbXBsZW1lbnRlZCBRdWljayBTb3J0IChiZWxvdyksIHdlIGdldFxuLy8gYSB+MzUwMG1zIG1lYW4gc3BlZWQtdXAgaW4gYGJlbmNoL2JlbmNoLmh0bWxgLlxuXG4vKipcbiAqIFN3YXAgdGhlIGVsZW1lbnRzIGluZGV4ZWQgYnkgYHhgIGFuZCBgeWAgaW4gdGhlIGFycmF5IGBhcnlgLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyeVxuICogICAgICAgIFRoZSBhcnJheS5cbiAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gKiAgICAgICAgVGhlIGluZGV4IG9mIHRoZSBmaXJzdCBpdGVtLlxuICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAqICAgICAgICBUaGUgaW5kZXggb2YgdGhlIHNlY29uZCBpdGVtLlxuICovXG5mdW5jdGlvbiBzd2FwKGFyeSwgeCwgeSkge1xuICB2YXIgdGVtcCA9IGFyeVt4XTtcbiAgYXJ5W3hdID0gYXJ5W3ldO1xuICBhcnlbeV0gPSB0ZW1wO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSByYW5kb20gaW50ZWdlciB3aXRoaW4gdGhlIHJhbmdlIGBsb3cgLi4gaGlnaGAgaW5jbHVzaXZlLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBsb3dcbiAqICAgICAgICBUaGUgbG93ZXIgYm91bmQgb24gdGhlIHJhbmdlLlxuICogQHBhcmFtIHtOdW1iZXJ9IGhpZ2hcbiAqICAgICAgICBUaGUgdXBwZXIgYm91bmQgb24gdGhlIHJhbmdlLlxuICovXG5mdW5jdGlvbiByYW5kb21JbnRJblJhbmdlKGxvdywgaGlnaCkge1xuICByZXR1cm4gTWF0aC5yb3VuZChsb3cgKyAoTWF0aC5yYW5kb20oKSAqIChoaWdoIC0gbG93KSkpO1xufVxuXG4vKipcbiAqIFRoZSBRdWljayBTb3J0IGFsZ29yaXRobS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnlcbiAqICAgICAgICBBbiBhcnJheSB0byBzb3J0LlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29tcGFyYXRvclxuICogICAgICAgIEZ1bmN0aW9uIHRvIHVzZSB0byBjb21wYXJlIHR3byBpdGVtcy5cbiAqIEBwYXJhbSB7TnVtYmVyfSBwXG4gKiAgICAgICAgU3RhcnQgaW5kZXggb2YgdGhlIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gclxuICogICAgICAgIEVuZCBpbmRleCBvZiB0aGUgYXJyYXlcbiAqL1xuZnVuY3Rpb24gZG9RdWlja1NvcnQoYXJ5LCBjb21wYXJhdG9yLCBwLCByKSB7XG4gIC8vIElmIG91ciBsb3dlciBib3VuZCBpcyBsZXNzIHRoYW4gb3VyIHVwcGVyIGJvdW5kLCB3ZSAoMSkgcGFydGl0aW9uIHRoZVxuICAvLyBhcnJheSBpbnRvIHR3byBwaWVjZXMgYW5kICgyKSByZWN1cnNlIG9uIGVhY2ggaGFsZi4gSWYgaXQgaXMgbm90LCB0aGlzIGlzXG4gIC8vIHRoZSBlbXB0eSBhcnJheSBhbmQgb3VyIGJhc2UgY2FzZS5cblxuICBpZiAocCA8IHIpIHtcbiAgICAvLyAoMSkgUGFydGl0aW9uaW5nLlxuICAgIC8vXG4gICAgLy8gVGhlIHBhcnRpdGlvbmluZyBjaG9vc2VzIGEgcGl2b3QgYmV0d2VlbiBgcGAgYW5kIGByYCBhbmQgbW92ZXMgYWxsXG4gICAgLy8gZWxlbWVudHMgdGhhdCBhcmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHRoZSBwaXZvdCB0byB0aGUgYmVmb3JlIGl0LCBhbmRcbiAgICAvLyBhbGwgdGhlIGVsZW1lbnRzIHRoYXQgYXJlIGdyZWF0ZXIgdGhhbiBpdCBhZnRlciBpdC4gVGhlIGVmZmVjdCBpcyB0aGF0XG4gICAgLy8gb25jZSBwYXJ0aXRpb24gaXMgZG9uZSwgdGhlIHBpdm90IGlzIGluIHRoZSBleGFjdCBwbGFjZSBpdCB3aWxsIGJlIHdoZW5cbiAgICAvLyB0aGUgYXJyYXkgaXMgcHV0IGluIHNvcnRlZCBvcmRlciwgYW5kIGl0IHdpbGwgbm90IG5lZWQgdG8gYmUgbW92ZWRcbiAgICAvLyBhZ2Fpbi4gVGhpcyBydW5zIGluIE8obikgdGltZS5cblxuICAgIC8vIEFsd2F5cyBjaG9vc2UgYSByYW5kb20gcGl2b3Qgc28gdGhhdCBhbiBpbnB1dCBhcnJheSB3aGljaCBpcyByZXZlcnNlXG4gICAgLy8gc29ydGVkIGRvZXMgbm90IGNhdXNlIE8obl4yKSBydW5uaW5nIHRpbWUuXG4gICAgdmFyIHBpdm90SW5kZXggPSByYW5kb21JbnRJblJhbmdlKHAsIHIpO1xuICAgIHZhciBpID0gcCAtIDE7XG5cbiAgICBzd2FwKGFyeSwgcGl2b3RJbmRleCwgcik7XG4gICAgdmFyIHBpdm90ID0gYXJ5W3JdO1xuXG4gICAgLy8gSW1tZWRpYXRlbHkgYWZ0ZXIgYGpgIGlzIGluY3JlbWVudGVkIGluIHRoaXMgbG9vcCwgdGhlIGZvbGxvd2luZyBob2xkXG4gICAgLy8gdHJ1ZTpcbiAgICAvL1xuICAgIC8vICAgKiBFdmVyeSBlbGVtZW50IGluIGBhcnlbcCAuLiBpXWAgaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHRoZSBwaXZvdC5cbiAgICAvL1xuICAgIC8vICAgKiBFdmVyeSBlbGVtZW50IGluIGBhcnlbaSsxIC4uIGotMV1gIGlzIGdyZWF0ZXIgdGhhbiB0aGUgcGl2b3QuXG4gICAgZm9yICh2YXIgaiA9IHA7IGogPCByOyBqKyspIHtcbiAgICAgIGlmIChjb21wYXJhdG9yKGFyeVtqXSwgcGl2b3QpIDw9IDApIHtcbiAgICAgICAgaSArPSAxO1xuICAgICAgICBzd2FwKGFyeSwgaSwgaik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dhcChhcnksIGkgKyAxLCBqKTtcbiAgICB2YXIgcSA9IGkgKyAxO1xuXG4gICAgLy8gKDIpIFJlY3Vyc2Ugb24gZWFjaCBoYWxmLlxuXG4gICAgZG9RdWlja1NvcnQoYXJ5LCBjb21wYXJhdG9yLCBwLCBxIC0gMSk7XG4gICAgZG9RdWlja1NvcnQoYXJ5LCBjb21wYXJhdG9yLCBxICsgMSwgcik7XG4gIH1cbn1cblxuLyoqXG4gKiBTb3J0IHRoZSBnaXZlbiBhcnJheSBpbi1wbGFjZSB3aXRoIHRoZSBnaXZlbiBjb21wYXJhdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyeVxuICogICAgICAgIEFuIGFycmF5IHRvIHNvcnQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb21wYXJhdG9yXG4gKiAgICAgICAgRnVuY3Rpb24gdG8gdXNlIHRvIGNvbXBhcmUgdHdvIGl0ZW1zLlxuICovXG5leHBvcnRzLnF1aWNrU29ydCA9IGZ1bmN0aW9uIChhcnksIGNvbXBhcmF0b3IpIHtcbiAgZG9RdWlja1NvcnQoYXJ5LCBjb21wYXJhdG9yLCAwLCBhcnkubGVuZ3RoIC0gMSk7XG59O1xuIiwiLyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuLypcbiAqIENvcHlyaWdodCAyMDExIE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2VcbiAqL1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xudmFyIGJpbmFyeVNlYXJjaCA9IHJlcXVpcmUoJy4vYmluYXJ5LXNlYXJjaCcpO1xudmFyIEFycmF5U2V0ID0gcmVxdWlyZSgnLi9hcnJheS1zZXQnKS5BcnJheVNldDtcbnZhciBiYXNlNjRWTFEgPSByZXF1aXJlKCcuL2Jhc2U2NC12bHEnKTtcbnZhciBxdWlja1NvcnQgPSByZXF1aXJlKCcuL3F1aWNrLXNvcnQnKS5xdWlja1NvcnQ7XG5cbmZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyKGFTb3VyY2VNYXAsIGFTb3VyY2VNYXBVUkwpIHtcbiAgdmFyIHNvdXJjZU1hcCA9IGFTb3VyY2VNYXA7XG4gIGlmICh0eXBlb2YgYVNvdXJjZU1hcCA9PT0gJ3N0cmluZycpIHtcbiAgICBzb3VyY2VNYXAgPSB1dGlsLnBhcnNlU291cmNlTWFwSW5wdXQoYVNvdXJjZU1hcCk7XG4gIH1cblxuICByZXR1cm4gc291cmNlTWFwLnNlY3Rpb25zICE9IG51bGxcbiAgICA/IG5ldyBJbmRleGVkU291cmNlTWFwQ29uc3VtZXIoc291cmNlTWFwLCBhU291cmNlTWFwVVJMKVxuICAgIDogbmV3IEJhc2ljU291cmNlTWFwQ29uc3VtZXIoc291cmNlTWFwLCBhU291cmNlTWFwVVJMKTtcbn1cblxuU291cmNlTWFwQ29uc3VtZXIuZnJvbVNvdXJjZU1hcCA9IGZ1bmN0aW9uKGFTb3VyY2VNYXAsIGFTb3VyY2VNYXBVUkwpIHtcbiAgcmV0dXJuIEJhc2ljU291cmNlTWFwQ29uc3VtZXIuZnJvbVNvdXJjZU1hcChhU291cmNlTWFwLCBhU291cmNlTWFwVVJMKTtcbn1cblxuLyoqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgc291cmNlIG1hcHBpbmcgc3BlYyB0aGF0IHdlIGFyZSBjb25zdW1pbmcuXG4gKi9cblNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fdmVyc2lvbiA9IDM7XG5cbi8vIGBfX2dlbmVyYXRlZE1hcHBpbmdzYCBhbmQgYF9fb3JpZ2luYWxNYXBwaW5nc2AgYXJlIGFycmF5cyB0aGF0IGhvbGQgdGhlXG4vLyBwYXJzZWQgbWFwcGluZyBjb29yZGluYXRlcyBmcm9tIHRoZSBzb3VyY2UgbWFwJ3MgXCJtYXBwaW5nc1wiIGF0dHJpYnV0ZS4gVGhleVxuLy8gYXJlIGxhemlseSBpbnN0YW50aWF0ZWQsIGFjY2Vzc2VkIHZpYSB0aGUgYF9nZW5lcmF0ZWRNYXBwaW5nc2AgYW5kXG4vLyBgX29yaWdpbmFsTWFwcGluZ3NgIGdldHRlcnMgcmVzcGVjdGl2ZWx5LCBhbmQgd2Ugb25seSBwYXJzZSB0aGUgbWFwcGluZ3Ncbi8vIGFuZCBjcmVhdGUgdGhlc2UgYXJyYXlzIG9uY2UgcXVlcmllZCBmb3IgYSBzb3VyY2UgbG9jYXRpb24uIFdlIGp1bXAgdGhyb3VnaFxuLy8gdGhlc2UgaG9vcHMgYmVjYXVzZSB0aGVyZSBjYW4gYmUgbWFueSB0aG91c2FuZHMgb2YgbWFwcGluZ3MsIGFuZCBwYXJzaW5nXG4vLyB0aGVtIGlzIGV4cGVuc2l2ZSwgc28gd2Ugb25seSB3YW50IHRvIGRvIGl0IGlmIHdlIG11c3QuXG4vL1xuLy8gRWFjaCBvYmplY3QgaW4gdGhlIGFycmF5cyBpcyBvZiB0aGUgZm9ybTpcbi8vXG4vLyAgICAge1xuLy8gICAgICAgZ2VuZXJhdGVkTGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgY29kZSxcbi8vICAgICAgIGdlbmVyYXRlZENvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBjb2RlLFxuLy8gICAgICAgc291cmNlOiBUaGUgcGF0aCB0byB0aGUgb3JpZ2luYWwgc291cmNlIGZpbGUgdGhhdCBnZW5lcmF0ZWQgdGhpc1xuLy8gICAgICAgICAgICAgICBjaHVuayBvZiBjb2RlLFxuLy8gICAgICAgb3JpZ2luYWxMaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZSB0aGF0XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvcnJlc3BvbmRzIHRvIHRoaXMgY2h1bmsgb2YgZ2VuZXJhdGVkIGNvZGUsXG4vLyAgICAgICBvcmlnaW5hbENvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZSB0aGF0XG4vLyAgICAgICAgICAgICAgICAgICAgICAgY29ycmVzcG9uZHMgdG8gdGhpcyBjaHVuayBvZiBnZW5lcmF0ZWQgY29kZSxcbi8vICAgICAgIG5hbWU6IFRoZSBuYW1lIG9mIHRoZSBvcmlnaW5hbCBzeW1ib2wgd2hpY2ggZ2VuZXJhdGVkIHRoaXMgY2h1bmsgb2Zcbi8vICAgICAgICAgICAgIGNvZGUuXG4vLyAgICAgfVxuLy9cbi8vIEFsbCBwcm9wZXJ0aWVzIGV4Y2VwdCBmb3IgYGdlbmVyYXRlZExpbmVgIGFuZCBgZ2VuZXJhdGVkQ29sdW1uYCBjYW4gYmVcbi8vIGBudWxsYC5cbi8vXG4vLyBgX2dlbmVyYXRlZE1hcHBpbmdzYCBpcyBvcmRlcmVkIGJ5IHRoZSBnZW5lcmF0ZWQgcG9zaXRpb25zLlxuLy9cbi8vIGBfb3JpZ2luYWxNYXBwaW5nc2AgaXMgb3JkZXJlZCBieSB0aGUgb3JpZ2luYWwgcG9zaXRpb25zLlxuXG5Tb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX19nZW5lcmF0ZWRNYXBwaW5ncyA9IG51bGw7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLCAnX2dlbmVyYXRlZE1hcHBpbmdzJywge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzKSB7XG4gICAgICB0aGlzLl9wYXJzZU1hcHBpbmdzKHRoaXMuX21hcHBpbmdzLCB0aGlzLnNvdXJjZVJvb3QpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9fZ2VuZXJhdGVkTWFwcGluZ3M7XG4gIH1cbn0pO1xuXG5Tb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX19vcmlnaW5hbE1hcHBpbmdzID0gbnVsbDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUsICdfb3JpZ2luYWxNYXBwaW5ncycsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuX19vcmlnaW5hbE1hcHBpbmdzKSB7XG4gICAgICB0aGlzLl9wYXJzZU1hcHBpbmdzKHRoaXMuX21hcHBpbmdzLCB0aGlzLnNvdXJjZVJvb3QpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9fb3JpZ2luYWxNYXBwaW5ncztcbiAgfVxufSk7XG5cblNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fY2hhcklzTWFwcGluZ1NlcGFyYXRvciA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX2NoYXJJc01hcHBpbmdTZXBhcmF0b3IoYVN0ciwgaW5kZXgpIHtcbiAgICB2YXIgYyA9IGFTdHIuY2hhckF0KGluZGV4KTtcbiAgICByZXR1cm4gYyA9PT0gXCI7XCIgfHwgYyA9PT0gXCIsXCI7XG4gIH07XG5cbi8qKlxuICogUGFyc2UgdGhlIG1hcHBpbmdzIGluIGEgc3RyaW5nIGluIHRvIGEgZGF0YSBzdHJ1Y3R1cmUgd2hpY2ggd2UgY2FuIGVhc2lseVxuICogcXVlcnkgKHRoZSBvcmRlcmVkIGFycmF5cyBpbiB0aGUgYHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5nc2AgYW5kXG4gKiBgdGhpcy5fX29yaWdpbmFsTWFwcGluZ3NgIHByb3BlcnRpZXMpLlxuICovXG5Tb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX3BhcnNlTWFwcGluZ3MgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9wYXJzZU1hcHBpbmdzKGFTdHIsIGFTb3VyY2VSb290KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU3ViY2xhc3NlcyBtdXN0IGltcGxlbWVudCBfcGFyc2VNYXBwaW5nc1wiKTtcbiAgfTtcblxuU291cmNlTWFwQ29uc3VtZXIuR0VORVJBVEVEX09SREVSID0gMTtcblNvdXJjZU1hcENvbnN1bWVyLk9SSUdJTkFMX09SREVSID0gMjtcblxuU291cmNlTWFwQ29uc3VtZXIuR1JFQVRFU1RfTE9XRVJfQk9VTkQgPSAxO1xuU291cmNlTWFwQ29uc3VtZXIuTEVBU1RfVVBQRVJfQk9VTkQgPSAyO1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBlYWNoIG1hcHBpbmcgYmV0d2VlbiBhbiBvcmlnaW5hbCBzb3VyY2UvbGluZS9jb2x1bW4gYW5kIGFcbiAqIGdlbmVyYXRlZCBsaW5lL2NvbHVtbiBpbiB0aGlzIHNvdXJjZSBtYXAuXG4gKlxuICogQHBhcmFtIEZ1bmN0aW9uIGFDYWxsYmFja1xuICogICAgICAgIFRoZSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aXRoIGVhY2ggbWFwcGluZy5cbiAqIEBwYXJhbSBPYmplY3QgYUNvbnRleHRcbiAqICAgICAgICBPcHRpb25hbC4gSWYgc3BlY2lmaWVkLCB0aGlzIG9iamVjdCB3aWxsIGJlIHRoZSB2YWx1ZSBvZiBgdGhpc2AgZXZlcnlcbiAqICAgICAgICB0aW1lIHRoYXQgYGFDYWxsYmFja2AgaXMgY2FsbGVkLlxuICogQHBhcmFtIGFPcmRlclxuICogICAgICAgIEVpdGhlciBgU291cmNlTWFwQ29uc3VtZXIuR0VORVJBVEVEX09SREVSYCBvclxuICogICAgICAgIGBTb3VyY2VNYXBDb25zdW1lci5PUklHSU5BTF9PUkRFUmAuIFNwZWNpZmllcyB3aGV0aGVyIHlvdSB3YW50IHRvXG4gKiAgICAgICAgaXRlcmF0ZSBvdmVyIHRoZSBtYXBwaW5ncyBzb3J0ZWQgYnkgdGhlIGdlbmVyYXRlZCBmaWxlJ3MgbGluZS9jb2x1bW5cbiAqICAgICAgICBvcmRlciBvciB0aGUgb3JpZ2luYWwncyBzb3VyY2UvbGluZS9jb2x1bW4gb3JkZXIsIHJlc3BlY3RpdmVseS4gRGVmYXVsdHMgdG9cbiAqICAgICAgICBgU291cmNlTWFwQ29uc3VtZXIuR0VORVJBVEVEX09SREVSYC5cbiAqL1xuU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLmVhY2hNYXBwaW5nID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfZWFjaE1hcHBpbmcoYUNhbGxiYWNrLCBhQ29udGV4dCwgYU9yZGVyKSB7XG4gICAgdmFyIGNvbnRleHQgPSBhQ29udGV4dCB8fCBudWxsO1xuICAgIHZhciBvcmRlciA9IGFPcmRlciB8fCBTb3VyY2VNYXBDb25zdW1lci5HRU5FUkFURURfT1JERVI7XG5cbiAgICB2YXIgbWFwcGluZ3M7XG4gICAgc3dpdGNoIChvcmRlcikge1xuICAgIGNhc2UgU291cmNlTWFwQ29uc3VtZXIuR0VORVJBVEVEX09SREVSOlxuICAgICAgbWFwcGluZ3MgPSB0aGlzLl9nZW5lcmF0ZWRNYXBwaW5ncztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgU291cmNlTWFwQ29uc3VtZXIuT1JJR0lOQUxfT1JERVI6XG4gICAgICBtYXBwaW5ncyA9IHRoaXMuX29yaWdpbmFsTWFwcGluZ3M7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBvcmRlciBvZiBpdGVyYXRpb24uXCIpO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VSb290ID0gdGhpcy5zb3VyY2VSb290O1xuICAgIG1hcHBpbmdzLm1hcChmdW5jdGlvbiAobWFwcGluZykge1xuICAgICAgdmFyIHNvdXJjZSA9IG1hcHBpbmcuc291cmNlID09PSBudWxsID8gbnVsbCA6IHRoaXMuX3NvdXJjZXMuYXQobWFwcGluZy5zb3VyY2UpO1xuICAgICAgc291cmNlID0gdXRpbC5jb21wdXRlU291cmNlVVJMKHNvdXJjZVJvb3QsIHNvdXJjZSwgdGhpcy5fc291cmNlTWFwVVJMKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICBnZW5lcmF0ZWRMaW5lOiBtYXBwaW5nLmdlbmVyYXRlZExpbmUsXG4gICAgICAgIGdlbmVyYXRlZENvbHVtbjogbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4sXG4gICAgICAgIG9yaWdpbmFsTGluZTogbWFwcGluZy5vcmlnaW5hbExpbmUsXG4gICAgICAgIG9yaWdpbmFsQ29sdW1uOiBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uLFxuICAgICAgICBuYW1lOiBtYXBwaW5nLm5hbWUgPT09IG51bGwgPyBudWxsIDogdGhpcy5fbmFtZXMuYXQobWFwcGluZy5uYW1lKVxuICAgICAgfTtcbiAgICB9LCB0aGlzKS5mb3JFYWNoKGFDYWxsYmFjaywgY29udGV4dCk7XG4gIH07XG5cbi8qKlxuICogUmV0dXJucyBhbGwgZ2VuZXJhdGVkIGxpbmUgYW5kIGNvbHVtbiBpbmZvcm1hdGlvbiBmb3IgdGhlIG9yaWdpbmFsIHNvdXJjZSxcbiAqIGxpbmUsIGFuZCBjb2x1bW4gcHJvdmlkZWQuIElmIG5vIGNvbHVtbiBpcyBwcm92aWRlZCwgcmV0dXJucyBhbGwgbWFwcGluZ3NcbiAqIGNvcnJlc3BvbmRpbmcgdG8gYSBlaXRoZXIgdGhlIGxpbmUgd2UgYXJlIHNlYXJjaGluZyBmb3Igb3IgdGhlIG5leHRcbiAqIGNsb3Nlc3QgbGluZSB0aGF0IGhhcyBhbnkgbWFwcGluZ3MuIE90aGVyd2lzZSwgcmV0dXJucyBhbGwgbWFwcGluZ3NcbiAqIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIGxpbmUgYW5kIGVpdGhlciB0aGUgY29sdW1uIHdlIGFyZSBzZWFyY2hpbmcgZm9yXG4gKiBvciB0aGUgbmV4dCBjbG9zZXN0IGNvbHVtbiB0aGF0IGhhcyBhbnkgb2Zmc2V0cy5cbiAqXG4gKiBUaGUgb25seSBhcmd1bWVudCBpcyBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogICAtIHNvdXJjZTogVGhlIGZpbGVuYW1lIG9mIHRoZSBvcmlnaW5hbCBzb3VyY2UuXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UuICBUaGUgbGluZSBudW1iZXIgaXMgMS1iYXNlZC5cbiAqICAgLSBjb2x1bW46IE9wdGlvbmFsLiB0aGUgY29sdW1uIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlLlxuICogICAgVGhlIGNvbHVtbiBudW1iZXIgaXMgMC1iYXNlZC5cbiAqXG4gKiBhbmQgYW4gYXJyYXkgb2Ygb2JqZWN0cyBpcyByZXR1cm5lZCwgZWFjaCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLCBvciBudWxsLiAgVGhlXG4gKiAgICBsaW5lIG51bWJlciBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UsIG9yIG51bGwuXG4gKiAgICBUaGUgY29sdW1uIG51bWJlciBpcyAwLWJhc2VkLlxuICovXG5Tb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuYWxsR2VuZXJhdGVkUG9zaXRpb25zRm9yID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfYWxsR2VuZXJhdGVkUG9zaXRpb25zRm9yKGFBcmdzKSB7XG4gICAgdmFyIGxpbmUgPSB1dGlsLmdldEFyZyhhQXJncywgJ2xpbmUnKTtcblxuICAgIC8vIFdoZW4gdGhlcmUgaXMgbm8gZXhhY3QgbWF0Y2gsIEJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9maW5kTWFwcGluZ1xuICAgIC8vIHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBjbG9zZXN0IG1hcHBpbmcgbGVzcyB0aGFuIHRoZSBuZWVkbGUuIEJ5XG4gICAgLy8gc2V0dGluZyBuZWVkbGUub3JpZ2luYWxDb2x1bW4gdG8gMCwgd2UgdGh1cyBmaW5kIHRoZSBsYXN0IG1hcHBpbmcgZm9yXG4gICAgLy8gdGhlIGdpdmVuIGxpbmUsIHByb3ZpZGVkIHN1Y2ggYSBtYXBwaW5nIGV4aXN0cy5cbiAgICB2YXIgbmVlZGxlID0ge1xuICAgICAgc291cmNlOiB1dGlsLmdldEFyZyhhQXJncywgJ3NvdXJjZScpLFxuICAgICAgb3JpZ2luYWxMaW5lOiBsaW5lLFxuICAgICAgb3JpZ2luYWxDb2x1bW46IHV0aWwuZ2V0QXJnKGFBcmdzLCAnY29sdW1uJywgMClcbiAgICB9O1xuXG4gICAgbmVlZGxlLnNvdXJjZSA9IHRoaXMuX2ZpbmRTb3VyY2VJbmRleChuZWVkbGUuc291cmNlKTtcbiAgICBpZiAobmVlZGxlLnNvdXJjZSA8IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICB2YXIgbWFwcGluZ3MgPSBbXTtcblxuICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmRNYXBwaW5nKG5lZWRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vcmlnaW5hbE1hcHBpbmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JpZ2luYWxMaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmlnaW5hbENvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWwuY29tcGFyZUJ5T3JpZ2luYWxQb3NpdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluYXJ5U2VhcmNoLkxFQVNUX1VQUEVSX0JPVU5EKTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdmFyIG1hcHBpbmcgPSB0aGlzLl9vcmlnaW5hbE1hcHBpbmdzW2luZGV4XTtcblxuICAgICAgaWYgKGFBcmdzLmNvbHVtbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBvcmlnaW5hbExpbmUgPSBtYXBwaW5nLm9yaWdpbmFsTGluZTtcblxuICAgICAgICAvLyBJdGVyYXRlIHVudGlsIGVpdGhlciB3ZSBydW4gb3V0IG9mIG1hcHBpbmdzLCBvciB3ZSBydW4gaW50b1xuICAgICAgICAvLyBhIG1hcHBpbmcgZm9yIGEgZGlmZmVyZW50IGxpbmUgdGhhbiB0aGUgb25lIHdlIGZvdW5kLiBTaW5jZVxuICAgICAgICAvLyBtYXBwaW5ncyBhcmUgc29ydGVkLCB0aGlzIGlzIGd1YXJhbnRlZWQgdG8gZmluZCBhbGwgbWFwcGluZ3MgZm9yXG4gICAgICAgIC8vIHRoZSBsaW5lIHdlIGZvdW5kLlxuICAgICAgICB3aGlsZSAobWFwcGluZyAmJiBtYXBwaW5nLm9yaWdpbmFsTGluZSA9PT0gb3JpZ2luYWxMaW5lKSB7XG4gICAgICAgICAgbWFwcGluZ3MucHVzaCh7XG4gICAgICAgICAgICBsaW5lOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnZ2VuZXJhdGVkTGluZScsIG51bGwpLFxuICAgICAgICAgICAgY29sdW1uOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnZ2VuZXJhdGVkQ29sdW1uJywgbnVsbCksXG4gICAgICAgICAgICBsYXN0Q29sdW1uOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnbGFzdEdlbmVyYXRlZENvbHVtbicsIG51bGwpXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBtYXBwaW5nID0gdGhpcy5fb3JpZ2luYWxNYXBwaW5nc1srK2luZGV4XTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG9yaWdpbmFsQ29sdW1uID0gbWFwcGluZy5vcmlnaW5hbENvbHVtbjtcblxuICAgICAgICAvLyBJdGVyYXRlIHVudGlsIGVpdGhlciB3ZSBydW4gb3V0IG9mIG1hcHBpbmdzLCBvciB3ZSBydW4gaW50b1xuICAgICAgICAvLyBhIG1hcHBpbmcgZm9yIGEgZGlmZmVyZW50IGxpbmUgdGhhbiB0aGUgb25lIHdlIHdlcmUgc2VhcmNoaW5nIGZvci5cbiAgICAgICAgLy8gU2luY2UgbWFwcGluZ3MgYXJlIHNvcnRlZCwgdGhpcyBpcyBndWFyYW50ZWVkIHRvIGZpbmQgYWxsIG1hcHBpbmdzIGZvclxuICAgICAgICAvLyB0aGUgbGluZSB3ZSBhcmUgc2VhcmNoaW5nIGZvci5cbiAgICAgICAgd2hpbGUgKG1hcHBpbmcgJiZcbiAgICAgICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWxMaW5lID09PSBsaW5lICYmXG4gICAgICAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uID09IG9yaWdpbmFsQ29sdW1uKSB7XG4gICAgICAgICAgbWFwcGluZ3MucHVzaCh7XG4gICAgICAgICAgICBsaW5lOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnZ2VuZXJhdGVkTGluZScsIG51bGwpLFxuICAgICAgICAgICAgY29sdW1uOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnZ2VuZXJhdGVkQ29sdW1uJywgbnVsbCksXG4gICAgICAgICAgICBsYXN0Q29sdW1uOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnbGFzdEdlbmVyYXRlZENvbHVtbicsIG51bGwpXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBtYXBwaW5nID0gdGhpcy5fb3JpZ2luYWxNYXBwaW5nc1srK2luZGV4XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXBwaW5ncztcbiAgfTtcblxuZXhwb3J0cy5Tb3VyY2VNYXBDb25zdW1lciA9IFNvdXJjZU1hcENvbnN1bWVyO1xuXG4vKipcbiAqIEEgQmFzaWNTb3VyY2VNYXBDb25zdW1lciBpbnN0YW5jZSByZXByZXNlbnRzIGEgcGFyc2VkIHNvdXJjZSBtYXAgd2hpY2ggd2UgY2FuXG4gKiBxdWVyeSBmb3IgaW5mb3JtYXRpb24gYWJvdXQgdGhlIG9yaWdpbmFsIGZpbGUgcG9zaXRpb25zIGJ5IGdpdmluZyBpdCBhIGZpbGVcbiAqIHBvc2l0aW9uIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLlxuICpcbiAqIFRoZSBmaXJzdCBwYXJhbWV0ZXIgaXMgdGhlIHJhdyBzb3VyY2UgbWFwIChlaXRoZXIgYXMgYSBKU09OIHN0cmluZywgb3JcbiAqIGFscmVhZHkgcGFyc2VkIHRvIGFuIG9iamVjdCkuIEFjY29yZGluZyB0byB0aGUgc3BlYywgc291cmNlIG1hcHMgaGF2ZSB0aGVcbiAqIGZvbGxvd2luZyBhdHRyaWJ1dGVzOlxuICpcbiAqICAgLSB2ZXJzaW9uOiBXaGljaCB2ZXJzaW9uIG9mIHRoZSBzb3VyY2UgbWFwIHNwZWMgdGhpcyBtYXAgaXMgZm9sbG93aW5nLlxuICogICAtIHNvdXJjZXM6IEFuIGFycmF5IG9mIFVSTHMgdG8gdGhlIG9yaWdpbmFsIHNvdXJjZSBmaWxlcy5cbiAqICAgLSBuYW1lczogQW4gYXJyYXkgb2YgaWRlbnRpZmllcnMgd2hpY2ggY2FuIGJlIHJlZmVycmVuY2VkIGJ5IGluZGl2aWR1YWwgbWFwcGluZ3MuXG4gKiAgIC0gc291cmNlUm9vdDogT3B0aW9uYWwuIFRoZSBVUkwgcm9vdCBmcm9tIHdoaWNoIGFsbCBzb3VyY2VzIGFyZSByZWxhdGl2ZS5cbiAqICAgLSBzb3VyY2VzQ29udGVudDogT3B0aW9uYWwuIEFuIGFycmF5IG9mIGNvbnRlbnRzIG9mIHRoZSBvcmlnaW5hbCBzb3VyY2UgZmlsZXMuXG4gKiAgIC0gbWFwcGluZ3M6IEEgc3RyaW5nIG9mIGJhc2U2NCBWTFFzIHdoaWNoIGNvbnRhaW4gdGhlIGFjdHVhbCBtYXBwaW5ncy5cbiAqICAgLSBmaWxlOiBPcHRpb25hbC4gVGhlIGdlbmVyYXRlZCBmaWxlIHRoaXMgc291cmNlIG1hcCBpcyBhc3NvY2lhdGVkIHdpdGguXG4gKlxuICogSGVyZSBpcyBhbiBleGFtcGxlIHNvdXJjZSBtYXAsIHRha2VuIGZyb20gdGhlIHNvdXJjZSBtYXAgc3BlY1swXTpcbiAqXG4gKiAgICAge1xuICogICAgICAgdmVyc2lvbiA6IDMsXG4gKiAgICAgICBmaWxlOiBcIm91dC5qc1wiLFxuICogICAgICAgc291cmNlUm9vdCA6IFwiXCIsXG4gKiAgICAgICBzb3VyY2VzOiBbXCJmb28uanNcIiwgXCJiYXIuanNcIl0sXG4gKiAgICAgICBuYW1lczogW1wic3JjXCIsIFwibWFwc1wiLCBcImFyZVwiLCBcImZ1blwiXSxcbiAqICAgICAgIG1hcHBpbmdzOiBcIkFBLEFCOztBQkNERTtcIlxuICogICAgIH1cbiAqXG4gKiBUaGUgc2Vjb25kIHBhcmFtZXRlciwgaWYgZ2l2ZW4sIGlzIGEgc3RyaW5nIHdob3NlIHZhbHVlIGlzIHRoZSBVUkxcbiAqIGF0IHdoaWNoIHRoZSBzb3VyY2UgbWFwIHdhcyBmb3VuZC4gIFRoaXMgVVJMIGlzIHVzZWQgdG8gY29tcHV0ZSB0aGVcbiAqIHNvdXJjZXMgYXJyYXkuXG4gKlxuICogWzBdOiBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFVMVJHQWVoUXdSeXBVVG92RjFLUmxwaU9GemUwYi1fMmdjNmZBSDBLWTBrL2VkaXQ/cGxpPTEjXG4gKi9cbmZ1bmN0aW9uIEJhc2ljU291cmNlTWFwQ29uc3VtZXIoYVNvdXJjZU1hcCwgYVNvdXJjZU1hcFVSTCkge1xuICB2YXIgc291cmNlTWFwID0gYVNvdXJjZU1hcDtcbiAgaWYgKHR5cGVvZiBhU291cmNlTWFwID09PSAnc3RyaW5nJykge1xuICAgIHNvdXJjZU1hcCA9IHV0aWwucGFyc2VTb3VyY2VNYXBJbnB1dChhU291cmNlTWFwKTtcbiAgfVxuXG4gIHZhciB2ZXJzaW9uID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAndmVyc2lvbicpO1xuICB2YXIgc291cmNlcyA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ3NvdXJjZXMnKTtcbiAgLy8gU2FzcyAzLjMgbGVhdmVzIG91dCB0aGUgJ25hbWVzJyBhcnJheSwgc28gd2UgZGV2aWF0ZSBmcm9tIHRoZSBzcGVjICh3aGljaFxuICAvLyByZXF1aXJlcyB0aGUgYXJyYXkpIHRvIHBsYXkgbmljZSBoZXJlLlxuICB2YXIgbmFtZXMgPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICduYW1lcycsIFtdKTtcbiAgdmFyIHNvdXJjZVJvb3QgPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICdzb3VyY2VSb290JywgbnVsbCk7XG4gIHZhciBzb3VyY2VzQ29udGVudCA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ3NvdXJjZXNDb250ZW50JywgbnVsbCk7XG4gIHZhciBtYXBwaW5ncyA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ21hcHBpbmdzJyk7XG4gIHZhciBmaWxlID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAnZmlsZScsIG51bGwpO1xuXG4gIC8vIE9uY2UgYWdhaW4sIFNhc3MgZGV2aWF0ZXMgZnJvbSB0aGUgc3BlYyBhbmQgc3VwcGxpZXMgdGhlIHZlcnNpb24gYXMgYVxuICAvLyBzdHJpbmcgcmF0aGVyIHRoYW4gYSBudW1iZXIsIHNvIHdlIHVzZSBsb29zZSBlcXVhbGl0eSBjaGVja2luZyBoZXJlLlxuICBpZiAodmVyc2lvbiAhPSB0aGlzLl92ZXJzaW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCB2ZXJzaW9uOiAnICsgdmVyc2lvbik7XG4gIH1cblxuICBpZiAoc291cmNlUm9vdCkge1xuICAgIHNvdXJjZVJvb3QgPSB1dGlsLm5vcm1hbGl6ZShzb3VyY2VSb290KTtcbiAgfVxuXG4gIHNvdXJjZXMgPSBzb3VyY2VzXG4gICAgLm1hcChTdHJpbmcpXG4gICAgLy8gU29tZSBzb3VyY2UgbWFwcyBwcm9kdWNlIHJlbGF0aXZlIHNvdXJjZSBwYXRocyBsaWtlIFwiLi9mb28uanNcIiBpbnN0ZWFkIG9mXG4gICAgLy8gXCJmb28uanNcIi4gIE5vcm1hbGl6ZSB0aGVzZSBmaXJzdCBzbyB0aGF0IGZ1dHVyZSBjb21wYXJpc29ucyB3aWxsIHN1Y2NlZWQuXG4gICAgLy8gU2VlIGJ1Z3ppbC5sYS8xMDkwNzY4LlxuICAgIC5tYXAodXRpbC5ub3JtYWxpemUpXG4gICAgLy8gQWx3YXlzIGVuc3VyZSB0aGF0IGFic29sdXRlIHNvdXJjZXMgYXJlIGludGVybmFsbHkgc3RvcmVkIHJlbGF0aXZlIHRvXG4gICAgLy8gdGhlIHNvdXJjZSByb290LCBpZiB0aGUgc291cmNlIHJvb3QgaXMgYWJzb2x1dGUuIE5vdCBkb2luZyB0aGlzIHdvdWxkXG4gICAgLy8gYmUgcGFydGljdWxhcmx5IHByb2JsZW1hdGljIHdoZW4gdGhlIHNvdXJjZSByb290IGlzIGEgcHJlZml4IG9mIHRoZVxuICAgIC8vIHNvdXJjZSAodmFsaWQsIGJ1dCB3aHk/PykuIFNlZSBnaXRodWIgaXNzdWUgIzE5OSBhbmQgYnVnemlsLmxhLzExODg5ODIuXG4gICAgLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gc291cmNlUm9vdCAmJiB1dGlsLmlzQWJzb2x1dGUoc291cmNlUm9vdCkgJiYgdXRpbC5pc0Fic29sdXRlKHNvdXJjZSlcbiAgICAgICAgPyB1dGlsLnJlbGF0aXZlKHNvdXJjZVJvb3QsIHNvdXJjZSlcbiAgICAgICAgOiBzb3VyY2U7XG4gICAgfSk7XG5cbiAgLy8gUGFzcyBgdHJ1ZWAgYmVsb3cgdG8gYWxsb3cgZHVwbGljYXRlIG5hbWVzIGFuZCBzb3VyY2VzLiBXaGlsZSBzb3VyY2UgbWFwc1xuICAvLyBhcmUgaW50ZW5kZWQgdG8gYmUgY29tcHJlc3NlZCBhbmQgZGVkdXBsaWNhdGVkLCB0aGUgVHlwZVNjcmlwdCBjb21waWxlclxuICAvLyBzb21ldGltZXMgZ2VuZXJhdGVzIHNvdXJjZSBtYXBzIHdpdGggZHVwbGljYXRlcyBpbiB0aGVtLiBTZWUgR2l0aHViIGlzc3VlXG4gIC8vICM3MiBhbmQgYnVnemlsLmxhLzg4OTQ5Mi5cbiAgdGhpcy5fbmFtZXMgPSBBcnJheVNldC5mcm9tQXJyYXkobmFtZXMubWFwKFN0cmluZyksIHRydWUpO1xuICB0aGlzLl9zb3VyY2VzID0gQXJyYXlTZXQuZnJvbUFycmF5KHNvdXJjZXMsIHRydWUpO1xuXG4gIHRoaXMuX2Fic29sdXRlU291cmNlcyA9IHRoaXMuX3NvdXJjZXMudG9BcnJheSgpLm1hcChmdW5jdGlvbiAocykge1xuICAgIHJldHVybiB1dGlsLmNvbXB1dGVTb3VyY2VVUkwoc291cmNlUm9vdCwgcywgYVNvdXJjZU1hcFVSTCk7XG4gIH0pO1xuXG4gIHRoaXMuc291cmNlUm9vdCA9IHNvdXJjZVJvb3Q7XG4gIHRoaXMuc291cmNlc0NvbnRlbnQgPSBzb3VyY2VzQ29udGVudDtcbiAgdGhpcy5fbWFwcGluZ3MgPSBtYXBwaW5ncztcbiAgdGhpcy5fc291cmNlTWFwVVJMID0gYVNvdXJjZU1hcFVSTDtcbiAgdGhpcy5maWxlID0gZmlsZTtcbn1cblxuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSk7XG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5jb25zdW1lciA9IFNvdXJjZU1hcENvbnN1bWVyO1xuXG4vKipcbiAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gZmluZCB0aGUgaW5kZXggb2YgYSBzb3VyY2UuICBSZXR1cm5zIC0xIGlmIG5vdFxuICogZm91bmQuXG4gKi9cbkJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9maW5kU291cmNlSW5kZXggPSBmdW5jdGlvbihhU291cmNlKSB7XG4gIHZhciByZWxhdGl2ZVNvdXJjZSA9IGFTb3VyY2U7XG4gIGlmICh0aGlzLnNvdXJjZVJvb3QgIT0gbnVsbCkge1xuICAgIHJlbGF0aXZlU291cmNlID0gdXRpbC5yZWxhdGl2ZSh0aGlzLnNvdXJjZVJvb3QsIHJlbGF0aXZlU291cmNlKTtcbiAgfVxuXG4gIGlmICh0aGlzLl9zb3VyY2VzLmhhcyhyZWxhdGl2ZVNvdXJjZSkpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlcy5pbmRleE9mKHJlbGF0aXZlU291cmNlKTtcbiAgfVxuXG4gIC8vIE1heWJlIGFTb3VyY2UgaXMgYW4gYWJzb2x1dGUgVVJMIGFzIHJldHVybmVkIGJ5IHxzb3VyY2VzfC4gIEluXG4gIC8vIHRoaXMgY2FzZSB3ZSBjYW4ndCBzaW1wbHkgdW5kbyB0aGUgdHJhbnNmb3JtLlxuICB2YXIgaTtcbiAgZm9yIChpID0gMDsgaSA8IHRoaXMuX2Fic29sdXRlU291cmNlcy5sZW5ndGg7ICsraSkge1xuICAgIGlmICh0aGlzLl9hYnNvbHV0ZVNvdXJjZXNbaV0gPT0gYVNvdXJjZSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBCYXNpY1NvdXJjZU1hcENvbnN1bWVyIGZyb20gYSBTb3VyY2VNYXBHZW5lcmF0b3IuXG4gKlxuICogQHBhcmFtIFNvdXJjZU1hcEdlbmVyYXRvciBhU291cmNlTWFwXG4gKiAgICAgICAgVGhlIHNvdXJjZSBtYXAgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuICogQHBhcmFtIFN0cmluZyBhU291cmNlTWFwVVJMXG4gKiAgICAgICAgVGhlIFVSTCBhdCB3aGljaCB0aGUgc291cmNlIG1hcCBjYW4gYmUgZm91bmQgKG9wdGlvbmFsKVxuICogQHJldHVybnMgQmFzaWNTb3VyY2VNYXBDb25zdW1lclxuICovXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLmZyb21Tb3VyY2VNYXAgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9mcm9tU291cmNlTWFwKGFTb3VyY2VNYXAsIGFTb3VyY2VNYXBVUkwpIHtcbiAgICB2YXIgc21jID0gT2JqZWN0LmNyZWF0ZShCYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSk7XG5cbiAgICB2YXIgbmFtZXMgPSBzbWMuX25hbWVzID0gQXJyYXlTZXQuZnJvbUFycmF5KGFTb3VyY2VNYXAuX25hbWVzLnRvQXJyYXkoKSwgdHJ1ZSk7XG4gICAgdmFyIHNvdXJjZXMgPSBzbWMuX3NvdXJjZXMgPSBBcnJheVNldC5mcm9tQXJyYXkoYVNvdXJjZU1hcC5fc291cmNlcy50b0FycmF5KCksIHRydWUpO1xuICAgIHNtYy5zb3VyY2VSb290ID0gYVNvdXJjZU1hcC5fc291cmNlUm9vdDtcbiAgICBzbWMuc291cmNlc0NvbnRlbnQgPSBhU291cmNlTWFwLl9nZW5lcmF0ZVNvdXJjZXNDb250ZW50KHNtYy5fc291cmNlcy50b0FycmF5KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWMuc291cmNlUm9vdCk7XG4gICAgc21jLmZpbGUgPSBhU291cmNlTWFwLl9maWxlO1xuICAgIHNtYy5fc291cmNlTWFwVVJMID0gYVNvdXJjZU1hcFVSTDtcbiAgICBzbWMuX2Fic29sdXRlU291cmNlcyA9IHNtYy5fc291cmNlcy50b0FycmF5KCkubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICByZXR1cm4gdXRpbC5jb21wdXRlU291cmNlVVJMKHNtYy5zb3VyY2VSb290LCBzLCBhU291cmNlTWFwVVJMKTtcbiAgICB9KTtcblxuICAgIC8vIEJlY2F1c2Ugd2UgYXJlIG1vZGlmeWluZyB0aGUgZW50cmllcyAoYnkgY29udmVydGluZyBzdHJpbmcgc291cmNlcyBhbmRcbiAgICAvLyBuYW1lcyB0byBpbmRpY2VzIGludG8gdGhlIHNvdXJjZXMgYW5kIG5hbWVzIEFycmF5U2V0cyksIHdlIGhhdmUgdG8gbWFrZVxuICAgIC8vIGEgY29weSBvZiB0aGUgZW50cnkgb3IgZWxzZSBiYWQgdGhpbmdzIGhhcHBlbi4gU2hhcmVkIG11dGFibGUgc3RhdGVcbiAgICAvLyBzdHJpa2VzIGFnYWluISBTZWUgZ2l0aHViIGlzc3VlICMxOTEuXG5cbiAgICB2YXIgZ2VuZXJhdGVkTWFwcGluZ3MgPSBhU291cmNlTWFwLl9tYXBwaW5ncy50b0FycmF5KCkuc2xpY2UoKTtcbiAgICB2YXIgZGVzdEdlbmVyYXRlZE1hcHBpbmdzID0gc21jLl9fZ2VuZXJhdGVkTWFwcGluZ3MgPSBbXTtcbiAgICB2YXIgZGVzdE9yaWdpbmFsTWFwcGluZ3MgPSBzbWMuX19vcmlnaW5hbE1hcHBpbmdzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gZ2VuZXJhdGVkTWFwcGluZ3MubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzcmNNYXBwaW5nID0gZ2VuZXJhdGVkTWFwcGluZ3NbaV07XG4gICAgICB2YXIgZGVzdE1hcHBpbmcgPSBuZXcgTWFwcGluZztcbiAgICAgIGRlc3RNYXBwaW5nLmdlbmVyYXRlZExpbmUgPSBzcmNNYXBwaW5nLmdlbmVyYXRlZExpbmU7XG4gICAgICBkZXN0TWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4gPSBzcmNNYXBwaW5nLmdlbmVyYXRlZENvbHVtbjtcblxuICAgICAgaWYgKHNyY01hcHBpbmcuc291cmNlKSB7XG4gICAgICAgIGRlc3RNYXBwaW5nLnNvdXJjZSA9IHNvdXJjZXMuaW5kZXhPZihzcmNNYXBwaW5nLnNvdXJjZSk7XG4gICAgICAgIGRlc3RNYXBwaW5nLm9yaWdpbmFsTGluZSA9IHNyY01hcHBpbmcub3JpZ2luYWxMaW5lO1xuICAgICAgICBkZXN0TWFwcGluZy5vcmlnaW5hbENvbHVtbiA9IHNyY01hcHBpbmcub3JpZ2luYWxDb2x1bW47XG5cbiAgICAgICAgaWYgKHNyY01hcHBpbmcubmFtZSkge1xuICAgICAgICAgIGRlc3RNYXBwaW5nLm5hbWUgPSBuYW1lcy5pbmRleE9mKHNyY01hcHBpbmcubmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBkZXN0T3JpZ2luYWxNYXBwaW5ncy5wdXNoKGRlc3RNYXBwaW5nKTtcbiAgICAgIH1cblxuICAgICAgZGVzdEdlbmVyYXRlZE1hcHBpbmdzLnB1c2goZGVzdE1hcHBpbmcpO1xuICAgIH1cblxuICAgIHF1aWNrU29ydChzbWMuX19vcmlnaW5hbE1hcHBpbmdzLCB1dGlsLmNvbXBhcmVCeU9yaWdpbmFsUG9zaXRpb25zKTtcblxuICAgIHJldHVybiBzbWM7XG4gIH07XG5cbi8qKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIHNvdXJjZSBtYXBwaW5nIHNwZWMgdGhhdCB3ZSBhcmUgY29uc3VtaW5nLlxuICovXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fdmVyc2lvbiA9IDM7XG5cbi8qKlxuICogVGhlIGxpc3Qgb2Ygb3JpZ2luYWwgc291cmNlcy5cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KEJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLCAnc291cmNlcycsIHtcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Fic29sdXRlU291cmNlcy5zbGljZSgpO1xuICB9XG59KTtcblxuLyoqXG4gKiBQcm92aWRlIHRoZSBKSVQgd2l0aCBhIG5pY2Ugc2hhcGUgLyBoaWRkZW4gY2xhc3MuXG4gKi9cbmZ1bmN0aW9uIE1hcHBpbmcoKSB7XG4gIHRoaXMuZ2VuZXJhdGVkTGluZSA9IDA7XG4gIHRoaXMuZ2VuZXJhdGVkQ29sdW1uID0gMDtcbiAgdGhpcy5zb3VyY2UgPSBudWxsO1xuICB0aGlzLm9yaWdpbmFsTGluZSA9IG51bGw7XG4gIHRoaXMub3JpZ2luYWxDb2x1bW4gPSBudWxsO1xuICB0aGlzLm5hbWUgPSBudWxsO1xufVxuXG4vKipcbiAqIFBhcnNlIHRoZSBtYXBwaW5ncyBpbiBhIHN0cmluZyBpbiB0byBhIGRhdGEgc3RydWN0dXJlIHdoaWNoIHdlIGNhbiBlYXNpbHlcbiAqIHF1ZXJ5ICh0aGUgb3JkZXJlZCBhcnJheXMgaW4gdGhlIGB0aGlzLl9fZ2VuZXJhdGVkTWFwcGluZ3NgIGFuZFxuICogYHRoaXMuX19vcmlnaW5hbE1hcHBpbmdzYCBwcm9wZXJ0aWVzKS5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX3BhcnNlTWFwcGluZ3MgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9wYXJzZU1hcHBpbmdzKGFTdHIsIGFTb3VyY2VSb290KSB7XG4gICAgdmFyIGdlbmVyYXRlZExpbmUgPSAxO1xuICAgIHZhciBwcmV2aW91c0dlbmVyYXRlZENvbHVtbiA9IDA7XG4gICAgdmFyIHByZXZpb3VzT3JpZ2luYWxMaW5lID0gMDtcbiAgICB2YXIgcHJldmlvdXNPcmlnaW5hbENvbHVtbiA9IDA7XG4gICAgdmFyIHByZXZpb3VzU291cmNlID0gMDtcbiAgICB2YXIgcHJldmlvdXNOYW1lID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gYVN0ci5sZW5ndGg7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgY2FjaGVkU2VnbWVudHMgPSB7fTtcbiAgICB2YXIgdGVtcCA9IHt9O1xuICAgIHZhciBvcmlnaW5hbE1hcHBpbmdzID0gW107XG4gICAgdmFyIGdlbmVyYXRlZE1hcHBpbmdzID0gW107XG4gICAgdmFyIG1hcHBpbmcsIHN0ciwgc2VnbWVudCwgZW5kLCB2YWx1ZTtcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgaWYgKGFTdHIuY2hhckF0KGluZGV4KSA9PT0gJzsnKSB7XG4gICAgICAgIGdlbmVyYXRlZExpbmUrKztcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgcHJldmlvdXNHZW5lcmF0ZWRDb2x1bW4gPSAwO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYVN0ci5jaGFyQXQoaW5kZXgpID09PSAnLCcpIHtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBtYXBwaW5nID0gbmV3IE1hcHBpbmcoKTtcbiAgICAgICAgbWFwcGluZy5nZW5lcmF0ZWRMaW5lID0gZ2VuZXJhdGVkTGluZTtcblxuICAgICAgICAvLyBCZWNhdXNlIGVhY2ggb2Zmc2V0IGlzIGVuY29kZWQgcmVsYXRpdmUgdG8gdGhlIHByZXZpb3VzIG9uZSxcbiAgICAgICAgLy8gbWFueSBzZWdtZW50cyBvZnRlbiBoYXZlIHRoZSBzYW1lIGVuY29kaW5nLiBXZSBjYW4gZXhwbG9pdCB0aGlzXG4gICAgICAgIC8vIGZhY3QgYnkgY2FjaGluZyB0aGUgcGFyc2VkIHZhcmlhYmxlIGxlbmd0aCBmaWVsZHMgb2YgZWFjaCBzZWdtZW50LFxuICAgICAgICAvLyBhbGxvd2luZyB1cyB0byBhdm9pZCBhIHNlY29uZCBwYXJzZSBpZiB3ZSBlbmNvdW50ZXIgdGhlIHNhbWVcbiAgICAgICAgLy8gc2VnbWVudCBhZ2Fpbi5cbiAgICAgICAgZm9yIChlbmQgPSBpbmRleDsgZW5kIDwgbGVuZ3RoOyBlbmQrKykge1xuICAgICAgICAgIGlmICh0aGlzLl9jaGFySXNNYXBwaW5nU2VwYXJhdG9yKGFTdHIsIGVuZCkpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdHIgPSBhU3RyLnNsaWNlKGluZGV4LCBlbmQpO1xuXG4gICAgICAgIHNlZ21lbnQgPSBjYWNoZWRTZWdtZW50c1tzdHJdO1xuICAgICAgICBpZiAoc2VnbWVudCkge1xuICAgICAgICAgIGluZGV4ICs9IHN0ci5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VnbWVudCA9IFtdO1xuICAgICAgICAgIHdoaWxlIChpbmRleCA8IGVuZCkge1xuICAgICAgICAgICAgYmFzZTY0VkxRLmRlY29kZShhU3RyLCBpbmRleCwgdGVtcCk7XG4gICAgICAgICAgICB2YWx1ZSA9IHRlbXAudmFsdWU7XG4gICAgICAgICAgICBpbmRleCA9IHRlbXAucmVzdDtcbiAgICAgICAgICAgIHNlZ21lbnQucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlZ21lbnQubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIGEgc291cmNlLCBidXQgbm8gbGluZSBhbmQgY29sdW1uJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlZ21lbnQubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIGEgc291cmNlIGFuZCBsaW5lLCBidXQgbm8gY29sdW1uJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FjaGVkU2VnbWVudHNbc3RyXSA9IHNlZ21lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZW5lcmF0ZWQgY29sdW1uLlxuICAgICAgICBtYXBwaW5nLmdlbmVyYXRlZENvbHVtbiA9IHByZXZpb3VzR2VuZXJhdGVkQ29sdW1uICsgc2VnbWVudFswXTtcbiAgICAgICAgcHJldmlvdXNHZW5lcmF0ZWRDb2x1bW4gPSBtYXBwaW5nLmdlbmVyYXRlZENvbHVtbjtcblxuICAgICAgICBpZiAoc2VnbWVudC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgLy8gT3JpZ2luYWwgc291cmNlLlxuICAgICAgICAgIG1hcHBpbmcuc291cmNlID0gcHJldmlvdXNTb3VyY2UgKyBzZWdtZW50WzFdO1xuICAgICAgICAgIHByZXZpb3VzU291cmNlICs9IHNlZ21lbnRbMV07XG5cbiAgICAgICAgICAvLyBPcmlnaW5hbCBsaW5lLlxuICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWxMaW5lID0gcHJldmlvdXNPcmlnaW5hbExpbmUgKyBzZWdtZW50WzJdO1xuICAgICAgICAgIHByZXZpb3VzT3JpZ2luYWxMaW5lID0gbWFwcGluZy5vcmlnaW5hbExpbmU7XG4gICAgICAgICAgLy8gTGluZXMgYXJlIHN0b3JlZCAwLWJhc2VkXG4gICAgICAgICAgbWFwcGluZy5vcmlnaW5hbExpbmUgKz0gMTtcblxuICAgICAgICAgIC8vIE9yaWdpbmFsIGNvbHVtbi5cbiAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uID0gcHJldmlvdXNPcmlnaW5hbENvbHVtbiArIHNlZ21lbnRbM107XG4gICAgICAgICAgcHJldmlvdXNPcmlnaW5hbENvbHVtbiA9IG1hcHBpbmcub3JpZ2luYWxDb2x1bW47XG5cbiAgICAgICAgICBpZiAoc2VnbWVudC5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICAvLyBPcmlnaW5hbCBuYW1lLlxuICAgICAgICAgICAgbWFwcGluZy5uYW1lID0gcHJldmlvdXNOYW1lICsgc2VnbWVudFs0XTtcbiAgICAgICAgICAgIHByZXZpb3VzTmFtZSArPSBzZWdtZW50WzRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGdlbmVyYXRlZE1hcHBpbmdzLnB1c2gobWFwcGluZyk7XG4gICAgICAgIGlmICh0eXBlb2YgbWFwcGluZy5vcmlnaW5hbExpbmUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgb3JpZ2luYWxNYXBwaW5ncy5wdXNoKG1hcHBpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcXVpY2tTb3J0KGdlbmVyYXRlZE1hcHBpbmdzLCB1dGlsLmNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0RlZmxhdGVkKTtcbiAgICB0aGlzLl9fZ2VuZXJhdGVkTWFwcGluZ3MgPSBnZW5lcmF0ZWRNYXBwaW5ncztcblxuICAgIHF1aWNrU29ydChvcmlnaW5hbE1hcHBpbmdzLCB1dGlsLmNvbXBhcmVCeU9yaWdpbmFsUG9zaXRpb25zKTtcbiAgICB0aGlzLl9fb3JpZ2luYWxNYXBwaW5ncyA9IG9yaWdpbmFsTWFwcGluZ3M7XG4gIH07XG5cbi8qKlxuICogRmluZCB0aGUgbWFwcGluZyB0aGF0IGJlc3QgbWF0Y2hlcyB0aGUgaHlwb3RoZXRpY2FsIFwibmVlZGxlXCIgbWFwcGluZyB0aGF0XG4gKiB3ZSBhcmUgc2VhcmNoaW5nIGZvciBpbiB0aGUgZ2l2ZW4gXCJoYXlzdGFja1wiIG9mIG1hcHBpbmdzLlxuICovXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fZmluZE1hcHBpbmcgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9maW5kTWFwcGluZyhhTmVlZGxlLCBhTWFwcGluZ3MsIGFMaW5lTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYUNvbHVtbk5hbWUsIGFDb21wYXJhdG9yLCBhQmlhcykge1xuICAgIC8vIFRvIHJldHVybiB0aGUgcG9zaXRpb24gd2UgYXJlIHNlYXJjaGluZyBmb3IsIHdlIG11c3QgZmlyc3QgZmluZCB0aGVcbiAgICAvLyBtYXBwaW5nIGZvciB0aGUgZ2l2ZW4gcG9zaXRpb24gYW5kIHRoZW4gcmV0dXJuIHRoZSBvcHBvc2l0ZSBwb3NpdGlvbiBpdFxuICAgIC8vIHBvaW50cyB0by4gQmVjYXVzZSB0aGUgbWFwcGluZ3MgYXJlIHNvcnRlZCwgd2UgY2FuIHVzZSBiaW5hcnkgc2VhcmNoIHRvXG4gICAgLy8gZmluZCB0aGUgYmVzdCBtYXBwaW5nLlxuXG4gICAgaWYgKGFOZWVkbGVbYUxpbmVOYW1lXSA8PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdMaW5lIG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIDEsIGdvdCAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICsgYU5lZWRsZVthTGluZU5hbWVdKTtcbiAgICB9XG4gICAgaWYgKGFOZWVkbGVbYUNvbHVtbk5hbWVdIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ29sdW1uIG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIDAsIGdvdCAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICsgYU5lZWRsZVthQ29sdW1uTmFtZV0pO1xuICAgIH1cblxuICAgIHJldHVybiBiaW5hcnlTZWFyY2guc2VhcmNoKGFOZWVkbGUsIGFNYXBwaW5ncywgYUNvbXBhcmF0b3IsIGFCaWFzKTtcbiAgfTtcblxuLyoqXG4gKiBDb21wdXRlIHRoZSBsYXN0IGNvbHVtbiBmb3IgZWFjaCBnZW5lcmF0ZWQgbWFwcGluZy4gVGhlIGxhc3QgY29sdW1uIGlzXG4gKiBpbmNsdXNpdmUuXG4gKi9cbkJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLmNvbXB1dGVDb2x1bW5TcGFucyA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX2NvbXB1dGVDb2x1bW5TcGFucygpIHtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fZ2VuZXJhdGVkTWFwcGluZ3MubGVuZ3RoOyArK2luZGV4KSB7XG4gICAgICB2YXIgbWFwcGluZyA9IHRoaXMuX2dlbmVyYXRlZE1hcHBpbmdzW2luZGV4XTtcblxuICAgICAgLy8gTWFwcGluZ3MgZG8gbm90IGNvbnRhaW4gYSBmaWVsZCBmb3IgdGhlIGxhc3QgZ2VuZXJhdGVkIGNvbHVtbnQuIFdlXG4gICAgICAvLyBjYW4gY29tZSB1cCB3aXRoIGFuIG9wdGltaXN0aWMgZXN0aW1hdGUsIGhvd2V2ZXIsIGJ5IGFzc3VtaW5nIHRoYXRcbiAgICAgIC8vIG1hcHBpbmdzIGFyZSBjb250aWd1b3VzIChpLmUuIGdpdmVuIHR3byBjb25zZWN1dGl2ZSBtYXBwaW5ncywgdGhlXG4gICAgICAvLyBmaXJzdCBtYXBwaW5nIGVuZHMgd2hlcmUgdGhlIHNlY29uZCBvbmUgc3RhcnRzKS5cbiAgICAgIGlmIChpbmRleCArIDEgPCB0aGlzLl9nZW5lcmF0ZWRNYXBwaW5ncy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIG5leHRNYXBwaW5nID0gdGhpcy5fZ2VuZXJhdGVkTWFwcGluZ3NbaW5kZXggKyAxXTtcblxuICAgICAgICBpZiAobWFwcGluZy5nZW5lcmF0ZWRMaW5lID09PSBuZXh0TWFwcGluZy5nZW5lcmF0ZWRMaW5lKSB7XG4gICAgICAgICAgbWFwcGluZy5sYXN0R2VuZXJhdGVkQ29sdW1uID0gbmV4dE1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uIC0gMTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgbGFzdCBtYXBwaW5nIGZvciBlYWNoIGxpbmUgc3BhbnMgdGhlIGVudGlyZSBsaW5lLlxuICAgICAgbWFwcGluZy5sYXN0R2VuZXJhdGVkQ29sdW1uID0gSW5maW5pdHk7XG4gICAgfVxuICB9O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG9yaWdpbmFsIHNvdXJjZSwgbGluZSwgYW5kIGNvbHVtbiBpbmZvcm1hdGlvbiBmb3IgdGhlIGdlbmVyYXRlZFxuICogc291cmNlJ3MgbGluZSBhbmQgY29sdW1uIHBvc2l0aW9ucyBwcm92aWRlZC4gVGhlIG9ubHkgYXJndW1lbnQgaXMgYW4gb2JqZWN0XG4gKiB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLiAgVGhlIGxpbmUgbnVtYmVyXG4gKiAgICAgaXMgMS1iYXNlZC5cbiAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLiAgVGhlIGNvbHVtblxuICogICAgIG51bWJlciBpcyAwLWJhc2VkLlxuICogICAtIGJpYXM6IEVpdGhlciAnU291cmNlTWFwQ29uc3VtZXIuR1JFQVRFU1RfTE9XRVJfQk9VTkQnIG9yXG4gKiAgICAgJ1NvdXJjZU1hcENvbnN1bWVyLkxFQVNUX1VQUEVSX0JPVU5EJy4gU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmV0dXJuIHRoZVxuICogICAgIGNsb3Nlc3QgZWxlbWVudCB0aGF0IGlzIHNtYWxsZXIgdGhhbiBvciBncmVhdGVyIHRoYW4gdGhlIG9uZSB3ZSBhcmVcbiAqICAgICBzZWFyY2hpbmcgZm9yLCByZXNwZWN0aXZlbHksIGlmIHRoZSBleGFjdCBlbGVtZW50IGNhbm5vdCBiZSBmb3VuZC5cbiAqICAgICBEZWZhdWx0cyB0byAnU291cmNlTWFwQ29uc3VtZXIuR1JFQVRFU1RfTE9XRVJfQk9VTkQnLlxuICpcbiAqIGFuZCBhbiBvYmplY3QgaXMgcmV0dXJuZWQgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogICAtIHNvdXJjZTogVGhlIG9yaWdpbmFsIHNvdXJjZSBmaWxlLCBvciBudWxsLlxuICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlLCBvciBudWxsLiAgVGhlXG4gKiAgICAgbGluZSBudW1iZXIgaXMgMS1iYXNlZC5cbiAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UsIG9yIG51bGwuICBUaGVcbiAqICAgICBjb2x1bW4gbnVtYmVyIGlzIDAtYmFzZWQuXG4gKiAgIC0gbmFtZTogVGhlIG9yaWdpbmFsIGlkZW50aWZpZXIsIG9yIG51bGwuXG4gKi9cbkJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLm9yaWdpbmFsUG9zaXRpb25Gb3IgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9vcmlnaW5hbFBvc2l0aW9uRm9yKGFBcmdzKSB7XG4gICAgdmFyIG5lZWRsZSA9IHtcbiAgICAgIGdlbmVyYXRlZExpbmU6IHV0aWwuZ2V0QXJnKGFBcmdzLCAnbGluZScpLFxuICAgICAgZ2VuZXJhdGVkQ29sdW1uOiB1dGlsLmdldEFyZyhhQXJncywgJ2NvbHVtbicpXG4gICAgfTtcblxuICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmRNYXBwaW5nKFxuICAgICAgbmVlZGxlLFxuICAgICAgdGhpcy5fZ2VuZXJhdGVkTWFwcGluZ3MsXG4gICAgICBcImdlbmVyYXRlZExpbmVcIixcbiAgICAgIFwiZ2VuZXJhdGVkQ29sdW1uXCIsXG4gICAgICB1dGlsLmNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0RlZmxhdGVkLFxuICAgICAgdXRpbC5nZXRBcmcoYUFyZ3MsICdiaWFzJywgU291cmNlTWFwQ29uc3VtZXIuR1JFQVRFU1RfTE9XRVJfQk9VTkQpXG4gICAgKTtcblxuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB2YXIgbWFwcGluZyA9IHRoaXMuX2dlbmVyYXRlZE1hcHBpbmdzW2luZGV4XTtcblxuICAgICAgaWYgKG1hcHBpbmcuZ2VuZXJhdGVkTGluZSA9PT0gbmVlZGxlLmdlbmVyYXRlZExpbmUpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdzb3VyY2UnLCBudWxsKTtcbiAgICAgICAgaWYgKHNvdXJjZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHNvdXJjZSA9IHRoaXMuX3NvdXJjZXMuYXQoc291cmNlKTtcbiAgICAgICAgICBzb3VyY2UgPSB1dGlsLmNvbXB1dGVTb3VyY2VVUkwodGhpcy5zb3VyY2VSb290LCBzb3VyY2UsIHRoaXMuX3NvdXJjZU1hcFVSTCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5hbWUgPSB1dGlsLmdldEFyZyhtYXBwaW5nLCAnbmFtZScsIG51bGwpO1xuICAgICAgICBpZiAobmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIG5hbWUgPSB0aGlzLl9uYW1lcy5hdChuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgIGxpbmU6IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdvcmlnaW5hbExpbmUnLCBudWxsKSxcbiAgICAgICAgICBjb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdvcmlnaW5hbENvbHVtbicsIG51bGwpLFxuICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc291cmNlOiBudWxsLFxuICAgICAgbGluZTogbnVsbCxcbiAgICAgIGNvbHVtbjogbnVsbCxcbiAgICAgIG5hbWU6IG51bGxcbiAgICB9O1xuICB9O1xuXG4vKipcbiAqIFJldHVybiB0cnVlIGlmIHdlIGhhdmUgdGhlIHNvdXJjZSBjb250ZW50IGZvciBldmVyeSBzb3VyY2UgaW4gdGhlIHNvdXJjZVxuICogbWFwLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbkJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLmhhc0NvbnRlbnRzT2ZBbGxTb3VyY2VzID1cbiAgZnVuY3Rpb24gQmFzaWNTb3VyY2VNYXBDb25zdW1lcl9oYXNDb250ZW50c09mQWxsU291cmNlcygpIHtcbiAgICBpZiAoIXRoaXMuc291cmNlc0NvbnRlbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc291cmNlc0NvbnRlbnQubGVuZ3RoID49IHRoaXMuX3NvdXJjZXMuc2l6ZSgpICYmXG4gICAgICAhdGhpcy5zb3VyY2VzQ29udGVudC5zb21lKGZ1bmN0aW9uIChzYykgeyByZXR1cm4gc2MgPT0gbnVsbDsgfSk7XG4gIH07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgb3JpZ2luYWwgc291cmNlIGNvbnRlbnQuIFRoZSBvbmx5IGFyZ3VtZW50IGlzIHRoZSB1cmwgb2YgdGhlXG4gKiBvcmlnaW5hbCBzb3VyY2UgZmlsZS4gUmV0dXJucyBudWxsIGlmIG5vIG9yaWdpbmFsIHNvdXJjZSBjb250ZW50IGlzXG4gKiBhdmFpbGFibGUuXG4gKi9cbkJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLnNvdXJjZUNvbnRlbnRGb3IgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9zb3VyY2VDb250ZW50Rm9yKGFTb3VyY2UsIG51bGxPbk1pc3NpbmcpIHtcbiAgICBpZiAoIXRoaXMuc291cmNlc0NvbnRlbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmRTb3VyY2VJbmRleChhU291cmNlKTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc291cmNlc0NvbnRlbnRbaW5kZXhdO1xuICAgIH1cblxuICAgIHZhciByZWxhdGl2ZVNvdXJjZSA9IGFTb3VyY2U7XG4gICAgaWYgKHRoaXMuc291cmNlUm9vdCAhPSBudWxsKSB7XG4gICAgICByZWxhdGl2ZVNvdXJjZSA9IHV0aWwucmVsYXRpdmUodGhpcy5zb3VyY2VSb290LCByZWxhdGl2ZVNvdXJjZSk7XG4gICAgfVxuXG4gICAgdmFyIHVybDtcbiAgICBpZiAodGhpcy5zb3VyY2VSb290ICE9IG51bGxcbiAgICAgICAgJiYgKHVybCA9IHV0aWwudXJsUGFyc2UodGhpcy5zb3VyY2VSb290KSkpIHtcbiAgICAgIC8vIFhYWDogZmlsZTovLyBVUklzIGFuZCBhYnNvbHV0ZSBwYXRocyBsZWFkIHRvIHVuZXhwZWN0ZWQgYmVoYXZpb3IgZm9yXG4gICAgICAvLyBtYW55IHVzZXJzLiBXZSBjYW4gaGVscCB0aGVtIG91dCB3aGVuIHRoZXkgZXhwZWN0IGZpbGU6Ly8gVVJJcyB0b1xuICAgICAgLy8gYmVoYXZlIGxpa2UgaXQgd291bGQgaWYgdGhleSB3ZXJlIHJ1bm5pbmcgYSBsb2NhbCBIVFRQIHNlcnZlci4gU2VlXG4gICAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04ODU1OTcuXG4gICAgICB2YXIgZmlsZVVyaUFic1BhdGggPSByZWxhdGl2ZVNvdXJjZS5yZXBsYWNlKC9eZmlsZTpcXC9cXC8vLCBcIlwiKTtcbiAgICAgIGlmICh1cmwuc2NoZW1lID09IFwiZmlsZVwiXG4gICAgICAgICAgJiYgdGhpcy5fc291cmNlcy5oYXMoZmlsZVVyaUFic1BhdGgpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZXNDb250ZW50W3RoaXMuX3NvdXJjZXMuaW5kZXhPZihmaWxlVXJpQWJzUGF0aCldXG4gICAgICB9XG5cbiAgICAgIGlmICgoIXVybC5wYXRoIHx8IHVybC5wYXRoID09IFwiL1wiKVxuICAgICAgICAgICYmIHRoaXMuX3NvdXJjZXMuaGFzKFwiL1wiICsgcmVsYXRpdmVTb3VyY2UpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZXNDb250ZW50W3RoaXMuX3NvdXJjZXMuaW5kZXhPZihcIi9cIiArIHJlbGF0aXZlU291cmNlKV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHJlY3Vyc2l2ZWx5IGZyb21cbiAgICAvLyBJbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLnNvdXJjZUNvbnRlbnRGb3IuIEluIHRoYXQgY2FzZSwgd2VcbiAgICAvLyBkb24ndCB3YW50IHRvIHRocm93IGlmIHdlIGNhbid0IGZpbmQgdGhlIHNvdXJjZSAtIHdlIGp1c3Qgd2FudCB0b1xuICAgIC8vIHJldHVybiBudWxsLCBzbyB3ZSBwcm92aWRlIGEgZmxhZyB0byBleGl0IGdyYWNlZnVsbHkuXG4gICAgaWYgKG51bGxPbk1pc3NpbmcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignXCInICsgcmVsYXRpdmVTb3VyY2UgKyAnXCIgaXMgbm90IGluIHRoZSBTb3VyY2VNYXAuJyk7XG4gICAgfVxuICB9O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGdlbmVyYXRlZCBsaW5lIGFuZCBjb2x1bW4gaW5mb3JtYXRpb24gZm9yIHRoZSBvcmlnaW5hbCBzb3VyY2UsXG4gKiBsaW5lLCBhbmQgY29sdW1uIHBvc2l0aW9ucyBwcm92aWRlZC4gVGhlIG9ubHkgYXJndW1lbnQgaXMgYW4gb2JqZWN0IHdpdGhcbiAqIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gc291cmNlOiBUaGUgZmlsZW5hbWUgb2YgdGhlIG9yaWdpbmFsIHNvdXJjZS5cbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZS4gIFRoZSBsaW5lIG51bWJlclxuICogICAgIGlzIDEtYmFzZWQuXG4gKiAgIC0gY29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlLiAgVGhlIGNvbHVtblxuICogICAgIG51bWJlciBpcyAwLWJhc2VkLlxuICogICAtIGJpYXM6IEVpdGhlciAnU291cmNlTWFwQ29uc3VtZXIuR1JFQVRFU1RfTE9XRVJfQk9VTkQnIG9yXG4gKiAgICAgJ1NvdXJjZU1hcENvbnN1bWVyLkxFQVNUX1VQUEVSX0JPVU5EJy4gU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmV0dXJuIHRoZVxuICogICAgIGNsb3Nlc3QgZWxlbWVudCB0aGF0IGlzIHNtYWxsZXIgdGhhbiBvciBncmVhdGVyIHRoYW4gdGhlIG9uZSB3ZSBhcmVcbiAqICAgICBzZWFyY2hpbmcgZm9yLCByZXNwZWN0aXZlbHksIGlmIHRoZSBleGFjdCBlbGVtZW50IGNhbm5vdCBiZSBmb3VuZC5cbiAqICAgICBEZWZhdWx0cyB0byAnU291cmNlTWFwQ29uc3VtZXIuR1JFQVRFU1RfTE9XRVJfQk9VTkQnLlxuICpcbiAqIGFuZCBhbiBvYmplY3QgaXMgcmV0dXJuZWQgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZSwgb3IgbnVsbC4gIFRoZVxuICogICAgIGxpbmUgbnVtYmVyIGlzIDEtYmFzZWQuXG4gKiAgIC0gY29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZSwgb3IgbnVsbC5cbiAqICAgICBUaGUgY29sdW1uIG51bWJlciBpcyAwLWJhc2VkLlxuICovXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5nZW5lcmF0ZWRQb3NpdGlvbkZvciA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX2dlbmVyYXRlZFBvc2l0aW9uRm9yKGFBcmdzKSB7XG4gICAgdmFyIHNvdXJjZSA9IHV0aWwuZ2V0QXJnKGFBcmdzLCAnc291cmNlJyk7XG4gICAgc291cmNlID0gdGhpcy5fZmluZFNvdXJjZUluZGV4KHNvdXJjZSk7XG4gICAgaWYgKHNvdXJjZSA8IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpbmU6IG51bGwsXG4gICAgICAgIGNvbHVtbjogbnVsbCxcbiAgICAgICAgbGFzdENvbHVtbjogbnVsbFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgbmVlZGxlID0ge1xuICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICBvcmlnaW5hbExpbmU6IHV0aWwuZ2V0QXJnKGFBcmdzLCAnbGluZScpLFxuICAgICAgb3JpZ2luYWxDb2x1bW46IHV0aWwuZ2V0QXJnKGFBcmdzLCAnY29sdW1uJylcbiAgICB9O1xuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZE1hcHBpbmcoXG4gICAgICBuZWVkbGUsXG4gICAgICB0aGlzLl9vcmlnaW5hbE1hcHBpbmdzLFxuICAgICAgXCJvcmlnaW5hbExpbmVcIixcbiAgICAgIFwib3JpZ2luYWxDb2x1bW5cIixcbiAgICAgIHV0aWwuY29tcGFyZUJ5T3JpZ2luYWxQb3NpdGlvbnMsXG4gICAgICB1dGlsLmdldEFyZyhhQXJncywgJ2JpYXMnLCBTb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORClcbiAgICApO1xuXG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHZhciBtYXBwaW5nID0gdGhpcy5fb3JpZ2luYWxNYXBwaW5nc1tpbmRleF07XG5cbiAgICAgIGlmIChtYXBwaW5nLnNvdXJjZSA9PT0gbmVlZGxlLnNvdXJjZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxpbmU6IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdnZW5lcmF0ZWRMaW5lJywgbnVsbCksXG4gICAgICAgICAgY29sdW1uOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnZ2VuZXJhdGVkQ29sdW1uJywgbnVsbCksXG4gICAgICAgICAgbGFzdENvbHVtbjogdXRpbC5nZXRBcmcobWFwcGluZywgJ2xhc3RHZW5lcmF0ZWRDb2x1bW4nLCBudWxsKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBsaW5lOiBudWxsLFxuICAgICAgY29sdW1uOiBudWxsLFxuICAgICAgbGFzdENvbHVtbjogbnVsbFxuICAgIH07XG4gIH07XG5cbmV4cG9ydHMuQmFzaWNTb3VyY2VNYXBDb25zdW1lciA9IEJhc2ljU291cmNlTWFwQ29uc3VtZXI7XG5cbi8qKlxuICogQW4gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyIGluc3RhbmNlIHJlcHJlc2VudHMgYSBwYXJzZWQgc291cmNlIG1hcCB3aGljaFxuICogd2UgY2FuIHF1ZXJ5IGZvciBpbmZvcm1hdGlvbi4gSXQgZGlmZmVycyBmcm9tIEJhc2ljU291cmNlTWFwQ29uc3VtZXIgaW5cbiAqIHRoYXQgaXQgdGFrZXMgXCJpbmRleGVkXCIgc291cmNlIG1hcHMgKGkuZS4gb25lcyB3aXRoIGEgXCJzZWN0aW9uc1wiIGZpZWxkKSBhc1xuICogaW5wdXQuXG4gKlxuICogVGhlIGZpcnN0IHBhcmFtZXRlciBpcyBhIHJhdyBzb3VyY2UgbWFwIChlaXRoZXIgYXMgYSBKU09OIHN0cmluZywgb3IgYWxyZWFkeVxuICogcGFyc2VkIHRvIGFuIG9iamVjdCkuIEFjY29yZGluZyB0byB0aGUgc3BlYyBmb3IgaW5kZXhlZCBzb3VyY2UgbWFwcywgdGhleVxuICogaGF2ZSB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZXM6XG4gKlxuICogICAtIHZlcnNpb246IFdoaWNoIHZlcnNpb24gb2YgdGhlIHNvdXJjZSBtYXAgc3BlYyB0aGlzIG1hcCBpcyBmb2xsb3dpbmcuXG4gKiAgIC0gZmlsZTogT3B0aW9uYWwuIFRoZSBnZW5lcmF0ZWQgZmlsZSB0aGlzIHNvdXJjZSBtYXAgaXMgYXNzb2NpYXRlZCB3aXRoLlxuICogICAtIHNlY3Rpb25zOiBBIGxpc3Qgb2Ygc2VjdGlvbiBkZWZpbml0aW9ucy5cbiAqXG4gKiBFYWNoIHZhbHVlIHVuZGVyIHRoZSBcInNlY3Rpb25zXCIgZmllbGQgaGFzIHR3byBmaWVsZHM6XG4gKiAgIC0gb2Zmc2V0OiBUaGUgb2Zmc2V0IGludG8gdGhlIG9yaWdpbmFsIHNwZWNpZmllZCBhdCB3aGljaCB0aGlzIHNlY3Rpb25cbiAqICAgICAgIGJlZ2lucyB0byBhcHBseSwgZGVmaW5lZCBhcyBhbiBvYmplY3Qgd2l0aCBhIFwibGluZVwiIGFuZCBcImNvbHVtblwiXG4gKiAgICAgICBmaWVsZC5cbiAqICAgLSBtYXA6IEEgc291cmNlIG1hcCBkZWZpbml0aW9uLiBUaGlzIHNvdXJjZSBtYXAgY291bGQgYWxzbyBiZSBpbmRleGVkLFxuICogICAgICAgYnV0IGRvZXNuJ3QgaGF2ZSB0byBiZS5cbiAqXG4gKiBJbnN0ZWFkIG9mIHRoZSBcIm1hcFwiIGZpZWxkLCBpdCdzIGFsc28gcG9zc2libGUgdG8gaGF2ZSBhIFwidXJsXCIgZmllbGRcbiAqIHNwZWNpZnlpbmcgYSBVUkwgdG8gcmV0cmlldmUgYSBzb3VyY2UgbWFwIGZyb20sIGJ1dCB0aGF0J3MgY3VycmVudGx5XG4gKiB1bnN1cHBvcnRlZC5cbiAqXG4gKiBIZXJlJ3MgYW4gZXhhbXBsZSBzb3VyY2UgbWFwLCB0YWtlbiBmcm9tIHRoZSBzb3VyY2UgbWFwIHNwZWNbMF0sIGJ1dFxuICogbW9kaWZpZWQgdG8gb21pdCBhIHNlY3Rpb24gd2hpY2ggdXNlcyB0aGUgXCJ1cmxcIiBmaWVsZC5cbiAqXG4gKiAge1xuICogICAgdmVyc2lvbiA6IDMsXG4gKiAgICBmaWxlOiBcImFwcC5qc1wiLFxuICogICAgc2VjdGlvbnM6IFt7XG4gKiAgICAgIG9mZnNldDoge2xpbmU6MTAwLCBjb2x1bW46MTB9LFxuICogICAgICBtYXA6IHtcbiAqICAgICAgICB2ZXJzaW9uIDogMyxcbiAqICAgICAgICBmaWxlOiBcInNlY3Rpb24uanNcIixcbiAqICAgICAgICBzb3VyY2VzOiBbXCJmb28uanNcIiwgXCJiYXIuanNcIl0sXG4gKiAgICAgICAgbmFtZXM6IFtcInNyY1wiLCBcIm1hcHNcIiwgXCJhcmVcIiwgXCJmdW5cIl0sXG4gKiAgICAgICAgbWFwcGluZ3M6IFwiQUFBQSxFOztBQkNERTtcIlxuICogICAgICB9XG4gKiAgICB9XSxcbiAqICB9XG4gKlxuICogVGhlIHNlY29uZCBwYXJhbWV0ZXIsIGlmIGdpdmVuLCBpcyBhIHN0cmluZyB3aG9zZSB2YWx1ZSBpcyB0aGUgVVJMXG4gKiBhdCB3aGljaCB0aGUgc291cmNlIG1hcCB3YXMgZm91bmQuICBUaGlzIFVSTCBpcyB1c2VkIHRvIGNvbXB1dGUgdGhlXG4gKiBzb3VyY2VzIGFycmF5LlxuICpcbiAqIFswXTogaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xVTFSR0FlaFF3UnlwVVRvdkYxS1JscGlPRnplMGItXzJnYzZmQUgwS1kway9lZGl0I2hlYWRpbmc9aC41MzVlczN4ZXByZ3RcbiAqL1xuZnVuY3Rpb24gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyKGFTb3VyY2VNYXAsIGFTb3VyY2VNYXBVUkwpIHtcbiAgdmFyIHNvdXJjZU1hcCA9IGFTb3VyY2VNYXA7XG4gIGlmICh0eXBlb2YgYVNvdXJjZU1hcCA9PT0gJ3N0cmluZycpIHtcbiAgICBzb3VyY2VNYXAgPSB1dGlsLnBhcnNlU291cmNlTWFwSW5wdXQoYVNvdXJjZU1hcCk7XG4gIH1cblxuICB2YXIgdmVyc2lvbiA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ3ZlcnNpb24nKTtcbiAgdmFyIHNlY3Rpb25zID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAnc2VjdGlvbnMnKTtcblxuICBpZiAodmVyc2lvbiAhPSB0aGlzLl92ZXJzaW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCB2ZXJzaW9uOiAnICsgdmVyc2lvbik7XG4gIH1cblxuICB0aGlzLl9zb3VyY2VzID0gbmV3IEFycmF5U2V0KCk7XG4gIHRoaXMuX25hbWVzID0gbmV3IEFycmF5U2V0KCk7XG5cbiAgdmFyIGxhc3RPZmZzZXQgPSB7XG4gICAgbGluZTogLTEsXG4gICAgY29sdW1uOiAwXG4gIH07XG4gIHRoaXMuX3NlY3Rpb25zID0gc2VjdGlvbnMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgaWYgKHMudXJsKSB7XG4gICAgICAvLyBUaGUgdXJsIGZpZWxkIHdpbGwgcmVxdWlyZSBzdXBwb3J0IGZvciBhc3luY2hyb25pY2l0eS5cbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9zb3VyY2UtbWFwL2lzc3Vlcy8xNlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdXBwb3J0IGZvciB1cmwgZmllbGQgaW4gc2VjdGlvbnMgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgICB2YXIgb2Zmc2V0ID0gdXRpbC5nZXRBcmcocywgJ29mZnNldCcpO1xuICAgIHZhciBvZmZzZXRMaW5lID0gdXRpbC5nZXRBcmcob2Zmc2V0LCAnbGluZScpO1xuICAgIHZhciBvZmZzZXRDb2x1bW4gPSB1dGlsLmdldEFyZyhvZmZzZXQsICdjb2x1bW4nKTtcblxuICAgIGlmIChvZmZzZXRMaW5lIDwgbGFzdE9mZnNldC5saW5lIHx8XG4gICAgICAgIChvZmZzZXRMaW5lID09PSBsYXN0T2Zmc2V0LmxpbmUgJiYgb2Zmc2V0Q29sdW1uIDwgbGFzdE9mZnNldC5jb2x1bW4pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlY3Rpb24gb2Zmc2V0cyBtdXN0IGJlIG9yZGVyZWQgYW5kIG5vbi1vdmVybGFwcGluZy4nKTtcbiAgICB9XG4gICAgbGFzdE9mZnNldCA9IG9mZnNldDtcblxuICAgIHJldHVybiB7XG4gICAgICBnZW5lcmF0ZWRPZmZzZXQ6IHtcbiAgICAgICAgLy8gVGhlIG9mZnNldCBmaWVsZHMgYXJlIDAtYmFzZWQsIGJ1dCB3ZSB1c2UgMS1iYXNlZCBpbmRpY2VzIHdoZW5cbiAgICAgICAgLy8gZW5jb2RpbmcvZGVjb2RpbmcgZnJvbSBWTFEuXG4gICAgICAgIGdlbmVyYXRlZExpbmU6IG9mZnNldExpbmUgKyAxLFxuICAgICAgICBnZW5lcmF0ZWRDb2x1bW46IG9mZnNldENvbHVtbiArIDFcbiAgICAgIH0sXG4gICAgICBjb25zdW1lcjogbmV3IFNvdXJjZU1hcENvbnN1bWVyKHV0aWwuZ2V0QXJnKHMsICdtYXAnKSwgYVNvdXJjZU1hcFVSTClcbiAgICB9XG4gIH0pO1xufVxuXG5JbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUpO1xuSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNvdXJjZU1hcENvbnN1bWVyO1xuXG4vKipcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBzb3VyY2UgbWFwcGluZyBzcGVjIHRoYXQgd2UgYXJlIGNvbnN1bWluZy5cbiAqL1xuSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fdmVyc2lvbiA9IDM7XG5cbi8qKlxuICogVGhlIGxpc3Qgb2Ygb3JpZ2luYWwgc291cmNlcy5cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUsICdzb3VyY2VzJywge1xuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc291cmNlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5fc2VjdGlvbnNbaV0uY29uc3VtZXIuc291cmNlcy5sZW5ndGg7IGorKykge1xuICAgICAgICBzb3VyY2VzLnB1c2godGhpcy5fc2VjdGlvbnNbaV0uY29uc3VtZXIuc291cmNlc1tqXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzb3VyY2VzO1xuICB9XG59KTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBvcmlnaW5hbCBzb3VyY2UsIGxpbmUsIGFuZCBjb2x1bW4gaW5mb3JtYXRpb24gZm9yIHRoZSBnZW5lcmF0ZWRcbiAqIHNvdXJjZSdzIGxpbmUgYW5kIGNvbHVtbiBwb3NpdGlvbnMgcHJvdmlkZWQuIFRoZSBvbmx5IGFyZ3VtZW50IGlzIGFuIG9iamVjdFxuICogd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZS4gIFRoZSBsaW5lIG51bWJlclxuICogICAgIGlzIDEtYmFzZWQuXG4gKiAgIC0gY29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZS4gIFRoZSBjb2x1bW5cbiAqICAgICBudW1iZXIgaXMgMC1iYXNlZC5cbiAqXG4gKiBhbmQgYW4gb2JqZWN0IGlzIHJldHVybmVkIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBzb3VyY2U6IFRoZSBvcmlnaW5hbCBzb3VyY2UgZmlsZSwgb3IgbnVsbC5cbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZSwgb3IgbnVsbC4gIFRoZVxuICogICAgIGxpbmUgbnVtYmVyIGlzIDEtYmFzZWQuXG4gKiAgIC0gY29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlLCBvciBudWxsLiAgVGhlXG4gKiAgICAgY29sdW1uIG51bWJlciBpcyAwLWJhc2VkLlxuICogICAtIG5hbWU6IFRoZSBvcmlnaW5hbCBpZGVudGlmaWVyLCBvciBudWxsLlxuICovXG5JbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLm9yaWdpbmFsUG9zaXRpb25Gb3IgPVxuICBmdW5jdGlvbiBJbmRleGVkU291cmNlTWFwQ29uc3VtZXJfb3JpZ2luYWxQb3NpdGlvbkZvcihhQXJncykge1xuICAgIHZhciBuZWVkbGUgPSB7XG4gICAgICBnZW5lcmF0ZWRMaW5lOiB1dGlsLmdldEFyZyhhQXJncywgJ2xpbmUnKSxcbiAgICAgIGdlbmVyYXRlZENvbHVtbjogdXRpbC5nZXRBcmcoYUFyZ3MsICdjb2x1bW4nKVxuICAgIH07XG5cbiAgICAvLyBGaW5kIHRoZSBzZWN0aW9uIGNvbnRhaW5pbmcgdGhlIGdlbmVyYXRlZCBwb3NpdGlvbiB3ZSdyZSB0cnlpbmcgdG8gbWFwXG4gICAgLy8gdG8gYW4gb3JpZ2luYWwgcG9zaXRpb24uXG4gICAgdmFyIHNlY3Rpb25JbmRleCA9IGJpbmFyeVNlYXJjaC5zZWFyY2gobmVlZGxlLCB0aGlzLl9zZWN0aW9ucyxcbiAgICAgIGZ1bmN0aW9uKG5lZWRsZSwgc2VjdGlvbikge1xuICAgICAgICB2YXIgY21wID0gbmVlZGxlLmdlbmVyYXRlZExpbmUgLSBzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRMaW5lO1xuICAgICAgICBpZiAoY21wKSB7XG4gICAgICAgICAgcmV0dXJuIGNtcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAobmVlZGxlLmdlbmVyYXRlZENvbHVtbiAtXG4gICAgICAgICAgICAgICAgc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkQ29sdW1uKTtcbiAgICAgIH0pO1xuICAgIHZhciBzZWN0aW9uID0gdGhpcy5fc2VjdGlvbnNbc2VjdGlvbkluZGV4XTtcblxuICAgIGlmICghc2VjdGlvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc291cmNlOiBudWxsLFxuICAgICAgICBsaW5lOiBudWxsLFxuICAgICAgICBjb2x1bW46IG51bGwsXG4gICAgICAgIG5hbWU6IG51bGxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlY3Rpb24uY29uc3VtZXIub3JpZ2luYWxQb3NpdGlvbkZvcih7XG4gICAgICBsaW5lOiBuZWVkbGUuZ2VuZXJhdGVkTGluZSAtXG4gICAgICAgIChzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRMaW5lIC0gMSksXG4gICAgICBjb2x1bW46IG5lZWRsZS5nZW5lcmF0ZWRDb2x1bW4gLVxuICAgICAgICAoc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZSA9PT0gbmVlZGxlLmdlbmVyYXRlZExpbmVcbiAgICAgICAgID8gc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkQ29sdW1uIC0gMVxuICAgICAgICAgOiAwKSxcbiAgICAgIGJpYXM6IGFBcmdzLmJpYXNcbiAgICB9KTtcbiAgfTtcblxuLyoqXG4gKiBSZXR1cm4gdHJ1ZSBpZiB3ZSBoYXZlIHRoZSBzb3VyY2UgY29udGVudCBmb3IgZXZlcnkgc291cmNlIGluIHRoZSBzb3VyY2VcbiAqIG1hcCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5JbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLmhhc0NvbnRlbnRzT2ZBbGxTb3VyY2VzID1cbiAgZnVuY3Rpb24gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyX2hhc0NvbnRlbnRzT2ZBbGxTb3VyY2VzKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWN0aW9ucy5ldmVyeShmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIHMuY29uc3VtZXIuaGFzQ29udGVudHNPZkFsbFNvdXJjZXMoKTtcbiAgICB9KTtcbiAgfTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBvcmlnaW5hbCBzb3VyY2UgY29udGVudC4gVGhlIG9ubHkgYXJndW1lbnQgaXMgdGhlIHVybCBvZiB0aGVcbiAqIG9yaWdpbmFsIHNvdXJjZSBmaWxlLiBSZXR1cm5zIG51bGwgaWYgbm8gb3JpZ2luYWwgc291cmNlIGNvbnRlbnQgaXNcbiAqIGF2YWlsYWJsZS5cbiAqL1xuSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5zb3VyY2VDb250ZW50Rm9yID1cbiAgZnVuY3Rpb24gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyX3NvdXJjZUNvbnRlbnRGb3IoYVNvdXJjZSwgbnVsbE9uTWlzc2luZykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzZWN0aW9uID0gdGhpcy5fc2VjdGlvbnNbaV07XG5cbiAgICAgIHZhciBjb250ZW50ID0gc2VjdGlvbi5jb25zdW1lci5zb3VyY2VDb250ZW50Rm9yKGFTb3VyY2UsIHRydWUpO1xuICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChudWxsT25NaXNzaW5nKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIGFTb3VyY2UgKyAnXCIgaXMgbm90IGluIHRoZSBTb3VyY2VNYXAuJyk7XG4gICAgfVxuICB9O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGdlbmVyYXRlZCBsaW5lIGFuZCBjb2x1bW4gaW5mb3JtYXRpb24gZm9yIHRoZSBvcmlnaW5hbCBzb3VyY2UsXG4gKiBsaW5lLCBhbmQgY29sdW1uIHBvc2l0aW9ucyBwcm92aWRlZC4gVGhlIG9ubHkgYXJndW1lbnQgaXMgYW4gb2JqZWN0IHdpdGhcbiAqIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gc291cmNlOiBUaGUgZmlsZW5hbWUgb2YgdGhlIG9yaWdpbmFsIHNvdXJjZS5cbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZS4gIFRoZSBsaW5lIG51bWJlclxuICogICAgIGlzIDEtYmFzZWQuXG4gKiAgIC0gY29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlLiAgVGhlIGNvbHVtblxuICogICAgIG51bWJlciBpcyAwLWJhc2VkLlxuICpcbiAqIGFuZCBhbiBvYmplY3QgaXMgcmV0dXJuZWQgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZSwgb3IgbnVsbC4gIFRoZVxuICogICAgIGxpbmUgbnVtYmVyIGlzIDEtYmFzZWQuIFxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UsIG9yIG51bGwuXG4gKiAgICAgVGhlIGNvbHVtbiBudW1iZXIgaXMgMC1iYXNlZC5cbiAqL1xuSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5nZW5lcmF0ZWRQb3NpdGlvbkZvciA9XG4gIGZ1bmN0aW9uIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcl9nZW5lcmF0ZWRQb3NpdGlvbkZvcihhQXJncykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzZWN0aW9uID0gdGhpcy5fc2VjdGlvbnNbaV07XG5cbiAgICAgIC8vIE9ubHkgY29uc2lkZXIgdGhpcyBzZWN0aW9uIGlmIHRoZSByZXF1ZXN0ZWQgc291cmNlIGlzIGluIHRoZSBsaXN0IG9mXG4gICAgICAvLyBzb3VyY2VzIG9mIHRoZSBjb25zdW1lci5cbiAgICAgIGlmIChzZWN0aW9uLmNvbnN1bWVyLl9maW5kU291cmNlSW5kZXgodXRpbC5nZXRBcmcoYUFyZ3MsICdzb3VyY2UnKSkgPT09IC0xKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgdmFyIGdlbmVyYXRlZFBvc2l0aW9uID0gc2VjdGlvbi5jb25zdW1lci5nZW5lcmF0ZWRQb3NpdGlvbkZvcihhQXJncyk7XG4gICAgICBpZiAoZ2VuZXJhdGVkUG9zaXRpb24pIHtcbiAgICAgICAgdmFyIHJldCA9IHtcbiAgICAgICAgICBsaW5lOiBnZW5lcmF0ZWRQb3NpdGlvbi5saW5lICtcbiAgICAgICAgICAgIChzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRMaW5lIC0gMSksXG4gICAgICAgICAgY29sdW1uOiBnZW5lcmF0ZWRQb3NpdGlvbi5jb2x1bW4gK1xuICAgICAgICAgICAgKHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZExpbmUgPT09IGdlbmVyYXRlZFBvc2l0aW9uLmxpbmVcbiAgICAgICAgICAgICA/IHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZENvbHVtbiAtIDFcbiAgICAgICAgICAgICA6IDApXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmU6IG51bGwsXG4gICAgICBjb2x1bW46IG51bGxcbiAgICB9O1xuICB9O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBtYXBwaW5ncyBpbiBhIHN0cmluZyBpbiB0byBhIGRhdGEgc3RydWN0dXJlIHdoaWNoIHdlIGNhbiBlYXNpbHlcbiAqIHF1ZXJ5ICh0aGUgb3JkZXJlZCBhcnJheXMgaW4gdGhlIGB0aGlzLl9fZ2VuZXJhdGVkTWFwcGluZ3NgIGFuZFxuICogYHRoaXMuX19vcmlnaW5hbE1hcHBpbmdzYCBwcm9wZXJ0aWVzKS5cbiAqL1xuSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fcGFyc2VNYXBwaW5ncyA9XG4gIGZ1bmN0aW9uIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcl9wYXJzZU1hcHBpbmdzKGFTdHIsIGFTb3VyY2VSb290KSB7XG4gICAgdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzID0gW107XG4gICAgdGhpcy5fX29yaWdpbmFsTWFwcGluZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc2VjdGlvbiA9IHRoaXMuX3NlY3Rpb25zW2ldO1xuICAgICAgdmFyIHNlY3Rpb25NYXBwaW5ncyA9IHNlY3Rpb24uY29uc3VtZXIuX2dlbmVyYXRlZE1hcHBpbmdzO1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzZWN0aW9uTWFwcGluZ3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdmFyIG1hcHBpbmcgPSBzZWN0aW9uTWFwcGluZ3Nbal07XG5cbiAgICAgICAgdmFyIHNvdXJjZSA9IHNlY3Rpb24uY29uc3VtZXIuX3NvdXJjZXMuYXQobWFwcGluZy5zb3VyY2UpO1xuICAgICAgICBzb3VyY2UgPSB1dGlsLmNvbXB1dGVTb3VyY2VVUkwoc2VjdGlvbi5jb25zdW1lci5zb3VyY2VSb290LCBzb3VyY2UsIHRoaXMuX3NvdXJjZU1hcFVSTCk7XG4gICAgICAgIHRoaXMuX3NvdXJjZXMuYWRkKHNvdXJjZSk7XG4gICAgICAgIHNvdXJjZSA9IHRoaXMuX3NvdXJjZXMuaW5kZXhPZihzb3VyY2UpO1xuXG4gICAgICAgIHZhciBuYW1lID0gbnVsbDtcbiAgICAgICAgaWYgKG1hcHBpbmcubmFtZSkge1xuICAgICAgICAgIG5hbWUgPSBzZWN0aW9uLmNvbnN1bWVyLl9uYW1lcy5hdChtYXBwaW5nLm5hbWUpO1xuICAgICAgICAgIHRoaXMuX25hbWVzLmFkZChuYW1lKTtcbiAgICAgICAgICBuYW1lID0gdGhpcy5fbmFtZXMuaW5kZXhPZihuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSBtYXBwaW5ncyBjb21pbmcgZnJvbSB0aGUgY29uc3VtZXIgZm9yIHRoZSBzZWN0aW9uIGhhdmVcbiAgICAgICAgLy8gZ2VuZXJhdGVkIHBvc2l0aW9ucyByZWxhdGl2ZSB0byB0aGUgc3RhcnQgb2YgdGhlIHNlY3Rpb24sIHNvIHdlXG4gICAgICAgIC8vIG5lZWQgdG8gb2Zmc2V0IHRoZW0gdG8gYmUgcmVsYXRpdmUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBjb25jYXRlbmF0ZWRcbiAgICAgICAgLy8gZ2VuZXJhdGVkIGZpbGUuXG4gICAgICAgIHZhciBhZGp1c3RlZE1hcHBpbmcgPSB7XG4gICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgZ2VuZXJhdGVkTGluZTogbWFwcGluZy5nZW5lcmF0ZWRMaW5lICtcbiAgICAgICAgICAgIChzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRMaW5lIC0gMSksXG4gICAgICAgICAgZ2VuZXJhdGVkQ29sdW1uOiBtYXBwaW5nLmdlbmVyYXRlZENvbHVtbiArXG4gICAgICAgICAgICAoc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZSA9PT0gbWFwcGluZy5nZW5lcmF0ZWRMaW5lXG4gICAgICAgICAgICA/IHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZENvbHVtbiAtIDFcbiAgICAgICAgICAgIDogMCksXG4gICAgICAgICAgb3JpZ2luYWxMaW5lOiBtYXBwaW5nLm9yaWdpbmFsTGluZSxcbiAgICAgICAgICBvcmlnaW5hbENvbHVtbjogbWFwcGluZy5vcmlnaW5hbENvbHVtbixcbiAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzLnB1c2goYWRqdXN0ZWRNYXBwaW5nKTtcbiAgICAgICAgaWYgKHR5cGVvZiBhZGp1c3RlZE1hcHBpbmcub3JpZ2luYWxMaW5lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHRoaXMuX19vcmlnaW5hbE1hcHBpbmdzLnB1c2goYWRqdXN0ZWRNYXBwaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHF1aWNrU29ydCh0aGlzLl9fZ2VuZXJhdGVkTWFwcGluZ3MsIHV0aWwuY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zRGVmbGF0ZWQpO1xuICAgIHF1aWNrU29ydCh0aGlzLl9fb3JpZ2luYWxNYXBwaW5ncywgdXRpbC5jb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyk7XG4gIH07XG5cbmV4cG9ydHMuSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyID0gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyO1xuIiwiLyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuLypcbiAqIENvcHlyaWdodCAyMDExIE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2VcbiAqL1xuXG52YXIgYmFzZTY0VkxRID0gcmVxdWlyZSgnLi9iYXNlNjQtdmxxJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xudmFyIEFycmF5U2V0ID0gcmVxdWlyZSgnLi9hcnJheS1zZXQnKS5BcnJheVNldDtcbnZhciBNYXBwaW5nTGlzdCA9IHJlcXVpcmUoJy4vbWFwcGluZy1saXN0JykuTWFwcGluZ0xpc3Q7XG5cbi8qKlxuICogQW4gaW5zdGFuY2Ugb2YgdGhlIFNvdXJjZU1hcEdlbmVyYXRvciByZXByZXNlbnRzIGEgc291cmNlIG1hcCB3aGljaCBpc1xuICogYmVpbmcgYnVpbHQgaW5jcmVtZW50YWxseS4gWW91IG1heSBwYXNzIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAqIHByb3BlcnRpZXM6XG4gKlxuICogICAtIGZpbGU6IFRoZSBmaWxlbmFtZSBvZiB0aGUgZ2VuZXJhdGVkIHNvdXJjZS5cbiAqICAgLSBzb3VyY2VSb290OiBBIHJvb3QgZm9yIGFsbCByZWxhdGl2ZSBVUkxzIGluIHRoaXMgc291cmNlIG1hcC5cbiAqL1xuZnVuY3Rpb24gU291cmNlTWFwR2VuZXJhdG9yKGFBcmdzKSB7XG4gIGlmICghYUFyZ3MpIHtcbiAgICBhQXJncyA9IHt9O1xuICB9XG4gIHRoaXMuX2ZpbGUgPSB1dGlsLmdldEFyZyhhQXJncywgJ2ZpbGUnLCBudWxsKTtcbiAgdGhpcy5fc291cmNlUm9vdCA9IHV0aWwuZ2V0QXJnKGFBcmdzLCAnc291cmNlUm9vdCcsIG51bGwpO1xuICB0aGlzLl9za2lwVmFsaWRhdGlvbiA9IHV0aWwuZ2V0QXJnKGFBcmdzLCAnc2tpcFZhbGlkYXRpb24nLCBmYWxzZSk7XG4gIHRoaXMuX3NvdXJjZXMgPSBuZXcgQXJyYXlTZXQoKTtcbiAgdGhpcy5fbmFtZXMgPSBuZXcgQXJyYXlTZXQoKTtcbiAgdGhpcy5fbWFwcGluZ3MgPSBuZXcgTWFwcGluZ0xpc3QoKTtcbiAgdGhpcy5fc291cmNlc0NvbnRlbnRzID0gbnVsbDtcbn1cblxuU291cmNlTWFwR2VuZXJhdG9yLnByb3RvdHlwZS5fdmVyc2lvbiA9IDM7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBTb3VyY2VNYXBHZW5lcmF0b3IgYmFzZWQgb24gYSBTb3VyY2VNYXBDb25zdW1lclxuICpcbiAqIEBwYXJhbSBhU291cmNlTWFwQ29uc3VtZXIgVGhlIFNvdXJjZU1hcC5cbiAqL1xuU291cmNlTWFwR2VuZXJhdG9yLmZyb21Tb3VyY2VNYXAgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBHZW5lcmF0b3JfZnJvbVNvdXJjZU1hcChhU291cmNlTWFwQ29uc3VtZXIpIHtcbiAgICB2YXIgc291cmNlUm9vdCA9IGFTb3VyY2VNYXBDb25zdW1lci5zb3VyY2VSb290O1xuICAgIHZhciBnZW5lcmF0b3IgPSBuZXcgU291cmNlTWFwR2VuZXJhdG9yKHtcbiAgICAgIGZpbGU6IGFTb3VyY2VNYXBDb25zdW1lci5maWxlLFxuICAgICAgc291cmNlUm9vdDogc291cmNlUm9vdFxuICAgIH0pO1xuICAgIGFTb3VyY2VNYXBDb25zdW1lci5lYWNoTWFwcGluZyhmdW5jdGlvbiAobWFwcGluZykge1xuICAgICAgdmFyIG5ld01hcHBpbmcgPSB7XG4gICAgICAgIGdlbmVyYXRlZDoge1xuICAgICAgICAgIGxpbmU6IG1hcHBpbmcuZ2VuZXJhdGVkTGluZSxcbiAgICAgICAgICBjb2x1bW46IG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmIChtYXBwaW5nLnNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgIG5ld01hcHBpbmcuc291cmNlID0gbWFwcGluZy5zb3VyY2U7XG4gICAgICAgIGlmIChzb3VyY2VSb290ICE9IG51bGwpIHtcbiAgICAgICAgICBuZXdNYXBwaW5nLnNvdXJjZSA9IHV0aWwucmVsYXRpdmUoc291cmNlUm9vdCwgbmV3TWFwcGluZy5zb3VyY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3TWFwcGluZy5vcmlnaW5hbCA9IHtcbiAgICAgICAgICBsaW5lOiBtYXBwaW5nLm9yaWdpbmFsTGluZSxcbiAgICAgICAgICBjb2x1bW46IG1hcHBpbmcub3JpZ2luYWxDb2x1bW5cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobWFwcGluZy5uYW1lICE9IG51bGwpIHtcbiAgICAgICAgICBuZXdNYXBwaW5nLm5hbWUgPSBtYXBwaW5nLm5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZ2VuZXJhdG9yLmFkZE1hcHBpbmcobmV3TWFwcGluZyk7XG4gICAgfSk7XG4gICAgYVNvdXJjZU1hcENvbnN1bWVyLnNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlRmlsZSkge1xuICAgICAgdmFyIHNvdXJjZVJlbGF0aXZlID0gc291cmNlRmlsZTtcbiAgICAgIGlmIChzb3VyY2VSb290ICE9PSBudWxsKSB7XG4gICAgICAgIHNvdXJjZVJlbGF0aXZlID0gdXRpbC5yZWxhdGl2ZShzb3VyY2VSb290LCBzb3VyY2VGaWxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFnZW5lcmF0b3IuX3NvdXJjZXMuaGFzKHNvdXJjZVJlbGF0aXZlKSkge1xuICAgICAgICBnZW5lcmF0b3IuX3NvdXJjZXMuYWRkKHNvdXJjZVJlbGF0aXZlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRlbnQgPSBhU291cmNlTWFwQ29uc3VtZXIuc291cmNlQ29udGVudEZvcihzb3VyY2VGaWxlKTtcbiAgICAgIGlmIChjb250ZW50ICE9IG51bGwpIHtcbiAgICAgICAgZ2VuZXJhdG9yLnNldFNvdXJjZUNvbnRlbnQoc291cmNlRmlsZSwgY29udGVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfTtcblxuLyoqXG4gKiBBZGQgYSBzaW5nbGUgbWFwcGluZyBmcm9tIG9yaWdpbmFsIHNvdXJjZSBsaW5lIGFuZCBjb2x1bW4gdG8gdGhlIGdlbmVyYXRlZFxuICogc291cmNlJ3MgbGluZSBhbmQgY29sdW1uIGZvciB0aGlzIHNvdXJjZSBtYXAgYmVpbmcgY3JlYXRlZC4gVGhlIG1hcHBpbmdcbiAqIG9iamVjdCBzaG91bGQgaGF2ZSB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogICAtIGdlbmVyYXRlZDogQW4gb2JqZWN0IHdpdGggdGhlIGdlbmVyYXRlZCBsaW5lIGFuZCBjb2x1bW4gcG9zaXRpb25zLlxuICogICAtIG9yaWdpbmFsOiBBbiBvYmplY3Qgd2l0aCB0aGUgb3JpZ2luYWwgbGluZSBhbmQgY29sdW1uIHBvc2l0aW9ucy5cbiAqICAgLSBzb3VyY2U6IFRoZSBvcmlnaW5hbCBzb3VyY2UgZmlsZSAocmVsYXRpdmUgdG8gdGhlIHNvdXJjZVJvb3QpLlxuICogICAtIG5hbWU6IEFuIG9wdGlvbmFsIG9yaWdpbmFsIHRva2VuIG5hbWUgZm9yIHRoaXMgbWFwcGluZy5cbiAqL1xuU291cmNlTWFwR2VuZXJhdG9yLnByb3RvdHlwZS5hZGRNYXBwaW5nID1cbiAgZnVuY3Rpb24gU291cmNlTWFwR2VuZXJhdG9yX2FkZE1hcHBpbmcoYUFyZ3MpIHtcbiAgICB2YXIgZ2VuZXJhdGVkID0gdXRpbC5nZXRBcmcoYUFyZ3MsICdnZW5lcmF0ZWQnKTtcbiAgICB2YXIgb3JpZ2luYWwgPSB1dGlsLmdldEFyZyhhQXJncywgJ29yaWdpbmFsJywgbnVsbCk7XG4gICAgdmFyIHNvdXJjZSA9IHV0aWwuZ2V0QXJnKGFBcmdzLCAnc291cmNlJywgbnVsbCk7XG4gICAgdmFyIG5hbWUgPSB1dGlsLmdldEFyZyhhQXJncywgJ25hbWUnLCBudWxsKTtcblxuICAgIGlmICghdGhpcy5fc2tpcFZhbGlkYXRpb24pIHtcbiAgICAgIHRoaXMuX3ZhbGlkYXRlTWFwcGluZyhnZW5lcmF0ZWQsIG9yaWdpbmFsLCBzb3VyY2UsIG5hbWUpO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UgIT0gbnVsbCkge1xuICAgICAgc291cmNlID0gU3RyaW5nKHNvdXJjZSk7XG4gICAgICBpZiAoIXRoaXMuX3NvdXJjZXMuaGFzKHNvdXJjZSkpIHtcbiAgICAgICAgdGhpcy5fc291cmNlcy5hZGQoc291cmNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmFtZSAhPSBudWxsKSB7XG4gICAgICBuYW1lID0gU3RyaW5nKG5hbWUpO1xuICAgICAgaWYgKCF0aGlzLl9uYW1lcy5oYXMobmFtZSkpIHtcbiAgICAgICAgdGhpcy5fbmFtZXMuYWRkKG5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX21hcHBpbmdzLmFkZCh7XG4gICAgICBnZW5lcmF0ZWRMaW5lOiBnZW5lcmF0ZWQubGluZSxcbiAgICAgIGdlbmVyYXRlZENvbHVtbjogZ2VuZXJhdGVkLmNvbHVtbixcbiAgICAgIG9yaWdpbmFsTGluZTogb3JpZ2luYWwgIT0gbnVsbCAmJiBvcmlnaW5hbC5saW5lLFxuICAgICAgb3JpZ2luYWxDb2x1bW46IG9yaWdpbmFsICE9IG51bGwgJiYgb3JpZ2luYWwuY29sdW1uLFxuICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICBuYW1lOiBuYW1lXG4gICAgfSk7XG4gIH07XG5cbi8qKlxuICogU2V0IHRoZSBzb3VyY2UgY29udGVudCBmb3IgYSBzb3VyY2UgZmlsZS5cbiAqL1xuU291cmNlTWFwR2VuZXJhdG9yLnByb3RvdHlwZS5zZXRTb3VyY2VDb250ZW50ID1cbiAgZnVuY3Rpb24gU291cmNlTWFwR2VuZXJhdG9yX3NldFNvdXJjZUNvbnRlbnQoYVNvdXJjZUZpbGUsIGFTb3VyY2VDb250ZW50KSB7XG4gICAgdmFyIHNvdXJjZSA9IGFTb3VyY2VGaWxlO1xuICAgIGlmICh0aGlzLl9zb3VyY2VSb290ICE9IG51bGwpIHtcbiAgICAgIHNvdXJjZSA9IHV0aWwucmVsYXRpdmUodGhpcy5fc291cmNlUm9vdCwgc291cmNlKTtcbiAgICB9XG5cbiAgICBpZiAoYVNvdXJjZUNvbnRlbnQgIT0gbnVsbCkge1xuICAgICAgLy8gQWRkIHRoZSBzb3VyY2UgY29udGVudCB0byB0aGUgX3NvdXJjZXNDb250ZW50cyBtYXAuXG4gICAgICAvLyBDcmVhdGUgYSBuZXcgX3NvdXJjZXNDb250ZW50cyBtYXAgaWYgdGhlIHByb3BlcnR5IGlzIG51bGwuXG4gICAgICBpZiAoIXRoaXMuX3NvdXJjZXNDb250ZW50cykge1xuICAgICAgICB0aGlzLl9zb3VyY2VzQ29udGVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgfVxuICAgICAgdGhpcy5fc291cmNlc0NvbnRlbnRzW3V0aWwudG9TZXRTdHJpbmcoc291cmNlKV0gPSBhU291cmNlQ29udGVudDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3NvdXJjZXNDb250ZW50cykge1xuICAgICAgLy8gUmVtb3ZlIHRoZSBzb3VyY2UgZmlsZSBmcm9tIHRoZSBfc291cmNlc0NvbnRlbnRzIG1hcC5cbiAgICAgIC8vIElmIHRoZSBfc291cmNlc0NvbnRlbnRzIG1hcCBpcyBlbXB0eSwgc2V0IHRoZSBwcm9wZXJ0eSB0byBudWxsLlxuICAgICAgZGVsZXRlIHRoaXMuX3NvdXJjZXNDb250ZW50c1t1dGlsLnRvU2V0U3RyaW5nKHNvdXJjZSldO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuX3NvdXJjZXNDb250ZW50cykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuX3NvdXJjZXNDb250ZW50cyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4vKipcbiAqIEFwcGxpZXMgdGhlIG1hcHBpbmdzIG9mIGEgc3ViLXNvdXJjZS1tYXAgZm9yIGEgc3BlY2lmaWMgc291cmNlIGZpbGUgdG8gdGhlXG4gKiBzb3VyY2UgbWFwIGJlaW5nIGdlbmVyYXRlZC4gRWFjaCBtYXBwaW5nIHRvIHRoZSBzdXBwbGllZCBzb3VyY2UgZmlsZSBpc1xuICogcmV3cml0dGVuIHVzaW5nIHRoZSBzdXBwbGllZCBzb3VyY2UgbWFwLiBOb3RlOiBUaGUgcmVzb2x1dGlvbiBmb3IgdGhlXG4gKiByZXN1bHRpbmcgbWFwcGluZ3MgaXMgdGhlIG1pbmltaXVtIG9mIHRoaXMgbWFwIGFuZCB0aGUgc3VwcGxpZWQgbWFwLlxuICpcbiAqIEBwYXJhbSBhU291cmNlTWFwQ29uc3VtZXIgVGhlIHNvdXJjZSBtYXAgdG8gYmUgYXBwbGllZC5cbiAqIEBwYXJhbSBhU291cmNlRmlsZSBPcHRpb25hbC4gVGhlIGZpbGVuYW1lIG9mIHRoZSBzb3VyY2UgZmlsZS5cbiAqICAgICAgICBJZiBvbWl0dGVkLCBTb3VyY2VNYXBDb25zdW1lcidzIGZpbGUgcHJvcGVydHkgd2lsbCBiZSB1c2VkLlxuICogQHBhcmFtIGFTb3VyY2VNYXBQYXRoIE9wdGlvbmFsLiBUaGUgZGlybmFtZSBvZiB0aGUgcGF0aCB0byB0aGUgc291cmNlIG1hcFxuICogICAgICAgIHRvIGJlIGFwcGxpZWQuIElmIHJlbGF0aXZlLCBpdCBpcyByZWxhdGl2ZSB0byB0aGUgU291cmNlTWFwQ29uc3VtZXIuXG4gKiAgICAgICAgVGhpcyBwYXJhbWV0ZXIgaXMgbmVlZGVkIHdoZW4gdGhlIHR3byBzb3VyY2UgbWFwcyBhcmVuJ3QgaW4gdGhlIHNhbWVcbiAqICAgICAgICBkaXJlY3RvcnksIGFuZCB0aGUgc291cmNlIG1hcCB0byBiZSBhcHBsaWVkIGNvbnRhaW5zIHJlbGF0aXZlIHNvdXJjZVxuICogICAgICAgIHBhdGhzLiBJZiBzbywgdGhvc2UgcmVsYXRpdmUgc291cmNlIHBhdGhzIG5lZWQgdG8gYmUgcmV3cml0dGVuXG4gKiAgICAgICAgcmVsYXRpdmUgdG8gdGhlIFNvdXJjZU1hcEdlbmVyYXRvci5cbiAqL1xuU291cmNlTWFwR2VuZXJhdG9yLnByb3RvdHlwZS5hcHBseVNvdXJjZU1hcCA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcEdlbmVyYXRvcl9hcHBseVNvdXJjZU1hcChhU291cmNlTWFwQ29uc3VtZXIsIGFTb3VyY2VGaWxlLCBhU291cmNlTWFwUGF0aCkge1xuICAgIHZhciBzb3VyY2VGaWxlID0gYVNvdXJjZUZpbGU7XG4gICAgLy8gSWYgYVNvdXJjZUZpbGUgaXMgb21pdHRlZCwgd2Ugd2lsbCB1c2UgdGhlIGZpbGUgcHJvcGVydHkgb2YgdGhlIFNvdXJjZU1hcFxuICAgIGlmIChhU291cmNlRmlsZSA9PSBudWxsKSB7XG4gICAgICBpZiAoYVNvdXJjZU1hcENvbnN1bWVyLmZpbGUgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ1NvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUuYXBwbHlTb3VyY2VNYXAgcmVxdWlyZXMgZWl0aGVyIGFuIGV4cGxpY2l0IHNvdXJjZSBmaWxlLCAnICtcbiAgICAgICAgICAnb3IgdGhlIHNvdXJjZSBtYXBcXCdzIFwiZmlsZVwiIHByb3BlcnR5LiBCb3RoIHdlcmUgb21pdHRlZC4nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBzb3VyY2VGaWxlID0gYVNvdXJjZU1hcENvbnN1bWVyLmZpbGU7XG4gICAgfVxuICAgIHZhciBzb3VyY2VSb290ID0gdGhpcy5fc291cmNlUm9vdDtcbiAgICAvLyBNYWtlIFwic291cmNlRmlsZVwiIHJlbGF0aXZlIGlmIGFuIGFic29sdXRlIFVybCBpcyBwYXNzZWQuXG4gICAgaWYgKHNvdXJjZVJvb3QgIT0gbnVsbCkge1xuICAgICAgc291cmNlRmlsZSA9IHV0aWwucmVsYXRpdmUoc291cmNlUm9vdCwgc291cmNlRmlsZSk7XG4gICAgfVxuICAgIC8vIEFwcGx5aW5nIHRoZSBTb3VyY2VNYXAgY2FuIGFkZCBhbmQgcmVtb3ZlIGl0ZW1zIGZyb20gdGhlIHNvdXJjZXMgYW5kXG4gICAgLy8gdGhlIG5hbWVzIGFycmF5LlxuICAgIHZhciBuZXdTb3VyY2VzID0gbmV3IEFycmF5U2V0KCk7XG4gICAgdmFyIG5ld05hbWVzID0gbmV3IEFycmF5U2V0KCk7XG5cbiAgICAvLyBGaW5kIG1hcHBpbmdzIGZvciB0aGUgXCJzb3VyY2VGaWxlXCJcbiAgICB0aGlzLl9tYXBwaW5ncy51bnNvcnRlZEZvckVhY2goZnVuY3Rpb24gKG1hcHBpbmcpIHtcbiAgICAgIGlmIChtYXBwaW5nLnNvdXJjZSA9PT0gc291cmNlRmlsZSAmJiBtYXBwaW5nLm9yaWdpbmFsTGluZSAhPSBudWxsKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIGl0IGNhbiBiZSBtYXBwZWQgYnkgdGhlIHNvdXJjZSBtYXAsIHRoZW4gdXBkYXRlIHRoZSBtYXBwaW5nLlxuICAgICAgICB2YXIgb3JpZ2luYWwgPSBhU291cmNlTWFwQ29uc3VtZXIub3JpZ2luYWxQb3NpdGlvbkZvcih7XG4gICAgICAgICAgbGluZTogbWFwcGluZy5vcmlnaW5hbExpbmUsXG4gICAgICAgICAgY29sdW1uOiBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob3JpZ2luYWwuc291cmNlICE9IG51bGwpIHtcbiAgICAgICAgICAvLyBDb3B5IG1hcHBpbmdcbiAgICAgICAgICBtYXBwaW5nLnNvdXJjZSA9IG9yaWdpbmFsLnNvdXJjZTtcbiAgICAgICAgICBpZiAoYVNvdXJjZU1hcFBhdGggIT0gbnVsbCkge1xuICAgICAgICAgICAgbWFwcGluZy5zb3VyY2UgPSB1dGlsLmpvaW4oYVNvdXJjZU1hcFBhdGgsIG1hcHBpbmcuc291cmNlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc291cmNlUm9vdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBtYXBwaW5nLnNvdXJjZSA9IHV0aWwucmVsYXRpdmUoc291cmNlUm9vdCwgbWFwcGluZy5zb3VyY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsTGluZSA9IG9yaWdpbmFsLmxpbmU7XG4gICAgICAgICAgbWFwcGluZy5vcmlnaW5hbENvbHVtbiA9IG9yaWdpbmFsLmNvbHVtbjtcbiAgICAgICAgICBpZiAob3JpZ2luYWwubmFtZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBtYXBwaW5nLm5hbWUgPSBvcmlnaW5hbC5uYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlID0gbWFwcGluZy5zb3VyY2U7XG4gICAgICBpZiAoc291cmNlICE9IG51bGwgJiYgIW5ld1NvdXJjZXMuaGFzKHNvdXJjZSkpIHtcbiAgICAgICAgbmV3U291cmNlcy5hZGQoc291cmNlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5hbWUgPSBtYXBwaW5nLm5hbWU7XG4gICAgICBpZiAobmFtZSAhPSBudWxsICYmICFuZXdOYW1lcy5oYXMobmFtZSkpIHtcbiAgICAgICAgbmV3TmFtZXMuYWRkKG5hbWUpO1xuICAgICAgfVxuXG4gICAgfSwgdGhpcyk7XG4gICAgdGhpcy5fc291cmNlcyA9IG5ld1NvdXJjZXM7XG4gICAgdGhpcy5fbmFtZXMgPSBuZXdOYW1lcztcblxuICAgIC8vIENvcHkgc291cmNlc0NvbnRlbnRzIG9mIGFwcGxpZWQgbWFwLlxuICAgIGFTb3VyY2VNYXBDb25zdW1lci5zb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZUZpbGUpIHtcbiAgICAgIHZhciBjb250ZW50ID0gYVNvdXJjZU1hcENvbnN1bWVyLnNvdXJjZUNvbnRlbnRGb3Ioc291cmNlRmlsZSk7XG4gICAgICBpZiAoY29udGVudCAhPSBudWxsKSB7XG4gICAgICAgIGlmIChhU291cmNlTWFwUGF0aCAhPSBudWxsKSB7XG4gICAgICAgICAgc291cmNlRmlsZSA9IHV0aWwuam9pbihhU291cmNlTWFwUGF0aCwgc291cmNlRmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNvdXJjZVJvb3QgIT0gbnVsbCkge1xuICAgICAgICAgIHNvdXJjZUZpbGUgPSB1dGlsLnJlbGF0aXZlKHNvdXJjZVJvb3QsIHNvdXJjZUZpbGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U291cmNlQ29udGVudChzb3VyY2VGaWxlLCBjb250ZW50KTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfTtcblxuLyoqXG4gKiBBIG1hcHBpbmcgY2FuIGhhdmUgb25lIG9mIHRoZSB0aHJlZSBsZXZlbHMgb2YgZGF0YTpcbiAqXG4gKiAgIDEuIEp1c3QgdGhlIGdlbmVyYXRlZCBwb3NpdGlvbi5cbiAqICAgMi4gVGhlIEdlbmVyYXRlZCBwb3NpdGlvbiwgb3JpZ2luYWwgcG9zaXRpb24sIGFuZCBvcmlnaW5hbCBzb3VyY2UuXG4gKiAgIDMuIEdlbmVyYXRlZCBhbmQgb3JpZ2luYWwgcG9zaXRpb24sIG9yaWdpbmFsIHNvdXJjZSwgYXMgd2VsbCBhcyBhIG5hbWVcbiAqICAgICAgdG9rZW4uXG4gKlxuICogVG8gbWFpbnRhaW4gY29uc2lzdGVuY3ksIHdlIHZhbGlkYXRlIHRoYXQgYW55IG5ldyBtYXBwaW5nIGJlaW5nIGFkZGVkIGZhbGxzXG4gKiBpbiB0byBvbmUgb2YgdGhlc2UgY2F0ZWdvcmllcy5cbiAqL1xuU291cmNlTWFwR2VuZXJhdG9yLnByb3RvdHlwZS5fdmFsaWRhdGVNYXBwaW5nID1cbiAgZnVuY3Rpb24gU291cmNlTWFwR2VuZXJhdG9yX3ZhbGlkYXRlTWFwcGluZyhhR2VuZXJhdGVkLCBhT3JpZ2luYWwsIGFTb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYU5hbWUpIHtcbiAgICAvLyBXaGVuIGFPcmlnaW5hbCBpcyB0cnV0aHkgYnV0IGhhcyBlbXB0eSB2YWx1ZXMgZm9yIC5saW5lIGFuZCAuY29sdW1uLFxuICAgIC8vIGl0IGlzIG1vc3QgbGlrZWx5IGEgcHJvZ3JhbW1lciBlcnJvci4gSW4gdGhpcyBjYXNlIHdlIHRocm93IGEgdmVyeVxuICAgIC8vIHNwZWNpZmljIGVycm9yIG1lc3NhZ2UgdG8gdHJ5IHRvIGd1aWRlIHRoZW0gdGhlIHJpZ2h0IHdheS5cbiAgICAvLyBGb3IgZXhhbXBsZTogaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXIvcG9seW1lci1idW5kbGVyL3B1bGwvNTE5XG4gICAgaWYgKGFPcmlnaW5hbCAmJiB0eXBlb2YgYU9yaWdpbmFsLmxpbmUgIT09ICdudW1iZXInICYmIHR5cGVvZiBhT3JpZ2luYWwuY29sdW1uICE9PSAnbnVtYmVyJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnb3JpZ2luYWwubGluZSBhbmQgb3JpZ2luYWwuY29sdW1uIGFyZSBub3QgbnVtYmVycyAtLSB5b3UgcHJvYmFibHkgbWVhbnQgdG8gb21pdCAnICtcbiAgICAgICAgICAgICd0aGUgb3JpZ2luYWwgbWFwcGluZyBlbnRpcmVseSBhbmQgb25seSBtYXAgdGhlIGdlbmVyYXRlZCBwb3NpdGlvbi4gSWYgc28sIHBhc3MgJyArXG4gICAgICAgICAgICAnbnVsbCBmb3IgdGhlIG9yaWdpbmFsIG1hcHBpbmcgaW5zdGVhZCBvZiBhbiBvYmplY3Qgd2l0aCBlbXB0eSBvciBudWxsIHZhbHVlcy4nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGFHZW5lcmF0ZWQgJiYgJ2xpbmUnIGluIGFHZW5lcmF0ZWQgJiYgJ2NvbHVtbicgaW4gYUdlbmVyYXRlZFxuICAgICAgICAmJiBhR2VuZXJhdGVkLmxpbmUgPiAwICYmIGFHZW5lcmF0ZWQuY29sdW1uID49IDBcbiAgICAgICAgJiYgIWFPcmlnaW5hbCAmJiAhYVNvdXJjZSAmJiAhYU5hbWUpIHtcbiAgICAgIC8vIENhc2UgMS5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSBpZiAoYUdlbmVyYXRlZCAmJiAnbGluZScgaW4gYUdlbmVyYXRlZCAmJiAnY29sdW1uJyBpbiBhR2VuZXJhdGVkXG4gICAgICAgICAgICAgJiYgYU9yaWdpbmFsICYmICdsaW5lJyBpbiBhT3JpZ2luYWwgJiYgJ2NvbHVtbicgaW4gYU9yaWdpbmFsXG4gICAgICAgICAgICAgJiYgYUdlbmVyYXRlZC5saW5lID4gMCAmJiBhR2VuZXJhdGVkLmNvbHVtbiA+PSAwXG4gICAgICAgICAgICAgJiYgYU9yaWdpbmFsLmxpbmUgPiAwICYmIGFPcmlnaW5hbC5jb2x1bW4gPj0gMFxuICAgICAgICAgICAgICYmIGFTb3VyY2UpIHtcbiAgICAgIC8vIENhc2VzIDIgYW5kIDMuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG1hcHBpbmc6ICcgKyBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGdlbmVyYXRlZDogYUdlbmVyYXRlZCxcbiAgICAgICAgc291cmNlOiBhU291cmNlLFxuICAgICAgICBvcmlnaW5hbDogYU9yaWdpbmFsLFxuICAgICAgICBuYW1lOiBhTmFtZVxuICAgICAgfSkpO1xuICAgIH1cbiAgfTtcblxuLyoqXG4gKiBTZXJpYWxpemUgdGhlIGFjY3VtdWxhdGVkIG1hcHBpbmdzIGluIHRvIHRoZSBzdHJlYW0gb2YgYmFzZSA2NCBWTFFzXG4gKiBzcGVjaWZpZWQgYnkgdGhlIHNvdXJjZSBtYXAgZm9ybWF0LlxuICovXG5Tb3VyY2VNYXBHZW5lcmF0b3IucHJvdG90eXBlLl9zZXJpYWxpemVNYXBwaW5ncyA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcEdlbmVyYXRvcl9zZXJpYWxpemVNYXBwaW5ncygpIHtcbiAgICB2YXIgcHJldmlvdXNHZW5lcmF0ZWRDb2x1bW4gPSAwO1xuICAgIHZhciBwcmV2aW91c0dlbmVyYXRlZExpbmUgPSAxO1xuICAgIHZhciBwcmV2aW91c09yaWdpbmFsQ29sdW1uID0gMDtcbiAgICB2YXIgcHJldmlvdXNPcmlnaW5hbExpbmUgPSAwO1xuICAgIHZhciBwcmV2aW91c05hbWUgPSAwO1xuICAgIHZhciBwcmV2aW91c1NvdXJjZSA9IDA7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBuZXh0O1xuICAgIHZhciBtYXBwaW5nO1xuICAgIHZhciBuYW1lSWR4O1xuICAgIHZhciBzb3VyY2VJZHg7XG5cbiAgICB2YXIgbWFwcGluZ3MgPSB0aGlzLl9tYXBwaW5ncy50b0FycmF5KCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG1hcHBpbmdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBtYXBwaW5nID0gbWFwcGluZ3NbaV07XG4gICAgICBuZXh0ID0gJydcblxuICAgICAgaWYgKG1hcHBpbmcuZ2VuZXJhdGVkTGluZSAhPT0gcHJldmlvdXNHZW5lcmF0ZWRMaW5lKSB7XG4gICAgICAgIHByZXZpb3VzR2VuZXJhdGVkQ29sdW1uID0gMDtcbiAgICAgICAgd2hpbGUgKG1hcHBpbmcuZ2VuZXJhdGVkTGluZSAhPT0gcHJldmlvdXNHZW5lcmF0ZWRMaW5lKSB7XG4gICAgICAgICAgbmV4dCArPSAnOyc7XG4gICAgICAgICAgcHJldmlvdXNHZW5lcmF0ZWRMaW5lKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICBpZiAoIXV0aWwuY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zSW5mbGF0ZWQobWFwcGluZywgbWFwcGluZ3NbaSAtIDFdKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5leHQgKz0gJywnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG5leHQgKz0gYmFzZTY0VkxRLmVuY29kZShtYXBwaW5nLmdlbmVyYXRlZENvbHVtblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBwcmV2aW91c0dlbmVyYXRlZENvbHVtbik7XG4gICAgICBwcmV2aW91c0dlbmVyYXRlZENvbHVtbiA9IG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uO1xuXG4gICAgICBpZiAobWFwcGluZy5zb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICBzb3VyY2VJZHggPSB0aGlzLl9zb3VyY2VzLmluZGV4T2YobWFwcGluZy5zb3VyY2UpO1xuICAgICAgICBuZXh0ICs9IGJhc2U2NFZMUS5lbmNvZGUoc291cmNlSWR4IC0gcHJldmlvdXNTb3VyY2UpO1xuICAgICAgICBwcmV2aW91c1NvdXJjZSA9IHNvdXJjZUlkeDtcblxuICAgICAgICAvLyBsaW5lcyBhcmUgc3RvcmVkIDAtYmFzZWQgaW4gU291cmNlTWFwIHNwZWMgdmVyc2lvbiAzXG4gICAgICAgIG5leHQgKz0gYmFzZTY0VkxRLmVuY29kZShtYXBwaW5nLm9yaWdpbmFsTGluZSAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBwcmV2aW91c09yaWdpbmFsTGluZSk7XG4gICAgICAgIHByZXZpb3VzT3JpZ2luYWxMaW5lID0gbWFwcGluZy5vcmlnaW5hbExpbmUgLSAxO1xuXG4gICAgICAgIG5leHQgKz0gYmFzZTY0VkxRLmVuY29kZShtYXBwaW5nLm9yaWdpbmFsQ29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gcHJldmlvdXNPcmlnaW5hbENvbHVtbik7XG4gICAgICAgIHByZXZpb3VzT3JpZ2luYWxDb2x1bW4gPSBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uO1xuXG4gICAgICAgIGlmIChtYXBwaW5nLm5hbWUgIT0gbnVsbCkge1xuICAgICAgICAgIG5hbWVJZHggPSB0aGlzLl9uYW1lcy5pbmRleE9mKG1hcHBpbmcubmFtZSk7XG4gICAgICAgICAgbmV4dCArPSBiYXNlNjRWTFEuZW5jb2RlKG5hbWVJZHggLSBwcmV2aW91c05hbWUpO1xuICAgICAgICAgIHByZXZpb3VzTmFtZSA9IG5hbWVJZHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzdWx0ICs9IG5leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuU291cmNlTWFwR2VuZXJhdG9yLnByb3RvdHlwZS5fZ2VuZXJhdGVTb3VyY2VzQ29udGVudCA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcEdlbmVyYXRvcl9nZW5lcmF0ZVNvdXJjZXNDb250ZW50KGFTb3VyY2VzLCBhU291cmNlUm9vdCkge1xuICAgIHJldHVybiBhU291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgaWYgKCF0aGlzLl9zb3VyY2VzQ29udGVudHMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBpZiAoYVNvdXJjZVJvb3QgIT0gbnVsbCkge1xuICAgICAgICBzb3VyY2UgPSB1dGlsLnJlbGF0aXZlKGFTb3VyY2VSb290LCBzb3VyY2UpO1xuICAgICAgfVxuICAgICAgdmFyIGtleSA9IHV0aWwudG9TZXRTdHJpbmcoc291cmNlKTtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5fc291cmNlc0NvbnRlbnRzLCBrZXkpXG4gICAgICAgID8gdGhpcy5fc291cmNlc0NvbnRlbnRzW2tleV1cbiAgICAgICAgOiBudWxsO1xuICAgIH0sIHRoaXMpO1xuICB9O1xuXG4vKipcbiAqIEV4dGVybmFsaXplIHRoZSBzb3VyY2UgbWFwLlxuICovXG5Tb3VyY2VNYXBHZW5lcmF0b3IucHJvdG90eXBlLnRvSlNPTiA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcEdlbmVyYXRvcl90b0pTT04oKSB7XG4gICAgdmFyIG1hcCA9IHtcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBzb3VyY2VzOiB0aGlzLl9zb3VyY2VzLnRvQXJyYXkoKSxcbiAgICAgIG5hbWVzOiB0aGlzLl9uYW1lcy50b0FycmF5KCksXG4gICAgICBtYXBwaW5nczogdGhpcy5fc2VyaWFsaXplTWFwcGluZ3MoKVxuICAgIH07XG4gICAgaWYgKHRoaXMuX2ZpbGUgIT0gbnVsbCkge1xuICAgICAgbWFwLmZpbGUgPSB0aGlzLl9maWxlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc291cmNlUm9vdCAhPSBudWxsKSB7XG4gICAgICBtYXAuc291cmNlUm9vdCA9IHRoaXMuX3NvdXJjZVJvb3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zb3VyY2VzQ29udGVudHMpIHtcbiAgICAgIG1hcC5zb3VyY2VzQ29udGVudCA9IHRoaXMuX2dlbmVyYXRlU291cmNlc0NvbnRlbnQobWFwLnNvdXJjZXMsIG1hcC5zb3VyY2VSb290KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFwO1xuICB9O1xuXG4vKipcbiAqIFJlbmRlciB0aGUgc291cmNlIG1hcCBiZWluZyBnZW5lcmF0ZWQgdG8gYSBzdHJpbmcuXG4gKi9cblNvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUudG9TdHJpbmcgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBHZW5lcmF0b3JfdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMudG9KU09OKCkpO1xuICB9O1xuXG5leHBvcnRzLlNvdXJjZU1hcEdlbmVyYXRvciA9IFNvdXJjZU1hcEdlbmVyYXRvcjtcbiIsIi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cblxudmFyIFNvdXJjZU1hcEdlbmVyYXRvciA9IHJlcXVpcmUoJy4vc291cmNlLW1hcC1nZW5lcmF0b3InKS5Tb3VyY2VNYXBHZW5lcmF0b3I7XG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vLyBNYXRjaGVzIGEgV2luZG93cy1zdHlsZSBgXFxyXFxuYCBuZXdsaW5lIG9yIGEgYFxcbmAgbmV3bGluZSB1c2VkIGJ5IGFsbCBvdGhlclxuLy8gb3BlcmF0aW5nIHN5c3RlbXMgdGhlc2UgZGF5cyAoY2FwdHVyaW5nIHRoZSByZXN1bHQpLlxudmFyIFJFR0VYX05FV0xJTkUgPSAvKFxccj9cXG4pLztcblxuLy8gTmV3bGluZSBjaGFyYWN0ZXIgY29kZSBmb3IgY2hhckNvZGVBdCgpIGNvbXBhcmlzb25zXG52YXIgTkVXTElORV9DT0RFID0gMTA7XG5cbi8vIFByaXZhdGUgc3ltYm9sIGZvciBpZGVudGlmeWluZyBgU291cmNlTm9kZWBzIHdoZW4gbXVsdGlwbGUgdmVyc2lvbnMgb2Zcbi8vIHRoZSBzb3VyY2UtbWFwIGxpYnJhcnkgYXJlIGxvYWRlZC4gVGhpcyBNVVNUIE5PVCBDSEFOR0UgYWNyb3NzXG4vLyB2ZXJzaW9ucyFcbnZhciBpc1NvdXJjZU5vZGUgPSBcIiQkJGlzU291cmNlTm9kZSQkJFwiO1xuXG4vKipcbiAqIFNvdXJjZU5vZGVzIHByb3ZpZGUgYSB3YXkgdG8gYWJzdHJhY3Qgb3ZlciBpbnRlcnBvbGF0aW5nL2NvbmNhdGVuYXRpbmdcbiAqIHNuaXBwZXRzIG9mIGdlbmVyYXRlZCBKYXZhU2NyaXB0IHNvdXJjZSBjb2RlIHdoaWxlIG1haW50YWluaW5nIHRoZSBsaW5lIGFuZFxuICogY29sdW1uIGluZm9ybWF0aW9uIGFzc29jaWF0ZWQgd2l0aCB0aGUgb3JpZ2luYWwgc291cmNlIGNvZGUuXG4gKlxuICogQHBhcmFtIGFMaW5lIFRoZSBvcmlnaW5hbCBsaW5lIG51bWJlci5cbiAqIEBwYXJhbSBhQ29sdW1uIFRoZSBvcmlnaW5hbCBjb2x1bW4gbnVtYmVyLlxuICogQHBhcmFtIGFTb3VyY2UgVGhlIG9yaWdpbmFsIHNvdXJjZSdzIGZpbGVuYW1lLlxuICogQHBhcmFtIGFDaHVua3MgT3B0aW9uYWwuIEFuIGFycmF5IG9mIHN0cmluZ3Mgd2hpY2ggYXJlIHNuaXBwZXRzIG9mXG4gKiAgICAgICAgZ2VuZXJhdGVkIEpTLCBvciBvdGhlciBTb3VyY2VOb2Rlcy5cbiAqIEBwYXJhbSBhTmFtZSBUaGUgb3JpZ2luYWwgaWRlbnRpZmllci5cbiAqL1xuZnVuY3Rpb24gU291cmNlTm9kZShhTGluZSwgYUNvbHVtbiwgYVNvdXJjZSwgYUNodW5rcywgYU5hbWUpIHtcbiAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICB0aGlzLnNvdXJjZUNvbnRlbnRzID0ge307XG4gIHRoaXMubGluZSA9IGFMaW5lID09IG51bGwgPyBudWxsIDogYUxpbmU7XG4gIHRoaXMuY29sdW1uID0gYUNvbHVtbiA9PSBudWxsID8gbnVsbCA6IGFDb2x1bW47XG4gIHRoaXMuc291cmNlID0gYVNvdXJjZSA9PSBudWxsID8gbnVsbCA6IGFTb3VyY2U7XG4gIHRoaXMubmFtZSA9IGFOYW1lID09IG51bGwgPyBudWxsIDogYU5hbWU7XG4gIHRoaXNbaXNTb3VyY2VOb2RlXSA9IHRydWU7XG4gIGlmIChhQ2h1bmtzICE9IG51bGwpIHRoaXMuYWRkKGFDaHVua3MpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBTb3VyY2VOb2RlIGZyb20gZ2VuZXJhdGVkIGNvZGUgYW5kIGEgU291cmNlTWFwQ29uc3VtZXIuXG4gKlxuICogQHBhcmFtIGFHZW5lcmF0ZWRDb2RlIFRoZSBnZW5lcmF0ZWQgY29kZVxuICogQHBhcmFtIGFTb3VyY2VNYXBDb25zdW1lciBUaGUgU291cmNlTWFwIGZvciB0aGUgZ2VuZXJhdGVkIGNvZGVcbiAqIEBwYXJhbSBhUmVsYXRpdmVQYXRoIE9wdGlvbmFsLiBUaGUgcGF0aCB0aGF0IHJlbGF0aXZlIHNvdXJjZXMgaW4gdGhlXG4gKiAgICAgICAgU291cmNlTWFwQ29uc3VtZXIgc2hvdWxkIGJlIHJlbGF0aXZlIHRvLlxuICovXG5Tb3VyY2VOb2RlLmZyb21TdHJpbmdXaXRoU291cmNlTWFwID1cbiAgZnVuY3Rpb24gU291cmNlTm9kZV9mcm9tU3RyaW5nV2l0aFNvdXJjZU1hcChhR2VuZXJhdGVkQ29kZSwgYVNvdXJjZU1hcENvbnN1bWVyLCBhUmVsYXRpdmVQYXRoKSB7XG4gICAgLy8gVGhlIFNvdXJjZU5vZGUgd2Ugd2FudCB0byBmaWxsIHdpdGggdGhlIGdlbmVyYXRlZCBjb2RlXG4gICAgLy8gYW5kIHRoZSBTb3VyY2VNYXBcbiAgICB2YXIgbm9kZSA9IG5ldyBTb3VyY2VOb2RlKCk7XG5cbiAgICAvLyBBbGwgZXZlbiBpbmRpY2VzIG9mIHRoaXMgYXJyYXkgYXJlIG9uZSBsaW5lIG9mIHRoZSBnZW5lcmF0ZWQgY29kZSxcbiAgICAvLyB3aGlsZSBhbGwgb2RkIGluZGljZXMgYXJlIHRoZSBuZXdsaW5lcyBiZXR3ZWVuIHR3byBhZGphY2VudCBsaW5lc1xuICAgIC8vIChzaW5jZSBgUkVHRVhfTkVXTElORWAgY2FwdHVyZXMgaXRzIG1hdGNoKS5cbiAgICAvLyBQcm9jZXNzZWQgZnJhZ21lbnRzIGFyZSBhY2Nlc3NlZCBieSBjYWxsaW5nIGBzaGlmdE5leHRMaW5lYC5cbiAgICB2YXIgcmVtYWluaW5nTGluZXMgPSBhR2VuZXJhdGVkQ29kZS5zcGxpdChSRUdFWF9ORVdMSU5FKTtcbiAgICB2YXIgcmVtYWluaW5nTGluZXNJbmRleCA9IDA7XG4gICAgdmFyIHNoaWZ0TmV4dExpbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBsaW5lQ29udGVudHMgPSBnZXROZXh0TGluZSgpO1xuICAgICAgLy8gVGhlIGxhc3QgbGluZSBvZiBhIGZpbGUgbWlnaHQgbm90IGhhdmUgYSBuZXdsaW5lLlxuICAgICAgdmFyIG5ld0xpbmUgPSBnZXROZXh0TGluZSgpIHx8IFwiXCI7XG4gICAgICByZXR1cm4gbGluZUNvbnRlbnRzICsgbmV3TGluZTtcblxuICAgICAgZnVuY3Rpb24gZ2V0TmV4dExpbmUoKSB7XG4gICAgICAgIHJldHVybiByZW1haW5pbmdMaW5lc0luZGV4IDwgcmVtYWluaW5nTGluZXMubGVuZ3RoID9cbiAgICAgICAgICAgIHJlbWFpbmluZ0xpbmVzW3JlbWFpbmluZ0xpbmVzSW5kZXgrK10gOiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFdlIG5lZWQgdG8gcmVtZW1iZXIgdGhlIHBvc2l0aW9uIG9mIFwicmVtYWluaW5nTGluZXNcIlxuICAgIHZhciBsYXN0R2VuZXJhdGVkTGluZSA9IDEsIGxhc3RHZW5lcmF0ZWRDb2x1bW4gPSAwO1xuXG4gICAgLy8gVGhlIGdlbmVyYXRlIFNvdXJjZU5vZGVzIHdlIG5lZWQgYSBjb2RlIHJhbmdlLlxuICAgIC8vIFRvIGV4dHJhY3QgaXQgY3VycmVudCBhbmQgbGFzdCBtYXBwaW5nIGlzIHVzZWQuXG4gICAgLy8gSGVyZSB3ZSBzdG9yZSB0aGUgbGFzdCBtYXBwaW5nLlxuICAgIHZhciBsYXN0TWFwcGluZyA9IG51bGw7XG5cbiAgICBhU291cmNlTWFwQ29uc3VtZXIuZWFjaE1hcHBpbmcoZnVuY3Rpb24gKG1hcHBpbmcpIHtcbiAgICAgIGlmIChsYXN0TWFwcGluZyAhPT0gbnVsbCkge1xuICAgICAgICAvLyBXZSBhZGQgdGhlIGNvZGUgZnJvbSBcImxhc3RNYXBwaW5nXCIgdG8gXCJtYXBwaW5nXCI6XG4gICAgICAgIC8vIEZpcnN0IGNoZWNrIGlmIHRoZXJlIGlzIGEgbmV3IGxpbmUgaW4gYmV0d2Vlbi5cbiAgICAgICAgaWYgKGxhc3RHZW5lcmF0ZWRMaW5lIDwgbWFwcGluZy5nZW5lcmF0ZWRMaW5lKSB7XG4gICAgICAgICAgLy8gQXNzb2NpYXRlIGZpcnN0IGxpbmUgd2l0aCBcImxhc3RNYXBwaW5nXCJcbiAgICAgICAgICBhZGRNYXBwaW5nV2l0aENvZGUobGFzdE1hcHBpbmcsIHNoaWZ0TmV4dExpbmUoKSk7XG4gICAgICAgICAgbGFzdEdlbmVyYXRlZExpbmUrKztcbiAgICAgICAgICBsYXN0R2VuZXJhdGVkQ29sdW1uID0gMDtcbiAgICAgICAgICAvLyBUaGUgcmVtYWluaW5nIGNvZGUgaXMgYWRkZWQgd2l0aG91dCBtYXBwaW5nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVGhlcmUgaXMgbm8gbmV3IGxpbmUgaW4gYmV0d2Vlbi5cbiAgICAgICAgICAvLyBBc3NvY2lhdGUgdGhlIGNvZGUgYmV0d2VlbiBcImxhc3RHZW5lcmF0ZWRDb2x1bW5cIiBhbmRcbiAgICAgICAgICAvLyBcIm1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uXCIgd2l0aCBcImxhc3RNYXBwaW5nXCJcbiAgICAgICAgICB2YXIgbmV4dExpbmUgPSByZW1haW5pbmdMaW5lc1tyZW1haW5pbmdMaW5lc0luZGV4XSB8fCAnJztcbiAgICAgICAgICB2YXIgY29kZSA9IG5leHRMaW5lLnN1YnN0cigwLCBtYXBwaW5nLmdlbmVyYXRlZENvbHVtbiAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEdlbmVyYXRlZENvbHVtbik7XG4gICAgICAgICAgcmVtYWluaW5nTGluZXNbcmVtYWluaW5nTGluZXNJbmRleF0gPSBuZXh0TGluZS5zdWJzdHIobWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4gLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RHZW5lcmF0ZWRDb2x1bW4pO1xuICAgICAgICAgIGxhc3RHZW5lcmF0ZWRDb2x1bW4gPSBtYXBwaW5nLmdlbmVyYXRlZENvbHVtbjtcbiAgICAgICAgICBhZGRNYXBwaW5nV2l0aENvZGUobGFzdE1hcHBpbmcsIGNvZGUpO1xuICAgICAgICAgIC8vIE5vIG1vcmUgcmVtYWluaW5nIGNvZGUsIGNvbnRpbnVlXG4gICAgICAgICAgbGFzdE1hcHBpbmcgPSBtYXBwaW5nO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gV2UgYWRkIHRoZSBnZW5lcmF0ZWQgY29kZSB1bnRpbCB0aGUgZmlyc3QgbWFwcGluZ1xuICAgICAgLy8gdG8gdGhlIFNvdXJjZU5vZGUgd2l0aG91dCBhbnkgbWFwcGluZy5cbiAgICAgIC8vIEVhY2ggbGluZSBpcyBhZGRlZCBhcyBzZXBhcmF0ZSBzdHJpbmcuXG4gICAgICB3aGlsZSAobGFzdEdlbmVyYXRlZExpbmUgPCBtYXBwaW5nLmdlbmVyYXRlZExpbmUpIHtcbiAgICAgICAgbm9kZS5hZGQoc2hpZnROZXh0TGluZSgpKTtcbiAgICAgICAgbGFzdEdlbmVyYXRlZExpbmUrKztcbiAgICAgIH1cbiAgICAgIGlmIChsYXN0R2VuZXJhdGVkQ29sdW1uIDwgbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4pIHtcbiAgICAgICAgdmFyIG5leHRMaW5lID0gcmVtYWluaW5nTGluZXNbcmVtYWluaW5nTGluZXNJbmRleF0gfHwgJyc7XG4gICAgICAgIG5vZGUuYWRkKG5leHRMaW5lLnN1YnN0cigwLCBtYXBwaW5nLmdlbmVyYXRlZENvbHVtbikpO1xuICAgICAgICByZW1haW5pbmdMaW5lc1tyZW1haW5pbmdMaW5lc0luZGV4XSA9IG5leHRMaW5lLnN1YnN0cihtYXBwaW5nLmdlbmVyYXRlZENvbHVtbik7XG4gICAgICAgIGxhc3RHZW5lcmF0ZWRDb2x1bW4gPSBtYXBwaW5nLmdlbmVyYXRlZENvbHVtbjtcbiAgICAgIH1cbiAgICAgIGxhc3RNYXBwaW5nID0gbWFwcGluZztcbiAgICB9LCB0aGlzKTtcbiAgICAvLyBXZSBoYXZlIHByb2Nlc3NlZCBhbGwgbWFwcGluZ3MuXG4gICAgaWYgKHJlbWFpbmluZ0xpbmVzSW5kZXggPCByZW1haW5pbmdMaW5lcy5sZW5ndGgpIHtcbiAgICAgIGlmIChsYXN0TWFwcGluZykge1xuICAgICAgICAvLyBBc3NvY2lhdGUgdGhlIHJlbWFpbmluZyBjb2RlIGluIHRoZSBjdXJyZW50IGxpbmUgd2l0aCBcImxhc3RNYXBwaW5nXCJcbiAgICAgICAgYWRkTWFwcGluZ1dpdGhDb2RlKGxhc3RNYXBwaW5nLCBzaGlmdE5leHRMaW5lKCkpO1xuICAgICAgfVxuICAgICAgLy8gYW5kIGFkZCB0aGUgcmVtYWluaW5nIGxpbmVzIHdpdGhvdXQgYW55IG1hcHBpbmdcbiAgICAgIG5vZGUuYWRkKHJlbWFpbmluZ0xpbmVzLnNwbGljZShyZW1haW5pbmdMaW5lc0luZGV4KS5qb2luKFwiXCIpKTtcbiAgICB9XG5cbiAgICAvLyBDb3B5IHNvdXJjZXNDb250ZW50IGludG8gU291cmNlTm9kZVxuICAgIGFTb3VyY2VNYXBDb25zdW1lci5zb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZUZpbGUpIHtcbiAgICAgIHZhciBjb250ZW50ID0gYVNvdXJjZU1hcENvbnN1bWVyLnNvdXJjZUNvbnRlbnRGb3Ioc291cmNlRmlsZSk7XG4gICAgICBpZiAoY29udGVudCAhPSBudWxsKSB7XG4gICAgICAgIGlmIChhUmVsYXRpdmVQYXRoICE9IG51bGwpIHtcbiAgICAgICAgICBzb3VyY2VGaWxlID0gdXRpbC5qb2luKGFSZWxhdGl2ZVBhdGgsIHNvdXJjZUZpbGUpO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuc2V0U291cmNlQ29udGVudChzb3VyY2VGaWxlLCBjb250ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBub2RlO1xuXG4gICAgZnVuY3Rpb24gYWRkTWFwcGluZ1dpdGhDb2RlKG1hcHBpbmcsIGNvZGUpIHtcbiAgICAgIGlmIChtYXBwaW5nID09PSBudWxsIHx8IG1hcHBpbmcuc291cmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbm9kZS5hZGQoY29kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc291cmNlID0gYVJlbGF0aXZlUGF0aFxuICAgICAgICAgID8gdXRpbC5qb2luKGFSZWxhdGl2ZVBhdGgsIG1hcHBpbmcuc291cmNlKVxuICAgICAgICAgIDogbWFwcGluZy5zb3VyY2U7XG4gICAgICAgIG5vZGUuYWRkKG5ldyBTb3VyY2VOb2RlKG1hcHBpbmcub3JpZ2luYWxMaW5lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcHBpbmcubmFtZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuLyoqXG4gKiBBZGQgYSBjaHVuayBvZiBnZW5lcmF0ZWQgSlMgdG8gdGhpcyBzb3VyY2Ugbm9kZS5cbiAqXG4gKiBAcGFyYW0gYUNodW5rIEEgc3RyaW5nIHNuaXBwZXQgb2YgZ2VuZXJhdGVkIEpTIGNvZGUsIGFub3RoZXIgaW5zdGFuY2Ugb2ZcbiAqICAgICAgICBTb3VyY2VOb2RlLCBvciBhbiBhcnJheSB3aGVyZSBlYWNoIG1lbWJlciBpcyBvbmUgb2YgdGhvc2UgdGhpbmdzLlxuICovXG5Tb3VyY2VOb2RlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBTb3VyY2VOb2RlX2FkZChhQ2h1bmspIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYUNodW5rKSkge1xuICAgIGFDaHVuay5mb3JFYWNoKGZ1bmN0aW9uIChjaHVuaykge1xuICAgICAgdGhpcy5hZGQoY2h1bmspO1xuICAgIH0sIHRoaXMpO1xuICB9XG4gIGVsc2UgaWYgKGFDaHVua1tpc1NvdXJjZU5vZGVdIHx8IHR5cGVvZiBhQ2h1bmsgPT09IFwic3RyaW5nXCIpIHtcbiAgICBpZiAoYUNodW5rKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goYUNodW5rKTtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgIFwiRXhwZWN0ZWQgYSBTb3VyY2VOb2RlLCBzdHJpbmcsIG9yIGFuIGFycmF5IG9mIFNvdXJjZU5vZGVzIGFuZCBzdHJpbmdzLiBHb3QgXCIgKyBhQ2h1bmtcbiAgICApO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBZGQgYSBjaHVuayBvZiBnZW5lcmF0ZWQgSlMgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGlzIHNvdXJjZSBub2RlLlxuICpcbiAqIEBwYXJhbSBhQ2h1bmsgQSBzdHJpbmcgc25pcHBldCBvZiBnZW5lcmF0ZWQgSlMgY29kZSwgYW5vdGhlciBpbnN0YW5jZSBvZlxuICogICAgICAgIFNvdXJjZU5vZGUsIG9yIGFuIGFycmF5IHdoZXJlIGVhY2ggbWVtYmVyIGlzIG9uZSBvZiB0aG9zZSB0aGluZ3MuXG4gKi9cblNvdXJjZU5vZGUucHJvdG90eXBlLnByZXBlbmQgPSBmdW5jdGlvbiBTb3VyY2VOb2RlX3ByZXBlbmQoYUNodW5rKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFDaHVuaykpIHtcbiAgICBmb3IgKHZhciBpID0gYUNodW5rLmxlbmd0aC0xOyBpID49IDA7IGktLSkge1xuICAgICAgdGhpcy5wcmVwZW5kKGFDaHVua1tpXSk7XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKGFDaHVua1tpc1NvdXJjZU5vZGVdIHx8IHR5cGVvZiBhQ2h1bmsgPT09IFwic3RyaW5nXCIpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnVuc2hpZnQoYUNodW5rKTtcbiAgfVxuICBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgXCJFeHBlY3RlZCBhIFNvdXJjZU5vZGUsIHN0cmluZywgb3IgYW4gYXJyYXkgb2YgU291cmNlTm9kZXMgYW5kIHN0cmluZ3MuIEdvdCBcIiArIGFDaHVua1xuICAgICk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFdhbGsgb3ZlciB0aGUgdHJlZSBvZiBKUyBzbmlwcGV0cyBpbiB0aGlzIG5vZGUgYW5kIGl0cyBjaGlsZHJlbi4gVGhlXG4gKiB3YWxraW5nIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbmNlIGZvciBlYWNoIHNuaXBwZXQgb2YgSlMgYW5kIGlzIHBhc3NlZCB0aGF0XG4gKiBzbmlwcGV0IGFuZCB0aGUgaXRzIG9yaWdpbmFsIGFzc29jaWF0ZWQgc291cmNlJ3MgbGluZS9jb2x1bW4gbG9jYXRpb24uXG4gKlxuICogQHBhcmFtIGFGbiBUaGUgdHJhdmVyc2FsIGZ1bmN0aW9uLlxuICovXG5Tb3VyY2VOb2RlLnByb3RvdHlwZS53YWxrID0gZnVuY3Rpb24gU291cmNlTm9kZV93YWxrKGFGbikge1xuICB2YXIgY2h1bms7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY2h1bmsgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgIGlmIChjaHVua1tpc1NvdXJjZU5vZGVdKSB7XG4gICAgICBjaHVuay53YWxrKGFGbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKGNodW5rICE9PSAnJykge1xuICAgICAgICBhRm4oY2h1bmssIHsgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgIGxpbmU6IHRoaXMubGluZSxcbiAgICAgICAgICAgICAgICAgICAgIGNvbHVtbjogdGhpcy5jb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIExpa2UgYFN0cmluZy5wcm90b3R5cGUuam9pbmAgZXhjZXB0IGZvciBTb3VyY2VOb2Rlcy4gSW5zZXJ0cyBgYVN0cmAgYmV0d2VlblxuICogZWFjaCBvZiBgdGhpcy5jaGlsZHJlbmAuXG4gKlxuICogQHBhcmFtIGFTZXAgVGhlIHNlcGFyYXRvci5cbiAqL1xuU291cmNlTm9kZS5wcm90b3R5cGUuam9pbiA9IGZ1bmN0aW9uIFNvdXJjZU5vZGVfam9pbihhU2VwKSB7XG4gIHZhciBuZXdDaGlsZHJlbjtcbiAgdmFyIGk7XG4gIHZhciBsZW4gPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcbiAgaWYgKGxlbiA+IDApIHtcbiAgICBuZXdDaGlsZHJlbiA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW4tMTsgaSsrKSB7XG4gICAgICBuZXdDaGlsZHJlbi5wdXNoKHRoaXMuY2hpbGRyZW5baV0pO1xuICAgICAgbmV3Q2hpbGRyZW4ucHVzaChhU2VwKTtcbiAgICB9XG4gICAgbmV3Q2hpbGRyZW4ucHVzaCh0aGlzLmNoaWxkcmVuW2ldKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gbmV3Q2hpbGRyZW47XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENhbGwgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlIG9uIHRoZSB2ZXJ5IHJpZ2h0LW1vc3Qgc291cmNlIHNuaXBwZXQuIFVzZWZ1bFxuICogZm9yIHRyaW1taW5nIHdoaXRlc3BhY2UgZnJvbSB0aGUgZW5kIG9mIGEgc291cmNlIG5vZGUsIGV0Yy5cbiAqXG4gKiBAcGFyYW0gYVBhdHRlcm4gVGhlIHBhdHRlcm4gdG8gcmVwbGFjZS5cbiAqIEBwYXJhbSBhUmVwbGFjZW1lbnQgVGhlIHRoaW5nIHRvIHJlcGxhY2UgdGhlIHBhdHRlcm4gd2l0aC5cbiAqL1xuU291cmNlTm9kZS5wcm90b3R5cGUucmVwbGFjZVJpZ2h0ID0gZnVuY3Rpb24gU291cmNlTm9kZV9yZXBsYWNlUmlnaHQoYVBhdHRlcm4sIGFSZXBsYWNlbWVudCkge1xuICB2YXIgbGFzdENoaWxkID0gdGhpcy5jaGlsZHJlblt0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDFdO1xuICBpZiAobGFzdENoaWxkW2lzU291cmNlTm9kZV0pIHtcbiAgICBsYXN0Q2hpbGQucmVwbGFjZVJpZ2h0KGFQYXR0ZXJuLCBhUmVwbGFjZW1lbnQpO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBsYXN0Q2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgdGhpcy5jaGlsZHJlblt0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDFdID0gbGFzdENoaWxkLnJlcGxhY2UoYVBhdHRlcm4sIGFSZXBsYWNlbWVudCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKCcnLnJlcGxhY2UoYVBhdHRlcm4sIGFSZXBsYWNlbWVudCkpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIHNvdXJjZSBjb250ZW50IGZvciBhIHNvdXJjZSBmaWxlLiBUaGlzIHdpbGwgYmUgYWRkZWQgdG8gdGhlIFNvdXJjZU1hcEdlbmVyYXRvclxuICogaW4gdGhlIHNvdXJjZXNDb250ZW50IGZpZWxkLlxuICpcbiAqIEBwYXJhbSBhU291cmNlRmlsZSBUaGUgZmlsZW5hbWUgb2YgdGhlIHNvdXJjZSBmaWxlXG4gKiBAcGFyYW0gYVNvdXJjZUNvbnRlbnQgVGhlIGNvbnRlbnQgb2YgdGhlIHNvdXJjZSBmaWxlXG4gKi9cblNvdXJjZU5vZGUucHJvdG90eXBlLnNldFNvdXJjZUNvbnRlbnQgPVxuICBmdW5jdGlvbiBTb3VyY2VOb2RlX3NldFNvdXJjZUNvbnRlbnQoYVNvdXJjZUZpbGUsIGFTb3VyY2VDb250ZW50KSB7XG4gICAgdGhpcy5zb3VyY2VDb250ZW50c1t1dGlsLnRvU2V0U3RyaW5nKGFTb3VyY2VGaWxlKV0gPSBhU291cmNlQ29udGVudDtcbiAgfTtcblxuLyoqXG4gKiBXYWxrIG92ZXIgdGhlIHRyZWUgb2YgU291cmNlTm9kZXMuIFRoZSB3YWxraW5nIGZ1bmN0aW9uIGlzIGNhbGxlZCBmb3IgZWFjaFxuICogc291cmNlIGZpbGUgY29udGVudCBhbmQgaXMgcGFzc2VkIHRoZSBmaWxlbmFtZSBhbmQgc291cmNlIGNvbnRlbnQuXG4gKlxuICogQHBhcmFtIGFGbiBUaGUgdHJhdmVyc2FsIGZ1bmN0aW9uLlxuICovXG5Tb3VyY2VOb2RlLnByb3RvdHlwZS53YWxrU291cmNlQ29udGVudHMgPVxuICBmdW5jdGlvbiBTb3VyY2VOb2RlX3dhbGtTb3VyY2VDb250ZW50cyhhRm4pIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKHRoaXMuY2hpbGRyZW5baV1baXNTb3VyY2VOb2RlXSkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLndhbGtTb3VyY2VDb250ZW50cyhhRm4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBzb3VyY2VzID0gT2JqZWN0LmtleXModGhpcy5zb3VyY2VDb250ZW50cyk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNvdXJjZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGFGbih1dGlsLmZyb21TZXRTdHJpbmcoc291cmNlc1tpXSksIHRoaXMuc291cmNlQ29udGVudHNbc291cmNlc1tpXV0pO1xuICAgIH1cbiAgfTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHNvdXJjZSBub2RlLiBXYWxrcyBvdmVyIHRoZSB0cmVlXG4gKiBhbmQgY29uY2F0ZW5hdGVzIGFsbCB0aGUgdmFyaW91cyBzbmlwcGV0cyB0b2dldGhlciB0byBvbmUgc3RyaW5nLlxuICovXG5Tb3VyY2VOb2RlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIFNvdXJjZU5vZGVfdG9TdHJpbmcoKSB7XG4gIHZhciBzdHIgPSBcIlwiO1xuICB0aGlzLndhbGsoZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgc3RyICs9IGNodW5rO1xuICB9KTtcbiAgcmV0dXJuIHN0cjtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgc291cmNlIG5vZGUgYWxvbmcgd2l0aCBhIHNvdXJjZVxuICogbWFwLlxuICovXG5Tb3VyY2VOb2RlLnByb3RvdHlwZS50b1N0cmluZ1dpdGhTb3VyY2VNYXAgPSBmdW5jdGlvbiBTb3VyY2VOb2RlX3RvU3RyaW5nV2l0aFNvdXJjZU1hcChhQXJncykge1xuICB2YXIgZ2VuZXJhdGVkID0ge1xuICAgIGNvZGU6IFwiXCIsXG4gICAgbGluZTogMSxcbiAgICBjb2x1bW46IDBcbiAgfTtcbiAgdmFyIG1hcCA9IG5ldyBTb3VyY2VNYXBHZW5lcmF0b3IoYUFyZ3MpO1xuICB2YXIgc291cmNlTWFwcGluZ0FjdGl2ZSA9IGZhbHNlO1xuICB2YXIgbGFzdE9yaWdpbmFsU291cmNlID0gbnVsbDtcbiAgdmFyIGxhc3RPcmlnaW5hbExpbmUgPSBudWxsO1xuICB2YXIgbGFzdE9yaWdpbmFsQ29sdW1uID0gbnVsbDtcbiAgdmFyIGxhc3RPcmlnaW5hbE5hbWUgPSBudWxsO1xuICB0aGlzLndhbGsoZnVuY3Rpb24gKGNodW5rLCBvcmlnaW5hbCkge1xuICAgIGdlbmVyYXRlZC5jb2RlICs9IGNodW5rO1xuICAgIGlmIChvcmlnaW5hbC5zb3VyY2UgIT09IG51bGxcbiAgICAgICAgJiYgb3JpZ2luYWwubGluZSAhPT0gbnVsbFxuICAgICAgICAmJiBvcmlnaW5hbC5jb2x1bW4gIT09IG51bGwpIHtcbiAgICAgIGlmKGxhc3RPcmlnaW5hbFNvdXJjZSAhPT0gb3JpZ2luYWwuc291cmNlXG4gICAgICAgICB8fCBsYXN0T3JpZ2luYWxMaW5lICE9PSBvcmlnaW5hbC5saW5lXG4gICAgICAgICB8fCBsYXN0T3JpZ2luYWxDb2x1bW4gIT09IG9yaWdpbmFsLmNvbHVtblxuICAgICAgICAgfHwgbGFzdE9yaWdpbmFsTmFtZSAhPT0gb3JpZ2luYWwubmFtZSkge1xuICAgICAgICBtYXAuYWRkTWFwcGluZyh7XG4gICAgICAgICAgc291cmNlOiBvcmlnaW5hbC5zb3VyY2UsXG4gICAgICAgICAgb3JpZ2luYWw6IHtcbiAgICAgICAgICAgIGxpbmU6IG9yaWdpbmFsLmxpbmUsXG4gICAgICAgICAgICBjb2x1bW46IG9yaWdpbmFsLmNvbHVtblxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2VuZXJhdGVkOiB7XG4gICAgICAgICAgICBsaW5lOiBnZW5lcmF0ZWQubGluZSxcbiAgICAgICAgICAgIGNvbHVtbjogZ2VuZXJhdGVkLmNvbHVtblxuICAgICAgICAgIH0sXG4gICAgICAgICAgbmFtZTogb3JpZ2luYWwubmFtZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGxhc3RPcmlnaW5hbFNvdXJjZSA9IG9yaWdpbmFsLnNvdXJjZTtcbiAgICAgIGxhc3RPcmlnaW5hbExpbmUgPSBvcmlnaW5hbC5saW5lO1xuICAgICAgbGFzdE9yaWdpbmFsQ29sdW1uID0gb3JpZ2luYWwuY29sdW1uO1xuICAgICAgbGFzdE9yaWdpbmFsTmFtZSA9IG9yaWdpbmFsLm5hbWU7XG4gICAgICBzb3VyY2VNYXBwaW5nQWN0aXZlID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHNvdXJjZU1hcHBpbmdBY3RpdmUpIHtcbiAgICAgIG1hcC5hZGRNYXBwaW5nKHtcbiAgICAgICAgZ2VuZXJhdGVkOiB7XG4gICAgICAgICAgbGluZTogZ2VuZXJhdGVkLmxpbmUsXG4gICAgICAgICAgY29sdW1uOiBnZW5lcmF0ZWQuY29sdW1uXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgbGFzdE9yaWdpbmFsU291cmNlID0gbnVsbDtcbiAgICAgIHNvdXJjZU1hcHBpbmdBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaWR4ID0gMCwgbGVuZ3RoID0gY2h1bmsubGVuZ3RoOyBpZHggPCBsZW5ndGg7IGlkeCsrKSB7XG4gICAgICBpZiAoY2h1bmsuY2hhckNvZGVBdChpZHgpID09PSBORVdMSU5FX0NPREUpIHtcbiAgICAgICAgZ2VuZXJhdGVkLmxpbmUrKztcbiAgICAgICAgZ2VuZXJhdGVkLmNvbHVtbiA9IDA7XG4gICAgICAgIC8vIE1hcHBpbmdzIGVuZCBhdCBlb2xcbiAgICAgICAgaWYgKGlkeCArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIGxhc3RPcmlnaW5hbFNvdXJjZSA9IG51bGw7XG4gICAgICAgICAgc291cmNlTWFwcGluZ0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZU1hcHBpbmdBY3RpdmUpIHtcbiAgICAgICAgICBtYXAuYWRkTWFwcGluZyh7XG4gICAgICAgICAgICBzb3VyY2U6IG9yaWdpbmFsLnNvdXJjZSxcbiAgICAgICAgICAgIG9yaWdpbmFsOiB7XG4gICAgICAgICAgICAgIGxpbmU6IG9yaWdpbmFsLmxpbmUsXG4gICAgICAgICAgICAgIGNvbHVtbjogb3JpZ2luYWwuY29sdW1uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2VuZXJhdGVkOiB7XG4gICAgICAgICAgICAgIGxpbmU6IGdlbmVyYXRlZC5saW5lLFxuICAgICAgICAgICAgICBjb2x1bW46IGdlbmVyYXRlZC5jb2x1bW5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuYW1lOiBvcmlnaW5hbC5uYW1lXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdlbmVyYXRlZC5jb2x1bW4rKztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICB0aGlzLndhbGtTb3VyY2VDb250ZW50cyhmdW5jdGlvbiAoc291cmNlRmlsZSwgc291cmNlQ29udGVudCkge1xuICAgIG1hcC5zZXRTb3VyY2VDb250ZW50KHNvdXJjZUZpbGUsIHNvdXJjZUNvbnRlbnQpO1xuICB9KTtcblxuICByZXR1cm4geyBjb2RlOiBnZW5lcmF0ZWQuY29kZSwgbWFwOiBtYXAgfTtcbn07XG5cbmV4cG9ydHMuU291cmNlTm9kZSA9IFNvdXJjZU5vZGU7XG4iLCIvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICovXG5cbi8qKlxuICogVGhpcyBpcyBhIGhlbHBlciBmdW5jdGlvbiBmb3IgZ2V0dGluZyB2YWx1ZXMgZnJvbSBwYXJhbWV0ZXIvb3B0aW9uc1xuICogb2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0gYXJncyBUaGUgb2JqZWN0IHdlIGFyZSBleHRyYWN0aW5nIHZhbHVlcyBmcm9tXG4gKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgd2UgYXJlIGdldHRpbmcuXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIEFuIG9wdGlvbmFsIHZhbHVlIHRvIHJldHVybiBpZiB0aGUgcHJvcGVydHkgaXMgbWlzc2luZ1xuICogZnJvbSB0aGUgb2JqZWN0LiBJZiB0aGlzIGlzIG5vdCBzcGVjaWZpZWQgYW5kIHRoZSBwcm9wZXJ0eSBpcyBtaXNzaW5nLCBhblxuICogZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKi9cbmZ1bmN0aW9uIGdldEFyZyhhQXJncywgYU5hbWUsIGFEZWZhdWx0VmFsdWUpIHtcbiAgaWYgKGFOYW1lIGluIGFBcmdzKSB7XG4gICAgcmV0dXJuIGFBcmdzW2FOYW1lXTtcbiAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgcmV0dXJuIGFEZWZhdWx0VmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdcIicgKyBhTmFtZSArICdcIiBpcyBhIHJlcXVpcmVkIGFyZ3VtZW50LicpO1xuICB9XG59XG5leHBvcnRzLmdldEFyZyA9IGdldEFyZztcblxudmFyIHVybFJlZ2V4cCA9IC9eKD86KFtcXHcrXFwtLl0rKTopP1xcL1xcLyg/OihcXHcrOlxcdyspQCk/KFtcXHcuLV0qKSg/OjooXFxkKykpPyguKikkLztcbnZhciBkYXRhVXJsUmVnZXhwID0gL15kYXRhOi4rXFwsLiskLztcblxuZnVuY3Rpb24gdXJsUGFyc2UoYVVybCkge1xuICB2YXIgbWF0Y2ggPSBhVXJsLm1hdGNoKHVybFJlZ2V4cCk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNjaGVtZTogbWF0Y2hbMV0sXG4gICAgYXV0aDogbWF0Y2hbMl0sXG4gICAgaG9zdDogbWF0Y2hbM10sXG4gICAgcG9ydDogbWF0Y2hbNF0sXG4gICAgcGF0aDogbWF0Y2hbNV1cbiAgfTtcbn1cbmV4cG9ydHMudXJsUGFyc2UgPSB1cmxQYXJzZTtcblxuZnVuY3Rpb24gdXJsR2VuZXJhdGUoYVBhcnNlZFVybCkge1xuICB2YXIgdXJsID0gJyc7XG4gIGlmIChhUGFyc2VkVXJsLnNjaGVtZSkge1xuICAgIHVybCArPSBhUGFyc2VkVXJsLnNjaGVtZSArICc6JztcbiAgfVxuICB1cmwgKz0gJy8vJztcbiAgaWYgKGFQYXJzZWRVcmwuYXV0aCkge1xuICAgIHVybCArPSBhUGFyc2VkVXJsLmF1dGggKyAnQCc7XG4gIH1cbiAgaWYgKGFQYXJzZWRVcmwuaG9zdCkge1xuICAgIHVybCArPSBhUGFyc2VkVXJsLmhvc3Q7XG4gIH1cbiAgaWYgKGFQYXJzZWRVcmwucG9ydCkge1xuICAgIHVybCArPSBcIjpcIiArIGFQYXJzZWRVcmwucG9ydFxuICB9XG4gIGlmIChhUGFyc2VkVXJsLnBhdGgpIHtcbiAgICB1cmwgKz0gYVBhcnNlZFVybC5wYXRoO1xuICB9XG4gIHJldHVybiB1cmw7XG59XG5leHBvcnRzLnVybEdlbmVyYXRlID0gdXJsR2VuZXJhdGU7XG5cbi8qKlxuICogTm9ybWFsaXplcyBhIHBhdGgsIG9yIHRoZSBwYXRoIHBvcnRpb24gb2YgYSBVUkw6XG4gKlxuICogLSBSZXBsYWNlcyBjb25zZWN1dGl2ZSBzbGFzaGVzIHdpdGggb25lIHNsYXNoLlxuICogLSBSZW1vdmVzIHVubmVjZXNzYXJ5ICcuJyBwYXJ0cy5cbiAqIC0gUmVtb3ZlcyB1bm5lY2Vzc2FyeSAnPGRpcj4vLi4nIHBhcnRzLlxuICpcbiAqIEJhc2VkIG9uIGNvZGUgaW4gdGhlIE5vZGUuanMgJ3BhdGgnIGNvcmUgbW9kdWxlLlxuICpcbiAqIEBwYXJhbSBhUGF0aCBUaGUgcGF0aCBvciB1cmwgdG8gbm9ybWFsaXplLlxuICovXG5mdW5jdGlvbiBub3JtYWxpemUoYVBhdGgpIHtcbiAgdmFyIHBhdGggPSBhUGF0aDtcbiAgdmFyIHVybCA9IHVybFBhcnNlKGFQYXRoKTtcbiAgaWYgKHVybCkge1xuICAgIGlmICghdXJsLnBhdGgpIHtcbiAgICAgIHJldHVybiBhUGF0aDtcbiAgICB9XG4gICAgcGF0aCA9IHVybC5wYXRoO1xuICB9XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpO1xuXG4gIHZhciBwYXJ0cyA9IHBhdGguc3BsaXQoL1xcLysvKTtcbiAgZm9yICh2YXIgcGFydCwgdXAgPSAwLCBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBwYXJ0ID0gcGFydHNbaV07XG4gICAgaWYgKHBhcnQgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAocGFydCA9PT0gJy4uJykge1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwID4gMCkge1xuICAgICAgaWYgKHBhcnQgPT09ICcnKSB7XG4gICAgICAgIC8vIFRoZSBmaXJzdCBwYXJ0IGlzIGJsYW5rIGlmIHRoZSBwYXRoIGlzIGFic29sdXRlLiBUcnlpbmcgdG8gZ29cbiAgICAgICAgLy8gYWJvdmUgdGhlIHJvb3QgaXMgYSBuby1vcC4gVGhlcmVmb3JlIHdlIGNhbiByZW1vdmUgYWxsICcuLicgcGFydHNcbiAgICAgICAgLy8gZGlyZWN0bHkgYWZ0ZXIgdGhlIHJvb3QuXG4gICAgICAgIHBhcnRzLnNwbGljZShpICsgMSwgdXApO1xuICAgICAgICB1cCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJ0cy5zcGxpY2UoaSwgMik7XG4gICAgICAgIHVwLS07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHBhdGggPSBwYXJ0cy5qb2luKCcvJyk7XG5cbiAgaWYgKHBhdGggPT09ICcnKSB7XG4gICAgcGF0aCA9IGlzQWJzb2x1dGUgPyAnLycgOiAnLic7XG4gIH1cblxuICBpZiAodXJsKSB7XG4gICAgdXJsLnBhdGggPSBwYXRoO1xuICAgIHJldHVybiB1cmxHZW5lcmF0ZSh1cmwpO1xuICB9XG4gIHJldHVybiBwYXRoO1xufVxuZXhwb3J0cy5ub3JtYWxpemUgPSBub3JtYWxpemU7XG5cbi8qKlxuICogSm9pbnMgdHdvIHBhdGhzL1VSTHMuXG4gKlxuICogQHBhcmFtIGFSb290IFRoZSByb290IHBhdGggb3IgVVJMLlxuICogQHBhcmFtIGFQYXRoIFRoZSBwYXRoIG9yIFVSTCB0byBiZSBqb2luZWQgd2l0aCB0aGUgcm9vdC5cbiAqXG4gKiAtIElmIGFQYXRoIGlzIGEgVVJMIG9yIGEgZGF0YSBVUkksIGFQYXRoIGlzIHJldHVybmVkLCB1bmxlc3MgYVBhdGggaXMgYVxuICogICBzY2hlbWUtcmVsYXRpdmUgVVJMOiBUaGVuIHRoZSBzY2hlbWUgb2YgYVJvb3QsIGlmIGFueSwgaXMgcHJlcGVuZGVkXG4gKiAgIGZpcnN0LlxuICogLSBPdGhlcndpc2UgYVBhdGggaXMgYSBwYXRoLiBJZiBhUm9vdCBpcyBhIFVSTCwgdGhlbiBpdHMgcGF0aCBwb3J0aW9uXG4gKiAgIGlzIHVwZGF0ZWQgd2l0aCB0aGUgcmVzdWx0IGFuZCBhUm9vdCBpcyByZXR1cm5lZC4gT3RoZXJ3aXNlIHRoZSByZXN1bHRcbiAqICAgaXMgcmV0dXJuZWQuXG4gKiAgIC0gSWYgYVBhdGggaXMgYWJzb2x1dGUsIHRoZSByZXN1bHQgaXMgYVBhdGguXG4gKiAgIC0gT3RoZXJ3aXNlIHRoZSB0d28gcGF0aHMgYXJlIGpvaW5lZCB3aXRoIGEgc2xhc2guXG4gKiAtIEpvaW5pbmcgZm9yIGV4YW1wbGUgJ2h0dHA6Ly8nIGFuZCAnd3d3LmV4YW1wbGUuY29tJyBpcyBhbHNvIHN1cHBvcnRlZC5cbiAqL1xuZnVuY3Rpb24gam9pbihhUm9vdCwgYVBhdGgpIHtcbiAgaWYgKGFSb290ID09PSBcIlwiKSB7XG4gICAgYVJvb3QgPSBcIi5cIjtcbiAgfVxuICBpZiAoYVBhdGggPT09IFwiXCIpIHtcbiAgICBhUGF0aCA9IFwiLlwiO1xuICB9XG4gIHZhciBhUGF0aFVybCA9IHVybFBhcnNlKGFQYXRoKTtcbiAgdmFyIGFSb290VXJsID0gdXJsUGFyc2UoYVJvb3QpO1xuICBpZiAoYVJvb3RVcmwpIHtcbiAgICBhUm9vdCA9IGFSb290VXJsLnBhdGggfHwgJy8nO1xuICB9XG5cbiAgLy8gYGpvaW4oZm9vLCAnLy93d3cuZXhhbXBsZS5vcmcnKWBcbiAgaWYgKGFQYXRoVXJsICYmICFhUGF0aFVybC5zY2hlbWUpIHtcbiAgICBpZiAoYVJvb3RVcmwpIHtcbiAgICAgIGFQYXRoVXJsLnNjaGVtZSA9IGFSb290VXJsLnNjaGVtZTtcbiAgICB9XG4gICAgcmV0dXJuIHVybEdlbmVyYXRlKGFQYXRoVXJsKTtcbiAgfVxuXG4gIGlmIChhUGF0aFVybCB8fCBhUGF0aC5tYXRjaChkYXRhVXJsUmVnZXhwKSkge1xuICAgIHJldHVybiBhUGF0aDtcbiAgfVxuXG4gIC8vIGBqb2luKCdodHRwOi8vJywgJ3d3dy5leGFtcGxlLmNvbScpYFxuICBpZiAoYVJvb3RVcmwgJiYgIWFSb290VXJsLmhvc3QgJiYgIWFSb290VXJsLnBhdGgpIHtcbiAgICBhUm9vdFVybC5ob3N0ID0gYVBhdGg7XG4gICAgcmV0dXJuIHVybEdlbmVyYXRlKGFSb290VXJsKTtcbiAgfVxuXG4gIHZhciBqb2luZWQgPSBhUGF0aC5jaGFyQXQoMCkgPT09ICcvJ1xuICAgID8gYVBhdGhcbiAgICA6IG5vcm1hbGl6ZShhUm9vdC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIGFQYXRoKTtcblxuICBpZiAoYVJvb3RVcmwpIHtcbiAgICBhUm9vdFVybC5wYXRoID0gam9pbmVkO1xuICAgIHJldHVybiB1cmxHZW5lcmF0ZShhUm9vdFVybCk7XG4gIH1cbiAgcmV0dXJuIGpvaW5lZDtcbn1cbmV4cG9ydHMuam9pbiA9IGpvaW47XG5cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uIChhUGF0aCkge1xuICByZXR1cm4gYVBhdGguY2hhckF0KDApID09PSAnLycgfHwgdXJsUmVnZXhwLnRlc3QoYVBhdGgpO1xufTtcblxuLyoqXG4gKiBNYWtlIGEgcGF0aCByZWxhdGl2ZSB0byBhIFVSTCBvciBhbm90aGVyIHBhdGguXG4gKlxuICogQHBhcmFtIGFSb290IFRoZSByb290IHBhdGggb3IgVVJMLlxuICogQHBhcmFtIGFQYXRoIFRoZSBwYXRoIG9yIFVSTCB0byBiZSBtYWRlIHJlbGF0aXZlIHRvIGFSb290LlxuICovXG5mdW5jdGlvbiByZWxhdGl2ZShhUm9vdCwgYVBhdGgpIHtcbiAgaWYgKGFSb290ID09PSBcIlwiKSB7XG4gICAgYVJvb3QgPSBcIi5cIjtcbiAgfVxuXG4gIGFSb290ID0gYVJvb3QucmVwbGFjZSgvXFwvJC8sICcnKTtcblxuICAvLyBJdCBpcyBwb3NzaWJsZSBmb3IgdGhlIHBhdGggdG8gYmUgYWJvdmUgdGhlIHJvb3QuIEluIHRoaXMgY2FzZSwgc2ltcGx5XG4gIC8vIGNoZWNraW5nIHdoZXRoZXIgdGhlIHJvb3QgaXMgYSBwcmVmaXggb2YgdGhlIHBhdGggd29uJ3Qgd29yay4gSW5zdGVhZCwgd2VcbiAgLy8gbmVlZCB0byByZW1vdmUgY29tcG9uZW50cyBmcm9tIHRoZSByb290IG9uZSBieSBvbmUsIHVudGlsIGVpdGhlciB3ZSBmaW5kXG4gIC8vIGEgcHJlZml4IHRoYXQgZml0cywgb3Igd2UgcnVuIG91dCBvZiBjb21wb25lbnRzIHRvIHJlbW92ZS5cbiAgdmFyIGxldmVsID0gMDtcbiAgd2hpbGUgKGFQYXRoLmluZGV4T2YoYVJvb3QgKyAnLycpICE9PSAwKSB7XG4gICAgdmFyIGluZGV4ID0gYVJvb3QubGFzdEluZGV4T2YoXCIvXCIpO1xuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIHJldHVybiBhUGF0aDtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgb25seSBwYXJ0IG9mIHRoZSByb290IHRoYXQgaXMgbGVmdCBpcyB0aGUgc2NoZW1lIChpLmUuIGh0dHA6Ly8sXG4gICAgLy8gZmlsZTovLy8sIGV0Yy4pLCBvbmUgb3IgbW9yZSBzbGFzaGVzICgvKSwgb3Igc2ltcGx5IG5vdGhpbmcgYXQgYWxsLCB3ZVxuICAgIC8vIGhhdmUgZXhoYXVzdGVkIGFsbCBjb21wb25lbnRzLCBzbyB0aGUgcGF0aCBpcyBub3QgcmVsYXRpdmUgdG8gdGhlIHJvb3QuXG4gICAgYVJvb3QgPSBhUm9vdC5zbGljZSgwLCBpbmRleCk7XG4gICAgaWYgKGFSb290Lm1hdGNoKC9eKFteXFwvXSs6XFwvKT9cXC8qJC8pKSB7XG4gICAgICByZXR1cm4gYVBhdGg7XG4gICAgfVxuXG4gICAgKytsZXZlbDtcbiAgfVxuXG4gIC8vIE1ha2Ugc3VyZSB3ZSBhZGQgYSBcIi4uL1wiIGZvciBlYWNoIGNvbXBvbmVudCB3ZSByZW1vdmVkIGZyb20gdGhlIHJvb3QuXG4gIHJldHVybiBBcnJheShsZXZlbCArIDEpLmpvaW4oXCIuLi9cIikgKyBhUGF0aC5zdWJzdHIoYVJvb3QubGVuZ3RoICsgMSk7XG59XG5leHBvcnRzLnJlbGF0aXZlID0gcmVsYXRpdmU7XG5cbnZhciBzdXBwb3J0c051bGxQcm90byA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBvYmogPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gISgnX19wcm90b19fJyBpbiBvYmopO1xufSgpKTtcblxuZnVuY3Rpb24gaWRlbnRpdHkgKHMpIHtcbiAgcmV0dXJuIHM7XG59XG5cbi8qKlxuICogQmVjYXVzZSBiZWhhdmlvciBnb2VzIHdhY2t5IHdoZW4geW91IHNldCBgX19wcm90b19fYCBvbiBvYmplY3RzLCB3ZVxuICogaGF2ZSB0byBwcmVmaXggYWxsIHRoZSBzdHJpbmdzIGluIG91ciBzZXQgd2l0aCBhbiBhcmJpdHJhcnkgY2hhcmFjdGVyLlxuICpcbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9zb3VyY2UtbWFwL3B1bGwvMzEgYW5kXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9zb3VyY2UtbWFwL2lzc3Vlcy8zMFxuICpcbiAqIEBwYXJhbSBTdHJpbmcgYVN0clxuICovXG5mdW5jdGlvbiB0b1NldFN0cmluZyhhU3RyKSB7XG4gIGlmIChpc1Byb3RvU3RyaW5nKGFTdHIpKSB7XG4gICAgcmV0dXJuICckJyArIGFTdHI7XG4gIH1cblxuICByZXR1cm4gYVN0cjtcbn1cbmV4cG9ydHMudG9TZXRTdHJpbmcgPSBzdXBwb3J0c051bGxQcm90byA/IGlkZW50aXR5IDogdG9TZXRTdHJpbmc7XG5cbmZ1bmN0aW9uIGZyb21TZXRTdHJpbmcoYVN0cikge1xuICBpZiAoaXNQcm90b1N0cmluZyhhU3RyKSkge1xuICAgIHJldHVybiBhU3RyLnNsaWNlKDEpO1xuICB9XG5cbiAgcmV0dXJuIGFTdHI7XG59XG5leHBvcnRzLmZyb21TZXRTdHJpbmcgPSBzdXBwb3J0c051bGxQcm90byA/IGlkZW50aXR5IDogZnJvbVNldFN0cmluZztcblxuZnVuY3Rpb24gaXNQcm90b1N0cmluZyhzKSB7XG4gIGlmICghcykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBzLmxlbmd0aDtcblxuICBpZiAobGVuZ3RoIDwgOSAvKiBcIl9fcHJvdG9fX1wiLmxlbmd0aCAqLykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChzLmNoYXJDb2RlQXQobGVuZ3RoIC0gMSkgIT09IDk1ICAvKiAnXycgKi8gfHxcbiAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSAyKSAhPT0gOTUgIC8qICdfJyAqLyB8fFxuICAgICAgcy5jaGFyQ29kZUF0KGxlbmd0aCAtIDMpICE9PSAxMTEgLyogJ28nICovIHx8XG4gICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gNCkgIT09IDExNiAvKiAndCcgKi8gfHxcbiAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSA1KSAhPT0gMTExIC8qICdvJyAqLyB8fFxuICAgICAgcy5jaGFyQ29kZUF0KGxlbmd0aCAtIDYpICE9PSAxMTQgLyogJ3InICovIHx8XG4gICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gNykgIT09IDExMiAvKiAncCcgKi8gfHxcbiAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSA4KSAhPT0gOTUgIC8qICdfJyAqLyB8fFxuICAgICAgcy5jaGFyQ29kZUF0KGxlbmd0aCAtIDkpICE9PSA5NSAgLyogJ18nICovKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IGxlbmd0aCAtIDEwOyBpID49IDA7IGktLSkge1xuICAgIGlmIChzLmNoYXJDb2RlQXQoaSkgIT09IDM2IC8qICckJyAqLykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIENvbXBhcmF0b3IgYmV0d2VlbiB0d28gbWFwcGluZ3Mgd2hlcmUgdGhlIG9yaWdpbmFsIHBvc2l0aW9ucyBhcmUgY29tcGFyZWQuXG4gKlxuICogT3B0aW9uYWxseSBwYXNzIGluIGB0cnVlYCBhcyBgb25seUNvbXBhcmVHZW5lcmF0ZWRgIHRvIGNvbnNpZGVyIHR3b1xuICogbWFwcGluZ3Mgd2l0aCB0aGUgc2FtZSBvcmlnaW5hbCBzb3VyY2UvbGluZS9jb2x1bW4sIGJ1dCBkaWZmZXJlbnQgZ2VuZXJhdGVkXG4gKiBsaW5lIGFuZCBjb2x1bW4gdGhlIHNhbWUuIFVzZWZ1bCB3aGVuIHNlYXJjaGluZyBmb3IgYSBtYXBwaW5nIHdpdGggYVxuICogc3R1YmJlZCBvdXQgbWFwcGluZy5cbiAqL1xuZnVuY3Rpb24gY29tcGFyZUJ5T3JpZ2luYWxQb3NpdGlvbnMobWFwcGluZ0EsIG1hcHBpbmdCLCBvbmx5Q29tcGFyZU9yaWdpbmFsKSB7XG4gIHZhciBjbXAgPSBzdHJjbXAobWFwcGluZ0Euc291cmNlLCBtYXBwaW5nQi5zb3VyY2UpO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLm9yaWdpbmFsTGluZSAtIG1hcHBpbmdCLm9yaWdpbmFsTGluZTtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5vcmlnaW5hbENvbHVtbiAtIG1hcHBpbmdCLm9yaWdpbmFsQ29sdW1uO1xuICBpZiAoY21wICE9PSAwIHx8IG9ubHlDb21wYXJlT3JpZ2luYWwpIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gbWFwcGluZ0EuZ2VuZXJhdGVkQ29sdW1uIC0gbWFwcGluZ0IuZ2VuZXJhdGVkQ29sdW1uO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLmdlbmVyYXRlZExpbmUgLSBtYXBwaW5nQi5nZW5lcmF0ZWRMaW5lO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIHJldHVybiBzdHJjbXAobWFwcGluZ0EubmFtZSwgbWFwcGluZ0IubmFtZSk7XG59XG5leHBvcnRzLmNvbXBhcmVCeU9yaWdpbmFsUG9zaXRpb25zID0gY29tcGFyZUJ5T3JpZ2luYWxQb3NpdGlvbnM7XG5cbi8qKlxuICogQ29tcGFyYXRvciBiZXR3ZWVuIHR3byBtYXBwaW5ncyB3aXRoIGRlZmxhdGVkIHNvdXJjZSBhbmQgbmFtZSBpbmRpY2VzIHdoZXJlXG4gKiB0aGUgZ2VuZXJhdGVkIHBvc2l0aW9ucyBhcmUgY29tcGFyZWQuXG4gKlxuICogT3B0aW9uYWxseSBwYXNzIGluIGB0cnVlYCBhcyBgb25seUNvbXBhcmVHZW5lcmF0ZWRgIHRvIGNvbnNpZGVyIHR3b1xuICogbWFwcGluZ3Mgd2l0aCB0aGUgc2FtZSBnZW5lcmF0ZWQgbGluZSBhbmQgY29sdW1uLCBidXQgZGlmZmVyZW50XG4gKiBzb3VyY2UvbmFtZS9vcmlnaW5hbCBsaW5lIGFuZCBjb2x1bW4gdGhlIHNhbWUuIFVzZWZ1bCB3aGVuIHNlYXJjaGluZyBmb3IgYVxuICogbWFwcGluZyB3aXRoIGEgc3R1YmJlZCBvdXQgbWFwcGluZy5cbiAqL1xuZnVuY3Rpb24gY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zRGVmbGF0ZWQobWFwcGluZ0EsIG1hcHBpbmdCLCBvbmx5Q29tcGFyZUdlbmVyYXRlZCkge1xuICB2YXIgY21wID0gbWFwcGluZ0EuZ2VuZXJhdGVkTGluZSAtIG1hcHBpbmdCLmdlbmVyYXRlZExpbmU7XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gbWFwcGluZ0EuZ2VuZXJhdGVkQ29sdW1uIC0gbWFwcGluZ0IuZ2VuZXJhdGVkQ29sdW1uO1xuICBpZiAoY21wICE9PSAwIHx8IG9ubHlDb21wYXJlR2VuZXJhdGVkKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IHN0cmNtcChtYXBwaW5nQS5zb3VyY2UsIG1hcHBpbmdCLnNvdXJjZSk7XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gbWFwcGluZ0Eub3JpZ2luYWxMaW5lIC0gbWFwcGluZ0Iub3JpZ2luYWxMaW5lO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLm9yaWdpbmFsQ29sdW1uIC0gbWFwcGluZ0Iub3JpZ2luYWxDb2x1bW47XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgcmV0dXJuIHN0cmNtcChtYXBwaW5nQS5uYW1lLCBtYXBwaW5nQi5uYW1lKTtcbn1cbmV4cG9ydHMuY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zRGVmbGF0ZWQgPSBjb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNEZWZsYXRlZDtcblxuZnVuY3Rpb24gc3RyY21wKGFTdHIxLCBhU3RyMikge1xuICBpZiAoYVN0cjEgPT09IGFTdHIyKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBpZiAoYVN0cjEgPT09IG51bGwpIHtcbiAgICByZXR1cm4gMTsgLy8gYVN0cjIgIT09IG51bGxcbiAgfVxuXG4gIGlmIChhU3RyMiA9PT0gbnVsbCkge1xuICAgIHJldHVybiAtMTsgLy8gYVN0cjEgIT09IG51bGxcbiAgfVxuXG4gIGlmIChhU3RyMSA+IGFTdHIyKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5cbi8qKlxuICogQ29tcGFyYXRvciBiZXR3ZWVuIHR3byBtYXBwaW5ncyB3aXRoIGluZmxhdGVkIHNvdXJjZSBhbmQgbmFtZSBzdHJpbmdzIHdoZXJlXG4gKiB0aGUgZ2VuZXJhdGVkIHBvc2l0aW9ucyBhcmUgY29tcGFyZWQuXG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0luZmxhdGVkKG1hcHBpbmdBLCBtYXBwaW5nQikge1xuICB2YXIgY21wID0gbWFwcGluZ0EuZ2VuZXJhdGVkTGluZSAtIG1hcHBpbmdCLmdlbmVyYXRlZExpbmU7XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gbWFwcGluZ0EuZ2VuZXJhdGVkQ29sdW1uIC0gbWFwcGluZ0IuZ2VuZXJhdGVkQ29sdW1uO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IHN0cmNtcChtYXBwaW5nQS5zb3VyY2UsIG1hcHBpbmdCLnNvdXJjZSk7XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gbWFwcGluZ0Eub3JpZ2luYWxMaW5lIC0gbWFwcGluZ0Iub3JpZ2luYWxMaW5lO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLm9yaWdpbmFsQ29sdW1uIC0gbWFwcGluZ0Iub3JpZ2luYWxDb2x1bW47XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgcmV0dXJuIHN0cmNtcChtYXBwaW5nQS5uYW1lLCBtYXBwaW5nQi5uYW1lKTtcbn1cbmV4cG9ydHMuY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zSW5mbGF0ZWQgPSBjb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNJbmZsYXRlZDtcblxuLyoqXG4gKiBTdHJpcCBhbnkgSlNPTiBYU1NJIGF2b2lkYW5jZSBwcmVmaXggZnJvbSB0aGUgc3RyaW5nIChhcyBkb2N1bWVudGVkXG4gKiBpbiB0aGUgc291cmNlIG1hcHMgc3BlY2lmaWNhdGlvbiksIGFuZCB0aGVuIHBhcnNlIHRoZSBzdHJpbmcgYXNcbiAqIEpTT04uXG4gKi9cbmZ1bmN0aW9uIHBhcnNlU291cmNlTWFwSW5wdXQoc3RyKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKHN0ci5yZXBsYWNlKC9eXFwpXX0nW15cXG5dKlxcbi8sICcnKSk7XG59XG5leHBvcnRzLnBhcnNlU291cmNlTWFwSW5wdXQgPSBwYXJzZVNvdXJjZU1hcElucHV0O1xuXG4vKipcbiAqIENvbXB1dGUgdGhlIFVSTCBvZiBhIHNvdXJjZSBnaXZlbiB0aGUgdGhlIHNvdXJjZSByb290LCB0aGUgc291cmNlJ3NcbiAqIFVSTCwgYW5kIHRoZSBzb3VyY2UgbWFwJ3MgVVJMLlxuICovXG5mdW5jdGlvbiBjb21wdXRlU291cmNlVVJMKHNvdXJjZVJvb3QsIHNvdXJjZVVSTCwgc291cmNlTWFwVVJMKSB7XG4gIHNvdXJjZVVSTCA9IHNvdXJjZVVSTCB8fCAnJztcblxuICBpZiAoc291cmNlUm9vdCkge1xuICAgIC8vIFRoaXMgZm9sbG93cyB3aGF0IENocm9tZSBkb2VzLlxuICAgIGlmIChzb3VyY2VSb290W3NvdXJjZVJvb3QubGVuZ3RoIC0gMV0gIT09ICcvJyAmJiBzb3VyY2VVUkxbMF0gIT09ICcvJykge1xuICAgICAgc291cmNlUm9vdCArPSAnLyc7XG4gICAgfVxuICAgIC8vIFRoZSBzcGVjIHNheXM6XG4gICAgLy8gICBMaW5lIDQ6IEFuIG9wdGlvbmFsIHNvdXJjZSByb290LCB1c2VmdWwgZm9yIHJlbG9jYXRpbmcgc291cmNlXG4gICAgLy8gICBmaWxlcyBvbiBhIHNlcnZlciBvciByZW1vdmluZyByZXBlYXRlZCB2YWx1ZXMgaW4gdGhlXG4gICAgLy8gICDigJxzb3VyY2Vz4oCdIGVudHJ5LiAgVGhpcyB2YWx1ZSBpcyBwcmVwZW5kZWQgdG8gdGhlIGluZGl2aWR1YWxcbiAgICAvLyAgIGVudHJpZXMgaW4gdGhlIOKAnHNvdXJjZeKAnSBmaWVsZC5cbiAgICBzb3VyY2VVUkwgPSBzb3VyY2VSb290ICsgc291cmNlVVJMO1xuICB9XG5cbiAgLy8gSGlzdG9yaWNhbGx5LCBTb3VyY2VNYXBDb25zdW1lciBkaWQgbm90IHRha2UgdGhlIHNvdXJjZU1hcFVSTCBhc1xuICAvLyBhIHBhcmFtZXRlci4gIFRoaXMgbW9kZSBpcyBzdGlsbCBzb21ld2hhdCBzdXBwb3J0ZWQsIHdoaWNoIGlzIHdoeVxuICAvLyB0aGlzIGNvZGUgYmxvY2sgaXMgY29uZGl0aW9uYWwuICBIb3dldmVyLCBpdCdzIHByZWZlcmFibGUgdG8gcGFzc1xuICAvLyB0aGUgc291cmNlIG1hcCBVUkwgdG8gU291cmNlTWFwQ29uc3VtZXIsIHNvIHRoYXQgdGhpcyBmdW5jdGlvblxuICAvLyBjYW4gaW1wbGVtZW50IHRoZSBzb3VyY2UgVVJMIHJlc29sdXRpb24gYWxnb3JpdGhtIGFzIG91dGxpbmVkIGluXG4gIC8vIHRoZSBzcGVjLiAgVGhpcyBibG9jayBpcyBiYXNpY2FsbHkgdGhlIGVxdWl2YWxlbnQgb2Y6XG4gIC8vICAgIG5ldyBVUkwoc291cmNlVVJMLCBzb3VyY2VNYXBVUkwpLnRvU3RyaW5nKClcbiAgLy8gLi4uIGV4Y2VwdCBpdCBhdm9pZHMgdXNpbmcgVVJMLCB3aGljaCB3YXNuJ3QgYXZhaWxhYmxlIGluIHRoZVxuICAvLyBvbGRlciByZWxlYXNlcyBvZiBub2RlIHN0aWxsIHN1cHBvcnRlZCBieSB0aGlzIGxpYnJhcnkuXG4gIC8vXG4gIC8vIFRoZSBzcGVjIHNheXM6XG4gIC8vICAgSWYgdGhlIHNvdXJjZXMgYXJlIG5vdCBhYnNvbHV0ZSBVUkxzIGFmdGVyIHByZXBlbmRpbmcgb2YgdGhlXG4gIC8vICAg4oCcc291cmNlUm9vdOKAnSwgdGhlIHNvdXJjZXMgYXJlIHJlc29sdmVkIHJlbGF0aXZlIHRvIHRoZVxuICAvLyAgIFNvdXJjZU1hcCAobGlrZSByZXNvbHZpbmcgc2NyaXB0IHNyYyBpbiBhIGh0bWwgZG9jdW1lbnQpLlxuICBpZiAoc291cmNlTWFwVVJMKSB7XG4gICAgdmFyIHBhcnNlZCA9IHVybFBhcnNlKHNvdXJjZU1hcFVSTCk7XG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInNvdXJjZU1hcFVSTCBjb3VsZCBub3QgYmUgcGFyc2VkXCIpO1xuICAgIH1cbiAgICBpZiAocGFyc2VkLnBhdGgpIHtcbiAgICAgIC8vIFN0cmlwIHRoZSBsYXN0IHBhdGggY29tcG9uZW50LCBidXQga2VlcCB0aGUgXCIvXCIuXG4gICAgICB2YXIgaW5kZXggPSBwYXJzZWQucGF0aC5sYXN0SW5kZXhPZignLycpO1xuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgcGFyc2VkLnBhdGggPSBwYXJzZWQucGF0aC5zdWJzdHJpbmcoMCwgaW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc291cmNlVVJMID0gam9pbih1cmxHZW5lcmF0ZShwYXJzZWQpLCBzb3VyY2VVUkwpO1xuICB9XG5cbiAgcmV0dXJuIG5vcm1hbGl6ZShzb3VyY2VVUkwpO1xufVxuZXhwb3J0cy5jb21wdXRlU291cmNlVVJMID0gY29tcHV0ZVNvdXJjZVVSTDtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAwOS0yMDExIE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRS50eHQgb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cbmV4cG9ydHMuU291cmNlTWFwR2VuZXJhdG9yID0gcmVxdWlyZSgnLi9saWIvc291cmNlLW1hcC1nZW5lcmF0b3InKS5Tb3VyY2VNYXBHZW5lcmF0b3I7XG5leHBvcnRzLlNvdXJjZU1hcENvbnN1bWVyID0gcmVxdWlyZSgnLi9saWIvc291cmNlLW1hcC1jb25zdW1lcicpLlNvdXJjZU1hcENvbnN1bWVyO1xuZXhwb3J0cy5Tb3VyY2VOb2RlID0gcmVxdWlyZSgnLi9saWIvc291cmNlLW5vZGUnKS5Tb3VyY2VOb2RlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMzgwNF9fOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzI1NDlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzQwNzhfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzM3NDVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzI0MzlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oOTgyMCk7XG4iXSwic291cmNlUm9vdCI6IiJ9