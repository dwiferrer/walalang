const express = require('express')

const Service = require('../models/services')

const ServiceBooking = require('../models/serviceBookings')

const serviceRouter = express.Router()

// CREATE SERVICE
serviceRouter.post('/services', (req, res, next) => {
  Service.create(req.body).then(() => {
    res.statusCode = 200
    res.json({ service: 'created' })
  })
})

// GET ALL SERVICE
serviceRouter.get('/services', (req, res, next) => {
  Service.find({}).then(result => {
    res.statusCode = 200
    res.json(result)
  })
})

// GET INDIVIDUAL SERVICE
serviceRouter.get('/services/:id', (req, res, next) => {
  Service.findById(req.params.id).then(result => {
    res.statusCode = 200
    res.json(result)
  })
})

module.exports = serviceRouter
