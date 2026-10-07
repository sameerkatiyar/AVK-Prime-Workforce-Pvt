import React, { useState } from "react";

const Attendance = () => {
  const [attendance, setAttendance] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      department: "IT",
      status: "Present",
    },
    {
      id: 2,
      name: "Priya Singh",
      department: "HR",
      status: "Absent",
    },
    {
      id: 3,
      name: "Amit Kumar",
      department: "Finance",
      status: "Present",
    },
    {
      id: 4,
      name: "Neha Verma",
      department: "Marketing",
      status: "Leave",
    },
  ]);

  const updateStatus = (id, status) => {
    setAttendance(
      attendance.map((emp) => (emp.id === id ? { ...emp, status } : emp)),
    );
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Employee Attendance</h2>

      <table className="table table-bordered table-hover shadow">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Employee Name</th>
            <th>Department</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>
          {attendance.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>

              <td>
                <span
                  className={`badge ${
                    emp.status === "Present"
                      ? "bg-success"
                      : emp.status === "Absent"
                        ? "bg-danger"
                        : "bg-warning text-dark"
                  }`}
                >
                  {emp.status}
                </span>
              </td>

              <td>
                <select
                  className="form-select"
                  value={emp.status}
                  onChange={(e) => updateStatus(emp.id, e.target.value)}
                >
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                  <option value="Leave">Leave</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
