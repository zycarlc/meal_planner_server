const express = require('express')
const app = express()
const config = require('./config')

app.use(express.urlencoded({ extended: true }))
app.use(require('./middlewares/method_override'))

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`)
})
