const dataMapper = require('../dataMapper')

const usersController = {
  getAllUsers: (req, res, next) => {
    console.log('getAllUsers')
    dataMapper.getAllUsers((err, results) => {
      if (err)
        return next(err)
      if (results.length)
        res.json(results)
    })
  }
}

module.exports = usersController