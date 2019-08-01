import React from 'react';
import pathToRegexp from 'path-to-regexp';
import { urlToList } from './pathTools';
// 渲染Breadcrumb 子节点
// Render the Breadcrumb child node
const defaultItemRender = ({ breadcrumbName, path, }) => <a href={path}>{breadcrumbName}</a>;
const renderItemLocal = (item, props) => {
    const { formatMessage, menu = {
        locale: false,
    }, } = props;
    if (item.locale && formatMessage) {
        if (menu.locale) {
            return formatMessage({ id: item.locale, defaultMessage: item.name });
        }
    }
    return item.name;
};
export const getBreadcrumb = (breadcrumb, url) => {
    if (!breadcrumb) {
        return {
            path: '',
        };
    }
    let breadcrumbItem = breadcrumb[url];
    if (!breadcrumbItem) {
        Object.keys(breadcrumb).forEach(item => {
            if (pathToRegexp(item).test(url)) {
                breadcrumbItem = breadcrumb[item];
            }
        });
    }
    return breadcrumbItem || { path: '' };
};
export const getBreadcrumbFromProps = (props) => {
    const { location, breadcrumb } = props;
    return {
        location,
        breadcrumb,
    };
};
// Generated according to props
const conversionFromProps = (props) => {
    const { breadcrumbList = [] } = props;
    return breadcrumbList
        .map(item => {
        const { title, href } = item;
        return {
            path: href,
            breadcrumbName: title,
        };
    })
        .filter(item => item.path);
};
const conversionFromLocation = (routerLocation = { pathname: '/' }, breadcrumb, props) => {
    if (!routerLocation) {
        return [];
    }
    // Convertor the url to an array
    const pathSnippets = urlToList(routerLocation.pathname);
    // Loop data mosaic routing
    const extraBreadcrumbItems = pathSnippets
        .map(url => {
        const currentBreadcrumb = getBreadcrumb(breadcrumb, url);
        if (currentBreadcrumb.inherited) {
            return { path: '', breadcrumbName: '' };
        }
        const name = renderItemLocal(currentBreadcrumb, props);
        const { hideInBreadcrumb } = currentBreadcrumb;
        return name && !hideInBreadcrumb
            ? {
                path: url,
                breadcrumbName: name,
                component: currentBreadcrumb.component,
            }
            : { path: '', breadcrumbName: '' };
    })
        .filter(item => item && item.path);
    extraBreadcrumbItems.unshift({
        path:'/',
        breadcrumbName:renderItemLocal({locale:'menu.home'},props)
    })
    return extraBreadcrumbItems;
};
/**
 * 将参数转化为面包屑
 * Convert parameters into breadcrumbs
 */
export const genBreadcrumbProps = (props) => {
    const { breadcrumbList } = props;
    const { location, breadcrumb } = getBreadcrumbFromProps(props);
    if (breadcrumbList && breadcrumbList.length) {
        return conversionFromProps(props);
    }
    // 根据 location 生成 面包屑
    // Generate breadcrumbs based on location
    if (location && location.pathname && breadcrumb) {
        return conversionFromLocation(location, breadcrumb, props);
    }
    return [];
};
// use breadcrumbRender to change routes
export const getBreadcrumbProps = (props) => {
    const { breadcrumbRender, itemRender: propsItemRender } = props;
    const routesArray = genBreadcrumbProps(props);
    const itemRender = propsItemRender || defaultItemRender;
    let routes = routesArray;
    // if routes.length =1, don't show it
    if (breadcrumbRender) {
        routes = breadcrumbRender(routes) || [];
    }
    if (routes && routes.length < 2) {
        routes = undefined;
    }
    return {
        routes,
        itemRender,
    };
};
//# sourceMappingURL=getBreadcrumbProps.js.map