import {IUser, userInputSchema} from '../../model/user'
import Model from '../../model'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const {User} = Model

const {JWT_KEY = 'secret_key'} = process.env

export default {
  createUser: async ({
                       userInput: {login, password}
                     }: userInputSchema): Promise<{ token: string }> => {
    try {
      const existingUser = await User.findOne({login})

      if (existingUser) {
        throw new Error('User exists already.')
      }

      const preparedUser = new User({
        login,
        password
      })

      const user: IUser = await preparedUser.save()

      const token: string = jwt.sign(
        {userId: user.id, login: user.login},
        JWT_KEY,
        {expiresIn: '1h'}
      )

      return {token}
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  login: async ({userInput: {login, password}}: userInputSchema): Promise<{ token: string }> => {
    const user: IUser | null = await User.findOne({login})
    if (!user) {
      throw new Error('User does not exist!')
    }
    const isEqual = await bcrypt.compare(password, user.password)
    if (!isEqual) {
      throw new Error('Password is incorrect!')
    }
    return {
      token: jwt.sign({userId: user.id, login: login}, JWT_KEY, {
        expiresIn: '1h'
      })
    }
  }
};
