require("dotenv").config(); // loads env variables from a .env file into process.env (useful for keeping secrets: database URI, API keys)
const express = require("express"); // imports express.js framework to build the backend server
const cors = require("cors"); // cross-origin-sharing
const path = require("path"); // Node.js built-in module for handling file and directory paths
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");


const app = express(); // initializes your Express app -> this object is how I define routes and middleware

// Middleware to handle CORS - frontend can make requests to backend
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use(express.json());

connectDB();

app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 5000; //uses the port defined in .env file, or falls back on 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)) // starts backend on specified port, callback logs a message so I know it started successfully
