import axios from "axios";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
const Employees = () => {
  const url = import.meta.env.VITE_API_URL;
  const [employees, setEmployees] = React.useState([]);
  const [error, setError] = React.useState();
  const token = localStorage.getItem("token");
  // console.log(token)
  const fetchEmployees = async () => {
    try {
      const response = await axios.get(`${url}getemployees`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEmployees(response.data.employees);
      console.log(response.data.employees);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching employees:", error);
    }
  };

  const handleDelete = (employeeId) => async () => {
    console.log(employeeId);
    try {
      const response = await axios.delete(`${url}delete/${employeeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Employee deleted successfully:", response.data);
      fetchEmployees();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };
  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Error! </strong>
          <span className="block sm:inline">To access the list Please login!</span>
        </div>
      )}
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Employee List
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {employees.map((employee) => (
          <div
            key={employee.employeeId}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {employee.name}
            </h2>
            <p className="text-gray-600 mb-1">
              <strong>Email:</strong> {employee.email}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Phone:</strong> {employee.phoneNumber}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Address:</strong> {employee.address}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Position:</strong> {employee.position}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Department:</strong> {employee.department}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Salary:</strong> {employee.salary}
            </p>
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition-colors">
                <NavLink to={`/update/${employee.employeeId} `}>Update</NavLink>
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors"
                onClick={handleDelete(employee.employeeId)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;
