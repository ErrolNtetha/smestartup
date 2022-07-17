const mongoose = require('mongoose');

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
    addresses: {
        physical: {
            name: String,
            latitude: Number,
            longitude: Number
        },
        postal: String
    },
    isRegistered: Boolean,
}, { timestamps: true });

module.exports = mongoose.model('Suppliers', SuppliersSchema);
