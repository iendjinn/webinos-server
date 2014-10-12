var express = require("express"), fs = require("fs"), basicAuth = require('basic-auth-connect'), settings = require("./settings.json"), path = require("path"), marked = require("marked"), parser = require("./parser.js"), router = require("./router.js");

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: true
});

var app = express();

app.use(basicAuth(settings.username, settings.password));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
	console.log("Routing a request for the index");
	parser.parse("index.md", function(content) {
		res.render("index", content);
	});
});

app.get("/concatenate", function(req,res) {
	console.log("Routing a request for concatenation");
	parser.parse(settings.concatRoot, function(content) {
		res.render("concat", content);
	});
});
app.get("*.md", function(req, res) {
	console.log("Routing a request for an md file");
	parser.parse(req.params[0], function(content) {
		res.render("index", content);
	});
});

app.get("*", function(req,res) {
	console.log("Routing a request for " + req.params[0]);
	router.findFile(path.join(__dirname, 'public', req.params[0] + ".md"), function(found) {
	
		if (found) parser.parse(path.join(req.params[0] + ".md"), function(content) {
			res.render("index", content);
		});
		
		else router.findFile(path.join(__dirname, 'public', req.params[0], "index.md"), function(found) {		
		
			if (found) parser.parse(path.join(req.params[0] + "index.md"), function(content) {
				res.render("index", content);
			});
			
			else res.render("index", {"name":"404", marked:marked, "content":"", "error":"Not Found"});
		});
	});
});


app.listen(settings.port);