const express = require('express')
const { get } = require('http')
const offersController = require('../controllers/offersController')
const router = express.Router()

router.get('/', offersController.getAllOffers)

module.exports = router