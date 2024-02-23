// authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware function to verify JWT token
const authMiddleware = async (req, res, next) => {
  try {
    // Check if authorization header is present
    const token = req.header('Authorization');
    if (!token) {
      return res.status(401).json({ message: 'Authorization header is missing' });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if user exists
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Attach user object to request
    req.user = user;

    // Call next middleware or route handler
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = authMiddleware;
