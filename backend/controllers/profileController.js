const User = require('../models/user.model');
const Post = require('../models/post.model');
const { cloudinary } = require('../utils/cloudinary');

exports.getUserProfile = async (req, res) => {
    const { email } = req.user;

    await User.findOne({ email })
        .then((result) => {
            res.json(result);
        })
        .catch((error) => res.status(500).json({ error: error.message }));
};

exports.updateProfile = async (req, res) => {
    const { id } = req.params;
    const {
        firstName,
        lastName,
        avatar,
        occupation,
        bio
    } = req.body;

    let avatarId;
    await cloudinary.uploader.upload(avatar, {
        upload_preset: 'user_avatar'
    })
        .then((response) => avatarId = response.url)
        .catch((error) => res.status(500).json(error.messsage));

    await User.findByIdAndUpdate({ _id: id }, {
        name: {
                firstName,
                lastName,
            },
        avatar: avatarId,
        occupation,
        bio
    })
    .then(async () => {
        const updatedProfile = await User.findOne({ _id: id });
        res.status(201).json({ user: updatedProfile });
    })
    .catch((err) => res.status(500).json({ err }));
};

exports.getProfile = async (req, res) => {
    const user = await User.findById(req.params.id, 'name avatar bio isPremium isVerified createdAt occupation _id');
    await Post.find({ author: user._id })
        .populate('author')
        .then((posts) => res.status(200).json({ posts, user }))
        .catch((error) => res.status(500).json({ error }));
};
