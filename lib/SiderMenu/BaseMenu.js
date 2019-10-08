"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/menu/style");

var _menu = _interopRequireDefault(require("antd/es/menu"));

require("./index.less");

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _link = _interopRequireDefault(require("umi/link"));

var _SiderMenuUtils = require("./SiderMenuUtils");

var _utils = require("../utils/utils");

var _pathTools = require("../utils/pathTools");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SubMenu = _menu.default.SubMenu;

var getIcon = function getIcon(icon) {
  if (typeof icon === 'string') {
    if ((0, _utils.isUrl)(icon)) {
      return _react.default.createElement(_icon.default, {
        component: function component() {
          return _react.default.createElement("img", {
            src: icon,
            alt: "icon",
            className: styles.icon
          });
        }
      });
    }

    if (icon.startsWith('icon-')) {
      return _react.default.createElement(IconFont, {
        type: icon
      });
    }

    return _react.default.createElement(_icon.default, {
      type: icon
    });
  }

  return icon;
};

var BaseMenu =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(BaseMenu, _PureComponent);

  function BaseMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.conversionPath = function (path) {
      if (path && path.indexOf('http') === 0) {
        return path;
      }

      return "/".concat(path || '').replace(/\/+/g, '/');
    };

    _this.getNavMenuItems = function (menusData) {
      if (!menusData) {
        return [];
      }

      return menusData.filter(function (item) {
        return item.name && !item.hideInMenu;
      }).map(function (item) {
        return _this.getSubMenuOrItem(item);
      }).filter(function (item) {
        return item;
      });
    };

    _this.getIntlName = function (item) {
      var name = item.name,
          locale = item.locale;
      var _this$props = _this.props,
          _this$props$menu = _this$props.menu,
          menu = _this$props$menu === void 0 ? {
        locale: false
      } : _this$props$menu,
          formatMessage = _this$props.formatMessage;

      if (locale && menu.locale && formatMessage) {
        return formatMessage({
          id: locale,
          defaultMessage: name
        });
      }

      return item.name;
    };

    _this.getSubMenuOrItem = function (item) {
      if (item.children && !item.hideChildrenInMenu && item.children.some(function (child) {
        return child.name;
      })) {
        var name = _this.getIntlName(item);

        return _react.default.createElement(SubMenu, {
          title: item.icon ? _react.default.createElement("span", null, getIcon(item.icon), _react.default.createElement("span", null, name)) : name,
          key: item.key || item.path
        }, _this.getNavMenuItems(item.children));
      }

      return _react.default.createElement(_menu.default.Item, {
        key: item.path
      }, _this.getMenuItemPath(item));
    };

    _this.getMenuItemPath = function (item) {
      var name = _this.getIntlName(item);

      var itemPath = _this.conversionPath(item.path);

      var icon = getIcon(item.icon);
      var target = item.target; // Is it a http link

      if (/^https?:\/\//.test(itemPath)) {
        return _react.default.createElement("a", {
          href: itemPath,
          target: target
        }, icon, _react.default.createElement("span", null, name));
      }

      var location = _this.props.location;
      return _react.default.createElement(_link.default, {
        to: itemPath,
        target: target,
        replace: itemPath === location.pathname
      }, icon, _react.default.createElement("span", null, name));
    };

    _this.getSelectedMenuKeys = function (pathname) {
      var flatMenuKeys = _this.props.flatMenuKeys;
      return (0, _pathTools.urlToList)(pathname).map(function (itemPath) {
        return (0, _SiderMenuUtils.getMenuMatches)(flatMenuKeys, itemPath).pop();
      }).filter(function (item) {
        return item;
      });
    };

    return _this;
  }

  _createClass(BaseMenu, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          openKeys = _this$props2.openKeys,
          mode = _this$props2.mode,
          style = _this$props2.style,
          menuData = _this$props2.menuData,
          className = _this$props2.className,
          theme = _this$props2.theme,
          _this$props2$location = _this$props2.location,
          location = _this$props2$location === void 0 ? {
        pathname: '/'
      } : _this$props2$location,
          handleOpenChange = _this$props2.handleOpenChange;
      var selectedKeys = this.getSelectedMenuKeys(location.pathname);

      if (!selectedKeys.length && openKeys) {
        selectedKeys = [openKeys[openKeys.length - 1]];
      }

      var props = {};

      if (typeof openKeys === 'string') {
        props = {
          openKeys: [openKeys]
        };
      } else {
        if (openKeys) {
          props = {
            openKeys: openKeys.length === 0 ? _toConsumableArray(selectedKeys) : openKeys
          };
        }
      }

      var cls = (0, _classnames.default)(className, {
        'top-nav-menu': mode === 'horizontal'
      });
      return _react.default.createElement(_menu.default, _extends({
        key: "Menu",
        mode: mode,
        theme: theme,
        style: style,
        className: cls,
        selectedKeys: selectedKeys,
        onOpenChange: handleOpenChange
      }, props), this.getNavMenuItems(menuData));
    }
  }]);

  return BaseMenu;
}(_react.PureComponent);

exports.default = BaseMenu;
BaseMenu.defaultProps = {
  flatMenuKeys: [],
  openKeys: [],
  handleOpenChange: function handleOpenChange() {}
};