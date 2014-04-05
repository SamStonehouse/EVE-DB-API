/*jslint node: true, vars: true, white: true */
"use strict";

var db;

//Load settings and utility functions
var apiSettings = require('./api-settings');
var apiUtils = require('./api-utils');

//Load grouped route files
var chrApi = require('./api/chr-api');
var dgmApi = require('./api/dgm-api');
var invApi = require('./api/inv-api');
var mapApi = require('./api/map-api');

/* Setup routes in each group, passing the app object on which to attatch routes 
*  and the API response function 
*/
var setupRoutes = function(app) {
	chrApi.setupRoutes(app, apiUtils.apiResponse);
	dgmApi.setupRoutes(app, apiUtils.apiResponse);
	invApi.setupRoutes(app, apiUtils.apiResponse);
	mapApi.setupRoutes(app, apiUtils.apiResponse);
};

//Import - database
//Export - route setup function
module.exports = function(_db) {
	db = _db;

	chrApi = chrApi(db, apiUtils.maskInterpreter);
	dgmApi = dgmApi(db, apiUtils.maskInterpreter);
	invApi = invApi(db, apiUtils.maskInterpreter);
	mapApi = mapApi(db, apiUtils.maskInterpreter);

	return {
		setupRoutes: setupRoutes
	};
};
