const mongoose = require('mongoose')

const { Schema } = mongoose

const servicesSchema = new Schema({
  serviceName: {
    type: String,
    required: true
  },
  staff: {
    type: Number,
    required: true
  },
  availability: {
    type: String,
    enum: ['Available', 'Reserved'],
    required: true
  },
  image: {
    type: String,
    required: true
  }
})
const Services = mongoose.model('Services', servicesSchema)
module.exports = Services
