"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Conversion router to menu.
function formatter(props) {
  var data = props.data,
      menu = props.menu,
      formatMessage = props.formatMessage,
      authority = props.authority,
      parentName = props.parentName;
  return data.filter(function (item) {
    return item && item.name && item.path;
  }).map(function () {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      path: ''
    };

    if (!item.name) {
      return item;
    }

    var name = item.name;
    var locale = "".concat(parentName || 'menu', ".").concat(name); // if enableMenuLocale use item.name,
    // close menu international

    var localeName = menu.locale || !formatMessage ? name : formatMessage({
      id: locale,
      defaultMessage: name
    });

    var result = _objectSpread({}, item, {
      name: localeName,
      locale: locale,
      routes: null
    });

    if (item.routes) {
      var children = formatter(_objectSpread({}, props, {
        authority: item.authority || authority,
        data: item.routes,
        parentName: locale
      })); // Reduce memory usage

      result.children = children;
    }

    return result;
  });
}

var memoizeOneFormatter = (0, _memoizeOne.default)(formatter, _isEqual.default);
/**
 * filter menuData
 */

var defaultFilterMenuData = function defaultFilterMenuData() {
  var menuData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return menuData.filter(function (item) {
    return item && item.name && !item.hideInMenu;
  }).map(function (item) {
    if (item.children && Array.isArray(item.children) && !item.hideChildrenInMenu && item.children.some(function (child) {
      return child && !!child.name;
    })) {
      var children = defaultFilterMenuData(item.children);
      if (children.length) return _objectSpread({}, item, {
        children: children
      });
    }

    return _objectSpread({}, item, {
      children: undefined
    });
  }).filter(function (item) {
    return item;
  });
};
/**
 * 获取面包屑映射
 * @param MenuDataItem[] menuData 菜单配置
 */


var getBreadcrumbNameMap = function getBreadcrumbNameMap(menuData) {
  var routerMap = {};

  var flattenMenuData = function flattenMenuData(data) {
    data.forEach(function (menuItem) {
      if (!menuItem) {
        return;
      }

      if (menuItem && menuItem.children) {
        flattenMenuData(menuItem.children);
      } // Reduce memory usage


      routerMap[menuItem.path] = menuItem;
    });
  };

  flattenMenuData(menuData);
  return routerMap;
};

var memoizeOneGetBreadcrumbNameMap = (0, _memoizeOne.default)(getBreadcrumbNameMap, _isEqual.default);

var _default = function _default(routes, menu, formatMessage, menuDataRender) {
  var originalMenuData = memoizeOneFormatter({
    data: routes,
    formatMessage: formatMessage,
    menu: menu || {
      locale: false
    }
  });

  if (menuDataRender) {
    originalMenuData = menuDataRender(originalMenuData);
  }

  var menuData = defaultFilterMenuData(originalMenuData);
  var breadcrumb = memoizeOneGetBreadcrumbNameMap(originalMenuData);
  return {
    breadcrumb: breadcrumb,
    menuData: menuData
  };
};

exports.default = _default;