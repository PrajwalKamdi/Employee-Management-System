import EmployeeModel from "../model/Employee.js";


export const addEmployeeController = async (req, res) => {
  const { employeeId, name, email, phoneNumber, address, position, department, salary } = req.body;
  const newEmployee = new EmployeeModel({
    employeeId,
    name,
    email,
    phoneNumber,
    address,
    position,
    department,
    salary
  });
  try {
    await newEmployee.save();
    return res.status(201).json({ message: "Employee added successfully", employee: newEmployee });
  } catch (error) {
    return res.status(500).json({ message: "Error occured while adding employee", error: error.message });
  }
}

export const getEmployeesController = async (req, res) => {
  try {
    const employees = await EmployeeModel.find({});
    return res.status(200).json({ message: "Employees fetched successfully", employees });
  }
  catch (error) {
    return res.status(500).json({ message: "Error occured while fetching employees", error: error.message });
  }
}

export const getEmployeeByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await EmployeeModel.findOne({ employeeId: id });
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    return res.status(200).json({ message: "Employee fetched successfully", employee });
  } catch (error) {
    return res.status(500).json({ message: "Error occured while fetching employee", error: error.message });
  }
}
export const getEmployeeByIdAndUpdateController = async (req, res) => {
  const { id } = req.params;
  const { employeeId, name, email, phoneNumber, address, position, department, salary } = req.body;
  try {
    const updatedEmployee = await EmployeeModel.findOneAndUpdate(
      { employeeId: id },
      {
        employeeId, name, email, phoneNumber, address, position, department, salary
      },
      { new: true } // Return the updated document
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    return res.status(200).json({ message: "Employee updated successfully", employee: updatedEmployee });
  } catch (error) {
    return res.status(500).json({ message: "Error occurred while updating employee", error: error.message });
  }
}

export const deleteEmployeeController = async (req, res) => {
  const { id } = req.params;
  try {
    const employees = await EmployeeModel.findOneAndDelete({ employeeId: id });

    if (!employees) {
      return res.status(404).json({ message: "Employee not found" });
    }
    return res.status(200).json({ message: "Employee deleted successfully", employees });
  }
  catch (error) {
    return res.status(500).json({ message: "Error occurred while deleting employee", error: error.message });
  }
}