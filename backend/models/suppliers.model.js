const mongoose = require('mongoose');
const geocoder = require('../utils/geocode');

const SuppliersSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'The author is required.']
    },
    name: {
        type: String,
        required: [true, 'The name is required.']
    },
    about: {
        type: String,
        required: [true, 'About is required.'],
        min: 30,
        max: 140
    },
    description: {
        type: String,
        required: [true, 'Description cannot be empty. It is required.'],
        min: 30,
        max: 1200
    },
    type: { type: String, default: 'supplier' },
    sector: String,
    tags: [String],
    registrationNumber: String,
    established: Number,
    photos: [String],
    contacts: {
        cellphone: [Number],
        telephone: [Number],
        website: { type: String, lowercase: true },
        email: { type: Array, lowercase: true },
        fax: String,
        other: String
    },
    verified: { type: Boolean, default: false },
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
