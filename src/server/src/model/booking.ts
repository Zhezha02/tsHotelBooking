import { Schema, model, Types } from 'mongoose'

const { ObjectId } = Types

type BookingSchema =  {
  login: string
  password: string
}

const bookingSchema = new Schema<BookingSchema>({
  room: { type: ObjectId, ref: 'Room', required: true },
  user: { type: ObjectId, ref: 'User', required: true },
  from: { type: Date, required: true },
  to: { type: Date, required: true }
})
export default model<BookingSchema>('Booking', bookingSchema)
