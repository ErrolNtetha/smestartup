const Post = require('../models/post.model');

const deletePost = async (req, res) => {
    const id = req.params.id;

    await Post.findOneAndRemove({ _id: id }).exec()
        .then(post => {
            if (!post) {
                console.log('No post found for that ID');
                return;
            }
            return res.json(post);
        })
        .catch(err => console.log(err));
}

module.exports = deletePost;
