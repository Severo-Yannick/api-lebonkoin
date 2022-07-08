const dataMapper = require('../dataMapper')
const validateEmail = require('../utils/validateEmail')
const bcrypt = require('bcrypt') 

const usersController = {
  getAllUsers: (req, res, next) => {
    dataMapper.getAllUsers((err, results) => {
      if (err)
        return next(err)
      if (results.length){
        results.map(user => delete user.password)
        res.json(results)
      }
    })
  },
  getOneUserById: (req, res, next) => {
    const { userId } = req.params
    dataMapper.getOneUserById(userId, (err, results) => {
      if (err)
        return next(err)
      if (results.length === 0)
        return res.send('No user found')
      if (results.length){
        delete results[0].password
        return res.json(results)
      }
    })
  },
  getUserFavoritesById: (req, res, next) => {
    const { userId } = req.params

    dataMapper.getOneUserById(userId, (err, results) => {
      if (err)
        return next(err)
      if (results.length === 0)
        return res.send(`The user id ${userId} not exist`)
      if (results.length){
        dataMapper.getUserFavoritesById(userId, (err, results) => {
          if (err)
            return next(err)
          if (results.length === 0)
            return res.send(`No favorites for user id ${userId}`)
          if (results.length)
            return res.json(results)
        })
      }
    })
  },
  getUserOffersById: (req, res, next) => {
    const { userId } = req.params

    dataMapper.getOneUserById(userId, (err, results) => {
      if (err)
        return next(err)
      if (results.length === 0)
        return res.send(`The user id ${userId} not exist`)
      if (results.length){
        dataMapper.getUserOffersById(userId, (err, results) => {
          if (err)
            return next(err)
          if (results.length === 0)
            return res.send(`No offers for user id ${userId}`)
          if (results.length)
            return res.json(results)
        })
      }
    })
  },
  getOneUserByEmail: (req, res, next) => {
    const { email } = req.body
    if (validateEmail(email)) {
      return dataMapper.getOneUserByEmail(email, (err, results) => {
        if (err)
          return next(err)
        if (results.length === 0)
          res.status(404).send(`${email} is bad address email !`)
        if (results.length){
          delete results[0].password
          return res.json(results)
        }
      })
    }
    return res.status(400).send(`${email} is invalid address email !`)

  },
  createUser: (req, res, next) => {
    const userData = req.body

    if (validateEmail(userData.email)) {
      return dataMapper.getOneUserByEmail(userData.email, (err, results) => {
          if (err){
            return next(err)
          }

          if (results.length > 0){
            return res.status(409).send(`Conflict, the email ${userData.email} already exists`)
          }

          userData.password = bcrypt.hashSync(userData.password, 10)
          
          if (results.length === 0){
            return dataMapper.createUser(userData, (err, results) => {
              if (err){
                return next(err)
              }

              return res.status(201).send(`The user is created`)
            })
          }
      })
    }
    return res.status(400).send(`${userData.email} is invalid pattern address email !`)
  }
}

module.exports = usersController