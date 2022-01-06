const mongoose = require('mongoose');

const userPost = new mongoose.Schema({
    post: { type: String, required: true },
    createdAt: Date,
    updatedAt: Date,
});

const Post = mongoose.model('Post', userPost);

module.exports = Post;