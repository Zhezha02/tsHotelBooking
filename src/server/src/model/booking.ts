import { Schema, model, Types, ObjectId } from 'mongoose'

const { ObjectId } = Types

export interface IBooking {
  room: ObjectId
  user: ObjectId
  from: Date
  to: Date
}

const bookingSchema = new Schema<IBooking>({
  room: { type: ObjectId, ref: 'Room', required: true },
  user: { type: ObjectId, ref: 'User', required: true },
  from: { type: Date, required: true },
  to: { type: Date, required: true }
})

export const Booking = model<IBooking>('Booking', bookingSchema)
