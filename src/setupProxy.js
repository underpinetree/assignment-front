/* eslint-env node */
const httpProxyMiddleware = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    httpProxyMiddleware({
      target: process.env.REACT_APP_API_SERVER || 'http://localhost:8080',
      changeOrigin: true,
    }),
  );
};
