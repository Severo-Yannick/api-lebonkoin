const errorMiddleware = (err, res) => {
  return res.status(500).json({
    error: err.message,
    sql: err.sql
  })
}

module.exports = errorMiddleware