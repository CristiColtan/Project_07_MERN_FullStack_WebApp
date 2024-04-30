import Booking from "../models/booking.model.js";
import { errorHandler } from "../utils/error.js";

export const createBooking = async (req, res, next) => {
  const existingBooking = await Booking.findOne({
    hotelName: req.body.hotelName,
    reservationDate: req.body.reservationDate,
  });

  if (existingBooking) {
    return next(errorHandler(400, "This date is already reserved!"));
  }
  try {
    const booking = await Booking.create(req.body);
    return res.status(201).json(booking);
  } catch (error) {
    next(error);
  }
};

export const deleteBooking = async (req, res, next) => {
  const booking = await Booking.findById(req.params.id);

  if (!booking) {
    return next(errorHandler(404, "Listing not found!"));
  }

  if (req.user.id !== booking.userRef) {
    return next(errorHandler(401, "You can only delete your own listings!"));
  }

  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json("Listing has been deleted!");
    next(error);
  } catch (error) {}
};
