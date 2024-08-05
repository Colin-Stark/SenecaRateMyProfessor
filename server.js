const express = require('express');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();

const { authCheck } = require('./middleware/auth_check.js');
const { User } = require('./Mongo/schemas.js');

app.use(authCheck);


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.post('/signup', (req, res) => {

    const password = req.body.password;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = new User({
        firstName: "",
        lastName: "",
        email: req.body.email,
        password: hashedPassword,
        profileImage: "",
        isLoggedIn: false,
        isVerified: false,
    });

    newUser.save()
        .then((result) => {
            console.log("User Created successfully");
            console.log(result);
            res.send(result);
        })
        .catch((err) => {
            console.log(`Error creating user: ${err}`);
            res.send(err);
        });

});

app.get('/signup', (req, res) => {
    res.send('Sign Up page');
});

const start = async () => {

    try {
        await mongoose.connect(process.env.MONGOOSE_URL);
    }
    catch (err) {
        console.log(err);
    }
}

start();

module.exports = app;
