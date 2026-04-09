import {
  FaHome,
  FaUser,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaEnvelope,
  FaFolder,
  FaPlus,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/" },
    { name: "Profile", icon: <FaUser />, path: "/profile" },
    { name: "Analytics", icon: <FaChartBar />, path: "/analytics" },
    { name: "Messages", icon: <FaEnvelope />, path: "/messages" },
    { name: "Notifications", icon: <FaBell />, path: "/notifications" },
    { name: "Projects", icon: <FaFolder />, path: "/projects" },
    { name: "Add New", icon: <FaPlus />, path: "/add-new" },
    { name: "Settings", icon: <FaCog />, path: "/settings" },
    { name: "Logout", icon: <FaSignOutAlt />, path: "/logout" },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-6 text-2xl font-bold">MyApp</div>
      <nav className="flex-1">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center px-6 py-3 hover:bg-gray-700 transition-colors"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="ml-4">{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
