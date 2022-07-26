const Post = require('../models/post.model');
const User = require('../models/user.model');

exports.userPosts = async (req, res) => {
    // populate the user::: Get their first name, store in a variable
    // and pass variable to the save method
    const { id, email } = req.user;
    console.log(email);

    const { _id } = await User.findOne({ email });
    const { post, fileURL } = req.body;
    console.log(_id);

    const userPost = new Post({
        user: _id,
        post,
        encodedImage: fileURL,
        author: _id
    });

    // save post on the database
    await userPost.save()
        .then(() => res.json({ message: 'Successfully posted' }))
        .catch((err) => console.log('There was an error saving the post. ', err));
};

exports.incrimementLikes = async (req, res) => {
    const { likes } = req.body;
    console.log(req.params);
    console.log(likes);

    // find the post and update the stars
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
