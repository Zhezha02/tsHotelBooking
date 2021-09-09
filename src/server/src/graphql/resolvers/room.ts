import { IRoom, roomInputType } from '../../model/room'
import Models from '../../model'

const { Room } = Models

const res = {
  rooms: async () => Room.find({}),

  createRoom: async ({
    roomInput: { number, description }
  }: roomInputType): Promise<IRoom> => {
    try {
      if (await Room.findOne({number})) {
        throw new Error('Room already exists')
      }
      return new Room({number, description}).save()
    } catch (err) {
      console.error(err)
      throw err
    }
  }
}
export default res