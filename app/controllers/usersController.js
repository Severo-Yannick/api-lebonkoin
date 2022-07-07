const dataMapper = require('../dataMapper')
const validateEmail = require('../utils/validateEmail')

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
    res.status(400).send(`${email} is invalid address email !`)

  },
  createUser: (req, res, next) => {
    const userData = req.body
    dataMapper.getOneUserByEmail(userData.email, (err, results) => {
        if (err){
          return next(err)
        }

        if (results.length > 0){
          if (err) {
            return next(err)
          }
          return res.status(409).send(`Conflict, the email ${userData.email} already exists`)
        }
        
        if (results.length === 0){
          dataMapper.createUser(userData, (err, results) => {
            if (err){
              return next(err)
            }
            delete results[0].password
            return res.status(201).send(`The user is created`)
          })
        }
    })
  },
}

module.exports = usersController