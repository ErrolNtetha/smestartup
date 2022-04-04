const Post = require('../models/post.model');

const deletePost = async (req, res) => {
    const id = req.params.id;

    await Post.findOneAndRemove(id).exec()
        .then(res => {
            if (!res) {
                console.log('No post found for that ID');
                return;
            }
            return console.log({ message: 'Post successfully deleted!' });
        })
        .catch(err => console.log(err));
}

module.exports = deletePost;
