import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/ui/Dashboard/DashboardNavbar";
import SidebarMenu from "../components/ui/Dashboard/SidebarMenu";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky header */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <DashboardNavbar />
      </header>

      {/* Main container */}
      <div className="flex flex-1">
        {/* Sidebar (visible on large screens) */}
        <aside className="hidden lg:block">
          <SidebarMenu role="admin" />
        </aside>

        {/* Main content area */}
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
