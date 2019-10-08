"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "PageHeaderWrapper", {
  enumerable: true,
  get: function get() {
    return _PageHeaderWrapper.default;
  }
});
Object.defineProperty(exports, "getMenuData", {
  enumerable: true,
  get: function get() {
    return _getMenuData.default;
  }
});
Object.defineProperty(exports, "DefaultHeader", {
  enumerable: true,
  get: function get() {
    return _Header.default;
  }
});
Object.defineProperty(exports, "DefaultFooter", {
  enumerable: true,
  get: function get() {
    return _Footer.default;
  }
});
Object.defineProperty(exports, "getPageTitle", {
  enumerable: true,
  get: function get() {
    return _getPageTitle.default;
  }
});
exports.default = void 0;

var _BasicLayout = _interopRequireDefault(require("./BasicLayout"));

var _PageHeaderWrapper = _interopRequireDefault(require("./PageHeaderWrapper"));

var _getMenuData = _interopRequireDefault(require("./utils/getMenuData"));

var _Header = _interopRequireDefault(require("./Header"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _getPageTitle = _interopRequireDefault(require("./getPageTitle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _BasicLayout.default;
exports.default = _default;