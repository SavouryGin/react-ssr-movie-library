import CopyWebpackPlugin from 'copy-webpack-plugin';
import path, { join } from 'path';
import { ASSETS_DIR } from '../env';

export const copyPlugin = new CopyWebpackPlugin({
  patterns: [
    { from: join(ASSETS_DIR, 'icons/favicon.ico') },
    {
      from: join(ASSETS_DIR, 'images'),
      to: path.resolve(__dirname, '../../dist/assets/images'),
      toType: 'dir',
    },
  ],
});
