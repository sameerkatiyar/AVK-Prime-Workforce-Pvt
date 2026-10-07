import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) =>
      u.email === login.email &&
      u.password === login.password
  );

  if (user) {
    localStorage.setItem("loggedUser", JSON.stringify(user));

    alert("Login Successful");

    navigate("/dashboard");
  } else {
    alert("Invalid Email or Password");
  }
};

  return (
    <div className="container mt-5">

      <div className="card p-4">

        <h2 className="text-center">Login</h2>

        <form onSubmit={handleSubmit}>

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

          <button className="btn btn-success w-100">
            Login
          </button>

        </form>

        <p className="mt-3">
          New User?
          <Link to="/register"> Register</Link>
        </p>

      </div>

    </div>
  );
}

export default Login;