const mongoose = require('mongoose');

const userData = new mongoose.Schema({
    name: {
        firstName: { type: String },
        lastName: String,
    },
    email: { type: String },
    password: { type: String },
    isVerified: { type: Boolean, default: false },
    isPremium: {  type: Boolean, default: false},
    type: {
        role: String, // Admin or regular user - Used for later
        user: { type: String }, // Investor or Business or Advisor
    },
}, { timestamps: true });

const user = mongoose.model('User', userData);

module.exports = user; 