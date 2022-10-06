const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
const handlebars = require('handlebars');
// const hbs = require('nodemailer-express-handlebars');
const SubscribersSchema = require('../models/newsletter.model');
const filepath = path.join(__dirname, '../views/layouts/test.html');
const logoPath = path.join(__dirname, '../views/assets/logo.png');
const source = fs.readFileSync(filepath, 'utf-8').toString();

const template = handlebars.compile(source);
const replacements = {
    firstName: 'Mphumeleli Errol',
    lastName: 'Ntetha',
    email: 'mphumier@outlook.com',
    logo: logoPath
};

const htmlToSend = template(replacements);
require('dotenv').config();

exports.getSubscriber = async (req, res) => {
    const { fullNames, lastName, email } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'premium111.web-hosting.com',
        auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            }
        });

        const mailOptions = {
            from: 'no-reply@blendot.com',
            to: email,
            subject: 'Thank you for subscribing. Here\'s to you!',
            html: htmlToSend,
        };

                // send an email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                // res.json({ message: 'There was an error subscribing.' });
                console.log('There was an error ', error.message);
                return;
            }
            console.log(info.response);
            res.json({ success: true, message: info.response });
    });

    const newSubscriber = new SubscribersSchema({
        fullNames,
        lastName,
        email
    });

    await newSubscriber.save()
    .then(() => {
        res.status(250).json({ success: true, message: 'You have sucessfully subscribed to receive newsletters!' });
    })
    .catch((error) => {
        res.staus(500).json({ success: false, error });
        console.log(error);
    });
};
