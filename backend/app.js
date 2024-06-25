const express = require('express');
const app = express();

const mongoose = require('mongoose');

const passport = require('passport');
const localStrategy = require('passport-local');
const session = require('express-session');
const methodOverride = require('method-override');


mongoose.connect('mongodb+srv://shreyasaid48:shreyas@cluster0.7be5thb.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,

    useUnifiedTopology: true

}).then(() => {
    console.log("Connection open");
}).catch(err => {
    console.log("OH NO ERROR");
    console.log(err);
})

app.use(express.urlencoded({ extended: true }))

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
app.use(methodOverride('_method'));

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

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/register', async (req, res) => {
    res.render('user/register');
})

app.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password)
        res.redirect('/Questions');
    } catch (e) {
        res.send(e);
        res.redirect('/register');
    }
})

app.get('/login', (req, res) => {
    res.render('user/login');
})

app.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), async (req, res) => {
    res.redirect('/Questions');
})

app.get('/logout', (req, res) => {
    res.logout();
    res.redirect('/Questions')
})


app.all('*', (req, res, next) => {
    res.send("NO PAGE FOUND");

})

app.listen(3000, () => {
    console.log("listening on port 3000");
})