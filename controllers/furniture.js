const furniture = require('../models/furniture');

const getAllFurniture = async (req, res) => {
  const furnitures = await furniture

  console.log('furnitures', furnitures)
  // res
  res.status(200).send({furnitures})

}

const getFurniture = async (req, res) => {
  console.log(' get furniture', req)
}

const createFurniture = async (req, res) => {
  console.log(' create furniture', req)
}

const updateFurniture = async (req, res) => {
  console.log(' update furniture', req)
}


const deleteFurniture = async (req, res) => {
  console.log(' delete furniture', req)
}

module.exports = {
  getAllFurniture,
  getFurniture,
  createFurniture,
  updateFurniture,
  deleteFurniture
}