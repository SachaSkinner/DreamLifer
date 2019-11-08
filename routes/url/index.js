

const db = require("../../models");
const router = require("express").Router();


router.post('/addUrl/:id/:url', (req, res) =>{
   
    db.User.findOneAndUpdate({ _id: req.params.id }, { "$set": { "url": req.params.url}}).exec(function(err, updatedUser){
      if(err) {
          console.log(err);
          res.status(500).send(err);
      } else {
               res.status(200).send(updatedUser);
      }
   });
  })
  module.exports = router;


        