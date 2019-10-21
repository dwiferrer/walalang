const mongoose = require('mongoose')

const { Schema } = mongoose

const usersSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: Number
  },
  isOnline: {
    type: Boolean,
    default: false
  }
})
const Users = mongoose.model('Users', usersSchema)
module.exports = Users
