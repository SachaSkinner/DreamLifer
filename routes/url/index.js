const db = require("../../models");
const router = require("express").Router();


router.post('/addUrl/', (req, res) => {
  console.log(req.body);
   
    db.User.findOneAndUpdate({ _id: req.body.id }, { "$set": { "url": req.body.urlData}}).exec(function(err, updatedUser){
      if(err) {
          console.log(err);
          res.status(500).send(err);
      } else {
        res.status(200).send(updatedUser);
      }
   });
});

router.get('/takeUrl/:id', (req, res) => {
  db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  console.log(req.body)
})

  module.exports = router;
