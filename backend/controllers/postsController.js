const Post = require('../models/post.model');
const User = require('../models/user.model');

exports.userPosts = async (req, res) => {
    // populate the user::: Get their first name, store in a variable
    // and pass variable to the save method
    const { id } = req.user;
    const { name: { firstName, lastName } } = await User.findOne({ email: req.user.email });

    const { post, fileURL } = req.body;

    const userPost = new Post({
        user: `${firstName} ${lastName}`,
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
    const { id } = req.params;
    const { likes } = req.body;
    console.log(likes);

    // find the post and update
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
            res.json({ error: err, message: 'There was an error getting the post.' });
        });
};

exports.getUserPost = async (req, res) => {
    const { isVerified, avatar, occupation } = await User.findOne({ email: req.user.email });
    console.log('Is verified? ', isVerified);

    // get all the posts from the database
    await Post.find({ })
        .then((posts) => {
            if (!posts) {
               console.log('No posts yet. Follow people to see their posts.');
            }
            res.json({
                posts,
                user: isVerified,
                avatar,
                occupation,
                isVerified

            });
        })
        .catch((err) => {
            res.json({ message: 'Error getting the posts.', err });
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
