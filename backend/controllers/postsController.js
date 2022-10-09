// const mongoose = require('mongoose');
const Post = require('../models/post.model');
const User = require('../models/user.model');

exports.userPosts = async (req, res) => {
    // populate the user::: Get their first name, store in a variable
    // and pass variable to the save method
    const { email } = req.user;

    const { _id } = await User.findOne({ email });
    const { post, fileURL } = req.body;

    const userPost = new Post({
        author: _id,
        post,
        encodedimage: fileURL,
    });

    // save post on the database
    await userPost.save()
        .then(() => res.status(200).json({ message: 'Successfully posted' }))
        .catch((err) => res.status(500).json({ message: err.message }));
};

exports.updateStars = async (req, res) => {
    const { _id } = await User.findOne({ email: req.user.email });

    // check if the user id already exist in array if it does, return...
    // otherwise, proceed.
    const hasStarred = await Post.findById(req.params.id);
    if (hasStarred.stars.includes(_id)) {
        await Post.findByIdAndUpdate(req.params.id, { $pull: { stars: _id } })
            .then(() => res.status(200).json({ success: true }))
            .catch((error) => res.status(500).json({ success: false, error }));
    } else {
        await Post.findByIdAndUpdate(req.params.id, { $push: { stars: [_id] } })
            .then(() => res.status(200).json({ success: true }))
            .catch((error) => console.log('Ops. There was a problem.', error.message));
    }
};

exports.getSpecificUserPost = async (req, res) => {
    const { email } = req.user;

    // get all the posts from the database
    await Post.find({ email })
        .then((posts) => {
            if (!posts) return res.status(404).json({ message: 'Posts not found.' });
            return res.status(200).json({ posts });
        })
        .catch((err) => res.status(500).json({ error: err, message: 'There was an error getting posts.' }));
};

exports.getUserPost = async (req, res) => {
    // const { email, id } = req.user;
    await Post.find()
        .sort({ createdAt: -1 })
        .populate('author', 'name email _id isVerified occupation avatar')
        .then((posts) => {
            if (!posts) res.status(404).json({ message: 'No posts found yet. Be the first to post!' });
            res.status(200).json({ posts });
        })
        .catch((error) => res.status(500).json({ message: 'Error getting the posts for now.', error }));
};

exports.getAllUserPosts = async (req, res) => {
    const { email } = req.user;
    const { _id } = await User.findOne({ email });

    await Post.find({ author: _id })
        .populate('author', 'name occupation avatar')
        .then((posts) => {
            if (!posts) return res.status(404).json('No posts yet. You posts will apppear here.');
            return res.json({ posts });
        })
        .catch((error) => res.json({ message: 'Error getting the posts.', error }));
};
