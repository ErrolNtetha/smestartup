const User = require('../models/user.model');

const validateLogin = (req, res) => {
    const user_email = req.body.email;
    const user_password = req.body.password;

    // Check on the database if we have the details 
    // the user entered on login
    User.findOne({ email: user_email }, function(err, data) {

        if(!err) {
            if(data.email === user_email) {
                console.log('Email already exist. Please login instead.');
            }
            else console.log('Email or password incorrect.');
        }
        else console.log(err);
    })
}

module.exports = validateLogin;