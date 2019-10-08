"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultCollapsedSubMenus = exports.getMenuMatches = exports.getFlatMenuKeys = void 0;

var _pathToRegexp = _interopRequireDefault(require("path-to-regexp"));

var _pathTools = require("../utils/pathTools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var getFlatMenuKeys = function getFlatMenuKeys() {
  var menuData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var keys = [];
  menuData.forEach(function (item) {
    if (!item) {
      return;
    }

    keys.push(item.path);

    if (item.children) {
      keys = keys.concat(getFlatMenuKeys(item.children));
    }
  });
  return keys;
};

exports.getFlatMenuKeys = getFlatMenuKeys;

var getMenuMatches = function getMenuMatches() {
  var flatMenuKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var path = arguments.length > 1 ? arguments[1] : undefined;
  return flatMenuKeys.filter(function (item) {
    return item && (0, _pathToRegexp.default)(item).test(path);
  });
};
/**
 * 获得菜单子节点
 */


exports.getMenuMatches = getMenuMatches;

var getDefaultCollapsedSubMenus = function getDefaultCollapsedSubMenus(props) {
  var _props$location = props.location,
      location = _props$location === void 0 ? {
    pathname: '/'
  } : _props$location,
      flatMenuKeys = props.flatMenuKeys;
  return (0, _pathTools.urlToList)(location.pathname).map(function (item) {
    return getMenuMatches(flatMenuKeys, item)[0];
  }).filter(function (item) {
    return item;
  }).reduce(function (acc, curr) {
    return [].concat(_toConsumableArray(acc), [curr]);
  }, '/');
};

exports.getDefaultCollapsedSubMenus = getDefaultCollapsedSubMenus;