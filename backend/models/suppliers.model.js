const mongoose = require('mongoose');
const geocoder = require('../utils/geocode');

const SuppliersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    about: { type: String, required: true },
    type: String,
    regNumber: String,
    contacts: {
        cellphone: [Number],
        telephone: [Number],
        website: String,
        email: Array,
        other: String
    },
    address: {
        type: String,
        requred: [true, 'Address cannot be empty.']
    },
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
    isRegistered: Boolean,
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
