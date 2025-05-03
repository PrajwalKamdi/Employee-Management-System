import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
    <header className="flex justify-between items-center py-6 px-8 bg-blue-600 text-white shadow-md">
      <NavLink to="/" className="text-3xl font-bold">Employee Management</NavLink>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-8 text-lg">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold border-b-2 border-yellow-300"
                  : "hover:text-yellow-300"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/employees"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold border-b-2 border-yellow-300"
                  : "hover:text-yellow-300"
              }
            >
              Employees
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-employee"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold border-b-2 border-yellow-300"
                  : "hover:text-yellow-300"
              }
            >
              Add Employee
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-semibold border-b-2 border-yellow-300"
                  : "hover:text-yellow-300"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={'/login'} className="hover:text-yellow-300">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;
