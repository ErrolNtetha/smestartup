const Post = require('../models/post.model');
const cloudinary = require('../utils/cloudinary.js');

const deletePost = async (req, res) => {
    const { id } = req.params;

    await Post.findOneAndRemove({ _id: id }).exec()
        .then(async (post) => {
            if (!post) {
                res.status(404).json({ success: false, message: 'Post was not found.' });
                return;
            }

            // Also delete the source image from cloudinary
            if (post.image.public_id) {
                console.log('Image url: ', post.encodedImage);
                await cloudinary.v2.uploader.destroy(post.image.public_id)
                    .then((res) => console.log('deleted the picture from cloudinary'))
                    .catch((error) => console.log(error));
            }
            res.json({ success: true, message: 'Post successfully deleted' });
        })
        .catch(() => {
            res.status(500).json({ success: false, message: 'An error occured deleting your post.' });
        });
};

module.exports = deletePost;
