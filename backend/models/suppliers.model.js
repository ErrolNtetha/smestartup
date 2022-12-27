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
    address: String,
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

SuppliersSchema.pre('save', async function (next) {
    await geocoder.geocode(this.address, function (error, res) {
        if (error) console.log('There is an error: ', error);
        const loc = res[0];
        this.address = undefined; // Do not save the address entered by the user
        this.addresses = {
            type: 'Point',
            coordinates: [loc.longitude, loc.latitude],
            formattedAddress: loc.formattedAddress,
            city: loc.city,
            province: loc.stateCode,
            zip: loc.zipcode,
            countryCode: loc.countryCode
        };
    });
    next();
});

module.exports = mongoose.model('Suppliers', SuppliersSchema);
