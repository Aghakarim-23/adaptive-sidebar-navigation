const Home = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Title */}
      <h1 className="text-xl sm:text-2xl font-bold">
        Dashboard
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white p-3 sm:p-5 rounded-lg shadow">
          <p className="text-gray-500 text-xs sm:text-sm">Users</p>
          <h2 className="text-base sm:text-xl font-semibold">1,240</h2>
        </div>

        <div className="bg-white p-3 sm:p-5 rounded-lg shadow">
          <p className="text-gray-500 text-xs sm:text-sm">Revenue</p>
          <h2 className="text-base sm:text-xl font-semibold">$8,450</h2>
        </div>

        <div className="bg-white p-3 sm:p-5 rounded-lg shadow">
          <p className="text-gray-500 text-xs sm:text-sm">Orders</p>
          <h2 className="text-base sm:text-xl font-semibold">320</h2>
        </div>

        <div className="bg-white p-3 sm:p-5 rounded-lg shadow">
          <p className="text-gray-500 text-xs sm:text-sm">Growth</p>
          <h2 className="text-base sm:text-xl font-semibold">+12%</h2>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow p-3 sm:p-4 overflow-x-auto">
        <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
          Recent Activity
        </h2>

        <table className="w-full min-w-[420px] text-left text-sm sm:text-base">
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="py-2">User</th>
              <th className="py-2">Action</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-2">John Doe</td>
              <td>Created account</td>
              <td>Today</td>
            </tr>

            <tr className="border-b">
              <td className="py-2">Jane Smith</td>
              <td>Placed order</td>
              <td>Yesterday</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;