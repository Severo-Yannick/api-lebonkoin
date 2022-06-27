const dataMapper = require('../dataMapper')

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
}

module.exports = usersController