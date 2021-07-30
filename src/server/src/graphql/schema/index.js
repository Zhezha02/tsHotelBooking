import  { buildSchema } from "graphql";

export default buildSchema(`
type User {
  _id: ID! 
  login: String! 
  password: String
}

type Room {
  _id: ID! 
  number: Int!
  description: String
}

type Booking {
  _id: ID! 
  room: Room!
  user: User!
  from: String!
  to: String!
}

input UserInput {
  login: String!
  password: String!
}

input RoomInput {
  number: Int!
  description: String
}

input BookingInput {
  room: ID!
  user: ID!
  from: String!
  to: String!
}

type RootQuery {
  bookings:[Booking!]!
  bookingsQuery:[Booking!]!
  rooms:[Room!]!
}

type RootMutation {
  createUser(userInput: UserInput): User
  createRoom(roomInput: RoomInput): Room
  createBooking(bookingInput: BookingInput): Booking
}

schema {
  query: RootQuery
  mutation: RootMutation 
}
`);
