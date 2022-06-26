const express = require('express')
const router = express.Router()
const categories = require('./categories')
const offers = require('./offers')
const users = require('./users')

router.use('/categories', categories)
router.use('/offers', offers)
router.use('/users', users)

module.exports = router