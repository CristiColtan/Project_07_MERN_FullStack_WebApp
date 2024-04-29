import express from "express";

import {
  getProperties,
  deleteProperty,
  deleteUserAdmin,
  getUsers,
} from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/get/properties", getProperties);
router.delete("/delete/:id", deleteProperty);
router.delete("/delete-user/:id", deleteUserAdmin);
router.get("/get/users", getUsers);

export default router;
