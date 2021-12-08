const User = require('../models/user.model');

const validateLogin = async (req, res) => {
    const user_email = req.body.email;
    const user_password = req.body.password;

    // Check on the database if we have the details 
    // the user entered on login
    await User.findOne({ email: user_email })
        .then(user => {
            if(!user) {
                console.log('Invalid email or password. ');
                console.log(user);
            }
            else {
                console.log('User granted entry.');
                console.log(user.password);
            }
        })
}

module.exports = validateLogin;