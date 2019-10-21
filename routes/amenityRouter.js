const express = require('express')

const Amenity = require('../models/amenities')

const amenityRouter = express.Router()

// CREATE AMENITY
amenityRouter.post('/amenities', (req, res, next) => {
  Amenity.create(req.body).then(() => {
    res.statusCode = 200
    res.json({ amenity: 'created' })
  })
})

// GET ALL AMENITY
amenityRouter.get('/amenities', (req, res, next) => {
  Amenity.find({}).then(result => {
    res.statusCode = 200
    res.json(result)
  })
})

// GET INDIVIDUAL AMENITY
amenityRouter.get('/amenities/:id', (req, res, next) => {
  Amenity.findById(req.params.id).then(result => {
    res.statusCode = 200
    res.json(result)
  })
})

module.exports = amenityRouter
