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
    url: String,
    todo: [{
        type: Schema.Types.ObjectId,
        ref: 'Todo'
    }],
   newreviews: [{
    type: Schema.Types.ObjectId,
    // it matches a model
    ref: 'DayReviews'

   }]

});

const User = mongoose.model('User', userSchema);

module.exports = User;