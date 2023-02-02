const sgMail = require('@sendgrid/mail');
const SubscribersSchema = require('../models/newsletter.model');

require('dotenv').config();

exports.getSubscriber = async (req, res) => {
    const { fullNames, lastName, email } = req.body;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: email, // Change to your recipient
      from: 'no-reply@blendot.com', // Change to your verified sender
      templateId: process.env.WELCOME_ID
    };

    sgMail
      .send(msg)
      .then(async () => {
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
        });
      })
      .catch((error) => res.status(500).json({ success: false, error: error.message }));
};
