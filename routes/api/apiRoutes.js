// const db = require("../../models");
// const router = require("express").Router();


// router.post('/addUrl/:id/:url', (req, res) =>{
   
//     db.User.findOneAndUpdate({ _id: req.params.id }, { "$set": { "url": req.params.url}}).exec(function(err, updatedUser){
//       if(err) {
//           console.log(err);
//           res.status(500).send(err);
//       } else {
//         res.status(200).send(updatedUser);
//       }
//    });
//   })
//   module.exports = router;
// const db = require('../../models');

// module.exports = function(app) {

//     app.get('/allusers', (req, res) => {
//         db.User.find({}).then(users => {
//           res.json(users);
//         });
//       });
      
//       app.delete('/allusers', (req, res) => {
//         db.User.remove({}).then(removed => {
//           res.json(removed);
//         })
//       });
      
//     // Add a Todo for the specific user, decided by :id
//     app.post('/api/users/:id/todos', function(req, res) {
//         db.Todo.create(req.body).then(function(newTodo) {
//             return db.User.findOneAndUpdate(
//                 {_id: req.params.id}, 
//                 {
//                     '$push': {
//                         todo: newTodo._id
//                     }
//                 }, 
//                 {new: true});
//         }).then(function(updatedTodo) {
//             res.json(updatedTodo);
//         }).catch(function(err) {
//             res.json(err);
//         });
//     });

//     // Get a user's information, whichData takes 'todo' or 'image' and will populate
//     // the response with the User's todos or images
//     app.get('/api/users/:id/:whichData', function(req, res) {
//         db.User.findOne({_id: req.params.id}).populate(req.params.whichData).then(function(userAndTodos) {
//             res.json(userAndTodos);
//         }).catch(function(err) {
//             res.json(err);
//         });
//     });

//     // Very similar to adding Todo to specific user, decided by :id -> user's id
//     app.post('/api/users/:id/images', (req, res) => {
//         db.Image.create(req.body).then(function(newImage) {
//             return db.User.findOneAndUpdate(
//                 {_id: req.params.id},
//                 {
//                     '$push': {
//                         image: newImage._id
//                     }
//                 },
//                 {new: true});
//             }).then(function(updatedImage) {
//                 res.json(updatedImage);
//             }).catch(function(err) {
//                 res.json(err);
//             });
//         });

// };
