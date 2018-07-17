var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  fileUpload = require("express-fileupload"),
  Book = require("./api/models/bookModel"), //created model loading here
  bodyParser = require("body-parser");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/librarydb");

app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/bookRoutes"); //importing route
routes(app); //register the route

app.listen(port);

console.log("Library RESTful API server started on: " + port);
