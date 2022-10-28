const Contact = require('../models/contact.model');
const User = require('../models/user.model');

exports.getContact = async (req, res) => {
    const userEmail = req.user.email;
    const { fullNames, email, question } = req.body;

    if (userEmail) {
        const user = await User.find({ email: userEmail });
        const newContact = new Contact({
            fullNames: `${user.firstName} ${user.lastName}`,
            email: user.email,
            question
        });
        newContact.save()
            .then(() => res.status(200).json({ success: true }))
            .catch((error) => res.status(500).json({ success: false, error: error.message }));
    } else {
        const newContact = new Contact({
            fullNames,
            email,
            question
        });
        newContact.save()
            .then(() => res.status(200).json({ success: true }))
            .catch((error) => res.status(500).json({ success: false, error: error.message }));
    }
};
