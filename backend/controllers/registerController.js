const UserInfo = require('../models/user.model');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const register_user = async (req, res) => {
   try {
    // store the data coming from the fontend to constants
    const { firstName, lastName, email, password, occupation, gender, avatarURL } = req.body;
	console.log(password);
    // Check if email has already been taken or not
    // then hash the password and save it

    const hashedPassword = await bcrypt.hash(password, 10);

    await UserInfo.findOne({ email })
        .then(e => {
            if(e) {
            	res.json({ message: "Email already exist."});
            	console.log('The email already exist.', e.createdAt);
            } 
  
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
                    occupation,
                    gender,
                    avatar: avatarURL
                });

                // Send am email to the user
                // create a transporter for sending mails
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.USERNAME,
                        pass: process.env.PASSWORD
                    }
                });

                transporter.use('compile', hbs({
                    viewEngine: {
                        partialsDir: "../views/partials",
                        layoutsDir: "../views/layouts",
                    },
                    viewPath: 'views'
                }));

                const mailOptions = {
                    from: 'test-email@gmail.com',
                    to: email,
                    subject: 'Welcome to Blendot.',
                    text: `Welcome, ${firstName} ${lastName}! Your username is ${email}.`,
                    replyTo: email,
                    template: 'index'
                }

                // send an email
                transporter.sendMail(mailOptions, (err, info) => {
                    if (err) console.log('There was error ', err);
                    return console.log('Email sent, ', info);
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
