// =======================
// get the packages we need
// =======================
var express = require('express'),
	fs = require('fs'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	nconf = require('./middleware/config'),
	xdom = require('./middleware/crossdomain');

// =======================
// configuration
// =======================
var app = express();

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(xdom);
app.disable('x-powered-by');
app.enable('trust proxy');

// Database connection
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function(err) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
});

mongoose.connect('mongodb://' + nconf.get('mongodb:host') + '/' + nconf.get('mongodb:db'));

// =======================
// routes
// =======================
var routesPrefix = __dirname + '/routes/';
var files = fs.readdirSync(routesPrefix);

for (var key in files) {
	var fileName = routesPrefix + files[key];
	if (fs.statSync(fileName).isFile()) {
		var route = require(fileName);
		app.use('/api/'+  nconf.get('version') + route.baseUrl, route.routes());
	}
}

app.get('*', function(req, res){
	res.send({
	    app: nconf.get('name'),
		version: nconf.get('version')
	});
});

// =======================
// start the server 
// =======================
var server = app.listen(nconf.get('port'), function() {
  console.log('server up on %d', nconf.get('port'));
});

module.exports = app;