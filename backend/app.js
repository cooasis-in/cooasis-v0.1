const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const localStrategy = require('passport-local');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const methodOverride = require('method-override');
const session = require('express-session');
const routeUser = require('./route/user');
const { sendVerificationEmail } = require('./utils/nodemailer');
const crypto = require('crypto');

const User = require('./models/user');

mongoose.connect('mongodb+srv://shreyasaid48:shreyas@cluster0.skhiaqg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection open");
}).catch(err => {
    console.log("OH NO ERROR");
    console.log(err);
})

const sessionConfig = {
    secret: 'thissholudbesecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 100 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig))


app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
app.use(methodOverride('_method'));

passport.use(new GoogleStrategy({
    clientID: '',
    clientSecret: '',
    callbackURL: 'http://localhost:3000/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ email: profile.emails[0].value });
        console.log('User found:', user);

        if (!user || user === null || user === undefined) {
            const otp = Math.floor(1000 + Math.random() * 9000).toString();;
            const otpExpires = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes

            user = new User({
                email: profile.emails[0].value, // Assuming profile has an email array
                otp,
                otpExpires
            });
            await user.save();

            // Send verification email
            await sendVerificationEmail(user.email, otp);
        } else if (!user.isVerified) {
            // Regenerate OTP if the user is not verified
            const otp = crypto.randomBytes(3).toString('hex');
            user.otp = otp;
            user.otpExpires = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes
            await user.save();

            // Send verification email
            await sendVerificationEmail(user.email, otp);
        }

        done(null, user);
    } catch (err) {
        if (err.code === 11000) { // Duplicate key error
            console.log("USER ALEADY exits");
            // return done(null, false, { message: 'User already exists' });
            return done(null, false, { message: 'User already exists' });
        } else {
            done(err, null);
        }
    }
}));


app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

// app.use((req, res, next) => {
//     console.log('Session data:', req.session);
//     next();
// });


app.use('/', routeUser)

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { successRedirect: '/verify-email', failureRedirect: '/error', }),
    (req, res) => {
        // if (!req.user.isVerified) {
        //     res.redirect('/verify-email');
        // } else {
        //     res.redirect('/');
        // }
        console.log("************");
        console.log(req.user);

    }
);

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

app.get('/verify-email', (req, res) => {
    res.send('<form action="/verify-email" method="post">Enter OTP: <input type="text" name="otp"><button type="submit">Verify</button></form>');
});

app.post('/verify-email', async (req, res) => {
    const { otp } = req.body;
    // console.log("************");
    // console.log(req.body);
    // console.log("************");
    // console.log(req.session.passport.user);
    // console.log("************");
    // console.log(req.user.id)
    // console.log("************");
    const user = await User.findById(req.user.id);

    if (user && user.otp === otp && user.otpExpires > Date.now()) {
        user.isVerified = true;
        user.otp = undefined;
        user.otpExpires = undefined;
        await user.save();
        console.log(user);
        console.log("OTP verified")
        res.redirect('/');
    } else {
        console.log("wrong OTP")
        res.redirect('/verify-email');
    }
});
app.get('/', (req, res, next) => {
    res.send("Hello");
})

app.get('/error', (req, res, next) => {
    res.send("something went wrong");
})

app.all('*', (req, res, next) => {
    res.send("NO PAGE FOUND");
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})