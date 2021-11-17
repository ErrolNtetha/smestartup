const mongoose = require('mongoose');

const userData = new mongoose.Schema({
    name: {
        firstName: { type: String, required: true },
        lastName: String,
    },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    isPremium: {  type: Boolean, default: false},
    type: {
        role: String, // Admin or regular user - Used for later
        user: { type: String, required: true }, // Investor or Business or Advisor
    },
}, { timestamps: true });

const user = mongoose.model('User', userData);

module.exports = user; 