var  fs = require("fs"), marked = require("marked"), path = require("path"), settings = require("./settings.json");

function parse(filename, callback) {
	fs.readFile(path.join(__dirname, settings.fileLocation, filename), "utf8", function(err,data) {
		if (err) {
			if(err.code == "ENOENT") callback({"name":"404", marked:marked, "content":"", "error":"Not Found"});
			else {
				console.log(err);
				callback({"name":"503", marked:marked, "content":"", "error":"Internal Server Error"});
			}
		}
		else {
			if (err) {
				console.log(err);
				callback({"name":"503", marked:marked, "content":"", "error":"Internal Server Error"});
			}
			else callback({"name":"webinos Wiki", marked:marked, "content":"", "content":data});
		}
	});
}

module.exports.parse = parse;