const Messages = () => {
  const chats = [
    { name: "John Doe", message: "Hey, how are you?", time: "2 min ago" },
    { name: "Jane Smith", message: "Project update?", time: "10 min ago" },
    { name: "Alex Johnson", message: "Let’s meet tomorrow", time: "1 hour ago" },
  ];

  return (
    <div className="h-full flex flex-col space-y-4">
      {/* Title */}
      <h1 className="text-2xl font-bold">Messages</h1>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-4 h-full">
        
        {/* Chat list */}
        <div className="bg-white rounded-lg shadow p-4 w-full lg:w-1/3">
          <h2 className="text-lg font-semibold mb-4">Chats</h2>

          <div className="space-y-3">
            {chats.map((chat, index) => (
              <div
                key={index}
                className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer border"
              >
                <h3 className="font-semibold">{chat.name}</h3>
                <p className="text-sm text-gray-500 truncate">
                  {chat.message}
                </p>
                <span className="text-xs text-gray-400">{chat.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chat window */}
        <div className="bg-white rounded-lg shadow p-4 flex-1 flex flex-col">
          
          {/* Header */}
          <div className="border-b pb-3 mb-3">
            <h2 className="text-lg font-semibold">John Doe</h2>
            <p className="text-sm text-gray-500">Online</p>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto">
            <div className="bg-gray-100 p-3 rounded-lg w-fit">
              Hey, how are you?
            </div>

            <div className="bg-gray-800 text-white p-3 rounded-lg w-fit ml-auto">
              I'm good, thanks!
            </div>

            <div className="bg-gray-100 p-3 rounded-lg w-fit">
              Are you working on the project?
            </div>
          </div>

          {/* Input */}

        {/*   <div className="mt-3 flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border rounded-lg px-3 py-2 outline-none"
            />
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">
              Send
            </button>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default Messages;