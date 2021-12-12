const UserInfo = require('../models/user.model');
const bcrypt = require('bcrypt');

const register_user = async (req, res) => { 
   try {
    // store the data coming from the fontend to constants
    const { firstName, lastName, email, password } = req.body;

    // Check if email has already been taken or not
    // then hash the password and save it 

    const hashedPassword = await bcrypt.hash(password, 10);

    await UserInfo.findOne({ email })
        .then(e => {
            if(e) console.log('The email already exist.'); 

            // if no email exist, add user 
            else {
                // hash the password before saving
                const userData = new UserInfo({
                    name: {
                        firstName,
                        lastName,
                    },
                    email: email.toLowerCase(),
                    password: hashedPassword,
                });
                
                // save to the database
                userData.save()
                .then(user => console.log('User saved: ', user))
                .catch(e => console.log(e))
            }
        })

   } catch (e) {
       console.log(e.message);
   }
}

module.exports = register_user;