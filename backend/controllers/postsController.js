const mongoose = require('mongoose');
const Post = require('../models/post.model');
const User = require('../models/user.model');

exports.userPosts = async (req, res) => {
    // populate the user::: Get their first name, store in a variable
    // and pass variable to the save method
    const { email } = req.user;

    const {
        _id,
        name,
        occupation,
        isVerified,
        avatar
    } = await User.findOne({ email });
    const { post, fileURL } = req.body;

    const userPost = new Post({
        author: {
            name: {
                firstName: name.firstName,
                lastName: name.lastName,
            },
            id: _id,
            occupation,
            isVerified,
            email,
            avatar
        },
        post,
        encodedimage: fileURL,
    });

    // save post on the database
    await userPost.save()
        .then(() => res.json({ message: 'Successfully posted' }))
        .catch((err) => console.log('There was an error saving the post. ', err));
};

exports.incrimementLikes = async (req, res) => {
    console.log(req.user);
    const { id } = req.user;
    const { postId } = req.body;
    console.log('Post ID: ', postId);

    // find the post, add the stars and update the stars
    await Post.findOne({ _id: postId })
        .then((post) => {
            // In a case where the post does not exist, return with 404
            if (!post) return console.log('Post not found...');

            // First, checks if the the user ID already exist in the 'stars' array
            const exist = post.stars.includes(id);
            if (exist) return console.log('You have already liked this post');

            // Then add the user ID to the 'stars' array
            post.stars.push(id);
            console.log(post.stars);
            const addUser = post.stars.push(id.toString());
            console.log('add user:', addUser);
            const addStar = new Post({ stars: addUser });
            addStar.save()
                .then(() => console.log('You have starred this post'))
                .catch((error) => console.log('There was an error liking the post.', error.message));
        })
        .catch((error) => console.error(error));
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
    // I have encountered a bug in this code
    // Here i am requiring the avatar of the user who is currently logged in
    // this means that all posts of other users will have the current user logged in
    // this is same as verified and occupation as well.
    // get all the posts from the database
    await Post.find({ })
        .then((posts) => {
            if (!posts) {
                res.status(404).json({ message: 'No posts found yet. Follow people to see their posts.' })
            }
            res.json({
                posts,
            });
        })
        .catch((err) => {
            res.json({ message: 'Error getting the posts for now.', err });
        });
};

exports.getAllUserPosts = async (req, res) => {
    // get all the posts from the database
    await Post.find()
        .then((posts) => {
            if (!posts) return res.status(200).json({ message: 'No posts. You posts will appear here.' });
            return res.status(200).json({ posts });
        })
        .catch((err) => res.status(500).json({ message: 'Error getting the posts.', err }));
};
