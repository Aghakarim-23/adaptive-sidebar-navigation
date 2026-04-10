const Profile = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-bold">Profile</h1>

      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
        
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold">
          A
        </div>

        {/* Info */}
        <div className="flex-1 text-center sm:text-left space-y-2">
          <h2 className="text-lg sm:text-xl font-semibold">
            Aghakarim User
          </h2>

          <p className="text-gray-500 text-sm">
            Frontend Developer
          </p>

          <p className="text-gray-500 text-sm">
            agakarim@example.com
          </p>

          <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
            <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">
              React
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">
              Tailwind
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">
              UI/UX
            </span>
          </div>
        </div>

        {/* Edit button */}
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700">
          Edit Profile
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-xl font-bold">24</h3>
          <p className="text-gray-500 text-sm">Projects</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-xl font-bold">128</h3>
          <p className="text-gray-500 text-sm">Commits</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-xl font-bold">4.8</h3>
          <p className="text-gray-500 text-sm">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;