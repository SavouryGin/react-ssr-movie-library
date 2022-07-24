import { babelLoader } from './loaders';

export const typescriptRule = {
  test: /\.tsx?$/,
  use: [babelLoader],
  exclude: /node_modules/,
};

export const javascriptRule = {
  test: /\.jsx?$/,
  use: [babelLoader],
  exclude: /node_modules/,
};

export const htmlRule = {
  test: /\.(html)$/,
  use: {
    loader: 'html-loader',
  },
};

export const mediasRule = {
  test: /\.(?:ico|gif|png|jpg|jpeg|ogg)$/i,
  type: 'asset/resource',
};

export const fontsRule = {
  test: /\.(woff(2)?|eot|ttf|otf|)$/,
  type: 'asset/inline',
};
