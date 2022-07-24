import LoadablePlugin from '@loadable/webpack-plugin';
import type { WebpackPluginInstance } from 'webpack';

export const loadablePlugin = new LoadablePlugin() as WebpackPluginInstance;
