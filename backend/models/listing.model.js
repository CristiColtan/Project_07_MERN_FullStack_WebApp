import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    additional_description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rooms: {
      type: Number,
      required: true,
    },
    reviews: {
      type: Number,
      required: true,
      default: 0,
    },
    mark: {
      type: String,
      required: true,
      default: "Excellent",
    },
    rating: {
      type: String,
      required: true,
      default: "9.1",
    },
    wifi: {
      type: Boolean,
      required: true,
    },
    parking: {
      type: Boolean,
      required: true,
    },
    pool: {
      type: Boolean,
      required: true,
    },
    imageUrls: {
      type: Array,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
