import path from 'path'
import express from 'express'
import mongoose from 'mongoose'
import schema from './graphql/schema'
 
// import pug from 'pug'
// import connect from './db/mongoose'

const { SERVER_PORT: port = 3000 } = process.env

import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.set('views', path.join(__dirname, 'view'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})


const {
  MONGO_USER: user = 'developer',
  MONGO_PASSWORD: password = 'password',
  MONGO_DB: db = 'db',
  ME_CONFIG_MONGODB_SERVER: host = 'dbmongo'
} = process.env

const PATH = `mongodb://${user}:${password}@${host}:27017/${db}?authSource=admin`

mongoose
  .connect(PATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log(`MONGOOSE START on port 27017`)
    app.listen(port, () => {
      console.log(`server listen port ${port}`)
    })
  })
  .catch(err => console.log(err))