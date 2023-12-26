const PORT = process.env.PORT || 8080

async function launch () {
  const { errors } = require('celebrate')
  const express = require('express')
  const cors = require('cors')
  const app = express()
  const api = require('./api')

  app.use(cors({ origin: true }))
  app.use(express.json())
  app.use('/api', api)
  app.use(errors())

  app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`)
  })
}

launch()
