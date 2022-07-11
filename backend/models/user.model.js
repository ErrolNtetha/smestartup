const mongoose = require('mongoose');

const userData = new mongoose.Schema({
    name: {
        firstName: String,
        lastName: String,
    },
    email: String,
    gender: String,
    password: String,
    avatar: Object,
    isVerified: { type: Boolean, default: false },
    isPremium: { type: Boolean, default: false },
    bio: String,
    occupation: String,
    employmentStatus: String,
    type: { type: String, default: 'personal' },
}, { timestamps: true });

const User = mongoose.model('User', userData);

module.exports = User;
