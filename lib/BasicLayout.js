"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/layout/style");

var _layout = _interopRequireDefault(require("antd/es/layout"));

require("./BasicLayout.less");

var _react = _interopRequireWildcard(require("react"));

var _reactDocumentTitle = _interopRequireDefault(require("react-document-title"));

var _reactContainerQuery = require("react-container-query");

var _classnames = _interopRequireDefault(require("classnames"));

var _defaultSettings = _interopRequireDefault(require("./defaultSettings"));

var _locales = _interopRequireDefault(require("./locales"));

var _RouteContext = _interopRequireDefault(require("./RouteContext"));

var _SiderMenu = _interopRequireDefault(require("./SiderMenu/"));

var _Header = _interopRequireDefault(require("./Header"));

var _getPageTitle = _interopRequireDefault(require("./getPageTitle"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _getBreadcrumbProps = require("./utils/getBreadcrumbProps");

var _getMenuData2 = _interopRequireDefault(require("./utils/getMenuData"));

var _utils = require("./utils/utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Content = _layout.default.Content;
var query = {
  'screen-xs': {
    maxWidth: 575
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599
  },
  'screen-xxl': {
    minWidth: 1600
  }
};

var renderSiderMenu = function renderSiderMenu(props) {
  return _react.default.createElement(_SiderMenu.default, props);
};

var headerRender = function headerRender(props) {
  if (props.headerRender === false) {
    return null;
  }

  return _react.default.createElement(_Header.default, props);
};

var footerRender = function footerRender(props) {
  if (props.footerRender === false) {
    return null;
  }

  if (props.footerRender) {
    return props.footerRender(_objectSpread({}, props), _react.default.createElement(_Footer.default, null));
  }

  return _react.default.createElement(_Footer.default, null);
};

var defaultPageTitleRender = function defaultPageTitleRender(pageProps, props) {
  var pageTitleRender = props.pageTitleRender;

  if (pageTitleRender === false) {
    return props.title || '';
  }

  if (pageTitleRender) {}

  return (0, _getPageTitle.default)(pageProps);
};

var getPaddingLeft = function getPaddingLeft(hasLeftPadding, siderWidth) {
  if (hasLeftPadding) {
    return siderWidth;
  }

  return undefined;
};

var BasicLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BasicLayout, _React$Component);

  function BasicLayout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BasicLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BasicLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.getContext = function () {
      return {};
    };

    return _this;
  }

  _createClass(BasicLayout, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          _this$props$location = _this$props.location,
          location = _this$props$location === void 0 ? {
        pathname: '/'
      } : _this$props$location,
          _this$props$siderWidt = _this$props.siderWidth,
          siderWidth = _this$props$siderWidt === void 0 ? 256 : _this$props$siderWidt,
          menu = _this$props.menu,
          navTheme = _this$props.navTheme,
          menuDataRender = _this$props.menuDataRender,
          fixSiderbar = _this$props.fixSiderbar,
          fixedHeader = _this$props.fixedHeader,
          _this$props$route = _this$props.route,
          route = _this$props$route === void 0 ? {
        routes: []
      } : _this$props$route;
      console.log(fixSiderbar);
      var routes = route.routes,
          path = route.path;

      var formatMessage = function formatMessage(_ref) {
        var id = _ref.id,
            defaultMessage = _ref.defaultMessage,
            rest = _objectWithoutProperties(_ref, ["id", "defaultMessage"]);

        if (_this2.props.formatMessage) {
          return _this2.props.formatMessage(_objectSpread({
            id: id,
            defaultMessage: defaultMessage
          }, rest));
        }

        var locales = (0, _locales.default)();

        if (locales[id]) {
          return locales[id];
        }

        if (defaultMessage) {
          return defaultMessage;
        }

        return id;
      };

      var _getMenuData = (0, _getMenuData2.default)(routes, menu, formatMessage, menuDataRender),
          menuData = _getMenuData.menuData,
          breadcrumb = _getMenuData.breadcrumb;

      var hasLeftPadding = fixSiderbar;

      var defaultProps = _objectSpread({}, this.props, {
        formatMessage: formatMessage,
        breadcrumb: breadcrumb
      }); //gen page title


      var pageTitle = defaultPageTitleRender(_objectSpread({
        pathname: location.pathname
      }, defaultProps), this.props);
      var breadcrumbProps = (0, _getBreadcrumbProps.getBreadcrumbProps)(_objectSpread({}, this.props, {
        breadcrumb: breadcrumb
      }));
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactDocumentTitle.default, {
        title: pageTitle
      }, _react.default.createElement(_reactContainerQuery.ContainerQuery, {
        query: query
      }, function (params) {
        return _react.default.createElement("div", {
          className: (0, _classnames.default)(params, 'ant-design-pro', 'basicLayout')
        }, _react.default.createElement(_layout.default, null, renderSiderMenu(_objectSpread({}, defaultProps, {
          menuData: menuData,
          theme: navTheme
        })), _react.default.createElement(_layout.default, {
          style: {
            paddingLeft: getPaddingLeft(!!hasLeftPadding, siderWidth),
            minHeight: '100vh'
          }
        }, headerRender(_objectSpread({}, defaultProps)), _react.default.createElement(Content, {
          className: "ant-pro-basicLayout-content",
          style: !fixedHeader ? {
            paddingTop: 0
          } : {}
        }, _react.default.createElement(_RouteContext.default.Provider, {
          value: _objectSpread({
            breadcrumb: breadcrumbProps
          }, _this2.props, {
            menuData: menuData,
            title: pageTitle.split('-')[0].trim()
          })
        }, children)), footerRender({}))));
      })));
    }
  }]);

  return BasicLayout;
}(_react.default.Component);

BasicLayout.defaultProps = _objectSpread({
  logo: ''
}, _defaultSettings.default, {
  location: (0, _utils.isBrowser)() ? window.location : undefined
});
var _default = BasicLayout;
exports.default = _default;