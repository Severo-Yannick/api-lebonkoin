require ('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.listen(PORT, err => {
    if (err) {
      throw new Error(err.message)
    }
    console.log(`Server listening on port: ${PORT}`)
  }
)