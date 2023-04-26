const { BadRequestError, NotFoundError } = require('../errors');
const Furniture = require('../models/furniture');
const { StatusCodes } = require('http-status-codes')

const getAllFurniture = async (req, res) => {
  const furnitures = await Furniture.find({})

  // res
  res.status(StatusCodes.OK).send({furnitures})

}

const getFurniture = async (req, res) => {

  const {params: {id: furnitureId}} = req

  const furniture = await Furniture.findOne({
    _id: furnitureId,
  })

  if (!furniture) {
    throw new NotFoundError(`No furniture with id: ${furnitureId}`)
  }

  res.status(StatusCodes.OK).json({furniture})
}

const createFurniture = async (req, res) => {
  console.log(' create furniture', req.body)
  const furniture = await Furniture.create(req.body)

  res.status(StatusCodes.CREATED).json({furniture})
}

const updateFurniture = async (req, res) => {
  const {id: furnitureId} = req.params
  const furniture = await Furniture.findOneAndUpdate({ _id:furnitureId}, req.body, {
    new:true,
    runValidators:true
  })

  if (!furniture) {
    throw new BadRequestError(`No furniture with id : ${taskID}`)
  }
  res.status(200).json({furniture})
}


const deleteFurniture = async (req, res) => {
  const {id: furnitureId} = req.params
  const furniture = await Furniture.findOneAndDelete({_id:furnitureId})

  if (!furniture) {
    throw new NotFoundError(`No product with the id: ${furnitureId}`)
  }
  res.status(StatusCodes.OK).json({furniture})
}

module.exports = {
  getAllFurniture,
  getFurniture,
  createFurniture,
  updateFurniture,
  deleteFurniture
}