import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaUsers,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
  FaBuilding,
  FaMoneyCheckAlt,
  FaClipboardCheck,
  FaCalendarAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/login");
  };

  return (
    <div
      className="bg-dark text-white vh-100 p-3"
      style={{ width: "250px" }}
    >
      <h4 className="text-warning text-center mb-4">AVK Prime Workforce</h4>

      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link to="/dashboard" className="nav-link text-white">
            <FaHome className="me-2" />
            Dashboard
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link to="/profile" className="nav-link text-white">
            <FaUser className="me-2" />
            Profile
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link to="/jobs" className="nav-link text-white">
            <FaBriefcase className="me-2" />
            Jobs
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link to="/employees" className="nav-link text-white">
            <FaUsers className="me-2" />
            Employees
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link to="/contact" className="nav-link text-white">
            <FaEnvelope className="me-2" />
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/department" className="nav-link text-white">
            <FaBuilding className="me-2" />
            Departments
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/payroll">
            <FaMoneyCheckAlt className="me-2" />
            Payroll
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/attendance" className="nav-link text-white">
            <FaClipboardCheck className="me-2" />
            Attendance
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/leave" className="nav-link text-white">
            <FaCalendarAlt className="me-2" />
            Leave
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/settings" className="nav-link text-white">
            <FaCog className="me-2" />
            Settings
          </Link>
        </li>

        <hr className="text-secondary" />
        
        <li className="nav-item">
          <button className="btn btn-danger w-100" onClick={logout}>
            <FaSignOutAlt className="me-2" />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
