const User = require('../models/user');
const passport = require('passport');

module.exports.registerUser = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password)
        console.log(registeredUser);
        res.send("yess");
    } catch (e) {
        res.send(e);
    }
}

module.exports.loginUsers = async (req, res) => {
    res.send("yes logged in");
}

