const mongoose = require("mongoose");
const db = require("../../models/TodoModel");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/dreamLifer"
);

const todoSeed = 
{
    title: "Become a web developer",
    completed: false,
    date: new Date(Date.now())
}

db.Todo
  .remove({})
  .then(() => db.Book.collection.insertMany(todoSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
