const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

// public is referring to directory in the root folder
app.use(express.static('public'))

// setting dynamic view folders
app.engine('handlebars', exphbs({
  // handlebars configurations
  defaultLayout: 'main',
  partialsDir: 'views/partials'
}))
app.set('view engine', 'handlebars')

// listening for request
app.get('/', function (req, res) {
  // this will be your search through db
  var user = {
    name: 'Joc',
    email: 'joc@ga.co',
    isAdmin: false
  }

  var blogs = [{
    title: 'my blogpost',
    content: 'my first blog post'
  },
    {
      title: 'second blogpost',
      content: 'my second blog post'
    }
  ]

  res.render('index', {
    user,
    blogs
  })
})

app.get('/about', function (req, res) {
  res.render('about')
})

app.get('/faq', function (req, res) {
  res.render('faq')
})

app.post('/')

var port = process.env.PORT || 3000

app.listen(port, function () {
  console.log('express is running on port' + port)
})
