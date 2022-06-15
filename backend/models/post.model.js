const mongoose = require('mongoose');

const userPost = new mongoose.Schema({
    author: String,
    user: String,
    post: String,
    image: String,
    encodedImage: String,
    likes: Number
},
{
    timestamps: true,
});

const Post = mongoose.model('Post', userPost);

module.exports = Post;
