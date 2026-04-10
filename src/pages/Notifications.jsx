const Notifications = () => {
  const notifications = [
    {
      title: "New user registered",
      desc: "John Doe just created an account",
      time: "2 min ago",
      type: "info",
    },
    {
      title: "Order received",
      desc: "You have a new order #1234",
      time: "10 min ago",
      type: "success",
    },
    {
      title: "Server warning",
      desc: "CPU usage is above 80%",
      time: "1 hour ago",
      type: "warning",
    },
    {
      title: "Payment failed",
      desc: "Transaction could not be completed",
      time: "3 hours ago",
      type: "error",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-bold">Notifications</h1>

      {/* List */}
      <div className="bg-white rounded-lg shadow p-4 space-y-4">
        {notifications.map((n, index) => (
          <div
            key={index}
            className="flex items-start justify-between p-3 border rounded-lg hover:bg-gray-50"
          >
            <div>
              <h3 className="font-semibold">{n.title}</h3>
              <p className="text-sm text-gray-500">{n.desc}</p>
            </div>

            <span className="text-xs text-gray-400 whitespace-nowrap">
              {n.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;