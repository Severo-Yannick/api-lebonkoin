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
  },
  createOffer: (req, res, next) => {
    const offerData = req.body
    dataMapper.createOffer(offerData, (err, results) => {
      if (err)
        return next(err)

      dataMapper.getOneOfferById(results.insertId, (err, results) => {
        if (err) {
          return next(err)
        }
        res.json(results[0])
      })
    })
  },
  updateOffer: (req, res, next) => {
    const { offerId } = req.params
    const updateOfferData = req.body

    dataMapper.getOneOfferById(offerId, (err, offer) => {
      if (err)
        return next(err);

      if (offer.length === 0)
        return res.send('No offers found')

      dataMapper.updateOffer(updateOfferData, offerId, (err, results) => {
        if (err)
          return next(err)

        dataMapper.getOneOfferById(offerId, (err, offer) => {
          if (err) {
            return next(err)
          }
          res.json(offer[0])
        })
      })
    })
  },
  deleteOffer: (req, res, next) => {
    const { offerId } = req.params
    dataMapper.deleteOffer(offerId, (err, results) => {
      if (err)
        return next(err)

      if (results.affectedRows === 0) {
        return res
          .status(422) // https://developer.mozilla.org/fr/docs/Web/HTTP/Status/422
          .send(`Offer ${offerId} could not be deleted`)
      }
      res.status(200).send('The offer has been removed')
    });
  },
}

module.exports = offersController