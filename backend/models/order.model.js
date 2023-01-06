const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    author: { type: mongoose.Types.ObjectId, ref: 'User' },
    status: String,
    startsAt: { type: Date, default: new Date() },
    endsAt: Date,
    productName: String,
    planType: {
        type: String,
        enum: ['starter', 'pro', 'premium'],
        required: [true, 'Plan type is required.']
    },
    price: {
        type: Number,
        required: [true, 'Price is required.']
    },
});

const order = mongoose.model('Order', orderSchema);
module.exports = order;
