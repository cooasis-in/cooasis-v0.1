const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'shreyasaid48@gmail.com',
        pass: ''
    }
});

const sendVerificationEmail = (email, otp) => {
    const mailOptions = {
        from: 'shreyasaid48@gmail.com',
        to: email,
        subject: 'Verify your email',
        text: `Your verification code is ${otp}`
    };

    return transporter.sendMail(mailOptions);
};

module.exports = { sendVerificationEmail };