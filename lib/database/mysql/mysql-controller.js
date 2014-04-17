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
			console.log("MySQL Connection Error: " + err);
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

	for (var i = 0; i < paramFields.length; i++) {
		var paramField = paramFields[i];

		if (properties.hasOwnProperty(paramField)) {
			queryParameters.push(properties[paramField]);
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
				console.log("MySQL Cache ERROR");
				fn(err);
			} else if (typeof result === "undefined") {
				console.log("MySQL Cache MISS");
				//Cache miss
				connection.query(sql, function(err, results) {
					if (err) {
						console.log("Error executing DB query: " + err);
						fn(err); //Callback with error message
					} else {
						cache.set(sql, results); //Set cache value
						fn(undefined, results);  //Callback with results
					}
				});
			} else {
				//Cache hit
				console.log("MySQL Cache HIT");
				fn(undefined, result);
			}
		});
	};
};

var agt = require('./agt-queries.js')(setupQuery);
var cert = require('./cert-queries.js')(setupQuery);
var chr = require('./chr-queries.js')(setupQuery);
var crp = require('./crp-queries.js')(setupQuery);
var dgm = require('./dgm-queries.js')(setupQuery);
var inv = require('./inv-queries.js')(setupQuery);
var map = require('./map-queries.js')(setupQuery);

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
