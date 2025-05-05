import React, { useState } from "react";
import axios from "axios";
import { handleError, handleSuccess } from "./Toast";
import { ToastContainer } from "react-toastify";
const Add_new_employee = () => {
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
  const url = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${url}addemployee`, formData,{
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
        handleSuccess("Employee Added Successfully!");
      })
      .catch((err) => {
        handleError(err.response.data.message);
      });
      
  };

  return (
    <div className="md:max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md  my-5">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Add New Employee
      </h2>{" "}
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
          />
        </div>
        <div>
          <label>Position:</label>
          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Position</option>
            <option value="Manager">Manager</option>
            <option value="Team Lead">Team Lead</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Intern">Intern</option>
            <option value="Product Owner">Product Owner</option>
            <option value="Scrum Master">Scrum Master</option>
            <option value="Technical Architect">Technical Architect</option>
            <option value="Business Analyst">Business Analyst</option>
            <option value="QA Engineer">QA Engineer</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="Cybersecurity Specialist">Cybersecurity Specialist</option>
            <option value="Cloud Engineer">Cloud Engineer</option>
          </select>
        </div>
        <div>
          <label>Department:</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Department</option>
            <option value="HR">HR</option>
            <option value="IT Support">IT Support</option>
            <option value="Development">Development</option>
            <option value="Quality Assurance">Quality Assurance</option>
            <option value="DevOps">DevOps</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Data Science">Data Science</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Cloud Engineering">Cloud Engineering</option>
            <option value="Product Management">Product Management</option>
            <option value="Business Analysis">Business Analysis</option>
          </select>
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="col-span-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-500 text-white hover:bg-blue-600 transition duration-200 mt-4"
        >
          Add Employee
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Add_new_employee;
