import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../model/Admin.js";
export const adminController = async (req, res) => {
  const { name, email, password } = req.body;
  const newAdmin = new Admin({
    name,
    email,
    password: bcrypt.hashSync(password, 10), // Hash the password before saving
  });
  try {
    const savedAdmin = await newAdmin.save();
    return res.status(201).json({ message: "New Admin Has Been Created" });

  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}

export const adminLoginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingAdmin = await Admin.find({ email: email });
    if (!existingAdmin) {
      return res.status(404).json({ message: "Admin Not Found" });
    }
    const isPasswordValid = bcryptjs.compareSync(password, existingAdmin[0].password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
    const token = jwt.sign({ email: existingAdmin[0].email, id: existingAdmin[0]._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
    return res.status(200).json({ message: "Login Successful!", token, name: existingAdmin[0].name, email: existingAdmin[0].email });
  }
  catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}


