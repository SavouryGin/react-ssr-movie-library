import { babelLoader } from './loaders';

export const svgReactComponentRule = {
  test: /\.icon.svg$/,
  issuer: /\.[jt]sx$/,
  use: [
    babelLoader,
    {
      loader: '@svgr/webpack',
      options: { babel: false },
    },
  ],
};

export const svgRule = {
  test: /\.svg$/,
  issuer: { not: [/\.[jt]sx$/] },
  type: 'asset/inline',
};

export const svgRules = [svgReactComponentRule, svgRule];
