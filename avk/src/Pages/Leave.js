import React, { useState } from "react";

const Leave = () => {
  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 1,
      employee: "Rahul Sharma",
      department: "IT",
      leaveType: "Casual Leave",
      from: "2026-08-10",
      to: "2026-08-12",
      status: "Pending",
    },
    {
      id: 2,
      employee: "Priya Singh",
      department: "HR",
      leaveType: "Sick Leave",
      from: "2026-08-15",
      to: "2026-08-16",
      status: "Approved",
    },
  ]);

  const updateStatus = (id, status) => {
    setLeaveRequests(
      leaveRequests.map((leave) =>
        leave.id === id ? { ...leave, status } : leave
      )
    );
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Leave Management</h2>

      <table className="table table-bordered table-hover shadow">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Department</th>
            <th>Leave Type</th>
            <th>From</th>
            <th>To</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {leaveRequests.map((leave) => (
            <tr key={leave.id}>
              <td>{leave.id}</td>
              <td>{leave.employee}</td>
              <td>{leave.department}</td>
              <td>{leave.leaveType}</td>
              <td>{leave.from}</td>
              <td>{leave.to}</td>

              <td>
                <span
                  className={`badge ${
                    leave.status === "Approved"
                      ? "bg-success"
                      : leave.status === "Rejected"
                      ? "bg-danger"
                      : "bg-warning text-dark"
                  }`}
                >
                  {leave.status}
                </span>
              </td>

              <td>
                <select
                  className="form-select"
                  value={leave.status}
                  onChange={(e) => updateStatus(leave.id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leave;