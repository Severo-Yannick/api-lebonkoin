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
  createOffer: (offerData, query) => {
    let sql = 'INSERT INTO ?? SET ?'
    const inserts = ['offers', offerData]
    sql = mysql.format(sql, inserts)
    db.query(sql, query)
  },
  updateOffer: (updateOfferData, offerId, query) => {
    let sql = 'UPDATE ?? SET ? WHERE ?? = ?'
    const inserts = ['offers', updateOfferData, 'id', offerId]
    sql = mysql.format(sql, inserts)
    db.query(sql, query)
  },
  deleteOffer: (offerId, query) => {
    let sql = 'DELETE FROM ?? WHERE ?? = ?'
    const inserts = ['offers', 'id', offerId]
    sql = mysql.format(sql, inserts)
    db.query(sql, query)
  },
  // Users
  getAllUsers: query => {
    const sql = 'SELECT * FROM users'
    db.query(sql, query)
  },
  getOneUserById: (userId, query) => {
    const sql = 'SELECT * FROM users WHERE id = ?'
    db.query(sql, [userId], query)
  },
  getOneUserByEmail: (email, query) => {
    let sql = "SELECT * FROM ?? WHERE ??  = ?"
    const inserts = ["users", "email", email]
    sql = mysql.format(sql, inserts)
    db.query(sql, query)
  },
  createUser: (userData, query) => {
    let sql = 'INSERT INTO ?? SET ?'
    const inserts = ['users', userData]
    sql = mysql.format(sql, inserts)
    db.query(sql, query)
  },
  // Favorite
  getAllFavorites: query => {
    const sql = 'SELECT * FROM favorite'
    db.query(sql, query)
  },
  addOfferToFavorite: (favoriteData, query) => {
    let sql = 'INSERT INTO ?? SET ?'
    const inserts = ['favorite', favoriteData]
    sql = mysql.format(sql, inserts)
    db.query(sql, query)
  },
  getUserFavoritesById: (userId, query) => {
    let sql = `
    SELECT * FROM ?? AS a
    JOIN ?? AS f on ?? = ??
    WHERE ?? = ?`
    const inserts = [
      "offers",
      "favorite",
      "a.id",
      "f.offers_id",
      "f.users_id",
      userId
    ]

    sql = mysql.format(sql, inserts)
    db.query(sql, query)
  },
}

module.exports = dataMapper