import React from 'react';
import pathToRegexp from 'path-to-regexp';
import { urlToList } from './pathTools'; // 渲染Breadcrumb 子节点
// Render the Breadcrumb child node

var defaultItemRender = function defaultItemRender(_ref) {
  var breadcrumbName = _ref.breadcrumbName,
      path = _ref.path;
  return React.createElement("a", {
    href: path
  }, breadcrumbName);
};

var renderItemLocal = function renderItemLocal(item, props) {
  var formatMessage = props.formatMessage,
      _props$menu = props.menu,
      menu = _props$menu === void 0 ? {
    locale: false
  } : _props$menu;

  if (item.locale && formatMessage) {
    if (menu.locale) {
      return formatMessage({
        id: item.locale,
        defaultMessage: item.name
      });
    }
  }

  return item.name;
};

export var getBreadcrumb = function getBreadcrumb(breadcrumb, url) {
  if (!breadcrumb) {
    return {
      path: ''
    };
  }

  var breadcrumbItem = breadcrumb[url];

  if (!breadcrumbItem) {
    Object.keys(breadcrumb).forEach(function (item) {
      if (pathToRegexp(item).test(url)) {
        breadcrumbItem = breadcrumb[item];
      }
    });
  }

  return breadcrumbItem || {
    path: ''
  };
};
export var getBreadcrumbFromProps = function getBreadcrumbFromProps(props) {
  var location = props.location,
      breadcrumb = props.breadcrumb;
  return {
    location: location,
    breadcrumb: breadcrumb
  };
}; // Generated according to props

var conversionFromProps = function conversionFromProps(props) {
  var _props$breadcrumbList = props.breadcrumbList,
      breadcrumbList = _props$breadcrumbList === void 0 ? [] : _props$breadcrumbList;
  return breadcrumbList.map(function (item) {
    var title = item.title,
        href = item.href;
    return {
      path: href,
      breadcrumbName: title
    };
  }).filter(function (item) {
    return item.path;
  });
};

var conversionFromLocation = function conversionFromLocation() {
  var routerLocation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    pathname: '/'
  };
  var breadcrumb = arguments.length > 1 ? arguments[1] : undefined;
  var props = arguments.length > 2 ? arguments[2] : undefined;

  if (!routerLocation) {
    return [];
  } // Convertor the url to an array


  var pathSnippets = urlToList(routerLocation.pathname); // Loop data mosaic routing

  var extraBreadcrumbItems = pathSnippets.map(function (url) {
    var currentBreadcrumb = getBreadcrumb(breadcrumb, url);

    if (currentBreadcrumb.inherited) {
      return {
        path: '',
        breadcrumbName: ''
      };
    }

    var name = renderItemLocal(currentBreadcrumb, props);
    var hideInBreadcrumb = currentBreadcrumb.hideInBreadcrumb;
    return name && !hideInBreadcrumb ? {
      path: url,
      breadcrumbName: name,
      component: currentBreadcrumb.component
    } : {
      path: '',
      breadcrumbName: ''
    };
  }).filter(function (item) {
    return item && item.path;
  });
  extraBreadcrumbItems.unshift({
    path: '/',
    breadcrumbName: props.local ? renderItemLocal({
      locale: 'menu.home'
    }, props) : '首页'
  });
  return extraBreadcrumbItems;
};
/**
 * 将参数转化为面包屑
 * Convert parameters into breadcrumbs
 */


export var genBreadcrumbProps = function genBreadcrumbProps(props) {
  var breadcrumbList = props.breadcrumbList;

  var _getBreadcrumbFromPro = getBreadcrumbFromProps(props),
      location = _getBreadcrumbFromPro.location,
      breadcrumb = _getBreadcrumbFromPro.breadcrumb;

  if (breadcrumbList && breadcrumbList.length) {
    return conversionFromProps(props);
  } // 根据 location 生成 面包屑
  // Generate breadcrumbs based on location


  if (location && location.pathname && breadcrumb) {
    return conversionFromLocation(location, breadcrumb, props);
  }

  return [];
}; // use breadcrumbRender to change routes

export var getBreadcrumbProps = function getBreadcrumbProps(props) {
  var breadcrumbRender = props.breadcrumbRender,
      propsItemRender = props.itemRender;
  var routesArray = genBreadcrumbProps(props);
  var itemRender = propsItemRender || defaultItemRender;
  var routes = routesArray; // if routes.length =1, don't show it

  if (breadcrumbRender) {
    routes = breadcrumbRender(routes) || [];
  }

  if (routes && routes.length < 2) {
    routes = undefined;
  }

  return {
    routes: routes,
    itemRender: itemRender
  };
};