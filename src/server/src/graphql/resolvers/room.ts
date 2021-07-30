import { IRoom, roomInputType } from './../../model/room'

import Models from '../../model'

const { Room } = Models
export default {
  rooms: async (): Promise<IRoom[]> => {
    const rooms = await Room.find({})
    return rooms
  },

  createRoom: async ({
    roomInput: { number, description }
  }: roomInputType): Promise<IRoom> => {
    try {
      console.log('OLOLOLO')

      if (await Room.findOne({ number })) {
        throw new Error('Room already exists')
      }
      const room: IRoom = await new Room({ number, description }).save()
      return room
    } catch (err) {
      console.error(err)
      throw err
    }
  }
}
