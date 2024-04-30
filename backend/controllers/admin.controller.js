import { errorHandler } from "../utils/error.js";
import Listing from "../models/listing.model.js";
import User from "../models/user.model.js";
import Rental from "../models/rental.model.js";
import Booking from "../models/booking.model.js";

export const getProperties = async (req, res, next) => {
  try {
    const listings = await Listing.find();
    res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({ isadmin: { $ne: "Yes" } });
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getRentals = async (req, res, next) => {
  try {
    const rentals = await Rental.find();
    res.status(200).json(rentals);
  } catch (error) {
    next(error);
  }
};

export const getBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    next(error);
  }
};

export const deleteRentalAdmin = async (req, res, next) => {
  try {
    await Rental.findByIdAndDelete(req.params.id);
    res.status(200).json("Rental has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const deleteBookingAdmin = async (req, res, next) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json("Booking has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const deleteUserAdmin = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const deleteProperty = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return next(errorHandler(404, "Listing not found!"));
  }

  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json("Listing has been deleted!");
    next(error);
  } catch (error) {}
};
