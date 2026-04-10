const Projects = () => {
  const projects = [
    {
      name: "E-commerce Dashboard",
      status: "In Progress",
      progress: 70,
      team: "Frontend Team",
    },
    {
      name: "Portfolio Website",
      status: "Completed",
      progress: 100,
      team: "Personal",
    },
    {
      name: "Chat App",
      status: "In Progress",
      progress: 45,
      team: "Fullstack Team",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-bold">Projects</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 space-y-3"
          >
            {/* Header */}
            <h2 className="text-lg font-semibold">
              {project.name}
            </h2>

            <p className="text-sm text-gray-500">
              Team: {project.team}
            </p>

            {/* Status */}
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                project.status === "Completed"
                  ? "bg-green-100 text-green-600"
                  : "bg-yellow-100 text-yellow-600"
              }`}
            >
              {project.status}
            </span>

            {/* Progress */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gray-800 h-2 rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;