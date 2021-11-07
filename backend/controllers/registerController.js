const UserInfo = require('../models/user.model');
const bcrypt = require('bcrypt');

const register_user = async (req, res) => {
    // store the data coming from the fontend to constants
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    // Check if email has already been taken or not
    // then hash the password and save it
    const takenEmail = await UserInfo.findOne({ 
        email: email, 
    });

    console.log(takenEmail);
    
    const userData = new UserInfo({
        name: {
            firstName,
            lastName,
        },
        email,
        password,
        confirmPassword,
    });
    
    userData.save(err => {
        if(err) console.log('There was an error saving to the database: ', err)

        // Response on success
        return console.log("Success! Email and password saved.")
    });
}
module.exports = register_user;