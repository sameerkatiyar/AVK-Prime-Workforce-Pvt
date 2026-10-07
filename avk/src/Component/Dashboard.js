import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaBuilding,
  FaMoneyCheckAlt,
  FaBriefcase,
  FaUserPlus,
  FaFileInvoiceDollar,
  FaCalendarCheck,
  FaArrowUp,
} from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  const dashboardData = {
    employees: 120,
    departments: 8,
    payroll: "₹24,50,000",
    jobs: 15,
  };

  return (
    <div className="container-fluid py-4">
      {/* Header */}
      <div className="dashboard-header shadow-lg rounded-4 p-4 mb-4 text-white">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div>
            <h2 className="fw-bold color-dark">AVK Prime Workforce Dashboard</h2>
            <p className="mb-0">
              Welcome back, Admin 👋 Manage your workforce efficiently.
            </p>
          </div>

          <button className="btn btn-light fw-bold mt-3 mt-md-0">
            Generate Report
          </button>
        </div>
      </div>

      {/* Statistics */}
      <div className="row">
        {/* Employees */}
        <div className="col-lg-3 col-md-6 mb-4 d-flex">
          <div className="card shadow border-0 bg-primary text-white w-100 dashboard-card">
            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
              <FaUsers size={50} className="mb-3" />
              <h5 className="mt-2">Employees</h5>
              <h2 className="fw-bold">{dashboardData.employees}</h2>
            </div>
          </div>
        </div>

        {/* Departments */}
        <div className="col-lg-3 col-md-6 mb-4 d-flex">
          <div className="card shadow border-0 bg-success text-white w-100 dashboard-card">
            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
              <FaBuilding size={50} className="mb-3" />
              <h5 className="mt-2">Departments</h5>
              <h2 className="fw-bold">{dashboardData.departments}</h2>
            </div>
          </div>
        </div>

        {/* Payroll */}
        <div className="col-lg-3 col-md-6 mb-4 d-flex">
          <div className="card shadow border-0 bg-warning text-dark w-100 dashboard-card">
            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
              <FaMoneyCheckAlt size={50} className="mb-3" />
              <h5 className="mt-2">Monthly Payroll</h5>
              <h2 className="fw-bold">{dashboardData.payroll}</h2>
            </div>
          </div>
        </div>

        {/* Jobs */}
        <div className="col-lg-3 col-md-6 mb-4 d-flex">
          <div className="card shadow border-0 bg-danger text-white w-100 dashboard-card">
            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
              <FaBriefcase size={50} className="mb-3" />
              <h5 className="mt-2">Open Jobs</h5>
              <h2 className="fw-bold">{dashboardData.jobs}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card shadow border-0 mb-4">
        <div className="card-body">
          <h4 className="mb-4">Quick Actions</h4>

          <div className="d-flex flex-wrap gap-3">
            <button
              className="btn btn-primary"
              onClick={() => navigate("/employees")}
            >
              <FaUserPlus className="me-2" />
              Add Employee
            </button>

            <button
              className="btn btn-success"
              onClick={() => navigate("/department")}
            >
              <FaBuilding className="me-2" />
              Departments
            </button>

            <button
              className="btn btn-warning"
              onClick={() => navigate("/payroll")}
            >
              <FaFileInvoiceDollar className="me-2" />
              Payroll
            </button>

            <button
              className="btn btn-info text-white"
              onClick={() => navigate("/attendance")}
            >
              <FaCalendarCheck className="me-2" />
              Attendance
            </button>
          </div>
        </div>
      </div>

      {/* Recent Employees */}
      <div className="card shadow border-0 mb-4">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Recent Employees</h5>
        </div>

        <div className="card-body table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Designation</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>EMP001</td>
                <td>Rahul Sharma</td>
                <td>IT</td>
                <td>Software Developer</td>
              </tr>

              <tr>
                <td>EMP002</td>
                <td>Priya Singh</td>
                <td>HR</td>
                <td>HR Manager</td>
              </tr>

              <tr>
                <td>EMP003</td>
                <td>Amit Kumar</td>
                <td>Finance</td>
                <td>Accountant</td>
              </tr>

              <tr>
                <td>EMP004</td>
                <td>Neha Verma</td>
                <td>Marketing</td>
                <td>Marketing Executive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Welcome */}
      <div className="card shadow border-0 mb-5">
        <div className="card-body p-4">
          <h3>Welcome to AVK Prime Workforce</h3>

          <p className="text-muted mb-0">
            Manage employees, departments, payroll, attendance, jobs, profiles,
            reports, and company settings from one centralized dashboard.
            Monitor business performance and workforce productivity in real
            time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
