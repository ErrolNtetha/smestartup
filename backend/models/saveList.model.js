const mongoose = require('mongoose');

const supplierSaveList = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: [true, 'Author is required.'] },
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Suppliers', required: [true, 'Supplier is required.'] },
    savedAt: { type: Date, default: Date.now() }
});

const SaveList = mongoose.model('SaveList', supplierSaveList);
module.exports = SaveList;
