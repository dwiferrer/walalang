const express = require('express')

const User = require('../models/users')

const AmenityBookings = require('../models/amenityBookings')

const userRouter = express.Router()

userRouter.post('/users', (req, res, next) => {
  User.create(req.body).then(() => {
    res.statusCode = 200
    res.json({ user: 'created' })
  })
})

userRouter.get('/users', (req, res, next) => {
  User.find({}).then(result => {
    res.statusCode = 200
    res.json(result)
  })
})

userRouter.get('/users/:id', (req, res, next) => {
  User.findById(req.params.id).then(result => {
    res.statusCode = 200
    res.json(result)
  })
})

// VIEW USER RESERVED AMENITIES
userRouter.get('/users/:id/amenities', (req, res, next) => {
  AmenityBookings.find({
    $and: [
      { user: req.params.id },
      { status: new RegExp(req.query.status, 'ig') }
    ]
  })
    .then(
      amenities => {
        res.json(amenities)
      },
      err => next(err)
    )
    .catch(err => next(err))
})

module.exports = userRouter
