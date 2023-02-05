const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: [true, 'Author is required.'] },
    comment: { type: String, required: [true, 'Comment cannot be empty.'] },
    photo: { type: String }
}, { timestamps: true });

module.exports = commentSchema;
