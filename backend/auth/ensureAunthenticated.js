export const ensureAuthenticated = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized, Please provide JWT Token!' });
  }
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  }
  catch (error) {
    return res.status(403).json({ message: 'Unauthorized, Please provide valid JWT Token!' });
  }
}