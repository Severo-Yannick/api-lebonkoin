const express = require('express')
const router = express.Router()
const categories = require('./categories')
const offers = require('./offers')

router.use('/categories', categories)
router.use('/offers', offers)

module.exports = router