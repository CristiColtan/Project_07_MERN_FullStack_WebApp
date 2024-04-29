import Rental from "../models/rental.model.js";
import { errorHandler } from "../utils/error.js";

export const createRental = async (req, res, next) => {
  try {
    const rental = await Rental.create(req.body);
    return res.status(201).json(rental);
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
