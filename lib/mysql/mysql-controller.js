/*jslint node: true, vars: true, white: true */
"use strict";

var mysql      = require('mysql');
var mysqlSettings = require('./mysql-settings');

//TODO: Export values to external config
var connection = mysql.createConnection({
  host     : mysqlSettings.host,
  user     : mysqlSettings.username, //Amazing username & pw
  password : mysqlSettings.password,
  database : mysqlSettings.database
});

connection.connect(function(err) {
	if (err) {
		console.log("MySQL Connection Error: " . err);
		process.exit(1);
	} else {
		console.log("Connected to MySQL database");
	}
});

var agt = require('./agt-queries.js')(connection);
var cert = require('./cert-queries.js')(connection);
var chr = require('./chr-queries.js')(connection);
var crp = require('./crp-queries.js')(connection);
var dgm = require('./dgm-queries.js')(connection);
var inv = require('./inv-queries.js')(connection);
var map = require('./map-queries.js')(connection);

module.exports = {
	agt: agt,
	cert: cert,
	chr: chr,
	crp: crp,
	dgm: dgm,
	inv: inv,
	map: map
};
