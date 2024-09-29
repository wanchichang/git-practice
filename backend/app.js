const express = require('express')
const dotenv = require('dotenv')

// load variables from .env
dotenv.config()

const app = express()

// 若沒有設定PORT這個環境變數，預設為3000
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
