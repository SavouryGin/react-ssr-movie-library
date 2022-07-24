import { cssLoader, miniCssExtractLoader, sassLoader } from './loaders';

export const cssRule = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    miniCssExtractLoader,
    {
      ...cssLoader,
      options: {
        modules: {
          exportLocalsConvention: 'camelCaseOnly',
          localIdentName: '[local]--[hash:base64:5]',
        },
      },
    },
    sassLoader,
  ],
};
