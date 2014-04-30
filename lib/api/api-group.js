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

			//Set header data
			res.set('Content-Type', 'application/json');
			//res.set('Access-Control-Allow-Origin', '*');

			var responseObject = {};

			if (err) {
				responseObject.error = true;
				responseObject.message = 'Internal Server Error: ' + err;
				res.status(500);
			} else {
				if ((results instanceof Array) && (results.length === 0)) {
					responseObject.error = true;
					responseObject.message = '404 Not Found';
					res.status(404);
				} else {
					responseObject.result = results;
				}
			}

			var resultString = JSON.stringify(responseObject);
			
			var responseString = "";

			if (req.query.callback) {
				var callbackFunction = req.query.callback.replace(/[^a-zA-Z0-9_\.]/g, '');
				responseString = callbackFunction + "(" + resultString + ")";
			} else {
				responseString = responseObject;
			}

			res.send(responseString);
		});
	});
};

module.exports = function(_db, _app, _apiMasks) {

	db = _db;
	app = _app;
	apiMasks = _apiMasks;

	return APIGroup;
};