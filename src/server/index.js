const express = require('express')
const router = express.Router()
const indexRouter = require('./routes.js')
const app = express()
// const bodyParser = require('body-parser')

app.use(express.static('dist'))
// app.use(bodyParser)
app.use('/', indexRouter)

app.listen(8080, () => console.log('Listening on port 8080!'))
