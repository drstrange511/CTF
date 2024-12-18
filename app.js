const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Mock "database" (accounts)
let accounts = {
    '123456': { name: 'Alice', RUT: '123456', branches: [] },
    '654321': { name: 'Bob', RUT: '654321', branches: [] }
};

// Import routes
const authRoutes = require('./routes/auth');  // Authentication routes
const homeRoutes = require('./routes/home');
const branchRoutes = require('./routes/branch');

// Session middleware
app.use(session({
    secret: 'your-secret-key',  // Replace with a more secure secret in production
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  // Change to true in production if using HTTPS
}));

// Body parser middleware to parse POST data
app.use(bodyParser.urlencoded({ extended: true }));

// Static file serving (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));  // Serve static files

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Use routes
app.use('/', authRoutes);  // Routes for authentication (login, logout)
app.use('/home', homeRoutes);  // Routes for home page
app.use('/branch', branchRoutes);  // Routes for branch page

// Root route (should redirect to login or home based on session)
app.get('/', (req, res) => {
    if (req.session.user) {
        // If the user is logged in, redirect them to the home page
        res.redirect('/home');
    } else {
        // Otherwise, show the login page
        res.redirect('/login');
    }
});

// Server setup
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

