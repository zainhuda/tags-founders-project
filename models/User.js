const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    slackId: String,
    accessToken: String,
    teamId: String,
});

mongoose.model('users', userSchema);
