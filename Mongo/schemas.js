
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

        /**
         * Ensure that the user is created with the default 
         * values of `isLoggedIn` and `isVerified` as `false
         */
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

/**
 * Enforce Email Unique Constraint
 */
userSchema.index({ email: 1 }, { unique: true });

const User = mongoose.model("User", userSchema);

module.exports = User;

