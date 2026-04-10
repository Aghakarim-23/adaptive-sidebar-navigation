import { useState } from "react";

const AddNew = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    team: "",
    status: "In Progress",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Project:", form);
    alert("Project added!");
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-bold">Add New Project</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 sm:p-6 rounded-lg shadow space-y-4"
      >
        {/* Name */}
        <div>
          <label className="text-sm text-gray-600">Project Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter project name"
            className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-sm text-gray-600">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter description"
            className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        {/* Team */}
        <div>
          <label className="text-sm text-gray-600">Team</label>
          <input
            type="text"
            name="team"
            value={form.team}
            onChange={handleChange}
            placeholder="Frontend / Backend / Personal"
            className="w-full border rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        {/* Status */}
        <div>
          <label className="text-sm text-gray-600">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 mt-1 outline-none"
          >
            <option>In Progress</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Create Project
        </button>
      </form>
    </div>
  );
};

export default AddNew;