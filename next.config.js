const path = require('path');

const withTM = require('next-transpile-modules')([
  
]);

module.exports = withTM({
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
});