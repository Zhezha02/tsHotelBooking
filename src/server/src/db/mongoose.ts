import mongoose from 'mongoose'
const {
  MONGO_USER: user = 'developer',
  MONGO_PASSWORD: password = 'password',
  MONGO_DB: db = 'db',
  ME_CONFIG_MONGODB_SERVER: host = 'dbmongo'
} = process.env

const path = `mongodb://${user}:${password}@${host}:27017/${db}?authSource=admin`

export default mongoose.connect(path, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
