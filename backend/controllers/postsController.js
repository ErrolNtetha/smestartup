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

exports.incrimementLikes = async (req, res) => {
    console.log('Post liked');
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
    await Post.find()
        .populate('author')
        .then((posts) => {
            if (!posts) return res.status(404).json({ message: 'No posts found yet. Follow people to see their posts.' });
            return res.status(200).json({ posts });
        })
        .catch((error) => res.status(500).json({ error, message: 'There was an error getting posts.' }));
};

exports.getUserPost = async (req, res) => {
    // I have encountered a bug in this code
    // Here i am requiring the avatar of the user who is currently logged in
    // this means that all posts of other users will have the current user logged in
    // this is same as verified and occupation as well.
    // get all the posts from the database
    await Post.find()
        .then((posts) => {
            if (!posts) res.status(404).json({ message: 'No posts found yet. Be the first to post!' });
            res.json({ posts });
        })
        .catch((error) => res.json({ message: 'Error getting the posts for now.', error }));
};

exports.getAllUserPosts = async (req, res) => {
    const { email } = req.user;
    const { _id } = await User.findOne({ email });

    await Post.find({ author: _id })
        .populate('author')
        .then((posts) => {
            if (!posts) return res.status(404).json('No posts yet. Follow people to see their posts.');
            return res.json({ posts });
        })
        .catch((error) => res.json({ message: 'Error getting the posts.', error }));
};
