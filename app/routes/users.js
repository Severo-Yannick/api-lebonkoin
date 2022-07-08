const express = require('express')
const usersController = require('../controllers/usersController')
const router = express.Router()

router.get('/', usersController.getAllUsers)
router.get('/:userId', usersController.getOneUserById)
router.get('/:userId/favorite', usersController.getUserFavoritesById)

router.post('/email', usersController.getOneUserByEmail)
router.post('/signup', usersController.createUser)

module.exports = router