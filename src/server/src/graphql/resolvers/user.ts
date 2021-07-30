import { IUser, userInputSchema } from './../../model/user'
import Model from '../../model'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const { User } = Model

const { JWT_KEY = 'secret_key' } = process.env

export default {
  createUser: async ({
    userInput: { login, password }
  }: userInputSchema): Promise<string> => {
    try {
      console.log('FROM USER CREATE')

      const existingUser = await User.findOne({ login })

      if (existingUser) {
        throw new Error('User exists already.')
      }

      const preparedUser = new User({
        login,
        password
      })
      const user: IUser = await preparedUser.save()
      console.log('USER', user)
      const token: string = jwt.sign(
        { userId: user.id, login: user.login },
        JWT_KEY,
        { expiresIn: '1h' }
      )
      console.log('token', token)

      return {token:to}
      // return user
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  login: async ({
    userInput: { login, password }
  }: userInputSchema): Promise<string> => {
    const user: IUser | null = await User.findOne({ login })
    if (!user) {
      throw new Error('User does not exist!')
    }
    const isEqual = await bcrypt.compare(password, user.password)
    if (!isEqual) {
      throw new Error('Password is incorrect!')
    }
    const token: string = jwt.sign({ userId: user.id, login: login }, JWT_KEY, {
      expiresIn: '1h'
    })
    return token
  }
}
