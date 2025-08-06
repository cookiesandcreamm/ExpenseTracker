// Express router file 

// Imports express library
const express = require("express");
const { protect } = require("../middleware/authMiddleware");


// Imports three functions from authController -> handles logic for registers and logging users in, and getting user info
const {
    registerUser,
    loginUser,
    getUserInfo,
} = require("../controllers/authController");
const upload = require("../middleware/uploadMiddleware");

// Creates a new router instance
const router = express.Router();

// Defines a POST route at /register -> when POST request is made to /register, the registerUser function will be called
router.post("/register", registerUser);
router.post("/login", loginUser);
// Defines a GET route at /getUser -> route uses middleware protect (authentication, checks for valid token), if request passes, getUserInfo is called
router.get("/getUser", protect, getUserInfo);

router.post("/upload-image", upload.single("image"), (req, res) => {
    if(!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
        req.file.filename
    }`;
    res.status(200).json({ imageUrl });
});

module.exports = router;