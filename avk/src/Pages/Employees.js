import React, { useState } from "react";

const Employees = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      department: "IT",
      designation: "Software Developer",
      salary: "₹45,000",
    },
    {
      id: 2,
      name: "Priya Singh",
      email: "priya@gmail.com",
      department: "HR",
      designation: "HR Manager",
      salary: "₹50,000",
    },
    {
      id: 3,
      name: "Amit Kumar",
      email: "amit@gmail.com",
      department: "Finance",
      designation: "Accountant",
      salary: "₹40,000",
    },
    {
      id: 4,
      name: "Neha Verma",
      email: "neha@gmail.com",
      department: "Marketing",
      designation: "Marketing Executive",
      salary: "₹42,000",
    },
  ]);

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    designation: "",
    salary: "",
  });

  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      setEmployees(
        employees.map((emp) =>
          emp.id === editId ? { ...emp, ...employee } : emp
        )
      );

      alert("Employee Updated Successfully");
      setEditId(null);
    } else {
      setEmployees([
        ...employees,
        {
          id: Date.now(),
          ...employee,
        },
      ]);

      alert("Employee Added Successfully");
    }

    setEmployee({
      name: "",
      email: "",
      department: "",
      designation: "",
      salary: "",
    });
  };

  const editEmployee = (emp) => {
    setEmployee(emp);
    setEditId(emp.id);
  };

  const deleteEmployee = (id) => {
    if (window.confirm("Delete this employee?")) {
      setEmployees(employees.filter((emp) => emp.id !== id));
    }
  };

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.department.toLowerCase().includes(search.toLowerCase()) ||
      emp.designation.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>{editId ? "Update Employee" : "Employee Management"}</h2>

      <form onSubmit={handleSubmit} className="card p-3 mb-4 shadow">
        <div className="row">
          <div className="col-md-4 mb-2">
            <input
              className="form-control"
              placeholder="Name"
              name="name"
              value={employee.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-4 mb-2">
            <input
              className="form-control"
              placeholder="Email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-4 mb-2">
            <input
              className="form-control"
              placeholder="Department"
              name="department"
              value={employee.department}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-4 mb-2">
            <input
              className="form-control"
              placeholder="Designation"
              name="designation"
              value={employee.designation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-4 mb-2">
            <input
              className="form-control"
              placeholder="Salary"
              name="salary"
              value={employee.salary}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-4 mb-2">
            <button
              className={`btn ${
                editId ? "btn-warning" : "btn-success"
              } w-100`}
            >
              {editId ? "Update Employee" : "Add Employee"}
            </button>
          </div>
        </div>
      </form>

      <input
        className="form-control mb-3"
        placeholder="Search Employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>{emp.designation}</td>
              <td>{emp.salary}</td>

              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => editEmployee(emp)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteEmployee(emp.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;