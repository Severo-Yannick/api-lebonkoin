const express = require('express')
const router = express.Router()
const categories = require('./categories')
const offers = require('./offers')
const users = require('./users')
const favorites = require('./favorites')

router.use('/categories', categories)
router.use('/offers', offers)
router.use('/users', users)
router.use('/favorites', favorites)

module.exports = router