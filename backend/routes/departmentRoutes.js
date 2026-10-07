const express = require("express");
const router = express.Router();

const {
  getDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} = require("../controllers/departmentController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

// Get all departments
router.get("/", protect, getDepartments);

// Get department by ID
router.get("/:id", protect, getDepartmentById);

// Create department (Admin only)
router.post("/", protect, authorize("admin"), createDepartment);

// Update department (Admin only)
router.put("/:id", protect, authorize("admin"), updateDepartment);

// Delete department (Admin only)
router.delete("/:id", protect, authorize("admin"), deleteDepartment);

module.exports = router;