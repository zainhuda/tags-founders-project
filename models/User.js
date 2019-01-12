const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    slackId: String,
});

mongoose.model('users', userSchema);
