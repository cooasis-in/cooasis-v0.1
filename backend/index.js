const { sendVerificationEmail } = require('./utils/nodemailer');

const testEmail = async () => {
    try {
        const email = 'shreyasasutkar1@gmail.com'; // Replace with your test email
        const otp = '123456'; // Example OTP
        await sendVerificationEmail(email, otp);
        console.log('Verification email sent successfully');
    } catch (error) {
        console.error('Error sending verification email:', error);
    }
};

testEmail();
