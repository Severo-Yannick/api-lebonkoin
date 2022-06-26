const mysql = require('mysql')
const db = require('../config')

const dataMapper = {
  // Category
  getAllCategories: query => {
    const sql = 'SELECT * FROM category'
    db.query(sql, query)
  },
  getOneCategoryById: (categoryId, query) => {
    const sql = 'SELECT * FROM category WHERE id = ?'
    db.query(sql, [categoryId], query)
  },
  // Offers
  getAllOffers: query => {
    const sql = 'SELECT * FROM offers'
    db.query(sql, query)
  },
  getOneOfferById: (offerId, query) => {
    const sql = 'SELECT * FROM offers WHERE id = ?'
    db.query(sql, [offerId], query)
  },
}

module.exports = dataMapper