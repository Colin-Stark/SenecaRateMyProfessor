const express = require('express');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const app = express();
/**
 * import the authCheck middleware
 */
const authCheck = require('./middleware/auth_check.js');
const port = process.env.PORT_CONNECTION;

app.use(authCheck);

let db = [];

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).send('Username, email, and password are required');
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    db.push({ username, email, hashedPassword });
    console.log(db);
    res.send('User signed up');
});

app.get('/signup', (req, res) => {
    res.send('Sign Up page');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
