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

import { NavLink } from "react-router-dom";

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
    <div className="w-24 sm:w-64 bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-center h-16 border-b border-gray-700 p-10 ">
        <span className="text-xl sm:text-2xl font-bold">MyApp</span>
      </div>
      <nav className="flex-1 items-center  flex flex-col ">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `w-full flex justify-center items-center px-6 py-3 transition-colors ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span className="ml-4 hidden sm:block">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
