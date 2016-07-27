import express from 'express'
import path from 'path'

var app = express()

// Client
if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDev = require('webpack-dev-middleware')
  const webpackHot = require('webpack-hot-middleware')
  const webpackConfig = require('../webpack.config')
  const compiler = webpack(webpackConfig)
  app.use(webpackDev(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
  }))
  app.use(webpackHot(compiler))
}
app.use(express.static(path.resolve(__dirname, '../public')))
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../public/index.html'))
})

app.listen(process.env.PORT, error => {
  if (error) return console.log(error)
  return console.info(`Listening on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})
