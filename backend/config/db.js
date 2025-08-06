// Imports mongoose library, tool to interact with MongoDB in Node.js
const mongoose = require("mongoose");

// Function to handle connection to db
const connectDB = async () => {
    try {
        //tries to establish a connection to MongoDB, env variable instatniated in .env
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log("MongoDB connected");
    } catch (err) {
        console.error("Error connecting to MongoDB", err);
        process.exit(1);
    }
};

// Exports the connectDB function so other files can import and call it to connect to the database
module.exports = connectDB;