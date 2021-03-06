// =================================================
// Load Data
// =================================================

var friends = require("../data/friends.js");
const server = require('../../server.js');


// =================================================
// Routing
// =================================================

module.exports = function(app){

app.get("/bestFriend", function (req,res) {
    let coolFriend = server.lookForFriends();
    res.json(coolFriend);

});

app.get("/api/:friends?", function(req, res) {
  res.json(friends.array);
});

let user;
app.post("/api/friends", function (req, res) {
    module.exports.user = req.body;
    friends.array.push(req.body);
    console.log(`${req.body.name} successfully added!`)
    res.json({});
});
}