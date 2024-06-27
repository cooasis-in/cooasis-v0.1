const express = require('express');
const router = express.Router();
const User = require('../models/user');
const users = require('../controllers/user')
const passport = require('passport');

router.post('/register', users.registerUser)

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.loginUsers)

module.exports = router;
