import './BasicLayout.less';
import React, { Suspense } from 'react';
import { Layout } from 'antd';
import DocumentTitle from 'react-document-title';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import defaultSettings from './defaultSettings';
import getLocales from './locales';
import RouteContext from './RouteContext';
import SiderMenu from './SiderMenu/';
import Header from './Header';
import defaultGetPageTitle from './getPageTitle';
import Footer from './Footer';
import { getBreadcrumbProps } from './utils/getBreadcrumbProps';
import getMenuData from './utils/getMenuData';
import { isBrowser } from './utils/utils';
const { Content } = Layout;
const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599,
  },
  'screen-xxl': {
    minWidth: 1600,
  },
};
const renderSiderMenu = props =>{
  return <SiderMenu {...props} />
}
const headerRender = props => {
  if(props.headerRender === false){
    return null;
  }
  return <Header {...props} />;
}

const footerRender = props => {
  if(props.footerRender === false){
    return null;
  }
  if(props.footerRender){
    return props.footerRender({...props},<Footer />);
  }
  return <Footer />
}
const defaultPageTitleRender = (pageProps,props) =>{
  const {pageTitleRender} = props;
  if(pageTitleRender === false){
    return props.title || '';
  }
  if(pageTitleRender){

  }
  return defaultGetPageTitle(pageProps);
}

const getPaddingLeft = (hasLeftPadding,siderWidth) => {
  if(hasLeftPadding){
    return siderWidth;
  }
  return undefined;
}
class BasicLayout extends React.Component{
  getContext = () => {
    return{

    }
  }
  render(){
    const {
      children,
      location = {pathname:'/'},
      siderWidth = 256, 
      menu,
      navTheme,
      menuDataRender,
      fixSiderbar,
      fixedHeader,
      route = {
        routes:[]
      },
    } = this.props;
    const {routes,path} = route;
    const formatMessage = ({ id, defaultMessage, ...rest }) => {

      if (this.props.formatMessage) {

          return this.props.formatMessage({
              id,
              defaultMessage,
              ...rest,
          });
      }
      const locales = getLocales();

      if (locales[id]) {
          return locales[id];
      }
      if (defaultMessage) {
          return defaultMessage;
      }
      return id;
    };
    const {menuData,breadcrumb} = getMenuData(routes,menu,formatMessage,menuDataRender);
    const hasLeftPadding = fixSiderbar;

    const defaultProps = {
      ...this.props,
      formatMessage,
      breadcrumb,
    };
    //gen page title
    const pageTitle = defaultPageTitleRender({
      pathname:location.pathname,
      ...defaultProps
    },this.props)
    const breadcrumbProps = getBreadcrumbProps({
      ...this.props,
      breadcrumb
    })
    
    return(
      <React.Fragment>
        <DocumentTitle title={pageTitle}>
          <ContainerQuery query={query}>
            {params =>(
              <div className={classNames(params ,'ant-design-pro','basicLayout')}>
                <Layout>
                  {renderSiderMenu({
                    ...defaultProps,
                    menuData,
                    theme:navTheme
                  })}

                  <Layout
                    style={{
                      paddingLeft: getPaddingLeft(!!hasLeftPadding, siderWidth),
                      minHeight:'100vh',
                    }}
                  >
                    {headerRender({
                      ...defaultProps,
                    })}
                    <Content 
                      className="ant-pro-basicLayout-content" 
                      style={!fixedHeader ? {paddingTop:0} :{}}
                    >
                      <RouteContext.Provider value={{
                        breadcrumb: breadcrumbProps,
                        ...this.props,
                        menuData,
                        title:pageTitle.split('-')[0].trim(),
                      }}>
                      {children}
                      </RouteContext.Provider>
                    </Content>
                    {footerRender({})}
                  </Layout>
                </Layout>
              </div>
            )}
          </ContainerQuery>
        </DocumentTitle>
      </React.Fragment>
    )
  }
}
BasicLayout.defaultProps = {
  logo:'',
  ...defaultSettings,
  location: isBrowser() ? window.location : undefined
}
export default BasicLayout;