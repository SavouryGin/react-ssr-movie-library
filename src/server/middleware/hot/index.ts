import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import webpackConfigs from '../../../../webpack.config';
import { render } from '../render';

export const hot = () => {
  const compiler = webpack(webpackConfigs);
  const publicPath = webpackConfigs[0]?.output?.publicPath;
  const devCompilation = devMiddleware(compiler, { publicPath, serverSideRender: true });
  const hotCompilation = hotMiddleware(compiler);

  return [IS_DEV && devCompilation, IS_DEV && hotCompilation, render].filter(Boolean);
};
