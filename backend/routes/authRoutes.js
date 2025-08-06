// Express router file 

// Imports express library
const express = require("express");


// Imports three functions from authController -> handles logic for registers and logging users in, and getting user info
const {
    registerUser,
    loginUser,
    getUserInfo,
} = require("../controllers/authController");

// Creates a new router instance
const router = express.Router();

// Defines a POST route at /register -> when POST request is made to /register, the registerUser function will be called
router.post("/register", registerUser);

router.post("/login", loginUser);

// Defines a GET route at /getUser -> route uses middleware protect (authentication, checks for valid token), if request passes, getUserInfo is called
router.get("/getUser", protect, getUserInfo);

module.exports = router;