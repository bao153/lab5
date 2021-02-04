var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
    var name = request.query.name;
    console.log(name);
    var description = request.query.description;
    var imageURL = "http://lorempixel.com/500/500/people";
    var newFriend = { 
        "name": name,
        "description": description,
        "imageURL": imageURL
    }
    data.friends.push(newFriend);
    response.render('index', data);
 }