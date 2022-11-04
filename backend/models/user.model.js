const mongoose = require('mongoose');

const userData = new mongoose.Schema({
    name: {
        firstName: { type: String, required: [true, 'First name cannot be empty.'] },
        lastName: { type: String, required: [true, 'Last name cannot be empty.'] },
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
    },
    gender: { type: String, },
    password: {
        type: String,
        min: 6,
        max: 40,
    },
    avatar: String,
    isVerified: { type: Boolean, default: false },
    isPremium: { type: Boolean, default: false },
    bio: { type: String, max: 180 },
    occupation: String,
    company: String,
    school: String,
    location: String,
    employmentStatus: String,
    type: { type: String, default: 'personal' },
}, { timestamps: true });

const User = mongoose.model('User', userData);

module.exports = User;
