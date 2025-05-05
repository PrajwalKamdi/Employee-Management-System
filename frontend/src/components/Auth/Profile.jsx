import React from "react";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { handleSuccess } from "../Pages/Toast";
import { ToastContainer } from "react-toastify";
const Profile = ({state}) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    handleSuccess("Logout Successfully");
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  }
 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Profile
        </h1>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            readOnly
            value={localStorage.getItem("name") || ""}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            readOnly
            value={localStorage.getItem("email") || ""}
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 text-xl"
        onClick={handleLogout}>
          Logout<CiLogout className="inline ml-2" size={30} />
        </button>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Profile;
