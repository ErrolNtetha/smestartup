const UserInfo = require('../models/user.model');

const register_user = (req, res) => {
    // store the data coming from the fontend to constants
    const firstName = req.params.firstName;
    const lastName = req.params.lastName;
    
    const userData = new UserInfo({
        name: {
            firstName,
            lastName,
        }
    }) 
    
    userData.save(err => {
        err && console.log('There was an error saving to the database: ', err)

        // Response on success
    })
}

module.exports = register_user;