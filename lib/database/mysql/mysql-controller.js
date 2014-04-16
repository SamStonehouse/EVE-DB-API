/* jslint node: true, vars: true, white: true */
"use strict";

//Module requirements
var mysql         = require('mysql');
var mysqlSettings = require('./mysql-settings');

//Module imports
var cache;



var connection = mysql.createConnection({
  host     : mysqlSettings.host,
  user     : mysqlSettings.username, //Amazing username & pw
  password : mysqlSettings.password,
  database : mysqlSettings.database
});

var connect = function(fn) {
	connection.connect(function(err) {
		if (err) {
			console.log("MySQL Connection Error: " . err);
			process.exit(1);
		} else {
			console.log("Connected to MySQL database");
		}

		if (typeof(fn) === "function") {
			fn(err);
		}
	});
};




var getQueryParameters = function(properties, paramFields) {
	var queryParameters = [];
	for (var paramField in paramFields) {
		if (paramFields.hasOwnProperty(paramField)) {
			queryParameters.push(paramFields[paramField]);
		}
	}

	return queryParameters;
};

var setupQuery = function(queryString, paramFields) {
	return function(properties, fn) {

		//Form query string
		var inserts = getQueryParameters(properties,paramFields);
		var sql = mysql.format(queryString, inserts);

		//Check cache
		cache.get(sql, function(err, result) {
			if (err) {
				return fn(err);
			}

			if (!result) {
				//Cache miss
				connection.query(sql, function(err, results) {
					if (err) {
						return fn(err); //Callback with error message
					}

					//set cache value
					cache.set(sql, results);

					//callback with err and results
					fn(err, results);
				});
			} else {
				//Cache hit
				fn(undefined, result);
			}
		});
	};
};

var agt = require('./agt-queries.js')(setupQuery);
var cert = require('./cert-queries.js')(connection);
var chr = require('./chr-queries.js')(connection);
var crp = require('./crp-queries.js')(connection);
var dgm = require('./dgm-queries.js')(connection);
var inv = require('./inv-queries.js')(connection);
var map = require('./map-queries.js')(connection);

module.exports = function(_cache) {
	cache = _cache;

	return {
		connect: connect,

		agt: agt,
		cert: cert,
		chr: chr,
		crp: crp,
		dgm: dgm,
		inv: inv,
		map: map
	};
};
