// const mongoose = require('mongoose');
const Post = require('../models/post.model');
const User = require('../models/user.model');

exports.userPosts = async (req, res) => {
    const { id } = req.user;
    const { post, fileURL } = req.body;

    const {
        name,
        occupation,
        avatar,
        isPremium,
        isVerified,
        _id
    } = await User.findOne({ _id: id });

    const userPost = new Post({
        post,
        encodedImage: fileURL,
        author: {
            name: `${name.firstName} ${name.lastName}`,
            occupation,
            avatar,
            isPremium,
            isVerified,
            userId: _id
        }
    });

    // save post on the database
    await userPost.save()
        .then(() => res.json({ message: 'Successfully posted' }))
        .catch((err) => res.status(500).json('There was an error saving the post. ', err));
};

exports.incrimementLikes = async (req, res) => {
    console.log('Post liked');
};

exports.getSpecificUserPost = async (req, res) => {
    const { id } = req.params;

    // get all the posts from the database
    await Post.findById({ _id: id })
        .then((posts) => {
            if (!posts) {
                res.json({ message: 'Post not found. It might have been removed by user.' });
                return;
            }
            res.json({ posts });
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
    const { id } = req.user;

    // get all the posts from the database
    await Post.find({ author: id })
        .then((posts) => {
            if (!posts) res.status(400).json('No posts yet. Follow people to see their posts.');
            res.json({ posts });
        })
        .catch((error) => res.json({ message: 'Error getting the posts.', error }));
};
