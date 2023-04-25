const express = require('express');
const { createFurniture, getAllFurniture, getFurniture, deleteFurniture, updateFurniture } = require('../controllers/furniture');

const router = express.Router()


router.route('/').post(createFurniture).get(getAllFurniture)
router.route('/:id').get(getFurniture).delete(deleteFurniture).patch(updateFurniture)

module.exports = router

