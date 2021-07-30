// import { roomInput } from './room'
import { Schema, model, ObjectId } from 'mongoose'

export interface IRoom {
  number: number
  description: string | null
  id: ObjectId
}
export type roomInput = {
  number: number
  description: string | null
}
export type roomInputType = {
  roomInput: roomInput
}

const roomSchema = new Schema<IRoom>({
  number: { type: Number, required: true, unique: true },
  description: { type: String }
})

export const Room = model<IRoom>('Room', roomSchema)
