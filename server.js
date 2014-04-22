// server.js (Express 4.0)
var express        = require('express');
var morgan         = require('morgan');
var cache          = require('./lib/cache/cache-controller');
var db             = require('./lib/database/db-controller')(cache);
var api            = require('./lib/api/api-controller');

var app            = express();

var port = 8080;

//Setup logger
app.use(morgan('dev'));

//Connect to database & cache
db.connect();
cache.connect();

//Setup API routes
api(db, app);

//Listen on required port
app.listen(port);


console.log('Listening on port ' + port);