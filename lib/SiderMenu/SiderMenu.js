"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultRenderLogo = void 0;

require("antd/es/layout/style");

var _layout = _interopRequireDefault(require("antd/es/layout"));

require("./index.less");

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _BaseMenu = _interopRequireDefault(require("./BaseMenu"));

var _SiderMenuUtils = require("./SiderMenuUtils");

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

var Sider = _layout.default.Sider;

var defaultRenderLogo = function defaultRenderLogo(logo) {
  if (typeof logo === 'string') {
    return _react.default.createElement("img", {
      src: logo,
      alt: "logo"
    });
  }

  if (typeof logo == 'function') {
    return logo();
  }

  return logo;
};

exports.defaultRenderLogo = defaultRenderLogo;

var SiderMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(SiderMenu, _Component);

  function SiderMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SiderMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SiderMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      openKeys: (0, _SiderMenuUtils.getDefaultCollapsedSubMenus)(_this.props)
    };

    _this.isMainMenu = function (key) {
      var _this$props$menuData = _this.props.menuData,
          menuData = _this$props$menuData === void 0 ? [] : _this$props$menuData;
      return menuData.some(function (item) {
        if (key) {
          return item.key === key || item.path === key;
        }

        return false;
      });
    };

    _this.handleOpenChange = function (openKeys) {
      var moreThanOne = openKeys.filter(function (openKey) {
        return _this.isMainMenu(openKey);
      }).length > 1;

      if (moreThanOne) {
        _this.setState({
          openKeys: [openKeys.pop()].filter(function (item) {
            return item;
          })
        });
      } else {
        _this.setState({
          openKeys: _toConsumableArray(openKeys)
        });
      }
    };

    return _this;
  }

  _createClass(SiderMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          _this$props$siderWidt = _this$props.siderWidth,
          siderWidth = _this$props$siderWidt === void 0 ? 256 : _this$props$siderWidt,
          title = _this$props.title,
          logo = _this$props.logo,
          fixSiderbar = _this$props.fixSiderbar;
      var openKeys = this.state.openKeys;
      var siderClassName = (0, _classnames.default)('ant-pro-sider-menu-sider', {
        'fix-sider-bar': fixSiderbar,
        light: theme === 'light'
      });
      var defaultProps = {
        openKeys: openKeys
      };
      return _react.default.createElement(Sider, {
        width: siderWidth,
        className: siderClassName
      }, _react.default.createElement("div", {
        className: "ant-pro-sider-menu-logo",
        id: "logo"
      }, _react.default.createElement("a", null, defaultRenderLogo(logo), _react.default.createElement("h1", null, title))), _react.default.createElement(_BaseMenu.default, _extends({}, this.props, {
        mode: "inline",
        theme: "dark",
        handleOpenChange: this.handleOpenChange,
        style: {
          padding: '16px 0',
          width: '100%'
        }
      }, defaultProps)));
    }
  }]);

  return SiderMenu;
}(_react.Component);

SiderMenu.defaultProps = {
  flatMenuKeys: [],
  onCollapse: function onCollapse() {
    return undefined;
  },
  isMobile: false,
  openKeys: [],
  collapsed: false,
  handleOpenChange: function handleOpenChange() {
    return undefined;
  },
  menuData: [],
  onOpenChange: function onOpenChange() {
    return undefined;
  }
};
var _default = SiderMenu;
exports.default = _default;