"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/page-header/style");

var _pageHeader = _interopRequireDefault(require("antd/es/page-header"));

require("antd/es/tabs/style");

var _tabs = _interopRequireDefault(require("antd/es/tabs"));

require("./index.less");

var _react = _interopRequireDefault(require("react"));

var _GridContent = _interopRequireDefault(require("../GridContent"));

var _RouteContext = _interopRequireDefault(require("../RouteContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefixedClassName = 'ant-pro-page-header-wrap';

var renderFooter = function renderFooter(_ref) {
  var tabList = _ref.tabList,
      tabActiveKey = _ref.tabActiveKey,
      onTabChange = _ref.onTabChange,
      tabBarExtraContent = _ref.tabBarExtraContent;

  if (tabList && tabList.length) {
    return _react.default.createElement(_tabs.default, {
      className: "".concat(prefixedClassName, "-tabs"),
      activeKey: tabActiveKey,
      onChange: function onChange(key) {
        if (onTabChange) {
          onTabChange(key);
        }
      },
      tabBarExtraContent: tabBarExtraContent
    }, tabList.map(function (item) {
      return _react.default.createElement(_tabs.default.TabPane, {
        tab: item.tab,
        key: item.key
      });
    }));
  }

  return null;
};

var renderPageHeader = function renderPageHeader(content, extraContent) {
  if (!content && !extraContent) {
    return null;
  }

  return _react.default.createElement("div", {
    className: "".concat(prefixedClassName, "-detail")
  }, _react.default.createElement("div", {
    className: "".concat(prefixedClassName, "-main")
  }, _react.default.createElement("div", {
    className: "".concat(prefixedClassName, "-row")
  }, content && _react.default.createElement("div", {
    className: "".concat(prefixedClassName, "-content")
  }, content), extraContent && _react.default.createElement("div", {
    className: "".concat(prefixedClassName, "-extraContent")
  }, extraContent))));
};

var defaultPageHeaderRender = function defaultPageHeaderRender(props) {
  var title = props.title,
      content = props.content,
      pageHeaderRender = props.pageHeaderRender,
      extraContent = props.extraContent,
      restProps = _objectWithoutProperties(props, ["title", "content", "pageHeaderRender", "extraContent"]);

  return _react.default.createElement(_RouteContext.default.Consumer, null, function (value) {
    if (pageHeaderRender) {
      return pageHeaderRender(_objectSpread({}, props, {}, value));
    }

    var pageHeaderTitle = title;

    if (!title && title !== false) {
      pageHeaderTitle = value.title;
    }

    return _react.default.createElement(_pageHeader.default, _extends({}, value, {
      title: pageHeaderTitle
    }, restProps, {
      footer: renderFooter(restProps)
    }), renderPageHeader(content, extraContent));
  });
};

var PageHeaderWrapper = function PageHeaderWrapper(props) {
  var children = props.children;
  return _react.default.createElement("div", {
    style: {
      margin: '-24px -24px 0'
    }
  }, _react.default.createElement("div", {
    className: "".concat(prefixedClassName, "-page-header-warp")
  }, _react.default.createElement(_GridContent.default, null, defaultPageHeaderRender(props))), children ? _react.default.createElement(_GridContent.default, null, _react.default.createElement("div", {
    className: "".concat(prefixedClassName, "-children-content")
  }, children)) : null);
};

var _default = PageHeaderWrapper;
exports.default = _default;