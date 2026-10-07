import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditDepartment = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [department, setDepartment] = useState({
    name: "",
    head: "",
    employees: "",
  });

  useEffect(() => {
    const departments =
      JSON.parse(localStorage.getItem("departments")) || [];

    const dept = departments.find(
      (item) => item.id === Number(id)
    );

    if (dept) {
      setDepartment(dept);
    }
  }, [id]);

  const handleChange = (e) => {
    setDepartment({
      ...department,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const departments =
      JSON.parse(localStorage.getItem("departments")) || [];

    const updatedDepartments = departments.map((dept) =>
      dept.id === Number(id) ? department : dept
    );

    localStorage.setItem(
      "departments",
      JSON.stringify(updatedDepartments)
    );

    alert("Department Updated Successfully");
    navigate("/departments");
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">

        <div className="card-header bg-warning">
          <h3>Edit Department</h3>
        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label>Department Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={department.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Department Head</label>
              <input
                type="text"
                className="form-control"
                name="head"
                value={department.head}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Total Employees</label>
              <input
                type="number"
                className="form-control"
                name="employees"
                value={department.employees}
                onChange={handleChange}
                required
              />
            </div>

            <button className="btn btn-success me-2">
              Update Department
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/departments")}
            >
              Cancel
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};

export default EditDepartment;