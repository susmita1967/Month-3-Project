const User = require('../models/user');
const Hotel = require('../models/hotel');
const Room = require('../models/room');
const RoomType = require('../models/roomType');
const Booking = require('../models/booking');

const resolvers = {
  Query: {
    users: async () => {
      return await User.findAll();
    },
    hotels: async () => {
      return await Hotel.findAll();
    },
    rooms: async () => {
      return await Room.findAll();
    },
    roomTypes: async () => {
      return await RoomType.findAll();
    },
    bookings: async () => {
      return await Booking.findAll();
    }
  },
  Mutation: {
    createUser: async (_, { username, email, role }) => {
      return await User.create({ username, email, role });
    },
    createHotel: async (_, { name, address, description }) => {
      return await Hotel.create({ name, address, description });
    },
    createRoom: async (_, { hotelId, roomTypeId, number, description }) => {
      return await Room.create({ hotelId, roomTypeId, number, description });
    },
    createRoomType: async (_, { name, description, price }) => {
      return await RoomType.create({ name, description, price });
    },
    createBooking: async (_, { userId, roomId, checkInDate, checkOutDate, status }) => {
      return await Booking.create({ userId, roomId, checkInDate, checkOutDate, status });
    }
  }
};

module.exports = resolvers;
