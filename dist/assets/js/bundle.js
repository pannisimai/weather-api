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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scss/styles.scss */ "./src/assets/scss/styles.scss");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Forecast =
/*#__PURE__*/
function () {
  function Forecast(latitude, longitude) {
    _classCallCheck(this, Forecast);

    this.latitude = latitude;
    this.longitude = longitude;
    this.render();
  }

  _createClass(Forecast, [{
    key: "render",
    value: function render() {
      var _this = this;

      var ApiUrl = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4c6058309d7af063459dd16dc8b101b8/52.520008,13.404954?units=si";
      fetch(ApiUrl).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this.data = data;
        console.log(_this.data);

        _this.print(data);
      }).catch(function (err) {
        return console.log("oh no!! ".concat(err));
      });
    }
  }, {
    key: "icons",
    value: function icons(currentlyIcon) {
      switch (currentlyIcon) {
        case "snow":
          return "<i class=\"icon fas fa-snowman\"></i>";
          break;

        case "clear-day":
          return "<i class=\"icon fas fa-sun\"></i>";
          break;

        case "clear-night":
          return "<i class=\"icon fas fa-moon\"></i>";
          break;

        case "rain":
          return "<i class=\"icon fas fa-cloud-showers-heavy\"></i>";
          break;

        case "sleet":
          return "<i class=\"icon fas fa-snowflake\"></i>";
          break;

        case "wind":
          return "<i class=\"icon fas fa-wind\"></i> ";
          break;

        case "fog":
          return "<i class=\"icon fas fa-smog\"></i>";
          break;

        case "cloudy":
          return "<i class=\"icon fas fa-cloud\"></i>";
          break;

        case "partly-cloudy-day":
          return "<i class=\"icon fas fa-cloud-sun\"></i>";
          break;

        case "partly-cloudy-night":
          return "<i class=\"icon fas fa-wind\"></i>";
          break;
      }
    }
  }, {
    key: "print",
    value: function print() {
      //cards
      var description = document.querySelector(".lead");
      var _this$data = this.data,
          currently = _this$data.currently,
          daily = _this$data.daily;
      var currentlySummary = currently.summary,
          currentlyIcon = currently.icon,
          temperature = currently.temperature,
          windSpeed = currently.windSpeed;
      var dailySummary = daily.summary,
          dailyIcon = daily.icon,
          data = daily.data;
      var summary = data.summary,
          icon = data.icon,
          sunriseTime = data.sunriseTime,
          sunsetTime = data.sunsetTime,
          moonPhase = data.moonPhase;
      var content = "\n    <div class=\"icon\">".concat(this.icons(currentlyIcon), "</div>\n    <p>").concat(currentlySummary, "</p>\n    <p class=\"temp\">").concat(temperature.toFixed(0), " \xB0C</p>\n    <h6>").concat(dailySummary, "</h6>\n    ");
      description.innerHTML = content;
    }
  }]);

  return Forecast;
}();

var BerlinWeather = new Forecast("52.520008", "13.404954");

var Forecast2 =
/*#__PURE__*/
function () {
  function Forecast2(latitude, longitude) {
    _classCallCheck(this, Forecast2);

    this.latitude = latitude;
    this.longitude = longitude;
    this.render();
  }

  _createClass(Forecast2, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var ApiUrl = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4c6058309d7af063459dd16dc8b101b8/".concat(this.latitude, ",").concat(this.longitude);
      fetch(ApiUrl).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.data = data;
        console.log(_this2.data);

        _this2.print(data);
      }).catch(function (err) {
        return console.log("oh no!! ".concat(err));
      });
    }
  }, {
    key: "icons",
    value: function icons(currentlyIcon) {
      switch (currentlyIcon) {
        case "snow":
          return "<i class=\"fas fa-snowman\"></i>";
          break;

        case "clear-day":
          return "<i class=\"fas fa-sun\"></i>";
          break;

        case "clear-night":
          return "<i class=\"fas fa-moon\"></i>";
          break;

        case "rain":
          return "<i class=\"fas fa-cloud-showers-heavy\"></i>";
          break;

        case "sleet":
          return "<i class=\"fas fa-snowflake\"></i>";
          break;

        case "wind":
          return "<i class=\"fas fa-wind\"></i> ";
          break;

        case "fog":
          return "<i class=\"fas fa-smog\"></i>";
          break;

        case "cloudy":
          return "<i class=\"fas fa-cloud\"></i>";
          break;

        case "partly-cloudy-day":
          return "<i class=\"fas fa-cloud-sun\"></i>";
          break;

        case "partly-cloudy-night":
          return "<i class=\"fas fa-wind\"></i>";
          break;
      }
    }
  }, {
    key: "print",
    value: function print() {
      //cards
      var description = document.querySelector("#londoncard");
      var _this$data2 = this.data,
          currently = _this$data2.currently,
          daily = _this$data2.daily;
      var currentlySummary = currently.summary,
          currentlyIcon = currently.icon,
          temperature = currently.temperature,
          windSpeed = currently.windSpeed;
      var dailySummary = daily.summary,
          dailyIcon = daily.icon,
          data = daily.data;
      var summary = data.summary,
          icon = data.icon,
          sunriseTime = data.sunriseTime,
          sunsetTime = data.sunsetTime,
          moonPhase = data.moonPhase;
      var content = "<p>".concat(currentlySummary, "</p>\n    <p>").concat(this.icons(currentlyIcon), "</p>\n    <p>").concat((5 / 9 * (temperature - 32)).toFixed(0), " \xB0C</p>\n    ");
      description.innerHTML = content;
    }
  }]);

  return Forecast2;
}();

var LondonWeather = new Forecast2("51.509865", "-0.118092");

var Forecast3 =
/*#__PURE__*/
function () {
  function Forecast3(latitude, longitude) {
    _classCallCheck(this, Forecast3);

    this.latitude = latitude;
    this.longitude = longitude;
    this.render();
  }

  _createClass(Forecast3, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var ApiUrl = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4c6058309d7af063459dd16dc8b101b8/".concat(this.latitude, ",").concat(this.longitude);
      fetch(ApiUrl).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this3.data = data;
        console.log(_this3.data);

        _this3.print(data);
      }).catch(function (err) {
        return console.log("oh no!! ".concat(err));
      });
    }
  }, {
    key: "icons",
    value: function icons(currentlyIcon) {
      switch (currentlyIcon) {
        case "snow":
          return "<i class=\"fas fa-snowman\"></i>";
          break;

        case "clear-day":
          return "<i class=\"fas fa-sun\"></i>";
          break;

        case "clear-night":
          return "<i class=\"fas fa-moon\"></i>";
          break;

        case "rain":
          return "<i class=\"fas fa-cloud-showers-heavy\"></i>";
          break;

        case "sleet":
          return "<i class=\"fas fa-snowflake\"></i>";
          break;

        case "wind":
          return "<i class=\"fas fa-wind\"></i> ";
          break;

        case "fog":
          return "<i class=\"fas fa-smog\"></i>";
          break;

        case "cloudy":
          return "<i class=\"fas fa-cloud\"></i>";
          break;

        case "partly-cloudy-day":
          return "<i class=\"fas fa-cloud-sun\"></i>";
          break;

        case "partly-cloudy-night":
          return "<i class=\"fas fa-wind\"></i>";
          break;
      }
    }
  }, {
    key: "print",
    value: function print() {
      //cards
      var description = document.querySelector("#budapestcard");
      var _this$data3 = this.data,
          currently = _this$data3.currently,
          daily = _this$data3.daily;
      var currentlySummary = currently.summary,
          currentlyIcon = currently.icon,
          temperature = currently.temperature,
          windSpeed = currently.windSpeed;
      var dailySummary = daily.summary,
          dailyIcon = daily.icon,
          data = daily.data;
      var summary = data.summary,
          icon = data.icon,
          sunriseTime = data.sunriseTime,
          sunsetTime = data.sunsetTime,
          moonPhase = data.moonPhase;
      var content = "<p>".concat(currentlySummary, "</p>\n    <p>").concat(this.icons(currentlyIcon), "</p>\n    <p>").concat((5 / 9 * (temperature - 32)).toFixed(0), " \xB0C</p>\n    ");
      description.innerHTML = content;
    }
  }]);

  return Forecast3;
}();

var BudapestWeather = new Forecast3("47.4979", "19.0402");

var Forecast4 =
/*#__PURE__*/
function () {
  function Forecast4(latitude, longitude) {
    _classCallCheck(this, Forecast4);

    this.latitude = latitude;
    this.longitude = longitude;
    this.render();
  }

  _createClass(Forecast4, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var ApiUrl = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4c6058309d7af063459dd16dc8b101b8/".concat(this.latitude, ",").concat(this.longitude, "?units=si");
      fetch(ApiUrl).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this4.data = data;
        console.log(_this4.data);

        _this4.print(data);
      }).catch(function (err) {
        return console.log("oh no!! ".concat(err));
      });
    }
  }, {
    key: "icons",
    value: function icons(currentlyIcon) {
      switch (currentlyIcon) {
        case "snow":
          return "<i class=\"fas fa-snowman\"></i>";
          break;

        case "clear-day":
          return "<i class=\"fas fa-sun\"></i>";
          break;

        case "clear-night":
          return "<i class=\"fas fa-moon\"></i>";
          break;

        case "rain":
          return "<i class=\"fas fa-cloud-showers-heavy\"></i>";
          break;

        case "sleet":
          return "<i class=\"fas fa-snowflake\"></i>";
          break;

        case "wind":
          return "<i class=\"fas fa-wind\"></i> ";
          break;

        case "fog":
          return "<i class=\"fas fa-smog\"></i>";
          break;

        case "cloudy":
          return "<i class=\"fas fa-cloud\"></i>";
          break;

        case "partly-cloudy-day":
          return "<i class=\"fas fa-cloud-sun\"></i>";
          break;

        case "partly-cloudy-night":
          return "<i class=\"fas fa-wind\"></i>";
          break;
      }
    }
  }, {
    key: "print",
    value: function print() {
      //cards
      var description = document.querySelector("#lacard");
      var _this$data4 = this.data,
          currently = _this$data4.currently,
          daily = _this$data4.daily;
      var currentlySummary = currently.summary,
          currentlyIcon = currently.icon,
          temperature = currently.temperature,
          windSpeed = currently.windSpeed;
      var dailySummary = daily.summary,
          dailyIcon = daily.icon,
          data = daily.data;
      var summary = data.summary,
          icon = data.icon,
          sunriseTime = data.sunriseTime,
          sunsetTime = data.sunsetTime,
          moonPhase = data.moonPhase;
      var content = "<p>".concat(currentlySummary, "</p>\n    <p>").concat(this.icons(currentlyIcon), "</p>\n    <p>").concat(temperature.toFixed(0), " \xB0C</p>\n    ");
      description.innerHTML = content;
    }
  }]);

  return Forecast4;
}();

var LAWeather = new Forecast4("34.0522", "118.2437");

/***/ }),

/***/ "./src/assets/scss/styles.scss":
/*!*************************************!*\
  !*** ./src/assets/scss/styles.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map