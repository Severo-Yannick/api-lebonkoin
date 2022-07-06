const dataMapper = require('../dataMapper')

const favoritesController = {
  getAllFavorites: (req, res, next) => {
    dataMapper.getAllFavorites((err, results) => {
      if (err) {
        return next(err)
      }
      res.json(results)
    })
  }
}

module.exports = favoritesController
