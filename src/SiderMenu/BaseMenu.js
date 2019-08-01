import './index.less';
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Menu, Icon } from 'antd';
import Link from 'umi/link';
import { getMenuMatches } from './SiderMenuUtils';
import {isUrl} from '../utils/utils';
import { urlToList } from '../utils/pathTools';
const { SubMenu } = Menu;
const getIcon = icon => {
  if (typeof icon === 'string') {
    if (isUrl(icon)) {
      return <Icon component={() => <img src={icon} alt="icon" className={styles.icon} />} />;
    }
    if (icon.startsWith('icon-')) {
      return <IconFont type={icon} />;
    }
    return <Icon type={icon} />;
  }
  return icon;
};

export default class BaseMenu extends PureComponent{
  conversionPath = path => {
    if (path && path.indexOf('http') === 0) {
      return path;
    }
    return `/${path || ''}`.replace(/\/+/g, '/');
  };
  getNavMenuItems= menusData => {
    if(!menusData){
      return[];
    }
    return menusData
      .filter(item => item.name && !item.hideInMenu)
      .map(item => this.getSubMenuOrItem(item))
      .filter(item => item)
  }
  getIntlName = (item) => {
    const {name,locale} = item;
    const { 
      menu = {
        locale: false,
      }, 
      formatMessage
    } = this.props;
    if(locale && menu.locale && formatMessage){
      return formatMessage({
        id:locale,
        defaultMessage:name
      })
    }
    return item.name;
  }
  getSubMenuOrItem = item => {
    if(item.children && !item.hideChildrenInMenu && item.children.some(child => child.name)){
      const name = this.getIntlName(item);
      return (
        <SubMenu
          title ={
            item.icon ? (
              <span>
                {getIcon(item.icon)}
                <span>{name}</span>
              </span>
            ) :(name)
          }
          key={item.key || item.path}
        >
          {this.getNavMenuItems(item.children)}
        </SubMenu>
      )
    }

    return <Menu.Item key={item.path}>{this.getMenuItemPath(item)}</Menu.Item>;
  }
  getMenuItemPath = item => {
    const name = this.getIntlName(item);
    const itemPath = this.conversionPath(item.path);
    const icon = getIcon(item.icon);
    const { target } = item;
    // Is it a http link
    if (/^https?:\/\//.test(itemPath)) {
      return (
        <a href={itemPath} target={target}>
          {icon}
          <span>{name}</span>
        </a>
      );
    }
    const { location } = this.props;
    return (
      <Link
        to={itemPath}
        target={target}
        replace={itemPath === location.pathname}
      >
        {icon}
        <span>{name}</span>
      </Link>
    );
  }

  getSelectedMenuKeys = (pathname) => {
    const {flatMenuKeys} = this.props;
    return urlToList(pathname)
                .map(itemPath => getMenuMatches(flatMenuKeys, itemPath).pop())
                .filter(item => item);
  }

  render(){
    const {
      openKeys,
      mode,
      style,
      menuData,
      className,
      theme,
      location={pathname:'/'},
      handleOpenChange
    } = this.props;
    let selectedKeys = this.getSelectedMenuKeys(location.pathname);
    if (!selectedKeys.length && openKeys) {
      selectedKeys = [openKeys[openKeys.length - 1]];
    }
    let props = {};
    if(openKeys){
      props = {
        openKeys: openKeys.length === 0 ? [...selectedKeys] : openKeys,
      };
    }
    const cls = classNames(className, {
      'top-nav-menu': mode === 'horizontal',
    });
    return(
      <Menu
        key="Menu"
        mode={mode}
        theme={theme}
        style={style}
        className={cls}
        selectedKeys={selectedKeys}
        onOpenChange={handleOpenChange}
        {...props}
      >
        {this.getNavMenuItems(menuData)}
      </Menu>
    )
  }
}
BaseMenu.defaultProps = {
  flatMenuKeys:[],
  openKeys:[],
  handleOpenChange: () => {},
}