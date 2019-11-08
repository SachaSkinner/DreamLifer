const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

// Define API routes here

// require('./routes/todo/tododb')(app)
// app.use(routes)

require("./routes/apiRoutes")(app);
require("./routes/auth/cookiesauth")(app);



mongoose.connect("mongodb://localhost/dreamLifer", { useNewUrlParser: true });

app.route(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
