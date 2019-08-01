import { Icon, Layout } from 'antd';
import React, { Fragment } from 'react';
import GlobalFooter from './GlobalFooter';
const { Footer } = Layout;
const defaultLinks = [
  {
    key: 'Ant Design Pro',
    title: 'official web',
    href: 'http://www.hnyjkj.com',
    blankTarget: true,
  },
  {
    key: 'github',
    title: <Icon type="github" />,
    href: 'https://github.com/ant-design/ant-design-pro',
    blankTarget: true,
  },
  {
    key: 'Ant Design',
    title: 'about us',
    href: 'http://www.hnyjkj.com/contact/',
    blankTarget: true,
  },
];

const defaultCopyright = '2019 艺境空间 技术部出品';
class FooterView extends React.Component{
  render(){
    const {links,copyright} = this.props;
    return(
      <Footer style={{padding:0}}>
        <GlobalFooter
          links={links || defaultLinks}
          copyright={
            <Fragment>
              Copyright <Icon type="copyright" /> {copyright || defaultCopyright} 
            </Fragment>
          }
        />
      </Footer>
    )
  }
}

export default FooterView;