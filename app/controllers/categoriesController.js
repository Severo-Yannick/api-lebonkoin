const dataMapper = require('../dataMapper')

const categoriesController = {
  getAllCategories: (req, res, next) => {
    dataMapper.getAllCategories((err, results) => {
      if (err) {
        return next(err)
      }
      res.json(results)
    })
  },
  getOneCategoryById: (req, res, next) => {
    const { categoryId } = req.params
    dataMapper.getOneCategoryById(categoryId, (err, results) => {
      if (err)
        return next(err)
      if (results.length === 0)
        return res.send('No category found')
      if (results.length)
        return res.json(results)
    })
  }
}

module.exports = categoriesController
