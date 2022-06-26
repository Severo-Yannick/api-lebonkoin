const express = require('express')
const categoriesController = require('../controllers/categoriesController')
const router = express.Router()

router.get('/', categoriesController.getAllCategories)

module.exports = router