const mongoose = require('mongoose');

const BusinessInfoSchema = new mongoose.Schema({
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

const BusinessInfo = mongoose.model('business', BusinessInfoSchema);

module.exports = BusinessInfo;