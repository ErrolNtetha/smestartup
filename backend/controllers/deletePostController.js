const Post = require('../models/post.model');

const deletePost = async (req, res) => {
    const { id } = req.params;

    await Post.findOneAndRemove({ _id: id }).exec()
        .then((post) => {
            if (!post) {
                console.log('No post found for that ID');
                res.status(404).json({ success: false, message: 'Post was not found.' });
                return;
            }
            res.json({ success: true, message: 'Post successfully deleted' });
        })
        .catch((error) => {
            console.log(error.message);
            res.status(500).json({ success: false, message: 'An error occured deleting your post.' });
        });
};

module.exports = deletePost;
