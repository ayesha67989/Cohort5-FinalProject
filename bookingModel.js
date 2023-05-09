const mongoose = require("mongoose"); // rest API(JSon format)

const BookingSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telephone: {
    type: Number,
    required: true,
  },
  roomName: {
    type: String,
    
  },
  roomQty: {
    type: Number,
    
  },
  checkIn: {
    type: String,
    required: true,
  },
  checkOut: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
