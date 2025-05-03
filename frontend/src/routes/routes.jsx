import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Dashboard from "../components/Pages/Dashboard";
import Home from "../components/Pages/Home";
import Add_new_employee from "../components/Pages/Add_new_employee";
import About from "../components/Pages/About";
import Employees from "../components/Pages/Employees";
import Update from "../components/Pages/Update";
import Login from "../components/Auth/Login";
import Sign_up from "../components/Auth/Sign_up";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-employee" element={<Add_new_employee />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/about" element={<About />} />
      <Route path="/update/:id" element={<Update />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Sign_up />} />
    </Route>
  )
);
export default router;
