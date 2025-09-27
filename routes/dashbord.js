//Core Model
const path = require('path');

//External Model
const express = require('express');
const dashbord = express.Router();

//Local Model

dashbord.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/landing1.html"));
});

dashbord.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"));
});

dashbord.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/register.html"));
});

dashbord.get("/dashbord", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/dashbord.html"));
});

module.exports = dashbord;