import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
export const ensureAuthenticated = (req, res, next) => {
  const auth = req.headers['authorization'];
  if (!auth) {
    return res.status(401).json({ message: 'Unauthorized, Please provide JWT Token!' });
  }
  const token = auth.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized, Invalid token format!' });
  }
  try {
    console.log(token);
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  }
  catch (error) {
    return res.status(403).json({ message: 'Unauthorized, Please provide valid JWT Token!' });
  }
}