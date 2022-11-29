const mongoose = require('mongoose');

const userData = new mongoose.Schema({
    name: {
        firstName: { type: String, required: [true, 'First name cannot be empty.'] },
        lastName: { type: String, required: [true, 'Last name cannot be empty.'] },
    },
    facebook_id: String,
    googleId: String,
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, 'Email is required.']
    },
    gender: { type: String, required: [true, 'Gender is required.'] },
    password: {
        type: String,
        min: 6,
        max: 40,
        required: [true, 'Password is required.']
    },
    avatar: String,
    isVerified: { type: Boolean, default: false },
    isPremium: { type: Boolean, default: false },
    bio: { type: String, max: 200 },
    occupation: String,
    company: String,
    school: String,
    location: String,
    employmentStatus: String,
    type: { type: String, default: 'personal' },
}, { timestamps: true });

const User = mongoose.model('User', userData);

module.exports = User;
