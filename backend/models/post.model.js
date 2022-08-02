const mongoose = require('mongoose');

const userPost = new mongoose.Schema({
    author: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    post: String,
    encodedImage: String,
    stars: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User'
    },
},
{ timestamps: true }
);

const Post = mongoose.model('Post', userPost);

module.exports = Post;
