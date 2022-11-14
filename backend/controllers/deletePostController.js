const Post = require('../models/post.model');
const { cloudinary } = require('../utils/cloudinary.js');

const deletePost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findById(id);
        const { signature, public_id } = post?.image; // grab the url and public id

        if (public_id) {
            cloudinary.uploader.destroy(public_id, signature, function(error, result) {
                if (error) {
                    console.log('Error: ', error);
                    return;
                }
                console.log('Results: ', result);
            });
        }

        Post.findByIdAndRemove(id, (error, result) => {
            if (error) console.log(error)
            res.status(200).json({
                success: true,
                message: 'Post successfully deleted.'
            });
        });
    } catch(error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = deletePost;
