// controllers/departmentController.js

const Department = require("../models/Department");

// =====================================
// Get All Departments
// =====================================
exports.getDepartments = async (req, res) => {
  try {
    const departments = await Department.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: departments.length,
      departments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================
// Get Department By ID
// =====================================
exports.getDepartmentById = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found.",
      });
    }

    res.status(200).json({
      success: true,
      department,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================
// Create Department
// =====================================
exports.createDepartment = async (req, res) => {
  try {
    const {
      departmentName,
      departmentCode,
      manager,
      description,
    } = req.body;

    const exists = await Department.findOne({
      $or: [
        { departmentName },
        { departmentCode },
      ],
    });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Department already exists.",
      });
    }

    const department = await Department.create({
      departmentName,
      departmentCode,
      manager,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Department created successfully.",
      department,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================
// Update Department
// =====================================
exports.updateDepartment = async (req, res) => {
  try {
    const department = await Department.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Department updated successfully.",
      department,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================
// Delete Department
// =====================================
exports.deleteDepartment = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found.",
      });
    }

    await department.deleteOne();

    res.status(200).json({
      success: true,
      message: "Department deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================
// Search Departments
// =====================================
exports.searchDepartments = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const departments = await Department.find({
      $or: [
        {
          departmentName: {
            $regex: keyword,
            $options: "i",
          },
        },
        {
          departmentCode: {
            $regex: keyword,
            $options: "i",
          },
        },
        {
          manager: {
            $regex: keyword,
            $options: "i",
          },
        },
      ],
    });

    res.status(200).json({
      success: true,
      count: departments.length,
      departments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};