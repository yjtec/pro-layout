import ProLayout,{
  PageHeaderWrapper
} from '../../../src/index';
import React, { Component } from 'react';
import logo from '../assets/logo.svg';
const menuData = [
  {
    icon:'smile',
    name:'welcome',
    path:'/welcome',
    children:[
      {
        icon:'smile',
        name:'one',
        path:'welcome/one'
      },{
        icon:'smile',
        name:'two',
        path:'welcome/two'
      }
    ]
  }
];
class BasicLayout extends Component{
  render(){
    const {children} =this.props;
    return (
      <React.Fragment>
        <ProLayout
          logo={logo}
          {...this.props}
          menuData={menuData}
          rightContentRender = {(rightProps) => <div>right content</div>}
        >
          <PageHeaderWrapper>{children}</PageHeaderWrapper>
        </ProLayout>
      </React.Fragment>
    )
  }
}

export default BasicLayout;