(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("ReactSelectlist", ["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactSelectlist"] = factory(require("react"));
	else
		root["ReactSelectlist"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactSelectList = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _just = __webpack_require__(4);

var _just2 = _interopRequireDefault(_just);

var _math = __webpack_require__(1);

var _ = _interopRequireWildcard(_math);

var _shallowEqual = __webpack_require__(3);

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
    _this.state = _extends({}, _this.props, { id: (0, _just2.default)(7) });
    return _this;
  }

  _createClass(ReactSelectList, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _shallowEqual2.default)(this.props, nextProps)) {
        this.data = nextProps.data;
        this.value = nextProps.value;
        this._getDefaultSet(nextProps);
        this.setState({ data: this.data });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          data = _state.data,
          textField = _state.textField,
          valueField = _state.valueField,
          id = _state.id;
      var _props = this.props,
          disabled = _props.disabled,
          multiple = _props.multiple,
          orientation = _props.orientation,
          className = _props.className;

      var selectType = multiple ? "checkbox" : "radio";
      var style = orientation === "horizontal" ? { display: "inline-block" } : { display: "block" };
      style = _extends({}, this.props.style, style);

      var row = data.map(function (item, index) {
        return _react2.default.createElement(
          'span',
          { key: index, style: style },
          _react2.default.createElement('input', {
            id: id + '_' + index,
            checked: item["checked"],
            name: id + '_' + index,
            onChange: _this2._handleChange.bind(_this2, index),
            type: selectType,
            value: item[valueField],
            disabled: disabled[index]
          }),
          _react2.default.createElement(
            'label',
            { htmlFor: id + '_' + index },
            item[textField]
          )
        );
      });
      return _react2.default.createElement(
        'span',
        { className: className },
        row
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
  var _this3 = this;

  this._getDefaultSet = function (props) {
    var valueField = props.valueField,
        multiple = props.multiple;

    var value = _this3.value;
    if (multiple) {
      _this3.data.map(function (item, index) {
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
      _this3.data.map(function (item, index) {
        item.checked = item[valueField] == value ? true : false;
      });
    }
  };

  this._getCheck = function () {
    var _props2 = _this3.props,
        multiple = _props2.multiple,
        valueField = _props2.valueField;
    var data = _this3.state.data;


    var checked = void 0;
    if (multiple) {
      checked = data.filter(function (item) {
        return item.checked;
      }).map(function (item) {
        return item[valueField];
      });
      return checked;
    } else {
      return _this3.value;
    }
  };

  this._handleChange = function (index, event) {
    _this3.value = event.target.value.toString();
    var data = _this3._genCheckedList(index);
    _this3.setState({ data: data });
    _this3.props.onChange(_this3._getCheck());
  };

  this._genCheckedList = function (selectedIndex) {
    var multiple = _this3.props.multiple;

    if (multiple) {
      // mutiple checked
      var data = _this3.data;
      if (_.isUndefined(data[selectedIndex].checked)) {
        data[selectedIndex].checked = true;
      } else {
        data[selectedIndex].checked = !data[selectedIndex].checked;
      }
      return data;
    } else {
      //single checked
      var _data = _this3.data.map(function (item, index) {
        item.checked = index == selectedIndex ? true : false;
      });
      return _data;
    }
  };
};

;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isUndefined = isUndefined;
exports.last = last;
var isArray = exports.isArray = Array.isArray;

function isUndefined(value) {
    return value === undefined;
}
function last(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : undefined;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactSelectlist = __webpack_require__(0);

Object.defineProperty(exports, 'ReactSelectList', {
  enumerable: true,
  get: function get() {
    return _reactSelectlist.ReactSelectList;
  }
});

/***/ }),
/* 3 */
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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * just namespace
 * @type {[type]}
 */
var just = just || {};

/**
 * Random string generator
 *
 * can be used on node.js or client side
 *
 * type can be numbers, uppercases, lowercases or combination
 * of those separated with _
 *
 * examples:
 * var rs = randomstring(); // returns "ElZOtlOSLn49GeKLev2O"
 * var rs = randomstring(20, 'numbers'); // returns "78394850802905961074"
 * var rs = randomstring(15, 'numbers_uppercases'); // returns "PXL3AE2USI7ZDQ2"
 * 
 * @param  {int} len length of generated string
 * @param  {string} type type of charachters in string
 * @return {string}
 */
just.randomstring = function (len, type) {

    len = len || 20;
    type = type || 'numbers_uppercases_lowercases';

    var strings = {
            numbers: '0123456789',
            uppercases: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            lowercases: 'abcdefghiklmnopqrstuvwxyz'
        },
        choise = '',
        ret = '',
        types = type.split('_'),
        i;

    for (i = 0; i < types.length; i++) {
        if (strings[types[i]]) {
            choise += strings[types[i]];
        }
    }

    if (!choise) {
        choise = strings.numbers + strings.lowercases + strings.uppercases;
    }

    for (i = 0; i < len; i++) {
        ret +=  choise[Math.floor(Math.random() * choise.length)];
    }

    return ret;

};

/**
 * Return array of random strings
 *
 * first param is length of array, other params are the 
 * same as for randomstring(len, type)
 * 
 * @param  {int} arrayLen
 * @param  {int} len
 * @param  {string} type
 * @return {array}
 */
just.randomstring.array = function (arrayLen, len, type) {

    arrayLen = arrayLen || 5;

    var ret = [],
        i;

    for (i = 0; i < arrayLen; i++) {
        ret.push(this(len, type));
    }

    return ret;

};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = just.randomstring;
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ })
/******/ ]);
});