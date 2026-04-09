import { Routes, Route } from "react-router-dom";
import SidebarLayout from "./components/SidebarLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Analytics from "./pages/Analytics";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Projects from "./pages/Projects";
import AddNew from "./pages/AddNew";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SidebarLayout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="messages" element={<Messages />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="projects" element={<Projects />} />
          <Route path="add-new" element={<AddNew />} />
          <Route path="settings" element={<Settings />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
