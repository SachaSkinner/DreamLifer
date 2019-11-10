const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: String
});

const Question = mongoose.model('Questions', questionSchema);

module.exports = Question;