// ===========================================================
// Dependencies 
// Series of required NPM packages for this application
// ===========================================================

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// ===========================================================
// Express Config
// ===========================================================

var app = express();

// Setting initial port
var PORT = process.env.PORT || 3000;

// Setting up express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './app/public')));


// =====================================================================
// Router
// These point the server to the routes apiRoutes.js and htmlRoutes.js
// =====================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);





// Listener - Start the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});