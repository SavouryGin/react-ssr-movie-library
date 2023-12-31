import * as plugins from '../plugins';
import * as rules from '../rules';
import nodeExternals from 'webpack-node-externals';
import { DIST_DIR, IS_DEV, ROOT_DIR } from '../env';
import type { Configuration } from 'webpack';

const serverConfig: Configuration = {
  name: 'server',
  target: 'node',
  devtool: IS_DEV ? false : 'source-map',
  entry: './src/client/components/@shared/app',
  mode: IS_DEV ? 'development' : 'production',
  context: ROOT_DIR,
  output: {
    filename: 'app.server.js',
    libraryTarget: 'commonjs2',
    path: DIST_DIR,
    publicPath: '/',
  },
  module: {
    rules: [
      rules.javascriptRule,
      rules.typescriptRule,
      rules.htmlRule,
      rules.mediasRule,
      rules.fontsRule,
      rules.cssRule,
      ...rules.svgRules,
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx', '.scss'],
    plugins: [plugins.tsPaths],
  },
  plugins: [plugins.miniCssExtractPlugin, plugins.limitPlugin, plugins.definePlugin({ server: true }), plugins.copyPlugin],
  externals: [nodeExternals()],
};

export default serverConfig;
