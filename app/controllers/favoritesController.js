const dataMapper = require('../dataMapper')

const favoritesController = {
  getAllFavorites: (req, res, next) => {
    dataMapper.getAllFavorites((err, results) => {
      if (err) {
        return next(err)
      }
      res.json(results)
    })
  },
  addOfferToFavorite: (req, res, next) => {
    const favoriteData = req.body
    dataMapper.addOfferToFavorite(favoriteData, (err, results) => {
      if (err){
        return next(err)
      }

      res.send(`Offer id: ${req.body.offers_id} added to favorites`);
    })
  },
}

module.exports = favoritesController
