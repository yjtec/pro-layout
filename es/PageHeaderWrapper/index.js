import "antd/es/page-header/style";
import _PageHeader from "antd/es/page-header";
import "antd/es/tabs/style";
import _Tabs from "antd/es/tabs";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import './index.less';
import React from 'react';
import GridContent from '../GridContent';
import RouteContext from '../RouteContext';
var prefixedClassName = 'ant-pro-page-header-wrap';

var renderFooter = function renderFooter(_ref) {
  var tabList = _ref.tabList,
      tabActiveKey = _ref.tabActiveKey,
      onTabChange = _ref.onTabChange,
      tabBarExtraContent = _ref.tabBarExtraContent;

  if (tabList && tabList.length) {
    return React.createElement(_Tabs, {
      className: "".concat(prefixedClassName, "-tabs"),
      activeKey: tabActiveKey,
      onChange: function onChange(key) {
        if (onTabChange) {
          onTabChange(key);
        }
      },
      tabBarExtraContent: tabBarExtraContent
    }, tabList.map(function (item) {
      return React.createElement(_Tabs.TabPane, {
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

  return React.createElement("div", {
    className: "".concat(prefixedClassName, "-detail")
  }, React.createElement("div", {
    className: "".concat(prefixedClassName, "-main")
  }, React.createElement("div", {
    className: "".concat(prefixedClassName, "-row")
  }, content && React.createElement("div", {
    className: "".concat(prefixedClassName, "-content")
  }, content), extraContent && React.createElement("div", {
    className: "".concat(prefixedClassName, "-extraContent")
  }, extraContent))));
};

var defaultPageHeaderRender = function defaultPageHeaderRender(props) {
  var title = props.title,
      content = props.content,
      pageHeaderRender = props.pageHeaderRender,
      extraContent = props.extraContent,
      restProps = _objectWithoutProperties(props, ["title", "content", "pageHeaderRender", "extraContent"]);

  return React.createElement(RouteContext.Consumer, null, function (value) {
    if (pageHeaderRender) {
      return pageHeaderRender(_objectSpread({}, props, {}, value));
    }

    var pageHeaderTitle = title;

    if (!title && title !== false) {
      pageHeaderTitle = value.title;
    }

    return React.createElement(_PageHeader, _extends({}, value, {
      title: pageHeaderTitle
    }, restProps, {
      footer: renderFooter(restProps)
    }), renderPageHeader(content, extraContent));
  });
};

var PageHeaderWrapper = function PageHeaderWrapper(props) {
  var children = props.children;
  return React.createElement("div", {
    style: {
      margin: '-24px -24px 0'
    }
  }, React.createElement("div", {
    className: "".concat(prefixedClassName, "-page-header-warp")
  }, React.createElement(GridContent, null, defaultPageHeaderRender(props))), children ? React.createElement(GridContent, null, React.createElement("div", {
    className: "".concat(prefixedClassName, "-children-content")
  }, children)) : null);
};

export default PageHeaderWrapper;