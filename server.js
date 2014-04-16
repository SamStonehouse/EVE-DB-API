// server.js (Express 4.0)
var express        = require('express');
var morgan         = require('morgan');
var cache          = require('./lib/cache/cache-controller');
var db             = require('./lib/database/db-controller')(cache);
var eveApi         = require('./lib/eveapi.js')(db);

var app            = express();

var port = 8080;

//Setup logger
app.use(morgan('dev'));

//Connect to database & cache
db.connect();

//Setup API routes
eveApi.setupRoutes(app);

//Listen on required port
app.listen(port);


console.log('Listening on port ' + port);