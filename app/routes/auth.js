const express = require('express')
const authController = require('../controllers/authController')
const router = express.Router()

router.post('/', authController.authorization)
router.post('/login', authController.login)

module.exports = router