import { Schema, model } from 'mongoose'

type RoomSchema =  {
  number: number
  description: string
}

const roomSchema = new Schema<RoomSchema>({
  number: { type: Number, required: true, unique: true },
  description: { type: String }
})

export default model<RoomSchema>('Room', roomSchema)
