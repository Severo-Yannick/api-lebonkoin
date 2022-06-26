const dataMapper = require('../dataMapper')

const offersController = {
  getAllOffers: (req, res, next) => {
    dataMapper.getAllOffers((err, results) => {
      if (err)
        return next(err)
      if (results.length)
        res.json(results)
    })
  },
  getOneOfferById: (req, res, next) => {
    const { offerId } = req.params
    dataMapper.getOneOfferById(offerId, (err, results) => {
      if (err)
        return next(err)
      if (results.length === 0)
        return res.send('No offer found')
      if (results.length)
        return res.json(results)
    })
  }
}

module.exports = offersController