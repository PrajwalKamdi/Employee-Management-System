import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex px-5 flex-col items-center justify-center min-h-screen">
      <div className=" border shadow-2xl shadow-gray-90000 rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Welcome to Employee Management
        </h1>
        <p className=" text-center text-gray-900 text-shadow  mb-6">
          Manage your employees efficiently and effectively with our platform.
        </p>
        <div className="flex flex-col space-y-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            <NavLink to="/employees">View Employees</NavLink>
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
            <NavLink to="/add-employee">Add Employee</NavLink>
          </button>
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
          <NavLink to="/dashboard">Dashboard</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
