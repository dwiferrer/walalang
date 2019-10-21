const express = require('express')

const ServiceBooking = require('../models/serviceBookings')

const serviceBookingRouter = express.Router()

serviceBookingRouter.post('/services', (req, res, next) => {
  ServiceBooking.create(req.body).then(() => {
    res.statusCode = 200
    res.json({ service: 'created' })
  })
})

serviceBookingRouter.get('/services', (req, res, next) => {
  ServiceBooking.find({}).then(result => {
    res.statusCode = 200
    res.json(result)
  })
})

serviceBookingRouter.get('/services/:id', (req, res, next) => {
  ServiceBooking.findById(req.params.id).then(result => {
    res.statusCode = 200
    res.json(result)
  })
})

serviceBookingRouter.post('/services/update/:id', (req, res, next) => {
  ServiceBooking.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }).then(() => {
    res.statusCode = 200
    res.json({ update: 'success' })
  })
})
module.exports = serviceBookingRouter
