// server.js (Express 4.0)
var express        = require('express');
var morgan         = require('morgan');
var db             = require('./lib/mysql/mysql-driver.js');
var eveApi         = require('./lib/eveapi.js')(db);

var app            = express();

var port = 8080;

app.use(morgan('dev'));

eveApi.setupRoutes(app);

app.listen(port);
console.log('Listening on port ' + port);