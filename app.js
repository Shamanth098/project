// External Model
const express = require("express");
const session = require('express-session'); // <-- ADDED: Session management
// Import the routes file
const dashbordRouter = require("./routes/dashbord"); 
// Import the utility object containing both functions
const databaseUtil = require("./utils/databaseUtil"); 

//Local Model
const path = require('path');

const app = express();

// --- CRITICAL MIDDLEWARE ---

// 0. Session Configuration <-- CRITICAL ADDITION
app.use(session({
    secret: 'YOUR_VERY_SECURE_RANDOM_KEY', // <-- MUST be a secret string!
    resave: false,
    saveUninitialized: false
}));

// 1. Body Parser for form data
app.use(express.urlencoded({ extended: false })); 
app.use(express.json()); // Also necessary for the IoT data upload route

// 2. Static files
app.use(express.static(path.join(__dirname, 'views')));

// --- ROUTES ---

// Use the router
app.use(dashbordRouter);

// --- SERVER RUNNING ---

const PORT = 3010;

// Use the corrected mongoConnect function from the utility object
databaseUtil.mongoConnect(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on address http://localhost:${PORT}`);
  });
});