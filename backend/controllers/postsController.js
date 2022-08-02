const mongoose = require('mongoose');
const Post = require('../models/post.model');
const User = require('../models/user.model');

exports.userPosts = async (req, res) => {
    // populate the user::: Get their first name, store in a variable
    // and pass variable to the save method
    const { id, email } = req.user;

    const { _id } = await User.findOne({ email });
    const { post, fileURL } = req.body;

    const userPost = new Post({
        user: _id,
        post,
        encodedImage: fileURL,
        author: id
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
            console.log('Is this an array?', post.stars typeof Array);
            console.log('Is this an object?', post.stars typeof Object);
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
    const { id } = req.params;

    // get all the posts from the database
    await Post.findById({ _id: id })
        .then((posts) => {
            if (!posts) {
               res.json({ message: 'Post not found. It might have been removed by user.' });
            }
            res.json({ posts });
        })
        .catch((err) => {
            res.json({ error: err, message: 'There was an error getting posts.' });
        });
};

exports.getUserPost = async (req, res) => {
    // I have encountered a bug in this code
    // Here i am requiring the avatar of the user who is currently logged in
    // this means that all posts of other users will have the current user logged in
    // this is same as verified and occupation as well.
    // get all the posts from the database
    await Post.find({ })
        .populate('user')
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
    const { id } = req.user;

    // get all the posts from the database
    await Post.find({ author: id })
        .then((posts) => {
            if (!posts) {
               console.log('No posts yet. Follow people to see their posts.');
            }
            res.json({
                posts
            });
        })
        .catch((err) => {
            res.json({ message: 'Error getting the posts.', err });
        });
};
