import './Header.less';

import React, { Component } from 'react';
import {Layout} from 'antd';
import GlobalHeader from './GlobalHeader';
const { Header } = Layout;

class HeaderView extends Component {
  static defaultProps = {
    
  }
  renderContent = () => {
    return <GlobalHeader {...this.props} />
  }
  getHeadWidth = () => {
    const { isMobile, collapsed, fixedHeader, layout, siderWidth = 256, } = this.props;
    if (isMobile || !fixedHeader || layout === 'topmenu') {
        return '100%';
    }
    return collapsed ? 'calc(100% - 80px)' : `calc(100% - ${siderWidth}px)`;    
  }
  render(){
    const width = this.getHeadWidth();
    return(
      <Header
        style={{padding:0,zIndex:2,width:'100%'}}
      >
        {this.renderContent()}
      </Header>
    )
  }
}
export default HeaderView;