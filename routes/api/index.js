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
    // to post reviews
    router.post('/users/reviews', function(req, res) {
        db.DayReviews.create({
            family: req.body.family,
            friends: req.body.friends,
            work: req.body.work,
            study: req.body.study,
            fun: req.body.fun,
            food: req.body.food,
            sleep: req.body.sleep,
            mood: req.body.mood,
            sport: req.body.sport,
            ideas: req.body.ideas,
            notes: req.body.notes,
            thanks: req.body.thanks
        }).then(function(newReviews) {
            return db.User.findOneAndUpdate(
                {_id: req.body.id}, 
                {
                    '$push': {
                       newreviews : newReviews._id
                    }
                }, 
                {new: true});
        }).then(function(updatedReviews) {
            res.json('Successfully added your reviews!');
        }).catch(function(err) {
            console.log(err);
            res.json('There was an error trying to update your reviews');
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
// reviews
router.get('/users/reviews/:item/:id/:date', function(req, res) {
    db.User.findOne({_id: req.params.id}).populate({
        path: req.params.item,
        match: { date: req.params.date } 
    }).then(function(userAndReviews) {
        res.json(userAndReviews);
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
        // for reviews
        router.get('/users/reviews/:id', (req, res) => {
            db.User.findOne({_id: req.params.id}).populate('newreviews')
                .then(function(userAndReviews) {
                    res.json(userAndReviews);
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
