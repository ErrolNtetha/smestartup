const mongoose = require('mongoose');

const InfoSchema = new mongoose.Schema({
    businessInfo: {
        overview: String,
        annualSales: Number,
        type: String,
        area: Number,
        founded: new Date(),
        sector: String,
        size: Number,
    }
    
});

const info = mongoose.model('Info', InfoSchema);

module.exports = info;