const UserInfo = require('../models/user.model');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');


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

                // Send am email to the user
                // create a transporter for sending mails
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'mphumier@gmail.com',
                        pass: 'hjjukvbttezjjbyp',
                    }
                }); 
            
                const data = {
                    from: "test-email@gmail.com",
                    to: email,
                    subject: 'A Warm Welcome On-board.',
                    text: `Welcome, ${firstName} ${lastName}! Your username is ${email}.`,
                    replyTo: email,
                } 

                // send an email
                transporter.sendMail(data, (err, info) => {
                    if(err) console.log('There was error ', err);
                    return console.log('Email sent, ', info);
                })
                
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