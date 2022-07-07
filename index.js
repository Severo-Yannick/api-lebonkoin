require ('dotenv').config()
const express = require('express')
const errorMiddleware = require('./app/middlewares/error')
const app = express()
const api = require('./app/routes')

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', api)
app.use(errorMiddleware)

app.listen(PORT, err => {
    if (err) {
      throw new Error(err.message)
    }
    console.log(`Server listening on port: ${PORT}`)
  }
)