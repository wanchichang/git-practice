const express = require('express')
const dotenv = require('dotenv')

// load variables from .env
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})