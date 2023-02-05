const Post = require('../models/post.model');
const User = require('../models/user.model');

exports.getComments = async (req, res) => {
    const { id } = req.params;
    const comments = await Post
        .findById(id, 'comments')
        .populate('comments.author', 'name verified avatar occupation');

    if (comments) {
        res.status(200).json({ sucess: true, comments });
        return;
    }

    res.status(500).json({ sucess: false });
};

exports.postComment = async (req, res) => {
    const { email } = req.user;
    const { comment } = req.body;
    const { postId } = req.params;

    const { _id } = await User.findOne({ email });
    const post = await Post.findById(postId);

    if (post) {
        post.comments.push({
            comment,
            author: _id,
        });
        post.save((error, response) => {
            if (error) {
                res.status(500).json({ success: false, error: error.message });
                return;
            }
            res.status(201).json({ sucess: true, comment: response });
        });
    }
};

exports.deleteComment = (req, res) => {
    res.status(200).json({ sucess: true, message: 'Comment deleted.' });
};
