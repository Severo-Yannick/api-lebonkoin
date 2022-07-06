const express = require('express')
const favoritesController = require('../controllers/favoritesController')
const router = express.Router()

router.get('/', favoritesController.getAllFavorites)

module.exports = router