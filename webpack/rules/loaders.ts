import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { SRC_DIR } from '../env';
import { resolve } from 'path';

export const cssLoader = {
  loader: 'css-loader',
};

export const miniCssExtractLoader = {
  loader: MiniCssExtractPlugin.loader,
};

export const sassLoader = {
  loader: 'sass-loader',
  options: {
    sassOptions: {
      includePaths: [resolve(SRC_DIR, 'client/styles')],
    },
  },
};

export const babelLoader = {
  loader: 'babel-loader',
};
