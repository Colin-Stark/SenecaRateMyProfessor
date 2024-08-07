
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a User model that will be used to store user data in the model.js.
const userSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        profileImage: String,
        isLoggedIn: {
            type: Boolean,
            default: false,
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
    }
);
userSchema.index({ email: 1 }, { unique: true });
const User = mongoose.model("User", userSchema);
module.exports = User;

