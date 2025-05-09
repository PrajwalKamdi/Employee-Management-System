import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "./Toast";
const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    position: "",
    department: "",
    salary: "",
  });
  const [error, setError] = useState();
  const url = import.meta.env.VITE_API_URL;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${url}update/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setFormData({
          employeeId: "",
          name: "",
          email: "",
          phoneNumber: "",
          address: "",
          position: "",
          department: "",
          salary: "",
        });
      })
      .catch((err) => {
        handleError(err.response.data.message);
      });
    handleSuccess("Employee Updated Successfully!");
    setTimeout(() => {
    navigate("/employees");
      
    }, 1500);
  };
  const fetchEmployee = async () => {
    try {
      const response = await axios.get(`${url}getemployee/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFormData({
        employeeId: response.data.employee.employeeId,
        name: response.data.employee.name,
        email: response.data.employee.email,
        phoneNumber: response.data.employee.phoneNumber,
        address: response.data.employee.address,
        position: response.data.employee.position,
        department: response.data.employee.department,
        salary: response.data.employee.salary,
      });
    } catch (err) {
      handleError(err.response.data.message);
    }
  };
  useEffect(() => {
    fetchEmployee();
  }, []);
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md  my-5">
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline">{error}</span>
          <span className="block sm:inline">{error.message}</span>
        </div>
      )}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Update Employee</h2>{" "}
      <form
        onSubmit={handleSubmit}
        className="grid sm:grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label>Employee ID:</label>
          <input
            type="text"
            name="employeeId"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.employeeId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label>Position:</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="font-bold col-span-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-500 text-white hover:bg-blue-600 transition duration-200 mt-4"
        >
          Update Employee
        </button>
        <ToastContainer/>
      </form>
    </div>
  );
};

export default Update;
