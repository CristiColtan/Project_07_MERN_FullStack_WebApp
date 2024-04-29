import express from "express";
import { createRental, getRentals } from "../controllers/rental.controller.js";

const router = express.Router();

router.post("/create", createRental);
router.get("/get", getRentals);

export default router;
