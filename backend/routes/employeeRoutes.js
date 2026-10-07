const express = require("express");
const router = express.Router();

const {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

// Get all employees
router.get("/", protect, getEmployees);

// Get employee by ID
router.get("/:id", protect, getEmployeeById);

// Create employee (Admin only)
router.post("/", protect, authorize("admin"), createEmployee);

// Update employee (Admin only)
router.put("/:id", protect, authorize("admin"), updateEmployee);

// Delete employee (Admin only)
router.delete("/:id", protect, authorize("admin"), deleteEmployee);

module.exports = router;