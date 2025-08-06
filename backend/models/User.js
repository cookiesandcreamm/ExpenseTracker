const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    fullName: { type: String, required: true
    },
    email: { type: String, required: true, unique: true
    },
    password: { type: String, required: true
    },
    profileImageUrl: { type: String, default: null
    },

}, { timestamps: true }
);

// Hash password before saving
UserSchema.pre('save', async function (next) {
    
})