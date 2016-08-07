const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.resolve('./public')))

app.get('*', (request, response) => {
  response.sendFile(path.resolve('./public/index.html'))
})

app.listen(process.env.PORT, error => {
  if (error) return console.log(error)
  return console.info(`Serving at localhost on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})
