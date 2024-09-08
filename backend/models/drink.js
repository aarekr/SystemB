const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1
  },
  type: {
    type: String,
    minlength: 1
  },
  producer: {
    type: String,
    required: true,
    minlength: 1
  },
  year: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
    minlength: 1
  },
})

module.exports = mongoose.model('Drink', schema)
