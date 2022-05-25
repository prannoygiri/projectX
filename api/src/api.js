var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send("HELLO WORLD!")
})

app.listen(8081, function () {
  console.log("APP listening on port 8081")
})
