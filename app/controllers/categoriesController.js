const dataMapper = require('../dataMapper')

const categoriesController = {
  getAllCategories: (req, res, next) => {
    dataMapper.getAllCategories((err, results) => {
      if (err) {
        return next(err)
      }
      res.json(results)
    })
  }
}

module.exports = categoriesController
