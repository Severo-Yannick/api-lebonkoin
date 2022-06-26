const mysql = require('mysql')
const db = require('../config')

const dataMapper = {
  getAllCategories: query => {
    const sql = 'SELECT * FROM category'
    db.query(sql, query)
  }
}

module.exports = dataMapper