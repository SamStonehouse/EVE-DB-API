// server.js (Express 4.0)
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();

var db = require('./lib/mysql/mysql-driver.js');
var eveApi = require('./lib/eveapi.js')(db);

var port = 8080;

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());

eveApi.setupRoutes(app);

app.listen(port);
console.log('Listening on port ' + port);