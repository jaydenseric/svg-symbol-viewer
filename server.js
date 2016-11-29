const express = require('express')
const compression = require('compression')
const path = require('path')

const app = express()

app.use(compression())

app.use(express.static(path.resolve('./public')))

app.get('*', (request, response) => {
  response.sendFile(path.resolve('./public/index.html'))
})

app.listen(process.env.PORT, error => {
  if (error) return console.error(error)
  console.info(`Serving at localhost:${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})
