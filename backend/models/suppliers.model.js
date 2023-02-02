/* eslint-disable prefer-arrow-callback */
const mongoose = require('mongoose');
const geocoder = require('../utils/geocode');

const SuppliersSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'The author is required.']
    },
    customerID: { type: String, unique: true },
    storeId: { type: String, unique: true },
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
    type: { type: String },
    approved: { type: Boolean, default: false },
    tags: [String],
    registrationNumber: String,
    established: Number,
    photos: [
        {
            url: String,
            signature: String,
            publicId: String
        }
    ],
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
    address: {
        city: String,
        postalCode: String,
        streetAddress: String
    },
    addresses: {
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
    isRegistered: { type: Boolean, default: false },
}, { timestamps: true });

SuppliersSchema.pre('save', async function (next) {
    const loc = await geocoder.geocode(`${this.address.streetAddress}, ${this.address.city} ${this.address.postalCode}`);
    const {
        longitude,
        latitude,
        formattedAddress,
        city,
        country,
        countryCode,
        stateCode,
        zipcode,
        streetName,
    } = loc[0];

    this.addresses = {
        type: 'Point',
        coordinates: [longitude, latitude],
        formattedAddress,
        city,
        country,
        province: stateCode,
        zip: zipcode,
        countryCode,
        streetName
    };
    this.address = undefined; // Do not save the address
    next();
});

module.exports = mongoose.model('Suppliers', SuppliersSchema);
