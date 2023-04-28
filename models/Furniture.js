const mongoose = require('mongoose')


const FurnitureSchema = new mongoose.Schema({
  name: {
    type: String,
    // required:[true, 'Please provide a name for furniture'],
    minLength: 3,
    maxLength: 50,
  },
  type: {
    type: String,
    // required:[true, 'Please provide type of furniture'],
    minLength: 3,
    maxLength: 50,
  },
  image: {
    data: Buffer,
    contentType: String
  },
  description: {
    type: String,
    minLength: 10
  },
  price: {
    type: String,

  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
})

module.exports = mongoose.model('Furniture', FurnitureSchema)