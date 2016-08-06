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
      loaders: ['react-hot', 'babel']
    }, {
      test: /\.(svg|png|jpg|webm|mp4|woff|woff2)$/,
      loader: 'file'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve('./src')
  },
  postcss: [
    cssnext,
    reporter({clearMessages: true})
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': `"${process.env.NODE_ENV}"`
      }
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.module.loaders.push({
    test: /\.(css|postcss)$/,
    loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer&modules&importLoaders=1!postcss')
  })
  config.plugins.push(
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  )
} else {
  config.entry.push('webpack-hot-middleware/client')
  config.module.loaders.push({
    test: /\.(css|postcss)$/,
    loader: 'style!css?-autoprefixer&modules&importLoaders=1!postcss'
  })
  config.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  )
}

module.exports = config
