import mongoose from "mongoose";
const connectDB = async () => {
  const MONGODB_URL = process.env.MONGODB_URL;
  console.log(`MongoDB URL: ${MONGODB_URL}`); 
  if (!MONGODB_URL) {
    console.error("MongoDB URI is not defined in environment variables.");
    process.exit(1);
  }
  try {
    const conn = await mongoose.connect(MONGODB_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}
export default connectDB; 