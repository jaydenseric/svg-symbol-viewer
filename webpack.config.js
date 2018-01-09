const path = require('path')
const webpack = require('webpack')

const config = {
  entry: './src/client',
  output: {
    path: path.resolve(__dirname, 'public/bundle'),
    publicPath: '/bundle/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.svg$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.devtool = 'source-map'
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: true
    })
  )
} else {
  config.devtool = 'cheap-module-source-map'
  config.plugins.push(new webpack.NoErrorsPlugin())
}

module.exports = config
