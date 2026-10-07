import React, { useState } from "react";

const Payroll = () => {
  const [search, setSearch] = useState("");

  const [payroll] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      department: "IT",
      basicSalary: 45000,
      bonus: 5000,
      deduction: 2000,
    },
    {
      id: 2,
      name: "Priya Singh",
      department: "HR",
      basicSalary: 50000,
      bonus: 4000,
      deduction: 1000,
    },
    {
      id: 3,
      name: "Amit Kumar",
      department: "Finance",
      basicSalary: 40000,
      bonus: 3000,
      deduction: 1500,
    },
    {
      id: 4,
      name: "Neha Verma",
      department: "Marketing",
      basicSalary: 42000,
      bonus: 3500,
      deduction: 1200,
    },
  ]);

  const filteredPayroll = payroll.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Payroll Management</h2>

        <button className="btn btn-success">
          Generate Payroll
        </button>
      </div>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search Employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="table-responsive">

        <table className="table table-bordered table-hover shadow">

          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Basic Salary</th>
              <th>Bonus</th>
              <th>Deduction</th>
              <th>Net Salary</th>
            </tr>
          </thead>

          <tbody>

            {filteredPayroll.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.department}</td>

                <td>₹ {emp.basicSalary}</td>

                <td className="text-success">
                  ₹ {emp.bonus}
                </td>

                <td className="text-danger">
                  ₹ {emp.deduction}
                </td>

                <td className="fw-bold text-primary">
                  ₹ {emp.basicSalary + emp.bonus - emp.deduction}
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
};

export default Payroll;