const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    port: 465,
    service: 'gmail', // or your email provider
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    secure: true,
});

app.post('/', (req, res) => {
    const { email, message } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.TARGET_EMAIL,
        subject: `${email} - Portifolio Contact Form`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent');
        }
    });
});

app.listen(port, () => {
    
    console.log(`Server running at http://localhost:${port}`);
});
