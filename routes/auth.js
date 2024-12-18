// routes/auth.js
const express = require('express');
const router = express.Router();
const { loginPage, loginUser, logoutUser } = require('../controllers/authController');

// Show login form (GET)
router.get('/login', loginPage);

// Handle login form submission (POST)
router.post('/login', loginUser);

// Handle logout (GET)
router.get('/logout', logoutUser);

module.exports = router;
