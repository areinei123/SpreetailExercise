const express = require('express')
var router = express.Router()
var indexRouter = require('./routes.js');

const app = express()

app.use(express.static('dist'))
app.use('/', indexRouter)

app.listen(8080, () => console.log('Listening on port 8080!'))
