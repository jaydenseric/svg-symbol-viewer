const path = require('path')
const webpack = require('webpack')

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
      test: /\.svg$/,
      loader: 'file'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve('./src'), 'node_modules']
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ]
}

if (process.env.NODE_ENV !== 'production') {
  config.devtool = 'source-map'
  config.plugins.push(
    new webpack.NoErrorsPlugin()
  )
}

module.exports = config
