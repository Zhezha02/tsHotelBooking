import { Schema, model, Model, ObjectId } from 'mongoose'

export interface IRoom {
  number: number
  description: string
  id: ObjectId
}

const roomSchema = new Schema<IRoom>({
  number: { type: Number, required: true, unique: true },
  description: { type: String }
})

export const Room = model<IRoom>('Room', roomSchema)
