// services/authService.js

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Function to register a new user
async function registerUser(userData) {
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error('Email already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Create new user
    const newUser = new User({
      username: userData.username,
      email: userData.email,
      password: hashedPassword
    });

    // Save user to database
    await newUser.save();
    return { success: true, message: 'User registered successfully' };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

// Function to authenticate user
async function authenticateUser(userData) {
  try {
    // Find user by email
    const user = await User.findOne({ email: userData.email });
    if (!user) {
      throw new Error('User not found');
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(userData.password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { success: true, token: token };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

module.exports = {
  registerUser,
  authenticateUser
};
