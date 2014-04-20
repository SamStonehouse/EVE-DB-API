/*jslint node: true, vars: true, white: true */
"use strict";

var db;

//Load settings and utility functions
var apiSettings = require('./api-settings');

//Load grouped route files
var agtApi = require('./api/agt-api');
var certApi = require('./api/cert-api');
var chrApi = require('./api/chr-api');
var crpApi = require('./api/crp-api');
var dgmApi = require('./api/dgm-api');
var invApi = require('./api/inv-api');
var mapApi = require('./api/map-api');

var apiMiddleware = function(req, res, next) {
	console.log("Creating response function");

	res.locals.apiResponse = function(err, results) {
		console.log("API Response");
		res.set('Content-Type', 'application/json');

		if (err) {
			res.status(500).send({ error: true, message: 'Internal Server Error: ' + err });
		} else {
			if (results.length === 0) {
				res.status(404).send({ error: true, message: '404 Not Found'});
			} else {
				res.send({results: results});
			}
		}
	};

	next();
};


/* Setup routes in each group, passing the app object on which to attatch routes 
*  and the API response function 
*/
var setupRoutes = function(app) {
	app.use(apiMiddleware);

	agtApi.setupRoutes(app);
	certApi.setupRoutes(app);
	chrApi.setupRoutes(app);
	crpApi.setupRoutes(app);
	dgmApi.setupRoutes(app);
	invApi.setupRoutes(app);
	mapApi.setupRoutes(app);
};

//Import - database
//Export - route setup function
module.exports = function(_db) {
	db = _db;

	agtApi = agtApi(db.agt);
	certApi = certApi(db.cert);
	chrApi = chrApi(db.chr);
	crpApi = crpApi(db.crp);
	dgmApi = dgmApi(db.dgm);
	invApi = invApi(db.inv);
	mapApi = mapApi(db.map);

	return {
		setupRoutes: setupRoutes
	};
};
