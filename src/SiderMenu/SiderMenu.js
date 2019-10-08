import './index.less';
import React,{Component} from 'react';
import {Layout} from 'antd';
import classNames from 'classnames';
import BaseMenu from './BaseMenu';
import { getDefaultCollapsedSubMenus } from './SiderMenuUtils';
const {Sider} = Layout;

export const defaultRenderLogo = logo => {
  if(typeof logo === 'string' ){
    return <img src={logo} alt="logo" />
  }
  if(typeof logo == 'function'){
    return logo();
  }

  return logo;
}
class SiderMenu extends Component{
  state ={
    openKeys: getDefaultCollapsedSubMenus(this.props)
  }
  isMainMenu = key => {
    const { menuData = [] } = this.props;
    return menuData.some(item => {
      if (key) {
          return item.key === key || item.path === key;
      }
      return false;
    });
  }
  handleOpenChange = (openKeys) =>{
    const moreThanOne = openKeys.filter(openKey => this.isMainMenu(openKey)).length > 1;
    if (moreThanOne) {
      this.setState({
          openKeys: [openKeys.pop()].filter(item => item),
      });
    }
    else {
      this.setState({ openKeys: [...openKeys] });
    }
  }
  render(){
    const {
      theme,
      siderWidth = 256,
      title,
      logo,
      fixSiderbar
    } = this.props;
    const {openKeys} = this.state;
    const siderClassName = classNames('ant-pro-sider-menu-sider', {
      'fix-sider-bar': fixSiderbar,
      light: theme === 'light',
    });
  
    const defaultProps = {openKeys}
    return(
      <Sider
        width={siderWidth}
        className={siderClassName}
      >
        <div className="ant-pro-sider-menu-logo" id="logo">
          <a>
            {defaultRenderLogo(logo)}
            <h1>{title}</h1>
          </a>
        </div>
        <BaseMenu
          {...this.props}
          mode="inline"
          theme="dark"
          handleOpenChange={this.handleOpenChange}
          style={{padding:'16px 0',width:'100%'}}
          {...defaultProps}
        />
      </Sider>
    )
  }
}
SiderMenu.defaultProps = {
    flatMenuKeys: [],
    onCollapse: () => undefined,
    isMobile: false,
    openKeys: [],
    collapsed: false,
    handleOpenChange: () => undefined,
    menuData: [],
    onOpenChange: () => undefined,
};
export default SiderMenu;