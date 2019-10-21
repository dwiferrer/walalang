const express = require('express')

const AmenityBooking = require('../models/amenityBookings')

const amenityBookingRouter = express.Router()

// CREATE AMENITY RESERVATION
amenityBookingRouter.post('/amenities', (req, res, next) => {
  console.log(req.body.guest)
  if (
    ((req.body.startTime >= 900 && req.body.startTime < 1200) ||
      (req.body.startTime <= 900 && req.body.endTime > 900)) &&
    req.body.date === '2019-10-22'
  ) {
    res.json({ time: 'conflict' })
  } else {
    AmenityBooking.create(req.body).then(() => {
      res.statusCode = 200
      res.json({ amenityBooking: 'created' })
    })
  }
})

// VIEW AMENITY BY STATUS
amenityBookingRouter.get('/amenities', (req, res, next) => {
  AmenityBooking.find({ status: new RegExp(req.query.status, 'ig') }).then(
    result => {
      res.statusCode = 200
      res.json(result)
    }
  )
})

// VIEW/UPDATE(STATUS) INDIVIDUAL RESERVED AMENITY
amenityBookingRouter
  .get('/amenities/:id', (req, res, next) => {
    AmenityBooking.findById(req.params.id).then(result => {
      res.statusCode = 200
      res.json(result)
    })
  })
  .post('/amenities/:id', (req, res, next) => {
    AmenityBooking.findByIdAndUpdate(req.params.id, {
      $set: { status: 'Approved' }
    }).then(result => {
      res.statusCode = 200
      res.json(result)
    })
  })

// GET INDIVIDUAL AMENITY WITH RESERVED TIMES (WIP)
amenityBookingRouter.get('/amenities1/:id', (req, res, next) => {
  AmenityBooking.find(
    {
      $and: [{ amenity: req.params.id }, { status: 'Approved' }]
    },
    { startTime: 1 }
  ).then(result => {
    res.json({ unavailableTime: result })
  })
})

amenityBookingRouter.post('/hello', (req, res, next) => {
  AmenityBooking.find({ status: 'Approved' }).then(amenities => {
    const arr = []
    amenities.forEach(amenity => {
      arr.push(amenity.startTime, amenity.endTime)
    })
    console.log(arr)
    if (
      ((req.body.startTime >= arr[0] && req.body.startTime < arr[1]) ||
        (req.body.startTime <= arr[0] && req.body.endTime > arr[0])) &&
      req.body.date === '2019-10-22'
    ) {
      res.json({ time: 'conflict' })
    } else {
      AmenityBooking.create(req.body).then(() => {
        res.statusCode = 200
        res.json({ amenityBooking: 'created' })
      })
    }
  })
})

module.exports = amenityBookingRouter
