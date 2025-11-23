import React from "react";
import { Menu } from "lucide-react";

const AdminSidebar = ({
  sidebarOpen,
  setSidebarOpen,
  menuItems,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div
      className={`${
        sidebarOpen ? "w-64" : "w-20"
      } bg-gray-900 text-white transition-all duration-300 flex flex-col`}
    >
      <div className="p-4 flex items-center justify-between border-b border-gray-700">
        {sidebarOpen && <h1 className="text-xl font-bold">Admin Panel</h1>}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-gray-800 rounded"
        >
          <Menu size={24} />
        </button>
      </div>
      <nav className="flex-1 p-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 transition-colors ${
              activeTab === item.id ? "bg-blue-600" : "hover:bg-gray-800"
            }`}
          >
            <item.icon size={20} />
            {sidebarOpen && <span>{item.label}</span>}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar;
