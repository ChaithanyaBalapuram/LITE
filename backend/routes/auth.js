const express = require('express');
const router = express.Router();

// User Registration Endpoint
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Logic for registering a user
    res.send('User registered successfully!');
});

// User Login Endpoint
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Logic for logging in a user
    res.send('User logged in successfully!');
});

module.exports = router;
