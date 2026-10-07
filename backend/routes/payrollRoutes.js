const express = require("express");
const router = express.Router();

const {
  getPayrolls,
  getPayrollById,
  createPayroll,
  updatePayroll,
  deletePayroll,
} = require("../controllers/payrollController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

// Get all payroll records
router.get("/", protect, getPayrolls);

// Get payroll by ID
router.get("/:id", protect, getPayrollById);

// Create payroll (Admin only)
router.post("/", protect, authorize("admin"), createPayroll);

// Update payroll (Admin only)
router.put("/:id", protect, authorize("admin"), updatePayroll);

// Delete payroll (Admin only)
router.delete("/:id", protect, authorize("admin"), deletePayroll);

module.exports = router;

