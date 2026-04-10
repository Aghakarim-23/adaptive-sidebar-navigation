import { useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState({
    username: "Aghakarim",
    email: "agakarim@example.com",
    darkMode: false,
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved settings:", settings);
    alert("Settings saved!");
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-bold">Settings</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 sm:p-6 rounded-lg shadow space-y-6"
      >
        {/* Username */}
        <div>
          <label className="text-sm text-gray-600">Username</label>
          <input
            type="text"
            name="username"
            value={settings.username}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        {/* Toggles */}
        <div className="space-y-4">
          
          {/* Notifications */}
          <label className="flex items-center justify-between">
            <span>Notifications</span>
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
              className="w-5 h-5"
            />
          </label>

          {/* Dark Mode (UI only) */}
          <label className="flex items-center justify-between">
            <span>Dark Mode</span>
            <input
              type="checkbox"
              name="darkMode"
              checked={settings.darkMode}
              onChange={handleChange}
              className="w-5 h-5"
            />
          </label>
        </div>

        {/* Save button */}
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;