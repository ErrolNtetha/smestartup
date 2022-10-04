const mongoose = require('mongoose');
// const geocoder = require('../utils/geocode');

const SuppliersSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'The author is required.']
    },
    customerID: String,
    name: {
        type: String,
        required: [true, 'The name is required.']
    },
    about: {
        type: String,
        required: [true, 'About is required.'],
        min: 30,
        max: 200
    },
    description: {
        type: String,
        required: [true, 'Description cannot be empty. It is required.'],
        min: 30,
        max: 1200
    },
    type: { type: String, default: 'supplier' },
    tags: [String],
    registrationNumber: String,
    established: Number,
    photos: [String],
    avatar: String,
    contacts: {
        cellphone: [Number],
        telephone: [Number],
        website: { type: String, lowercase: true },
        email: { type: Array, lowercase: true },
        fax: Number,
        other: String
    },
    verified: { type: Boolean, default: false },
    beeLevel: String,
    sector: String,
    moq: String,
    moqNumber: Number,
    quotation: String,
    addresses: {
        physical: {
            type: {
                type: String,
                enum: ['Point']
            },
            coordinates: {
                type: [Number],
                index: '2dsphere'
            },
            country: String,
            zip: String,
            city: String,
            streetName: String,
            countryCode: String,
            province: String,
            formattedAddress: String
        },
        postal: String
    },
    isRegistered: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Suppliers', SuppliersSchema);
