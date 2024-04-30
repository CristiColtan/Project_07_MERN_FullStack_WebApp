import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userRef: {
      type: String,
      required: true,
    },
    hotelName: {
      type: String,
      required: true,
    },
    reservationDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
