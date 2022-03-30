/*eslint-env node*/
const CracoAntDesignPlugin = require('craco-antd');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const path = require('path');

// Don't open the browser during development
process.env.BROWSER = 'none';

module.exports = {
  eslint: false,
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            strictMath: false,
            noIeCompat: true,
          },
        },
        cssLoaderOptions: {
          modules: {
            getLocalIdent: (context, localIdentName, localName, options) => {
              if (context.resourcePath.includes('node_modules')) {
                return localName;
              }
              return getCSSModuleLocalIdent(context, localIdentName, localName, options);
            },
          },
        },
        babelPluginImportOptions: {
          libraryDirectory: 'es',
        },
        customizeThemeLessPath: path.join(__dirname, 'src/theme.less'),
      },
    },
    {
      plugin: new AntdDayjsWebpackPlugin(),
    },
  ],
};
