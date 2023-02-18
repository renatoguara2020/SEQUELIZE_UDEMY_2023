var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('<h1>Hello World com Express na porta 8000!</h1>')
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})