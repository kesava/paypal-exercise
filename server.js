var express = require('express');
var logfmt = require("logfmt");
var ejs = require('ejs');

var app = express();

app.use(logfmt.requestLogger());
app.engine('html', require('ejs').renderFile);

var port = Number(process.env.PORT || 5000);

app.configure(function () {
    app.use(
        "/assets", //the URL throught which you want to access to you static content
        express.static('assets') //where your static content is located in your filesystem
    );
});

app.get('/', function(req, res) {
  res.render('index.html');
});

app.listen(port, function() {
  console.log("Listening on " + port);
});