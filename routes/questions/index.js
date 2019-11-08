
const db = require("../../models");
const router = require("express").Router();
// module.exports = function(app) {

//   app.get('/questions', (req, res) => {
//     db.Question.find({}).then(questions => {
//       res.json(questions);
//     });
//   });
// }




// Matches with "/api/books"
router.route("/questions")
  .get((req, res) => {
    db.Question
        .find({})
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  });

module.exports = router;
