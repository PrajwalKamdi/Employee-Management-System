import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/database.js';
import employeeRouter from './routes/employee_route.js';
import adminRouter from './routes/admin_routes.js';
dotenv.config();
const server = express();
const PORT = process.env.PORT;
console.log(process.env.CLIENT_URL)
server.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));
server.use(express.json());
server.use(employeeRouter);
server.use(adminRouter);
await connectDB();
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
); 