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

  module.exports = router;
