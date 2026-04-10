const Analytics = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-bold">Analytics</h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500 text-sm">Visitors</p>
          <h2 className="text-xl font-semibold">12,430</h2>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500 text-sm">Bounce Rate</p>
          <h2 className="text-xl font-semibold">42%</h2>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500 text-sm">Page Views</p>
          <h2 className="text-xl font-semibold">89,120</h2>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500 text-sm">Conversions</p>
          <h2 className="text-xl font-semibold">3.8%</h2>
        </div>
      </div>



      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* Traffic Sources */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Traffic Sources</h2>

          <ul className="space-y-3 text-sm">
            <li className="flex justify-between">
              <span>Google</span>
              <span className="font-semibold">45%</span>
            </li>
            <li className="flex justify-between">
              <span>Direct</span>
              <span className="font-semibold">25%</span>
            </li>
            <li className="flex justify-between">
              <span>Social Media</span>
              <span className="font-semibold">20%</span>
            </li>
            <li className="flex justify-between">
              <span>Other</span>
              <span className="font-semibold">10%</span>
            </li>
          </ul>
        </div>

        {/* Recent Performance */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Performance</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Page Speed</span>
              <span className="font-semibold">92%</span>
            </div>

            <div className="flex justify-between">
              <span>SEO Score</span>
              <span className="font-semibold">87%</span>
            </div>

            <div className="flex justify-between">
              <span>Accessibility</span>
              <span className="font-semibold">95%</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Analytics;