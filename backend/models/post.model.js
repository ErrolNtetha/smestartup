const mongoose = require('mongoose');

const userPost = new mongoose.Schema(
    {
        author: {
            name: {
                firstName: { type: String, required: [true, 'The first name is required.'] },
                lastName: { type: String, required: [true, 'The last name is required.'] }
            },
            id: { type: String, required: [true, 'The ID cannot be empty. Please provide the ID.'] },
            avatar: String,
            occupation: String,
            isVerified: Boolean,
            email: { type: String, lowercase: true },
            isOwner: { type: Boolean }
        },
        post: String,
        encodedImage: String,
        reports: {
            count: Number,
            users: { type: [mongoose.Schema.Types.ObjectId], ref: 'User' },
        },
        stars: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'User'
        },
    },
{ timestamps: true }
);

const Post = mongoose.model('Post', userPost);

module.exports = Post;
