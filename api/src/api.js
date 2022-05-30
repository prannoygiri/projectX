var express = require('express')
var app = express()
const auth = require('./middlewares/auth')
app.get('/', function (req, res) {
  res.send("HELLO WORLD!")
})

app.listen(8082, function () {
  console.log("APP listening on port 8081")
})

app.get('/', (req, res) =>
  res.render("Hello there ")
)
app.use(auth)
