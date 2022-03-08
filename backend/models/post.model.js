const mongoose = require('mongoose');

const userPost = new mongoose.Schema({
	user: String,
    post: { type: String },
}, 
{
    timestamps: true,
});

const Post = mongoose.model('Post', userPost);

module.exports = Post;
