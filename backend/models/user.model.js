const mongoose = require('mongoose');

const userData = new mongoose.Schema({
    name: {
        firstName: { type: String, required: [true, 'First name cannot be empty.'] },
        lastName: { type: String, required: [true, 'Last name cannot be empty.'] },
    },
    email: { type: String, lowercase: true, required: [true, 'Email is required.'] },
    gender: { type: String, required: [true, 'Gender is required.'] },
    password: {
        type: String,
        min: 6,
        max: 40,
        required: [true, 'Password cannot be empty.']
    },
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
