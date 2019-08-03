import pathToRegexp from 'path-to-regexp';
import { urlToList } from '../utils/pathTools';
export const getFlatMenuKeys = (menuData = []) => {
  let keys = [];
  menuData.forEach(item => {
    if(!item){
      return;
    }
    keys.push(item.path);
    if(item.children){
      keys = keys.concat(getFlatMenuKeys(item.children));
    }
  })

  return keys;
};
export const getMenuMatches = (flatMenuKeys = [],path) =>
  flatMenuKeys.filter(item => item && pathToRegexp(item).test(path));
/**
 * 获得菜单子节点
 */
export const getDefaultCollapsedSubMenus = (props) => {
    const {
      location = {pathname:'/'},
      flatMenuKeys,
    } = props;
    console.log(flatMenuKeys);
    return urlToList(location.pathname)
      .map(item => getMenuMatches(flatMenuKeys,item)[0])
      .filter(item => item)
      .reduce((acc,curr) => [...acc,curr],'/');
};