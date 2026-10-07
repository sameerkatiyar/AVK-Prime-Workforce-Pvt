// routes/profileRoutes.js

const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const {
  getProfile,
  updateProfile,
} = require("../controllers/authController");

// ==============================
// Get Logged-in User Profile
// GET /api/profile
// ==============================
router.get("/", protect, getProfile);

// ==============================
// Update Logged-in User Profile
// PUT /api/profile
// ==============================
router.put("/", protect, updateProfile);

module.exports = router;