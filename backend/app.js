const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const localStrategy = require('passport-local');
const methodOverride = require('method-override');
const session = require('express-session');
const routeUser = require('./route/user');

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


app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/', routeUser)

app.all('/', (req, res, next) => {
    res.send("Hello");
})

app.all('*', (req, res, next) => {
    res.send("NO PAGE FOUND");
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})