const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DayReviews = new Schema({
    family: String,
    friends: String,
    work: String,
    study: String,
    fun: String,
    food: String,
    sleep: String,
    mood: String,
    sport: String,
    ideas: String,
    notes: String,
    thanks: String
});

const DayReviews = mongoose.model('DayReviews', DayReviews);

module.exports = DayReviews;