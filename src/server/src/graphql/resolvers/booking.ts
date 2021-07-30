import { ObjectId } from 'mongoose'
import { bookingInputType, IBooking } from './../../model/booking'
import Model from '../../model'

const { Booking } = Model

const checkRange = async (room: ObjectId, start: Date, end: Date) => {
  if (start > end) {
    throw new RangeError()
  }

  const booked = await Booking.find({
    room,
    $or: [
      { $and: [{ from: { $gte: start } }, { to: { $lte: end } }] },
      {
        $or: [
          { $and: [{ from: { $lte: start } }, { to: { $gte: start } }] },
          { $and: [{ from: { $lte: end } }, { to: { $gte: end } }] }
        ]
      }
    ]
  })
  if (booked.length) {
    throw new Error('Room is busy')
  }
}

export default {
  bookings: async (): Promise<IBooking[]> => {
    try {
      const booking = await Booking.find()
      return booking
    } catch (error) {
      console.log(error)
      throw error
    }
  },

  bookingsQuery: async ({
    bookingInput: { room, user, from, to }
  }: bookingInputType): Promise<IBooking[]> => {
    await checkRange(room, from, to)
    try {
      const bookings = await Booking.find({ room, user, from, to })
      return bookings
    } catch (error) {
      console.log(error)

      throw error
    }
  },

  createBooking: async ({
    bookingInput: { room, user, from, to }
  }: bookingInputType): Promise<IBooking> => {
    console.log('IN CREATE BOOKING')
    try {
      const fromDate = new Date(from)
      const toDate = new Date(to)
      console.log('>><>>>>', room, user, fromDate, toDate)
      await checkRange(room, fromDate, toDate)
      const booking = await new Booking({
        room,
        user,
        from: fromDate,
        to: toDate
      }).save()

      const extendedBooking = await booking
        .populate('room')
        .populate('user')
        .execPopulate()
      if (!extendedBooking.user) {
        throw new Error('Wrong user')
      }
      if (!extendedBooking.room) {
        throw new Error('Wrong room')
      }
      console.log('Res>>>', extendedBooking)

      return extendedBooking
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
