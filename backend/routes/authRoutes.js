// routes/authRoutes.js

const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getProfile,
  updateProfile,
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");

// =========================
// Public Routes
// =========================

// Register User
router.post("/register", register);

// Login User
router.post("/login", login);

// =========================
// Protected Routes
// =========================

// Get Logged-in User Profile
router.get("/profile", protect, getProfile);

// Update Logged-in User Profile
router.put("/profile", protect, updateProfile);

module.exports = router;