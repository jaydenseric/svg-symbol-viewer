const path = require('path')
const webpack = require('webpack')
const cssnext = require('postcss-cssnext')
const reporter = require('postcss-reporter')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: [
    './src/client.jsx'
  ],
  output: {
    path: path.resolve('./public/bundle'),
    publicPath: '/bundle/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.(svg|png|jpg|webm|mp4|woff|woff2)$/,
      loader: 'file'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve('./src'), 'node_modules']
  },
  postcss: [
    cssnext,
    reporter({clearMessages: true})
  ],
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.module.loaders.push({
    test: /\.(css|postcss)$/,
    loader: ExtractTextPlugin.extract({
      fallbackLoader: 'style',
      loader: 'css?-autoprefixer&modules&importLoaders=1!postcss'
    })
  })
  config.plugins.push(
    new ExtractTextPlugin('bundle.css')
  )
} else {
  config.module.loaders.push({
    test: /\.(css|postcss)$/,
    loader: 'style!css?-autoprefixer&modules&importLoaders=1!postcss'
  })
  config.plugins.push(
    new webpack.NoErrorsPlugin()
  )
}

module.exports = config
