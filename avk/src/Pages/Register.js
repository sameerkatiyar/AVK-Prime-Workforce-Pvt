import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exist = users.find((u) => u.email === user.email);

    if (exist) {
      alert("User already exists");
      return;
    }

    users.push({
      name: user.name,
      email: user.email,
      password: user.password
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful");

    navigate("/login");
  };

  return (
    <div className="container mt-5">

      <div className="card p-4">

        <h2 className="text-center">Register</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Full Name"
            name="name"
            onChange={handleChange}
          />

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
          />

          <button className="btn btn-primary w-100">
            Register
          </button>

        </form>

        <p className="mt-3">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>

    </div>
  );
}

export default Register;