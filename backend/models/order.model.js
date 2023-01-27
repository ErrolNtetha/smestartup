const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    author: { type: mongoose.Types.ObjectId, ref: 'User' },
    paymentPlan: {
        type: String,
        enum: ['starter', 'pro', 'premium'],
        required: [true, 'Plan type is required.']
    },
    payfastTransactionId: {
        type: String,
        required: [true, 'Payfast transaction ID is required.']
    },
    nextPaymentDate: {
        type: Date,
        required: [true, 'Next payment date is required.']
    },
}, { timestamps: true });

const order = mongoose.model('Order', orderSchema);
module.exports = order;
