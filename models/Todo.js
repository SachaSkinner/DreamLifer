const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    message: String,
    date: {
        required: true,
        type: String
    },
    completed: Boolean
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;