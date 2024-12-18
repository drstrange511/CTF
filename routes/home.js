// routes/home.js
const express = require('express');
const router = express.Router();
const { homePage } = require('../controllers/homeController');

// Home route (only accessible after login)
router.get('/', homePage);

module.exports = router;
