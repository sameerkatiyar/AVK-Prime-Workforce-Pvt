import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedUser"));

  const logout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
      <div className="container">

        {/* Logo & Brand */}
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center"
        >
          <img
            src="/AVK.jpeg"
            alt=" AVK Prime Workforce"
            className="logo-img me-2"
          />

          <div>
            <h5 className="mb-0 fw-bold text-white">
              AVK Prime Workforce
            </h5>
            <small className="text-light">
              Employee Management System
            </small>
          </div>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/services">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/jobs">
                Jobs
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/contact">
                Contact
              </Link>
            </li>

            {user ? (
              <>
                <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                  <span className="badge bg-light text-dark fs-6 px-3 py-2">
                    👤 {user.name}
                  </span>
                </li>

                <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                  <button
                    className="btn btn-danger rounded-pill px-4"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                  <Link
                    to="/login"
                    className="btn btn-outline-light rounded-pill px-4"
                  >
                    Login
                  </Link>
                </li>

                <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                  <Link
                    to="/register"
                    className="btn btn-warning rounded-pill px-4"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;