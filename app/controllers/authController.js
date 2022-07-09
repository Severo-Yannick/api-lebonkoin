const dataMapper = require('../dataMapper')
const validateEmail = require('../utils/validateEmail')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authController = {
  login: (req, res, next) => {
    const { email, password } = req.body

    if (validateEmail(email)) {
      return dataMapper.getOneUserByEmail(email, (err, results) => {
        if (err) return next(err)
        if (results.length === 0)
          res.status(404).send(`${email} is bad address email !`)
        if (results.length) {
          const dbPassword = results[0].password
          const clientPassword = password
          const checkPasswords = bcrypt.compareSync(clientPassword, dbPassword)

          if (checkPasswords) {
            return jwt.sign(
              { results },
              process.env.JWT_SECRET_KEY,
              { expiresIn: '1h' },
              (err, token) => {
                if (err) {
                  return next(err)
                }
                res.json({ token })
              }
            )
          }
          return res.status(403).send(`Email or Password is wrong !`)
        }
      })
    }
    return res.status(400).send(`${email} is invalid address email !`)
  }
}

module.exports = authController
