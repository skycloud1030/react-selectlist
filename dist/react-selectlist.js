(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("ReactSelectlist", ["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactSelectlist"] = factory(require("react"));
	else
		root["ReactSelectlist"] = factory(root["react"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactSelectlist = __webpack_require__(1);

Object.defineProperty(exports, 'ReactSelectList', {
  enumerable: true,
  get: function get() {
    return _reactSelectlist.ReactSelectList;
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactSelectList = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _math = __webpack_require__(3);

var _ = _interopRequireWildcard(_math);

var _shallowEqual = __webpack_require__(4);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* react-selectlist.jsx*/
var ReactSelectList = exports.ReactSelectList = function (_React$PureComponent) {
  _inherits(ReactSelectList, _React$PureComponent);

  function ReactSelectList(props) {
    _classCallCheck(this, ReactSelectList);

    var _this = _possibleConstructorReturn(this, (ReactSelectList.__proto__ || Object.getPrototypeOf(ReactSelectList)).call(this, props));

    _initialiseProps.call(_this);

    _this.data = _this.props.data;
    _this.value = _this.props.value;
    _this._getDefaultSet(_this.props);
    _this.state = _extends({}, _this.props, { id: _.radomString() });
    return _this;
  }

  _createClass(ReactSelectList, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _shallowEqual2.default)(this.props, nextProps)) {
        this.data = nextProps.data;
        this.value = nextProps.value;
        this._getDefaultSet(nextProps);
        this.setState({ data: this.data });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style;

      return _react2.default.createElement(
        "span",
        { className: className, style: style },
        this._createBox()
      );
    }
  }]);

  return ReactSelectList;
}(_react2.default.PureComponent);

ReactSelectList.defaultProps = {
  data: [],
  orientation: "horizontal",
  valueField: "value",
  textField: "label",
  multiple: false,
  value: "",
  disabled: [],
  onChange: function onChange() {}
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this._getDefaultSet = function (props) {
    var valueField = props.valueField,
        multiple = props.multiple;

    var value = _this2.value;
    if (multiple) {
      _this2.data.map(function (item) {
        if (_.isArray(value)) {
          item.checked = value.includes(item[valueField]) ? true : false;
        } else {
          item.checked = item[valueField] == value ? true : false;
        }
      });
    } else {
      if (_.isArray(value)) {
        value = _.last(value);
      }
      _this2.data.map(function (item) {
        item.checked = item[valueField] == value ? true : false;
      });
    }
  };

  this._getCheck = function () {
    var _props2 = _this2.props,
        multiple = _props2.multiple,
        valueField = _props2.valueField;
    var data = _this2.state.data;

    if (multiple) {
      var checked = data.filter(function (item) {
        return item.checked;
      }).map(function (item) {
        return item[valueField];
      });
      return checked;
    } else {
      return _this2.value;
    }
  };

  this._handleChange = function (index, event) {
    _this2.value = event.target.value.toString();
    var data = _this2._genCheckedList(index);
    _this2.setState({ data: data });
    _this2.props.onChange(_this2._getCheck());
  };

  this._genCheckedList = function (selectedIndex) {
    var multiple = _this2.props.multiple;

    var data = _this2.data;
    if (multiple) {
      // mutiple checked
      data[selectedIndex].checked = !data[selectedIndex].checked;
    } else {
      //single checked
      data.map(function (item) {
        item.checked = false;
      });
      data[selectedIndex].checked = true;
    }
    return data;
  };

  this._createBox = function () {
    var _state = _this2.state,
        data = _state.data,
        textField = _state.textField,
        valueField = _state.valueField,
        id = _state.id;
    var _props3 = _this2.props,
        disabled = _props3.disabled,
        multiple = _props3.multiple,
        orientation = _props3.orientation,
        className = _props3.className;

    var selectType = multiple ? "checkbox" : "radio";
    var style = orientation === "horizontal" ? { display: "inline-block" } : { display: "block" };
    style = _extends({}, _this2.props.style, style);

    var row = data.map(function (item, index) {
      return _react2.default.createElement(
        "span",
        { key: index, style: style },
        _react2.default.createElement("input", {
          id: id + "_" + index,
          checked: item["checked"],
          name: id + "_" + index,
          onChange: _this2._handleChange.bind(_this2, index),
          type: selectType,
          value: item[valueField],
          disabled: disabled[index]
        }),
        _react2.default.createElement(
          "label",
          { htmlFor: id + "_" + index },
          item[textField]
        )
      );
    });
    return row;
  };
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.last = last;
exports.radomString = radomString;
var isArray = exports.isArray = Array.isArray;
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}
function radomString() {
  return Math.random().toString(36).substring(2, 15);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ })
/******/ ]);
});