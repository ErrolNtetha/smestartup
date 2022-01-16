const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const nodemailer = require('nodemailer');

const validateLogin = async (req, res) => {
    // catch the user from the front end fields
    const user_email = req.body.email;
    const user_password = req.body.password;

    // Check on the database if we have the details 
    // the user entered on login 
    await User.findOne({ email: user_email })
        .then(user => {
            if(!user) {
                res.json({ 
                    message: "Email or password incorrect.",
                    isLoggedIn: false, 
                })
                console.log('Invalid email or password. ');  
            }
 
            else {
                bcrypt.compare(user_password, user.password)
                    .then(isMatching => {
                        // if password matches, sign the user with the token 
                        const payload = {
                            id: user._id,
                            email: user.email, 
                        } 

                        if (isMatching) {
                            jwt.sign(
                                payload,
                                process.env.JWT_SECRET,
                                {expiresIn: 86400},
                                (err, token) => {
                                    if(err) console.log(err);
                                    return res.json({
                                        isLoggedIn: true,
                                        token,
                                    });
                                });
                        } 
                        else {
                            // send to client 
                            console.log('The password does not match. Enter correct password.');
                            res.json({ message: 'Password not matching', isLoggedIn: false });
                        }
                    })
                    .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err))
}

module.exports = validateLogin;