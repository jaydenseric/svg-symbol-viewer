const path = require('path')
const webpack = require('webpack')

const config = {
  entry: './src/client.jsx',
  output: {
    path: path.resolve(__dirname, 'public/bundle'),
    publicPath: '/bundle/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.js', '.jsx']
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
