const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dreamLifer"
);

const questionSeed = [
  {
    question: "Did you have any new ideas? Describe them!"
    
  },
  {
    question: "How happy and satisfied did you feel today? Why?"
  },
  {
    question: "Did you do something you can be proud of?"
  },
  {
    question: "What did you do today for your friends?"
  },
  {
    question: "What did you do today for your family?"
  },
  {
    question: "What inspired you today? Why?"
  },
  {
    question: "How much time did you spend watching computer or phone screen? Do you think it was possible to reduce this amount of time?"
  },
  {
    question: "How did you body feel today? Any new or surprising feelings?"
  },
  {
    question: "If you think you can do this day better, what would you change?"
  },
  {
    question: "What did you like in this day the most?"
  },
  {
    question: "What did you eat today?"
  },
  {
    question: "How much did you exercise today?"
  },
  {
    question: "What did you do today to keep your home clean and organized?"
  },
  {
    question: "What would you add to your day?"
  },
  {
    question: "Did you see any interesting people today? Why did you remember them?"
  },
  {
    question: "Did you meet anyone new today?"
  },
  {
    question: "Who did you talk to today?"
  },
  {
    question: "How was the weather outside?"
  },
  {
    question: "What new did you learn or do today?"
  },
  {
    question: "What did you do today for fun?"
  },
  {
    question: "What did you do today to make yourself happy?"
  },
  {
    question: "What did you do today for other people?"
  }
];

db.Question
  .remove({})
  .then(() => db.Question.collection.insertMany(questionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });