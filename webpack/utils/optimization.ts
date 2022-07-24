import TerserWebpackPlugin from 'terser-webpack-plugin';

export const optimization = {
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
