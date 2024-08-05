
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a User model that will be used to store user data in the model.js.
const userSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        password: String,
        profileImage: String,
        isLoggedIn: Boolean,
        isVerified: Boolean,
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

