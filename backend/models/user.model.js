const mongoose = require('mongoose');


const userData = new mongoose.Schema({
    name: {
        firstName: String,
        lastName: String,
    },
    email: String,
    password: String,
    confirmPassword: String,
    type: String,
    isVerified: Boolean,
})

const user = mongoose.model('User', userData);

module.exports = user;