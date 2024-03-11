const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.dev.readychatai.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/messages_json', // reescribe la ruta
      },
    })
  );
};