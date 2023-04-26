const mongoose = require('mongoose')


const FurnitureSchema = new mongoose.Schema({
  name: {
    type: String,
    required:[true, 'Please provide type of furniture'],
    minLength: 3,
    maxLength: 50,
  },
  type: {
    type: String,
    required:[true, 'Please provide type of furniture'],
    minLength: 3,
    maxLength: 50,
  },
  // brand: {
  //   type: String,
  //   required:[true, 'Please provide furniture brand'],
    
  // },
  // img: {
  //   data: Buffer,
  //   contentType: String
  // },
  desciprtion: {
    type: String,
    minLength: 10
  },
  price: {
    type: String,

  },
  productId: {
    type: mongoose.Types.ObjectId,
    required: true
}
})

module.exports = mongoose.model('Furniture', FurnitureSchema)