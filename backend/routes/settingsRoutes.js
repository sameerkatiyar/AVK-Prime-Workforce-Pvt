// routes/settingsRoutes.js

const express = require("express");
const router = express.Router();

const { protect, authorize } = require("../middleware/authMiddleware");

// Get Settings
router.get("/", protect, async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      settings: {
        companyName: "Prime Workforce",
        email: "admin@primeworkforce.com",
        phone: "+91 9876543210",
        address: "Kanpur, Uttar Pradesh",
        darkMode: false,
        notifications: true,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Update Settings (Admin Only)
router.put("/", protect, authorize("admin"), async (req, res) => {
  try {
    const {
      companyName,
      email,
      phone,
      address,
      darkMode,
      notifications,
    } = req.body;

    const settings = {
      companyName,
      email,
      phone,
      address,
      darkMode,
      notifications,
    };

    res.status(200).json({
      success: true,
      message: "Settings updated successfully.",
      settings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;