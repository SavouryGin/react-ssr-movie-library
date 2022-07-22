/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('@cypress/webpack-preprocessor');

const options = {
  webpackOptions: require('../webpack.config.js'),
};

module.exports = webpack(options);
