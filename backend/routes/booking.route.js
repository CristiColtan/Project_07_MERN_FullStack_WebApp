import express from "express";

import { verifyToken } from "../utils/verifyUser.js";
import {
  createBooking,
  deleteBooking,
} from "../controllers/booking.controller.js";

const router = express.Router();

router.post("/create", verifyToken, createBooking);
router.delete("/delete/:id", verifyToken, deleteBooking);

export default router;
