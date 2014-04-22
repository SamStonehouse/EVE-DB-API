/*jslint node: true, vars: true, white: true */
"use strict";

var db;
var app;

//Load settings
var apiSettings = require('./api-settings');

var apiGroup = require('./api-group');

var apiMasks = require('./api-masks');


//Import - database, app
module.exports = function(_db, _app) {
	db = _db;
	app= _app;

	var APIGroup = apiGroup(db, app, apiMasks);

	//Reference route files
	var agtApiRoutes = require('./api-routes/agt-api');
	var certApiRoutes = require('./api-routes/cert-api');
	var chrApiRoutes = require('./api-routes/chr-api');
	// var crpApiRoutes = require('./api-routes/crp-api');
	// var dgmApiRoutes = require('./api-routes/dgm-api');
	// var invApiRoutes = require('./api-routes/inv-api');
	// var mapApiRoutes = require('./api-routes/map-api');
	
	var agtApiGroup = new APIGroup("/api", "/agt");
	agtApiRoutes(agtApiGroup);
};
