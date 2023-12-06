import { type RuleSetRule } from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'

export function buildLoaders ({ isDev }: BuildOptions): RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: 'file-loader'
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const stylesLoader = buildCssLoader(isDev)

  return [fileLoader, svgLoader, typescriptLoader, stylesLoader]
}
