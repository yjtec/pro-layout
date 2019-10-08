function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import pathToRegexp from 'path-to-regexp';
import { urlToList } from '../utils/pathTools';
export var getFlatMenuKeys = function getFlatMenuKeys() {
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
export var getMenuMatches = function getMenuMatches() {
  var flatMenuKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var path = arguments.length > 1 ? arguments[1] : undefined;
  return flatMenuKeys.filter(function (item) {
    return item && pathToRegexp(item).test(path);
  });
};
/**
 * 获得菜单子节点
 */

export var getDefaultCollapsedSubMenus = function getDefaultCollapsedSubMenus(props) {
  var _props$location = props.location,
      location = _props$location === void 0 ? {
    pathname: '/'
  } : _props$location,
      flatMenuKeys = props.flatMenuKeys;
  return urlToList(location.pathname).map(function (item) {
    return getMenuMatches(flatMenuKeys, item)[0];
  }).filter(function (item) {
    return item;
  }).reduce(function (acc, curr) {
    return [].concat(_toConsumableArray(acc), [curr]);
  }, '/');
};