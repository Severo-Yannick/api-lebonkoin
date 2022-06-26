const mysql = require('mysql')
const db = require('../config')

const dataMapper = {
  getAllCategories: query => {
    const sql = 'SELECT * FROM category'
    db.query(sql, query)
  },
  getOneCategoryById: (categoryId, query) => {
    const sql = 'SELECT * FROM category WHERE id = ?'
    db.query(sql, [categoryId], query)
  }
}

module.exports = dataMapper