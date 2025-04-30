import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-[calc(100vh-100px)]"> {/* Adjust for header + footer height */}
      
      {/* Static Sidebar */}
      <aside className="w-64 bg-[#1F3C5F] text-white shrink-0 min-h-full">
        <Sidebar />
      </aside>

      {/* Scrollable Main Content */}
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <Outlet />
      </main>

    </div>
  );
};

export default DashboardLayout;
