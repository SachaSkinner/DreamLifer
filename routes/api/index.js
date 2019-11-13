const db = require("../../models");
const router = require("express").Router();

    router.get('/allusers', (req, res) => {
        db.User.find({}).then(users => {
          res.json(users);
        });
      });
      
      router.delete('/allusers', (req, res) => {
        db.User.remove({}).then(removed => {
          res.json(removed);
        })
      });

      router.delete('/user/:id', (req, res) => {
        db.User.remove({_id: req.params.id}).then(removed => {
          res.json(removed);
        })
      });
      
    // Add a Todo for the specific user, decided by :id
    router.post('/users/todos', function(req, res) {
        db.Todo.create({
            message: req.body.message,
            date: req.body.date,
            completed: false
        }).then(function(newTodo) {
            return db.User.findOneAndUpdate(
                {_id: req.body.id}, 
                {
                    '$push': {
                        todo: newTodo._id
                    }
                }, 
                {new: true});
        }).then(function(updatedTodo) {
            res.json('Successfully added your progress');
        }).catch(function(err) {
            console.log(err);
            res.json('There was an error trying to update your progress');
        });
    });


    // Update user's todo text in the DB
    router.put('/users/todos/:id', (req, res) => {
        db.Todo.findOneAndUpdate({_id: req.params.id},
        {message: req.body.message}).then(newTodo => {
            res.json(newTodo);
        }).catch(err => {
            res.json('No data to fetch on this date ... ');
            console.log(err);
        });
    });

    // Update the todos completed status
    router.put('/users/todos/:id/complete', (req, res) => {
        db.Todo.findOneAndUpdate({_id: req.params.id},
        {completed: req.body.completed}).then(newTodo => {
            res.json(newTodo);
            console.log('new todo');
        }).catch(err => {
            res.json('No data to fetch on this date ... ');
            console.log(err);
        });
    });

    // Delete a todo, currently does not delete the todo referenced by User
    router.delete('/users/todos/:id/del', (req, res) => {
        db.Todo.findById({_id: req.params.id}).then(deletedTodo => {
            res.json('Successfully deleted');
        }).catch(err => {
            res.json('There was an error deleting this item ... ');
            console.log(err);
        });
    });

    // Get a user's information, whichData takes 'todo' or 'image' and will populate
    // the response with the User's todos or images
    router.get('/users/items/:item/:id/:date', function(req, res) {
        db.User.findOne({_id: req.params.id}).populate({
            path: req.params.item,
            match: { date: req.params.date } 
        }).then(function(userAndTodos) {
            res.json(userAndTodos);
        }).catch(function(err) {
            res.json('No data to fetch on this date ... ');
            console.log(err);
        });
    });

    // Route to compare time left until goal
    router.get('/users/todo/:id/timeleft', (req, res) => {
        db.User.findOne({_id: req.params.id}).populate('todo')
            .then(function(userAndTodos) {
                res.json(userAndTodos);
            }).catch(function(err) {
                res.json('No data to fetch on this date ... ');
                console.log(err);
            });
        });

    // Very similar to adding Todo to specific user, decided by :id -> user's id
    router.post('/users/:id/images', (req, res) => {
        db.Image.create(req.body).then(function(newImage) {
            return db.User.findOneAndUpdate(
                {_id: req.params.id},
                {
                    '$push': {
                        image: newImage._id
                    }
                },
                {new: true});
            }).then(function(updatedImage) {
                res.json(updatedImage);
            }).catch(function(err) {
                res.json(err);
            });
        });

module.exports = router;
