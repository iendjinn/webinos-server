var  fs = require("fs"), marked = require("marked"), path = require("path"), settings = require("./settings.json");

function findFile(filename, callback) {
	console.log("Trying to find " + filename);
	fs.stat(filename, function(err, stats) {
		if (err) callback(false);
		else callback(true);
	});
}

module.exports.findFile = findFile;