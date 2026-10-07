import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const employees =
      JSON.parse(localStorage.getItem("employees")) || [];

    const emp = employees.find(
      (item) => item.id === Number(id)
    );

    if (emp) {
      setEmployee(emp);
    }
  }, [id]);

  if (!employee) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">
          Employee Not Found
        </div>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/employees")}
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">

      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          <h3>Employee Details</h3>
        </div>

        <div className="card-body">

          <div className="text-center mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Employee"
              width="120"
              className="rounded-circle border"
            />
          </div>

          <table className="table table-bordered">

            <tbody>

              <tr>
                <th width="30%">Employee ID</th>
                <td>{employee.id}</td>
              </tr>

              <tr>
                <th>Name</th>
                <td>{employee.name}</td>
              </tr>

              <tr>
                <th>Email</th>
                <td>{employee.email}</td>
              </tr>

              <tr>
                <th>Phone</th>
                <td>{employee.phone}</td>
              </tr>

              <tr>
                <th>Department</th>
                <td>{employee.department}</td>
              </tr>

              <tr>
                <th>Designation</th>
                <td>{employee.designation}</td>
              </tr>

              <tr>
                <th>Salary</th>
                <td>₹ {employee.salary}</td>
              </tr>

              <tr>
                <th>Address</th>
                <td>{employee.address}</td>
              </tr>

            </tbody>

          </table>

          <button
            className="btn btn-secondary me-2"
            onClick={() => navigate("/employees")}
          >
            Back
          </button>

          <button
            className="btn btn-warning"
            onClick={() =>
              navigate(`/edit-employee/${employee.id}`)
            }
          >
            Edit Employee
          </button>

        </div>

      </div>

    </div>
  );
};

export default EmployeeDetails;