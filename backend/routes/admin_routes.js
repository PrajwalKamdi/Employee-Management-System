import express from 'express';
import cookieParser from 'cookie-parser';
import { adminController, adminLoginController} from '../controllers/Admin-Controller.js';
const adminRouter = express.Router();
adminRouter.use(cookieParser());
adminRouter.use(express.json());
adminRouter.post('/admin',adminController);
adminRouter.post('/admin/login', adminLoginController);

export default adminRouter;
