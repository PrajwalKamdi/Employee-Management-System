import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700">Total Employees</h2>
          <p className="text-2xl font-bold text-blue-500 mt-2">120</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700">Departments</h2>
          <p className="text-2xl font-bold text-green-500 mt-2">8</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700">Projects</h2>
          <p className="text-2xl font-bold text-purple-500 mt-2">15</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Activities</h2>
        <ul className="bg-white shadow-md rounded-lg p-4">
          <li className="border-b border-gray-200 py-2">Employee John Doe was promoted.</li>
          <li className="border-b border-gray-200 py-2">New project "Website Redesign" started.</li>
          <li className="py-2">Department "Marketing" added 3 new members.</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
