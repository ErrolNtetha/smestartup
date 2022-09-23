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

SuppliersSchema.pre('save', async function(next) {
    const location = await geocoder.geocode(this.address);
    console.log(location[0]);

    this.addresses.physical = {
        type: ['Point'],
        coordinates: [location[0].longitude, location[0].latitude],
        country: location[0].country,
        zip: location[0].zipcode,
        city: location[0].city,
        countryCode: location[0].countryCode,
        province: location[0].stateCode,
        formattedAddress: location[0].formattedAddress
    };

    // Do not save address
    this.address = undefined;
    next();
});

module.exports = mongoose.model('Suppliers', SuppliersSchema);
