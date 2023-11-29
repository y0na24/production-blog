import { Configuration } from 'webpack'
import { BuildOptions } from './types/config'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildPlugins } from './buildPlugins'

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { paths, mode } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders(),
    },

    resolve: buildResolvers(),

    plugins: buildPlugins(options),
  }
}
