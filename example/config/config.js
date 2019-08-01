import slash from 'slash2';
const path = require('path');
const plugins = [
  [
    'umi-plugin-react',
    {
      antd:true,
      dva:{hmr:true},
      local:{
        enable:true,
        default:'zh-CN',
        baseNavigator: true
      }
    }
  ]
]
export default {
  plugins,
  routes:[
    {
      path:'/',
      component:'../layouts/BasicLayout',
      routes:[
        {path:'/',redirect:'/welcome/one'},
        {
          path:'/welcome',
          name:'welcome',
          icon:'smile',
          component:'./Welcome',
          routes:[
            {
              path:'/welcome/one',
              name:'one',
              icon:'smile',
              component:'./Welcome'
            },
            {
              path:'/welcome/two',
              name:'two',
              icon:'smile',
              component:'./Welcome'
            }
          ]
        },
        {
          path:'/welcome1',
          name:'welcome1',
          icon:'smile',
          component:'./Welcome',
          routes:[
            {
              path:'/welcome1/one1',
              name:'one',
              icon:'smile',
              component:'./Welcome'
            },
            {
              path:'/welcome1/two1',
              name:'one',
              icon:'smile',
              component:'./Welcome'
            }
          ]
        }
      ]
    }
  ],
  cssLoaderOptions:{
    modules:true,
    getLocalIdent:(context,localIdentName,localName) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less') ||
        !context.resourcePath.includes('example')
      ) {
        return localName;
      }
      const match = context.resourcePath.match(/src(.*)/);
      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = slash(antdProPath)
          .split('/')
          .map(a => a.replace(/([A-Z])/g, '-$1'))
          .map(a => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }
      return localName;
    }
  },
  disableRedirectHoist: false,
  extraBabelIncludes:[path.resolve('../src/')]
}