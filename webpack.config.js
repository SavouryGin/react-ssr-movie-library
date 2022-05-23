const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

const config = {
  mode: isProd ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      __mocks__: path.resolve(__dirname, './src/__mocks__'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ['/node_modules/'],
        use: ['babel-loader'],
      },
      {
        test: /\.ts(x?)$/,
        exclude: ['/node_modules/'],
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: path.resolve(__dirname, './src/assets/icons/favicon.ico') }],
    }),
  ],
};

if (isProd) {
  config.optimization = {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true, // Enable multi-process parallel running
        extractComments: 'all', // Enable extracting comments to a different file
        terserOptions: {
          toplevel: true, // https://github.com/terser/terser#minify-options
          keep_classnames: false,
          output: {
            comments: false, // remove comments from files
          },
          mangle: {
            safari10: true, // for preventing Safari 10/11 bugs in loop scoping and await
          },
          compress: { pure_funcs: ['console.info', 'console.debug', 'console.warn'] }, // remove this functions when their return values are not used
        },
      }),
    ],
  };
} else {
  config.devServer = {
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  };
}

module.exports = config;
