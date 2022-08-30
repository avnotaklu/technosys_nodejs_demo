const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("dotenv").config();
const defaultProfileImage = process.env.DEFAULT_PROFILE_IMAGE;
const userSchema = new Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true, minlength: 8 },
    phoneNumber: { type: String, required: true },
    profilePicUrl: { type: String }
}, { timestamps: true })

exports.User = mongoose.model("User", userSchema);