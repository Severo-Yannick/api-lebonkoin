const dataMapper = require('../dataMapper')

const offersController = {
  getAllOffers: (req, res, next) => {
    dataMapper.getAllOffers((err, results) => {
      if (err)
        return next(err)
      if (results.length)
        res.json(results)
    })
  }
}

module.exports = offersController