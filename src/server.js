// server.js (Express 4.0)
var express        = require('express');
var morgan         = require('morgan');
var cache          = require('./lib/cache/cache-controller');
var db             = require('./lib/database/db-controller')(cache);
var api            = require('./lib/api/api-controller');
var program        = require('commander');

var app            = express();

program
  .version('0.2.2')
  .option('-p, --port <n>', 'Listen port [8080]')
  .parse(process.argv);

//Setup logger
app.use(morgan('dev'));

//Connect to database & cache
db.connect();
cache.connect();

//Setup API routes
api(db, app);

//Listen on required port
app.listen(program.port);

console.log('Listening on port ' + program.port);