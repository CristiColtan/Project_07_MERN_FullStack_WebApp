import express from "express";

import {
  getProperties,
  deleteProperty,
  deleteUserAdmin,
  getUsers,
  getRentals,
  deleteRentalAdmin,
  getBookings,
  deleteBookingAdmin,
} from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/get/properties", getProperties);
router.delete("/delete/:id", deleteProperty);
router.delete("/delete-user/:id", deleteUserAdmin);
router.get("/get/users", getUsers);
router.get("/get/rentals", getRentals);
router.delete("/delete-rental/:id", deleteRentalAdmin);
router.get("/get/bookings", getBookings);
router.delete("/delete-booking/:id", deleteBookingAdmin);

export default router;
