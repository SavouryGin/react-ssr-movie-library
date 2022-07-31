import { cssLoader, miniCssExtractLoader, sassLoader } from './loaders';

export const cssRule = {
  test: /\.s[ac]ss$/i,
  use: [
    miniCssExtractLoader,
    {
      ...cssLoader,
      options: {
        modules: {
          localIdentName: '[local]--[hash:base64:5]',
        },
      },
    },
    sassLoader,
  ],
};
