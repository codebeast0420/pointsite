import React from "react";
import { Sidebar } from "./components/Sidebar";
import { DashboardContent } from "./components/DashboardContent";

const AdminPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto overflow-hidden pr-20 bg-neutral-100 max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
}

export default AdminPage;
