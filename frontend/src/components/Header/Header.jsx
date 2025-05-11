import React, { useContext, useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiLogin } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import Mycontext from "../../Context/Context";
const Header = () => {
  const username = localStorage.getItem("name");
  const { user, setUser } = useContext(Mycontext);
  useEffect(() => {
    setUser(username);
  }, [username]);
  return (
    <>
      <header className="flex justify-between items-center py-6 px-8 bg-blue-600 text-white shadow-md">
        <NavLink to="/" className="text-3xl font-bold font-[Open_Sans]">
          Employee Management
        </NavLink>
        <nav className="hidden md:block font-semibold">
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
              {user ? (
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-300 font-semibold "
                      : "hover:text-yellow-300"
                  }
                >
                  <div className="flex flex-col items-center justify-center">
                    <CgProfile size={30} className="" />
                    <p className="text-sm">{user}</p>
                  </div>
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-300 font-semibold "
                      : "hover:text-yellow-300"
                  }
                >
                  login <CiLogin size={30} className="inline" />
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
