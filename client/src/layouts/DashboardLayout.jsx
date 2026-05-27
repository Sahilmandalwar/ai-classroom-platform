import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebars/DashboardSidebar";
const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 border-r">
        <Sidebar />
      </div>

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
