const express = require('express');
const app = express();

authCheck = app.use(express.urlencoded({ extended: true }));

/**
 * write a middleware that checks if the user is authenticated if not then redirect to the login page
 * except the request comes from sign up or login page then it directs to the next middleware
 */
authCheck.use((req, res, next) => {
    if (req.url === '/signup' || req.url === '/login') {
        next();
    } else {
        res.redirect('/signup');
    }
});


module.exports = authCheck;