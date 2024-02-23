// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route to register a new user
router.post('/register', authController.register);

// Route to authenticate a user
router.post('/login', authController.authenticate);

// Other authentication routes if needed

module.exports = router;
