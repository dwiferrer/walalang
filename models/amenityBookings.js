const mongoose = require('mongoose')

const { Schema } = mongoose

const amenityBookingsSchema = new Schema(
  {
    amenity: {
      type: Schema.Types.ObjectId,
      ref: 'Amenities'
    },
    guest: {
      type: Number,
      required: true
    },
    startTime: {
      type: Number
    },
    endTime: {
      type: Number
    },
    duration: {
      type: Number,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Declined', 'Cancelled'],
      default: 'Pending'
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
)
const AmenityBookings = mongoose.model('AmenityBookings', amenityBookingsSchema)
module.exports = AmenityBookings
