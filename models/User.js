const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
    },
    phone: String,
    password: {
        type: String,
        required: true
    },
    url: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;