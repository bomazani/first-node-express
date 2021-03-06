const express = require('express')
const path = require('path')
// more conventional part 1
const hoganMiddleware = require('hogan-middleware')

const app = express()
// set the views directory to the 'views' folder
app.set('views', path.join(__dirname,'views'))
// set the view engine to be 'mustache'
app.set('view engine', 'mustache')
// specified the hogan-middleware for the express configuration 
// (*replaced*) app.engine('mustache', require('hogan-middleware').__express)
// more conventional part 2
app.engine('mustache', hoganMiddleware.__express)
// tell app where to find static assets
app.use(express.static(path.join(__dirname, 'public')))

const indexRouter = require('./routes/index')
app.use('/', indexRouter)

app.listen(3000)
console.log("Server is running on http://localhost:3000")