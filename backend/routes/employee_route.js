import express from 'express';
import { addEmployeeController, deleteEmployeeController, getEmployeeByIdAndUpdateController, getEmployeeByIdController, getEmployeesController } from '../controllers/Employee_Controllers.js';
import { ensureAuthenticated } from '../auth/ensureAunthenticated.js';
const employeeRouter = express.Router();
employeeRouter.use(express.json());
employeeRouter.post('/addemployee', ensureAuthenticated,addEmployeeController)
employeeRouter.get('/getEmployees', ensureAuthenticated,getEmployeesController);
employeeRouter.get('/getEmployee/:id', ensureAuthenticated,getEmployeeByIdController);
employeeRouter.put('/update/:id', ensureAuthenticated,getEmployeeByIdAndUpdateController);
employeeRouter.delete('/delete/:id',ensureAuthenticated, deleteEmployeeController);
export default employeeRouter;