const mongoose = require('mongoose');

const founderSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.Mixed,
        name: {
            firstName: String,
            lastName: String
        },
        occupation: String,
        gender: String,
        avatar: String,
        required: [true, 'Author cannot be empty.']
    },
    city: {
        type: String,
        require: [true, 'You must specief which city you are lookin']
    },
    investmentType: {
        type: String,
        enum: ['land & building', 'capital']
    },
    description: {
        type: String,
        min: 30,
        max: 120,
        required: [true, 'You must provide an about.']
    },
    about: {
        type: String,
        min: 50,
        max: 1000,
        required: [true, 'You must provide a description.']
    },
    seeking: { type: Boolean, default: false }
});

const Founder = mongoose.model('Founder', founderSchema);
module.exports = Founder;
