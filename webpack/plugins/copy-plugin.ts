import CopyWebpackPlugin from 'copy-webpack-plugin';
import path, { join } from 'path';
import { SRC_DIR } from 'webpack/env';

export const copyPlugin = new CopyWebpackPlugin({
  patterns: [
    { from: join(SRC_DIR, 'client/assets/icons/favicon.ico') },
    {
      from: join(SRC_DIR, 'client/assets/images'),
      to: path.resolve(__dirname, '../../dist/assets/images'),
      toType: 'dir',
    },
  ],
});
