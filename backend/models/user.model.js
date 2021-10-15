const express = require('express');
const mongoose = require('mongoose');


const userData = new mongoose.Schema({
    name: {
        firstName: String,
        lastName: String,
    },
    email: String,
    password: String,
})

const data = mongoose.model('User', userData);

module.exports = data;