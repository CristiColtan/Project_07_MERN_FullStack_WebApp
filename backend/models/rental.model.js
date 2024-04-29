import mongoose from "mongoose";

const rentalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: Array,
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    large_bag: {
      type: Boolean,
      required: true,
    },
    small_bag: {
      type: Boolean,
      required: true,
    },
    transmission: {
      type: String,
      required: true,
    },
    un_mileage: {
      type: Boolean,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Rental = mongoose.model("Rental", rentalSchema);

export default Rental;
