const fs = require("fs");
const path = require("path");

const settingsFile = path.join(__dirname, "../data/settings.json");

// Create settings file if it doesn't exist
if (!fs.existsSync(settingsFile)) {
  fs.mkdirSync(path.dirname(settingsFile), { recursive: true });

  fs.writeFileSync(
    settingsFile,
    JSON.stringify(
      {
        companyName: "Prime Workforce",
        email: "admin@primeworkforce.com",
        phone: "+91 9876543210",
        address: "Kanpur, Uttar Pradesh",
        notifications: true,
        darkMode: false,
      },
      null,
      2
    )
  );
}

// Get Settings
exports.getSettings = (req, res) => {
  try {
    const settings = JSON.parse(fs.readFileSync(settingsFile));

    res.status(200).json({
      success: true,
      data: settings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Settings
exports.updateSettings = (req, res) => {
  try {
    const settings = req.body;

    fs.writeFileSync(settingsFile, JSON.stringify(settings, null, 2));

    res.status(200).json({
      success: true,
      message: "Settings updated successfully",
      data: settings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Reset Settings
exports.resetSettings = (req, res) => {
  try {
    const defaultSettings = {
      companyName: "Prime Workforce",
      email: "admin@primeworkforce.com",
      phone: "+91 9876543210",
      address: "Kanpur, Uttar Pradesh",
      notifications: true,
      darkMode: false,
    };

    fs.writeFileSync(
      settingsFile,
      JSON.stringify(defaultSettings, null, 2)
    );

    res.status(200).json({
      success: true,
      message: "Settings reset successfully",
      data: defaultSettings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};