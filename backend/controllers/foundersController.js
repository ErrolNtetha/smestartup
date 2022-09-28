const Founder = require('../models/founders.model');
const User = require('../models/user.model');

exports.getFounders = async (req, res) => {
    await Founder.find()
        .then((response) => {
            if (!response.length) return res.status(200).json({ message: 'No founders available yet.' });
            return res.status(200).json({ founders: response, count: response.length });
        })
        .catch((error) => res.status(500).json({ error }));
};

exports.addFounder = async (req, res) => {
    const { city, about, description } = req.body;
    const { id } = req.user;

    const {
        name: {
            firstName,
            lastName
        },
        avatar,
        gender,
        occupation
    } = await User.findOne({ _id: id });

    const newFounder = new Founder({
        author: {
            name: {
                firstName,
                lastName
            },
            gender,
            avatar,
            occupation,
        },
        city,
        about,
        description
    });

    await newFounder.save()
        .then(() => res.status(200).json({ message: 'Posted' }))
        .catch((error) => res.status(500).json({ message: error.message }));
};
