import React from 'react';
import {Drawer} from 'antd';
import SiderMenu from './SiderMenu';
import { getFlatMenuKeys } from './SiderMenuUtils';
class SiderMenuWrapper extends React.Component{


  render(){
    const {menuData} = this.props;
    const flatMenuKeys = getFlatMenuKeys(menuData);
    return(
      <SiderMenu
        className="ant-pro-sider-menu"
        {...this.props}
        flatMenuKeys ={flatMenuKeys}
      />
    )
  }
}

export default SiderMenuWrapper;