/*jslint node: true, vars: true, white: true */
"use strict";

var db;

//Load settings and utility functions
var apiSettings = require('./api-settings');
var apiUtils = require('./api-utils');

//Load grouped route files
var agtApi = require('./api/agt-api');
var chrApi = require('./api/chr-api');
var dgmApi = require('./api/dgm-api');
var invApi = require('./api/inv-api');
var mapApi = require('./api/map-api');

/* Setup routes in each group, passing the app object on which to attatch routes 
*  and the API response function 
*/
var setupRoutes = function(app) {
	agtApi.setupRoutes(app, apiUtils.apiResponse);
	chrApi.setupRoutes(app, apiUtils.apiResponse);
	dgmApi.setupRoutes(app, apiUtils.apiResponse);
	invApi.setupRoutes(app, apiUtils.apiResponse);
	mapApi.setupRoutes(app, apiUtils.apiResponse);
};

//Import - database
//Export - route setup function
module.exports = function(_db) {
	db = _db;

	agtApi = agtApi(db.agt, apiUtils.maskInterpreter);
	chrApi = chrApi(db.chr, apiUtils.maskInterpreter);
	dgmApi = dgmApi(db.dgm, apiUtils.maskInterpreter);
	invApi = invApi(db.inv, apiUtils.maskInterpreter);
	mapApi = mapApi(db.map, apiUtils.maskInterpreter);

	return {
		setupRoutes: setupRoutes
	};
};
