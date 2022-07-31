import HtmlWebpackPlugin from 'html-webpack-plugin';
import { SRC_DIR } from '../env';
import { join } from 'path';

export const htmlWebpackPlugin = new HtmlWebpackPlugin({
  filename: 'index.html',
  inject: true,
  template: join(SRC_DIR, 'client/assets/index.html'),
});
