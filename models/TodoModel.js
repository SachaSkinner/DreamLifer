const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todotoSchema = new Schema({
   title: { type: String, required: true },
   completed: Boolean,
   date: { type: Date, default: Date.now }
});

const Todoto = mongoose.model('Todoto', todotoSchema);

module.exports = Todoto;