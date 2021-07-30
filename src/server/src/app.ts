import path from 'path'
import express from 'express'
import connect from './db/mongoose'

const { SERVER_PORT: port = 3000 } = process.env

import { config } from 'dotenv'
config()

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

connect
  .then(() => {
    console.log(`MONGOOSE START on port 27017`)
    app.listen(port, () => {
      console.log(`server listen port ${port}`)
    })
  })
  .catch(err => console.log(err))
