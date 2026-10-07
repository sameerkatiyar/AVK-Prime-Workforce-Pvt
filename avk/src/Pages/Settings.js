import React, { useState } from "react";

const Settings = ({ darkMode, setDarkMode }) => {
  const [settings, setSettings] = useState({
    companyName: "Prime Workforce",
    email: "admin@primeworkforce.com",
    phone: "+91 9876543210",
    address: "Kanpur, Uttar Pradesh",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("settings", JSON.stringify(settings));
    alert("Settings Saved Successfully!");
  };

  return (
    <div className="container py-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3>System Settings</h3>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Company Name</label>
              <input
                type="text"
                className="form-control"
                name="companyName"
                value={settings.companyName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={settings.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={settings.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                className="form-control"
                rows="3"
                name="address"
                value={settings.address}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Notifications */}
            <div className="form-check form-switch mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
              />
              <label className="form-check-label">
                Enable Notifications
              </label>
            </div>

            {/* Dark Mode */}
            <div className="form-check form-switch mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <label className="form-check-label">
                {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
              </label>
            </div>

            <button type="submit" className="btn btn-success">
              Save Settings
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;