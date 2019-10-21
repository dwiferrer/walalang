const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('./config')

const amenityRouter = require('./routes/amenityRouter')
const serviceRouter = require('./routes/serviceRouter')
const userRouter = require('./routes/userRouter')
const amenityBookingRouter = require('./routes/amenityBookingRouter')
const serviceBookingRouter = require('./routes/serviceBookingRouter')

// mongodb connection
const url = config.mongoUrl
const connect = mongoose.connect(url)

connect.then(
  db => {
    console.log('Connected correctly to server')
  },
  err => {
    console.log(err)
  }
)

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(cors())

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('', amenityRouter)
app.use('', serviceRouter)
app.use('', userRouter)
app.use('/reservation', amenityBookingRouter)
app.use('/reservation', serviceBookingRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
