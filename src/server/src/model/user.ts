import { Schema, model, Model, ObjectId } from 'mongoose'
import bcrypt from 'bcrypt'
// import { UserSchema } from '../types'

export interface IUser {
  login: string
  password: string
  id: ObjectId
}

const userSchema = new Schema<IUser>({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

userSchema.pre('save', async function (next) {
  // const user: UserModel = this
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12)
  }
  next()
})

export const User = model<IUser>('User', userSchema)
