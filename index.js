const express = require('express')
const app = express()

// all request will have to go thru this middleware
app.use(express.static('public'))
// app.use(function (req, res, next) {
//   console.log('first middleware')
//   next() // important to continue to next function
// })
//
// app.use(function (req, res, next) {
//   console.log('second middleware')
// })

// listening for request
app.get('/', function (req, res) {
  res.sendFile('index.html')
})

app.get('/about/:name', function (req, res) {
  res.send(req.params)
})

app.get('/faq', function (req, res) {
  res.send('faq page')
})

app.post('/')

var port = process.env.PORT || 3000

app.listen(port, function () {
  console.log('express is running on' + port)
})
