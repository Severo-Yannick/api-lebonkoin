const express = require('express')
const usersController = require('../controllers/usersController')
const router = express.Router()

router.get('/', usersController.getAllUsers)
router.get('/:userId', usersController.getOneUserById)

module.exports = router