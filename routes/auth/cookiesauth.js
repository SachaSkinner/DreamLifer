// requiring cookieParser and session and db are all necessary for this
var cookieParser = require('cookie-parser');
var session = require('express-session');
var db = require("../../models");
var bcrypt = require("bcryptjs");

module.exports = function(app) {

// boilerplate set up for using cookie parser with express-session
// sets up session middleware, the key in the browser if 'user_seshID', and will expire after 600000 milliseconds
app.use(cookieParser());
app.use(session({
    key: 'user_seshID',
    secret: 'test',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser
app.use((req, res, next) => {
    if (req.cookies.user_seshID && !req.session.user) {
        res.clearCookie('user_seshID');
    }
    next();
});

// middleware function to check for logged-in users, if there is user logged in, redirect to '/'
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_seshID) {
        res.redirect('/');
    } else {
        next();
    }
};

// route for user signup
app.route('/auth/cookies/signup').get(sessionChecker, (req, res) => {

    res.render('signup');
    
}).post((req, res) => {
  // Here we check the database to see if there is a data entry with the same username that is put in through the signup route
    db.User.findOne({email: req.body.email}).then(function(checkForUser) {
      // if !checkForUser = (if no user is found) we continue to create a user 
      if (!checkForUser) {
        // This is pretty much boilerplate bcrypt password encryption.
        // genSalt(10 => a 10 character 'salt' is created. 'Salt' is a string attached to the user's password to make it more secure
        bcrypt.genSalt(10, function(err, salt) {
          // hash(req.body.password, salt => 'hash' scrambles the req.body.password and the salt combined to make it a lot more secure
          bcrypt.hash(req.body.password, salt, function(err, hash) {
            // after salting and hashing the password, we create a new user in the database with the information below
            db.User.create({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              phone: req.body.phone,
              password: hash
            }).then(function(newUser) {
              // IMPORTANT!! After the newuser is created, we set the session user to be this new user
              req.session.user = newUser;
              res.json(`${newUser.firstName} successfully signed up!`);
              console.log(newUser);
            });
          });
        });
      } else {
        // this refers to line 47 above, if the current user tries to make a username that is already saved in the DB
        res.json('User already exists with this email')
      }
    });
});

// this route is handling user attempts to log in
app.route('/auth/cookies/login').get(sessionChecker, (req, res) => {
    res.render('login');
}).post((req, res) => {
      // We search the DB for a user with this inputted username
        db.User.findOne({email: req.body.email}).then(function(user) {
          console.log(user);
            if (user === null) {
                res.json('No user with this email');
            } else {
              // When we find the user, we use bcrypt.compare to check the req.body.password to the user.password saved in the DB
                bcrypt.compare(req.body.password, user.password, function(err, result) {
                    if (result == true) {
                      // if the password is correct, we set the session user to this user.dataValues, and redirect to '/' page
                      req.session.user = user;
                      res.json(`Welcome back, ${user.firstName}!`);
                    } else if (user.password !== req.body.password) {
                      res.json('Incorrect password');
                    }
                });
            }
        });
});

app.get('/allusers', (req, res) => {
  db.User.find({}).then(users => {
    res.json(users);
  });
});

app.delete('/allusers', (req, res) => {
  db.User.remove({}).then(removed => {
    res.json(removed);
  })
});

// This route handles a user logout
app.post('/auth/cookies/logout', (req, res) => {
    // we check to make sure that there IS a session user in express-session && that the cookies.user_seshID exists in the browser
    if (req.session.user && req.cookies.user_seshID) {
      // then we clear the cookie and redirect to '/'   
        res.clearCookie('user_seshID');
        res.json('Logged out');
    } else {
        res.json('Noone to log out!');
    }
});


// The rest of the code below is pretty much specific to the app that I worked on for project 2, so we don't have to worry much about it.
// This is how we saved songs specific to the user in the DB.
// app.post("/api/users/songs", function(req, res) {
//   // Create a new song in the DB based on the model we defined, and then attached a UserID property with the req.session.user.id from session
//     db.Song.create({
//       title: req.body.title,
//       artist: req.body.artist,
//       spotifyURI: req.body.spotifyURI,
//       emotion: req.body.emotion,
//       UserId: req.session.user.id
//       }).then(function(newSong) {
//       res.json(newSong)
//     });
//   });

// We used this route to get express-session data on the User into the front-end.
  app.get("/auth/cookies/checksession", function(req, res) {
    // if the session user exists, we sent their firstname to the front end in a JSON so that we could display their name on the homepage
    if (req.session.user && req.cookies.user_seshID) {
        res.json({
            bool: true,
            firstName: req.session.user.firstName,
            id: req.session.user.id
            });
    } else {
        res.json({bool: false});  
    }
  });

app.use(function (req, res, next) {
    res.status(404).send('PAGE CANNOT BE FOUND');
});

};