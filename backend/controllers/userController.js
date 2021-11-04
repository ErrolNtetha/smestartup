const UserInfo = require('../models/user.model');

const register_user = (req, res) => {
    // store the data coming from the fontend to constants
    const email = req.body.email;
    const password = req.body.password;

    console.log(email);
    console.log(password);
    
    const userData = new UserInfo({
        email,
        password,
    });
    
    userData.save(err => {
        if(err) console.log('There was an error saving to the database: ', err)

        // Response on success
        return console.log("Success! Email and password saved.")
    });
}

const login_user = (req, res) => {
    res.send('Hello world, this is my express');
}

module.exports = register_user;