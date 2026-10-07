import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
import Footer from "./Component/Footer";
import ProtectedRoute from "./Component/ProtectedRoute";
import Dashboard from "./Component/Dashboard";


import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Jobs from "./Pages/Jobs";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Settings from "./Pages/Settings";
import Profile from "./Pages/Profile";
import Employees from "./Pages/Employees";
import Department from "./Pages/Department";
import AddEmployee from "./Pages/AddEmployee ";
import EditEmployee from "./Pages/EditEmployee";
import Payroll from "./Pages/Payroll";
import EditDepartment from "./Pages/EditDepartment";
import Attendance from "./Pages/Attendance";
import Leave from "./Pages/Leave";

function App() {
  // Add these lines
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false,
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <BrowserRouter>
        <Navbar />

        <div className="d-flex">
          <Sidebar />

          <div className="container-fluid p-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/department" element={<Department />} />
              <Route path="/editDepartment" element={<EditDepartment />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/addEmployee" element={<AddEmployee />} />
              <Route path="/attendance" element={<Leave />} />
              <Route path="/leave" element={<Attendance />} />
              <Route path="/editEmployee/:id" element={<EditEmployee />} />
              <Route path="/payroll" element={<Payroll />} />

              <Route
                path="/settings"
                element={
                  <Settings darkMode={darkMode} setDarkMode={setDarkMode} />
                }
              />

              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
