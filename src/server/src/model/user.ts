import { Schema, model, Document, ObjectId } from 'mongoose'
import bcrypt from 'bcrypt'

type UserSchema =  {
  login: string
  password: string
}
interface UserDoc extends Document{
  login: string
  password: string
  id: ObjectId
}

const userSchema = new Schema<UserSchema>({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

userSchema.pre('save', async function (next) {
  const user: UserDoc = this
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 12)
  }
  next()
})

export default model<UserSchema>('User', userSchema)
