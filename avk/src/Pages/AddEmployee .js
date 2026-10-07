import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    salary: "",
    address: "",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const employees =
      JSON.parse(localStorage.getItem("employees")) || [];

    const newEmployee = {
      id: Date.now(),
      ...employee,
    };

    employees.push(newEmployee);

    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );

    alert("Employee Added Successfully!");

    navigate("/employees");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          <h3>Add Employee</h3>
        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label>Name</label>

                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={employee.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Email</label>

                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={employee.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Phone</label>

                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={employee.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Department</label>

                <select
                  className="form-select"
                  name="department"
                  value={employee.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Department</option>
                  <option>IT</option>
                  <option>HR</option>
                  <option>Finance</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label>Designation</label>

                <input
                  type="text"
                  className="form-control"
                  name="designation"
                  value={employee.designation}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Salary</label>

                <input
                  type="number"
                  className="form-control"
                  name="salary"
                  value={employee.salary}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12 mb-3">
                <label>Address</label>

                <textarea
                  className="form-control"
                  rows="3"
                  name="address"
                  value={employee.address}
                  onChange={handleChange}
                ></textarea>
              </div>

            </div>

            <button className="btn btn-success me-2">
              Save Employee
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/employees")}
            >
              Cancel
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default AddEmployee;