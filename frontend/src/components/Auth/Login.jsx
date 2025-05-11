import axios from "axios";
import React, { use, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../Pages/Toast";
import Mycontext from "../../Context/Context";
const Login = () => {
  const {setUser} = useContext(Mycontext)
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    const url = import.meta.env.VITE_API_URL;
    e.preventDefault();
    console.log("Enter")
    try {
      const response = await axios.post(`${url}admin/login`, formData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.name);
      localStorage.setItem("email", response.data.email);
      setSuccess(response.data.success);
      setUser(localStorage.getItem("name"));
      console.log(response.data.message);
      setFormData({
        email: "",
        password: "",
      });
      handleSuccess(response.data.message);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      handleError(error.message);
      console.log(error);
    }
    console.log("okay")
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-2">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && (
            <div className="">
              <div className="bg-red-400 text-black p-4 rounded-md">
                {error}
              </div>
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <NavLink to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </NavLink>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
