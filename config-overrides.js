const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
module.exports = {
  webpack: function override(config, env) {
    config = injectBabelPlugin(['import', {libraryName: 'antd', libraryDirectory: 'es', style: 'css'}], config);
    config = rewireLess(config, env);
    return config;
  },
  devServer: function(configFunction) {
    process.env.PORT = 2345;
    return function(proxy, host) {
      const config = configFunction(process.env.PROXY_TARGET || proxy, host);
      return config;
    }
  }
}