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
    storeId: {
        type: String,
        trim: true,
        unique: true
    },
    address: {
        type: String,
        require: [true, 'Please proveide an address.']
    },
    physical: {
        type: {
            type: String,
            enum: ['Point'],
        },
        coordinates: {
            type: [Number],
            index: '2dsphere',
        },
        formattedAddress: String
    },
    isRegistered: Boolean,
}, { timestamps: true });

SuppliersSchema.pre('save', async (next) => {
    const location = await geocoder.geocode(this.address);
    console.log(location);
    next();
});

module.exports = mongoose.model('Suppliers', SuppliersSchema);
