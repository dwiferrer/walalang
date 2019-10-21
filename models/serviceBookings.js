const mongoose = require('mongoose')

const { Schema } = mongoose

const serviceBookingsSchema = new Schema(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: 'Services'
    },
    date: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Declined', 'Cancelled']
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
)
const ServiceBookings = mongoose.model('ServiceBookings', serviceBookingsSchema)
module.exports = ServiceBookings
