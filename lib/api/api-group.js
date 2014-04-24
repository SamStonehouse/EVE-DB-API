/*jslint node: true, vars: true, white: true */
"use strict";

//Module imports
var app;
var apiMasks;
var db;

var APIGroup = function(_apiPrefix, _groupPrefix) {
	this.apiPrefix = _apiPrefix;
	this.groupPrefix = _groupPrefix;
};

APIGroup.prototype.addroute = function(route, fn) {
	var fullRoute = this.apiPrefix + this.groupPrefix + route;

	app.get(fullRoute, function(req, res) {
		fn(req, db, apiMasks, function(err, results) {
			res.set('Content-Type', 'application/json');

			console.dir(results);

			if (err) {
				res.status(500).send({ error: true, message: 'Internal Server Error: ' + err });
			} else {
				if (results.length === 0) {
					res.status(404).send({ error: true, message: '404 Not Found'});
				} else {
					res.send({results: results});
				}
			}
		});
	});
};

module.exports = function(_db, _app, _apiMasks) {

	db = _db;
	app = _app;
	apiMasks = _apiMasks;

	return APIGroup;
};