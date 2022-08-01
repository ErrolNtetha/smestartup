const Users = require('../models/user.model');

exports.getUsers = async (req, res) => {
    await Users.find({})
        .then((users) => {
            if (!users) {
                res.json({ message: 'No users currently exist.' });
            }
            res.json({ users });
        });
};

exports.deleteUser = async (req, res) => {
    const { id } = req.body;
    console.log(id);

    await Users.deleteOne({ _id: id })
        .then(() => res.status(200).json({ success: true, message: 'Account successfully deleted.' }))
        .catch((error) => res.status(500).json({ success: false, error }));
};
