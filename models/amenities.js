const mongoose = require('mongoose')

const { Schema } = mongoose

const amenitiesSchema = new Schema({
  amenityName: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Luxury Mansion', 'Basic Room'],
    required: true
  },
  maxOccupancy: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  availability: {
    type: String,
    enum: ['Available', 'Reserved'],
    required: true
  },
  tag: {
    type: String
  }
})
const Amenities = mongoose.model('Amenities', amenitiesSchema)
module.exports = Amenities
